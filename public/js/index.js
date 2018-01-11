// navbar
$(".hamburger__menu").on("click", () => {
    $(".navbar__links--mobile").fadeToggle();
});


// scroll into view
$(".home-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__links--mobile").fadeOut();
    document.querySelector('#header').scrollIntoView({ block: "start", behavior: 'smooth' });
});

$(".properties-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__links--mobile").fadeOut();
    document.querySelector('#properties').scrollIntoView({ block: "start", behavior: 'smooth' });
});

$(".blog-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__links--mobile").fadeOut();
    document.querySelector('#blog').scrollIntoView({ block: "start", inline: "start", behavior: 'smooth' });
});

$(".contact-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__links--mobile").fadeOut();
    document.querySelector('#contact').scrollIntoView({ block: "start", behavior: 'smooth' });
});



// creates listing panels
function addDiv(property) {
    $(".properties").append(
        `<div class="panel">
        <img src="${property.image}" alt="">
        <div class="panel__text">
            <h2>${property.name}</h2>
            <h3>${property.location}</h3>
            <div class="panel__text__details">
                <div>
                    <h3>${property.beds}<i class="fa fa-bed" aria-hidden="true"></i></h3>
                    <h5>Beds</h5>
                </div>
                <div>
                    <h3>${property.baths}<i class="fa fa-bath" aria-hidden="true"></i></h3>
                    <h5>Baths</h5>
                </div>
                <div></div>
                <div class="price">
                    <h3>${property.price}</h3>
                </div>
            </div>
        </div>     
    </div>`
    );
};




// api call
let url = "https://parker-api.herokuapp.com/properties";

$.get(url, function(data) {
    $(".loader__container").hide();

    JSON.parse(data).map(property => {
        addDiv(property);
    });

    $(".grey-banner__text").append(`<h1>${properties.length} Luxury Homes for Sale in London`);
});


//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
