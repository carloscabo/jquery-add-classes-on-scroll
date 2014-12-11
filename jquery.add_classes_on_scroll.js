/*
JQuery addClassesOnScroll by Carlos Cabo, parts by Viíctor Ortíz Heredia
https://github.com/carloscabo/jquery-add-classes-on-scroll
2014 / 12 / 11

// Usage
addClassesOnScroll.init([
  // pixels, class to toggle, target object if undefined $('body')
  [100, 'scroll-over-100px'],
  [600, 'scroll-over-500px', $('html')],
  [$('.main-sub-menu').offset().top, 'scroll-over-element']
]);
*/

addClassesOnScroll = {
  el: {
    $win: $(window)
  },
  settings: [
    // pixels, 'class_name', $(target_selector)
  ],
  wst : 0,

  init: function (options) {
    var _t = this;
    $.extend(true, _t.settings, options);

    // Initial
    _t.wst = _t.el.$win.scrollTop();
    _t.set_remove_class();

    // Bind to scroll
    this.el.$win.on('scroll', function() {
      _t.wst = _t.el.$win.scrollTop();
      _t.set_remove_class();
    });
  },
  set_remove_class: function () {
    var _t = this;
    for (var i = _t.settings.length - 1; i >= 0; i--) {
      // Target de la clase si es indefinido el body
      var $target = (typeof _t.settings[i][2] === 'undefined') ? $('body') : _t.settings[i][2];
      // Check height
      if (_t.wst >= _t.settings[i][0]) {
        $target.addClass(_t.settings[i][1]);
      } else if ($target.hasClass(_t.settings[i][1])) {
        $target.removeClass(_t.settings[i][1]);
      }
    };
  },
};
