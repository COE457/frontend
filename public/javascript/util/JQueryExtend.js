/**
 * @file util/JQueryExtend.js
 * 
 * @description extensions for JQuery
 *
 * Assumptions JQuery has been loaded 
 */

(function ($) { //  tries to runs the function before setting it as an event callback
    $.fn.runThenOn = (events, callback) => {
        try { callback(); } catch (err) { }
        $(this).on(events, callback);
    }
})(jQuery)
