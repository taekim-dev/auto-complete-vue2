<template>
  <div>
    <h1>Integration Test Component</h1>
    <ul>
      <li v-for="result in results" :key="result">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IntegrationTestComponent",
  data() {
    return {
      results: [],
      cache: {},
    };
  },
  methods: {
    fetchData(query) {
      if (this.cache[query]) {
        // Use cached data
        this.results = this.cache[query];
        return Promise.resolve(this.results);
      } else {
        // Fetch new data
        return axios
          .get(`https://api.duckduckgo.com/?q=${query}&format=json`)
          .then((response) => {
            this.results = response.data.results;
            this.cache[query] = this.results;
            return this.results;
          })
          .catch((error) => {
            console.error("API Error:", error);
          });
      }
    },
    setLocalStorage(key, value) {
      localStorage.setItem(key, value);
    },
    getLocalStorage(key) {
      return localStorage.getItem(key);
    },
  },
  mounted() {
    this.setLocalStorage("test-key", "test-value");
    console.log(this.getLocalStorage("test-key"));
    this.fetchData("test-query");
  },
};
</script>
