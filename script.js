(function(window) {
    var names = ["Jathee", "Yakoov", "Kajan", "Bala", "John", "Lara", "Jen", "Franlin", "Jaso", "Kumaran", "Sri", "Jasu"];

    for (var i in names) {
        var firstLetter = ((names[i]).charAt(0)).toLowerCase();

        if (firstLetter == 'j') {
            window.byeSpeaker.speak(names[i]);
        } else {
            window.helloSpeaker.speak(names[i]);
        }
    }
})(window);