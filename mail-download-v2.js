if (Download == undefined||Download=="") {
	var Download = {};
};
Download.__jumpUrl = function(){
	var _url = "";
	var _prefix = ""
	var _suffix = "";
	_suffix = (this.__us==""||this.__us==undefined) ? this.__notDownload(this):this.__startDownload(this);
	this.__linkHref = this.__spellUrl(_prefix,_suffix);
	Download.__link.href  = Download.__downloadlink || "#";
};

Download.__refresh = function(_event){
	var _event = window.event || _event;
	V._$stopDefault(_event);
	Download.__checkCaptcha();
};

Download.__changeStyle = function(_obj,_flag){
	if (_obj == "" || _obj == undefined)
		return;
	this._flag = _flag||"";
	this._body = _obj;
	this._body.style.display = _flag;
};

Download.__startDownload = function(){
	if(!!document.getElementById('download-b')){
		document.getElementById('download-b').style.display = "none";
	}
	return encodeURI(this.__downloadlink);
};

Download.__GetCookie = function(name){
	var start=document.cookie.indexOf(name+"=");
    var len=start+name.length+1;
    if ((!start)&&(name!=document.cookie.substring(0,name.length))){
    	return null;
    }
    if( start == -1 )return null;
    var end = document.cookie.indexOf(';',len); 
    if ( end == -1 ) end = document.cookie.length; 
    return unescape( document.cookie.substring(len,end)); 
};


Download.__notDownload = function(){
	if(!!document.getElementById('download-b'))
		document.getElementById('download-b').style.display = "inline-block";
	if(!!document.getElementById('errmsg-div'))
		document.getElementById('errmsg-div').style.display = "";
	if(!!document.getElementById('download-a'))
		document.getElementById('download-a').style.display = "inline-block";
	return "#";
};

Download.__subString = function(_content,_length){
    _content = _content||'';
    if (!_length) return _content;
    for(var i=0,k=0,l=_content.length;i<l;i++){
        k += _content.charCodeAt(i)>255?2:1;
        if (k>=_length) 
            return _content.substr(0,i+(k==_length?1:0));
    }
    return _content;
};

Download.__strRealLength = function(_content){
	_content = _content||'';
    for(var i=0,k=0,l=_content.length;i<l;i++){
        k += _content.charCodeAt(i)>255?2:1;
    }
    return k;
};

Download.__spellUrl = function(_prefix,_suffix){
	return _prefix + _suffix;
};

Download.__hideDiv = function(){
	Download.__changeStyle(Download.__loginDiv,"none");
	Download.__changeStyle(Download.__mbDiv,"none");
};

Download.__fillLoginDiv = function(){
	this.__loginDiv.innerHTML = '<div id="login-div" style="background:#fff;z-index:999;border:solid #ccc 1px;height:200px;width:345px;line-height:18px;">\
		<div class="log-div01"><span class="fs14 fw01">登录网易通行证</span><span id="close-span" class="login-close-span iblock">&nbsp;</span></div>\
		<div class="fs14 log-div02"><label>用户名</label><div style="z-index:1000;" class="log-input" id="log-input"></div></div>\
		<div class="fs14 log-div02"><label>密&nbsp;&nbsp;&nbsp;码</label><div style="z-index:500;" class="log-input"><input style="height:19px;*padding:1px 0;" id="login-pwd" type="password" /><a class="fs14 fc06 spmrg" style="text-decoration:underline;" href="//reg.163.com/RecoverPasswd1.shtml?from=mail163" target="_blank">忘记密码?</a></div></div>\
		<div class="log-but"><input class="btn-wid" id="login-btn" type="button" value="登 录" /><a style="line-height:33px;vertical-align:top;" onclick="Download.__beforeRegister();" id="register" href="//email.163.com" class="log-but-a fs14 fc06 iblock" target="_blank">注册</a></div>\
		<div id="hint" class="hint"><span id="err-msg">&nbsp;</span></div>\
	</div>\
	<div id="errmsg" style="display:none;z-index:9999;">\
		<div class="errmsg-div01"><span class="fs14">无法下载</span></div>\
		<div class="errmsg-div03"><span class="fs14 fw01 fc04">抱歉，你的下载次数超过限额，无法继续下载</span></div>\
		<div><input class="errmsg-div02" id="close-btn" type="button" value="关闭" /></div>\
	</div>';
};

