$(function(){
	

		$('.mosaico .container #produtos').slick({
			centerMode: false,
			slidesToShow:3,
			arrow:false,
			prevArrow: null,
			nextArrow: null,
			responsive:[
	
			{
				breakpoint:768,
				settings:{
					arrows:false,
					centerMode:true,
					slidesToShow:1
				}
			},
	
			{
				breakpoint:580,
				settings:{
					arrows:false,
					centerMode:true,
					slidesToShow:1
				}
			}
	
			]
		})

	
	
	

})