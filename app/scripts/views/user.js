/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'usercollection'
], function ($, _, Backbone, JST, UserCollection) {
    'use strict';

    var UserView = Backbone.View.extend({
        template: JST['app/scripts/templates/user.ejs'],

        tagName: 'div',
        id: '',
        className: 'jumbotron',

        events: {
            'click #saveUserButton': 'saveContent'
        },

        initialize: function () {
            this.model.on('change', this.render, this);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        saveContent: function(e){
            console.log('Hey, you clicked saveUserButton! -- ' + new Date());

            var uname = $("input[name$='name']").val();     // console.log("saveContent: "+uname);
            var uemail = $("input[name$='email']").val();   // console.log("saveContent: "+uemail);

            this.model.saveUser(uname, uemail);
        }
    });

    return UserView;
});
