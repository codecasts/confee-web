<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    doLogin () {
      const user = this.user
      this.attemptLogin({...user})
        .then(() => {
          this.$router.push('/')
        })
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  }
}
</script>

<template>
<div class="row">
  <div class="col-md-6">
    <div class="form-group">
      <label>E-mail</label>
      <input type="email" v-model="user.email" class="form-control">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" v-model="user.password" class="form-control">
    </div>

    <button type="submit" @click="doLogin " class="btn btn-default" :disabled="!isValid">Submit</button>
  </div>
</div>
</template>
