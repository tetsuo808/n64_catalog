$(document).ready(function() {
    $('.btn-rgt').click( function () {
		$('.scene').css('transform','rotateY(-45deg)');
	});
    $('.btn-lft').click( function () {
		$('.scene').css('transform','rotateY(45deg)');
	});
    $('.btn-upp').click( function () {
    	$('.scene').css('transform','rotateX(-30deg)');
	});
    $('.btn-dwn').click( function () {
		$('.scene').css('transform','rotateX(30deg)');
	});

    $('.btn-a').click( function () {
		$('.cub-1').toggleClass('crush');
	});
    $('.btn-b').click( function () {
		$('.scene').css('transform','rotateX(-20deg) rotateY(-27deg)');
	});

    $('.dir-upp').click( function () {
		$('.row-01').css('margin-top','0');
        //$('.row-01').css('opacity','0');

        $('.row-02 .cub-1').css('transform','translateZ(0)');
        $('.nus-006 .cub-1').css('transform','translate3d(0em, 2em, 2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-007 .cub-1').css('transform','translate3d(0em, 1em, 1em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-009 .cub-1').css('transform','translate3d(0em, -1em, -1em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-010 .cub-1').css('transform','translate3d(0em, -2em, -2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');

        $('.row-03 .cub-1').css('transform','translateZ(0)');
        $('.nus-011 .cub-1').css('transform','translate3d(0em, 2em, -2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-012 .cub-1').css('transform','translate3d(0em, 1em, -3em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-013 .cub-1').css('transform','translate3d(0em, 0em, -4em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-014 .cub-1').css('transform','translate3d(0em, -1em, -5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-015 .cub-1').css('transform','translate3d(0em, -2em, -6em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
	});

    $('.dir-dwn').click( function () {
		$('.row-02').css('margin-top','0');
        //$('.row-02').css('opacity','0');

        $('.row-03 .cub-1').css('transform','translateZ(0)');
        $('.nus-011 .cub-1').css('transform','translate3d(0em, 2em, 2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-012 .cub-1').css('transform','translate3d(0em, 1em, 1em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-014 .cub-1').css('transform','translate3d(0em, -1em, -1em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        $('.nus-015 .cub-1').css('transform','translate3d(0em, -2em, -2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
        //$('.row-03').css('transform','translateZ(0)');
	});
});
