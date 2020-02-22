<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/contact">contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

nav ul li {
  float: left;
}

nav ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav ul li a:hover {
  background-color: #484848;
}

nav ul li a.router-link-exact-active {
  background-color: #4CAF50;
}
</style>
