/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var QuestionModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            questionNumber: '', // question 1, 2, 3, ...
            question: '',       // text of question to be asked.
            alternatives: [],   // should contain every alternative for the question.
            rightAnswer: []     // 'A|B|C|D|E' as index of alternative array corresponding to the correct answer.
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return QuestionModel;
});
