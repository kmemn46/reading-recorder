<template>
  <div class="clearfix" :class="{ linkable }" @click="onclick">
    <div class="image"><img :src="book.image" /></div>
    <div class="details">
      <ul>
        <li v-if="index">{{ index }}.</li>
        <li>{{ book.title }} ({{ book.price }}円)</li>
        <li>{{ book.author }}</li>
        <li>{{ book.publisher }}</li>
        <li>{{ book.published }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { UPDATE_CURRENT } from '@/mutation_types'

export default {
  name: 'book-info',
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
