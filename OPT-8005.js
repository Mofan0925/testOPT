800t-control.js

<script>
(function(){

// ========== (1) Helper functions ========== //

    var optTest=function(info){var jira=info.jira,ver=info.ver,object=null;function fireTag(e){var t={event_category:"Target",event_subcategory:this.jira,event_content:this.ver,event_action:e};utag.link(t),console.log(t)}function fireLoad(){var e=fireTag.bind(this);setTimeout(function(){e("Loaded")},2e3)}function fireMbox(e,t,o){t=t||"",o=o||"",createDiv(e).setAttribute("class","mboxDefault"),"undefined"==typeof adobe?(document.getElementById(e).getAttribute("class").indexOf("mbox-name-")<0&&mboxDefine(e,e),mboxUpdate(e,t+"="+o),console.log("fireMbox (mbox.js): "+e+(t?" ("+t+": "+o+")":""))):adobe.target.getOffer({mbox:e,params:{param:o},success:function(r){console.log("fireMbox (at.js): "+e+(t?" ("+t+": "+o+")":"")),adobe.target.applyOffer({mbox:e,selector:"#"+e,offer:r})},error:function(e,t){console.log("fireMbox failed")}})}function ready(func,sel){var me=this,cnt=5e3,timer=0,count=0;function loop(sel){var errSel="",pass=[];if(timer++,sel.length>0)for(var i=0;i<sel.length;i++){pass[i]=!0;try{void 0===eval(sel[i])&&(pass[i]=!1)}catch(e){pass[i]=!1}pass[i]||null==document.querySelector(sel[i])||(document.querySelectorAll(sel[i]).length>1?count=document.querySelectorAll(sel[i]).length:(me.object=document.querySelector(sel[i]),pass[i]=!0)),pass[i]||(errSel+=(""==errSel?"":", ")+sel[i])}for(var flag=!0,i=0;i<pass.length;i++)0==pass[i]&&(flag=!1);flag?(console.log("Ready until: "+timer),func(me)):count>1?console.log(count+" elements match with the selector - "+errSel):(cnt-=10,cnt>0?setTimeout(function(){loop(sel)},10):console.log("Object not found - "+errSel))}sel=sel||[],"string"==typeof sel&&(sel=[sel]),loop(sel)}function createDiv(e,t){var o;if(t=t||"body",null!=document.querySelector("#"+e))o=document.querySelector("#"+e);else{(o=document.createElement("div")).id=e;var r=document.querySelector(t);null!=r&&r.appendChild(o)}return o}return void 0===window.optmeta&&(window.optmeta=[]),window.optmeta.push(info),{jira:jira,ver:ver,object:object,fireTag:fireTag,fireMbox:fireMbox,ready:ready,createDiv:createDiv,fireLoad:fireLoad}};

// ========== (2) On Load Actions ========== //

    var myTest = optTest({
        "jira" : "OPT-8005",
        "ver" : "Control",
    });

    myTest.ready( trackOnLoad );
// ========== (3) Implementation ========== //
    function trackOnLoad(ot){
        ot.fireLoad()
        }
})(this);
</script>

8005-experienceA.js

