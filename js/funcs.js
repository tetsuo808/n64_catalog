$(document).ready(function() {
    $('.btn-rgt').click( function () {
		$('.scene').css('transform','rotateY(-75deg)');
	});
    $('.btn-lft').click( function () {
		$('.scene').css('transform','rotateY(75deg)');
	});
    $('.btn-upp').click( function () {
    	$('.scene').css('transform','rotateX(-55deg)');
	});
    $('.btn-dwn').click( function () {
		$('.scene').css('transform','rotateX(40deg)');
	});

    $('.btn-a').click( function () {
		$('.cub-1').toggleClass('crush');
	});
    $('.btn-b').click( function () {
		$('.scene').css('transform','rotateX(-20deg) rotateY(-27deg)');
	});
});
