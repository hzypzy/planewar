//中飞机
function Enemy2(){
	Enemy.call(this)
	this.ele.removeClass().addClass('enemy2');

	this.speed=20;
	this.hp=3;
	this.score=30;
		this.dieImg = [		// 死亡图片
		"url(img/plain2_die1.png)",
		"url(img/plain2_die2.png)",
		"url(img/plain2_die3.png)",
		"url(img/plain2_die4.png)"
	]
}

//Enemy2.prototype=Enemy.prototype;
	Enemy2.prototype={}
for(var k in Enemy.prototype){
	Enemy2.prototype[k]=Enemy.prototype[k]
}
