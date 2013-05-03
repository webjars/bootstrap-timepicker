/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'bootstrap-timepicker': [ 'webjars!bootstrap.js' ]
    }
});
