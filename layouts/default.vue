<template>
  <div class="page__wrapper">
    <div class="page__header" />
    <div class="page__main">
      <nuxt />
    </div>
    <div class="page__footer">
      <el-footer />
    </div>
  </div>
</template>

<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import { Component, Vue } from 'nuxt-property-decorator';
import ElFooter from '~/components/footer/footer.vue';
@Component({
  components: { ElFooter },
})
export default class Default extends Vue {}
</script>
