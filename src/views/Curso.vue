<template>
  <div>
    <div v-if="loading">
      <loading />
    </div>
    <transition>
      <div v-if="DadosApi" class="conteudo">
        <div>
          <h1>{{DadosApi.titulo}}</h1>
          <p>{{DadosApi.descricao}}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in DadosApi.aulas" :key="aula.id">
              <router-link :to="{name: 'aula', params: {aula: aula.id}}">{{aula.nome}}</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>
<script>
import fecthData from "@/Mixicin/data.js";
export default {
  name: "curso",
  props: ["curso"],
  mixins: [fecthData],
  created() {
    this.fecthData(`/curso/${this.curso}`);
  }
};
</script>
<style scoped>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
.aulas li a.router-link-active {
  background: #4b8;
  color: white;
}
</style>