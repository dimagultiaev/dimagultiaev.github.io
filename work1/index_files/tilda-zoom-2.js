function t_initZoom(){var o=$isMobile?"":"showed";$('[data-zoomable="yes"]').length&&(window.tzoominited=!0,$('[data-zoomable="yes"]:not(.t-slds__thumbs_gallery)').addClass("t-zoomable"),$("body").append('<div class="t-zoomer__wrapper">      <div class="t-zoomer__container">      </div>      <div class="t-zoomer__bg"></div>      <div class="t-zoomer__close">        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">            <path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="black"/>            <path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="black"/>        </svg>      </div>      <div class="t-zoomer__scale '+o+'">        <svg class="icon-increase" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">            <path d="M22.832 22L17.8592 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/>            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="black" stroke-width="2"/>            <path d="M6.25781 10.3931H16.2035" stroke="black" stroke-width="2"/>            <path d="M11.2305 15.3662V5.42053" stroke="black" stroke-width="2"/>        </svg>        <svg class="icon-decrease" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">            <path d="M21.9961 22L17.0233 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/>            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="black" stroke-width="2"/>            <path d="M5.41797 10.3931H15.3637" stroke="black" stroke-width="2"/>        </svg>      </div>    </div>'),t_showZoom(),$(".t-zoomer__close, .t-zoomer__bg").click(function(){t_zoom_unscale(),$(".t-zoomer__scale").unbind(),$("body").removeClass("t-zoomer__show"),$("body").removeClass("t-zoomer__show_fixed"),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),$(document).unbind("keydown"),0!=$(document).find(".t-popup_show").length&&$(document).keydown(function(o){27==o.keyCode&&($(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),t_store_closePopup(!1))})}))}function t_showZoom(){$(".t-records").on("click",".t-zoomable",t_zoomHandler),$(".t-records").on("click",".t-slds__thumbs_gallery",t_zoomHandler)}function t_zoomHandler(){$(document).unbind("keydown"),$("body").addClass("t-zoomer__show"),$(".t-zoomer__container").html('<div class="t-carousel__zoomed">      <div class="t-carousel__zoomer__slides">        <div class="t-carousel__zoomer__inner">        </div>        <div class="t-carousel__zoomer__control t-carousel__zoomer__control_left" data-zoomer-slide="prev">          <div class="t-carousel__zoomer__arrow__wrapper t-carousel__zoomer__arrow__wrapper_left">            <div class="t-carousel__zoomer__arrow t-carousel__zoomer__arrow_left t-carousel__zoomer__arrow_small"></div>          </div>        </div>        <div class="t-carousel__zoomer__control t-carousel__zoomer__control_right" data-zoomer-slide="next">          <div class="t-carousel__zoomer__arrow__wrapper t-carousel__zoomer__arrow__wrapper_right">            <div class="t-carousel__zoomer__arrow t-carousel__zoomer__arrow_right t-carousel__zoomer__arrow_small"></div>          </div>        </div>      </div>    </div>');var o=$(this).closest(".r").attr("id"),e=$("#"+o).find(".t-zoomable:not(.t-slds__thumbs_gallery)");$("#"+o).find(".t-slds").length&&(e=$(this).closest(".t-slds").find(".t-zoomable:not(.t-slds__thumbs_gallery)"));e.each(function(){var o,e,t,s,_=$(this).attr("data-img-zoom-url").split(",");$(this).is("img")&&(o=$(this).attr("title"),e=$(this).attr("data-img-zoom-descr")),$(this).is("div")&&(o=$(this).attr("title"),e=$(this).attr("data-img-zoom-descr")),t=void 0!==o&&!1!==o?'<div class="t-zoomer__title t-name t-descr_xxs">'+o+"</div>":"",s=void 0!==e&&!1!==e?'<div class="t-zoomer__descr t-descr t-descr_xxs">'+e+"</div>":"",$(".t-carousel__zoomer__inner").append('<div class="t-carousel__zoomer__item"><div class="t-carousel__zoomer__wrapper"><img class="t-carousel__zoomer__img" src="'+_+'"></div><div class="t-zoomer__comments">'+t+s+"</div></div>")}),$(".t-carousel__zoomer__item").each(function(){$(this).css("display","block");var o=$(this).find(".t-zoomer__comments"),e=o.find(".t-zoomer__title"),t=o.find(".t-zoomer__descr");e.length||t.length||o.css("padding","0");var s=o.innerHeight();$(this).css("display",""),$(this).find(".t-carousel__zoomer__wrapper").css("bottom",s)});var t=$(this).attr("data-img-zoom-url"),s=$('.t-carousel__zoomer__img[src="'+t+'"]'),_=$(".t-carousel__zoomer__item");s.closest(_).show(0).addClass("active"),_.each(function(){$(this).attr("data-zoomer-slide-number",$(this).index())});var i,r=parseFloat($(".t-carousel__zoomer__item:visible").attr("data-zoomer-slide-number"));$(".t-carousel__zoomer__control_right").click(function(){t_zoom_unscale(),$(".t-zoomer__scale").unbind(),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),r=(r+1)%_.length,_.hide(0).removeClass("active").eq(r).show(0).addClass("active"),t_zoom_checkForScale()}),$(".t-carousel__zoomer__control_left").click(function(){t_zoom_unscale(),$(".t-zoomer__scale").unbind(),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),r=(r-1)%_.length,_.hide(0).removeClass("active").eq(r).show(0).addClass("active"),t_zoom_checkForScale()}),$(document).keydown(function(o){37==o.keyCode&&(t_zoom_unscale(),$(".t-zoomer__scale").unbind(),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),r=(r-1)%_.length,_.hide(0).removeClass("active").eq(r).show(0).addClass("active"),t_zoom_checkForScale()),39==o.keyCode&&(t_zoom_unscale(),$(".t-zoomer__scale").unbind(),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),r=(r+1)%_.length,_.hide(0).removeClass("active").eq(r).show(0).addClass("active"),t_zoom_checkForScale()),27==o.keyCode&&($("body").removeClass("t-zoomer__show"),$("body").removeClass("t-zoomer__show_fixed"),$(".t-zoomer__scale").unbind(),t_zoom_unscale(),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),$(document).unbind("keydown"),0!=$(document).find(".t-popup_show").length&&$(document).keydown(function(o){27==o.keyCode&&($(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),t_store_closePopup(!1))}))}),$(".t-carousel__zoomer__inner").bind("touchstart",function(o){i=o.originalEvent.touches[0].clientX}),$(".t-carousel__zoomer__inner").bind("touchend",function(o){var e=o.originalEvent.changedTouches[0].clientX;e+50<i?(r=(r-1)%_.length,_.hide(0).removeClass("active").eq(r).show(0).addClass("active")):i<e-50&&(r=(r+1)%_.length,_.hide(0).removeClass("active").eq(r).show(0).addClass("active"))}),1<$(".t-carousel__zoomer__item").size()?$("body").addClass("t-zoomer__show_fixed"):$(".t-carousel__zoomer__control").css("display","none"),$(".t-carousel__zoomer__inner").click(function(){$(this).hasClass("scale-active")?t_zoom_unscale():($(".t-zoomer__scale").unbind(),$("body").removeClass("t-zoomer__show"),$("body").removeClass("t-zoomer__show_fixed"),$(".t-zoomer__wrapper .t-zoomer__scale").css("display","none"),t_zoom_unscale(),$(document).unbind("keydown"))});var a=0;$(window).scroll(function(){var o=$(this).scrollTop();a<o&&($("body").not(".t-zoomer__show_fixed").removeClass("t-zoomer__show"),$(document).unbind("keydown")),a=o}),t_zoom_checkForScale()}function t_zoom_checkForScale(){var o=!1,e=$(".t-carousel__zoomer__item.active .t-carousel__zoomer__img");if(e.load(function(){if(!o)return $(window).width()<e[0].naturalWidth||$(window).height()<e[0].naturalHeight?($(".t-zoomer__wrapper .t-zoomer__scale").css("display","block"),void t_zoom_scale_init()):void 0}),e[0].complete&&!o&&(o=!0,$(window).width()<e[0].naturalWidth||$(window).height()<e[0].naturalHeight))return $(".t-zoomer__wrapper .t-zoomer__scale").css("display","block"),void t_zoom_scale_init()}function t_zoom_scale_init(){$(".t-zoomer__scale").click(function(o){var e=$(".t-carousel__zoomer__item.active .t-carousel__zoomer__img"),t=$(".t-zoomer__wrapper"),s=$(".t-carousel__zoomer__inner");if(t.hasClass("scale-active"))t_zoom_unscale();else{var _=[];if($(window).width()<e[0].naturalWidth&&_.push("x"),$(window).height()<e[0].naturalHeight&&_.push("y"),0===(_=_.join("")).length)return;t.addClass("scale-active"),s.addClass("scale-active");var i,r,a,l,c=($(window).width()-e.width())/2,d=($(window).height()-e.height())/2;switch(e.css("left",c),e.css("top",d),_){case"x":a=100*o.clientX/$(window).width(),l=-a*(e.width()-$(window).width())/100,e.css("left",l+"px"),e.mousemove(function(o){a=100*o.clientX/$(window).width(),l=-a*(e.width()-$(window).width())/100,e.css("left",l+"px")});break;case"y":i=100*o.clientY/$(window).height(),r=-i*(e.height()-$(window).height())/100,e.css("top",r+"px"),e.mousemove(function(o){i=100*o.clientY/$(window).height(),r=-i*(e.height()-$(window).height())/100,e.css("top",r+"px")});break;case"xy":i=100*o.clientY/$(window).height(),r=-i*(e.height()-$(window).height())/100,a=100*o.clientX/$(window).width(),l=-a*(e.width()-$(window).width())/100,e.css("top",r+"px"),e.css("left",l+"px"),e.mousemove(function(o){i=100*o.clientY/$(window).height(),r=-i*(e.height()-$(window).height())/100,a=100*o.clientX/$(window).width(),l=-a*(e.width()-$(window).width())/100,e.css("top",r+"px"),e.css("left",l+"px")})}}})}function t_zoom_unscale(){var o=$(".t-carousel__zoomer__item.active .t-carousel__zoomer__img"),e=$(".t-zoomer__wrapper.scale-active"),t=$(".t-carousel__zoomer__inner");o.unbind(),e.removeClass("scale-active"),t.removeClass("scale-active"),o.css("left","0"),o.css("top","0")}$(document).ready(function(){t_initZoom()});