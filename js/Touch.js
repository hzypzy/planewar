
var tE = {
	
	
	isTouchEnemy: function() {  // 子弹是否打中敌机
		
		//   gameEngine.bullets 全局变量中保存了所有子弹
		// 1. 得到所有子弹
		var bullets = game.bullets;
		// 2. 所有敌机
		var enemys = game.obj;
		// 3、获取自己的飞机
		var myself=game.plane;
//		console.log(bullets)
		// 3. 遍历所有子弹（遍历对象）
		for (var k in bullets) {
			if (k == "len") {  	// 排除len
				continue		// 跳过本次循环
			}
			
			var b = bullets[k]	// 1颗子弹
			
			// 4. 遍历所有敌机
			for (var j in enemys) {
				if (j == "len") {  	// 排除len
					continue		// 跳过本次循环
				}
				
				var e = enemys[j]	// 1架敌机
//				console.log(e)
				// 判断 子弹元素 和 敌机元素 是否碰撞
				if (isTouch(b.ele, e.ele)) {
//					console.log("碰撞了")

					e.looseBlood()	// 让敌机掉血
					
					b.boom()		// 子弹爆炸
				}
				if(isTouch(myself.ele,e.ele)){
					myself.boom()
				}
			}
			
		}
		
		
	},
	
	touchListen: function() {  // 监听是否碰撞
		var self = this
		// 1. 定时器，不断检测
		setInterval(function() {
			self.isTouchEnemy()
		}, 30)
		
	}
}