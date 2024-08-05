(function(){
var __extflag={};
var __initialize=function(){
this._$super.apply(this,arguments);
};
var __extend=function(_super,_static){
if(!_super||!U._$isType(_super,'Function')
||!U._$isType(this,'Function'))return;
if(!!_static)
for(var _method in _super)
if(U._$isType(_super[_method],'Function'))
this[_method]=_super[_method];
this._$super=_super;
this._$supro=_super.prototype;
this.prototype=new _super(__extflag);
this.prototype.constructor=this;
this.prototype._$initialize=__initialize;
var _level=0;
this.prototype._$super=function(){
var _function,_result,_flag=_level,_superp=_super;
while(_flag){_superp=_superp._$super;_flag--;}
_function=_superp.prototype._$initialize;
_level++;
!_function||(_result=_function.apply(this,arguments));
_level--;
return _result;
};
return this.prototype;
};
window.O={};
window.F=function(){return false;};
window.N={ui:'ntes.ui',ut:'ntes.util',fw:'ntes.fw'};
window.P=function(_namespace){
if(!_namespace||!_namespace.length)return null;
var _package=window;
for(var a=_namespace.split('.'),
l=a.length,i=(a[0]=='window')?1:0;i<l;
_package=_package[a[i]]=_package[a[i]]||{},i++);
return _package;
};
window.C=function(){
var _class=function(){
if(arguments[0]!=__extflag&&!!this._$initialize)
return this._$initialize.apply(this,arguments);
};
_class._$extend=__extend;
return _class;
};
Function.prototype._$bind=function(){
var _function=this,_args=arguments,
_object=Array.prototype.shift.call(arguments);
return function(){
var _argc=Array.prototype.slice.call(_args,0);
Array.prototype.push.apply(_argc,arguments);
return _function.apply(_object||window,_argc);
};
};
Function.prototype._$bindAsEventListener=function(){
var _function=this,_args=arguments,
_object=Array.prototype.shift.call(arguments);
return function(){
Array.prototype.push.apply(arguments,_args);
return _function.apply(_object||window,arguments);
}
};
})();
(function(){
var __userAgent=window.navigator.userAgent;
P('B');
B.__destroy=F;
B._$ISIE=/msie\s+(.*?)\;/i.test(__userAgent);
B._$ISFF=!B._$ISIE&&/rv\:(.*?)\)\s+gecko\//i.test(__userAgent);
B._$ISOP=!B._$ISIE&&!B._$ISFF&&/opera\/(.*?)\s/i.test(__userAgent);
B._$ISSF=!B._$ISIE&&!B._$ISFF&&!B._$ISOP&&/applewebkit\/(.*?)\s/i.test(__userAgent);
B._$ISKQ=!B._$ISIE&&!B._$ISFF&&!B._$ISOP&&!B._$ISSF&&/konqueror\/(.*?)\;/i.test(__userAgent);
B._$VERSION=RegExp.$1;
B._$ISOLDIE=B._$ISIE&&B._$VERSION<'7.0';
if(B._$ISIE)try{document.execCommand('BackgroundImageCache',false,true);}catch(e){}
})();
(function(){
var __trim=/(?:^\s+)|(?:\s+$)/g;
var __map={
a:{r:/\<|\>|\&|\n|\s/g,'<':'&lt;','>':'&gt;','&':'&amp;',' ':'&nbsp;','\n':'<br/>'}
,b:{r:/(?:\&(?:lt|gt|amp|nbsp)\;)|(?:\<br\/\>)/gi,'&lt;':'<','&gt;':'>','&amp;':'&','&nbsp;':' ','<br/>':'\n'}
,c:{r:/\byyyy|yy|MM|M|dd|d|HH|H|mm|ms|ss|m|s\b/g}
,d:{r:/\'|\"/g,'\'':'\\\'','"':'\\"'}
};
P('U');
U.__destroy=F;
U.__encode=function(_map,_content){
if(!_map||!_content||!_content.replace)return _content||'';
return _content.replace(_map.r,function($1){return _map[$1]||$1;});
};
U._$number=function(_number){
_number=parseInt(_number)||0;
return(_number<10?'0':'')+_number;
};
U._$trim=function(_content){
return!!_content&&!!_content.replace
&&_content.replace(__trim,'')||'';
};
U._$subString=function(_content,_length){
_content=_content||'';
if(!_length)return _content;
for(var i=0,k=0,l=_content.length;i<l;i++){
k+=_content.charCodeAt(i)>255?2:1;
if(k>=_length)
return _content.substr(0,i+(k==_length?1:0));
}
return _content;
};
U._$rand=function(_min,_max){
return Math.floor(Math.random()*(_max-_min)+_min);
};
U._$randNumberString=function(_length){
_length=Math.max(0,Math.min(_length||10,100));
var _min=Math.pow(10,_length-1),_max=_min*10;
return this._$rand(_min,_max).toString();
};
U._$isType=function(_data,_type){
return Object.prototype.toString.
call(_data).toLowerCase()==
('[object '+_type.toLowerCase()+']');
};
U._$indexOf=function(_list,_item){
var _isfunc=this._$isType(_item,'Function');
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;i++)
if(_isfunc?!!_item(_list[i]):_list[i]==_item)
return i;
return-1;
};
U._$escape=function(_content){
return U.__encode(__map.a,_content);
};
U._$unescape=function(_content){
return U.__encode(__map.b,_content);
};
U._$string=function(_content){
return U.__encode(__map.d,_content);
};
U._$format=function(_time,_format){
if(!_time||!_format)return'';
if(!U._$isType(_time,'Date'))
_time=new Date(_time);
var _map=__map.c;
_map['yyyy']=_time.getFullYear();
_map['yy']=(''+_map['yyyy']).substr(2);
_map['M']=_time.getMonth()+1;
_map['MM']=this._$number(_map['M']);
_map['d']=_time.getDate();
_map['dd']=this._$number(_map['d']);
_map['H']=_time.getHours();
_map['HH']=this._$number(_map['H']);
_map['m']=_time.getMinutes();
_map['mm']=this._$number(_map['m']);
_map['s']=_time.getSeconds();
_map['ss']=this._$number(_map['s']);
_map['ms']=_time.getMilliseconds();
return U.__encode(_map,_format);
};
U._$format2=function(ms){
var ss=1000;
var mi=ss*60;
var hh=mi*60;
var dd=hh*24;
var day=Math.floor(ms/dd);
var hour=Math.floor((ms-day*dd)/hh);
var minute=Math.floor((ms-day*dd-hour*hh)/mi);
var second=Math.floor((ms-day*dd-hour*hh-minute*mi)/ss);
var milliSecond=Math.floor(ms-day*dd-hour*hh-minute*mi-second*ss);
var strDay=day<10?"0"+day:""+day;
var strHour=hour<10?"0"+hour:""+hour;
var strMinute=minute<10?"0"+minute:""+minute;
var strSecond=second<10?"0"+second:""+second;
var strMilliSecond=milliSecond<10?"0"+milliSecond:""+milliSecond;
strMilliSecond=milliSecond<100?"0"+strMilliSecond:""+strMilliSecond;
return strDay+"-"+strHour+"-"+strMinute+"-"+strSecond+"-"+strMilliSecond;
};
U._$copyToClipboard=function(_txt){
if(window.clipboardData){
window.clipboardData.clearData();
window.clipboardData.setData("Text",_txt);
}else if(navigator.userAgent.indexOf("Opera")!=-1){
window.location=_txt;
}else if(window.netscape){
try{
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
}catch(e){
alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
}
var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
if(!clip)
return;
var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
if(!trans)
return;
trans.addDataFlavor('text/unicode');
var str=new Object();
var len=new Object();
var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
var copytext=_txt;
str.data=copytext;
trans.setTransferData("text/unicode",str,copytext.length*2);
var clipid=Components.interfaces.nsIClipboard;
if(!clip)
return false;
clip.setData(trans,null,clipid.kGlobalClipboard);
};
};
U._$formatBytes=function(_bytes,_options){
var _divisor,_size;
if(!!_options){
switch(_options.toUpperCase()){
case"KB":
_divisor=1024;
break;
case"MB":
_divisor=1024576;
break;
case"GB":
_divisor=1049165824;
break;
default:
_divisor=1;
break;
}
_size=_bytes/_divisor;
return Math.round(_size*100)/100+_options;
}else{
if(_bytes>=1024){
if(_bytes>1024576){
if(_bytes>1049165824){
return U._$formatBytes(_bytes,'GB');
}else{
return U._$formatBytes(_bytes,'MB');
}
}else{
return U._$formatBytes(_bytes,'KB');
}
}else{
return U._$formatBytes(_bytes,'Bytes');
}
}
};
})();
(function(){
var __hc,
__tp={},
__sp=/\s+/g,
__hk='__hvrkey__',
__ha='__hatkey__',
__ec=document.createDocumentFragment();
var __initElementByTag=function(_element){
if(!_element)return;
switch(_element.tagName.toLowerCase()){
case'a':_element.href='#';return;
case'iframe':_element.frameBorder=0;return;
case'script':_element.type='text/javascript';return;
case'style':_element.type='text/css';return;
case'link':_element.type='text/css';
_element.rel='stylesheet';return;
}
};
var __getRegClassName=function(_class){
_class=U._$trim(_class);
return!_class?'':'\\b(?:'+_class.replace(__sp,'|')+')\\b';
};
var __hoverElement=function(_element,_hovered){
_element=E._$getElement(_element);
if(!_element)return;
_hovered=!!_hovered;
if(_element[__ha]==_hovered)return;
var _class=_element[__hk];
if(!_class)return;
_element[__ha]=_hovered;
_hovered?E._$addClassName(_element,_class)
:E._$delClassName(_element,_class);
};
var __maxElement=function(_element){
_element=E._$getElement(_element);
if(!_element)return;
var _type=_element.mt,
_value=_element.mv;
_element.style[_type]=
_element[_type=='width'?'scrollWidth'
:'scrollHeight']<_value?'auto':(_value+'px');
};
var __adjElement=function(_element){
_element=E._$getElement(_element);
if(!_element)return;
var _type=_element.mt,_value=_element.mv,
_ratio=_element.mr,_st=_element.style,
_rd=(_element.scrollWidth/_element.scrollHeight)||1,
_mw=_type=='width'?_value:Math.floor(_value*_ratio),
_mh=_type=='width'?Math.floor(_value/_ratio):_value;
if(_rd>=_ratio&&_element.scrollWidth>_mw){
_st.width=_mw+'px';_st.height='auto';return;
}
if(_rd<=_ratio&&_element.scrollHeight>_mh){
_st.width='auto';_st.height=_mh+'px';return;
}
_st.width='auto';_st.height='auto';
};
var __getOffset=function(_element,_type,_filter){
_element=E._$getElement(_element);
if(!_element)return 0;
_filter=_filter||F;
var _offset=0;
while(!!_element&&!_filter(_element)){
_offset+=_element[_type];
_element=_element.offsetParent;
}
return _offset;
};
var __getStyle;
if(!!document.defaultView&&!!document.defaultView.getComputedStyle){
__getStyle=function(_element,_style){
var _css=document.defaultView.getComputedStyle(_element,null);
return!_css?'':_css[_style];
};
}else{
__getStyle=function(_element,_style){
return _element.currentStyle[_style];
};}
P('E');
E.__destroy=function(){
var _element=document.createElement('div');
_element.style.display='none';
document.body.appendChild(_element);
_element.appendChild(__ec);
};
E._$getElement=function(_element){
if(arguments.length<=1)
return typeof(_element)=='string'
?document.getElementById(_element||''):_element;
var _result=[];
for(var i=0,l=arguments.length;i<l;
_result.push(E._$getElement(arguments[i])),i++);
return _result;
};
E._$getChildElements=function(_element,_class){
_element=E._$getElement(_element);
if(!_element)return null;
var _result=[];
for(var _node=_element.childNodes[0];!!_node;_node=_node.nextSibling){
if(_node.nodeType!=Node.ELEMENT_NODE||
(_class&&!E._$hasClassName(_node,_class)))continue;
_result.push(_node);
}
return _result;
};
E._$getElementsByClassName=function(_element,_class){
_class=U._$trim(_class);
_element=E._$getElement(_element);
if(!_element||!_class)return null;
if(!!_element.getElementsByClassName){
return Array.prototype.slice.call(
_element.getElementsByClassName(_class),0);
}
if(!!document.evaluate){
var _result=[],
_xrsult=document.evaluate('.//*'+__getExpByClassName(_class),
_element,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for(var i=0,l=_xrsult.snapshotLength;i<l;
_result.push(_xrsult.snapshotItem(i)),i++);
return _result;
}
var _result=[],
_regexp=new RegExp(__getRegClassName(_class),'g'),
_xrsult=_element.getElementsByTagName('*');
for(var i=0,l=_xrsult.length;i<l;i++)
if(E._$hasClassName(_xrsult[i],_regexp))
_result.push(_xrsult[i]);
return _result;
};
E._$hasClassName=function(_element,_class){
_element=E._$getElement(_element);
if(!_element||!_class)return false;
return typeof(_class)!='string'
?!!_class.test&&!!_element.className.match(_class)
:_element.className.search(__getRegClassName(_class))>=0;
};
E._$replaceClassName=function(_element,_del,_add){
_element=E._$getElement(_element);
if(!_element||(!_del&&!_add))return;
var _class=_element.className||'';
_add=' '+(_add||'');
_del=__getRegClassName(_del+_add);
!!_del&&(_class=_class.replace(new RegExp(_del,'g'),''));
_element.className=U._$trim(_class+_add).replace(__sp,' ');
};
E._$addClassName=function(_element,_add){
E._$replaceClassName(_element,'',_add);
};
E._$delClassName=function(_element,_del){
E._$replaceClassName(_element,_del,'');
};
E._$addNodeTemplate=function(_element){
_element=E._$getElement(_element);
if(!_element)return;
var _sn='tp_'+U._$randNumberString(6);
__tp[_sn]=_element;
__ec.appendChild(_element);
return _sn;
};
E._$getNodeTemplate=function(_sn){
return!__tp[_sn]?null:__tp[_sn].cloneNode(true);
};
E._$parseElement=function(_xhtml){
if(typeof(_xhtml)!='string')return _xhtml;
var _element=document.cloneElement('div');
_element.innerHTML=_xhtml;
var _number=0,_result;
for(var _node=_element.childNodes[0];!!_node;_node=_node.nextSibling){
if(_number>1)return _element;
if(_node.nodeType==Node.ELEMENT_NODE){_result=_node;_number++;}
}
return _number==1?_result:_element;
};
E._$parseStyle=function(_css){
if(!_css)return null;
if(!B._$ISIE||document.getElementsByTagName('style').length<30){
var _style=document.cloneElement('style');
document.head.appendChild(_style);
!B._$ISIE?_style.innerText=_css
:_style.styleSheet.cssText=_css;
return _style;
}
__hc.styleSheet.cssText+=_css;
return __hc;
};
E._$getStyle=function(_element,_style){
_element=E._$getElement(_element);
if(!_element)return'';
return _element.style[_style]||
__getStyle(_element,_style);
};
E._$offsetX=function(_element,_filter){
return __getOffset(_element,'offsetLeft',_filter);
};
E._$offsetY=function(_element,_filter){
return __getOffset(_element,'offsetTop',_filter);
};
E._$removeElement=function(_element){
_element=E._$getElement(_element);
if(!_element||!_element.parentNode)return;
_element.parentNode.removeChild(_element);
if(!!_element.outHTML)_element.outHTML='';
};
E._$emptyElement=function(_element){
_element=this._$getElement(_element);
if(!_element||!_element.hasChildNodes())return;
for(var _nodes=_element.childNodes,i=_nodes.length-1;i>=0;_element.removeChild(_nodes[i--]));
};
E._$removeElementByEC=function(){
for(var i=0,l=arguments.length,_element;i<l;i++){
_element=E._$getElement(arguments[i]);
_element&&__ec.appendChild(_element);
}
};
E._$noSelect=function(_element){
if(!B._$ISIE)return;
_element=E._$getElement(_element);
if(!_element)return;
_element.onselectstart=F;
};
E._$hoverElement=function(_element,_class){
if(!B._$ISOLDIE)return;
_element=E._$getElement(_element);
if(!_element||!_class||!!_element[__hk])return;
_element[__hk]=_class;
var _id=_element.id=_element.id||'xnd_'+U._$randNumberString(10);
V._$addEvent(_element,'mouseout',__hoverElement._$bind(E,_id,false));
V._$addEvent(_element,'mouseover',__hoverElement._$bind(E,_id,true));
};
E._$maxBoxElement=function(_element,_type,_value,_ratio){
if(!B._$ISOLDIE)return;
_element=E._$getElement(_element);
if(!_element)return;
var _id=_element.id||'mnd_'+U._$randNumberString(10);
_element.id=_id;_element.mt=_type;
_element.mv=_value;_element.mr=_ratio;
if(!!_element.maxkey)return;_element.maxkey=true;
_ratio?V._$addEvent(_element,'resize',__adjElement._$bind(E,_id))
:V._$addEvent(_element,'resize',__maxElement._$bind(E,_id));
};
E._$maxWidthElement=function(_element,_width,_ratio){
E._$maxBoxElement(_element,'width',_width,_ratio);
};
E._$maxHeightElement=function(_element,_height,_ratio){
E._$maxBoxElement(_element,'height',_height,_ratio);
};
var __getExpByClassName;
if(!!document.evaluate)
__getExpByClassName=function(_class){
if(!_class)return null;
if(!__sp.test(_class))
return"[contains(concat(' ', @class, ' '), ' "+_class+" ')]";
var _arr=_class.split(__sp),_result='';
for(var i=0,l=_arr.length,_tmp;i<l;i++){
_tmp=__getExpByClassName(_arr[i]);
_result+=!_tmp?'':_tmp;
}
return _result;
};
if(!window.Node)
window.Node={ELEMENT_NODE:1
};
if(B._$ISFF){
HTMLElement.prototype.__defineGetter__("innerText",function(){return this.textContent;});
HTMLElement.prototype.__defineSetter__("innerText",function(_content){this.textContent=_content;});
HTMLElement.prototype.insertAdjacentElement=function(_where,_element){
if(!_where||!_element)return;
switch(_where){
case'beforeEnd':this.appendChild(_element);return;
case'beforeBegin':this.parentNode.insertBefore(_element,this);return;
case'afterBegin':
!this.firstChild
?this.appendChild(_element)
:this.insertBefore(_element,this.firstChild);return;
case'afterEnd':
!this.nextSibling
?this.parentNode.appendChild(_element)
:this.parentNode.insertBefore(_element,this.nextSibling);return;
}
};
HTMLElement.prototype.insertAdjacentHTML=function(_where,_html){
if(!_where||!_html)return;
this.insertAdjacentElement(_where,
document.createRange().
createContextualFragment(_html));
};}
document.head=document.getElementsByTagName('head')[0]||document.body;
document.cloneElement=function(_tag,_class){
if(!__tp[_tag]){
__tp[_tag]=document.createElement(_tag);
__ec.appendChild(__tp[_tag]);
__initElementByTag(__tp[_tag]);
}
var _element=__tp[_tag].cloneNode(true);
!!_class&&(_element.className=_class);
__ec.appendChild(_element);
return _element;
};
if(B._$ISIE){
__hc=document.cloneElement('style');
document.head.appendChild(__hc);
}
})();
(function(window,document){
var __akey='__'+new Date().getTime()+'__';
var __events={};
var __cacheEventWithoutCached=function(_element,_type,_handler){
var _sn='ev_'+U._$randNumberString(),_object={evn:{}};
_object.evn[_type]=_handler;_object.elm=_element;
__events[_sn]=_object;_element[__akey]=_sn;
};
var __cacheEventWithCached=function(_sn,_type,_handler){
var _object=__events[_sn].evn,_function=_object[_type];
if(!_function){_object[_type]=_handler;return;}
if(!U._$isType(_function,'array')){
_object[_type]=[_function,_handler];return;
}
_function.push(_handler);
};
var __cacheEvent=function(_element,_type,_handler){
if(_element==window||_element==document||
_element==top||_element==parent)return;
var _sn=_element[__akey];
_sn?__cacheEventWithCached(_sn,_type,_handler)
:__cacheEventWithoutCached(_element,_type,_handler);
};
var __clearEventInCache=function(_sn,_type){try{
var _cache=__events[_sn];
if(!_cache)return;
if(!!_type){
var _handler=_cache.evn[_type];
if(!_handler)return;
if(!U._$isType(_handler,'array'))
V._$delEvent(_cache.elm,_type,_handler);
else
for(var h;h=_handler.pop();
V._$delEvent(_cache.elm,_type,h));
delete _cache.evn[_type];return;
}
__clearCacheWithSN(_sn);
}catch(e){}};
var __clearEventsInCache=function(){
for(var _sn in __events)try{__clearCacheWithSN(_sn);}catch(e){}
};
var __clearCacheWithSN=function(_sn){
var _cache=__events[_sn];
if(!_cache)return;
for(var _type in _cache.evn)
!!_type&&__clearEventInCache(_sn,_type);
_cache.elm[__akey]='';
delete _cache.elm;
delete _cache.evn;
delete __events[_sn];
};
var __onReadyStateChange=function(_callback,_event){
var _element=V._$getElement(_event)||document;
if(!_element||
(_element.readyState!='loaded'&&
_element.readyState!='complete'))
return;
_callback(_event);
};
var __isOnReadyStateChange=function(_element,_type){
var _tag=(_element.tagName||'').toLowerCase();
return B._$ISIE&&((_element==document&&_type=='DOMContentLoaded')
||((_tag=='iframe'||_tag=='script')&&_type=='load'));
};
var __addEvent,__delEvent;
if(!!document.addEventListener){
__addEvent=function(_element,_type,_handler,_capture){
_element.addEventListener(_type,_handler,!!_capture);
};
__delEvent=function(_element,_type,_handler,_capture){
_element.removeEventListener(_type,_handler,!!_capture);
};
}else{
__addEvent=function(_element,_type,_handler){
_element.attachEvent('on'+_type,_handler);
};
__delEvent=function(_element,_type,_handler){
_element.detachEvent('on'+_type,_handler);
};}
P('V');
V.__destroy=__clearEventsInCache;
V._$getElement=function(_event){
if(!_event)return null;
var _element=_event.target||_event.srcElement;
if(!arguments[1]||!U._$isType(arguments[1],'function'))
return _element;
while(_element){
if(!!arguments[1](_element))
return _element;
_element=_element.parentNode;
}
return null;
};
V._$addEvent=function(_element,_type,_handler,_capture){
_element=E._$getElement(_element);
if(!_element||!_type||!_handler)return;
if(__isOnReadyStateChange(_element,_type)){
_type='readystatechange';
_handler=__onReadyStateChange._$bind(null,_handler);
}
if(B._$ISIE&&_type=='input')_type='propertychange';
__addEvent(_element,_type,_handler,_capture);
__cacheEvent(_element,_type,_handler);
};
V._$delEvent=function(_element,_type,_handler,_capture){
_element=E._$getElement(_element);
if(!_element||!_type||!_handler)return;
__delEvent(_element,_type,_handler,_capture);
};
V._$clearEvent=function(_element,_type){
_element=E._$getElement(_element);
if(!_element)return;
if(__isOnReadyStateChange(_element,_type))
_type='readystatechange';
if(B._$ISIE&&_type=='input')
_type='propertychange';
__clearEventInCache(_element[__akey],_type);
};
V._$dispatchEvent=function(_element,_type){
_element=E._$getElement(_element);
if(!_element)return;
if(!!document.createEvent){
var _event=document.createEvent('MouseEvent');
_event.initEvent(_type,false,false);
_element.dispatchEvent(_event);
}else if(!!document.createEventObject){
_element.fireEvent('on'+_type);
}
};
V._$stop=function(_event){
V._$stopBubble(_event);
V._$stopDefault(_event);
};
V._$stopBubble=function(_event){
if(!_event)return;
!!_event.stopPropagation
?_event.stopPropagation()
:_event.cancelBubble=true;
};
V._$stopDefault=function(_event){
if(!_event)return;
!!_event.preventDefault
?_event.preventDefault()
:_event.returnValue=false;
};
V._$pointerX=function(_event){
if(!_event)return 0;
return _event.pageX||(_event.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));
};
V._$pointerY=function(_event){
if(!_event)return 0;
return _event.pageY||(_event.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));
};
})(this,document);
(function(){
var p=P(N.ut);
p._$$Event=C();
p._$$Event.prototype._$initialize=function(){
this.__events={};
};
p._$$Event.prototype._$addEvent=function(_type,_event){
if(!_type||!_event||
!U._$isType(_event,'Function'))return;
this.__events[_type.toLowerCase()]=_event;
};
p._$$Event.prototype._$batEvent=function(_event){
if(!_event)return;
for(var p in _event)
this._$addEvent(p,_event[p]);
};
p._$$Event.prototype._$delEvent=function(_type){
if(!_type)return;
delete this.__events[_type.toLowerCase()];
};
p._$$Event.prototype._$getEvent=function(_type){
return this.__events[_type.toLowerCase()]||null;
};
p._$$Event.prototype._$dispatchEvent=function(){
if(!arguments.length)return;
var _type=Array.prototype.shift.apply(arguments),
_event=this.__events[_type.toLowerCase()];
if(!!_event)_event.apply(window,arguments);
};
})();
V._$addEvent(window,'unload',function(){
V.__destroy();
E.__destroy();
U.__destroy();
B.__destroy();
});
(function(){
var p=P(N.ut),
__proItem;
p._$$Item=C();
__proItem=p._$$Item._$extend(p._$$Event);
p._$$Item._$allocate=function(_data,_parent,_options){
if(!_data)return null;
var _options=_options||{};
if(_options._single_||!U._$isType(_data,'Array')){
var _item=!!this.__pool
&&this.__pool.shift()
||new this();
_item._$reset(_options);
_item._$appendToParent(_parent);
_item._$setData(_data);
return _item;
}
if(!_data.length)return null;
var _arr=[];
for(var i=_options._start_||0,k=0,
l=Math.min(_options._end_||_data.length,_data.length);i<l;k++,i++){
_options._index_=k;
_arr.push(this._$allocate(_data[i],_parent,_options));
}
return _arr;
};
p._$$Item._$recycle=function(_item){
if(!_item)return null;
if(_item instanceof this){
_item._$destroy();
this.__pool&&
this.__pool.push(_item);
return null;
}
if(_item.constructor==Array)
for(var i;i=_item.pop();this._$recycle(i));
return null;
};
__proItem._$initialize=function(_tkey){
this._$super();
this.__body=E._$getNodeTemplate(_tkey);
this.constructor.__pool=this.constructor.__pool||[];
};
__proItem._$appendToParent=function(_parent,_before){
this.__parent=E._$getElement(_parent);
if(!this.__parent||!this.__body)return;
!_before?this.__parent.appendChild(this.__body)
:this.__parent.insertAdjacentElement('afterBegin',this.__body);
};
__proItem._$destroy=function(){
delete this.__data;
E._$removeElementByEC(this.__body);
};
__proItem._$getData=function(){
return this.__data||null;
};
__proItem._$setData=function(_data){
this.__data=_data||O;
};
__proItem._$reset=F;
})();
(function(){
var p=P(N.ui),
__proUIAbstract;
var __style,
__uispace=/\#\<.*?\>/gi;
p._$pushStyle=function(_style,_space){
if(!_style||!_style.replace)return;
if(!__style)__style=[];
if(!!_space)
_style=_style.replace(__uispace,'.'+_space);
__style.push(_style);
};
p._$dumpStyle=function(){
if(!__style)return;
E._$parseStyle(__style.join(''));
__style=null;
};
p._$$UIAbstract=C();
__proUIAbstract=p._$$UIAbstract._$extend(P(N.ut)._$$Event);
p._$$UIAbstract._$allocate=function(_parent,_options){
_options=_options||{};
_options.group=!!_options.singleton&&
'__singleton__'||_options.group;
var _instance;
if(!!_options.group){
this.__group=this.__group||{};
_instance=this.__group[_options.group];
}else{
this.__pool=this.__pool||[];
_instance=this.__pool.shift();
}
if(!!_instance){
_instance._$destroy();
_instance._$reset(_parent,_options);
}else{
_instance=new this(_parent,_options);
}
if(!!_options.group)
this.__group[_options.group]=_instance;
return _instance;
};
p._$$UIAbstract._$recycle=function(_instance){
if(!(_instance instanceof this))return null;
var _group=_instance._$group();
if(!!_group&&!this.__group[_group])return null;
_instance._$destroy();
if(!!_group)delete this.__group[_group];
this.__pool=this.__pool||[];
this.__pool.push(_instance);
return null;
};
__proUIAbstract._$initialize=function(_parent,_options){
this._$super();p._$dumpStyle();
this.__body=document.cloneElement('div',this.__getSpace());
this.__body.innerHTML=this.__getXhtml()||'';
this.__intXnode();
this._$reset(_parent,_options);
};
__proUIAbstract._$destroy=function(){
if(!this._$getEvent('onbeforedestroy'))return;
this._$dispatchEvent('onbeforedestroy');
this._$delEvent('onbeforedestroy');
E._$delClassName(this.__body,this.__class);
E._$removeElementByEC(this.__body);
delete this.__class;
};
__proUIAbstract._$reset=function(_parent,_options){
_options=_options||O;
this.__group=_options.group;
this._$resetOption(_options);
this._$appendToParent(_parent,!!_options.before);
};
__proUIAbstract._$resetOption=function(_options){
_options=_options||O;
this.__class=_options['class']||'';
E._$addClassName(this.__body,this.__class);
this._$addEvent('onbeforedestroy',_options.onbeforedestroy||F);
};
__proUIAbstract._$getBody=function(){
return this.__body;
};
__proUIAbstract._$appendToParent=function(_parent,_before){
if(!this.__body)return;
_parent=E._$getElement(_parent);
if(!_parent)return;
this.__parent=_parent;
!_before?this.__parent.appendChild(this.__body)
:this.__parent.insertAdjacentElement('afterBegin',this.__body);
};
__proUIAbstract._$group=function(){
return this.__group||null;
};
__proUIAbstract.__getSpace=F;
__proUIAbstract.__getXhtml=F;
__proUIAbstract.__intXnode=F;
})();
(function(){
var p=P(N.ui),
__proZOption,
__proSuggest,
__uispace='ui-'+U._$randNumberString();
var __hovered='js-zhvr-900';
p._$pushStyle('#<uispace>{position:relative;zoom:1;text-align:left;}\
               #<uispace> .zcom{width:160px;border:1px solid #aaa;}\
               #<uispace> .zcse{z-index:1000;visibility:hidden;position:absolute;top:20px;left:0;background:#fff;}\
               #<uispace> .zitm{width:100%;height:20px;line-height:20px;cursor:default;}\
               #<uispace> .zitm.js-zhvr-900{background-color:#316ac5;}',__uispace);
p._$$ZOption=C();
__proZOption=p._$$ZOption._$extend(P(N.ut)._$$Item,true);
__proZOption._$initialize=function(){
this._$super();
this.__body=document.cloneElement('div','zitm thide');
V._$addEvent(this.__body,'click',this.__onClick._$bind(this));
V._$addEvent(this.__body,'mouseout',this._$hover._$bind(this,false));
V._$addEvent(this.__body,'mouseover',this.__onMouseOvr._$bind(this));
};
__proZOption._$reset=function(_options){
_options=_options||O;
this._$hover(false);
this.__index=_options._index_;
this._$addEvent('onclick',_options.onclick||F);
this._$addEvent('onmouseover',_options.onmouseover||F);
};
__proZOption._$hover=function(_hovered){
_hovered?E._$addClassName(this.__body,__hovered)
:E._$delClassName(this.__body,__hovered);
};
__proZOption._$setData=function(_value){
this.__value=_value||'';
this.__body.title=this.__value;
this.__body.innerText=this.__value;
};
__proZOption._$getValue=function(){
return this.__value;
};
__proZOption.__onClick=function(_event){
V._$stopDefault(_event);
this._$dispatchEvent('onclick',this.__value);
};
__proZOption.__onMouseOvr=function(){
this._$hover(true);
this._$dispatchEvent('onmouseover',this.__index);
};
p._$$Suggest=C();
__proSuggest=p._$$Suggest._$extend(p._$$UIAbstract,true);
__proSuggest._$initialize=function(_parent,_options){
this.__iopt={onclick:this.__onItemSelect._$bind(this),
onmouseover:this.__onItemChange._$bind(this)};
this._$super(_parent,_options);
};
__proSuggest._$destroy=function(){
p._$$Suggest._$supro._$destroy.call(this);
this.__hideList();
};
__proSuggest._$resetOption=function(_options){
_options=_options||O;
p._$$Suggest._$supro._$resetOption.call(this,_options);
this._$addEvent('onenter',_options.onenter||F);
this._$addEvent('onchange',_options.onchange||F);
this._$addEvent('onselect',_options.onselect||F);
};
__proSuggest._$resetList=function(_list){
if(!_list||!_list.length)return;
this.__index=-1;
this.__items=p._$$ZOption
._$allocate(_list,this.__case,this.__iopt);
this.__case.style.visibility='visible';
};
__proSuggest._$getValue=function(){
return this.__text.value;
};
__proSuggest._$setValue=function(_value){
this.__text.value=_value||'';
};
__proSuggest._$focus=function(){
this.__text.focus();
};
__proSuggest._$select=function(){
this.__text.select();
};
__proSuggest.__getSpace=function(){
return __uispace;
};
__proSuggest.__getXhtml=function(){
return'<input style="height:19px;*padding:1px 0;" class="zcom ztxt" type="text" /><div class="zcom zcse"></div>';
};
__proSuggest.__intXnode=function(){
var _ntmp=E._$getChildElements(this.__body);
this.__text=_ntmp[0];
this.__case=_ntmp[1];
V._$addEvent(this.__text,'click',V._$stop._$bind(V));
V._$addEvent(this.__text,'blur',this.__selectItem._$bind(this));
V._$addEvent(this.__text,'keypress',this.__onEnter._$bind(this));
V._$addEvent(this.__text,'input',this.__onValueChange._$bind(this));
V._$addEvent(document,'click',this.__hideList._$bind(this));
V._$addEvent(document,'keydown',this.__onKeyPress._$bind(this));
};
__proSuggest.__onEnter=function(_event){
if(_event.keyCode!=13)return;
this._$dispatchEvent('onenter');
};
__proSuggest.__onValueChange=function(){
var _value=U._$trim(this.__text.value);
if(!_value)return;
this.__hideList();
this._$dispatchEvent('onchange',_value);
};
__proSuggest.__onKeyPress=function(_event){
if(this.__case.style.visibility!='visible')return;
var _code=_event.keyCode;
if(_code==13){
this.__selectItem();
}else if(_code==38||_code==40){
this.__moveItem(_code-39);
}
};
__proSuggest.__onItemSelect=function(_value){
this.__text.value=_value||'';
this._$dispatchEvent('onselect',this.__text.value);
};
__proSuggest.__onItemChange=function(_index){
var _item=this.__items[this.__index];
if(!!_item)_item._$hover(false);
this.__index=_index;
};
__proSuggest.__hideList=function(){
this.__case.style.visibility='hidden';
this.__items=p._$$ZOption._$recycle(this.__items);
};
__proSuggest.__moveItem=function(_flag){
var _item=this.__items[this.__index];
if(!!_item)_item._$hover(false);
this.__index=(this.__index+_flag)%this.__items.length;
if(this.__index<0)this.__index=this.__items.length-1;
var _item=this.__items[this.__index];
if(!!_item)_item._$hover(true);
};
__proSuggest.__selectItem=function(){
if(!this.__items||!this.__items.length)return;
this.__onItemSelect(this.__items[
Math.max(0,Math.min(this.__index,
this.__items.length-1))]._$getValue());
this.__hideList();
this._$dispatchEvent('onenter');
};
})();
P('J');
(function(){
var __pool={},
__timeout=60000;
var __clear=function(_sn){
var _req=__pool[_sn];
if(!_req)return;
delete __pool[_sn];
var _rpc=_req.rpc;
delete _req.rpc;
_req.timer=window.clearTimeout(_req.timer);
V._$clearEvent(_rpc);
if(!B._$ISIE)E._$removeElement(_rpc);
};
var __onLoad=function(_sn){
if(!__pool[_sn])return;
var _load=__pool[_sn].onload;
__clear(_sn);!!_load&&_load();
};
var __onError=function(_sn,_message){
var _error=__pool[_sn].onerror||
__pool[_sn].onload||F;
__clear(_sn);
_error(_message||'脚本加载出错！');
};
J._$loadStyle=function(_url){
if(!_url)return;
var _link=document.cloneElement('link');
document.head.appendChild(_link);
_link.href=_url;
};
J._$loadScript=function(_url,_onload,_onerror){
var _sn='rpc_'+U._$randNumberString(),
_script=document.cloneElement('script');
__pool[_sn]={rpc:_script,onload:_onload,onerror:_onerror,
timer:window.setTimeout(__onError._$bind(window,_sn,'请求超时！'),__timeout)};
V._$addEvent(_script,'load',__onLoad._$bind(window,_sn));
V._$addEvent(_script,'error',__onError._$bind(window,_sn,'无法加载指定的脚本文件！'));
_script.src=_url;document.head.appendChild(_script);return _script;
};
})();
P('J');
(function(){
var __msxml,
__cache={},
__local=[location.host,location.hostname,document.domain],
__domain=/^(?:http\:\/\/)?(.*?\.([\w]+\.[\w]+)(?:\:[\d]+)?)(?:\/|$)/i;
var __parseDomain=function(_url){
if(/^\s*\//.test(_url))return __local;
var _arr=_url.match(__domain);
return!_arr||_arr.length<3?[]:_arr;
};
var __newXDR=function(_window){
if(!_window)return null;
if(_window.gx)return _window.gx();
if(_window.XMLHttpRequest)
try{return new _window.XMLHttpRequest();}catch(e){}
if(__msxml)
try{return new _window.ActiveXObject(__msxml);}catch(e){}
var _msxml=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0",
"Msxml2.XMLHTTP.4.0","Msxml2.XMLHTTP.5.0",
"MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
for(var i=0,l=_msxml.length,v;i<l;i++){
try{v=new _window.ActiveXObject(_msxml[i]);
__msxml=_msxml[i];return v;}catch(e){}}
return null;
};
var __registXDomain=function(_domain){
var _cache=__cache[_domain];
if(!_cache)return;
try{_cache.w=E._$getElement(_domain).contentWindow;}catch(e){}
};
J._$allocateXDR=function(_domain){
var _arr=__parseDomain(_domain);
_domain=_arr[1]||location.host;
var _xdr=__cache[_domain];
if(!_xdr){
this._$registXDomain(_domain);
return null;
}
return _xdr.p.shift()||__newXDR(_xdr.w);
};
J._$recycleXDR=function(_domain,_xdr){
if(!_xdr)return;
delete _xdr.onreadystatechange;
_xdr.abort();
};
J._$getXWindow=function(_domain){
var _arr=__parseDomain(_domain);
_domain=_arr[1]||location.host;
var _xdr=__cache[_domain];
return _xdr&&_xdr.w||null;
};
J._$isXDomain=function(_domain){
var _arr=__parseDomain(_domain);
return!!_arr[1]&&_arr[1]!=location.host;
};
J._$registXDomain=function(_domain){
if(_domain==location.host){
__cache[_domain]={w:window,p:[]};return;
}
var _arr=__parseDomain(_domain);
if(_arr[2]!=document.domain)return;
if(!_arr[1]||!!__cache[_arr[1]])return;
var _url=_domain.indexOf('http')==0
?_domain:('//'+_arr[1]+'/crossdomain.html');
__cache[_arr[1]]={w:null,p:[]};
var _iframe=document.cloneElement('iframe');
_iframe.id=_arr[1];
_iframe.style.display='none';
V._$addEvent(_iframe,'load',__registXDomain._$bind(null,_arr[1]));
document.body.appendChild(_iframe);
_iframe.src=_url;
};
J._$registXDomain(location.host);
V._$addEvent(document,'keypress',function(_event){_event.keyCode==27&&V._$stop(_event);});
})();
(function(){
var p=P(N.ut),
__proXDR,
__pool=[],
__einterval=2500,
__tinterval=40000;
p._$$XDR=C();
__proXDR=p._$$XDR._$extend(p._$$Event);
p._$$XDR._$allocate=function(_options){
var _xdr=__pool.shift()||new this();
_xdr._$reset(_options);return _xdr;
};
p._$$XDR._$recycle=function(_xdr){
if(_xdr instanceof this){
_xdr._$destroy();
__pool.push(_xdr);
}
};
__proXDR._$reset=function(_options){
_options=_options||O;
this.__url=_options.url||'';
this.__rtype=_options.rtype||'text';
this.__ctype=_options.ctype||'text/plain';
this.__method=_options.method||'POST';
this.__interval=_options.interval||__tinterval;
this.__notimeout=_options.notimeout||false;
this._$addEvent('onload',_options.onload||F);
this._$addEvent('onerror',_options.onerror||F);
this._$addEvent('ontimeout',_options.ontimeout||_options.onerror||F);
};
__proXDR._$send=function(_data){
if(!this.__url){
this._$dispatchEvent('onerror','请提供请求的地址!');return;
}
if(!this.__notimeout&&!this.__rtimer)
this.__timer=window.setTimeout(
this.__onTimeout._$bind(this),this.__interval);
this.__xdr=J._$allocateXDR(this.__url);
if(!this.__xdr){
this.__rtimer=window.setTimeout(
this._$send._$bind(this,_data),__einterval);return;
}
if(J._$isXDomain(this.__url)&&B._$ISOP)
this.__sendInOP(_data);
else if(B._$ISIE)
this.__sendInIE(_data);
else
this.__send(_data);
};
__proXDR._$destroy=function(){
this._$delEvent('onload');
this._$delEvent('onerror');
this._$delEvent('ontimeout');
J._$recycleXDR(this.__url,this.__xdr);
delete this.__xdr;
};
__proXDR.__send=function(_data){
try{
this.__xdr.open(this.__method,this.__url,true);
this.__xdr.setRequestHeader("Content-Type",this.__ctype);
this.__xdr.onreadystatechange=this.__onStateChange._$bind(this);
this.__xdr.send(_data);
}catch(e){
this._$dispatchEvent('onerror','无法发送请求,'+e.message);
}
};
__proXDR.__sendInIE=function(_data){
window.setTimeout(this.__send._$bind(this,_data),100);
};
__proXDR.__sendInOP=function(_data){
try{
var _window=J._$getXWindow(this.__url);
if(!_window.b){
_window.b=_window.document.createElement('input');
_window.b.type='button';
_window.document.body.appendChild(_window.b);
}
_window.b.onclick=this.__send._$bind(this,_data);
_window.b.click();
}catch(e){}
};
__proXDR.__getResponseBody=function(){
switch(this.__rtype.toLowerCase()){
case'xml':return this.__xdr.responseXML;
case'text':return this.__xdr.responseText;
case'json':try{return eval('('+this.__xdr.responseText+')');}catch(e){};
}
return null;
};
__proXDR.__onStateChange=function(){
try{
if(!this.__xdr||this.__xdr.readyState!=4)return;
if(!!this.__timer)
this.__timer=window.clearTimeout(this.__timer);
if(this.__xdr.status!=200){
this._$dispatchEvent('onerror','服务器返回异常['+this.__xdr.status+']!');return;
}
this._$dispatchEvent('onload',this.__getResponseBody());
}catch(e){
this._$dispatchEvent('onerror','网络异常，请检查网络状况!');
}
};
__proXDR.__onTimeout=function(){
if(!!this.__rtimer)
this.__rtimer=window.clearTimeout(this.__rtimer);
if(!this.__timer)return;
this.__timer=window.clearTimeout(this.__timer);
this._$dispatchEvent('ontimeout','请求超时！');
};
})();
(function(){
var __cache={};
var __serialize=function(_data){
if(!_data)return null;
var _arr=[];
for(var p in _data)
_arr.push(encodeURIComponent(p)+'='+
encodeURIComponent(_data[p]));
return _arr.join('&');
};
var __destroy=function(_sn){
var _object=__cache[_sn];
if(!_object)return;
P(N.ut)._$$XDR
._$recycle(_object.req);
delete _object.req;
delete _object.onload;
delete _object.onerror;
delete __cache[_sn];
};
var __onLoad=function(_sn,_data){
var _object=__cache[_sn];
if(!_object)return;
try{_object.onload(_data);}catch(e){}
__destroy(_sn);
};
var __onError=function(_sn,_message){
var _object=__cache[_sn];
if(!_object)return;
try{_object.onerror(_message);}catch(e){}
__destroy(_sn);
};
J._$request=function(_path,_options){
if(!_path)return;
_options=_options||O;
var _sn=U._$randNumberString(),
_object={url:_path,
rtype:_options.type,
ctype:'application/x-www-form-urlencoded',
method:_options.method,
onload:__onLoad._$bind(window,_sn),
onerror:__onError._$bind(window,_sn)};
__cache[_sn]={req:P(N.ut)._$$XDR._$allocate(_object),
onload:_options.onload||F,
onerror:_options.onerror||F};
__cache[_sn].req._$send(__serialize(_options.data));return _sn;
};
})();
(function(){
var __logger=F;
J._$registDWRLogger=function(_logger){
__logger=_logger||F;
};
var __cache={},
__batch;
var __buildParams=function(_prefix,_params){
if(!__batch)return;
for(var i=0,l=_params.length,_value;i<l;i++){
_value=__serialize(_params[i],_prefix);
_value&&(__batch.m[_prefix+'-param'+i]=_value);
}
};
var __serialize=function(_data,_prefix){
if(_data==undefined)return'null:null';
if(U._$isType(_data,'Boolean'))
return'boolean:'+(!!_data?'true':'false');
if(U._$isType(_data,'Number'))
return'number:'+_data;
if(U._$isType(_data,'String'))
return'string:'+encodeURIComponent(_data);
if(U._$isType(_data,'Date'))
return'Date:'+_data.getTime();
if(U._$isType(_data,'Array'))
return __serializeArray(_data,_prefix);
if(U._$isType(_data,'Object'))
return __serializeObject(_data,_prefix);
if(U._$isType(_data,'Function'))
return'';
return'default:'+_data;
};
var __serializeArray=function(_list,_prefix){
var _arr=[];
for(var i=0,l=_list.length,_ref,_value;i<l;i++){
__batch.p++;
_ref=_prefix+'-e'+__batch.p;
_value=__serialize(_list[i],_prefix);
if(!_value)continue;
__batch.m[_ref]=_value;
_arr.push('reference:'+_ref);
}
return'Array:['+_arr.join(',')+']';
};
var __serializeObject=function(_object,_prefix){
var _arr=[];
for(var p in _object){
__batch.p++;
_ref=_prefix+'-e'+__batch.p;
_value=__serialize(_object[p],_prefix);
if(!_value)continue;
__batch.m[_ref]=_value;
_arr.push(encodeURIComponent(p)+':reference:'+_ref);
}
return'Object_Object:{'+_arr.join(',')+'}';
};
var __parseSendData=function(_data,_sep){
if(!_data)return null;
var _arr=[];
for(var p in _data)
_arr.push(_sep=='&'
?(encodeURIComponent(p)+'='+
encodeURIComponent(_data[p]))
:(p+'='+_data[p]));
return _arr.join(_sep||'\n');
};
var __loadData=function(_flag,_path,_class,_method){
var _single=false;
if(!__batch){this._$beginBatch();_single=true;}
var _args=Array.prototype.slice.call(arguments,0);
__batch.t=_args.shift()||0;
__batch.u=_args.shift();
var _prefix='c'+__batch.m.callCount;
__batch.m[_prefix+'-scriptName']=_args.shift();
__batch.m[_prefix+'-methodName']=_args.shift();
__batch.m[_prefix+'-id']=__batch.m.callCount;
var _cb={c:F,e:null};
if(_args.length>0&&!!_args[_args.length-1]&&
U._$isType(_args[_args.length-1],'Function')){
_cb.c=_args.pop();
}
if(_args.length>0&&!!_args[_args.length-1]&&
U._$isType(_args[_args.length-1],'Function')){
_cb.e=_cb.c;
_cb.c=_args.pop();
}
__batch.h[__batch.m.callCount]=_cb;
__buildParams(_prefix,_args);
__batch.m.callCount++;
if(_single)this._$endBatch();
};
var __sendBatch=function(_bid){
var _batch=__cache[_bid];
if(!_batch)return;
_batch.u+='/call/plaincall/';
_batch.u+=_batch.m.callCount>1
?'Multiple.'+_batch.m.callCount+'.dwr'
:_batch.m['c0-scriptName']+'.'
+_batch.m['c0-methodName']+'.dwr';
if(_batch.t==2){
J._$loadScript(_batch.u+'?'+
__parseSendData(_batch.m,'&'),
null,__onDWRError._$bind(window,_bid));
return;
}
var _options={onload:__onDWRLoad._$bind(window,_bid),
onerror:__onDWRError._$bind(window,_bid)};
if(_batch.t==1){
_options.url=_batch.u+'?'+
__parseSendData(_batch.m,'&');
_options.method='GET';
_batch.r=P(N.ut)._$$XDR._$allocate(_options);
_batch.r._$send(null);
return;
}
_options.url=_batch.u;
_options.method='POST';
_batch.r=P(N.ut)._$$XDR._$allocate(_options);
_batch.r._$send(__parseSendData(_batch.m,'\n'));
};
var __onDWRLoad=function(_bid,_text){
try{
!_text||_text.search('//#DWR')<0
?__onDWRError(_bid,'返回数据不合法!')
:eval('(function(){'+_text+'})();');
}catch(e){
__onDWRError(_bid,e.message);
}finally{
__destroyBatch(_bid);
}
};
var __onDWRError=function(_bid,_message){
__logger(_message);
var _batch=__cache[_bid];
if(!_batch)return;
_batch=_batch.h;
for(var p in _batch){
!_batch[p].e
?_batch[p].c(null)
:_batch[p].e(_message);
}
};
var __onLoad=function(_bid,_cid,_data){
var _batch=__cache[_bid];
if(!_batch)return;
_batch.h[_cid].c(_data);
};
var __onError=function(_bid,_cid,_error){
__logger('服务器返回错误信息：'+_error.message);
var _batch=__cache[_bid];
if(!_batch)return;
_batch=_batch.h[_cid];
!_batch.e
?_batch.c(null)
:_batch.e(_error);
};
var __onBError=function(_bid,_error){
var _batch=__cache[_bid];
if(!_batch)return;
for(var i=0,l=_batch.m.callCount;
i<l;__onError(_bid,i,_error,true),i++);
};
var __destroyBatch=function(_bid){
var _batch=__cache[_bid];
if(!_batch)return;
P(N.ut)._$$XDR
._$recycle(_batch.r);
delete _batch.r;
delete _batch.h;
delete __cache[_bid];
};
J._$beginBatch=function(){
if(__batch)return;
__batch={h:{},p:0,m:{callCount:0,
scriptSessionId:'${scriptSessionId}187'}};
};
J._$endBatch=function(){
if(!__batch||!__batch.u){
__batch=null;return;
}
var _bid=U._$randNumberString(4);
__batch.m.batchId=_bid;
__cache[_bid]=__batch;
__batch=null;
__sendBatch(_bid);
};
J._$postDataByDWR=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,0);
__loadData.apply(J,arguments);
};
J._$loadDataByDWR=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,1);
__loadData.apply(J,arguments);
};
J._$loadDataByTAG=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,2);
__loadData.apply(J,arguments);
};
P('dwr.engine');
dwr.engine['_remoteHandleCallback']=__onLoad;
dwr.engine['_remoteHandleException']=__onError;
dwr.engine['_remoteHandleBatchException']=__onBError;
})();
(function(){
var __char='0123456789abcdef',
__length=8;
var __md5cr=function(x,y){
x[y>>5]|=0x80<<((y)%32);x[(((y+64)>>>9)<<4)+14]=y;
var a=1732584193,b=-271733879,c=-1732584194,d=271733878;
for(var i=0,l=x.length,_oa,_ob,_oc,_od;i<l;i+=16){
_oa=a;_ob=b;_oc=c;_od=d;
a=__md5ff(a,b,c,d,x[i+0],7,-680876936);
d=__md5ff(d,a,b,c,x[i+1],12,-389564586);
c=__md5ff(c,d,a,b,x[i+2],17,606105819);
b=__md5ff(b,c,d,a,x[i+3],22,-1044525330);
a=__md5ff(a,b,c,d,x[i+4],7,-176418897);
d=__md5ff(d,a,b,c,x[i+5],12,1200080426);
c=__md5ff(c,d,a,b,x[i+6],17,-1473231341);
b=__md5ff(b,c,d,a,x[i+7],22,-45705983);
a=__md5ff(a,b,c,d,x[i+8],7,1770035416);
d=__md5ff(d,a,b,c,x[i+9],12,-1958414417);
c=__md5ff(c,d,a,b,x[i+10],17,-42063);
b=__md5ff(b,c,d,a,x[i+11],22,-1990404162);
a=__md5ff(a,b,c,d,x[i+12],7,1804603682);
d=__md5ff(d,a,b,c,x[i+13],12,-40341101);
c=__md5ff(c,d,a,b,x[i+14],17,-1502002290);
b=__md5ff(b,c,d,a,x[i+15],22,1236535329);
a=__md5gg(a,b,c,d,x[i+1],5,-165796510);
d=__md5gg(d,a,b,c,x[i+6],9,-1069501632);
c=__md5gg(c,d,a,b,x[i+11],14,643717713);
b=__md5gg(b,c,d,a,x[i+0],20,-373897302);
a=__md5gg(a,b,c,d,x[i+5],5,-701558691);
d=__md5gg(d,a,b,c,x[i+10],9,38016083);
c=__md5gg(c,d,a,b,x[i+15],14,-660478335);
b=__md5gg(b,c,d,a,x[i+4],20,-405537848);
a=__md5gg(a,b,c,d,x[i+9],5,568446438);
d=__md5gg(d,a,b,c,x[i+14],9,-1019803690);
c=__md5gg(c,d,a,b,x[i+3],14,-187363961);
b=__md5gg(b,c,d,a,x[i+8],20,1163531501);
a=__md5gg(a,b,c,d,x[i+13],5,-1444681467);
d=__md5gg(d,a,b,c,x[i+2],9,-51403784);
c=__md5gg(c,d,a,b,x[i+7],14,1735328473);
b=__md5gg(b,c,d,a,x[i+12],20,-1926607734);
a=__md5hh(a,b,c,d,x[i+5],4,-378558);
d=__md5hh(d,a,b,c,x[i+8],11,-2022574463);
c=__md5hh(c,d,a,b,x[i+11],16,1839030562);
b=__md5hh(b,c,d,a,x[i+14],23,-35309556);
a=__md5hh(a,b,c,d,x[i+1],4,-1530992060);
d=__md5hh(d,a,b,c,x[i+4],11,1272893353);
c=__md5hh(c,d,a,b,x[i+7],16,-155497632);
b=__md5hh(b,c,d,a,x[i+10],23,-1094730640);
a=__md5hh(a,b,c,d,x[i+13],4,681279174);
d=__md5hh(d,a,b,c,x[i+0],11,-358537222);
c=__md5hh(c,d,a,b,x[i+3],16,-722521979);
b=__md5hh(b,c,d,a,x[i+6],23,76029189);
a=__md5hh(a,b,c,d,x[i+9],4,-640364487);
d=__md5hh(d,a,b,c,x[i+12],11,-421815835);
c=__md5hh(c,d,a,b,x[i+15],16,530742520);
b=__md5hh(b,c,d,a,x[i+2],23,-995338651);
a=__md5ii(a,b,c,d,x[i+0],6,-198630844);
d=__md5ii(d,a,b,c,x[i+7],10,1126891415);
c=__md5ii(c,d,a,b,x[i+14],15,-1416354905);
b=__md5ii(b,c,d,a,x[i+5],21,-57434055);
a=__md5ii(a,b,c,d,x[i+12],6,1700485571);
d=__md5ii(d,a,b,c,x[i+3],10,-1894986606);
c=__md5ii(c,d,a,b,x[i+10],15,-1051523);
b=__md5ii(b,c,d,a,x[i+1],21,-2054922799);
a=__md5ii(a,b,c,d,x[i+8],6,1873313359);
d=__md5ii(d,a,b,c,x[i+15],10,-30611744);
c=__md5ii(c,d,a,b,x[i+6],15,-1560198380);
b=__md5ii(b,c,d,a,x[i+13],21,1309151649);
a=__md5ii(a,b,c,d,x[i+4],6,-145523070);
d=__md5ii(d,a,b,c,x[i+11],10,-1120210379);
c=__md5ii(c,d,a,b,x[i+2],15,718787259);
b=__md5ii(b,c,d,a,x[i+9],21,-343485551);
a=__md5ad(a,_oa);b=__md5ad(b,_ob);
c=__md5ad(c,_oc);d=__md5ad(d,_od);
}return[a,b,c,d];
};
var __md5bh=function(b){
var _arr=[];
for(var i=0,l=b.length*4;i<l;
_arr.push(__char.charAt((b[i>>2]>>((i%4)*8+4))&0xF)+
__char.charAt((b[i>>2]>>((i%4)*8))&0xF)),i++);
return _arr.join('');
};
var __md5sb=function(s){
var _bin=[],_mask=(1<<__length)-1;
for(var i=0,l=s.length*__length;i<l;
_bin[i>>5]|=(s.charCodeAt(i/__length)&_mask)<<(i%32),i+=__length);
return _bin;
};
var __md5ad=function(x,y){
var _lsw=(x&0xFFFF)+(y&0xFFFF),
_msw=(x>>16)+(y>>16)+(_lsw>>16);
return(_msw<<16)|(_lsw&0xFFFF);
};
var __md5br=function(x,y){
return(x<<y)|(x>>>(32-y));
};
var __md5cm=function(q,a,b,x,s,t){
return __md5ad(__md5br(__md5ad(__md5ad(a,q),__md5ad(x,t)),s),b);
};
var __md5ff=function(a,b,c,d,x,s,t){
return __md5cm((b&c)|((~b)&d),a,b,x,s,t);
};
var __md5gg=function(a,b,c,d,x,s,t){
return __md5cm((b&d)|(c&(~d)),a,b,x,s,t);
};
var __md5hh=function(a,b,c,d,x,s,t){
return __md5cm(b^c^d,a,b,x,s,t);
};
var __md5ii=function(a,b,c,d,x,s,t){
return __md5cm(c^(b|(~d)),a,b,x,s,t);
};
_$md5=function(_content){
return __md5bh(__md5cr(__md5sb(_content),_content.length*__length));
};
})();
