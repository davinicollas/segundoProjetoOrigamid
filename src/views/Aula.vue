<template>
  <div>
    <div v-if="loading">
      <loading />
    </div>
    <transition>
      <div v-if="DadosApi">
        <h1>{{DadosApi.nome}}</h1>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${DadosApi.youtube}`"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import fecthData from "@/Mixicin/data.js";
export default {
  name: "aula",
  props: ["aula"],
  mixins: [fecthData],
  created() {
    this.fecthData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fecthData(`/aula/${to.params.aula}`);
    next();
  }
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>