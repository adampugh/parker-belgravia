// navbar
$(".hamburger__menu").on("click", () => {
    $(".navbar__links--mobile").fadeToggle();
});


// api call
let url = "https://parker-api.herokuapp.com/properties";

$.get(url, function(data) {
    const properties = JSON.parse(data);
    // properties.map((property) => {
    //     $(".blue").append("h1").text(property.name);
    // })
    $(".grey-banner__text").append(`<h1>${properties.length} Luxury Homes for Sale in London`);
    // let smallDiv = '<div class="smallDiv">yes</div>';

    // pass data to function
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
    }

    for (let i = 0; i < properties.length; i++) {
        addDiv(properties[i]);
    }



})


// create function that returns panel div that accepts an object as an argument
function createDiv(obj) {
    
}