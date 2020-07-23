<template>
  <!-- begin .emoji-panel-->
  <vuescroll class="emoji-panel">
    <div class="emoji-panel__group">
      <div v-for="i of 50" :key="i" class="emoji-panel__item">
        <div
          class="emoji-panel__icon"
          :style="{
            backgroundPosition: `-${(i - 1) * 32}px -${Math.floor((i - 1) / 11) * 32}px`,
          }"
        />
      </div>
    </div>
  </vuescroll>
  <!-- end .emoji-panel-->
</template>

<style lang="stylus" src="./emoji-panel.styl" />

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import vuescroll from 'vuescroll';

@Component({
  name: 'el-emoji-panel',
  components: { vuescroll },
})
export default class EmojiPanel extends Vue {}
</script>
