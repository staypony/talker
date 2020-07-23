<template>
  <!-- begin .message-->
  <div class="message">
    <img src="~/assets/images/user-avatar2.jpg" alt="User Avatar" class="message__avatar" />
    <div class="message__content">
      <div class="message__header">
        <router-link to="/" class="message__author-name link_no_styles">{{ username }}</router-link>
        <time class="message__timestamp">{{ timestamp }}</time>
      </div>
      <div class="message__body">
        <span class="message__text">{{ message }}</span>
      </div>
    </div>
  </div>
  <!-- end .message-->
</template>

<style lang="stylus" src="./message.styl" />

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'el-message',
})
export default class Message extends Vue {
  @Prop({ type: String }) message!: string;
  @Prop({ type: String }) username!: string;
  @Prop({ type: String }) timestamp!: string;
}
</script>
