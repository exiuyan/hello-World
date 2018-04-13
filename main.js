	// var fs = require("fs");

// var data = fs.readFileSync('emoj.txt');

// console.log(data.toString());
// console.log("程序执行结束!");

// var fs = require("fs");

// fs.readFile('emoj.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("程序执行结束!");

//引入events模块

// var events=require("events");
// var eventEmitter=new events.EventEmitter();
// var connectHandler = function connected(){
//     console.log("链接成功");
//     // 触发 data_received 事件
//     eventEmitter.emit("data_received");
// }
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//     console.log('数据接收成功。');
// });
// // 触发 connection 事件
// eventEmitter.emit('connection');

// console.log("程序执行完毕。");


// var EventEmitter = require('events'); 
// var event = new EventEmitter(); 
// event.on('some_event', function() { 
//     console.log('some_event 事件触发'); 
// });
// event.on('some_event', function() { 
//     console.log('some_event 事件触发1'); 
// });
// setTimeout(function() { 
//     event.emit('some_event'); 
// }, 1000); 
// var bb= EventEmitter.listenerCount(event, "some_event");
// console.log(bb);

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('error',function(e){
// 	console.log("asd");
// });
// eventEmitter.emit('error');

// // 监听器 #1
// var listener1 = function listener1() {
//    console.log('监听器 listener1 执行。');
// }

// // 监听器 #2
// var listener2 = function listener2() {
//   console.log('监听器 listener2 执行。');
// }

// // 绑定 connection 事件，处理函数为 listener1 
// eventEmitter.addListener('connection', listener1);

// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);

// var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventEmitter);

// // 处理 connection 事件 
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log("listener1 不再受监听。");

// // 触发连接事件
// eventEmitter.emit('connection');

// eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// console.log("程序执行完毕。");
 
// const buf = Buffer.from('runoob', 'ascii');

// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));

// // 输出 cnVub29i
// console.log(buf.toString('utf8'));
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");

// console.log("写入字节数 : "+  len);

// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       
// console.log( buf.toString('ascii',0,5));   
// console.log( buf.toString('utf8',0,5));    
// console.log( buf.toString(undefined,0,5)); 

// var buf = Buffer.from('www.runoob.com');
// var json = buf.toJSON(buf);

// console.log(json);


// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// // console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//   return value && value.type === 'Buffer' ?
//     Buffer.from(value.data) :
//     value;
// });

// // 输出: <Buffer 01 02 03 04 05>
// console.log(copy);

// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('emoj.txt');

// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");


var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('emoj.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");