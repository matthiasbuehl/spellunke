var App = (function() {
  // constructor
  function App(opts) {
    this.words = opts.words;
    this.length = this.words.length;
    init.call(this);
  }

  // private methods
  function init() {
    this.currentIndex = 0;
    this.shuffle();
    this.currentWord = this.words[0];
  }

  // public instance methods
  App.prototype = {
    constructor: App,

    nextWord: function() {
      this.currentIndex++;
      this.currentWord = this.words[this.currentIndex];
      this.readWord();

      // Check if we made it through the deck
      if (this.currentIndex == this.length-1) {
        Speaker.say('Congratulation, you made it through the list.');
        init.call(this);
      }
    },

    readWord: function() {
      console.log(this.currentIndex + ' ' + this.currentWord);
      Speaker.say( this.currentWord );
    },

    shuffle: function() {
      this.words.sort( function(first, second) {
        var a = Math.random();
        var b = Math.random();
        if (a == b) { return 0; }
        if (a < b) { return -1; }
        if (a > b) { return 1; }
      });
    },

    checkWord: function(userWord) {
      var isCorrect = userWord.trim().toLowerCase() == this.currentWord;
      console.log(isCorrect);

      if (isCorrect) {
        Speaker.say('Great job.  You got it right');
      }
      else {
        Speaker.say('Try again');
      }

      return isCorrect;
    }
  }



  return App;
})();
