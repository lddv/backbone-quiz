/*global define*/

define([
    'underscore',
    'backbone',
    'localstorage',
    'usermodel'
], function (_, Backbone, LocalStorage, UserModel) {
    'use strict';

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
        localStorage: new Store("quiz-user-db")
    });

    return UserCollection;
});
