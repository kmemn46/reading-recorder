<template>
  <div id="search">
    <!-- 検索フォームを定義 -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="keyword"
              label="Search Words"
              type="text"
              :rules="searchRules"
              required>
            <template v-slot:append-outer>
              <v-btn color="primary" @click="onclick">検索</v-btn>
            </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <!-- オーバーレイを定義 -->
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <hr />
    <!-- マッチした書籍情報をリスト表示 -->
    <BookInfo v-for="(b, i) of books" 
      :linkable="true" :book="b" :index="i + 1" :key="b.isbn"></BookInfo>
  </div>
</template>

<script>
import BookInfo from '@/components/BookInfo.vue'

export default {
  name: 'book-search',
  // ローカルコンポーネントを登録
  components: {
    BookInfo
  },
  data() {
    return {
      valid: false,
      overlay: false,
      keyword: 'vue.js', // 検索キーワード
      books: [],         // 検索結果
      searchRules: [
        v => !!v || 'Search Wordは必須入力です。',
      ]
    }
  },
  methods: {
    // [検索]ボタンで書籍情報を検索
    onclick: function() {
      if (this.$refs.form.validate()) {
        // loader
        this.overlay = true;
        this.$http('https://www.googleapis.com/books/v1/volumes?q='
        + this.keyword)
        // 応答データをJSONデータとして取得
        .then((response) => {
          return response.json()
        })
        // JSON文字列の内容をbooksプロパティ(配列)に詰め替え
        .then((data) => {
          this.books = []
          for (let b of data.items) {
            let authors = b.volumeInfo.authors
            let price = b.saleInfo.listPrice
            let img = b.volumeInfo.imageLinks
            this.books.push({
              id: b.id,  // id値
              title: b.volumeInfo.title, // 書名
              author: authors ? authors.join(',') : '',   //著者
              price: price ? price.amount : '-', // 価格
              publisher: b.volumeInfo.publisher, // 出版社
              published: b.volumeInfo.publishedDate, // 刊行日
              image: img ? img.smallThumbnail : '',  // 表紙画像
            })
          }
          this.overlay = false;
        })
      }
    }
  }
}
</script>

<style scoped>
#search form {
  margin-top: 15px;
}
</style>