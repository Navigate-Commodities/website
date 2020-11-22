jQuery(document).ready(function(r){var i=fx.noConflict(),e=wc_currency_converter_params.current_currency,a=jQuery.parseJSON(wc_currency_converter_params.currencies),t=wc_currency_converter_params.currency_pos,n=wc_currency_converter_params.num_decimals,_=wc_currency_converter_params.trim_zeros;function o(r,e){return r.rates[e]||(r.rates[e]=parseFloat(wc_currency_converter_params.currency_rate_default)),r}function c(c){wc_currency_converter_params.symbol_positions[c]&&(t=wc_currency_converter_params.symbol_positions[c]),i=o(i,c),jQuery("span.amount").each(function(){var r=jQuery(this).attr("data-original");if(void 0!==r&&0!=r||jQuery(this).attr("data-original",jQuery(this).html()),void 0===(e=jQuery(this).attr("data-price"))||0==e){var e=jQuery(this).html();jQuery("<del></del>"+e).find("del").remove(),e=(e=(e=(e=e.replace(wc_currency_converter_params.currency_format_symbol,"")).replace(wc_currency_converter_params.thousand_sep,"")).replace(wc_currency_converter_params.decimal_sep,".")).replace(/[^0-9\.]/g,""),e=parseFloat(e),jQuery(this).attr("data-price",e)}price=i(e).from(i.settings.from).to(c),price=price.toFixed(n),price=accounting.formatNumber(price,n,wc_currency_converter_params.thousand_sep,wc_currency_converter_params.decimal_sep),_&&(price=price.replace(wc_currency_converter_params.zero_replace,"")),a[c]?"left"==t?jQuery(this).html(a[c]+price):"right"==t?jQuery(this).html(price+""+a[c]):"left_space"==t?jQuery(this).html(a[c]+" "+price):"right_space"==t&&jQuery(this).html(price+" "+a[c]):jQuery(this).html(price+" "+c),jQuery(this).attr("title",wc_currency_converter_params.i18n_oprice+e)}),jQuery("#shipping_method option").each(function(){var r=jQuery(this).attr("data-original");void 0!==r&&0!=r||(r=jQuery(this).text(),jQuery(this).attr("data-original",r));var e=r;(e=e.split(":"))[1]&&""!=e[1]&&(price=e[1],price&&(price=price.replace(wc_currency_converter_params.currency_format_symbol,""),price=price.replace(wc_currency_converter_params.thousand_sep,""),price=price.replace(wc_currency_converter_params.decimal_sep,"."),price=price.replace(/[^0-9\.]/g,""),price=parseFloat(price),price=i(price).to(c),price=price.toFixed(n),price=accounting.formatNumber(price,n,wc_currency_converter_params.thousand_sep,wc_currency_converter_params.decimal_sep),_&&(price=price.replace(wc_currency_converter_params.zero_replace,"")),jQuery(this).html(e[0]+": "+price+" "+c)))}),u(c),jQuery("body").trigger("currency_converter_switch",[c]),jQuery("ul.currency_switcher li a").removeClass("active"),jQuery('ul.currency_switcher li a[data-currencycode="'+e+'"]').addClass("active"),jQuery("select.currency_switcher").val(e)}function u(r){r&&jQuery(".ui-slider").each(function(){theslider=jQuery(this),values=theslider.slider("values"),original_price=""+values[1],original_price=original_price.replace(wc_currency_converter_params.currency_format_symbol,""),original_price=original_price.replace(wc_currency_converter_params.thousand_sep,""),original_price=original_price.replace(wc_currency_converter_params.decimal_sep,"."),original_price=original_price.replace(/[^0-9\.]/g,""),original_price=parseFloat(original_price),price_max=i(original_price).to(r),original_price=""+values[0],original_price=original_price.replace(wc_currency_converter_params.currency_format_symbol,""),original_price=original_price.replace(wc_currency_converter_params.thousand_sep,""),original_price=original_price.replace(wc_currency_converter_params.decimal_sep,"."),original_price=original_price.replace(/[^0-9\.]/g,""),original_price=parseFloat(original_price),price_min=i(original_price).to(r),jQuery(".price_slider_amount").find("span.from").html(price_min.toFixed(2)+" "+r),jQuery(".price_slider_amount").find("span.to").html(price_max.toFixed(2)+" "+r)})}i.rates=wc_currency_converter_params.rates,i.base=wc_currency_converter_params.base,i.settings.from=wc_currency_converter_params.currency,i=o(i,wc_currency_converter_params.currency),i=o(i,wc_currency_converter_params.current_currency),"undefined"!=typeof set_initial_currency&&jQuery.cookie("woocommerce_current_currency",set_initial_currency,{expires:7,path:"/"}),"RMB"==i.settings.from&&(i.settings.from="CNY"),jQuery(document).ready(function(r){jQuery("body").on("price_slider_create price_slider_slide price_slider_change",function(){u(e)}),u(e)}),jQuery("body").bind("wc_fragments_refreshed wc_fragments_loaded show_variation updated_checkout updated_shipping_method added_to_cart cart_page_refreshed cart_widget_refreshed updated_addons",function(){e&&c(e)}),jQuery(document.body).on("wc_booking_form_changed wc_currency_converter_calculate",function(){e&&c(e)}),e?c(e):(jQuery('ul.currency_switcher li a[data-currencycode="'+wc_currency_converter_params.currency+'"]').addClass("active"),jQuery("select.currency_switcher").val(wc_currency_converter_params.currency)),jQuery(document.body).on("click","a.wc-currency-converter-reset",function(){return jQuery("span.amount, #shipping_method option").each(function(){var r=jQuery(this).attr("data-original");void 0!==r&&!1!==r&&jQuery(this).html(r)}),jQuery("ul.currency_switcher li a").removeClass("active"),jQuery('ul.currency_switcher li a[data-currencycode="'+wc_currency_converter_params.currency+'"]').addClass("active"),jQuery("select.currency_switcher").val(wc_currency_converter_params.currency),jQuery.cookie("woocommerce_current_currency","",{expires:7,path:"/"}),e="",jQuery("body").trigger("currency_converter_reset"),0<jQuery(".price_slider").size()&&jQuery("body").trigger("price_slider_slide",[jQuery(".price_slider").slider("values",0),jQuery(".price_slider").slider("values",1)]),!1}).on("click",'ul.currency_switcher li a:not(".reset")',function(){return c(e=jQuery(this).attr("data-currencycode")),jQuery.cookie("woocommerce_current_currency",e,{expires:7,path:"/"}),!1}).on("change","select.currency_switcher",function(){return c(e=jQuery(this).val()),jQuery.cookie("woocommerce_current_currency",e,{expires:7,path:"/"}),!1})});
