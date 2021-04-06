(function (window) {

var helloSpeaker = {};

  var speakWord = "Hello mr/mrs";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window.helloSpeaker = helloSpeaker;

})(window);
