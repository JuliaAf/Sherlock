$(document).ready(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $(".header__nav").css("background","#0b0a1c");
      }
      else{
        $(".header__nav").css("background","transparent");
      }
  });


  $(".testimonials__list").owlCarousel({

    // Most important owl features
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1184,3],
    itemsDesktopSmall : [976,2],
    itemsTablet: [752,2],
    itemsMobile : [560,1],
    singleItem : false,
    itemsScaleUp : false,

    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : true,

    // Navigation
    navigation : true,
    navigationText : ["",""],
    rewindNav : true,
    scrollPerPage : false,

    //Pagination
    pagination : false,
    paginationNumbers: false,

    // Responsive
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",

    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",

    //Auto height
    autoHeight : false,

    //JSON
    jsonPath : false,
    jsonSuccess : false,

    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,

    //Transitions
    transitionStyle : false,

    // Other
    addClassActive : false,

    //Callbacks
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging : false
    // afterLazyLoad : false
});


  if($(window).width() > 768){
    $(".header__nav, .about__content-final").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top -50;
        $("body,html").animate({scrollTop: top}, 500);
        return false;
    })
  };


  $(function (){
		$(".scrolltop").hide();
		$(window).scroll(function (){
			if ($(this).scrollTop() > 700){
				$(".scrolltop").fadeIn();
			} else{
				$(".scrolltop").fadeOut();
			}
		});

		$(".scrolltop").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 500);
			return false;
		});
	});



  /*wow*/
  wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();




});//ready end
