//创建敌机
function Enemy(){
	this.ele=$('<div></div>')
//	this.ele.addClass('enemy')
	this.ele.appendTo($('#box'))
	this.ele.css({top:-120,left:Math.random()*$('#box').width()-100})
	this.speed=50;
	this.hp=1;

}
Enemy.prototype.fly=function(obj,hao) {

	var self=this;
//	var hao=Math.random();
//	this.obj[hao]=this.ele;
	var t=100000/this.speed;
	this.ele.animate({top:$('#box').height()},t,'linear',function(){
		self.ele.remove();
		delete obj[hao]
//		console.log(obj)
		
	})
	
//	console.log(this.obj)
	return this.ele
}

