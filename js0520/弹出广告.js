var index=0;
var timer=null;
//1.设置定时器，延时4s调用显示画面方法
window.onload=function(){
    timer=setInterval("ad()",4000);
}
//2.定义显示页面的方法
function ad(){
    index++;
    //3.获取到id为ad的标签，修改其display属性；
    var adTag=document.getElementById("ad");
    adTag.style.display="block";
    //4.设置定时器，延时2s调用隐藏画面方法；
    setTimeout("hide()",2000);
    //6.判断广告出现的次数，如果已达到预定次数，取消定时器，用到clearInterval；
    if(index==3){
       clearInterval(timer);
    }
}

//5.隐藏画面的方法：获取到id为ad的标签，修改其display属性
function hide(){
    var adTag=document.getElementById("ad");
    adTag.style.display="none";
}