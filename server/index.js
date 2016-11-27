var koa = require('koa');
var mount =require('koa-mount');
var router = require('koa-router');
var logger = require('koa-logger')
var render = require('koa-swig');
var app = koa();
 
app.context.render = render({
	root: './public/',
	autoescape: true,
	cache: false,
	ext: 'html'
});

//使用logger日志库
app.use(logger());
 
//首页校验函数
var validate = function *(next){
	console.log('validate');
	console.log(this.request);
    yield next;
};
 
// 首页处理函数
var index = function *(){
    yield* this.render('hello');
};
 
//路由处理，首页指定用index函数处理，但需要先经过validate函数校验
var APIv1 = new router();
APIv1.get('', validate, index);
app.use(mount('/', APIv1.middleware()));
 
// 监听3000端口
app.listen(3000);
