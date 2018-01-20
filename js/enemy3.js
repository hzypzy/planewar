//打飞机
function Enemy3(){
	Enemy.call(this)
	this.ele.removeClass();
	this.ele.addClass('enemy3');
	this.speed=10;
	this.hp=10;
	this.dieImg = [		// 死亡图片
		"url(img/plain3_die1.png)",
		"url(img/plain3_die2.png)",
		"url(img/plain3_die3.png)",
		"url(img/plain3_die4.png)",
		"url(img/plain3_die5.png)",
		"url(img/plain3_die6.png)"
	]
}

Enemy3.prototype=Enemy2.prototype;