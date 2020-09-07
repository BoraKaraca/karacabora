$('#blog-subscribe').on('click', function () {
    var email = $('#txtEmail').val();
    if (email) {
        subscribe("newsletter/subscribe", email);
    }
    return false;
});

var subscribe = function (url, email) {

    var ip = 'n/a';
    var country = 'n/a';
    var region = 'n/a';

    var all = ip + '|' + country + '|' + region;

    var obj = { Email: email, Ip: all };
    var options = {
        url: "/" + url,
        type: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json",
        dataType: "html",
        success: done,
        error: done
    };
    $.ajax(options);
}

var done = function (data) {
    $('#frmNewsletter').slideUp();
    $('#ttlNewsletter').slideDown();
}