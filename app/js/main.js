function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
$('.sign__body-form-em').on('click', function(e){
  $(this).children('span').addClass('active')
  $(this).children('input').focus()
})
$('.sign__body-form-em input').on('blur', function(e){
  if ($(this).val() == ''){
    $(this).prev('span').removeClass('active')
  }
})
$('.sign__body-form-pas').on('mouseover', function(e){
  $(this).children('button').addClass('active')
})
$('.sign__body-form-pas').on('mouseout', function(e){
  $(this).children('button').removeClass('active')
})
$('.sign__body-form-pas-btn').on('click', function(e){
  if ($(this).prev('input').attr('type') == 'password'){
    $(this).prev('input').attr('type', 'text')
  }else{
    $(this).prev('input').attr('type', 'password')
  }
})
$('.burger__black').on('click', function(e){
  $('.header__black').toggleClass('active')
  $(this).toggleClass('active')
})
$('.burger__white').on('click', function(e){
  $('.header__white').toggleClass('active')
  $(this).toggleClass('active')
})
var splide = new Splide("#rev", {
    type: "loop",
    pagination: false
});

splide.mount();


var splide = new Splide( '#dif', {
  type: 'loop',
  pagination: false
} );

splide.mount();


var splide = new Splide( '#tak', {
  type: 'loop',
  pagination: false
} );

splide.mount();