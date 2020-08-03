try {
    window.$ = window.jQuery = require('jquery');
    // require('bootstrap');
    require('bootstrap/js/dist/dropdown');

    $(document).ready(function () {});
} catch (e) {
    console.log(e);
}
