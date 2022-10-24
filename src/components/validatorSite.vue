<template>
  <div class="main">
    <div
      class="container-fluid d-flex justify-content-center align-items-center bg-primary"
    >
      <div
        class="card d-flex justify-content-center align-items-center"
        style="width: 80%; height: 80%"
      >
        <div
          class="container w-75 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="text-left">Validátor</h1>
          <h3 class="mb-1">Számokat, plusz és kötőjelet tartalmazhat!</h3>
          <p class="mb-3">
            A függvény "true" tér vissza, hogyha páros és "false", hogyha
            páratlan.
          </p>
          <ValidatorForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ValidatorForm from "./validatorForm.vue";

export default defineComponent({
  name: "validatorSite",
  components: { ValidatorForm },
});
</script>

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
}
.card {
  box-shadow: 13px 18px 0px -3px rgba(0, 0, 0, 0.1);
}
</style>
