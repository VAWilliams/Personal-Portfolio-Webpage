var scrollToLink = function(event) {
    
    var href = event.target.getAttribute("href");
    var id = href.substring(1, href.length);
    
    window.scrollTo({
        top: document.getElementById(id).clientHeight,
        behavior: "smooth"
    });
}