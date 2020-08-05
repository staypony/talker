<template>
  <!-- begin .aside-panel-->
  <div class="aside-panel" :class="{ 'aside-panel_type_open': openMenu }">
    <div class="aside-panel__open-button" @click="openMenu = !openMenu">
      <svg-icon name="apps" class="aside-panel__open-icon" />
    </div>
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
export default class AsidePanel extends Vue {
  openMenu: boolean = false;
}
</script>