Download.__showErrMsg = function(_str){
	document.getElementById('err-msg').innerHTML = _str;
};

Download.__login = function(){
	this.__userName = document.getElementsByTagName('input')[0].value;
	this.__pwd = document.getElementById('login-pwd').value;
	this.__owner = owner||'';
	this.__url = "//" + location.host + "/fs/display/?file="+file;
	this.__downloadlink = downloadlink||'';
	if (this.__userName==""||this.__userName==undefined) {
		Download.__showErrMsg("请输入用户名！");
		return;
	}
	if (this.__pwd==""||this.__pwd==undefined) {
		Download.__showErrMsg("请输入密码！");
		return;
	}
	var _url = "https://reg.163.com/logins.jsp?type=0&product=blog&username="+this.__userName+"&password="+_$md5(this.__pwd)+"&url="+encodeURIComponent(this.__url);
	Download.__hideDiv();
	if(Download._isTimeOver)
		Download.__link.href = '#';
	window.location.href = _url;
};

Download.__beforeRegister = function(){
	location.r = '//' + location.host + '/';
  	location.dwr = location.r + 'fs/dwr';
	J._$loadDataByDWR(location.dwr,'UserCheckBean','register',false,Download.__cbRegister._$bind(this));
};

Download.__cbRegister = function(_cbdata){
};

Download.__showDiv = function(){
	document.getElementById('err-msg').innerHTML = "";
	Download.__changeStyle(Download.__login_div,"");
	Download.__changeStyle(Download.__errmsg,"none");
	Download.__changeStyle(Download.__loginDiv,"");
	Download.__changeStyle(Download.__mbDiv,"");
	var _reg = document.getElementById('register');
	var __list = ['','163.com','126.com','popo.163.com','188.com','vip.163.com','yeah.net','game.163.com'];
	if(!Download.__suggest){
		Download.__suggest = P(N.ui)._$$Suggest._$allocate(document.getElementById('log-input'),
	               {'class':'suggest',
                    onenter:function(){},
				    onchange:function(_value){
						if (_value.indexOf('@')>=0) return;
						var _list = __list.join(','+_value+'@').split(',');
						_list.shift();
						Download.__suggest._$resetList(_list);
				   }});
	}
};

Download.__fireFoxHandler = function(evt){
		if(evt.keyCode==13){
		   document.getElementById('login-btn').click();
		}
	};
	
Download.__ieHandler = function(evt){
		if(evt.keyCode==13){
		   document.getElementById('login-btn').click();
		}
	};
	
Download.__logoutEvent = function(){
	var _location = location.toString();
	if (_location.charAt(_location.length-1) == "#") {
		_location = _location.substr(0,_location.length-1);
	}
	var _index = _location.indexOf("&username=");
	if (_index != -1) {
		_location = _location.substr(0,_index);
	}
	if (_location){
		var _url = "//"+location.host+"/fs/logout/?username="+us+"&url="+encodeURIComponent(_location);
		window.location.href = _url;
	}
};

Download.__spanHover = function(){
	window.Download.__closeSpan.style.cursor='pointer';
};

Download.__cCaptchaEvent = function(){
	if(!Download.__us)
		return;
	if(!Download.__uuid){
		Download.__captchaMsg.innerHTML = "请先登录！";
		return;
	}
	Download.__captchaMsg.innerHTML = "验证码正在加载中...";
	Download.__img.src = "//"+location.host+'/fs/captcha/' + Download.__uuid + '/?' + new Date().getTime();
	Download.__img.onload = function(){
		Download.__captchaMsg.innerHTML = "";
	}
};

// 下载前检查验证码
Download.__checkCaptcha = function(){
	location.r = '//' + location.host + '/';
  	location.dwr = location.r + 'fs/dwr';
	J._$loadDataByDWR(location.dwr,'UserCheckBean','checkCaptcha',Download.__uuid,Download.__captcha.value,Download.__cbCheck._$bind(this));
};

