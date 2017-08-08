## 测试工具
siege
## 准备工作
- 下载siege并安装

## 并发数量
```
// Node服务
siege -c 10 -r 50 http://127.0.0.1:3000/

// Apache服务
siege -c 10 -r 50 http://127.0.0.1/
```
## siege参数
- -c n：模拟用户数量为n
- -r n：重复运行n次

## Node
```
//传输次数
Transactions:		         500 hits

//成功率
Availability:		      100.00 %

//总花费时间
Elapsed time:		       13.97 secsv

//传输数据总量
Data transferred:	        0.02 MB

//相响应次数
Response time:		        0.00 secs

//平均每秒完成处理数
Transaction rate:	       35.79 trans/sec

//平均每秒传输次数
Throughput:		        0.00 MB/sec

//实际最高并发连接数
Concurrency:		        0.09

//成功处理次数
Successful transactions:         500

//失败次数
Failed transactions:	           0

//单次传输所花最长时间
Longest transaction:	        0.05

//单次传输所花最短时间
Shortest transaction:	        0.00
```
## Apache
```
Transactions:		         500 hits
Availability:		      100.00 %
Elapsed time:		       14.79 secs
Data transferred:	        0.02 MB
Response time:		        0.00 secs
Transaction rate:	       33.81 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		        0.03
Successful transactions:         500
Failed transactions:	           0
Longest transaction:	        0.01
Shortest transaction:	        0.00
```