
    $('.loop').owlCarousel({
        loop: true,
                            margin: 10,
                            responsiveClass: true,
                            responsive: {
                                0: {
                                items: 1,
                                    nav: false,
									loop: true,
                                    dots: false,
                                    autoplay: 1000
									
                                },
                                600: {
                                items: 1,
                                    nav: false,
									loop: true,
                                    dots: false,
                                    autoplay: 1000
                                },
                                1000: {
                                    items: 1,
                                    nav: false,
                                    loop: true,
                                    dots: false,
                                    autoplay: 1000
           }
        }
    });