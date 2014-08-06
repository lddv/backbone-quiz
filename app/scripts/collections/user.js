/*global define*/

define([
    'underscore',
    'backbone',
    'localstorage',
    'models/user'
], function (_, Backbone, LocalStorage, UserModel) {
    'use strict';

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
        localStorage: new Store('backbone-quiz-db')
        // ,
        // url: '/users'
    });

    return UserCollection;
});
