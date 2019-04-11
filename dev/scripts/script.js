
$(".hamburger").click( function () {
    $("nav").toggleClass('show');
    $(this).toggleClass('is-active');
});

$("#toggle-list").click(function () {
    $("#course-schedule").toggleClass('list-schedule');
    if ($("#course-schedule").hasClass('list-schedule')) {
        $(this).text('View As Calendar');
    } else {
        $(this).text('View As List');
    }
});