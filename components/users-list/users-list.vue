<template>
  <!-- begin .users-list-->
  <ul class="users-list">
    <li v-for="user in users" :key="user.i" class="users-list__item">
      <img :src="user.avatar" alt="avatar" class="users-list__avatar" />
      <div class="users-list__info">
        <h3 class="users-list__username">{{ user.name }}</h3>
        <p v-if="user.status" class="users-list__status">{{ user.status }}</p>
      </div>
    </li>
  </ul>
  <!-- end .users-list-->
</template>

<style lang="stylus" src="./users-list.styl" />

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'el-users-list',
})
export default class UsersList extends Vue {
  users = [
    {
      avatar: '/images/user-avatar2.jpg',
      name: 'IntelRug',
      status: 'Играет в Webstorm',
    },
    {
      avatar: '/images/user-avatar.png',
      name: 'TrenLok',
    },
  ];
}
</script>
