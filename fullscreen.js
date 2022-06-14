(function() {
    var elem = document.documentElement;
    var rfs = 
           elem.requestFullscreen
        || elem.webkitRequestFullScreen
        || elem.mozRequestFullScreen
        || elem.msRequestFullScreen;
    rfs.call(elem);
})();
