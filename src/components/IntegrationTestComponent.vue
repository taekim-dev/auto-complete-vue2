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
    };
  },
  methods: {
    fetchData() {
      return axios
        .get("https://api.duckduckgo.com/?q=test&format=json")
        .then((response) => {
          this.results = response.data.results;
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    },
    setCache(key, value) {
      localStorage.setItem(key, value);
    },
    getCache(key) {
      return localStorage.getItem(key);
    },
  },
  mounted() {
    this.setCache("test-key", "test-value");
    console.log(this.getCache("test-key"));
    this.fetchData();
  },
};
</script>