(function(){

	// ========== (1) Helper functions ========== //
	
		var optTest=function(info){var jira=info.jira,ver=info.ver,object=null;function fireTag(e){var t={event_category:"Target",event_subcategory:this.jira,event_content:this.ver,event_action:e};utag.link(t),console.log(t)}function fireLoad(){var e=fireTag.bind(this);setTimeout(function(){e("Loaded")},2e3)}function fireMbox(e,t,o){t=t||"",o=o||"",createDiv(e).setAttribute("class","mboxDefault"),"undefined"==typeof adobe?(document.getElementById(e).getAttribute("class").indexOf("mbox-name-")<0&&mboxDefine(e,e),mboxUpdate(e,t+"="+o),console.log("fireMbox (mbox.js): "+e+(t?" ("+t+": "+o+")":""))):adobe.target.getOffer({mbox:e,params:{param:o},success:function(r){console.log("fireMbox (at.js): "+e+(t?" ("+t+": "+o+")":"")),adobe.target.applyOffer({mbox:e,selector:"#"+e,offer:r})},error:function(e,t){console.log("fireMbox failed")}})}function ready(func,sel){var me=this,cnt=5e3,timer=0,count=0;function loop(sel){var errSel="",pass=[];if(timer++,sel.length>0)for(var i=0;i<sel.length;i++){pass[i]=!0;try{void 0===eval(sel[i])&&(pass[i]=!1)}catch(e){pass[i]=!1}pass[i]||null==document.querySelector(sel[i])||(document.querySelectorAll(sel[i]).length>1?count=document.querySelectorAll(sel[i]).length:(me.object=document.querySelector(sel[i]),pass[i]=!0)),pass[i]||(errSel+=(""==errSel?"":", ")+sel[i])}for(var flag=!0,i=0;i<pass.length;i++)0==pass[i]&&(flag=!1);flag?(console.log("Ready until: "+timer),func(me)):count>1?console.log(count+" elements match with the selector - "+errSel):(cnt-=10,cnt>0?setTimeout(function(){loop(sel)},10):console.log("Object not found - "+errSel))}sel=sel||[],"string"==typeof sel&&(sel=[sel]),loop(sel)}function createDiv(e,t){var o;if(t=t||"body",null!=document.querySelector("#"+e))o=document.querySelector("#"+e);else{(o=document.createElement("div")).id=e;var r=document.querySelector(t);null!=r&&r.appendChild(o)}return o}return void 0===window.optmeta&&(window.optmeta=[]),window.optmeta.push(info),{jira:jira,ver:ver,object:object,fireTag:fireTag,fireMbox:fireMbox,ready:ready,createDiv:createDiv,fireLoad:fireLoad}};
	
		var optCSS=function(e){function n(e){d.innerHTML=e}function t(e){d.innerHTML+=e}var d;return document.getElementById(e)?(d=document.getElementById(e),d.innerHTML=""):(d=document.createElement("style"),d.id=e,d.type="text/css",document.getElementsByTagName("head")[0].appendChild(d)),{set:n,add:t}};
		
		var optStickyTop=function(e){var t=0,n=document.querySelector(e);function o(e){var n=document.querySelector(e).querySelector(".stickmenuWrap"),o=window.pageYOffset||document.documentElement.scrollTop,c=i();0!=t&&o<=t&&(c=-300),n.style.top=c+"px"}function i(){var e=document.querySelector(".header");return e?e.clientHeight+e.offsetTop:0}return n&&(n.innerHTML='<div class="stickmenuWrap"><div class="stickymenu"></div></div>',window.addEventListener("scroll",function(){o(e)}),window.addEventListener("resize",function(){o(e)}),optCSS("optStickyTop-css").set(".stickmenuWrap{ z-index:999; width:100%; overflow:hidden; display:block; position:fixed; left:0; transition: top 0.5s ease; } .stickymenu{ width:100%; overflow:hidden; background:#FFF; }")),{setShowUntil:function(e){var n=document.querySelector(e);n&&(console.log("t = "+n.getBoundingClientRect().top+", h = "+n.clientHeight),t=n.getBoundingClientRect().top+n.clientHeight-i())},setContentHTML:function(e){var t=n.querySelector(".stickymenu");t&&(t.innerHTML=e)}}};
	
	
	// ========== (2) On Load Actions ========== //
	
		var myTest = optTest({
			"jira" : "OPT-8005",
			"ver" : "exp",
		});
		
		myTest.ready( defineCSS );
		myTest.ready( trackOnLoad );
		myTest.ready( createStickyBar, 'body > main.grid.O-SMARTSPCGENGRID > div:nth-child(2) > div > div:nth-child(1)' ); 
		myTest.ready( trackClick, "#pp_sticky_button_3" );
		
	
	// ========== (3) Implementation ========== //
		function trackOnLoad(ot){
			ot.fireLoad();
		}
		
		function defineCSS(ot){
			var mycss = optCSS(ot.jira + "-css");
			mycss.set('\
				.stickymenu { width: 100%; overflow: hidden; background: white; border-bottom: 1px solid lightgrey;}\
				.stickycontent {width: 100%; max-width: 1280px; margin: 0 auto; }\
				.stickycontent > div { padding: 14px; display:inline-block;}\
				#pp_sticky_button_1 {background: #000000; border: 1px solid #000000; margin-right: 10px;}\
				#pp_sticky_button_1:hover { background: #404040; }\
				#pp_sticky_button_1:active { background: #767676; }\
				.stickycontent a#pp_sticky_button_3{text-decoration: underline;}\
				.stickycontent a#pp_sticky_button_3:hover{cursor: pointer;}\
				@media only screen and (min-width:480px) {\
					.stickycontent > div.left{line-height:52px;}\
					.stickycontent > div.right{float:right; }\
					.stickycontent > div.right a{display:inline-block;}\
					#pp_sticky_button_1 {float:left;}\
					.intro-section { padding-top: 80px; }\
				}\
				@media only screen and (max-width:810px) {\
					.stickycontent {display:flex;}\
					.stickycontent > div.left{flex: 1; line-height:25px; }\
					.stickycontent > div.right{flex:0 0 480px; }\
					.intro-section { padding-top: 118px; }\
				}\
				@media only screen and (max-width:695px) {\
					.stickycontent {flex-wrap:wrap;}\
					.stickycontent > div.left{flex: none;}\
					.stickycontent > div.right{padding-top:0px; flex: none;}\
					.stickycontent .right a#pp_sticky_button_2{padding-left:5px; padding-right:5px;}\
					.intro-section { padding-top: 118px; }\
				}\
				@media only screen and (max-width:479px) {\
					.stickycontent {display:block;}\
					.stickycontent > div.left{padding:14px}\
					.stickycontent > .right a{padding:14px 17px 15px}\
					.stickycontent .right a#pp_sticky_button_2{margin-top:14px;}\
					.intro-section { padding-top:186px; }\
				}\
			');
		}
		
		function createStickyBar(ot){
			
			// Create and place the sticky bar container
			var newDiv = ot.createDiv("topSticky");
			document.querySelector('body').insertBefore( newDiv, document.querySelector('#top-of-content + div') );
			
			// Make sticky and assign content
			var stickyBar = optStickyTop('#topSticky');
	
			stickyBar.setContentHTML('\
				<div class="stickycontent">\
					<div class="left">查看<a id="pp_sticky_button_3">申请条件</a>，5步快速完成在线申请</div>\
					<div class="right">\
					   <a class="A-BTNP-RW-ALL" href="https://creditcards.hsbc.com.cn/hfcoas/c-1162/index" target="_self" id="pp_sticky_button_1" data-pid="pws_zh_cn_cc_pd_choice_0_1_cdc_choicentc_200729" data-pid-action="cta">立即申请</a>\
					   <a class="A-BTNSO-RW-ALL" href="https://creditcards.hsbc.com.cn/hfcoas/etb-1162/index" target="_self" id="pp_sticky_button_2" data-pid="pws_zh_cn_cc_pd_choice_0_2_cdc_choiceetb_200729" data-pid-action="cta">已持有汇丰中国个人银行账户申请</a>\
					</div>\
				</div>\
			');
		}
	
	 function goTo(target){
			var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
			if (scrollT >target) {
				var timer = setInterval(function(){
					var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
					var step = Math.floor(-scrollT/6);
					document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
					if(scrollT <= target){
						document.body.scrollTop = document.documentElement.scrollTop = target;
						clearTimeout(timer);
					}
				},20)
			}else if(scrollT == 0){
				var timer = setInterval(function(){
					var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
					var step = Math.floor(300/3*0.7);
					document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
					if(scrollT >= target){
						document.body.scrollTop = document.documentElement.scrollTop = target;
						clearTimeout(timer);
					}
				},20)
			}else if(scrollT < target){
				var timer = setInterval(function(){
					var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
					var step = Math.floor(scrollT/6);
					document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
					if(scrollT >= target){
						document.body.scrollTop = document.documentElement.scrollTop = target;
						clearTimeout(timer);
					}
				},20)
			}else if(target == scrollT){
				return false;
			}
		}
		/*Get the scrollTop value*/
		 function getScrollTopVal(){
               var scard = jQuery("#content_main_advanced_expander_1").offset().top;			   
			   var topHeight= jQuery(".stickmenuWrap").position().top+jQuery(".stickmenuWrap").height();
				var target=scard-topHeight-30;
				return target;					
		 }
		 /*"申请条件dropdown true "*/
		 jQuery('#content_main_advanced_expander_1 div.dropdown').click(function(){
			if(jQuery('#content_main_advanced_expander_1 div.dropdown').attr('aria-expanded')==="true"){				
				goTo(getScrollTopVal());					
			};
		  })
		function trackClick(ot){
			ot.object.addEventListener("click", function(e){			   
				goTo(getScrollTopVal());
				jQuery('#content_main_advanced_expander_1 div.dropdown').attr('aria-expanded',"true");
				jQuery('#449681080__panel0').addClass('expanded').attr('aria-hidden','true');
				ot.fireTag( "6958-sticky-findoutmore");		
			}.bind(ot), false);
		}
	})(this);
	
