var Speaker = (function() {
  // constructor
  function Speaker() {}

  // static methods
  Speaker.say = function(text){
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    // set a random voice if we have voices
    if (voices) {
      utterance.voice =
        voices[ Math.floor( Math.random() * voices.length ) ];
    }
    // slow down speach a bit
    utterance.rate = .8;
    window.speechSynthesis.speak(utterance);
  }

  return Speaker;
})();

