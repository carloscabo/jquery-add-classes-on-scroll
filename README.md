jquery-add-classes-on-scroll
============================

Add / remove classes to elements / body when scroll surpass limit in pixels / element offset.
You can set several limit / elemets at once as follows:

    addClassesOnScroll.init([
      // pixels, class, target object if undefined body
      [100, 'scroll-over-100px'],
      [600, 'scroll-over-500px', $('html')],
      [$('.main-sub-menu').offset().top, 'class-element-reached']
    ]);
