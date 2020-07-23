<template>
  <div class="page__chat">
    <el-chat />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ElChat from '~/components/chat/chat.vue';
@Component({
  components: { ElChat },
})
export default class MainPage extends Vue {}
</script>

<style lang="stylus" src="./main.styl"></style>
