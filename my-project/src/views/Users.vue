<!-- @format -->

<template>
  <div>
    <h1>Users</h1>
    <div v-for="user of users" :key="user.id">
      <router-link :to="`posts?userId=${user.id}`">
        <div class="user-item">
          {{ user.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { API_URL } from "../config/index";

export default {
  name: "Users",
  components: {},
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`${API_URL}/users`);
      this.users = response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.user-item {
  padding: 10px;
  border: 1px solid #e5e5e5;
  color: #777;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: #777;
}

.user-item:hover {
  cursor: pointer;
  color: #2f2f2f;
  box-shadow: inset -1px 3px 8px 5px #ffffff, 2px 5px 16px 0px #00000057,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
}
</style>
