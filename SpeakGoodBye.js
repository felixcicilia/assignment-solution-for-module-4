(function (window) {

  var byeSpeaker = {};

  var speakWord = "Good Bye mr/mrs";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker;

})(window);
