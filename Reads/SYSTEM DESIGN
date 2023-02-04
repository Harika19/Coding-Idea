SYSTEM DESIGN :


Recommended :

File storage - > generally use Amazon S3 
S3 + CDN - to distribute same images geographically in different locations . 

Search (text) engine - Elastic search  or Solar (they are build on LUCIN)


Time series ( metrics handling system ) -> Open TSDB(time series database) -> it consists of  Time Series Daemon (TSD) -Each TSD uses the open source database HBase to store and retrieve info..


A CDN is a globally distributed set of servers that caches content such as videos. When a user requests your content, the CDN routes the request to the edge location that provides the lowest latency. If your content is already cached in that edge location, the CDN delivers it immediately.
Amazon's CDN service is called CloudFront.



ACID: ( RDBMS )

ATOMICITY -> either whole transaction should pass or we should revert back if it fails
CONSISTENCY - follow the constraints ( ex - money cannot be -)
ISOLATION - concurrent execution safe (ex- 2 persons trying to take money at same time -> so sequentially it should perform withdrawl)
DURABILITY - id db crashes also data should be there .


DB:

STRUCTUTED DATA :
1. ACID GUARANTEE THEN GO FOR RDBMS ( transaction example -> one should get debited and other should get credited -> both are mandatory so..)
2. RDBMS - > MYSQL, POSTGRESS,ORCALE, SQL SERVER



NON STRUCTURED DATA:
1. ++ DATA TYPES , ++ QUERIES -> DOCUMENT DB -> MONGO DB , COUCH DB ( example -> e-commerce website , where u will need to tag lot of properties to single product)
2. INCREASING DATA , FINITE QUERIES -> COULUMNAR DB -> CASSANDRA , HBASE ( Example -> UBER -> day by day drivers are increasing but query will be fine nearby drivers in location )
3. 



URL SHORTENING SYSTEM:

Db - CASSANDRA/ mysql with sharding + indexing 

Token service - distributed across diff locations 

Main service - take different set of numbers - generate unique code for each req and no bombarding with other main service replica.



BOOKING SYSTEM :

MYSQL, KAfKA , REDIS,  HADOOP CLUSTER(SPARK STREAMING CONSUMER) -> FOR METRICS.., U CAN USE ML AND RUN A MODEL FOR CHANGING PRICE OF HOTEL ACCORDINGLY BASED ON SUPPLY AND DEMAND.
Monitoring tool - GRAPHINA 

REDIS - expiry call back - s once after getting success confirmation then delete entry from reds , if not then send call back stating transaction is expired 



NOTIFICATION SYSTEM :
IT SHOULD BE BUILD AS SAAS - NEED TO KNOW WHO IS SENDING WHAT NOTIFICATIONS TO RATE-LIMIT IT
 IMPLEMENT RAYTE LIMITING ( USER SHOULDN’T GET MORE THAN 5 NOTIFICATIONS PER DAY )

OLA DESIGN:

INITIALLY STORE LIVE INFO IN MYSQL AND ONCE TRIP IIS DONE DELETE FROM MYSQL AND STORE IT IN CASSANDRA
WEB SOCKET HANDLER
MAP SERVICE - FOR FINDING IN WHICH SEGMENT DRIVERS ARE THERE.




LEARN:

SAAS PRODUCT 


CAP THEOREM  - ALWAYS AVAILABLE (CASSANDRA, DYNAMO), CONSISTENT( MONGO,REDIS)
Consistency -  all nodes see the same data simultaneously. If we perform a read operation on a consistent system, it should return the value of the most recent write operation. The read should cause all nodes to return the same data
Availability - system remains operational all of the time
Partition tolerance - it means that there’s a break in communication between nodes. If a system is partition-tolerant, the system does not fail, regardless of whether messages are dropped or delayed between nodes within the system. To have partition tolerance, the system must replicate records across combinations of nodes and networks.


WEB SOCKET HANDLER




TWITTER:
TF-IDF - HOW MANY TIMES A PARTICULAR WORD CAME IN DOC



LRU CACHE:

const LRU = require('lru-cache');
const lruCache = new LRU({ maxAge: 36e5, max: 500 });  


max
The maximum number of items that remain in the cache


