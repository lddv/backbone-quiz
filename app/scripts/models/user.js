/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        urlRoot: '/users',

        initialize: function() {
        },

        defaults: {
            id: 1,
            name: 'Default Name',
            email: 'name@domain.com',
            answered: [0,0,0,0,0],
            completed: false
        },

        validate: function(attrs, options) {
            // name must have at least 2 words.
            if (!attrs.name.trim().contains(' ')) {
                return console.log("Your name (" + attrs.name + ") is not in an acceptable format! It must have at least 2 words.");
            } else {
                return console.log("Your name (" + attrs.name + ") is OK! Validated!");
            }
            // email must have @ and a dot after: "lddv@ac.com".
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return UserModel;
});
