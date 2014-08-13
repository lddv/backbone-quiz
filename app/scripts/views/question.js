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
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        markAlternative: function(ev) {
            // retrieve the element clicked and assign the index to the view var.

            this.electiveAnswer = $(ev.currentTarget).attr('class').slice(18,19);
            // this.electiveAnswer = $(ev.currentTarget).text();
            console.log(this.electiveAnswer);
            $(ev.currentTarget).css('background-color', 'grey');
        },

        saveAnswer: function(){
            if (this.electiveAnswer == this.model.get('rightAnswer')) {
                console.log('Congrats! Correct Answer!');
                alert('Congrats! Correct Answer!');
            } else {
                console.log('Sorry! Wrong Answer!');
                alert('Sorry! Wrong Answer!');
            }
        }
    });

    return QuestionView;
});
