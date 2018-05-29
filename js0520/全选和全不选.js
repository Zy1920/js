//1.onclick方法已绑定selectAll(this)方法
function selectAll(obj) {
    //2.获取itemSelect类
    var items=document.getElementsByClassName("itemSelect");
    //3.遍历items中的元素
    for (let i = 0; i < items.length; i++) {
        //4.如果当前checkbox的选中状态为true，将其他td元素中的checkbox状态全部设置为true；
        if(obj.checked==true){
            items[i].checked=true;
        }
        else{
            items[i].checked=false;
        }
    }
}