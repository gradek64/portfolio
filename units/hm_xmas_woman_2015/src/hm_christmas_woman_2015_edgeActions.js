
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var recepieSlideArray=["red_dress","white_top","high_heel","grey_top"];RecepieSlide={changeSlide:function(slideNumber){$(".slideShowContainer").append($("."+recepieSlideArray[slideNumber]));$(".slideShow").fadeIn(500);},closeSlide:function(){$(".slideShow").fadeOut(500);}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook}","click",function(sym,e){var thumb="facebook";slide=sym.$(thumb);slide.data('title','facebook link');slide.data('link',facebook_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter}","click",function(sym,e){var thumb="twitter";slide=sym.$(thumb);slide.data('title','twitter link');slide.data('link',twitter_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pintrest}","click",function(sym,e){var thumb="pintrest";slide=sym.$(thumb);slide.data('title','pintrest link');slide.data('link',pintrest_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_google_plus}","click",function(sym,e){var thumb="google_plus";slide=sym.$(thumb);slide.data('title','google_plus link');slide.data('link',google_plus_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_email}","click",function(sym,e){var thumb="email";slide=sym.$(thumb);slide.data('title','email link');slide.data('link',email_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_share}","click",function(sym,e){var thumb="share";slide=sym.$(thumb);slide.data('title','share link');slide.data('link',share_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_red_dress}","click",function(sym,e){RecepieSlide.changeSlide(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_high_heel}","click",function(sym,e){RecepieSlide.changeSlide(2);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_grey_top}","click",function(sym,e){RecepieSlide.changeSlide(3);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_white_top}","click",function(sym,e){RecepieSlide.changeSlide(1);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'items'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close_bttn}","click",function(sym,e){RecepieSlide.closeSlide();var currentButtonTrack=sym.$('close_bttn');currentButtonTrack.data('title','close item mousepress');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
})("items");
//Edge symbol end:'items'

//=========================================================

//Edge symbol: 'items_container'
(function(symbolName){})("items_container");
//Edge symbol end:'items_container'
})(jQuery,AdobeEdge,"EDGE-29888216");