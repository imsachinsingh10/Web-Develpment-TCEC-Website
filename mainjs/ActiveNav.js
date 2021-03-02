//  Active NavLink Changer

  (function() {

    var navLinks = $('nav .container .navbar-collapse ul li a'),
      navH = $('nav').height(),
      section = $('section'),
      documentEl = $(document);

    documentEl.on('scroll', function() {
      var currentScrollPos = documentEl.scrollTop();

      section.each(function() {
        var self = $(this);
        if (self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ) {
          var targetClass = '.' + self.attr('class') + '.nav-link';
          navLinks.removeClass('.actives');
          $(targetClass).addClass('.actives');
        }
      });
    });

  })();
