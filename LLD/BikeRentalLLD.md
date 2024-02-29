Requirements:

1. Keep track of inventory
2. Keep track of customers
3. Keep track of stock items
4. 2 products - Bikes and Scooters
5. Bikes sizes - Small, Medium, Large - fits small, medium and large humans
6. Scooters - electric motor , gas motor styles
7. Keep track of scooters seperately


=================================================================

enum BikeType { SMALL, MEDIUM, LARGE }
enum ScooterType { GAS_MOTOR, ELECTRIC_MOTOR }
enum VehicleStatus { AVAILABLE, RENTED, DAMAGED, RESERVED }



abstract class Vehicle {
    String vehicleId;
    VehicleStatus status;
    double pricePerHour;
}


class Bike extends Vehicle {
    BikeType size;
}

class Scooter extends Vehicle {
    ScooterType type;
}

class RentalRecord {
    InventoryManager inventoryManager;

    String rentalId;
    String vehicleId;
    String userId;
    LocalDateTime rentalTime;
    LocalDateTime returnTime;
    double totalCharge;
}

abstarct class Person{
    String customerId;
    String name;    
}

class Customer extends Person {
    double balance; 
}

interface BikeRentalManagerInterface { // Interface segregation
    Vehicle rentVehicle(String vehicleId, String customerId);
    void returnVehicle(String rentalId);
}


class BikeRentalManager implements BikeRentalManagerInterface {
    // List<Bike> bikes;
    // List<Scooter> scooters;

    InventoryManager inventoryManager;
    
    List<RentalRecord> rentalRecords;
    Map<String, Customer> customers;
    void addCustomer(Customer customer);
    void removeVehicle(String vehicleId); // Mark as damaged
    void addVehicle(Vehicle vehicle);
    void rentScooter(User user, Scooter scooter);
    Map<ScooterType, Integer> getAvailableScooters();
    Map<BikeType, Integer> getAvailableBikes();
    List<RentalRecord> getOverviewOfRentedItems();
    Map<User, List<Bike>> getOverviewOfBikeRentedByUsers();
    Map<User, List<Scooter>> getOverviewOfScooterRentedByUsers();
}

                                     
// Uses Strategy Pattern to allow for different payment algorithms

class PaymentInfo {
    String paymentId;
    rental_id
    double amount;
    LocalDateTime paymentDate;
    PaymentStatus paymentStatus; // Enum for payment status
    PaymentType paymentType; // Enum for payment type
    boolean processPayment(PaymentInfo paymentInfo);
}

// Singleton Pattern for Inventory Manager

class InventoryManager {
    private Map<VehicleId, Vehicle> vehicleMap; // Source of truth
    private Map<BikeType, List<Vehicle>> bikeInventory; 
    private Map<ScooterType, List<Vehicle>> scooterInventory;


    public void addVehicle(Vehicle vehicle) {
        vehicleMap.put(vehicle.vehcileId, vehicle);

        if(vehicle instanceof Bike) {
            bikeInventory.put(vehicle.bikeType, vehicle);
        } else {
            scooterInventory.put(vehcile.ScooterType, vehcile);
        }      
    }

    public int getInventory(VehicleId vehicleId) {

    }

    public int getInventory(Vehicle vehicle, BikeType bikeType) {
        return bikeInventory.get(bikeType).size();
    }
    
    public int getInventory(Vehicle vehicle, ScooterType scooter) {
        return scooterInventory.get(scooter).size();
    }
}


/*

BikeType and ScooterType 
    - no reltionship
    - issue we face are at
        - Rentalrecord
        - Inventory

    Solution: Need to figure out some way to get the type of both   
        - Inventory 
            - Map<vehicleId, Vehicle>
        
        - 

 */

=====================================================================================================

DB DESIGN:

Vehicle Type Table:
vehicle_type
subtype
vehicle_type_id


Vehicles Table:

CREATE TABLE Vehicles (
    vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
    <!-- vehicle_type VARCHAR(255) NOT NULL,
    subtype VARCHAR(255) NOT NULL, -- 'SMALL', 'MEDIUM', 'LARGE' for bikes, 'GAS_MOTOR', 'ELECTRIC_MOTOR' for scooters -->
    status VARCHAR(255) NOT NULL, -- 'AVAILABLE', 'RENTED', 'DAMAGED', 'RESERVED'
    price_per_hour DECIMAL(10, 2) NOT NULL
    vehicle_type_id Foreign key
);

Customers Table:

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) DEFAULT 0.00 -- Assuming balance is updated with each rental and payment
);


Rentals Table

CREATE TABLE Rentals (
    rental_id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_id INT NOT NULL,
    customer_id INT NOT NULL,
    rental_time DATETIME NOT NULL,
    return_time DATETIME,
    total_charge DECIMAL(10, 2) NOT NULL,
    is_paid BOOLEAN DEFAULT FALSE, -- New column to track payment status
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    rental_id INT NOT NULL,
    amount_paid DECIMAL(10, 2) NOT NULL,
    payment_date DATETIME NOT NULL,
    payment_type VARCHAR(255),  -- Optional, can include types like CASH, CREDIT_CARD, etc.
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);

