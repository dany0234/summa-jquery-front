const DOMUtils = {
    clearElement: function(selector) {
        $(selector).empty();
    },

    appendHTML: function(selector, html) {
        $(selector).append(html);
    }
};
