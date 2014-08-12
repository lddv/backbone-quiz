/*global define*/

define([
    'underscore',
    'backbone',
    'localstorage',
    'questionmodel'
], function (_, Backbone, LocalStorage, QuestionModel) {
    'use strict';

    var QuestionCollection = Backbone.Collection.extend({
        model: QuestionModel,
        localStorage: new Store("quiz-question-db")
    });

    return QuestionCollection;
});
