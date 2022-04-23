var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({item:4 , nav:true});
    
});
$(document).ready(function(){
    $(".owl-carousel2").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            800: {
                items: 6,
            },
            1000: {
                items: 7,
            },
        },
    });
    
});




const navbar = {
    button:" ",
    nav:document.querySelector(".main-nav"),

};

const schedule ={
    buttons: document.querySelectorAll(".schedule-nav a"),
    days:document.querySelectorAll(".schedule-day")
};

function hideDays() {
    schedule.days.forEach((elm) => {
        elm.classList.remove("active");
    });
    schedule.buttons.forEach((elm) => {
        elm.classList.remove("active");
    });
}
schedule.buttons.forEach(function(elm, i){
   elm.onclick = function () {
       hideDays();
       elm.classList.add("active")
       schedule.days[i].classList.add("active");
   };
});

counters = {
    elements: document.querySelectorAll(".about-counters span"),
    counts: [3, 10, 20],
    state: [0, 0, 0],
    time: 2000,
    counted: false,
    Plus: [false, true, true],
    startCounting: function () {
        this.intervals = this.counts.map((elm) => this.time / elm);
        this.timers = [];
        for (let i = 0; i < this.elements.length; i++) {
            const elm = this.elements[i];
            this.timers[i] = setInterval(() => {
                if (this.state[i] >= this.counts[i]) clearInterval(this.timers[i]);
                else {
                    this.state[i]++;

                    elm.innerHTML = (this.state[i] < 10 ? "0" : "") + this.state[i];
                }
            }, this.intervals[i]);
        }
    },
},
function scrollHandler(e){
    if(window.pageYOffset>300) navbar.nav.classList.add(fixed);
    else navbar.nav.classList.remove(fixed);
    console.dir(
        schedule.schedule.offsetTop - schedule.schedule.offsetHeight < window.pageYOffset
    );
}
document.onscroll = scrollHandler;
scrollHandler();

