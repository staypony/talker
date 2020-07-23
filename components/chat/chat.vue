<template>
  <!-- begin .chat-->
  <div class="chat">
    <el-upload-file />
    <div class="chat__messages">
      <el-message />
    </div>
  </div>
  <!-- end .chat-->
</template>

<style lang="stylus" src="./chat.styl" />

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ElUploadFile from '~/components/upload-file/upload-file.vue';
import ElMessage from '~/components/message/message.vue';

@Component({
  name: 'el-chat',
  components: { ElMessage, ElUploadFile },
})
export default class Chat extends Vue {}
</script>
