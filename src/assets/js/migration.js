/*****************************************************************************************************
 * jquery.themepunch.revmigrate.js - jQuery Plugin for Revolution Slider Migration from 4.x to 5.0   
 * @version: 1.0.1 (18.08.2015)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
*****************************************************************************************************/


!function(){var t=jQuery.fn.revolution;jQuery.extend(!0,t,{migration:function(t,e){return e=a(e),o(t,e),e}});var a=function(t){if(t.parallaxLevels||t.parallaxBgFreeze){var a=new Object;a.type=t.parallax,a.levels=t.parallaxLevels,a.bgparallax="on"==t.parallaxBgFreeze?"off":"on",a.disable_onmobile=t.parallaxDisableOnMobile,t.parallax=a}if(void 0===t.disableProgressBar&&(t.disableProgressBar=t.hideTimerBar||"off"),(t.startwidth||t.startheight)&&(t.gridwidth=t.startwidth,t.gridheight=t.startheight),void 0===t.sliderType&&(t.sliderType="standard"),"on"===t.fullScreen&&(t.sliderLayout="fullscreen"),"on"===t.fullWidth&&(t.sliderLayout="fullwidth"),void 0===t.sliderLayout&&(t.sliderLayout="auto"),void 0===t.navigation){var o=new Object;if("solo"==t.navigationArrows||"nextto"==t.navigationArrows){var e=new Object;e.enable=!0,e.style=t.navigationStyle||"",e.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,e.hide_onleave=t.hideThumbs>0?!0:!1,e.hide_delay=t.hideThumbs>0?t.hideThumbs:200,e.hide_delay_mobile=t.hideNavDelayOnMobile||1500,e.hide_under=0,e.tmp="",e.left={h_align:t.soloArrowLeftHalign,v_align:t.soloArrowLeftValign,h_offset:t.soloArrowLeftHOffset,v_offset:t.soloArrowLeftVOffset},e.right={h_align:t.soloArrowRightHalign,v_align:t.soloArrowRightValign,h_offset:t.soloArrowRightHOffset,v_offset:t.soloArrowRightVOffset},o.arrows=e}if("bullet"==t.navigationType){var r=new Object;r.style=t.navigationStyle||"",r.enable=!0,r.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,r.hide_onleave=t.hideThumbs>0?!0:!1,r.hide_delay=t.hideThumbs>0?t.hideThumbs:200,r.hide_delay_mobile=t.hideNavDelayOnMobile||1500,r.hide_under=0,r.direction="horizontal",r.h_align=t.navigationHAlign||"center",r.v_align=t.navigationVAlign||"bottom",r.space=5,r.h_offset=t.navigationHOffset||0,r.v_offset=t.navigationVOffset||20,r.tmp='<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',o.bullets=r}if("thumb"==t.navigationType){var i=new Object;i.style=t.navigationStyle||"",i.enable=!0,i.width=t.thumbWidth||100,i.height=t.thumbHeight||50,i.min_width=t.thumbWidth||100,i.wrapper_padding=2,i.wrapper_color="#f5f5f5",i.wrapper_opacity=1,i.visibleAmount=t.thumbAmount||3,i.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,i.hide_onleave=t.hideThumbs>0?!0:!1,i.hide_delay=t.hideThumbs>0?t.hideThumbs:200,i.hide_delay_mobile=t.hideNavDelayOnMobile||1500,i.hide_under=0,i.direction="horizontal",i.span=!1,i.position="inner",i.space=2,i.h_align=t.navigationHAlign||"center",i.v_align=t.navigationVAlign||"bottom",i.h_offset=t.navigationHOffset||0,i.v_offset=t.navigationVOffset||20,i.tmp='<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',o.thumbnails=i}t.navigation=o,t.navigation.keyboardNavigation=t.keyboardNavigation||"on",t.navigation.onHoverStop=t.onHoverStop||"on",t.navigation.touch={touchenabled:t.touchenabled||"on",swipe_treshold:t.swipe_treshold||75,swipe_min_touches:t.swipe_min_touches||1,drag_block_vertical:t.drag_block_vertical||!1}}return t.fallbacks={isJoomla:t.isJoomla||!1,panZoomDisableOnMobile:t.parallaxDisableOnMobile||"off",simplifyAll:t.simplifyAll||"on",nextSlideOnWindowFocus:t.nextSlideOnWindowFocus||"off",disableFocusListener:t.disableFocusListener||!0},t},o=function(t){var a=new Object,o=t.width(),e=t.height();a.skewfromleftshort="x:-50;skX:85;o:0",a.skewfromrightshort="x:50;skX:-85;o:0",a.sfl="x:-50;o:0",a.sfr="x:50;o:0",a.sft="y:-50;o:0",a.sfb="y:50;o:0",a.skewfromleft="x:top;skX:85;o:0",a.skewfromright="x:bottom;skX:-85;o:0",a.lfl="x:top;o:0",a.lfr="x:bottom;o:0",a.lft="y:left;o:0",a.lfb="y:right;o:0",a.fade="o:0";720*Math.random()-360;t.find(".tp-caption").each(function(){var t=jQuery(this),r=(2*Math.random()*o-o,2*Math.random()*e-e,3*Math.random(),720*Math.random()-360,70*Math.random()-35,70*Math.random()-35,t.attr("class"));a.randomrotate="x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;",r.match("randomrotate")?t.data("transform_in",a.randomrotate):r.match(/\blfl\b/)?t.data("transform_in",a.lfl):r.match(/\blfr\b/)?t.data("transform_in",a.lfr):r.match(/\blft\b/)?t.data("transform_in",a.lft):r.match(/\blfb\b/)?t.data("transform_in",a.lfb):r.match(/\bsfl\b/)?t.data("transform_in",a.sfl):r.match(/\bsfr\b/)?t.data("transform_in",a.sfr):r.match(/\bsft\b/)?t.data("transform_in",a.sft):r.match(/\bsfb\b/)?t.data("transform_in",a.sfb):r.match(/\bskewfromleftshort\b/)?t.data("transform_in",a.skewfromleftshort):r.match(/\bskewfromrightshort\b/)?t.data("transform_in",a.skewfromrightshort):r.match(/\bskewfromleft\b/)?t.data("transform_in",a.skewfromleft):r.match(/\bskewfromright\b/)?t.data("transform_in",a.skewfromright):r.match(/\bfade\b/)&&t.data("transform_in",a.fade),r.match(/\brandomrotateout\b/)?t.data("transform_out",a.randomrotate):r.match(/\bltl\b/)?t.data("transform_out",a.lfl):r.match(/\bltr\b/)?t.data("transform_out",a.lfr):r.match(/\bltt\b/)?t.data("transform_out",a.lft):r.match(/\bltb\b/)?t.data("transform_out",a.lfb):r.match(/\bstl\b/)?t.data("transform_out",a.sfl):r.match(/\bstr\b/)?t.data("transform_out",a.sfr):r.match(/\bstt\b/)?t.data("transform_out",a.sft):r.match(/\bstb\b/)?t.data("transform_out",a.sfb):r.match(/\bskewtoleftshortout\b/)?t.data("transform_out",a.skewfromleftshort):r.match(/\bskewtorightshortout\b/)?t.data("transform_out",a.skewfromrightshort):r.match(/\bskewtoleftout\b/)?t.data("transform_out",a.skewfromleft):r.match(/\bskewtorightout\b/)?t.data("transform_out",a.skewfromright):r.match(/\bfadeout\b/)&&t.data("transform_out",a.fade),void 0!=t.data("customin")&&t.data("transform_in",t.data("customin")),void 0!=t.data("customout")&&t.data("transform_out",t.data("customout"))})}}(jQuery);