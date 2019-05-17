# JAC web

This project is built by using vue-cli tool, BootstrapVue library and Firebase used as  a database.
Set up requires two parts - Vue app set up, and Firebase set up:

## Set up

### Before initialising Firebase set up the project:
```
npm install
```

## Firebase setup

1) Copy env.example into env:
```
cp .env-example .env
```
2) Create a new web project under your Firebase account. Then go to Project Overview/Settings/Web App panel. You will see "Firebase SDK snippet" panel with radio buttons, choose Config and copy this configuration into your .env file

3) Fill out your database with test vacancies by running:
```
npm run seed
```
You can also add more vacancies into dummyVacancies array in seed.js file.

### Compiles and hot-reloads for development
```
npm run serve
```
Vue app will be available at http://localhost:8080.


## Additional commands:

### Lints and fixes files
```
npm run lint
```

After submitting emails, they will be available in FireBase database under "applications".

