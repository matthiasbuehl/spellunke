(function() {
  var app = new App( {
    words: ['hello', 'you', 'sun', 'moon']
  });

  var $check = $('#check'),
      $read = $('#read'),
      $word = $('#word'),
      $nuno = $('#nuno'),
      $casimira = $('#casimira'),
      $correctWords = $('#correct_words'),
      casimira_words = ['clip', 'flip', 'slip', 'flag', 'black', 'plan', 'come', 'good', 'clap', 'flat', 'slim'],
      nuno_words = ['state', 'close', 'slide', 'face', 'globe', 'pave', 'size', 'smoke', 'flame', 'broke', 'prize', 'skate', 'smile', 'plane', 'stone'];

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
    switch(e.which) {
      case 13:
        $check.click();
        break;

      case 32:
        // return if space is not the first and only character
        if ($word.val().trim() != '') { return; }
        $read.click();
        break;
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
    clearActive();
    app = new App( { words: casimira_words } );
    $(e.target).addClass('button-active');
  });

  $casimira.click(function(e) {
    clearActive();
    app = new App( { words: nuno_words } );
    $(e.target).addClass('button-active');
  });

})();
