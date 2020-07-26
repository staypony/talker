<template>
  <!-- begin .aside-panel-->
  <div class="aside-panel">
    <vuescroll>
      <section class="aside-panel__section">
        <h2 class="aside-panel__section-title">В сети – 10</h2>
        <div class="aside-panel__section-body">
          <el-users-list />
        </div>
      </section>
      <section class="aside-panel__section">
        <h2 class="aside-panel__section-title">Не сети – 10</h2>
        <div class="aside-panel__section-body">
          <el-users-list />
        </div>
      </section>
    </vuescroll>
  </div>
  <!-- end .aside-panel-->
</template>

<style lang="stylus" src="./aside-panel.styl" />

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import vuescroll from 'vuescroll';
import ElUsersList from '~/components/users-list/users-list.vue';

@Component({
  name: 'el-aside-panel',
  components: { ElUsersList, vuescroll },
})
export default class AsidePanel extends Vue {}
</script>
