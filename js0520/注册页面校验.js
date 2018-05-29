//手机号的校验
function checknum(){
    //获取用户输入的内容
    var num=document.getElementById("username").value;
    //定义检验的正则表达式
    var reg=new RegExp("^1[3456789]\\d{9}$");
    //根据正则表达式的test方法检验手机号
    var result=reg.test(num)
    if(result){
        document.getElementById("username_msg").innerHTML="";
        flag=true;
    }
    else{
        document.getElementById("username_msg").innerHTML="对不起，您输入的手机号格式有误";
        flag=false;
    }
}

//密码检验
function checkpsd() {
    //获取用户输入的密码
    var psd=document.getElementById("password").value;
    if(psd.length>=6){
        document.getElementById("password_msg").innerHTML="";
        flag=true;
    }
    else{
        document.getElementById("password_msg").innerHTML="密码至少要6位哦";
        flag=false;
    }
}

//确认密码的检验
function checkrepsd(){
    //获取用户输入的确认密码
    var rpsd=document.getElementById("repassword").value;
    if(rpsd.length>=6){
        document.getElementById("password_msg").innerHTML="";
        flag=true;
    }
    else{
        document.getElementById("password_msg").innerHTML="密码至少要6位哦";
        flag=false;
        return;
    }

    var psd=document.getElementById("password").value;
    if(rpsd==psd){
        document.getElementById("repassword_msg").innerHTML="";
        flag=true;
    }
    else{
        document.getElementById("repassword_msg").innerHTML="密码不正确";
        flag=false;
    }
}

//邮箱的检验
function checkEmail(){
    //获取输入的邮箱地址
    var email=document.getElementById("email").value;
    //定义检验的正则表达式
    var reg=new RegExp("^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+([.][a-zA-Z0-9-_]+)+$");
    //检验
    var result=reg.test(email);
    if(result){
        document.getElementById("email_msg").innerHTML="";
        flag=true;
    }
    else{
        document.getElementById("email_msg").innerHTML="密码输入不正确啦";
        flag=false;
    }
}

//用户名的检验
function checkname(){
    //获取用户输入的用户名
    var name=document.getElementById("name").value;
    if(name.length>=5){
        document.getElementById("name_msg").innerHTML="";
        flag=true;
    }
    else{
        document.getElementById("name_msg").innerHTML="用户名至少五位哦";
        flag=false;
    }
}

//验证码检验
function checkcode(){
    //获取用户输入的验证码
    var code=document.getElementById("checkcode").value;
    if(code.length>=4){
        document.getElementById(checkCode_msg).innerHTML="";
        flag=true;
    }
    else{
        document.getElementById(checkCode_msg).innerHTML="验证码至少四位数";
        flag=false;
    }
}

function checkform(){
    checkNum();
    checkPsw();
    checkrepsd();
    checkEmail();
    checkUserName();
    checkCode();
    return flag;
}