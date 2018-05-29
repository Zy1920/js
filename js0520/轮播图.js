var index=1;
//1.页面加载时设置定时方法，其中第一个参数是一个函数，第二个参数是延时的时间
window.onload=function(){
    setInterval("pic()",3000);
}
function pic(){ 
    //2.获取轮播图的src地址
    var imgTag=document.getElementById("imgId");
    imgTag.src="img/"+index+".jpg";
    index++;
    if(index==4){
        index=1;
    }
}