/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
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
        },

        saveContent: function(e){
            // alert('Hey, you unfocused an input!');
            console.log('Hey, you unfocused an input! -- ' + new Date());

            var uname = $("input[name$='name']").val();     // console.log("saveContent: "+uname);
            var uemail = $("input[name$='email']").val();   // console.log("saveContent: "+uemail);

            this.model.saveUser(uname, uemail);
        }
    });

    return UserView;
});
