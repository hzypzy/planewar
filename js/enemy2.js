//中飞机
function Enemy2(){
	Enemy.call(this)
	this.ele.removeClass().addClass('enemy2');

	this.speed=20;
	this.hp=3;
}

//Enemy2.prototype=Enemy.prototype;
	Enemy2.prototype={}
for(var k in Enemy.prototype){
	Enemy2.prototype[k]=Enemy.prototype[k]
}
