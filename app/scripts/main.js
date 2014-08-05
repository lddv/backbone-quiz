/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        usermodel: 'models/user'
    }
});

require([
    'backbone',
    'usermodel'
], function (Backbone, UserModel) {
    Backbone.history.start();

    var user = new UserModel({
        name: 'Leo Dias',
        email: 'lvasconcelos@avenuecode.com'
    });

    console.log(JSON.stringify(user));
});
