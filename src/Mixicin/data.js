export default {
  data() {
    return {
      DadosApi: null,
      loading: true,
    };
  },
  methods: {
    fecthData(url) {
      this.loading = true;
      this.DadosApi = null;
      fetch(`http://localhost:3000${url}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
            this.DadosApi = r;
            this.loading = false;
          }, 1500);
        });
    },
  },
};
