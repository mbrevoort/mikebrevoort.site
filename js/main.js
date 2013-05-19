(function() {

  'use strict';

  var $likes = $('#likes'),
      $count = $likes.find('span.count'),
      $pageId = $likes.data('page-id'),
      hasLikes = false,
      database = 'mikebrevoort',
      collection = 'likes',
      apiKey = 'O5du5o12UZ4urBz4jxt7imKGPz2YATvV',
      timer;

  if (location.hostname.match('mike\.brevoort\.com') && $likes.length) {

    var likeMover = function() {
      var $scroll = $(window).scrollTop();

      $scroll = $scroll > 250 ? $likes.addClass('moveme') : $likes.removeClass('moveme');
    };

    $(window).scroll(function() {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function() {
        likeMover();
      }, 100);
    });

    if (localStorage && localStorage.getItem($pageId)) {
      var localData = JSON.parse(localStorage.getItem($pageId));

      if (localData.counted) {
        $likes.addClass('counted')
          .find('i')
          .toggleClass('icon-heart-empty icon-heart-full');
      }
    }

    if (sessionStorage && sessionStorage.getItem($pageId)) {
      var sessionData = JSON.parse(sessionStorage.getItem($pageId));

      $count.text(sessionData.count);
    } else {
      $.ajax({
        url: 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collection + '?apiKey=' + apiKey,
        type: 'GET',
        contentType: 'application/json',
        success: function(data) {
          $.each(data, function(index, value) {
            if (value.pageId === $pageId) {
              $count.text(value.count);
              hasLikes = true;
            }

            sessionStorage.setItem(value.pageId, JSON.stringify({count: value.count}));
          });

          if (!hasLikes) {
            $.ajax({
              url: 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collection + '?apiKey=' + apiKey,
              data: JSON.stringify({
                pageId: $pageId,
                count: 0
              }),
              type: 'POST',
              contentType: 'application/json',
              success: function() {
                $count.text('0');
                sessionStorage.setItem($pageId, JSON.stringify({count: 0}));
              }
            });
          }
        }
      });
    }

    $likes.on('click', function(e) {
      var $this = $(this),
          $num = $count.text();

      $this.toggleClass('counted')
        .find('i')
        .toggleClass('icon-heart-empty icon-heart-full');

      $num = $this.hasClass('counted') ? ++$num : --$num;
      $count.text($num);

      sessionStorage.setItem($pageId, JSON.stringify({count: $num}));
      localStorage.setItem($pageId, JSON.stringify({counted: $this.hasClass('counted') ? true : false}));

      $.ajax({
        url: 'https://api.mongolab.com/api/1/databases/' + database + '/runCommand?apiKey=' + apiKey,
        data: JSON.stringify({
          findAndModify: collection,
          query: {
            pageId: $pageId
          },
          update: {$inc: {count: ($this.hasClass('counted') ? 1 : -1)}},
          upsert: true
        }),
        type: 'POST',
        contentType: 'application/json'
      });

      e.preventDefault();
    });

  }
})();
