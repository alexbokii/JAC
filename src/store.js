import * as firebase from 'firebase/app';
import 'firebase/firestore';

class Store {
  constructor() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: process.env.VUE_APP_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_DATABASE_URL,
      projectId: process.env.VUE_APP_PROJECT_ID,
      storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_MESSAGING_SENDERID,
      appId: process.env.VUE_APP_APP_ID
    };

    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
  }

  getVacancies() {
    const today = new Date();

    // this potentially has a problem with timezones
    return this.db.collection("vacancies").where("closeDate", ">", today).get().then(qs => {
      let results = [];

      qs.forEach(d => {
        results.push({id: d.id, ...d.data()});
      });

      return results;
    });
  }

  saveApplication(application) {
    const payload = {
      email: application.email,
      vacancyId: application.id,
      applicationDate: new Date()
    };

    return this.db.collection("applications").add(payload);
  }
}

export default Store;
