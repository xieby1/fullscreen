(function() {
    var elem = document.documentElement;
    var rfs = 
           elem.requestFullScreen
        || elem.webkitRequestFullScreen
        || elem.mozRequestFullScreen
        || elem.msRequestFullScreen;
    rfs.call(elem);
})();
