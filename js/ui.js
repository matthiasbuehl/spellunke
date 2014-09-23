(function() {
  var app = new App( {
    words: ['hello', 'you', 'sun', 'moon']
  });

  var $next = $('#next'),
      $check = $('#check'),
      $read = $('#read'),
      $word = $('#word'),
      $nuno = $('#nuno'),
      $casimira = $('#casimira');

  $next.hide();
  $check.hide();

  $next.click(function(e) {
    app.nextWord();
  });

  $read.click(function(e) {
    app.readWord();
    $check.show();
  });

  $check.click(function(e) {
    var isCorrect = app.checkWord($word.val());
    if (isCorrect) {
      app.nextWord();
      $word.val('');
    }
  });

  $nuno.click(function(e) {
    app = new App({
      words: ['pin', 'win', 'hit', 'sit', 'miss', 'kiss', 'be', 'run', 'fin', 'bit', 'bliss']
    });

    $('#students a').each(function(index) {
      $(this).removeClass('button-active');
    });

    $(e.target).addClass('button-active');
  });

  $casimira.click(function(e) {
    app = new App({
      words: ['found', 'stout', 'groom', 'damp', 'troop', 'son', 'hound', 'track', 'ton', 'coop', 'bent', 'shock', 'toil', 'lend', 'trim']
    });

    $('#students a').each(function(index) {
      $(this).removeClass('button-active');
    });

    $(e.target).addClass('button-active');
  });

})();
