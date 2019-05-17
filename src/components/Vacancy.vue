<template>
<div class="vacancy">
  <b-card
    tag="article"
    class="mb-2">
    <h2>{{data.name}}</h2>
    <span class="additional-info">Opens on {{new Date(data.openDate.seconds * 1000).toLocaleString()}}</span>
    <b-card-text>
      <p v-for="p in data.description" v-bind:key="p.id">
        {{ p }}
      </p>
    </b-card-text>
    <b-button v-b-modal.apply-modal variant="primary" @click="emitOnApply(data.id)">Apply for {{data.name}} position</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'Vacancy',
  methods: {
    emitOnApply(id) {
      this.$emit("onApply", id);
    }
  },
  props: {
    data: Object
  }
}
</script>

<style>
  li .vacancy {
    margin-top: 1.5em;
  }

  .additional-info {
    font-size: 1.15em;
    display: inline-block;
    margin-bottom: 1em;
    background-color: #d1ecf1;
    border-color: #bee5eb;
    padding: 0.25em;
  }
</style>
