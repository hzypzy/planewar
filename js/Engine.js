
//背景启动 gamestart
var bj={}
	bj={
	ele:$('#box'),
	start:function(){
		var self=this;
		this.ele.animate({'background-position-y':'-100%'},5000,'linear',function(){
			self.ele.css({'background-position-y':'0%'})
			self.start()
		})
	}
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
	
}


//让子弹飞
function Fire() {
	
	this.ele=$('<div></div>')
	this.ele.addClass('dadada')
	this.ele.appendTo($('#box'))
	
}
Fire.prototype.she=function(){
	var selfer=this;
	var left=parseFloat($('.me').css('left'));//console.log(left)
	var top=parseFloat($('.me').css('top'));//console.log(left)
	this.ele.css({'left':left,'top':top});//console.log(left)
	this.ele.animate({top:-$(document).height()},2000,function(){
		selfer.ele.remove()
	})
	
}



//左右按键

Me.prototype.move=function(){
	
	var self=this.ele
	$(document).keydown(function(e){
		var Time;
		var Timer;
		var i=e.keyCode;//console.log(i)
//		var j=parseFloat(self.css('left')) 
//		console.log(parseFloat(self.ele.css('left')))
			if(i==37){
				
//				var Timer;
//				clearInterval(Time)
				zuo(self);
//				$(document).off('keydown keyup')
//				self.ele.remove(animate)
//				self.ele.animate({left:0},5000)
//				Time();
			}
			if(i==39){
				
//				var Time;
//				clearInterval(Timer)
				you(self);
//				self.ele.css({left:x})
//				$(document).off('keydown keyup')
//				self.ele.animate({left:$(document).width()-100},5000)
			}
		})
			$(document).keyup(function(){
				console.log('hshs')
				$(document).off('keydown')
				
//				var x=parseFloat(self.ele.css('left')) ;
//				self.ele.css({left:x})
//				clearInterval(Time)
			})
}

function you(self){
			
	var j=parseFloat(self.css('left')) 
	console.log(j)
	Time=setInterval(function(){
		j++;
		self.css({'left':j})
	},30)
}
	function zuo(self){		
		var k=parseFloat(self.css('left')) 
//		console.log(j)
		Timer=setInterval(function(){
			k--;
			self.css({'left':k})
		},30)
	}
	
	
//创建敌机
function Enemy(){
	this.ele=$('<div></div>')
	this.ele.addClass('enemy')
	this.ele.appendTo($('#box'))
	this.ele.css({top:-120,left:Math.random()*$('#box').width()-100})
}
Enemy.prototype.fly=function() {
	var self=this;
	this.ele.animate({top:$('#box').height()},5000,'linear',function(){
		self.ele.remove()
	})
}
function Enemy2(){
	Enemy.call(this)
	this.ele.removeClass();
	this.ele.addClass('enemy2');
}

Enemy2.prototype=Enemy.prototype;

function Enemy3(){
	Enemy.call(this)
	this.ele.removeClass();
	this.ele.addClass('enemy3');
}

Enemy3.prototype=Enemy2.prototype;



