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
        localstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        usermodel: 'models/user',
        userview: 'views/user'
    }
});

require([
    'backbone',
    'usermodel',
    'userview'
], function (Backbone, UserModel, UserView) {
    Backbone.history.start();

    var user = new UserModel();
    // user.fetch();

    console.log('the first info -- ' + JSON.stringify(user));

    var uview = new UserView({model: user});
    uview.render();

    $('#greet').append(uview.el);
    
});
