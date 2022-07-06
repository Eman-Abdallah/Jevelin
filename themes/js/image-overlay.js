// image overlay

$(".clicks").click(function() {
    $("#imgBig").attr("src", $(".blogcard img").prop('src'));
    $("#overlay").show('slow');
    $("#overlayContent").show('slow');
    console.log(this.closest('div').find('img'));
});
$(".clicks2").click(function() {
    $("#imgBig").attr("src", $(".blogcard2 img").prop('src'));
    $("#overlay").show('slow');
    $("#overlayContent").show('slow');
    console.log(this.closest('div').find('img'));
});
$(".clicks6").click(function() {
    $("#imgBig").attr("src", $(".blogcard6 img").prop('src'));
    $("#overlay").show('slow');
    $("#overlayContent").show('slow');
    console.log(this.closest('div').find('img'));
});
$(".clicks3").click(function() {
    $("#imgBig").attr("src", $(".blogcard3 img").prop('src'));
    $("#overlay").show('slow');
    $("#overlayContent").show('slow');
    console.log(this.closest('div').find('img'));
});
$(".clicks4").click(function() {
    $("#imgBig").attr("src", $(".blogcard4 img").prop('src'));
    $("#overlay").show('slow');
    $("#overlayContent").show('slow');
    console.log(this.closest('div').find('img'));
});
$(".clicks5").click(function() {
    $("#imgBig").attr("src", $(".blogcard5 img").prop('src'));
    $("#overlay").show('slow');
    $("#overlayContent").show('slow');
    console.log(this.closest('div').find('img'));
});


$(".closebtn").click(function() {
    $("#imgBig").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
});


// ellargment photo
$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');

    var modal;

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.9) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0',
        left: '0',
        cursor: 'zoom-out'
    }).click(function() {
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
});
// compare images

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, clicked = 0,
            w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        arrow = document.createElement("I");
        arrow.setAttribute("class", "fas fa-arrows-left-right");
        slider.appendChild(arrow)
            /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }

        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
                /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}