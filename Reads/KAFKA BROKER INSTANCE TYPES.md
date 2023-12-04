Broker instance type :


https://docs.aws.amazon.com/msk/latest/developerguide/bestpractices.html#partitions-per-broker

https://docs.aws.amazon.com/msk/latest/developerguide/msk-create-cluster.html#broker-instance-types


Pricing - https://aws.amazon.com/msk/pricing/



M5 brokers have higher baseline throughput performance than T3 brokers and are recommended for production workloads. 
M5 brokers can also have more partitions per broker than T3 brokers.


T3 brokers have the ability to use CPU credits to temporarily burst performance. Use T3 brokers for low-cost development, 
if you are testing small to medium streaming workloads, or if you have low-throughput streaming workloads that experience temporary spikes in throughput



1 $ = 82.93 Indian Rupee

PER HOUR :

kafka.t3.small - $0.0456 - 3.76 Rs

kafka.m5.large - $0.21 - 17.30 Rs
