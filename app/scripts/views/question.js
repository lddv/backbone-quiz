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

        electiveIndex: '',

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
            $('.alternative').removeAttr('style');
            this.electiveIndex = $(ev.currentTarget).attr('class').slice(18,19); // gets index from class;
            console.log(this.electiveIndex);
            $(ev.currentTarget).css('background-color', '#ccc');
            $('.next').removeAttr('disabled');
        },

        saveAnswer: function(){
            $('.next').prop('disabled', true);

            var correctIndex = this.model.get('rightAnswer');
            this.model.checkAnswer(this.electiveIndex, correctIndex);

            // var correctAnswer = this.model.get('alternatives')[correctIndex];

            // if (this.electiveIndex == correctIndex) {
            //     alert('Congrats! Correct Answer!');
            // } else {
            //     alert('Sorry! Wrong Answer! The correct answer is '+correctAnswer+'.');
            // }

            // then, comes the next question to the view...
        }
    });

    return QuestionView;
});
