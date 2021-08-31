<template>
  <v-app>
    <v-app-bar color="blue lighten-2" dense dark app>
      <v-toolbar-title>My Books ～読んだ本リスト～</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon text to="/"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn icon text to="/search"><v-icon>mdi-magnify</v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <!-- ルーティングの表示領域を準備 -->
      <router-view />
    </v-main>
    <v-footer color="blue lighten-2" dark app>
      ©2021 usuge-engineer
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0 auto;
}

</style>

