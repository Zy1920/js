//1 onload事件绑定方法
window.onload=function(){
    //2 根据tr获取每一行
    var trTags=document.getElementsByTagName("tr");
    //3 对trTags中的内容进行遍历
    for (let i = 0; i < trTags.length; i++) {
        //4 判断，如果是偶数行
       if(i%2==0){
           //5 修改当行的bgcolor属性
           trTags[i].style.backgroundColor="blue";
       }
       else{
           trTags[i].style.backgroundColor="green";
       }
    }
}