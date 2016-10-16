<template>
  <header class="page-header row">
    <h2>Confee</h2>
  </header>
</template>

<script>
import http from 'src/http'

export default {
  mounted () {
    http.get('http://pokeapi.co/api/v2/pokemon/1/')
      .then(response => response.data)
      .then(data => {
        console.log(data)
      })
  }
}
</script>
