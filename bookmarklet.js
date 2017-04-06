/*
 *  Made with laziness by Raymond Luo
 */

javascript: (function () {
    if (!window.location.href.includes("gfycat.com/upload")) {
        window.location.href = 'https://gfycat.com/upload';
    }
    var x = document.querySelectorAll(".gfyLink");
    x.forEach(function (element) {
        var href = element.getAttribute("href");
        href = "https://zippy.gfycat.com" + href + ".mp4";
        var newElement = document.createElement("a");
        newElement.setAttribute("href", href);
        newElement.setAttribute("target", "_blank");
        newElement.innerHTML = href;
        element.parentNode.replaceChild(newElement, element);
        newElement.style.backgroundColor = "#000000";
        newElement.style.color = "#16e579";
    });
})();
