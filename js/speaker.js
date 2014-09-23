var Speaker = (function() {
  // constructor
  function Speaker() {}

  // static methods
  Speaker.say = function(text){
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  }

  return Speaker;
})();

