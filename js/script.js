$(function () {
    $('#option_0').trigger('click');
})

function show_div(curthis) {
    var id = curthis.attr('id');
    $('#div_' + id).siblings().removeClass("d-flex").addClass('d-none');
    $('#div_' + id).removeClass('d-none').addClass('d-flex');
}

$('#option_0').click(function () {
    show_div($(this));
})

$('#option_1').click(function () {
    show_div($(this));
})

$('#option_2').click(function () {
    show_div($(this));
})
$('#option_3').click(function () {
    show_div($(this));
})
$('#option_4').click(function () {
    show_div($(this));
})
$('#option_5').click(function () {
    show_div($(this));
})
$('#option_6').click(function () {
    show_div($(this));
})
$('#option_7').click(function () {
    show_div($(this));
})
$('#option_8').click(function () {
    show_div($(this));
})
