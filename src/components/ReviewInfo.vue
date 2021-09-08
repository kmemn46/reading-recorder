<template>
  <v-card class="ma-2" elevation="6" :class="{ linkable }">
    <v-list-item three-line>
      <v-list-item-avatar  tile left size="80"><img :src="book.image" /></v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline mb-4">
          <v-row align="center" class="mx-0">
          <v-rating
            :value= book.rating 
            color="amber"
            dense
            readonly
            size="20"
          ></v-rating>
          <div class="grey--text ms-4">
            {{ book.read}}
          </div>
          </v-row>
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ book.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ book.memo }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <!-- ボタン群 -->
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        color="cyan"
        @click="onclickEdit"
      ><v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        color="primary"
        @click="onclickDel"
      ><v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { UPDATE_CURRENT, DELETE_BOOK } from '@/mutation_types'

export default {
  name: 'review-info',
  props: {
    index: { type: Number },
    linkable: { type: Boolean, default: false },
    book: { type: Object }
  },
  methods: {
    // UPDATE_CURRENTアクションを同盟のメソッドに紐づけ
    ...mapActions([UPDATE_CURRENT, DELETE_BOOK]),
    // 編集クリック時に現在の書籍情報をステートに保存andフォームに移動
    onclickEdit() {
      if (this.linkable) {
        this[UPDATE_CURRENT](this.book)
        this.$router.push('/form')
      }
    },
    onclickDel() {
      this[DELETE_BOOK](this.book)
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>

<style scoped>
.linkable:hover {
    cursor: pointer;
    background-color: #f5ed9b;
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