opt-experienceB.js

(function(){

	// ========== (1) Helper functions ========== //
	
		var optTest=function(info){var jira=info.jira,ver=info.ver,object=null;function fireTag(e){var t={event_category:"Target",event_subcategory:this.jira,event_content:this.ver,event_action:e};utag.link(t),console.log(t)}function fireLoad(){var e=fireTag.bind(this);setTimeout(function(){e("Loaded")},2e3)}function fireMbox(e,t,o){t=t||"",o=o||"",createDiv(e).setAttribute("class","mboxDefault"),"undefined"==typeof adobe?(document.getElementById(e).getAttribute("class").indexOf("mbox-name-")<0&&mboxDefine(e,e),mboxUpdate(e,t+"="+o),console.log("fireMbox (mbox.js): "+e+(t?" ("+t+": "+o+")":""))):adobe.target.getOffer({mbox:e,params:{param:o},success:function(r){console.log("fireMbox (at.js): "+e+(t?" ("+t+": "+o+")":"")),adobe.target.applyOffer({mbox:e,selector:"#"+e,offer:r})},error:function(e,t){console.log("fireMbox failed")}})}function ready(func,sel){var me=this,cnt=5e3,timer=0,count=0;function loop(sel){var errSel="",pass=[];if(timer++,sel.length>0)for(var i=0;i<sel.length;i++){pass[i]=!0;try{void 0===eval(sel[i])&&(pass[i]=!1)}catch(e){pass[i]=!1}pass[i]||null==document.querySelector(sel[i])||(document.querySelectorAll(sel[i]).length>1?count=document.querySelectorAll(sel[i]).length:(me.object=document.querySelector(sel[i]),pass[i]=!0)),pass[i]||(errSel+=(""==errSel?"":", ")+sel[i])}for(var flag=!0,i=0;i<pass.length;i++)0==pass[i]&&(flag=!1);flag?(console.log("Ready until: "+timer),func(me)):count>1?console.log(count+" elements match with the selector - "+errSel):(cnt-=10,cnt>0?setTimeout(function(){loop(sel)},10):console.log("Object not found - "+errSel))}sel=sel||[],"string"==typeof sel&&(sel=[sel]),loop(sel)}function createDiv(e,t){var o;if(t=t||"body",null!=document.querySelector("#"+e))o=document.querySelector("#"+e);else{(o=document.createElement("div")).id=e;var r=document.querySelector(t);null!=r&&r.appendChild(o)}return o}return void 0===window.optmeta&&(window.optmeta=[]),window.optmeta.push(info),{jira:jira,ver:ver,object:object,fireTag:fireTag,fireMbox:fireMbox,ready:ready,createDiv:createDiv,fireLoad:fireLoad}};
	
		var optCSS=function(e){function n(e){d.innerHTML=e}function t(e){d.innerHTML+=e}var d;return document.getElementById(e)?(d=document.getElementById(e),d.innerHTML=""):(d=document.createElement("style"),d.id=e,d.type="text/css",document.getElementsByTagName("head")[0].appendChild(d)),{set:n,add:t}};
		
		var optStickyTop=function(e){var t=0,n=document.querySelector(e);function o(e){var n=document.querySelector(e).querySelector(".stickmenuWrap"),o=window.pageYOffset||document.documentElement.scrollTop,c=i();0!=t&&o<=t&&(c=-300),n.style.top=c+"px"}function i(){var e=document.querySelector(".header");return e?e.clientHeight+e.offsetTop:0}return n&&(n.innerHTML='<div class="stickmenuWrap"><div class="stickymenu"></div></div>',window.addEventListener("scroll",function(){o(e)}),window.addEventListener("resize",function(){o(e)}),optCSS("optStickyTop-css").set(".stickmenuWrap{ z-index:999; width:100%; overflow:hidden; display:block; position:fixed; left:0; transition: top 0.5s ease; } .stickymenu{ width:100%; overflow:hidden; background:#FFF; }")),{setShowUntil:function(e){var n=document.querySelector(e);n&&(console.log("t = "+n.getBoundingClientRect().top+", h = "+n.clientHeight),t=n.getBoundingClientRect().top+n.clientHeight-i())},setContentHTML:function(e){var t=n.querySelector(".stickymenu");t&&(t.innerHTML=e)}}};
	
	
	// ========== (2) On Load Actions ========== //
	
		var myTest = optTest({
			"jira" : "OPT-8005",
			"ver" : "exp",
		});
		
		myTest.ready( defineCSS );
		myTest.ready( trackOnLoad );
		myTest.ready( createStickyBar, 'body > main.grid.O-SMARTSPCGENGRID > div:nth-child(2) > div > div:nth-child(1)' ); 
		myTest.ready( trackClick, "#pp_sticky_button_1" );
		
	
	// ========== (3) Implementation ========== //
		function trackOnLoad(ot){
			ot.fireLoad();
		}
		
		function defineCSS(ot){
			var mycss = optCSS(ot.jira + "-css");
			mycss.set('\
				.stickymenu { width: 100%; overflow: hidden; background: white; border-bottom: 1px solid lightgrey;}\
				.stickycontent { display: table; width: 100%; max-width: 1280px; margin: 0 auto; }\
				.stickycontent > div { padding: 20px; }\
				.stickycontent div.right a { padding: 16px 20px; }\
				#pp_sticky_button_1 { background: #000000; border: 1px solid #000000; margin-right: 10px; }\
				#pp_sticky_button_1:hover { background: #404040; }\
				#pp_sticky_button_1:active { background: #767676; }\
				#modal-id-0730 .A-BTNP-RW-ALL,#modal-id-0730 .A-BTNPINSEC-RW-ALL,#modal-id-0730 .A-BTNSO-RW-ALL{float:left; margin:0px 20px 0px 0px;}\
				.promptText{clear:both; line-height:1.5; padding-top:10px; }\
				@media only screen and (min-width:480px) {\
					.stickycontent .left, .stickycontent .right { display: table-cell; vertical-align: middle; }\
					#pp_sticky_button_1 { float:right; }\
					.intro-section { padding-top:60px; }\
					#modal-id-0730 .A-BTNP-RW-ALL,#modal-id-0730 .A-BTNPINSEC-RW-ALL{margin-bottom:20px}\
					#modal-id-0730 .A-BTNSO-RW-ALL{margin-bottom:0px}\
				}\
				@media only screen and (max-width:479px) {\
					.stickycontent .left { display: inline-block; padding-bottom: 0px; }\
					.stickycontent > div { padding: 14px; }\
					.intro-section { padding-top: 120px; }\
					#modal-id-0730 .A-BTNP-RW-ALL,#modal-id-0730 .A-BTNPINSEC-RW-ALL,#modal-id-0730 .A-BTNSO-RW-ALL{float:none; margin-bottom:14px}\
				}\
				@media only screen and (max-width:320px) {\
					.intro-section { padding-top: 130px; }\
				}\
				@media only screen and (min-width:680px) {\
					#modal-id-0730 .A-BTNP-RW-ALL,#modal-id-0730 .A-BTNPINSEC-RW-ALL{margin-bottom:0px}\
				}\
				/**/\
				.remove-bottom-space p{line-height:1.5;}\
			');
		}
		
		function createStickyBar(ot){
			
			// Create and place the sticky bar container
			var newDiv = ot.createDiv("topSticky");
			document.querySelector('body').insertBefore( newDiv, document.querySelector('#top-of-content + div') );
			
			// Make sticky and assign content
			var stickyBar = optStickyTop('#topSticky');
	
			stickyBar.setContentHTML('\
				<div class="stickycontent">\
					<div class="left">\
						<span>5步快速完成在线申请</span>\
					</div>\
					<div class="right">\
						<a class="A-BTNP-RW-ALL" id="pp_sticky_button_1">\
							<span aria-hidden="true">立即申请</span>\
							<span class="visuallyhidden">立即申请</span>\
						</a>\
					</div>\
				</div>\
			');
		}
		var createPopupHTML='\
		 <div class="modal-curtain" id="modal-id-0730" style="display: block;">\
		 <div class="grid">\
			<div class="row">\
				<div class="modal-body lg-11 md-12 sm-12">\
				<div class="M-MODWIN-RW-DEV clearfix " tabindex="0" data-validation-message="立即申请">\
				   <button class="close-trigger close icon icon-delete" aria-label="返回"></button>\
				   <h3 class="A-TYP28L-RW-ALL" tabindex="0" aria-label="立即申请">立即申请</h3>\
				    <div class="O-SMARTSPCGEN-DEV M-CONTMAST-RW-RBWM rich-text">\
					  <div class="remove-bottom-space" data-date-format="M/D/YYYY" data-time-format="HH:MM:SS A" data-zone="America/New_York">\
						 <p class="A-PAR16R-RW-ALL">申请条件</p>\
						 <p>主卡申请人需年满18周岁，境内居民申请需月薪达人民币4,000元或以上，境外居民申请需月薪达人民币10,000元或以上；附属卡申请人须年满16周岁。</p>\
						 <p>特别提醒：目前，每位客户限申领一套汇丰中国信用卡，每位主卡持卡人限申领一套附属卡。</p>\
						 <p>您是否已持有汇丰中国储蓄账户？</p>\
					 </div>\
					 </div>\
					 <div class="O-SMARTSPCGEN-DEV M-CONTMAST-RW-RBWM content-buttons">\
						<div class="clearfix">\
						   <a class="A-BTNP-RW-ALL" href="https://creditcards.hsbc.com.cn/hfcoas/c-1162/index" target="_self" data-pid="pws_zh_cn_cc_pd_choice_0_1_cdc_choicentc_200729" data-pid-action="cta">否，新客户在线申请</a>\
						   <a class="A-BTNPINSEC-RW-ALL" href="https://creditcards.hsbc.com.cn/hfcoas/etb-1162/index" target="_self" data-pid="pws_zh_cn_cc_pd_choice_0_2_cdc_choiceetb_200729" data-pid-action="cta">是，现有客户在线申请</a>\
						   <a class="A-BTNSO-RW-ALL close-trigger">返回</a>\
						</div>\
				     </div>\
				<p class="promptText">温馨提示：请提前准备身份证信息、已持有的银联信用卡/借记卡卡号（我行现有客户请提供汇丰中国借记卡卡号/账户号码）<p>\
			</div>\
			</div>\
		  </div>\
	   </div>\
	</div>';		
		function trackClick(ot){
			ot.object.addEventListener("click", function(e){			
				var pp=true;
				var msm=jQuery('body');
				if(msm.hasClass("modal-show-modal-id-7952")){
					msm.removeClass("modal-show-modal-id-7952"); 
					pp=false;    
				  }else{
					msm.addClass("modal-show-modal-id-7952"); 
					pp=true;
				  }
				/*insert HTML element*/
				if(!jQuery('#modal-id-0730').length > 0){
					jQuery('body').append(createPopupHTML);
				}else{
					jQuery('.modal-curtain').css({'display':'block'});   
				}				
				/*reback chice card page */	
				jQuery('.close-trigger').each(function(val,ele){
                    jQuery(ele).click(function(){												
						pp ? msm.removeClass("modal-show-modal-id-7952"): msm.addClass("modal-show-modal-id-7952");					   
					   jQuery('.modal-curtain').css({'display':'none'})
				   })
				})		              
				ot.fireTag( "6958-sticky-findoutmore" );
			}.bind(ot), false);
		}
	})(this);