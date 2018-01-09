function checkForm() {
	if(document.login1.userName.value==""){
		alert("用户名不能为空，请输入用户名！！！");
		return false;
	}
	if(document.login1.password.value==""){
		alert("密码不能为空，请输入密码！！！");
		return false;
	}
}

	