Download.__cbCheck = function(_flag){
	if(_flag == 0){
		window.location.href = Download.__linkHref;
		Download.__link.href = Download.__downloadlink;
		this.__cCaptchaEvent();
		Download.__captcha.value = "";
	}else if(_flag ==1){
		Download.__captcha.value = "";
		Download.__captchaMsg.innerHTML = "验证码错误";
	}else{
		Download.__captcha.value = "";
		Download.__captchaMsg.innerHTML = "验证码过期";
	}
};

Download.__onfocusEvent = function(){
	Download.__captchaMsg.innerHTML = "验证码区分大小写";
};

Download.__closeWin = function(){
	window.close();
};

Download.__cbCheckError = function(_result){
	var _error = _result[0];
	var _downloadCountLimit = _result[1];	
	switch(_error){
		case 1:
			location.href = Download.__downloadlink;
		break;
		case 0:
			Download.__expiredTimeDiv.innerHTML = "您下载的文件不存在，可能已被文件发件者删除";
			Download.__expiredTimeDiv.style.display = "";
			this.__link.href = "#"
			this.__link.innerHTML = "关闭窗口";
			if(document.addEventListener){
				this.__link.addEventListener('click',this.__closeWin,false);
			}else{
				this.__link.attachEvent("onclick",this.__closeWin);
			}
		break;
		case -1:
			Download.__expiredTimeDiv.innerHTML = "该文件含有不健康内容，禁止下载";
		break;
		case -2:
			Download.__expiredTimeDiv.innerHTML = "该文件只允许文件发送者下载";
		break;
		case -3:			
			Download.__expiredTimeDiv.innerHTML = "您下载的文件不存在，可能已经过期";
		break;
		case -4:
			Download.__expiredTimeDiv.innerHTML = "该文件已超过总下载次数（" + _downloadCountLimit + "次）的下载限制";
		break;
		case -5:
			Download.__expiredTimeDiv.innerHTML = "未登录用户的下载次数（" + _downloadCountLimit + "次）已经用完，继续下载请"+'<a style="cursor:pointer;" onclick="Download.__showDiv()">'+"登陆网易通行证"+'</a>';
		break;
		case -6:
			Download.__expiredTimeDiv.innerHTML = "您只允许下载同一文件" + _downloadCountLimit + "次";
		break;
		case -7:
			Download.__expiredTimeDiv.innerHTML = "该文件已超过登陆用户下载次数（" + _downloadCountLimit + "次）的下载限制";
		break;
		case -8:
			Download.__expiredTimeDiv.innerHTML = "该文件仅允许" + _downloadCountLimit + "个线程同时下载，请稍后刷新页面重试";
		break;
		default:
			break;
	}
	if(_error <0 ){
		Download.__expiredTimeDiv.style.display = "";
		Download.__link.className = "ipt-b btn btn-std btn-std-disabled";
		Download.__link.style.color = "#c6c6c6";
		Download.__link.href = "#";		
		Download.__link.disabled = true;
	}
};

Download.__onReportShow = function(){
	if(!Download.__isReportShow){
		Download.__isReportShow = true;
		document.getElementById('rp-img').src = "../style/images/up.gif";
		document.getElementById('reportForm').style.display = "";
		document.getElementById('other').disabled = true;
		document.getElementById('radio0').checked = true;
		Download.__rpTypeId = 0;
		Download.__value = document.getElementById('radio0').value;
	}else{
		Download.__onReportHide();
	}
};

Download.__onChange = function(_id){
	Download.__rpTypeId = _id;
	switch(_id){
		case 0:
			document.getElementById('other').value = "";
			document.getElementById('other').disabled = true;
			Download.__value = "含有色情暴力内容";
			break;	
		case 1:
			document.getElementById('other').value = "";
			document.getElementById('other').disabled = true;
			Download.__value = "这是广告";
			break;
		case 2:
			document.getElementById('other').value = "";
			document.getElementById('other').disabled = true;
			Download.__value = "含有反动内容";
			break;
		case 3:
			document.getElementById('other').value = "";
			document.getElementById('other').disabled = true;
			Download.__value = "诈骗内容";
			break;
		case 4:
			document.getElementById('other').disabled = false;
			Download.__value = document.getElementById('other').value;
			break;
		default:
			Download.__value = "";
			break;
	}
};

