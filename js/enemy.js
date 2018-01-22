//创建敌机
function Enemy(){
	
	this.ele=$('<div></div>')
	this.ele.appendTo($('#box'))
	this.ele.css({top:-120,left:Math.random()*$('#box').width()-100})
	this.speed=50;
	this.hp=1;
	this.score=50;
}
Enemy.prototype.fly=function(obj,hao) {

	var self=this;
	var t=100000/this.speed;
	this.ele.animate({top:$('#box').height()},t,'linear',function(){
		self.ele.remove();
		delete game.obj[hao]
		
	})
	return this.ele
}
// 让敌机掉血的方法
Enemy.prototype.looseBlood = function() {
	var self = this		// 备份
	
	this.hp--	// 自己血量减1
	
	if (this.hp <= 0) {		// 血量没了
		
		// 加分板加分
		//  this.score 当前敌机死亡的分数
		score.addScore(this.score)
		
		
		var i = 0			// 图片变化下标
		var timer = setInterval(function() {  // 图片变化定时器
			//  self.dieImg 自己的死亡图片数组
			self.ele.css("background", self.dieImg[i++])
			if (i >= self.dieImg.length) {	// 已经到最后一张图片了
				clearInterval(timer)		// 清除定时器
				self.ele.remove() 			// 删除自己的元素
			}
		}, 100)
		
		
		// 删除全局保存的敌机对象
		delete game.obj[this.hao]
	}
}

