
(function(){

    // ========== (1) Helper functions ========== //
    
        var optTest=function(info){var jira=info.jira,ver=info.ver,object=null;function fireTag(e){var t={event_category:"Target",event_subcategory:this.jira,event_content:this.ver,event_action:e};utag.link(t),console.log(t)}function fireLoad(){var e=fireTag.bind(this);setTimeout(function(){e("Loaded")},2e3)}function fireMbox(e,t,o){t=t||"",o=o||"",createDiv(e).setAttribute("class","mboxDefault"),"undefined"==typeof adobe?(document.getElementById(e).getAttribute("class").indexOf("mbox-name-")<0&&mboxDefine(e,e),mboxUpdate(e,t+"="+o),console.log("fireMbox (mbox.js): "+e+(t?" ("+t+": "+o+")":""))):adobe.target.getOffer({mbox:e,params:{param:o},success:function(r){console.log("fireMbox (at.js): "+e+(t?" ("+t+": "+o+")":"")),adobe.target.applyOffer({mbox:e,selector:"#"+e,offer:r})},error:function(e,t){console.log("fireMbox failed")}})}function ready(func,sel){var me=this,cnt=5e3,timer=0,count=0;function loop(sel){var errSel="",pass=[];if(timer++,sel.length>0)for(var i=0;i<sel.length;i++){pass[i]=!0;try{void 0===eval(sel[i])&&(pass[i]=!1)}catch(e){pass[i]=!1}pass[i]||null==document.querySelector(sel[i])||(document.querySelectorAll(sel[i]).length>1?count=document.querySelectorAll(sel[i]).length:(me.object=document.querySelector(sel[i]),pass[i]=!0)),pass[i]||(errSel+=(""==errSel?"":", ")+sel[i])}for(var flag=!0,i=0;i<pass.length;i++)0==pass[i]&&(flag=!1);flag?(console.log("Ready until: "+timer),func(me)):count>1?console.log(count+" elements match with the selector - "+errSel):(cnt-=10,cnt>0?setTimeout(function(){loop(sel)},10):console.log("Object not found - "+errSel))}sel=sel||[],"string"==typeof sel&&(sel=[sel]),loop(sel)}function createDiv(e,t){var o;if(t=t||"body",null!=document.querySelector("#"+e))o=document.querySelector("#"+e);else{(o=document.createElement("div")).id=e;var r=document.querySelector(t);null!=r&&r.appendChild(o)}return o}return void 0===window.optmeta&&(window.optmeta=[]),window.optmeta.push(info),{jira:jira,ver:ver,object:object,fireTag:fireTag,fireMbox:fireMbox,ready:ready,createDiv:createDiv,fireLoad:fireLoad}};
    
        var optCSS=function(e){function n(e){d.innerHTML=e}function t(e){d.innerHTML+=e}var d;return document.getElementById(e)?(d=document.getElementById(e),d.innerHTML=""):(d=document.createElement("style"),d.id=e,d.type="text/css",document.getElementsByTagName("head")[0].appendChild(d)),{set:n,add:t}};
    
    // ========== (2) On Load Actions ========== //
    
        var myTest = optTest({
            "jira" : "OPT-6961",
            "ver" : "Exp",
        });
    
        myTest.ready( trackOnLoad );
    
        myTest.ready( defineCSS );
    
        myTest.ready( myfunc );
    
    // ========== (3) Implementation ========== //
    
        function trackOnLoad(ot){
            ot.fireLoad();
        }
    
       function defineCSS(ot){
            var mycss = optCSS(ot.jira + "-css");
            mycss.set('.content_main_advancedList ul{list-style:none}\
                .content_main_advancedList ul li{clear:both;margin-bottom:14px; border-bottom:1px solid #eee}\
                .content_main_advancedList ul li:last-child{margin-bottom:0px; }\
                .content_main_advancedList ul li .picture{width:36%;float:left;}\
                .content_main_advancedList ul li .picture img{width:100%;height:100%}\
                .content_main_advancedList ul li .content{margin-left:34%; padding-left:14px; padding-bottom:14px;  }\
                .content_main_advancedList ul li .content:afert{clear:both}\
                .content_main_advancedList ul li .content p.A-TYP16BL-RW-ALL{padding:0px;}\
                ');
        }
        function editHTML(ot){
            var html="";
            ot.forEach(function(element,index,array){
               html +='<Li><div class="picture"><img src="'+element.picture+'"/></div><div class="content"><p Class="A-TYP16BL-RW-ALL text-container text">'+element.title+'</p><p class="A-PAR14R-RW-ALL description text-container text">'+element.description+'</p></div></li>' 
            })
            return html;
         }
    
        function myfunc(ot){	
         var data={
                      'chaoshenghou':[{picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/credit-cards/16-9/options-offer.jpg', title:'<a href="/credit-cards/offers/choice-gifts/" target="_self" data-pid="pws_zh_cn_cc_pd_choice_3_1_cdc_movie_191231" data-pid-action="readmore">电影、运动、读书&nbsp; 9由你选</a>', description:'活动期间，当月累计可计积分消费满人民币2888元或等值美元，次月可享9元兑换电影/运动权益、或以9积分兑换读书权益。每月总计可获得2次权益。'},
                                      {picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/banner/lunch+banner.jpg', title:'<a href="/credit-cards/offers/lunch/" target="_self" data-pid="pws_zh_cn_cc_pd_choice_3_2_cdc_lunchplus_191023" data-pid-action="readmore">非常午餐+ 5折优惠</a>', description:'指定合作品牌门店午市营业时间单笔任意消费满额即可享受满减优惠 (详情请见活动攻略)。各城市活动品牌、参与优惠的指定门店地址、活动日等信息，以活动攻略及门店列表为准。'},
                                      {picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/credit-cards/16-9/blue-background-dinning.jpg', title:'<a href="/credit-cards/offers/weekend/eleme/" target="_self" data-pid="pws_zh_cn_cc_pd_choice_3_3_cdc_eleme_200221" data-pid-action="readmore">非常周末+ 饿了么满50元立减20元</a>', description:'单笔消费满50元及以上即可享受立减20元优惠。更多活动优惠内容及规则详见优惠详情'},
                                      {picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/credit-cards/16-9/buffet-choice-new.jpg', title:'<a href="/credit-cards/offers/buffet/" target="_self" data-pid="pws_zh_cn_cc_pd_choice_3_4_cdc_buffet_191023" data-pid-action="readmore">五星酒店自助餐/下午茶买一赠一</a>',description:'美食美景，品质之选。活动期间，当月累计可计积分消费满人民币2,888元或等值美元，次月可享1次“五星酒店”豪华自助餐/下午茶买一赠一权益；丽思卡尔顿、洲际、华尔道夫、JW万豪、香格里拉、希尔顿、君悦等酒店品牌任选。'},
                                      {picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/credit-cards/16-9/home-away.jpg ', title:'<a href="/credit-cards/offers/home-away/" target="_self" data-pid="pws_zh_cn_cc_pd_choice_3_5_cdc_homeaway_191023" data-pid-action="readmore">全球商户特惠</a>', description:'尽享汇丰全球home&Away特惠商户折扣、买赠及各类独家专享权益，为您带来精彩购物、餐饮、旅游休闲、健康美容体验。'}
                                      ],
                      'shenghuo':[{picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/credit-cards/16-9/hotel-new-image.jpg', title:'银联全球精选特色酒店礼遇', description:'阿丽亚娜生态豪华酒店、希腊日光岩酒店等特色酒店礼遇，最优惠价格保证，房型免费升级，免费双人早餐等，恭候您的光临。<a href="http://unionpay.lychee.com" target="_self">银联官网了解详情</a>'},
                                  {picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/pws/16-9/lady-holds-card-and-mobile.jpg', title:'万事达信用卡精选权益', description:'更多境外租车、特色住宿、名品购物、当地美食、游乐景点等折扣或立减优惠，升级您的旅行体验。<a href="http://www1.mastercard.cn/content/privileges/china/zh_cn/index.html" target="_self">万事达官网了解详情</a>'}
                                 ],
                     
                      'baozhang':[{picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/credit-cards/16-9/family-laugh.jpg',title:'<a href="/credit-cards/offers/lost-protection/" target="_self" data-pid="pws_zh_cn_cc_pd_choice_3_6_cdc_lostprotection_191023" data-pid-action="readmore">48小时失卡保障</a>',description:'如因发生丢失、失窃或抢夺/抢劫导致您的汇丰生活信用卡被非法占用，在正式挂失前48小时内因信用卡盗刷产生一般消费交易所致资金损失，可获得最高1万元人民币的失卡保障赔付。'},
                                  {picture:'https://cdn.hsbc.com.cn/content/dam/hsbc/cn/images/pws/16-9/shake-hands.jpg', title:'更多安心保障', description:'若您的汇丰生活万事达白金卡在境外丢失或被盗，请立刻致电汇丰中国信用卡境外热线<a href="tel:+86-21-2053-4333">+86-21-2053-4333</a>，进行挂失，获得如下紧急协助服务：<br/>紧急补卡<br/>紧急预借现金<br/>本服务由万事达竭诚提供，防止旧卡被他人使用、确保新卡及时发放并为您安排紧急预借现金，全球30多万西联网点可供选择。'}
                                 ],
           }			
           
           document.querySelector("div#content_main_advancedList_1").className='content_main_advancedList';
           document.querySelector("div#content_main_advancedList_2").className='content_main_advancedList';
           document.querySelector("div#content_main_advancedList_3").className='content_main_advancedList';
           document.querySelector("div#content_main_advancedList_1 ul").innerHTML=editHTML(data.chaoshenghou);
           document.querySelector("div#content_main_advancedList_2 ul").innerHTML=editHTML(data.shenghuo) ; 
           document.querySelector("div#content_main_advancedList_3 ul").innerHTML=editHTML(data.baozhang) ;    	
           /*
         var content= document.getElementsByClassName('content');
           var picture= document.getElementsByClassName('picture');
            for(var i=0;i<content.length;i++){
               picture[i].style.height=(content[i].clientHeight-14)+'px';	
            }  
         */
            
      }
    
    })(this);    