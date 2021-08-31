<template>
  <v-card class="ma-2" elevation="6" :class="{ linkable }" @click="onclick">
    <v-list-item two-line>
      <v-list-item-avatar  tile left size="100"><img :src="book.image" /></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ book.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ book.memo }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { UPDATE_CURRENT } from '@/mutation_types'

export default {
  name: 'review-info',
  props: {
    index: { type: Number },
    linkable: { type: Boolean, default: false },
    book: { type: Object }
  },
  methods: {
    // UPDATE_CURRENTアクションを同盟のメソッドに紐づけ
    ...mapActions([UPDATE_CURRENT]),
    // クリック時に現在の書籍情報をステートに保存andフォームに移動
    onclick() {
      if (this.linkable) {
        this[UPDATE_CURRENT](this.book)
        this.$router.push('/form')
      }
    }
  }
}
</script>

<style scoped>
.linkable:hover {
    cursor: pointer;
    background-color: #f7eb67;
}

.image {
  float:left;
}

.image img {
  height: 180px;
}

.details {
  float: left;
}

.details li {
  list-style-type: none;
  text-align: left;
}

.clearfix {
  width: 100%;
  margin-bottom: 10px;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>
