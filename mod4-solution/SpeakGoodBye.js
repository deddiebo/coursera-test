(function (window) {
  var byeSpeaker = {};
  var speakWord = "Goodbye ";
  byeSpeaker.speak = function (name) {
  	byeSpeaker.name = name;
    console.log(speakWord + byeSpeaker.name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
