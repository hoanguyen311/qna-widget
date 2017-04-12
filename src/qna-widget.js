import QnAWidget from './libs/QnAWidget';

window.QnAWidget = (function() {
    return {
        init: function(params) {
            return new QnAWidget(params);
        }
    }
})();
