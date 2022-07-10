    function mouseEnter() {
        document.getElementById("fuck").style.color = "red";
    }

    function mouseLeave() {
        document.getElementById("fuck").style.color = "black";
    }

    document.getElementById('fuck').addEventListener("mouseover", mouseEnter);
    document.getElementById('fuck').addEventListener("mouseleave", mouseLeave);