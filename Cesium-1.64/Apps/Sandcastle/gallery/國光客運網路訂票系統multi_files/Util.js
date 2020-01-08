// JScript 檔

function CheckKeyNumber()
{ 
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if (sKeychar >= '0' && sKeychar <= '9')  {
    return true; }
  else {
    return false;
  }
}

function CheckKeyNumberNeg()
{ 
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if ((sKeychar >= '0' && sKeychar <= '9') || (sKeychar=='-')) {
    return true;
  } else {
    return false;
  }
}

function CheckKeyNumeric()
{
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if ((sKeychar >= '0' && sKeychar <= '9') || (sKeychar=='.')) {
    return true;
  } else {
    return false;
  }
}

function CheckKeyNumericNeg()
{
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if ((sKeychar >= '0' && sKeychar <= '9') || (sKeychar=='.') || (sKeychar=='-')) {
    return true;
  } else {
    return false;
  }
}

function CheckKeyAZ09()
{
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if (sKeychar >= '0' && sKeychar <= '9') {
    return true; 
  } else if (sKeychar >= 'a' && sKeychar <= 'z') {
    event.keyCode = event.keyCode - 32; 
    return true;
  } else if (sKeychar >= 'A' && sKeychar <= 'Z') {
    return true;
  } else  {
    return false;  
  }
}

function CheckKeyCar()
{
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if (sKeychar >= '0' && sKeychar <= '9') {
    return true; 
  } else if (sKeychar >= 'a' && sKeychar <= 'z') {
    event.keyCode = event.keyCode - 32; 
    return true;
  } else if (sKeychar >= 'A' && sKeychar <= 'Z') {
    return true;
  } else if (sKeychar == '-') {
    return true;
  } else  {
    return false;  
  }
}

function CheckKeyDate()
{ 
  var sKeychar = String.fromCharCode(event.keyCode)
  
  if ((sKeychar >= '0' && sKeychar <= '9') || (sKeychar=='/')) {
    return true;
  } else {
    return false;
  }
}

function ToUpper()
{
   if (event.keyCode >= 97 && event.keyCode <= 122) {
     event.keyCode = event.keyCode - 32; 
   }  
}

function setFocus(pObj)
{
   pObj.focus();
   pObj.value = pObj.value;
  // pObj.select();
}


function trim(pStr) {
      return pStr.replace(/^\s+|\s+$/g,"");
}
    
function repeats(pStr, pCnt) { 
  if (pCnt <= 0) {
     return "";
  } else {   
      return (new Array(pCnt + 1)).join(pStr);
  }  
}

function DisableTextBox(pObj, pClearValu) { 
    if (pClearValu == true) { pObj.value=''; }
    pObj.setAttribute('readonly','readonly',0); pObj.className='readonly'; 
} 

function EnableTextBox(pObj) { 
  pObj.removeAttribute('readonly',0); pObj.className=''; 
} 

//**************************************************************************
//* 功能：四捨五入
//* 參數：1.數值字串 2.至小數位數
//**************************************************************************
function NumberFixed(pNum, pDecLens){
    var sNum = 0;
    if (trim(pNum) == "") {
       return 0;
    } else {
       return Math.round( pNum * Math.pow(10,pDecLens) ) / Math.pow(10, pDecLens)
    }   
}

//**************************************************************************
//* 功能：字串取代
//* 參數：1.來源字串 2.待取代者 3.取代者
//**************************************************************************
function ReplaceAll(pSrc, pFind, pReplace){
   var I = 0;
   while(pSrc.indexOf(pFind,I) != -1) {
      pSrc = pSrc.replace(pFind, pReplace);
      I = pSrc.indexOf(pFind,I);
   }
   return pSrc;
} 

//**************************************************************************
//* 功能：數值格式化(千位符號)
//* 參數：1.數值字串
//**************************************************************************
function FormatNumber(pNum) { 
  var sNumBK = pNum; 
  var sNegFlag = false; 
             
  if(pNum.charAt(0) == "-"){ 
      sNegFlag = true; 
      pNum = pNum.substr(1, pNum.length-1); 
  } 
             
  var sAry = pNum.split("."); 
  var sNumPos = sAry[0]; 
  var sAryPos = []; 
  var j = sNumPos.length;
  var m = Math.floor(j / 3);
  var n = sNumPos.length % 3 || 3; 

  // 仟分位 
  for (var i = 0; i < j; i += n) { 
     if (i != 0) {n = 3;} 
     sAryPos[sAryPos.length] = sNumPos.substr(i, n); 
     m -= 1; 
  } 

  pNum = sAryPos.join(","); 
  if (sNumBK.indexOf(".") != -1) { pNum += "." + sAry[1]; } 
  if (sNegFlag == true) { pNum = "-" + pNum; } 
  return pNum; 
} 
   
