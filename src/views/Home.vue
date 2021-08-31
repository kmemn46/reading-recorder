<template>
  <div class="list">
    <v-alert outlined type="info" prominent border="left" dense dismissible>
      {{ bookCount }}件の読書情報が記録されています。
    </v-alert>
    <!-- 書籍情報を一覧表示 (キーはid) -->
    <ReviewInfo v-for="(b, i) of books" 
      :linkable="true" :book="b" :index="i + 1" :key="b.id"></ReviewInfo>
    <!-- ページャーを生成 -->
    <div class="text-center" v-if="show">
      <v-pagination circle v-model="page" :length="length" @input="onchange"></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReviewInfo from '@/components/ReviewInfo.vue'
import { PAGE_SIZE } from '../mutation_types'

export default {
  name: 'home',
  // booksは登録済みのレビュー情報 (配列)
  data() {
    return {
      page: 1,
      length: 0,
      show: false,
      books: []
    }
  },
  // ローカルコンポーネントを登録
  components: {
    ReviewInfo
  },
  // ゲッターを算出プロパティに紐づけ
  computed: mapGetters([ 'bookCount', 'getRangeByPage' ]),
  methods: {
    // ページが変更された場合に、現在ページ用のレビューを再セット
    onchange(page) {
      this.books = this.getRangeByPage(page)
    }
  },
  // 初期化(マウント)時に1ページ目のレビュー情報を取得
  mounted() {
    this.books = this.getRangeByPage(1)
    this.length = Math.ceil(this.bookCount / PAGE_SIZE);
    if (this.length > 1) {this.show = true}
  }
}
</script>
