$(document).ready(function() {

	$('.cub-1').click( function () {
		$(this).css('margin-left','-5.9em');
	});


    $('.btn-rgt').click( function () {
		$('.scene').css('transform','rotateY(-65deg)');
	});
    $('.btn-lft').click( function () {
		$('.scene').css('transform','rotateY(40deg)');
	});
    $('.btn-upp').click( function () {
		$('.scene').css('transform','rotateX(-40deg)');
	});
    $('.btn-dwn').click( function () {
		$('.scene').css('transform','rotateX(40deg)');
	});

    $('.btn-a').click( function () {
		$('.cub-1').css('margin-left','-5.9em');
	});
    $('.btn-b').click( function () {
		location.reload(true);
	});
});
