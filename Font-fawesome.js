//<![CDATA[
//add Font Awesome
      var cb = function() {
        var l = document.createElement('link'); l.rel = 'stylesheet';
        l.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
        var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
      };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
          webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(cb);
      else window.addEventListener('load', cb);
//]]>