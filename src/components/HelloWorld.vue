<template>
  <h1>{{ msg }}</h1>
  <Preloader color="red" scale="0.6" />
</template>

<script>
import Preloader from './Preloader.vue'

export default {
  name: 'HelloWorld',
  components: {
    Preloader,
  },
  props: {
    msg: String
  },
}
</script>
