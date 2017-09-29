Work Log

Goals:
* hit 16.7k responses a second (1M per minute )

1. Forked Repo
	* followed setup instructions to install dependency
	* started server and tested sample data using postman
	* tested using apachebench
		- `ab -p sample_data.json -T application/json -n 10000 -c 10 http://127.0.0.1:3000/api/usages` 
			tried with higher numbers and crashed app
		- 5.569 Seconds to run, 0.557 ms per request

2. Removed console.log
	* tested using apachebench
		- `ab -p sample_data.json -T application/json -n 10000 -c 10 http://127.0.0.1:3000/api/usages` 
			tried with higher numbers and crashed app
		- 4.484 Seconds to run, 0.448 ms per request

3. Added Mongoose support
	* Redis would have been faster, but with the way the data is likely to be used mongoose seemed like the better choice
	* tested using ab, results similar to before but able to store more records without running out of data.

4. Added Cluser
	* used 4 cpus to test on laptop which is also running mongo
		- tested using ab
		- 2.265 seconds to run, 0.227 ms per request
	* tried with 6 cpus
		- 1.964 seconds, .196 ms per request

5. Reccomended changes to achieve better results:
	* Run on something better than my laptop. With a simple example like this, horizontal scaling to add more cores to the cluster would be the best choice. Running across multiple instances with a load balancer would greatly increase performance. 
	* Run Database on separate server
	* Could run database clustered to improve performance of database to avoid bottleneck.
	* If the expected usages numbers are not continuous and are sporadic in spikes, could use a queue to write to database
	* With such a simple example, it would be trivial to write the function as an AWS lambda function which would instantly scale as needed, limited by the database throughput