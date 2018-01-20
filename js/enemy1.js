//小飞机
function Enemy1(){
	Enemy.call(this)
	this.ele.removeClass();
	this.ele.addClass('enemy');
//	this.speed=10;
//	this.hp=1;
	this.dieImg = [		// 死亡图片
		"url(img/plain1_die1.png)",
		"url(img/plain1_die2.png)",
		"url(img/plain1_die3.png)"
	]
}

Enemy1.prototype=Enemy.prototype;