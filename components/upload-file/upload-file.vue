<template>
  <!-- begin .upload-file-->
  <div class="upload-file">
    <div class="upload-file__wrapper">
      <div class="upload-file__section">
        <svg-icon name="description" class="upload-file__icon" />
        Upload as document
      </div>
      <div class="upload-file__section">
        <svg-icon name="image" class="upload-file__icon" />
        Upload as image
      </div>
    </div>
  </div>
  <!-- end .upload-file-->
</template>

<style lang="stylus" src="./upload-file.styl" />

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'el-upload-file',
})
export default class UploadFile extends Vue {}
</script>
