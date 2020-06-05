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
        </div>
        <ul class="cursos-lista">
          <li v-for="curso in DadosApi.cursos" :key="curso.id">
            <h2>
              <router-link
                :to="{name: 'curso', params:{curso: curso.id}}"
              >{{curso.nome}}- {{curso.totalAulas}} aulas | {{curso.horas}}</router-link>
            </h2>
            <p>{{curso.descricao}}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import fecthData from "@/Mixicin/data.js";
export default {
  name: "Cursos",
  mixins: [fecthData],
  created() {
    this.fecthData("/cursos");
  }
};
</script>
<style>
.cursos-lista {
  margin-bottom: 20px;
}
</style>