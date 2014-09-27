(function() {
  var app = new App( {
    words: ['hello', 'you', 'sun', 'moon']
  });

  var $check = $('#check'),
      $read = $('#read'),
      $word = $('#word'),
      $nuno = $('#nuno'),
      $casimira = $('#casimira'),
      $correctWords = $('#correct_words');

  $check.hide();

  function clearActive() {
      $('#students a').each(function(index) {
      $(this).removeClass('button-active');

      clearCorrectWords();
    });
  };

  function clearCorrectWords() {
    $correctWords.html('');
  };

  function clearInput() {
    $word.val('');
    $word.focus();
  };


  // Events
  $(document).keyup(function(e) {
    console.log(e.which);
    if (e.which == 13) {
      $check.click();
    }
  });

  $read.click(function(e) {
    app.readWord();
    $check.show();
    clearInput();
  });

  $check.click(function(e) {
    var isCorrect = app.checkWord($word.val());
    if (isCorrect) {
      app.nextWord();
      $correctWords.append('<div class="button button-green">' + $word.val() + '</div>');
    }

    clearInput();
  });

  $nuno.click(function(e) {
    app = new App({
      words: ['pin', 'win', 'hit', 'sit', 'miss', 'kiss', 'be', 'run', 'fin', 'bit', 'bliss']
    });

    clearActive();

    $(e.target).addClass('button-active');
  });

  $casimira.click(function(e) {
    app = new App({
      words: ['found', 'stout', 'groom', 'damp', 'troop', 'son', 'hound', 'track', 'ton', 'coop', 'bent', 'shock', 'toil', 'lend', 'trim']
    });

    clearActive();

    $(e.target).addClass('button-active');
  });

})();
