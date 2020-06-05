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
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliação</h2>
            <ul>
              <li v-for="avaliacao in DadosApi.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt=" Aprenda o html" />
      </div>
    </transition>
  </div>
</template>
<script>
import fecthData from "@/Mixicin/data.js";
export default {
  name: "home",
  mixins: [fecthData],
  created() {
    this.fecthData("/home");
  }
};
</script>
<style  scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
