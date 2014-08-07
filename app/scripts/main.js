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
        localstorage: '../bower_components/backbone.localStorage/backbone.localStorage-min',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        usermodel: 'models/user',
        usercollection: 'collections/user',
        userview: 'views/user'
    }
});

require([
    'backbone',
    'usermodel',
    'usercollection',
    'userview'
], function (Backbone, UserModel, UserCollection, UserView) {
    Backbone.history.start();

    var user = new UserModel();
    // user.fetch();
    // console.log('the first info -- ' + JSON.stringify(user));
    user.set({name: "leo nardo", email:"leon@rdo.com"});
    // user.save();

    var col = new UserCollection({title: "My collection has been created!"});
    col.add(user);
    console.log('out with the collection -- ' + JSON.stringify(col));

    var uview = new UserView({model: user});
    uview.render();

    $('#greet').append(uview.el);
    
});