Download.__onReportHide = function(_event){
	Download.__isReportShow = false;
	document.getElementById('reportForm').style.display = "none";
	document.getElementById('rp-img').src = "../style/images/down.gif";
};

Download.__onReport = function(){	
	document.getElementById('reportForm').style.display = "none";
	location.r = '//' + location.host + '/';
  	location.dwr = location.r + 'fs/dwr';
	if(Download.__rpTypeId == 4)
		Download.__value = document.getElementById('other').value;
	if(Download.__strRealLength(Download.__value) >= 500)
		Download.__value = Download.__subString(Download.__value,500);
	J._$loadDataByDWR(location.dwr,'FileBean','reportFile',file,Download.__rpTypeId,Download.__value,Download.__cbReport._$bind(this));
};

Download.__cbReport = function(_flag){
	Download.__reportS.style.display = "";
	Download.__ereport.style.display = "none";
};

Download.__checkAuthority = function(_event){
	this.__event = window.event || _event;
	V._$stopDefault(_event);
	if (Download.__downloadlink == "") {
		return;
	}
	location.r = '//' + location.host + '/';
	location.href = Download.__downloadlink + '&callback=' + Download.__product;
};


Download.__checkMember = function(){
	var queryString = location.search.replace('?', '')
	var isMember = queryString.indexOf('member=true') >= 0;
	var memberAdLink = document.querySelector('.member-ad');

	if (memberAdLink && !isMember) {
		memberAdLink.style.display = 'inline';
	}
}

Download.__isHideMember = false;
Download.__hideMember = function(){
	var memberAdLink = document.querySelector('.member-ad');

	if (memberAdLink) {
		this.__isHideMember = true;
		memberAdLink.style.display = 'none';
	}
}


