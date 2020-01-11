(function() {
    var head = document.querySelector(".heading");
    var nav = document.querySelector(".nav");
    var burger = document.querySelector(".burger");

    burger.addEventListener("click", function() {
        head.classList.toggle("heading--active");
        nav.classList.toggle("nav--active");
        burger.classList.toggle("burger--active");
        setTimeout(close, 3000);
    });

    function close() {
        head.classList.remove("heading--active");
        nav.classList.remove("nav--active");
        burger.classList.remove("burger--active");
    }

    $(".header__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });

    $(".clients__feedback").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $(".acc__text").slideUp();

    $(".acc__title").on("click", function() {
        $(".acc__title")
            .not(this)
            .siblings()
            .slideUp();
        $(this)
            .siblings()
            .slideToggle();
        $(this)
            .children()
            .toggleClass("acc--active");
        $(this).toggleClass("acc__title--active");
        $(".acc__title")
            .not(this)
            .removeClass("acc__title--active");

        if (
            $(".acc__title")
                .not(this)
                .children(".acc__minus")
                .hasClass("acc--active")
        ) {
            $(".acc__title")
                .not(this)
                .children(".acc__minus")
                .removeClass("acc--active");
            $(".acc__title")
                .not(this)
                .children(".acc__plus")
                .addClass("acc--active");
        }
    });

    var $grid = $(".portfolio__gallery").isotope({
        itemSelector: ".portfolio__item",
        layoutMode: "fitRows",
        fitWidth: true
    });

    $(".portfolio__link").on("click", function(e) {
        e.preventDefault();

        var filterValue = $(this).attr("data-filter");
        var myFilter = "." + filterValue;
        console.log(myFilter);
        $grid.isotope({ filter: myFilter });
    });
})();

function initMap() {
    var myMap = document.getElementById("map");
    var myCenter = {
        lat: 30.045888,
        lng: 31.240954
    };
    var markerCenter = {
        lat: 30.024465,
        lng: 31.209381
    };
    var mapOptions = {
        zoom: 14,
        center: myCenter,
        disableDefaultUI: true,
        styles: [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ebe3cd"
                    }
                ]
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#523735"
                    }
                ]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f1e6"
                    }
                ]
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#c9b2a6"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#dcd2be"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#ae9e90"
                    }
                ]
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dfd2ae"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dfd2ae"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#93817c"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#a5b076"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#447530"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f1e6"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#fdfcf8"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f8c967"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#e9bc62"
                    }
                ]
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e98d58"
                    }
                ]
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#db8555"
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#806b63"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dfd2ae"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#8f7d77"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#ebe3cd"
                    }
                ]
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dfd2ae"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#b9d3c2"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#92998d"
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(myMap, mapOptions);
}
