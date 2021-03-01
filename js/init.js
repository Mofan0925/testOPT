
var test = new Vue({
	el: '.wrap',
	data: {
		libs: ['base'],
		picked: 'Exp',		
		jira: 'OPT-1234',
		csscode: '',
		csssel: '',
		jscode: '',
		htmlcode: '',
		htmlcsssel: '',
		clickcsssel: '',
		elname: '',
		clickTrack: ['AA'],
		result: '',
		tracking: [],
		wrapCode: '',
		jquery: '',
	},
	watch: {
		libs: 		function(){ genCode(this); },
		picked: 	function(){ genCode(this); },
		jira:		function(){ genCode(this); },
		csscode:	function(){ genCode(this); },
		csssel:		function(){ genCode(this); },
		jscode:		function(){ genCode(this); },
		htmlcode: 	function(){ genCode(this); },
		htmlcsssel: function(){ genCode(this); },
		tracking:	function(){ genCode(this); },
		clickcsssel:function(){ genCode(this); },
		elname:		function(){ genCode(this); },
		clickTrack:	function(){ genCode(this); },
		wrapCode:	function(){ genCode(this); },
		jquery:		function(){ genCode(this); },
	},
	methods: {
	},
});

var textAreas = [].slice.call(document.querySelectorAll('textarea[data-adaptheight]'));
var minHeight = 200;

textAreas.forEach(function(el) {

	el.style.boxSizing = el.style.mozBoxSizing = 'border-box';
	el.style.overflowY = 'hidden';

	el.addEventListener('input', function() {
		adjustHeight(el, minHeight);
	});

	window.addEventListener('resize', function() {
		adjustHeight(el, minHeight);
	});

	adjustHeight(el, minHeight);
});

