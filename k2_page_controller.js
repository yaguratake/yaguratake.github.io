// k2_page_controller

let k2pc = {
    scrollY: function(y) {
        $("html,body").animate({scrollTop:y}, { duration: 'fast'});
        return false;
    },
    prevElement: function(filter) {
        let $elements = $(filter);
        let i, $e;
        for (i = 0; i < $elements.length; i++) {
            $e = $elements.eq(i);
            if ($e.offset().top >= $(window).scrollTop()) {
                return this.scrollY(i ? $(filter).eq(i - 1).offset().top : 0);
            }
        }
        return  this.scrollY($elements.eq($elements.length - 1).offset().top);
    },
    nextElement: function(filter) {
        let $elements = $(filter);
        let i, $e;
        for (i = 0; i < $elements.length; i++) {
            $e = $elements.eq(i);
            if ($e.offset().top > $(window).scrollTop() + 1) {
                return  this.scrollY($e.offset().top);
            }
        }
        return this.toBottom();
    },
    toTop: function() {
        return  this.scrollY(0);
    },
    toBottom: function() {
        return  this.scrollY($(document).height());
    }
};
