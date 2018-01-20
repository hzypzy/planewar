var objj={}
var hao=Math.random()

//背景启动 gamestart

//var obj={}
//obj.hao=null;
var game={
	bullets:{len:0},
//	enemys:{len:0},
	//找到背景
	ele:$('#box'),
	//游戏背景滚动
	start:function(){
		var self=this;
		this.ele.animate({'background-position-y':'-100%'},5000,'linear',function(){
			self.ele.css({'background-position-y':'0%'})
			self.start()
		})
	},
	//创建自己的飞机
	createme:createMe,
	//开火
	fire:ddd,
	obj:{},
	//创建敌机
	enemy:function(){

	game.obj.len=0;
	setInterval(function(){
		len=Math.random();
		var a=len+=1;
		var b=len+=2;
		var c=len+=3;
		var i=Math.random();
		if(i<0.3){
			game.obj[a]=new Enemy3().fly(game.obj,a)
		}
		else if(i<0.6){
			game.obj[b]=new Enemy2().fly(game.obj,b);
		}
		else{
			game.obj[c]=new Enemy1().fly(game.obj,c);
		}
//					console.log(obj)
	},1000)
//	console.log(game.obj)
}

	
	
}

//自己的飞机
function createMe(){
new Me().fly()

}
//创建自己的飞机~
function Me() {

	this.ele=$('<div></div>')
	this.ele.addClass('me')
	this.ele.appendTo($('#box'))
	
}

Me.prototype.fly=function() {
//	console.log('haha')
	var self=this;
	this.ele.mousedown(function(e){//console.log('haha')
		var xx=e.offsetX;//console.log(xx)
		var yy=e.offsetY;
		$(document).mousemove(function(e){
			var x=e.clientX-xx;
			var y=e.clientY-yy;
			if(x<0){
				x=0
			}else if(x>$('#box').width()+10-self.ele.width()){
				x=$('#box').width()+10-self.ele.width()
			}
			if(y<0){
				y=0
			}else if(y>$('#box').height()-self.ele.height()){
				y=$('#box').height()-self.ele.height()
			}
			self.ele.css({left:x,top:y})
		})
		$(document).mouseup(function(){
			$(document).off('mousemove mouseup')
		})

	})
	
	var selfs=this.ele
	$(document).keydown(function(e){
	var j=parseFloat(selfs.css('left'))
//	if(lock){return}else{
		
//		console.log('hha')
		var i=e.keyCode;//console.log(i)
//		var j=parseFloat(self.css('left')) 
//		console.log(parseFloat(self.ele.css('left')))
			if(i==37){
//				clearInterval(Time)
//				var lock=true;
//				var Timer;
//				clearInterval(Time)
				zuo(selfs,j);
//				$(document).off('keydown keyup')
//				self.ele.remove(animate)
//				self.ele.animate({left:0},5000)
//				Time();
			}
			else if(i==39){
//				clearInterval(Timer)
//				var lock=true;
//				var Time;
//				clearInterval(Timer)
				you(selfs,j);
//				self.ele.css({left:x})
//				$(document).off('keydown keyup')
//				self.ele.animate({left:$(document).width()-100},5000)
			}
		})
//		$(document).keyup(function(){
//			lock=false;
////			self.ele.stop()
////				console.log('hshs')
////				$(document).off('keydown')
////				
//////				var x=parseFloat(self.ele.css('left')) ;
//////				self.ele.css({left:x})
//				clearInterval(Time)
//				clearInterval(Timer)
//			})
	
	return this;
}
	//左右按键



function you(self,j){
//	if(lock){return}else{
//	var j=parseFloat(self.css('left')) 
//	console.log(j)
//	Time=setInterval(function(){
		j+=30;
		self.css({'left':j})
//	},30)
}
	function zuo(self,j){	
//		if(lock){return}else{
		var j=parseFloat(self.css('left')) 
//		console.log(j)
//		Timer=setInterval(function(){
			j-=30;
			self.css({'left':j})
//		},30)
	}


//发射子弹  获取页面中的子弹
function ddd(){
	 var self=this
	 var times=setInterval(function(){
		
		var x = self.ele.position().left + self.ele.width()/2 - 3
		var y = self.ele.position().top - 18
		
		new Fire(x,y);//console.log(new Fire().she(objj,hao))
		
	},500)
	
}

//让子弹飞
function Fire(x,y) {
	this.id="b"+game.bullets.len++
	game.bullets[this.id] = this
	this.ele=$('<div></div>')
	this.ele.addClass('dadada')
	this.ele.appendTo($('#box'))
	this.she()//开始射击
}
Fire.prototype.she=function(){
	var selfer=this;
	var left=parseFloat($('.me').css('left'));//console.log(left)
	var top=parseFloat($('.me').css('top'));//console.log(left)
	this.ele.css({'left':left,'top':top});//console.log(left)
	this.ele.animate({top:-$(document).height()},2000,function(){
		selfer.ele.remove()
		delete game.bullets[selfer.id]
//		console.log(obj)
	})
	return this.ele
//	console.log(obj)
}


// 子弹爆炸
Fire.prototype.boom = function() {
	
	var self = this			// 备份子弹对象
	
	var arr = [				// 子弹死亡变化的图片
		"url(img/die1.png)",
		"url(img/die2.png)"
	]
	var i = 0				// 图片变化编号
	
	self.ele.stop()			// 停止动画移动
	// 创建定时器
	var timers = setInterval(function() {
		self.ele.css({"background": arr[i++]})  // 改变背景图片
		self.ele.css({			// 改变宽高
			width: 40,
			height: 43
		})
		if (i >= arr.length) {		// 已经变到最后一张图片
			clearInterval(timers)	// 清除定时器
			
			self.ele.remove()		// 删除子弹
		}
	}, 100)
	
	
	
	
	// 删除全局对象中保存的子弹对象
	delete game.bullets[this.id]
}



//var Time;
//var Timer;
//var lock=false;






//敌机出动  获取页面当中的敌机






	
	







