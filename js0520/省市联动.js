//1.将pro的下拉列表绑定onchange事件，函数中传入的即是当前的对象
function selCity(obj){
    //2.获取city的下拉列表 
   var cityTag=document.getElementById("id_city");
   //3.清空city的下拉列表，默认状态是"<option>-请选择-</option>"
   cityTag.innerHTML="<option>-请选择-</option>";
   //4.根据pro的下拉列表中的值，将对应角标的数组赋值给cityarr
   var cityArr=arr[obj.value];
   //5.遍历cityarr数组
   for (let i = 0; i < cityArr.length; i++) {
      //6.创建新的option元素
      var optionTag=document.createElement("option");
      optionTag.innerHTML=cityArr[i];
      //7.将option元素添加到select标签中
      cityTag.appendChild(optionTag);
   }
}