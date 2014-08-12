/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var QuestionModel = Backbone.Model.extend({
        
        initialize: function() {},

        defaults: {
            questionNumber: '', // question 1, 2, 3, ...
            question: '',       // text of question to be asked.
            alternatives: [],   // should contain every alternative for the question.
            rightAnswer: ''     // 'A|B|C|D|E' as index of alternative array corresponding to the correct answer.
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        checkAnswer: function(userAnswer){
            if (userAnswer == rightAnswer) {
                alert("Your answer is correct!");
            } else {
                alert("Wrong! Better luck next time!");
            }
        }
    });

    return QuestionModel;
});
