<!-- eslint-disable prettier/prettier -->
<template>
  <form id="inputForm" @submit.prevent="post" style="width: 60%">
    <div class="form-group mb-4">
      <label for="exampleInputEmail1">Kérem adja meg a számokat!</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="textHelp"
        placeholder="..."
        v-model="input"
      />
    </div>
    <p><span id="final"></span></p>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script lang="ts">/* eslint-disable  */ // @ts-nocheck

import stringValidator from "../ts/validator";
import { defineComponent } from 'vue'

export default defineComponent({
  name: "validatorSite",
  data() {
    return {
      Validator: stringValidator,
      input: "" as string,
    };
  },
  methods: {
    post(): void {
      let Validator = new stringValidator(this.input);
      var final = Validator.validatorScript();
      this.input = "";
      if (final == true || final == false) { 
        document.getElementById("final").innerHTML = final;
      }
    },
  },
});

</script>