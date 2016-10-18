<template>
  <div>
    <header class="page-header row">
      <h2>Confee [Auth]</h2>
    </header>
    <Login />
  </div>
</template>

<script>
import Login from './Forms/Login'

export default {
  name: 'auth',
  components: { Login }
}
</script>
