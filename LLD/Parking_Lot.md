Parking lot Design:

Requirements -
1. We are having 100 spots to park.
2. We have 1 floor, 1 entry and 1 exit.
3. Parking attendent to provide ticket and collect payment.
4. Admin who can add/remove floor, spots.
5. Recommendation for spots.
6. Display board to show total and available occupancy


ParkingSystem
--------------
id
address
totalSpace<Type, spots>
availableSpace<Type, spots>
floorId


Terminal (Interface)
-----------
id


Entry extends Terminal
-------------
getTicket()

Exit extends Terminal
-------------
scanTicket(id)
calculatePayment(ticketId)


ParkingSpot
------------
id
rate
vehicalType
isOccupied


ParkingTicket
--------------
ticketId
parkingSpotId
entryTime:
exitTime:
amount:
vehicleId:

DisplayBoard
-----------
totalSpots
availableSpot
floorId

Payment (Interface)
--------

Card extends Payment
----------------

Cash extends Payment
------------------


Rate
-------


User(Interface)
-----
id
password
isAuthorised

Admin extends User
------
addFloor()
addSpot()
removeFloor()
removeSpot()

ParkingAttendent extends User
-----------


Floor
--------
PriorityQueue<availableSpace> // have all spots empty , once filled remove and put it in below list.
List<ParkingSpot>  isOccupied


Recommendation
----------------
getRecommendedSpot()


Type(ENUM)
----
Car
Bike


===========================

Database Schema Design

ParkingSystem
id INT PRIMARY KEY
address VARCHAR
total_spaces INT
total_available_spaces INT
floor_id INT FOREIGN KEY REFERENCES Floor(id)

Terminal
id INT PRIMARY KEY
type ENUM('entry', 'exit')

ParkingSpot
id INT PRIMARY KEY
rate DECIMAL
vehicle_type ENUM('car', 'bike')
is_occupied BOOLEAN
floor_id INT FOREIGN KEY REFERENCES Floor(id)

ParkingTicket
ticket_id INT PRIMARY KEY
parking_spot_id INT FOREIGN KEY REFERENCES ParkingSpot(id)
entry_time TIMESTAMP
exit_time TIMESTAMP NULLABLE
amount DECIMAL NULLABLE
vehicle_id VARCHAR

DisplayBoard
id INT PRIMARY KEY
total_spots INT
available_spots INT
floor_id INT FOREIGN KEY REFERENCES Floor(id)

User
id INT PRIMARY KEY
password VARCHAR
role ENUM('admin', 'attendant')

Floor
id INT PRIMARY KEY
number INT

Rate
id INT PRIMARY KEY
vehicle_type ENUM('car', 'bike')
rate_per_hour DECIMAL

Payment
id INT PRIMARY KEY
type ENUM('card', 'cash')
amount DECIMAL
ticket_id INT FOREIGN KEY REFERENCES ParkingTicket(ticket_id)

Type
id INT PRIMARY KEY
name ENUM('car', 'bike')