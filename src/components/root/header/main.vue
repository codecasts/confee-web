<script>
import Left from './left'
import Brand from './brand'

export default {
  name: 'confee-header',
  components: { Left, Brand },
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
      </div>
    </div>
</nav>
</template>
