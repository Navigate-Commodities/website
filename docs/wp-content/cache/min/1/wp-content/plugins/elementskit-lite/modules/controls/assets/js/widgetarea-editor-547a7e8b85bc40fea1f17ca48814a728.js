!function(e,t){"use strict";if(void 0===window.parent)return;let n=window.parent;var i=function(){t.config.environmentMode.edit&&(n.jQuery("#elementor-editor-dark-mode-css").length>0&&n.jQuery("body").addClass("elementor-editor-dark-mode"),t.hooks.addAction("frontend/element_ready/global",function(t){(t.find(".widgetarea_warper_edit").on("click",function(){var t=n.jQuery(".widgetarea_iframe_modal"),i=t.find("#widgetarea-control-iframe"),d=t.find(".dialog-lightbox-loading"),o=t.find(".dialog-type-lightbox"),a=e(this).parent().attr("data-elementskit-widgetarea-key"),r=e(this).parent().attr("data-elementskit-widgetarea-index"),l=window.elementskit.resturl+"dynamic-content/content_editor/widget/"+a+"-"+r;n.jQuery("body").attr("data-elementskit-widgetarea-key",a),n.jQuery("body").attr("data-elementskit-widgetarea-load","false"),o.show(),t.show(),d.show(),i.contents().find("#elementor-loading").show(),i.css("z-index","-1"),i.attr("src",l),i.on("load",function(){d.hide(),i.show(),i.contents().find("#elementor-loading").hide(),i.css("z-index","1")})}),void 0!==n.jQuery)&&n.jQuery(".widgetarea_iframe_modal").find(".eicon-close").on("click",function(){n.jQuery("body").attr("data-elementskit-widgetarea-load","true")})}))};e(window).on("elementor/frontend/init",i)}(jQuery,window.elementorFrontend)