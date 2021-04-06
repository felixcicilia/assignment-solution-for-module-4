(function () {

  var names = ["Rafael", "Felix", "Jose", "Jimmy", "Laura", "Mariangelica", "Christopher", "Michell", "Rosa", "Robert"];


  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'r') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
  }
})();
