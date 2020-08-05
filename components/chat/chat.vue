<template>
  <!-- begin .chat-->
  <div class="chat">
    <el-upload-file />
    <vuescroll>
      <div class="chat__messages">
        <el-message message="Hello, world!" timestamp="Сегодня, в 19:30" username="Username" />
        <el-message
          message="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          timestamp="Сегодня, в 19:30"
          username="Username"
        />
        <div class="message">
          <img src="~/assets/images/user-avatar2.jpg" alt="User Avatar" class="message__avatar" />
          <div class="message__content">
            <div class="message__header">
              <router-link to="/" class="message__author-name link_no_styles">Username</router-link>
              <time class="message__timestamp">Сегодня, в 19:30</time>
            </div>
            <div class="message__body">
              <span class="message__text">
                Lorem ipsum dolor sit amet
                <img src="~assets/emoji/grinning.svg" class="message__emoji" alt="emoji" />
                <img src="~assets/emoji/smile.svg" class="message__emoji" alt="emoji" />
                consectetur adipiscing elit
                <img src="~assets/emoji/sunglasses.svg" class="message__emoji" alt="emoji" />
                sed do eiusmod tempor incididunt ut labore
                <img src="~assets/emoji/sunglasses.svg" class="message__emoji" alt="emoji" />
                asfsf
              </span>
            </div>
          </div>
        </div>
        <el-message
          image="https://via.placeholder.com/300"
          timestamp="Сегодня, в 19:30"
          username="Username"
        />
        <el-message
          image="https://via.placeholder.com/800"
          timestamp="Сегодня, в 19:30"
          username="Username"
        />
      </div>
    </vuescroll>
  </div>
  <!-- end .chat-->
</template>

<style lang="stylus" src="./chat.styl" />

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import vuescroll from 'vuescroll';
import ElUploadFile from '~/components/upload-file/upload-file.vue';
import ElMessage from '~/components/message/message.vue';

@Component({
  name: 'el-chat',
  components: { ElMessage, ElUploadFile, vuescroll },
})
export default class Chat extends Vue {}
</script>
