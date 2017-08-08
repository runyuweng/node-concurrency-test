# Node并发测试
## 测试工具
Apache ab（osx自带）

## 准备工作
- ulimit -n 1000 //设置当前最大可打开文件数
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

## Apache
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


Server Software:        Apache/2.4.25
Server Hostname:        127.0.0.1
Server Port:            80

Document Path:          /
Document Length:        45 bytes

Concurrency Level:      1000
Time taken for tests:   4.277 seconds
Complete requests:      1000
Failed requests:        1054
   (Connect: 0, Receive: 527, Length: 527, Exceptions: 0)
Total transferred:      166496 bytes
HTML transferred:       21285 bytes
Requests per second:    233.80 [#/sec] (mean)
Time per request:       4277.072 [ms] (mean)
Time per request:       4.277 [ms] (mean, across all concurrent requests)
Transfer rate:          38.02 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   46  49.4     22     107
Processing:     0  972 1434.3     43    4160
Waiting:        0   14  16.3      0      45
Total:          1 1018 1462.0     53    4266

Percentage of the requests served within a certain time (ms)
  50%     53
  66%   1446
  75%   1448
  80%   1449
  90%   4261
  95%   4264
  98%   4265
  99%   4266
 100%   4266 (longest request)
```