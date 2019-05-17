<template>
<div id="app">
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#"><img src="./assets/jac-logo.jpg" width="120" height="120" alt="Judicial Appointments Commission"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Before you apply</b-nav-item>
        <b-nav-item href="#">How to apply</b-nav-item>
        <b-nav-item href="#">News</b-nav-item>
        <b-nav-item href="#">About the JAC</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <main>
    <b-container>
      <VacanciesList />
    </b-container>
  </main>
  <footer>
      <b-navbar toggleable="lg" type="light">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Contact</b-nav-item>
            <b-nav-item href="#">Accessing your information</b-nav-item>
            <b-nav-item href="#">FOI request</b-nav-item>
            <b-nav-item href="#">Copyright</b-nav-item>
            <b-nav-item href="#">Cymraeg</b-nav-item>
            <b-nav-item href="#">Sign-up to Judging Your Future newsletter</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </footer>
</div>
</template>

<script>
import VacanciesList from './components/VacanciesList.vue';

export default {
  name: 'app',
  components: {
    VacanciesList
  }
}
</script>
