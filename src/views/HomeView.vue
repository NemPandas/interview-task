<template>
  <div class="home">
    <validator />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import validator from "@/components/validatorSite.vue"; // @ is an alias to /src

@Options({
  components: {
    validator,
  },
})
export default class HomeView extends Vue {}
</script>
