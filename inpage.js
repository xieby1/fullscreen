var altKeyPressed = false;

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 18) {
    // The "Alt" key was pressed
    altKeyPressed = true;
  } else if (event.keyCode === 77 && altKeyPressed) {
    // The "M" key was pressed while the "Alt" key was down
    console.log('The "Alt + M" key combination was pressed');
    if (document.fullscreenElement) {
        // The current state is fullscreen
        console.log('Currently in fullscreen mode');
        var elem = document;
        var rfs =
            elem.exitFullscreen
            || elem.webkitExitFullScreen
            || elem.mozExitFullScreen
            || elem.msExitFullScreen;
        rfs.call(elem);
    } else {
        // The current state is not fullscreen
        console.log('Not currently in fullscreen mode');
        var elem = document.documentElement;
        var rfs =
            elem.requestFullscreen
            || elem.webkitRequestFullScreen
            || elem.mozRequestFullScreen
            || elem.msRequestFullScreen;
        rfs.call(elem);
    }
  }
});

window.addEventListener('keyup', function(event) {
  if (event.keyCode === 18) {
    // The "Alt" key was released
    altKeyPressed = false;
  }
});

console.log('Keyboard listener added for Alt+M')