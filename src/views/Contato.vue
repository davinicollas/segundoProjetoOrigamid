<template>
  <div>
    <div v-if="loading">
      <loading />
    </div>
    <transition>
      <div v-if="DadosApi">
        <h1>{{DadosApi.titulo}}</h1>
        <p>{{DadosApi.descricao}}</p>
        <ul>
          <li>
            <b>Email:</b>
            {{DadosApi.contato.email}}
          </li>
          <li>
            <b>Telefone:</b>
            {{DadosApi.contato.telefone}}
          </li>
          <li>
            <b>Endereço:</b>
            {{DadosApi.contato.endereco}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import fecthData from "@/Mixicin/data.js";
export default {
  name: "contato",
  mixins: [fecthData],
  created() {
    this.fecthData("/contato");
  }
};
</script>

<style>
</style>