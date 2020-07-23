<template>
  <!-- begin .footer-->
  <div class="footer">
    <div v-show="emojisPanelActive" ref="emojiPanel" class="footer__emoji-panel">
      <el-emoji-panel />
    </div>
    <div v-show="attachPanelActive" ref="attachPanel" class="footer__attach-panel">
      <el-attach-panel />
    </div>
    <div class="footer__input-field">
      <div class="footer__actions-left">
        <div
          ref="emoji"
          class="footer__actions-button footer__emoji-button"
          :class="{ 'footer__actions-button_type_active': emojisPanelActive }"
          @mouseover="changeEmoji"
          @click="toggleEmojisPanel()"
        />
        <svg-icon
          ref="attach"
          name="attach_file"
          class="footer__actions-button footer__attach-button"
          :class="{ 'footer__actions-button_type_active': attachPanelActive }"
          @click="toggleAttachPanel()"
        />
      </div>
      <input type="text" class="footer__input" placeholder="Введите сообщение" />
    </div>
    <div class="footer__actions-right">
      <svg-icon name="paper_plane" class="footer__actions-button footer__send-button" />
    </div>
  </div>
  <!-- end .footer-->
</template>

<style lang="stylus" src="./footer.styl" />

<script lang="ts">
import { Component, Mutation, Ref, State, Vue } from 'nuxt-property-decorator';
import { MutationMethod } from 'vuex';
import { getRandomIntInRange } from '~/tools/util';
import ElEmojiPanel from '~/components/emoji-panel/emoji-panel.vue';
import ElAttachPanel from '~/components/attach-panel/attach-panel.vue';

@Component({
  name: 'el-footer',
  components: { ElAttachPanel, ElEmojiPanel },
})
export default class Footer extends Vue {
  @Ref() emoji!: HTMLDivElement;
  @Ref() emojiPanel!: HTMLDivElement;
  @State emojisPanelActive!: boolean;
  @Ref() attach!: HTMLDivElement;
  @Ref() attachPanel!: HTMLDivElement;
  @State attachPanelActive!: boolean;
  @Mutation toggleEmojisPanel!: MutationMethod;
  @Mutation setEmojisPanelActive!: MutationMethod;
  @Mutation toggleAttachPanel!: MutationMethod;
  @Mutation setAttachPanelActive!: MutationMethod;

  changeEmoji() {
    const options = {
      rows: 5,
      cols: 11,
      count: 50,
      size: 28,
    };

    const emojiIndex: number = getRandomIntInRange(1, options.count);
    const y: number = Math.floor((emojiIndex - 1) / options.cols) + 1;
    const x: number = emojiIndex - options.cols * (y - 1);
    this.emoji.style.backgroundPosition = `-${(x - 1) * options.size}px -${(y - 1) * options.size}px`;
  }

  mounted() {
    document.body.addEventListener('click', (event: MouseEvent) => {
      if (!this.emoji.contains(event.target as Node) && !this.emojiPanel.contains(event.target as Node))
        this.setEmojisPanelActive(false);
      if (!this.attach.contains(event.target as Node) && !this.attachPanel.contains(event.target as Node))
        this.setAttachPanelActive(false);
    });
  }
}
</script>
