// RND number - GLOBAL
//avidmedGlobaRand = Math.floor(Math.random()*2)+1;

window.ADSPANDABLE_CONFIG_EXT = {};
window.ADSPANDABLE_CONFIG = {
    // Name of directory/creative
    campaign: 'hm_ladies_010',
    width: '700px',
    height: '448px',
    // mobile
    mobileVersion: false,
    mobileWidth: false,
    mobileHeight: false,
    contentClick: false,
    contentPlay: false,
    contentTeaserAlwaysOn: true,
    scrollDownDelay: 100,
    unitType: "Content-break",
    // end mobile
    text: "<strong>Summer Starts Now</strong></br></br>The weather is warming up and our new collection has arrived. For summer style inspiration, think flowing summer dresses, rich colourful patterns and a balmy bohemian twist. Discover our new collection today and find your summer look.",
    // put percentage random number calculation below
    addedValue: (function () {
        var rt = false;
        return rt;

    })(),
    additionalData: '',
    teaserImg: 'img/teaser.png',
    teaserHiddenOnClose: false,
    teaserImgMaxWidth: '200px',
    randomNumber: (function () {
        var rn = Math.floor(Math.random() * 10000000);
        return rn;
    })(),
    bottomOfTemplate: false,
    // auto scroll down?
    autoScrollDown: true,
    frequencyCap: 4,
    // use cookie frequency capping (defaults to using the window.name session variable if not)
    cookieCap: true,
    clickTag: 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13128221&PluID=0&ord='+Math.floor(Math.random()*1000000000),

    /*  Function will match an array of keywords against the first 4000 characters in the page.

     Only use a maximum of 300 keywords with it to be on the safe side.

     Returns an array with the key 'matches' true or false and a json string under
     the key 'wordsMatched'.

     To use this from with in this conficg file, call this.kwrd(theArray);
     theArray is teh array of words to find
     */
    kwrd: function (iframe, keywordsArr) {


    },

    // This function is a callback for Adspandable:init. Function MUST return Boolean.
    // if return type is false Adspandable:init will return false;
    customCode: function () {
        var rt = true;
        var lh = location.href;
        // exclude homepage of newstreet
        if (lh === 'http://www.newstreet.it/') {
            rt = false;
        }

        // no ie9 on content play
        if (document.all && !window.atob && window.ADSPANDABLE_CONFIG.campaign.indexOf('-cp') > -1) {
            rt = false;
        }


        // Make teaser clickable
        var $;
        if (window.top != window.self && document.domain.indexOf('campaigns.adspd') < 0) {

            $ = function (element) {
                return window.ADSPDBLjQuery(element, window.parent.document);
            };
        }
        else {
            $ = window.ADSPDBLjQuery;
        }
        var avidTimeCustom = '';
        var rt = true;
        var lh = location.href;
        // exclude homepage of newstreet
        if (lh === 'http://www.newstreet.it/') {
            rt = false;
        }
        // wrap teaser in link
        var avidTo = function () {
            if ($('#contentTeaser').length > 0) {
                $('#contentTeaser').wrap('<a href="http://adbreak-1124610337.us-east-1.elb.amazonaws.com/redirectclicks.php?redirectAdsp=' + encodeURIComponent(window.ADSPANDABLE_CONFIG.clickTag) + '&ran=410&type=event&state=click&audience=&campaign=' + window.ADSPANDABLE_CONFIG.campaign + '&general=&click_title=Teaser Click&resolution=&keyword_data=&domain=' + document.domain + '&path=' + window.location.href + '" target="_blank" />');
                clearTimeout(avidTimeCustom);
            }
            else {
                avidTimeCustom = setTimeout(function () {
                    avidTo();
                }, 800);
            }
        };
        avidTo();


        return rt;
    },
    // The custom filter javascript is for targetting campaigns by either keywords or section. For example if a campaign should only appear on 'mysite/motoring' then you don't want it in the 
    // list of campaigns that can be served to a page that's not the 'mysite/motoring' section as its a wasted impression. Equally if the campaign is keyword targetted yet none of the words 
    // on the page then the campaign should be removed fron the list of campaigns for that page. The function just needs to contain the logic and return 'true' if the conditions are met and 
    // the campaign can appear on that age. Or 'false' for it should not be on that page.
    cdn: true, // true if you want adspandable to load the campaign from the cdn,
    // set this to true to only appear if keywords in page 
    keywordMatching: false,
    // client actual view expand tracking
    actualViewClientTrack: 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=13128221&PluID=0&ord='+Math.floor(Math.random()*1000000000)+'&rtu=-1',
    // client expand tracking
    expandClientTrack: '<script language="JavaScript1.1" src="http://pixel.adsafeprotected.com/rjss/st/39046/4801004/skeleton.js"></script>',
    // client banner tracking
    bannerClientTrack: false,
    // collective teaser tracking ifr teaser is visible
    collectiveLeaveBehindTrack: false,
    // client teaserinview tracking
    teaserInViewTrack: false,
    // paragraph to insert
    paraToInsert: 2,
    // keyword threshold
    keywordThreshold: 1,
    // does publisher use iframeTags?
    iframeTags: false,
    keywords: [],
    customFilterJs: (function () {
        // whatever you place in here gets reg exped pot and is executed independently of this class. It should return true or false as to whether this ad should appear.
        var dd = document.domain;
        var lh = window.location.href;
        var rt = true;
        var head = window.ADSPDBLjQuery("head").html();
        // iframe head for timeout (because their adtags are inside an iframe)
        var ifrHead = window.ADSPDBLjQuery("head", window.parent.document).html();
        var $ = window.ADSPDBLjQuery;


        /* uncomment this for time sensitive targetting - currently only after 6pm here
         var d = new Date();
         var n = d.getHours();
         if (n<18){
         rt = false;
         }
         */
        /*
         // keywords checking - uncomment this and add keywords to array if it needs to be keyword targetted

         var keywordsArr = ["eating","dining","food","cooking","recipe","Jus Rol","pastry people","pastry brand","ready made pastry","baking product","baking products","puff pastry","shortcrust","sweet shortcrust","butter puff","ready rolled","filo pastry","light puff ","infused pastry","bake it fresh","Jus Rol Tom","Jus Rol Janet","Jus Rol Video","wholesome meals","delicious meals","fresh ingredients","pastry cooks","pastry chef","Anchor ready rolled","Sainsbury's pastry","own brand pastry","Tesco Value pastry","ready made pastry","Orgran All Purpose","McDougalls Puff Pastry","Waitrose Cooks","Pie","pie ideas","savoury pies","pie week","British Pie","Pie lovers","Pie Lover","Pie tips","Pie Hints","Pie Help","Baking pies","Pie Baking","traditional cooking","home baking","home cooking","baking hobby","baking event","cooking event","cinnamon swirls","mushroom pie","pastry recipes","dessert recipes","pie ideas","pastry dishes","pastry tarts","shortcrust flan","savoury pastry","sweet pastries","No Dish Pie","tasty recipes","recipe of the day","dinner inspiration","winter warmers","easy to bake","Diet Ideas","Fruit flans","Fruit pastries","dinner ideas","seasonal meals","seasonal bakes","tartlets","puff slice","quiche","quiche ideas","quiche recipes","Savoury pies","Flavoured pastry","breakfast ideas","lunch ideas","preparation time","occasion recipes","mid week recipes","quick and easy recipes","dessert ideas","occasion recipe ideas","Meal inspiration","Recipe ideas","Quick midweek meal","30min recipes","30 minute recipes","Pastry kit","How to make pastry","Chicken and pesto tart","Chicken pesto tart","Chicken,","leek and lemon puff pie","Chicken,","leek,","lemon pie"];
         var keywordData = (function(){
         var str,score = 0;
         str = $('body').html();
         str = str.toLowerCase();
         str = str.replace(/\r/g,' ');
         str = str.replace(/\n/g,' ');
         str = str.replace(/<script.*?>.*?<\/script/gi," ");
         str = str.replace(/<style[^>]*>.*?<\/style>/gi, " ");
         str = str.replace(/<ul[^>]*>.*?<\/ul>/gi, " ");
         str = str.replace(/<a[^>]*>.*?<\/a>/gi, " ");
         str = str.replace(/(<([^>]+)>)/ig, " "); */
        //str = str.replace(/\s\s*/ig, " ");
        /*str = str.replace(/>/ig, "");
         str = str.substr(0,15000);
         for(i=0;i<keywordsArr.length;i++){
         var patt1=keywordsArr[i].toLowerCase();;

         var result = str.match(patt1);
         if (result){
         score += result.length;
         }
         }
         str = "";
         // threshold for keywords

         return score;
         })();
         //no keyword?
         if (keywordData<1){
         rt = false;
         }

         // end keywords checking

         */

        // MOBILE DETECTION
        /*
         var ADSPDBLMobile={};
         (function(e){var t=/iPhone/i,n=/iPod/i,r=/iPad/i,i=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,o=/IEMobile/i,u=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,a=/BlackBerry/i,f=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,c=new RegExp("(?:"+"Nexus 7"+"|"+"BNTV250"+"|"+"Kindle Fire"+"|"+"Silk"+"|"+"GT-P1000"+")","i");var h=function(e,t){return e.test(t)};var p=function(e){var p=e||navigator.userAgent;this.apple={phone:h(t,p),ipod:h(n,p),tablet:h(r,p),device:h(t,p)||h(n,p)||h(r,p)};this.android={phone:h(i,p),tablet:!h(i,p)&&h(s,p),device:h(i,p)||h(s,p)};this.windows={phone:h(o,p),tablet:h(u,p),device:h(o,p)||h(u,p)};this.other={blackberry:h(a,p),opera:h(f,p),firefox:h(l,p),device:h(a,p)||h(f,p)||h(l,p)};this.seven_inch=h(c,p);this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch;this.phone=this.apple.phone||this.android.phone||this.windows.phone;this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet};var d=new p;d.Class=p;e.isMobile=d})(ADSPDBLMobile);

         // BROWSER DETECTION
         var bowser=function(){function e(e){function o(i){var o=e.match(i);return o&&o.length>1&&o[1]||""}var s,r=o(/(ipod|iphone|ipad)/i).toLowerCase(),n=/like android/i.test(e),a=!n&&/android/i.test(e),t=o(/version\/(\d+(\.\d+)?)/i),d=/tablet/i.test(e),m=!d&&/[^-]mobi/i.test(e);/opera|opr/i.test(e)?s={name:"Opera",opera:i,version:t||o(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(e)?s={name:"Windows Phone",windowsphone:i,msie:i,version:o(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(e)?s={name:"Internet Explorer",msie:i,version:o(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(e)?s={name:"Chrome",chrome:i,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(s={name:"iphone"==r?"iPhone":"ipad"==r?"iPad":"iPod"},t&&(s.version=t)):/sailfish/i.test(e)?s={name:"Sailfish",sailfish:i,version:o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?s={name:"SeaMonkey",seamonkey:i,version:o(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(e)?(s={name:"Firefox",firefox:i,version:o(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(s.firefoxos=i)):/silk/i.test(e)?s={name:"Amazon Silk",silk:i,version:o(/silk\/(\d+(\.\d+)?)/i)}:a?s={name:"Android",version:t}:/phantom/i.test(e)?s={name:"PhantomJS",phantom:i,version:o(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?s={name:"BlackBerry",blackberry:i,version:t||o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(e)?(s={name:"WebOS",webos:i,version:t||o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(s.touchpad=i)):s=/bada/i.test(e)?{name:"Bada",bada:i,version:o(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(e)?{name:"Tizen",tizen:i,version:o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||t}:/safari/i.test(e)?{name:"Safari",safari:i,version:t}:{},/(apple)?webkit/i.test(e)?(s.name=s.name||"Webkit",s.webkit=i,!s.version&&t&&(s.version=t)):!s.opera&&/gecko\//i.test(e)&&(s.name=s.name||"Gecko",s.gecko=i,s.version=s.version||o(/gecko\/(\d+(\.\d+)?)/i)),a||s.silk?s.android=i:r&&(s[r]=i,s.ios=i);var v="";r?(v=o(/os (\d+([_\s]\d+)*) like mac os x/i),v=v.replace(/[_\s]/g,".")):a?v=o(/android[ \/-](\d+(\.\d+)*)/i):s.windowsphone?v=o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):s.webos?v=o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):s.blackberry?v=o(/rim\stablet\sos\s(\d+(\.\d+)*)/i):s.bada?v=o(/bada\/(\d+(\.\d+)*)/i):s.tizen&&(v=o(/tizen[\/\s](\d+(\.\d+)*)/i)),v&&(s.osversion=v);var b=v.split(".")[0];return d||"ipad"==r||a&&(3==b||4==b&&!m)||s.silk?s.tablet=i:(m||"iphone"==r||"ipod"==r||a||s.blackberry||s.webos||s.bada)&&(s.mobile=i),s.msie&&s.version>=10||s.chrome&&s.version>=20||s.firefox&&s.version>=20||s.safari&&s.version>=6||s.opera&&s.version>=10||s.ios&&s.osversion&&s.osversion.split(".")[0]>=6||s.blackberry&&s.version>=10.1?s.a=i:s.msie&&s.version<10||s.chrome&&s.version<20||s.firefox&&s.version<20||s.safari&&s.version<6||s.opera&&s.version<10||s.ios&&s.osversion&&s.osversion.split(".")[0]<6?s.c=i:s.x=i,s}var i=!0,o=e("undefined"!=typeof navigator?navigator.userAgent:"");return o._detect=e,o}();


         if(ADSPDBLMobile.isMobile.phone)
         if(ADSPDBLMobile.isMobile.any)
         if(ADSPDBLMobile.isMobile.tablet)
         if(ADSPDBLMobile.isMobile.seven_inch)
         */


        return rt;
    })(),
    antiKeywordsMatching: false,
    antiKeywords: []


};

