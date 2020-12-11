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
    // after mlab sunset
    const properties = [{"_id":"5a33f42067bd3000149ca5f9","name":"Old Church Street","location":"Chelsea, London","beds":"4","baths":"5","price":"£10,000,000","image":"https://image.ibb.co/iHfvvR/1.jpg"},{"_id":"5a33f4a367bd3000149ca5fa","name":"Lexham Gardens","location":"Kensington, London","beds":"3","baths":"4","price":"£8,500,000","image":"https://image.ibb.co/dzmqUm/2.jpg"},{"_id":"5a33f72b67bd3000149ca5fb","name":"Chapel House","location":"Belgravia, London","beds":"6","baths":"4","price":"£12,500,000","image":"https://image.ibb.co/mFuNaR/3.jpg"},{"_id":"5a33f74c67bd3000149ca5fc","name":"Luxury Penthouse","location":"Belgravia, London","beds":"3","baths":"2","price":"£7,500,000","image":"https://image.ibb.co/i3navR/4.jpg"},{"_id":"5a33f77667bd3000149ca5fd","name":"Ebury House","location":"Belgravia, London","beds":"3","baths":"3","price":"£8,200,000","image":"https://image.ibb.co/bsJth6/5.jpg"},{"_id":"5a33f7b467bd3000149ca5fe","name":"Wilton Court","location":"Belgravia, London","beds":"5","baths":"4","price":"£8,500,000","image":"https://image.ibb.co/fsG2aR/6.jpg"},{"_id":"5a33f7ca67bd3000149ca5ff","name":"Eaton Gardens","location":"Belgravia, London","beds":"5","baths":"4","price":"£6,800,000","image":"https://image.ibb.co/hwVjpm/7.jpg"},{"_id":"5a33f81867bd3000149ca600","name":"Blenheim House","location":"Kensington, London","beds":"3","baths":"3","price":"£6,400,000","image":"https://image.ibb.co/nbpzN6/8.jpg"},{"_id":"5a33f83667bd3000149ca601","name":"Peter Court","location":"Belgravia, London","beds":"4","baths":"3","price":"£6,200,000","image":"https://image.ibb.co/dbTth6/9.jpg"}]
    
    properties.map(property => {
        addDiv(property);
    });

    $(".grey-banner__text").append(`<h1>${properties.length} Luxury Homes for Sale in London`);
});


//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
