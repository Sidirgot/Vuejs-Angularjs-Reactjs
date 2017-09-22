<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item" href="#">
            Sidirgot
          </a>
        </div>
        <span class="nav-toggle" @click="toggleNav" v-bind:class="{ 'is-active':isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu" @click="toggleNav" v-bind:class="{ 'is-active':isActive }">
          <router-link class="nav-item r-item" to="/">Home</router-link>
          <router-link class="nav-item r-item" to="/">Features</router-link>
          <router-link class="nav-item r-item" to="/">About</router-link>
          <router-link class="nav-item r-item" to="/faq">FAQ</router-link>

          <div class="nav-item" >
            <p class="control">
              <a class="button is-primary is-outlined" href="#">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>


    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>This is a simple design to test Vuejs</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a class="icon" href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',

  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mediaQ'

.nav
  background-color: #383838
  a:hover
    color: red

.nav-left a
  color: #fff
  font-weight: bold

a.r-item
  color: #C1C1C1
  padding: 0.5rem 1.75rem

.nav-toggle span
  background-color: #c1c1c1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px
</style>