//**************************************************************************
//* 功能：取得非格式化之數值
//* 參數：1.數值欄位之ClientID
//**************************************************************************  
function GetNoFmtNum(pObjID) {  
  var sObj = $get(pObjID); 
  var sAmt = trim(sObj.value);
  if (sAmt == "") { sAmt = "0"; } 
  return parseInt(ReplaceAll(sAmt,',',''));
}   
   
//**************************************************************************
//* 功能：數值欄位取得駐點時，取消格式化
//* 參數：1.數值欄位之ClientID
//**************************************************************************  
function NumObj_Focus(pObjID) {  
  var sObj = $get(pObjID); 
  sObj.value = ReplaceAll(sObj.value,',','');
}

//**************************************************************************
//* 功能：數值欄位離開駐點時，格式化
//* 參數：1.數值欄位之ClientID
//**************************************************************************  
function NumObj_Leave(pObjID) {  
  var sObj = $get(pObjID); 
  sObj.value = FormatNumber(sObj.value);
}            

//**************************************************************************
//* 功能：預設欄位２之值與欄位１相同
//* 參數：1.欄位之ClientID   2.欄位之ClientID
//**************************************************************************  
function setSameValue(pSrcID, pTargetID) {
   var sSrc = $get(pSrcID); 
   var sTarget = $get(pTargetID); 
   if (sTarget.value == "") {
      sTarget.value = sSrc.value;
   }
}

//**************************************************************************
//* 功能：日期驗證
//* 參數：1.日期欄位值   2.日期分隔符號(./-)
//**************************************************************************  
function CheckDate(pStr, pFilter) {
  if (trim(pStr) == '') { return false; }
  var sFmt = /(\d{4})[年./-](\d{1,2})[月./-](\d{1,2})[日]?$/;
  if (! sFmt.test(pStr) ) { return false; }
  
  var sAry = pStr.split(pFilter);
  sAry[0] = parseInt(sAry[0],10);
  sAry[1] = parseInt(sAry[1],10) -1;
  sAry[2] = parseInt(sAry[2],10);
  
  var sDate = new Date(sAry[0],sAry[1],sAry[2]);
  //alert(sDate.getFullYear()+'--'+sDate.getMonth()+'--'+sDate.getDate());
  if ( (sDate.getFullYear() == sAry[0]) && 
         (sDate.getMonth()  == sAry[1]) && 
         (sDate.getDate()  == sAry[2]) ) {
      return true;
  } else {
      return false;
  }     
}

//**************************************************************************
//* 功能：驗證月份欄位，錯誤時取得駐點
//* 參數：1.月份欄位ID   2.比對最小年月之ID(可省略)  3.比對最大年月之ID(可省略)
//**************************************************************************  
function MonthObj_Onblur(pObjID, pCopyID, pMinObjID, pMaxObjID) { 
   var sDtObj = $get(pObjID);
   sDtObj.style.backgroundColor="";
   var sDtValu = trim(sDtObj.value);
   if (sDtValu == '') {  sDtObj.value = '';  return; }   
   
   var sAry = sDtValu.split("/"); 
   if (sAry.length != 2) { 
      alert('月份格式須為(yyyy/MM)，例:2008/01');  
      SetErrBackColor(sDtObj); return;  }  
   if (sAry[0].length != 4 || sAry[1].length != 2) { 
      alert('月份格式須為(yyyy/MM)，例:2008/01'); 
      SetErrBackColor(sDtObj); return;  }   
   if ((trim(sAry[0])=='') || (trim(sAry[1])=='') ) {
      alert('月份格式須為(yyyy/MM)，例:2008/01'); 
      SetErrBackColor(sDtObj); return; 
   }
   
   var sInt = parseInt(sAry[1],10);
   if (sInt < 1 || sInt >12 ) { alert('月份錯誤!'); SetErrBackColor(sDtObj); return; }  
   
   var sMinYYMM = '1900/01';
   var sMaxYYMM = '9999/12';
   if (pMinObjID != null) { sMinYYMM = $get(pMinObjID).value; } 
   if (pMaxObjID != null) { sMaxYYMM = $get(pMaxObjID).value;  } 
   
   sDtObj.value = sAry[0] + '/' + (sAry[1].length==1 ? "0":"") + sAry[1];
   if (sDtObj.value < sMinYYMM) {alert('年月不可小於'+sMinYYMM+'!'); SetErrBackColor(sDtObj); return; }
   if (sDtObj.value > sMaxYYMM) {alert('年月不可大於'+sMaxYYMM+'!'); SetErrBackColor(sDtObj); return; }   
  
   //----------------------* 是否預設迄值欄位
   if (pCopyID != null) { if (trim(pCopyID) != '') setSameValue(pObjID, pCopyID);  } 
}


