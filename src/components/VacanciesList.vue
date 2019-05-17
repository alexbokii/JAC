<template>
  <div>
    <img v-if="vacancies.length == 0" alt="" src="https://i.gifer.com/UbTh.gif"/>
    <h1 v-if="vacancies.length != 0" class="text-center">Vacancies</h1>
    <b-alert variant="success" :show="submitted" dismissible>You have successfully submitted your application</b-alert>
    <b-alert variant="danger" :show="error" dismissible>There was an error. Please try again!</b-alert>
    <ul class="vacancies">
      <li v-for="v in vacancies" v-bind:key="v.id">
        <Vacancy @onApply="onApply" :data="v" />
      </li>
    </ul>

    <ApplicationModal :vacancy="applicationVacancy" @onSubmit="onSubmit" />
  </div>
</template>

<script>
import Vacancy from './Vacancy.vue';
import ApplicationModal from './ApplicationModal.vue'
import Store from '../store.js';

export default {
  name: 'VacanciesList',
  data: function() {
    return {
      vacancies: [],
      applicationVacancy: null,
      store: null,
      submitted: false,
      error: false
    }
  },
  components: {
    Vacancy,
    ApplicationModal
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onApply(id) {
      const found = this.vacancies.find(el => el.id === id);
      this.applicationVacancy = found;
    },
    onSubmit(submission) {
      if (!submission.email) {
        /* eslint-disable no-console */
        console.log("can't save application with empty email");
        return;
      }
      
      this.store.saveApplication(submission)
        .then(() => {
          /* eslint-disable no-console */
          console.log("successfully submitted application for vacancy: ", submission.id);
          this.submitted = true;
        })
        .catch(error => {
          /* eslint-disable no-console */
          console.log("error during application submission: ", error);
          this.error = true;
        });
    }
  },
  mounted() {
    this.store = new Store();
    this.store.getVacancies().then(vacancies => {
      this.vacancies = vacancies;
    }).catch(err => {
      // We can use Sentry service to capture errors in our production environment
      /* eslint-disable no-console */
      console.log("error: ", err);
    });
  }
}
</script>

<style>
  ul.vacancies {
    list-style: none;
    margin-top: 2em;
    padding: 0;
  }
</style>
