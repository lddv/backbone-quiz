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
        userview: 'views/user',
        questionmodel: 'models/question',
        questioncollection: 'collections/question',
        questionview: 'views/question',
    }
});

require([
    'backbone',
    'usermodel',
    'usercollection',
    'userview',
    'questionmodel',
    'questioncollection',
    'questionview'
], function (Backbone, UserModel, UserCollection, UserView, QuestionModel, QuestionCollection, QuestionView) {
    Backbone.history.start();

    var user = new UserModel();
    // user.fetch();
    // console.log('the first info -- ' + JSON.stringify(user));
    // user.set({name: "leo nardo", email:"leon@rdo.com"});
    // user.save();

    // var col = new UserCollection({title: "My collection has been created!"});
    var col = new UserCollection();
    col.add(user);
    console.log('out with the collection -- ' + JSON.stringify(col));

    var uview = new UserView({model: user});
    uview.render();

    $('#greet').append(uview.el);

    // #####################################################
    
    var questionModel = new QuestionModel();
    questionModel.set({questionNumber: 1, question: "What is the color of the sky?", alternatives: ['blue', 'yellow', 'red', 'green', 'pink'], rightAnswer:'0'});
    // console.log('the first info -- ' + JSON.stringify(questionModel));

    var questioncol = new QuestionCollection();
    questioncol.add(questionModel);

    var qview = new QuestionView({model: questionModel});
    qview.render();
    $('#questions').append(qview.el);
});
