<template>
  <div>
    <h1>query参数---{{ $route.query.keyword }} ======={{ keyword }}</h1>
    <h1>params参数---{{ $route.params.k }} ======={{ k }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword", "k"],
};
</script>

<style></style>
