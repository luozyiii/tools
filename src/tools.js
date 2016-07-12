/*******************************
 *
 * date 	@2016/7/10
 * author 	@Luo ZhiYi
 * desc 	@tools常用工具函数集合
 * github   @https://github.com/luozyiii/tools.js
 *
 * ******************************/

;(function(){

	var TOOLS = {};

	// 匹配手机号码的正则
	TOOLS.REG_PHONE = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/;
	
	// 匹配身份证号码的正则
	TOOLS.REG_IDCARD = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	
	// 匹配邮箱的正则
	TOOLS.REG_EMAIL = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
	
	// 网址的正则
	TOOLS.REG_URL = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
	+ "(([0-9]{1,3}\.){3}[0-9]{1,3}" //IP形式的URL- 199.194.52.184
	+ "|" //允许IP和DOMAIN（域名）
	+ "([0-9a-z_!~*'()-]+\.)*" //域名- www.
	+ "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." //二级域名
	+ "[a-z]{2,6})" //first level domain- .com or .museum
	+ "(:[0-9]{1,4})?" //端口- :80
	+ "((/?)|" + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	
	// 邮政编码
	TOOLS.REG_POSTALCODE = /^[a-zA-Z0-9]{3,12}$/;
	
	// 只能输入1-20个数字
	TOOLS.REG_NUMBER = /^[0-9]{1,20}$/;
	
	// 纯中文字符
	TOOLS.REG_CH = /^[\u4E00-\u9FA5]+$/;
	
	// 密码:只能输入6-20个字母、数字、下划线
	TOOLS.REG_PASSWORD = /^(\w){6,20}$/;
	
	// 校验手机号码/身份证号码／邮箱／网址等...  value:需要校验的值 reg：校验的规则
	TOOLS.verify = function(value,reg){
	    var regExp = new RegExp(reg);
	return regExp.test(value);
	};

	// 设置cookie
	TOOLS.setCookie = function(name,value,days){
		var date = new Date();
        date.setTime(date.getTime() + parseInt(days) * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + ";path=/";
	};

	// 获取cookie
	TOOLS.getCookie = function(name){
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return (arr[2]);
        } else {
            return null;
        }
	};

	// 删除cookie
	TOOLS.delCookie = function(name){
		TOOLS.setCookie(name, "", -1);
	};

	// 清空cookie
	TOOLS.clearCookie = function(){
		var names = document.cookie.match(/[^ =;]+(?=\=)/g); 
		if (names) { 
			for (var i = names.length; i--;){
				TOOLS.setCookie(names[i],'',-1);
			}
		}
	};

	// 设置本地存储
	TOOLS.setLocalstorage = function(name,value){
		if (window.localStorage) {
            localStorage.setItem(name,value);
        }
	};

	// 获取本地存储
	TOOLS.getLocalstorage = function(name){
		if (window.localStorage) {
            return localStorage.getItem(name);
        }
	};

	// 删除本地存储
	 TOOLS.delLocalstorage = function(name){
	 	if (window.localStorage) {
            localStorage.removeItem(name);
        }
    };

    // 清空所有本地存储
    TOOLS.clearLocalstorage = function(){
    	if (window.localStorage) {
            localStorage.clear();
        }
    };

    // 设置会话存储
	TOOLS.setSessionstorage = function(name,value){
		if (window.sessionStorage) {
            sessionStorage.setItem(name,value);
        }
	};

	// 获取会话存储
	TOOLS.getSessionstorage = function(name){
		if (window.sessionStorage) {
            return sessionStorage.getItem(name);
        }
	};

	// 删除会话存储
	 TOOLS.delSessionstorage = function(name){
	 	if (window.sessionStorage) {
            sessionStorage.removeItem(name);
        }
    };

    // 清空所有会话存储
    TOOLS.clearSessionstorage = function(){
    	if (window.sessionStorage) {
            sessionStorage.clear();
        }
    };

    // 根据参数名获取当前url的参数值
    // 例如：xxx.html?a=1&b=2
    // 执行：TOOL.getParam(a) 可得到值1
    TOOLS.getParam = function(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return r[2]; return "";
    };

	// 设置为全局对象
    window.TOOLS = TOOLS;

})();
