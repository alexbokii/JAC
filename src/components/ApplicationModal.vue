<template>
  <div v-if="vacancy">
    <b-modal id="apply-modal" :title="vacancy.name" @ok="emitOnSubmit" @hidden="emptyWarning = false">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Please, enter your email address to apply for this position"
          label-for="input-1"
          description="We'll never share your email with anyone else."
          >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Please enter your email"
            ></b-form-input>
        </b-form-group>
      </b-form>
      <b-alert variant="danger" :show="emptyWarning" dismissible>Looks like email field is empty</b-alert>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ApplicationModal",
  data() {
    return {
      email: '',
      emptyWarning: false,
    }
  },
  methods: {
    emitOnSubmit(bvModalEvt) {
      if (!this.email) {
        this.emptyWarning = true;
        bvModalEvt.preventDefault();
      } else {
        this.$emit("onSubmit", {id: this.vacancy.id, email: this.email});
        this.email = "";
      }
    }
  },
  props: {
    vacancy: Object
  }
}
</script>
