
//创建自己的飞机~
function Me() {

	this.ele=$('<div></div>')
	this.ele.addClass('me')
	this.ele.appendTo($('#box'))
	this.dieImg = [		// 死亡图片
		"url(img/me_die1.png)",
		"url(img/me_die2.png)",
		"url(img/me_die3.png)",
		"url(img/me_die4.png)"
	]
	var self=this;
	this.boom=function(){// 创建定时器
	var i=0;
	var timers = setInterval(function() {
		self.ele.stop()
		
		self.ele.css({"background": self.dieImg[i++]})  // 改变背景图片
			if (i >= self.dieImg.length) {		// 已经变到最后一张图片
				clearInterval(timers)	// 清除定时器
				
				self.ele.remove()		// 删除
//				delete game.plane;
//				game.fire().stop()
alert('GameOver')
			}
		}, 100)
	}
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
		var i=e.keyCode;
			if(i==37){
				zuo(selfs,j);
			}
			else if(i==39){
				you(selfs,j);
			}
		})

	return this;
}
	//左右按键



function you(self,j){
		j+=30;
		self.css({'left':j})
}
	function zuo(self,j){	

		var j=parseFloat(self.css('left')) 
			j-=30;
			self.css({'left':j})

	}


//发射子弹  获取页面中的子弹


//让子弹飞
function Fire(x,y) {
	this.id="b"+game.bullets.len++;//console.log(len)
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