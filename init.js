function injectCode(src) {
    const script = document.createElement('script');
    // This is why it works!
    script.src = src;
    script.onload = function() {
        console.log("inpage script injected");
        this.remove();
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    document.documentElement.appendChild(script);
}


injectCode(chrome.runtime.getURL('/inpage.js'));