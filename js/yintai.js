/*banner轮播*/
$(".bannerlb").fadeOut(0).eq(0).fadeIn(0);
var num=0;
function move(type){
	if(type=="r"){
			num++;
		if(num>=$(".bannerlb").size()){
			num=0;
		}
	}else if(type=="l"){
			num--;
			if(num==-1){
				num=$(".bannerlb").size()-1;
			};
		}
	$(".bannerlb").fadeOut(300).eq(num).fadeIn(600);
	$(".btn-box>li").css("border-bottom","8px solid #211616").eq(num).css("border-bottom","8px solid #e5004f");
}
$(".btn-box>li").mouseover(function(){
	$(".bannerlb").stop(true,true);
		var index=$(this).index();
		$(".bannerlb").fadeOut(300).eq(index).fadeIn(600);
		$(".btn-box>li").css("border-bottom","8px solid #211616").eq(index).css("border-bottom","8px solid #e5004f");
})
var t=setInterval(function(){move("r")},3000);
$(".bannerbigbox").mouseover(function(){
	$(".leftanniubox").css("opacity","0.7");
	$(".rightanniubox").css("opacity","0.7");
	clearInterval(t);
})
$(".bannerbigbox").mouseout(function(){
	$(".leftanniubox").css("opacity","0");
	$(".rightanniubox").css("opacity","0");
	t=setInterval(function(){move("r")},3000);
})
$(".leftanniubox").click(function(){
	 move("l");
})
$(".rightanniubox").click(function(){
	 move("r");
})





/********************************************************/
/*选项卡1*/
$(".chongfu>li").mouseover(function(){
	var index=$(this).index();
	$(".mainleft-tu").css({"display":"none"}).eq(index).css({"display":"block"});
	$(".chongfu>li").css({"border-bottom-color":"#333333"}).eq(index).css({"border-bottom-color":"#e5004f"});
	$(".chongfu>li>a").css({"font-weight":"normal"}).eq(index).css({"font-weight":"bold"});
	$(".chongfu>li>span").css({"display":"none"}).eq(index).css({"display":"block"});
})





/********************************************************/
/*选项卡2*/
$(".xiaogu>li").mouseover(function(){
	var index=$(this).index();
	$(".banqu").css({"display":"none"}).eq(index).css({"display":"block"});
	$(".xiaogu>li").css({"border-bottom-color":"#333333"}).eq(index).css({"border-bottom-color":"#e5004f"});
	$(".xiaogu>li").css({"font-weight":"normal"}).eq(index).css({"font-weight":"bold"});
	$(".xiaogu>li>a").css({"color":"#666"}).eq(index).css({"color":"#333333"});
	$(".xiaogu>li>span").css({"display":"none"}).eq(index).css({"display":"block"});
})





/********************************************************/
/*两图轮播*/




$(".zq-middle-box").each(function(){
		var as=$(".zq-middle>a",$(this));
		var w=as.outerWidth();
		as.css("left",w).eq(0).css("left",0);
		var rbtn=$(".small-ranniu",$(this));
		var lbtn=$(".small-lanniu",$(this));
		var btnw=lbtn.outerWidth();
		var dots=$(".smallanniu>li",$(this));
		dots.eq(0).css("background-position","bottom");
		var now=0;
		var next=0;
		function mo(type){
			if(type=="r"){
				next++;
				if(next>=as.length){
					next=as.length-1;
					return false;
				}
				as.eq(now).animate({left:-w});
				as.eq(next).animate({left:0});
			}else if(type=="l"){
				next--;
				if(next<0){
					next=0;
					return false;
				}
				as.eq(now).animate({left:w});
				as.eq(next).animate({left:0});	
			}
			now=next;
			dots.css("background-position","top").eq(next).css("background-position","bottom");

		}
		$(this).hover(function(){
			lbtn.stop(true,true);
			rbtn.stop(true,true);
			lbtn.animate({left:0},200)
			rbtn.animate({right:0},200)
		},function(){
			lbtn.stop(true,true);
			rbtn.stop(true,true);
			lbtn.animate({left:-btnw},200)
			rbtn.animate({right:-btnw},200)
		})
		rbtn.click(function(){
			mo("r");
		})
		lbtn.click(function(){
			mo("l");
		})
		dots.click(function(){
			var index=$(this).index();
			if(index>now){
				mo("r");
			}else if(index<now){
				mo("l");
			}
		})
		
	})

