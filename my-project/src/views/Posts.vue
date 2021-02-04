<!-- @format -->

<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post of posts" :key="post.id" class="post-item">
      {{ post.body }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { API_URL } from "../config/index";

export default {
  name: "Posts",
  components: {},
  data() {
    return {
      posts: [],
      userId: null
    };
  },
  async created() {
    const userId = this.$route.query.userId;
    try {
      const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
      this.posts = response.data;
    } catch (e) {
      console.error(e);
    }
  },
  
};
</script>

<style scoped>
  .post-item {
    padding: 10px;
    border: 1px solid #e5e5e5;
    color: #777;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 10px;
  }

</style>
