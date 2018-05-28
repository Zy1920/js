### HTML常用事件

#### Window事件属性

(针对window对象触发的事件 应用到<body>标签)

- onload:页面结束加载之后触发；onload 常用在 <body> 中，一旦完全加载所有内容（包括图像、脚本文件、CSS 文件等），就执行一段脚本。
- onresize:当前浏览器窗口被调整大小时出发；
- onunload:一旦页面已下载时触发(或者浏览器窗口已关闭)；onunload 在用户从页面导航离开时发生（通过点击链接、提交表单或者关闭浏览器窗口等等）。




#### Form事件

(由 HTML 表单内的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 form 元素中）)

- onblur:元素失去焦点时运行的脚本；onblur 常用于表单验证代码（例如用户离开表单字段）。
- onchange：在元素值被改变时运行的脚本；onchange 属性适用于：<input>、<textarea> 以及 <select> 元素。
- onfocus：当元素获得焦点时运行的脚本；onfocus 常用于 <input>、<select> 以及 <a>.
- onselect：在元素中文本被选中后触发；onselect 属性可用于以下元素内：<input type="file">、<input type="password">、<input type="text">、<keygen> 以及 <textarea>.
- onsubmit：提交表单时触发；onsubmit 属性只在 <form> 中使用。



#### Keyborad事件

- onkeydown：在用户按下按键时触发；相对于 onkeydown 事件的事件次序：onkeydown onkeypress onkeyup
- onkeypress：在用户敲击按钮时触发；
- onkeyup：在用户释放按钮时触发；



#### Mouse事件

由鼠标或类似用户动作触发的事件：

- onclick：元素上发生鼠标点击时触发；
- ondblclick：元素上发生鼠标双击时触发；
- onmousedown：当元素上按下鼠标按钮时触发；
- onmousemove：当鼠标指针移动到元素上时触发；
- onmouseout：当鼠标指针移出元素时触发；
- onmouseover：当鼠标指针移动到元素上时触发；
- onmouseup：当在元素上释放鼠标按钮时触发；



