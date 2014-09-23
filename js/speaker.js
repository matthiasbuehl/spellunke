var Speaker = (function() {
  // constructor
  function Speaker() {}

  // static methods
  Speaker.say = function(text){
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0;
    window.speechSynthesis.speak(utterance);
  }

  return Speaker;
})();

