# Node并发测试
## 测试工具
Apache ab（osx自带）

## 准备工作
- ulimit -n 1000
- xxx

## 并发数量
1000
```
ab -n 1000 -c 1000 -r http://127.0.0.1:3000/
```
## Node使用cluster
```
This is ApacheBench, Version 2.3 <$Revision: 1757674 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /
Document Length:        11 bytes

Concurrency Level:      1000
Time taken for tests:   0.235 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      86000 bytes
HTML transferred:       11000 bytes
Requests per second:    4256.55 [#/sec] (mean)
Time per request:       234.932 [ms] (mean)
Time per request:       0.235 [ms] (mean, across all concurrent requests)
Transfer rate:          357.48 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       20   39  23.2     31      98
Processing:    81  112  15.5    107     155
Waiting:       80  109  16.4    102     155
Total:        131  150  15.9    146     197

Percentage of the requests served within a certain time (ms)
  50%    146
  66%    151
  75%    162
  80%    168
  90%    175
  95%    181
  98%    186
  99%    189
 100%    197 (longest request)
```