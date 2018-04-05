"use strict";

/* Code for i18next
 *
 */
$(document).ready(function(){
    var browserLanguage = Cookies.get('locale') || navigator.language;

    // set default language
    setLanguage(browserLanguage);
    
    // action change language
    $(this).on("click", "#languages", function(event) {
        var language = $(event.target).attr("language");
        setLanguage(language);
    });
});

function setLanguage(language){
    switch(language)
    {
        case "ca":
          
          break;
        case "en":
        
          break;
        default:
          language = "es"
    }

    Cookies.set('locale', language);

    i18n.init({
        lng: language,
        fallbackLng: false,
        debug: true
    }, function() {
        $("[data-i18n]").i18n();
    });
}