//**************************************************************************
//* 功能：驗證日期欄位，錯誤時取得駐點
//* 參數：1.日期欄位ID  2.比對最小日期之ID(可省略)  3.比對最大日期之ID(可省略)
//**************************************************************************  
function DateObj_Onblur(pObjID, pCopyID, pMinObjID, pMaxObjID) { 
   var sDtObj = $get(pObjID);
   sDtObj.style.backgroundColor="";
   var sDtValu = trim(sDtObj.value);
   if (sDtValu == '') {  sDtObj.value = '';  return; }   
   
   
   var sAry = sDtValu.split("/");  
   if (sAry.length != 3) { 
      alert('日期格式須為(yyyy/MM/dd)，例:2008/01/01'); 
      SetErrBackColor(sDtObj); return;  }   
   if ((trim(sAry[0])=='') || (trim(sAry[1])=='') || (trim(sAry[2])=='')) {
      alert('日期格式須為(yyyy/MM/dd)，例:2008/01/01'); 
      SetErrBackColor(sDtObj); return; 
   }
   
   var sInt = parseInt(sAry[1],10);
   if (sInt < 1 || sInt >12 ) { alert('月份錯誤!'); SetErrBackColor(sDtObj); return; }  
   sInt = parseInt(sAry[2],10);
   if (sInt < 1 || sInt >31 ) { alert('日期錯誤!'); SetErrBackColor(sDtObj); return; }
   sDtValu = sAry[0] + '/' + sAry[1] + '/' + sAry[2];
   if (! CheckDate(sDtValu, '/')) { alert('日期錯誤!'); SetErrBackColor(sDtObj); return; }
   
   var sMinYYMM = '1900/01/01';
   var sMaxYYMM = '9999/12/31';
   if (pMinObjID != null) { sMinYYMM = $get(pMinObjID).value; } 
   if (pMaxObjID != null) { sMaxYYMM = $get(pMaxObjID).value;  } 
   
   
   sDtObj.value = sAry[0] + '/'
                + (sAry[1].length==1 ? "0":"") + sAry[1] + '/'
                + (sAry[2].length==1 ? "0":"") + sAry[2];
   if (sDtObj.value < sMinYYMM) {alert('日期不可小於'+sMinYYMM+'!'); SetErrBackColor(sDtObj); return false; }
   if (sDtObj.value > sMaxYYMM) {alert('日期不可大於'+sMaxYYMM+'!'); SetErrBackColor(sDtObj); return false; }      

   //----------------------* 是否預設迄值欄位             
   if (pCopyID != null) { if (trim(pCopyID) != '') setSameValue(pObjID, pCopyID);  }                
}

function SetErrBackColor(pErrObj) {
    //var tmpBlur = pErrObj.blur;
    //pErrObj.blur = null; 
    //pErrObj
    //setTimeout(function() {
    //    pErrObj.style.backgroundColor="Pink";
    //    pErrObj.focus();
    //    pErrObj.blur = tmpBlur;
   //}, 0);
    pErrObj.style.backgroundColor="Pink";
    pErrObj.focus();
}
//IE OK,chrome NG
function resizeIframe(obj) {
    obj.style.height = 0;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
function setIframeHeight(ifrm){
    var doc = ifrm.contentDocument? ifrm.contentDocument:
    ifrm.contentWindow.document;
    var RestHeight=ifrm.style.height; //Capture original height see why below.
    ifrm.style.visibility = "hidden";
    ifrm.style.height = "10px"; //Necessary to work properly in some browser eg IE
    var NewHeight = getDocHeight( doc ) + 10;
    if (NewHeight>20){
        ifrm.style.height=NewHeight + "px";
    } else { //if dom returns silly height value put back old height see above.
        ifrm.style.height=RestHeight + "px";
    }
    ifrm.style.visibility = "visible";
}

function getDocHeight(doc) {
    doc = doc || document;
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight,
    html.scrollHeight, html.offsetHeight );
    return height;
}

function resizeIframe(obj) {
obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}

function iFrameHeight() {
	var f = document.getElementById('blockrandom') ;
        f.style.height = '100px' ;
	var d = (f.contentWindow.document || f.contentDocument);
	var h = Math.max(d.body.offsetHeight, d.body.scrollHeight) ;
	h += (document.all)? 60 : 20 ;
	f.style.height = h+ 'px' ;
	f.setAttribute("height", h)
}
function calcHeight()
{
  //find the height of the internal page
 var F = document.getElementById("blockrandom");
   if(F.contentDocument) {
  var the_height = F.contentDocument.documentElement.scrollHeight+30;
  }else {
  var the_height= F.contentWindow.document.body.scrollHeight; //IE6, IE7 and Chrome
  }
  alert(the_height);
  //change the height of the iframe
  document.getElementById('blockrandom').height= the_height;
}
// Notify ScriptManager that this is the end of the script.
if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();




