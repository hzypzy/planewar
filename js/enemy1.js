//小飞机
function Enemy1(){
	Enemy.call(this)
	this.ele.removeClass();
	this.ele.addClass('enemy');
//	this.speed=10;
//	this.hp=1;
}

Enemy1.prototype=Enemy.prototype;