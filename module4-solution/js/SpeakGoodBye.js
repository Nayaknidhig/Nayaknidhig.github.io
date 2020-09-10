
(function (window){
	var byeSpeaker ={};
	byeSpeaker.speakWord = "Good Bye";
	byeSpeaker.speak = function (names) {
	  console.log(byeSpeaker.speakWord + " " + names);
	}
	window.byeSpeaker = byeSpeaker;
})(window);