Download.init = function(){
	this.__product = product||"";
	this.__error = error||"";
	this.__owner = owner||'';
	this.__sExpiredTime = sExpiredTime||'';
	this.__remainingTime = document.getElementById('remainingTime')||'';
	this.__logout = document.getElementById('logout');
	this.__us = us||'';
	this.__usMsg = document.getElementById('usMsg');
	this.__downloadlink = downloadlink||'';
	this.__uuid = uuid||'';
	this.__link = document.getElementById('download-a');
	this.__showLoginDiv = document.getElementById('download-b');
	this.__loginDiv = document.getElementById('loginDiv');
	this.__mbDiv = document.getElementById('mbDiv');
	this.__expiredTimeDiv = document.getElementById('expiredTime')||'';
	this.__fillLoginDiv.apply(this);
	this.__lExpiredTime = lExpiredTime||'';
	this.__report = document.getElementById("report");
	this.__reportS = document.getElementById("success-report");
	this.__ereport = document.getElementById("enter-report");
	if(!!this.__us){
		this.__changeCaptcha = document.getElementById('changeCaptcha');
		this.__captcha = document.getElementById('captcha')||'';
		this.__captchaMsg = document.getElementById('captchaMsg')||'';
		this.__img = document.getElementById('captchaIMG')||'';
		this.__usMsg&&(this.__usMsg.style.display = "inline-block");
	}else{
		this.__usMsg&&(this.__usMsg.style.display = "none");
	}
	var _nowTime = new Date();
	_nowTime.setTime(sCurrentTime);
	if (!!this.__owner){	
		this.__jumpUrl.apply(this);
		this._isTimeOver = this.__lExpiredTime < _nowTime.getTime();
		if(!!this._isTimeOver){
			this.__expiredTimeDiv.style.display = "";
			this.__link.className = "ipt-b btn btn-std btn-std-disabled";
			this.__link.style.color = "#c6c6c6";
			this.__link.href = "#";			
			this.__link.disabled = true;
			this.__remainingTime.innerText = '已过期';
			this.__remainingTime.className = 'fc04';
			this.__hideMember();
		}else{
			var _rtstl;
			if((this.__lExpiredTime - _nowTime.getTime())>= 0){
				var _count = 0;
				_rtstl = window.setInterval(function(){
						_nowTime = new Date();
						_nowTime.setTime(sCurrentTime + _count*1000);
						_count++;
						var _t = this.__lExpiredTime - _nowTime.getTime();
						_t = U._$format2(_t).split('-');
						var _dd = _t[0];
						var _HH = _t[1];
						var _mm = _t[2];
						var _ss = _t[3];
						this.__remainingTime.innerText = (_dd>0?_dd+'天  ':'')+(_HH>0?_HH+'小时  ':'')+(_mm>0?_mm+'分钟  ':'')+(_ss>=0?_ss+'秒':'');
						if(!this.__remainingTime.className)
							this.__remainingTime.className = 'fc04';
					}._$bind(this),1000);
			}else{
				if(!!_rtstl)
					window.clearInterval(_rtstl);
				this.__remainingTime.innerText = '已过期';
				this.__remainingTime.className = 'fc04';
				this.__hideMember();
			}
			if(!!this.__error){
				this.__expiredTimeDiv.style.display = "";
				this.__link.className = "ipt-b btn btn-std btn-std-disabled";
				this.__link.style.color = "#c6c6c6";
				this.__link.href = "#";				
				this.__link.disabled = true;
			}else{
				this.__expiredTimeDiv.style.display = "none";
			}
		}
		if(document.addEventListener){
			this.__link.addEventListener('click',this.__checkAuthority,false);
		}else{
			this.__link.attachEvent("onclick",this.__checkAuthority);
		}
	} else {
		this.__expiredTimeDiv.style.display = "";
		if(document.addEventListener){
			this.__link.addEventListener('click',this.__closeWin,false);
		}else{
			this.__link.attachEvent("onclick",this.__closeWin);
		}
	}
	if(document.addEventListener){
		document.addEventListener("keypress",this.__fireFoxHandler, true);
	}else{
		document.attachEvent("onkeypress",this.__ieHandler);
	}
	this.__closeSpan = document.getElementById('close-span');
	this.__btn = document.getElementById('login-btn');
	this.__closeBtn = document.getElementById('close-btn');
	this.__login_div = document.getElementById('login-div');
	this.__errmsg = document.getElementById('errmsg');
	if(!!document.addEventListener){
   		this.__closeSpan.addEventListener('click',this.__hideDiv,false);
		this.__closeSpan.addEventListener('mouseover',this.__spanHover,false);
   		this.__closeBtn.addEventListener('click',this.__hideDiv,false);
   		this.__btn.addEventListener('click',this.__login,false);
   		if(!!this.__report)
   			this.__report.addEventListener('click',this.__onReportShow,false);
		if(!!this.__showLoginDiv)
			this.__showLoginDiv.addEventListener('click',this.__showDiv,false);
		this.__logout&&(this.__logout.addEventListener('click',this.__logoutEvent,false));
		if (!!this.__changeCaptcha) {
			this.__changeCaptcha.addEventListener('click', this.__cCaptchaEvent, false);
			this.__captcha.addEventListener('click',this.__onfocusEvent,false);
		}
	}else{
		this.__closeSpan.attachEvent('onclick',this.__hideDiv);
		this.__closeSpan.attachEvent('onmouseover',this.__spanHover);
		this.__closeBtn.attachEvent('onclick',this.__hideDiv);
		this.__btn.attachEvent('onclick',this.__login);
		if(!!this.__report)
			this.__report.attachEvent('onclick',this.__onReportShow);
		if(!!this.__showLoginDiv)
			this.__showLoginDiv.attachEvent('onclick',this.__showDiv);
		this.__logout&&(this.__logout.attachEvent('onclick',this.__logoutEvent));
		if (!!this.__changeCaptcha) {
			this.__changeCaptcha.attachEvent('onclick', this.__cCaptchaEvent);
			this.__captcha.attachEvent('onclick', this.__onfocusEvent);
		}
	}
	this.__cCaptchaEvent();
	if (!this.__isHideMember) {
		this.__checkMember();
	}
};
function loadFunc(){Download.init()};
window.onload = loadFunc; 