=====================================================================================================

DB QUERIES:

How many small bikes do you have?
SELECT COUNT(*) AS small_bikes_count
FROM Vehicles v
JOIN VehicleType vt ON v.vehicle_type_id = vt.id
WHERE vt.vehicle_type = 'Bike' AND vt.subtype = 'SMALL';




What products are there for rent?
SELECT v.vehicle_id, vt.vehicle_type, vt.subtype
FROM Vehicles v
JOIN VehicleType vt ON v.vehicle_type_id = vt.id
WHERE v.status = 'AVAILABLE';




Does this customer have a balance (owe us money)? // NEED TO UPDATE
SELECT c.customer_id, SUM(r.total_charge) - IFNULL(SUM(p.amount_paid), 0) AS balance_owed
FROM Customers c
JOIN Rentals r ON c.customer_id = r.customer_id
LEFT JOIN Payments p ON r.rental_id = p.rental_id
WHERE c.customer_id = 'customer_id' AND r.is_paid = FALSE
GROUP BY c.customer_id
HAVING balance_owed > 0;


What products are rented?
SELECT v.vehicle_id, vt.vehicle_type, vt.subtype
FROM Rentals r
JOIN Vehicles v ON r.vehicle_id = v.vehicle_id
JOIN VehicleType vt ON v.vehicle_type_id = vt.id
WHERE r.return_time IS NULL;




Are there products that are overdue for return? Who has them?
SELECT v.vehicle_id, vt.vehicle_type, vt.subtype, r.customer_id
FROM Rentals r
JOIN Vehicles v ON r.vehicle_id = v.vehicle_id
JOIN VehicleType vt ON v.vehicle_type_id = vt.id
WHERE r.return_time < NOW() AND r.is_paid = FALSE;



What products has a customer rented?
SELECT v.vehicle_id, vt.vehicle_type, vt.subtype
FROM Rentals r
JOIN Vehicles v ON r.vehicle_id = v.vehicle_id
JOIN VehicleType vt ON v.vehicle_type_id = vt.id
WHERE r.customer_id = 'customer_id';


=====================================================================================================

Design Patterns:

1. Factory Pattern: for createVehicle -> class BikeScooterFactory implements VehicleFactory 
2. Strategy Pattern: For calculating the rental price, you can have different strategies based on the vehicle type, rental duration, and so on.
3. Singleton Pattern:  (like a central inventory management system), use the singleton pattern
4. Observer Pattern: observer pattern can be used for notification systems. notify the shop manager when a vehicle is rented or returned, or when inventory is low.

=====================================================================================================

1. Add a Product to Inventory

POST - http://example.com/api/inventory/vehicles

Request:
{
    "vehicleType": "Bike",
    "subtype": "SMALL",
    "status": "AVAILABLE",
    "pricePerHour": 15.00
}
Response:
Success:
{
    "statusCode": 201,
    "message": "Vehicle added successfully",
    "vehicleId": "veh12345"
}
Failure:
{
    "statusCode": 400,
    "message": "Invalid vehicle details"
}
2. Add a Customer Endpoint to add a new customer to the system.

POST - http://example.com/api/customers

Request:
{
    "name": "John Doe",
    "balance": 0.00
}

Response:
Success:
{
    "statusCode": 201,
    "message": "Customer added successfully",
    "customerId": "cust12345"
}
Failure:
{
    "statusCode": 400,
    "message": "Invalid customer data"
}


3. Remove a Product from Inventory Endpoint to remove a vehicle from the inventory.

DELETE - http://example.com/api/inventory/vehicles/{vehicleId}

Response:
Success:
{
    "statusCode": 200,
    "message": "Vehicle removed successfully"
}
Failure:
{
    "statusCode": 404,
    "message": "Vehicle not found"
}


4. Record that a Product is Rented to a Customer Endpoint to record a new rental transaction.

POST - http://example.com/api/rentals

Request:
{
    "vehicleId": "veh12345",
    "customerId": "cust12345",
    "rentalTime": "2024-01-04T10:00:00"
}

Response:
Success:
{
    "statusCode": 201,
    "message": "Rental recorded successfully",
    "rentalId": "rent12345"
}
Failure:
{
    "statusCode": 400,
    "message": "Invalid rental details"
}

5. Create a Charge for the Customer Endpoint to create a charge for a customer's rental.

POST - http://example.com/api/customers/{customerId}/charge

Request:
{
    "rentalId": "rent12345",
    "amount": 30.00
}
Response:
Success:
{
    "statusCode": 201,
    "message": "Charge created successfully",
    "paymentId": "pay12345"
}

Failure:
{
    "statusCode": 400,
    "message": "Invalid payment details"
}
