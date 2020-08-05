try {
    window.$ = window.jQuery = require('jquery');
    // require('bootstrap');
    require('bootstrap/js/dist/dropdown');
    require('bootstrap/js/dist/collapse');
    require('bootstrap/js/dist/modal');

    $(document).ready(function () {
        $('.collapse').collapse('show');
    });
} catch (e) {
    console.log(e);
}
