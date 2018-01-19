var objj={}
var hao=Math.random()

//背景启动 gamestart

//var obj={}
//obj.hao=null;
var game={
//	obj:{
//		hao:null
//	},
	ele:$('#box'),
	start:function(){
		var self=this;
		this.ele.animate({'background-position-y':'-100%'},5000,'linear',function(){
			self.ele.css({'background-position-y':'0%'})
			self.start()
		})
	},
	createme:createMe,
	fire:ddd,
	enemy:rua
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
	objj.hao=null
//	objj.hao;
	 var times=setInterval(function(){
		hao=Math.random();
		objj[hao]=new Fire().she(objj,hao);//console.log(new Fire().she(objj,hao))
	},100)
	
}

//让子弹飞
function Fire() {
	
	this.ele=$('<div></div>')
	this.ele.addClass('dadada')
	this.ele.appendTo($('#box'))
	
}
Fire.prototype.she=function(obj,hao){
	var selfer=this;
	var left=parseFloat($('.me').css('left'));//console.log(left)
	var top=parseFloat($('.me').css('top'));//console.log(left)
	this.ele.css({'left':left,'top':top});//console.log(left)
	this.ele.animate({top:-$(document).height()},2000,function(){
		selfer.ele.remove()
		delete obj[hao]
//		console.log(obj)
	})
	return this.ele
//	console.log(obj)
}






//var Time;
//var Timer;
//var lock=false;






//敌机出动  获取页面当中的敌机
function rua(){
var obj={}
	obj.hao=null;
	setInterval(function(){
		hao=Math.random();
		var a=hao+=1;
		var b=hao+=2;
		var c=hao+=3;
		var i=Math.random();
		if(i<0.3){
			obj[a]=new Enemy3().fly(obj,a)
		}
		else if(i<0.6){
			obj[b]=new Enemy2().fly(obj,b);
		}
		else{
			obj[c]=new Enemy1().fly(obj,c);
		}
//					console.log(obj)
	},1000)
	
}






	
	







