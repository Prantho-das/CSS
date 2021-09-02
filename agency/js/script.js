if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("../serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

var typed = new Typed(".type", {
    strings: ["I am a Designer", "I am Developer", "I am Loser"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});



particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);


$('.counter').counterUp({
    delay: 15,
    time: 1500
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            loop: true,
            autoplay: true
        },
        600: {
            items: 1,
            dots: true,
            loop: true,
            autoplay: true
        },
        1000: {
            items: 1,
            dots: true,
            loop: true,
            autoplay: true
        }
    }
})




$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 250) {
            $(".up").css('display','block');
            $(".logo").addClass('color');
            $(".nav-l").addClass('color-1');
            $(".navbar").addClass('stick-top');
        }
        else {
            $(".up").css('display', 'none');
            $(".logo").removeClass('color');
            $(".nav-l").removeClass('color-1');
            $(".navbar").removeClass('stick-top');
        }
    });
    $(".up").click(function () {
        $("html,body").animate({
            scrollTop:0
        },'fast');
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $('#skil-1').addClass('inner-1');
            $('#skil-2').addClass('inner-2');
            $('#skil-3').addClass('inner-3');
            $('#skil-4').addClass('inner-4');
        }
    });
});