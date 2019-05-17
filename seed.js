const firebase = require('firebase/app');
/* eslint-disable no-unused-vars */
const firestore = require('firebase/firestore');
const moment = require('moment');
require('dotenv').config();

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
const db = firebase.firestore();

const dummyVacancies = [
  {
    name: "District Judge",
    description: [
      "The Welsh Language Tribunal is an independent tribunal that deals with appeals against the Welsh Language Commissioner’s decisions in relation to Welsh Language Standards.",
      "The Tribunal Member will preside over hearings, chair the panel’s discussion of its decision and advise the panel on any issues of law.",
      "The Tribunal administration is located in South East Wales.  Candidates must be available to work throughout Wales and be able to stay overnight where necessary. Although there will be no guarantee of a minimum number of working days, the post holder will usually be required to be available for the equivalent of approximately 5 days per year."
    ],
    openDate: moment().add(30, "d").toDate(),
    closeDate: moment().add(60, "d").toDate()
  },
  {
    name: "Tribunal Member",
    description: [
      "The WPAFCC hears appeals against decisions from the Secretary of State for Defence in relation to War Pensions and Armed Forces Compensation Schemes. The Tribunal is an independent judicial body covering England and Wales (Scotland and Northern Ireland have their own tribunals).",
      "The Tribunal has been in existence since the War Pensions Act 1919.",
      "The War Pensions Scheme started in 1918 and continues in respect of injuries that occurred before 5 April 2005. For injuries after 5 April 2005 a new Scheme, the Armed Forces Compensation Scheme applies."
    ],
    openDate: moment().add(60, "d").toDate(),
    closeDate: moment().add(90, "d").toDate()
  },
  {
    name: "Adjudicator",
    description: [
      "The Welsh Language Tribunal is an independent tribunal that deals with appeals against the Welsh Language Commissioner’s decisions in relation to Welsh Language Standards.",
      "The Tribunal Member will preside over hearings, chair the panel’s discussion of its decision and advise the panel on any issues of law.",
      "The Tribunal administration is located in South East Wales.  Candidates must be available to work throughout Wales and be able to stay overnight where necessary. Although there will be no guarantee of a minimum number of working days, the post holder will usually be required to be available for the equivalent of approximately 5 days per year."
    ],
    openDate: moment().add(65, "d").toDate(),
    closeDate: moment().add(95, "d").toDate()
  },
  {
    name: "Adjudicator (closed)",
    description: [
      "The Welsh Language Tribunal is an independent tribunal that deals with appeals against the Welsh Language Commissioner’s decisions in relation to Welsh Language Standards.",
      "The Tribunal Member will preside over hearings, chair the panel’s discussion of its decision and advise the panel on any issues of law.",
      "The Tribunal administration is located in South East Wales.  Candidates must be available to work throughout Wales and be able to stay overnight where necessary. Although there will be no guarantee of a minimum number of working days, the post holder will usually be required to be available for the equivalent of approximately 5 days per year."
    ],
    openDate: moment().subtract(40, "d").toDate(),
    closeDate: moment().subtract(20, "d").toDate()
  }
];

Promise.all(dummyVacancies.map(v => db.collection("vacancies").add(v)))
  .then(() => {
    /* eslint-disable no-console */
    console.log("Dummy vacancies successfully added to DB");
    process.exit();
  })
  .catch(error => {
    /* eslint-disable no-console */
    console.error("Error saving dummy vacancies: ", error);
    process.exit();
  });
