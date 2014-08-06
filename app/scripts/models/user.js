/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        urlRoot: '/users',

        initialize: function() {},

        defaults: {
            id: 1,
            name: '',       // 'Default Name',
            email: '',      // 'name@domain.com',
            answered: [0,0,0,0,0],
            completed: false
        },

        validate: function(attrs, options) {
            // name must have at least 2 words.
            if (!_.contains($.trim(attrs.name), ' ')) {
                return console.log("Your name ( " + attrs.name + " ) is not in an acceptable format! It must have at least 2 words.");
            } else {
                return console.log("Your name ( " + attrs.name + " ) is OK! Validated!");
            }

            // email must have @ and a dot after: "lddv@ac.com".
            // TODO!
        },

        parse: function(response, options)  {
            return response;
        },

        saveUser: function(uname, uemail){
            // console.log(uname, uemail);
            if (this.get('name') != uname){
                this.set({'name': uname});
            }
            if (this.get('email') != uemail){
                this.set({'email': uemail});
            }

            console.log(JSON.stringify(this));

            this.save();
            // this.save({url: this.urlRoot});
        }
    });

    return UserModel;
});
