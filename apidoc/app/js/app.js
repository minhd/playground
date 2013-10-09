!function ($) {
  $(function(){
  	prettyPrint();

	var $window = $(window)
	var $body   = $(document.body)

	$(document).on('click', '.nav li a', function(e){
		$('.nav li').removeClass('active')
		$(this).parents('li').addClass('active')
	});

	var navHeight = $('.navbar').outerHeight(true) + 10
    $body.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

	$window.on('load', function () {
      $body.scrollspy('refresh')
    })

	// back to top
	setTimeout(function () {
	  var $sideBar = $('.bs-sidebar')

	  $sideBar.affix({
		offset: {
		  top: function () {
			var offsetTop      = $sideBar.offset().top
			var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
			var navOuterHeight = $('.bs-docs-nav').height()

			return (this.top = offsetTop - navOuterHeight - sideBarMargin)
		  }
		, bottom: function () {
			return (this.bottom = $('.bs-footer').outerHeight(true))
		  }
		}
	  })
	}, 100)

	setTimeout(function () {
	  $('.bs-top').affix()
	}, 100)
})
}(window.jQuery)
