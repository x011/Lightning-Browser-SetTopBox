(function () {
    var elem = document.querySelector("meta[name=viewport]");

    if (elem === null) {
        elem = document.createElement("meta");
        elem.setAttribute("name", "viewport");
        document.querySelector("head").appendChild(elem);
    }

    elem.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
})();



