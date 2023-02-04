CONNECTION POOLING:


Pool allows you to paraglide ur requests but sets a upper limit on no of connections we create.

Reuse connections ::
When ever an req needs connection it leases (uses) and then leaven connection to pool. Then connection is ready for next req if it needs - as conn are already created no need to pay anything extra . 

When all conn are in use , if new req comes it needs to wait -> its adds up some latency but don’t fail .. we see sudden spikes in traffic .
