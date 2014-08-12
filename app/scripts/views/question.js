/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'questioncollection'
], function ($, _, Backbone, JST, QuestionCollection) {
    'use strict';

    var QuestionView = Backbone.View.extend({
        template: JST['app/scripts/templates/question.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        electiveAnswer: '',

        events: {
            'click .alternative': 'markAlternative',
            'click .next': 'saveAnswer',
            'click .finish': 'showStats'
        },

        initialize: function () {
            // this.listenTo(this.model, 'change', this.render);
            this.model.on('change', this.render, this);
        },

        render: function () {
            // _.each(this.model.alternatives, function(item, key){
            //     $('ol').append('<li class="alternative"><%= item %></li>');
            // });
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        markAlternative: function () {
            // retrieve the element clicked and assign the text to the view var.
            // this.electiveAnswer = $('.alternative').text();
        }
    });

    return QuestionView;
});