/********************************************************/
/*楼层跳转*/
var cedao=$(".cedao>a").not(".cedao>a:last");
$(window).scroll(function(){
	var tops=$(window).scrollTop();
	if(tops>=750){
		$(".cedao").css({"display":"block"});
	}else{
		$(".cedao").css({"display":"none"});
	}
	$(".zq-bigbox").each(function(index,nowobj){
		if($(nowobj).position().top<=tops+130){
			cedao.removeClass("active").eq(index).addClass("active");
		}
	})
	/*按需加载*/
	var ch=document.documentElement.clientHeight;
	for (var i = 0; i < $(".zq-bigbox").size(); i++) {
		if($(".zq-bigbox")[i].offsetTop<=tops+ch){
			var imgs=$("img",$(".zq-bigbox")[i]);
			for (var j = 0; j < imgs.length; j++) {
				var src=imgs[j].getAttribute("data-src");
				imgs[j].src=src;
			};
		}
	};	
})

cedao.click(function(){
	var num=$(this).index();
	var cc=document.body.scrollTop?document.body:document.documentElement;
	$(this).removeClass("active").eq(num).addClass("active");
	animate(cc,{scrollTop:$(".zq-bigbox")[num].offsetTop},300,Tween.Linear);
})
/*返回顶部*/
$(".floor_top").click(function(){
	var dd=document.body.scrollTop?document.body:document.documentElement;
	animate(dd,{scrollTop:0},300,Tween.Linear)
})




/********************************************************/
/*线框动效*/
$(".father").hover(function(){
	var w=$(this).outerWidth();
	var h=$(this).outerHeight();
	$(".border_left").stop(true,true);
	$(".border_top").stop(true,true);
	$(".border_right").stop(true,true);
	$(".border_buttom").stop(true,true);
	$(".border_left",$(this)).animate({height:h});
	$(".border_top",$(this)).animate({width:w});
	$(".border_right",$(this)).animate({height:h});
	$(".border_buttom",$(this)).animate({width:w});
},function(){
	$(".border_left").stop(true,true);
	$(".border_top").stop(true,true);
	$(".border_right").stop(true,true);
	$(".border_buttom").stop(true,true);
	$(".border_left",$(this)).animate({height:0});
	$(".border_top",$(this)).animate({width:0});
	$(".border_right",$(this)).animate({height:0});
	$(".border_buttom",$(this)).animate({width:0});
})









/********************************************************/
/*媒体轮播*/
$(".jiantoubox").click(function(e){
     var ev=e||window.event;
     if(ev.preventDefault){
          ev.preventDefault()
     }else{
          ev.returnValue=false;
     };
     var evafa=$(this).prev(".pm-box");
     $(".pm-leftbox>div:first",$(evafa)).before($(".pm-leftbox>div:last",$(evafa)));
     $(".pm-leftbox",$(evafa)).stop(true,true); 
     $(".pm-leftbox",$(evafa)).animate({"left":"-170px"},0);  
     $(".pm-leftbox",$(evafa)).animate({"left":"0px"},1000);  
});
$(".jiantourbox").click(function(e){
     var ev=e||window.event;
      if(ev.preventDefault){
          ev.preventDefault()
     }else{
          ev.returnValue=false;
     };
     var evafa=$($(this).prev("a")).prev(".pm-box");
     $(".pm-leftbox",$(evafa)).stop(true,true); 
     $(".pm-leftbox",$(evafa)).animate({"left":"-170px"},1000,function(){
     $(".pm-leftbox",$(evafa)).css({"left":"0px"});
     $(".pm-leftbox>div:last",$(evafa)).after($(".pm-leftbox>div:first",$(evafa))); 
     });
});



/********************************************************/
/*获取焦点*/
var srk=$('.textbox');
for(var i=0;i<srk.length;i++){
	srk[i].onfocus=function(){
		if(this.value=="百搭T恤 女神衣橱必备"){
			this.value="";
		}
	}
	srk[i].onblur=function(){
		if(this.value==""){
			this.value="百搭T恤 女神衣橱必备";
		}
	}
}