function genCode(o){

	var code = [];
	
	code['start'] = '(function(){';
	
	code['obj-base'] = '\r\n\r\n// ========== (1) Helper functions ========== //\r\n\r\n    var optTest=function(info){var jira=info.jira,ver=info.ver,object=null;function fireTag(e){var t={event_category:"Target",event_subcategory:this.jira,event_content:this.ver,event_action:e};utag.link(t),console.log(t)}function fireLoad(){var e=fireTag.bind(this);setTimeout(function(){e("Loaded")},2e3)}function fireMbox(e,t,o){t=t||"",o=o||"",createDiv(e).setAttribute("class","mboxDefault"),"undefined"==typeof adobe?(document.getElementById(e).getAttribute("class").indexOf("mbox-name-")<0&&mboxDefine(e,e),mboxUpdate(e,t+"="+o),console.log("fireMbox (mbox.js): "+e+(t?" ("+t+": "+o+")":""))):adobe.target.getOffer({mbox:e,params:{param:o},success:function(r){console.log("fireMbox (at.js): "+e+(t?" ("+t+": "+o+")":"")),adobe.target.applyOffer({mbox:e,selector:"#"+e,offer:r})},error:function(e,t){console.log("fireMbox failed")}})}function ready(func,sel){var me=this,cnt=5e3,timer=0,count=0;function loop(sel){var errSel="",pass=[];if(timer++,sel.length>0)for(var i=0;i<sel.length;i++){pass[i]=!0;try{void 0===eval(sel[i])&&(pass[i]=!1)}catch(e){pass[i]=!1}pass[i]||null==document.querySelector(sel[i])||(document.querySelectorAll(sel[i]).length>1?count=document.querySelectorAll(sel[i]).length:(me.object=document.querySelector(sel[i]),pass[i]=!0)),pass[i]||(errSel+=(""==errSel?"":", ")+sel[i])}for(var flag=!0,i=0;i<pass.length;i++)0==pass[i]&&(flag=!1);flag?(console.log("Ready until: "+timer),func(me)):count>1?console.log(count+" elements match with the selector - "+errSel):(cnt-=10,cnt>0?setTimeout(function(){loop(sel)},10):console.log("Object not found - "+errSel))}sel=sel||[],"string"==typeof sel&&(sel=[sel]),loop(sel)}function createDiv(e,t){var o;if(t=t||"body",null!=document.querySelector("#"+e))o=document.querySelector("#"+e);else{(o=document.createElement("div")).id=e;var r=document.querySelector(t);null!=r&&r.appendChild(o)}return o}return void 0===window.optmeta&&(window.optmeta=[]),window.optmeta.push(info),{jira:jira,ver:ver,object:object,fireTag:fireTag,fireMbox:fireMbox,ready:ready,createDiv:createDiv,fireLoad:fireLoad}};';
	
	
	// CSS library checked?
	if (o.libs.indexOf('css') > -1){
	
		code['obj-css'] = '\r\n\r\n    var optCSS=function(e){function n(e){d.innerHTML=e}function t(e){d.innerHTML+=e}var d;return document.getElementById(e)?(d=document.getElementById(e),d.innerHTML=""):(d=document.createElement("style"),d.id=e,d.type="text/css",document.getElementsByTagName("head")[0].appendChild(d)),{set:n,add:t}};';
		
		code['act-css'] = '\r\n\r\n    myTest.ready( defineCSS );';
		
		code['imp-css'] = '\r\n\r\n    function defineCSS(ot){\r\n        var mycss = optCSS(ot.jira + "-css");\r\n        mycss.set(\'' + o.csscode.replace(/\n/g, '\\\n            ') + '\');\r\n    }';
		
	} else {
	
		code['obj-css'] = '';
		code['act-css'] = '';
		code['imp-css'] = '';
		
	}
	
	code['act'] = '\r\n\r\n// ========== (2) On Load Actions ========== //\r\n\r\n    var myTest = optTest({\r\n        "jira" : "'+ o.jira +'",\r\n        "ver" : "'+ o.picked +'",\r\n    });';
	
	
	// On-load tracking needed?
	if (o.tracking.length > 0){
		code['act-track'] = '\r\n\r\n    myTest.ready( trackOnLoad );';
		
		code['imp-track'] = '\r\n\r\n    function trackOnLoad(ot){';
		if (o.tracking.indexOf('AA') > -1){
			code['imp-track'] += '\r\n        ot.fireLoad();';
		}
		if (o.tracking.indexOf('AT') > -1){
			code['imp-track'] += '\r\n        ot.fireMbox( ot.jira + "-loaded");';
		}
		code['imp-track'] += '\r\n    }';
		
	} else {
		code['act-track'] = '';
		code['imp-track'] = '';
	}
	
	// Edit HTML needed?
	if (o.libs.indexOf('html') > -1){
	
		var param = '';
		var htmlcmd = '';
		
		if (o.htmlcsssel != ''){
			param = ', "' + o.htmlcsssel + '"';
			htmlcmd = '        ot.object.innerHTML = \'' + o.htmlcode.replace(/\n/g, '\n        ') + '\';\r\n';
		}
	
		code['act-html'] = '\r\n\r\n    myTest.ready( editHTML' + param + ' );';
		
		code['imp-html'] = '\r\n\r\n    function editHTML(ot){\r\n' + htmlcmd + '    }';
		
		
	} else {
		code['act-html'] = '';
		code['imp-html'] = '';
	}
	
	// Click Track needed?
	if (o.libs.indexOf('click') > -1){
	
		var param = '';
		var htmlcmd = '';
		var name = (o.elname=='')? '' : ('-' + o.elname);
		
		if (o.clickcsssel != ''){
			param = ', "' + o.clickcsssel + '"';
			
			if (o.clickTrack.length > 0){
			
				htmlcmd = '        ot.object.addEventListener("click", function(e){\r\n';
			
				if (o.clickTrack.indexOf('AA') > -1){
					htmlcmd += '                ot.fireTag( "clicked' + name + '" );\r\n';
				}
				if (o.clickTrack.indexOf('AT') > -1){
					htmlcmd += '                ot.fireMbox( ot.jira + "-clicked' + name + '");\r\n';
				}
				
				htmlcmd += '        }.bind(ot), false);\r\n';
				
			}
			
		}
	
		code['act-click'] = '\r\n\r\n    myTest.ready( trackClick' + param + ' );';
		
		code['imp-click'] = '\r\n\r\n    function trackClick(ot){\r\n' + htmlcmd + '    }';
		
		
	} else {
		code['act-click'] = '';
		code['imp-click'] = '';
	}
	
	// Custom function needed?
	if (o.libs.indexOf('function') > -1){
	
		var param = '';
		
		if (o.csssel != ''){
			param = ', "' + o.csssel + '"';
		}
	
		code['act-func'] = '\r\n\r\n    myTest.ready( myfunc' + param + ' );';
		
		code['imp-func'] = '\r\n\r\n    function myfunc(ot){\r\n        ' + o.jscode.replace(/\n/g, '\n        ') + '\r\n    }';
		
		
	} else {
		code['act-func'] = '';
		code['imp-func'] = '';
	}
	
	// Implementation
	code['imple'] = '\r\n\r\n// ========== (3) Implementation ========== //';
	
	code['end'] = '\r\n\r\n})(this);';
	
	o.result = code['start'] + code['obj-base'] + code['obj-css'] + code['act'] + code['act-track'] + code['act-css'] + code['act-html'] + code['act-click'] + code['act-func'] + code['imple'] + code['imp-track'] + code['imp-css'] + code['imp-html'] + code['imp-click'] + code['imp-func'] + code['end'];
	
	// With script tag
	if (o.wrapCode != ''){
		o.result = '<script>\r\n' + o.result + '\r\n</script>';
	}
	
	setTimeout( function(){
		adjustHeight(document.querySelector('#code'), minHeight);
	}, 50 );
}

function adjustHeight(el, minHeight) {
	var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
	var diff = outerHeight - el.clientHeight;

	el.style.height = 0;
	el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
}

