//打飞机
function Enemy3(){
	Enemy.call(this)
	this.ele.removeClass();
	this.ele.addClass('enemy3');
	this.speed=10;
	this.hp=10;
}

Enemy3.prototype=Enemy2.prototype;