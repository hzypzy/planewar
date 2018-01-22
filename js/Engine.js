var game={
	bullets:{len:0},
	//找到背景
	ele:$('#box'),
	//游戏背景滚动
	start:function(){
		var self=this;
		this.ele.animate({'background-position-y':'-100%'},5000,'linear',function(){
			self.ele.css({'background-position-y':'0%'})
			self.start()
		})
	},
	//创建自己的飞机
	createme:createMe,
	plane:{},
	//开火
	fire:function(){
	 var self=this
	 var times=setInterval(function(){
		
		var x = self.ele.position().left + self.ele.width()/2 - 3
		var y = self.ele.position().top - 18
		
		new Fire(x,y);//console.log(new Fire().she(objj,hao))
		
	},300)
	
},
	obj:{},
	//创建敌机
	enemy:function(){

	game.obj.len=0;
	setInterval(function(){
		len=Math.random();
		var a=len+=1;
		var b=len+=2;
		var c=len+=3;
		var i=Math.random();
		if(i<0.3){
			var e3=new Enemy3();
			game.obj[a]=e3;
			e3.fly(e3,a)
//			game.obj[a]=new Enemy3().fly(game.obj,a)
		}
		else if(i<0.6){
			var e2=new Enemy2();
			game.obj[b]=e2;
			e2.fly(e2,b)
//			game.obj[b]=new Enemy2().fly(game.obj,b);
		}
		else{
			var e1=new Enemy1();
			game.obj[c]=e1;
			e1.fly(e3,c);
//			game.obj[c]=new Enemy1().fly(game.obj,c);
		}
//					console.log(obj)
	},1000)
//	console.log(game.obj)
	}	
}
//自己的飞机
function createMe(){
	var a=new Me();
	game.plane=a;
	a.fly();
}