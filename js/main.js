/**
 * Created by andre on 23.10.2016.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        css3: true,
        responsiveWidth: 1100
    });
});
var onMapMouseleaveHandler = function() {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
};
var onMapClickHandler = function() {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
};
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);