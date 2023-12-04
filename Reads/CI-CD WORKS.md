CI-CD WORKS:


Once the user pushes a new commit to the mainline branch of the repository, the mainline branch job picks up the changes automatically and starts a build (The Jenkins scans for the new commit every 5 minutes and if finds a new commit been pushed, it starts building).
The Build pulls in both Contolled and Uncontrolled scripts and created stages accordingly, then starts running each stages.
Based on the flavour you selected for your repository, the artifact output may be a docker image pushed to the Deocker Registry or a npm module pushed to the npm Registry or a python module pushed to the Python Registry or calls the CD Release to get deployed to the environments.



Horizontal Scaling
Horizontal scaling means increasing the number of workers assigned to a task. At the pod level, this means increasing replicas (scaling out) when the service is loaded and decreasing replicas (scaling in) when the service is not busy or under less load.
Horizontal Autoscaling
If the service receives a large amount of similar traffic types, where the work of the service can be performed equally with each worker (pod), then horizontal auto scaling is a good choice.



Vertical Scaling
Pods which require more CPU time or memory available to accomplish their task may have those resources from the cluster increased (scaled up) when the service experiences more load, or have the resources available from the cluster decreased (scaled down) when the service is less utilized. 
Vertical Autoscaling
If the service requires more resources in response to client requests, and the client requests can't be split among more workers (pods), then vertical scaling is the correct choice. 




serverless: 
There certainly are servers involved in running your app; it’s just that you’re not managing these servers (your cloud provider takes care of that), and they’re not always running.
You only pay for what you use




HTTP - REQ -> RES (ONE WAY), once res is received , conn will be closed
WEB SOCKET - CLIENT SERVER COMMUNICATE - either of one should close the connection - EX: chats 
