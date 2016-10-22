<script>
import Left from './left'
import Brand from './brand'
import Right from './right'

export default {
  name: 'confee-header',
  components: { Left, Brand, Right },
  data () {
    return { isOpen: false }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <Brand @toggle="onToggleMenu" />
      <div class="collapse navbar-collapse" :class="{ in: isOpen }">
        <Left />
        <Right />
      </div>
    </div>
</nav>
</template>
