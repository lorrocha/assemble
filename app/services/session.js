import DS from 'ember-data';
import Session from "ember-simple-auth/services/session";

export default Session.extend({
  store: Ember.inject.service(),

  loadCurrentUser() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (this.get('isAuthenticated')) {
        return this.get('store').findRecord('user', 'me').then((user) => {
          this.set('currentUser', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
