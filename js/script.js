$(document).ready(function() {


    // headr
    let header_center = $(".center");
    let header_left = $(".left");
    let header_right = $(".right");
    header_left.height(header_center.height());
    header_right.height(header_center.height());


    // last news



    let style_id = $("#style_id");
    let id_btn_style = $("#id_btn_style");
    let style_ind = 0;
    id_btn_style.on("click", function() {
        if (style_ind == 0) {


            style_id.attr("href", "./css/style_dark.css")
            style_ind = 1;
        } else {
            style_id.attr("href", "./css/style.css")
            style_ind = 0;
        }
    });

});