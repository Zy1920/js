//1 确定按钮绑定一个onsubmit事件
function additem(){
    //2. 获取用户输入的内容，根据输入框的id
    var inputTag=document.getElementById("input");
    var content=inputTag.value;
    //3.创建一个li元素
    var liTag=document.createElement("li");
    //4.将用户输入的内容赋值给li元素
    liTag.innerHTML=content;
    //5.获取ul标签
    var ulTag=document.getElementById("id_ul");
    //6.将li元素添加到ul中
    ulTag.appendChild(liTag);
    //7.清空输入框
    inputTag.value="";
}