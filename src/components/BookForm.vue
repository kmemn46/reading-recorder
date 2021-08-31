<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- 選択中の書籍を表示 -->
    <br />
    <BookInfo :book="book"></BookInfo>
    <hr />
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
          class="mx-2"
          label="感想"
          rows="5"
          v-model="form.memo"
          :rules="memoRules"
          required
        ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn color="primary" @click="onsubmit">登録</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BookInfo from '@/components/BookInfo.vue'
import { UPDATE_CURRENT, UPDATE_BOOK } from '@/mutation_types'

export default {
  name: 'book-form',
  // ローカルコンポーネントを登録
  components: {
    BookInfo
  },
  data() {
    return {
      valid: true,
      book: {}, //選択中の書籍
      form: {
        read: new Date(), // 読了日
        memo: ''          // 感想
      },
      memoRules: [
        v => !!v || '感想は必須入力です。',
      ],
      // rules: {
      //   memo: [
      //     {required: true, message: 'メモが未入力です。', trigger: 'change' }
      //   ]
      // }
    }
  },
  computed: mapGetters(['current', 'getBookById']),
  // ページロード時の処理
  created() {
    // 選択中の書籍がない場合はトップページにリダイレクト
    if (!this.current) {
      this.$router.push('/')
    }
    // 選択中の書籍をbookプロパティに詰め替え
    this.book = Object.assign({}, this.current)
  },
  // マウント(初期化)時の処理
  mounted() {
    // 選択中の書籍でストア内の情報を検索
    let b = this.getBookById(this.book.id)
    // 既にレビューが存在する場合はその内容をフォームに反映
    if (b) {
      this.form.read = b.read
      this.form.memo = b.memo
    }
  },
  methods: {
    // アクションとメソッドを紐づけ
    ...mapActions([UPDATE_CURRENT, UPDATE_BOOK]),
    // [登録]ボタンでデータを登録
    onsubmit() {
      // 入力値の検証を実行
      if (this.$refs.form.validate()) {
        // 検証に成功したらストアにも反映
        this[UPDATE_BOOK](
          Object.assign({}, this.book, this.form)
        )
        // 選択中の書籍をクリア
        this[UPDATE_CURRENT](null)
        // 処理成功の通知メッセージを表示
        
        // フォームの内容をクリア
        this.form.read = new Date()
        this.form.memo= ''
        // トップページにリダイレクト
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
#form {
  margin-top: 15px;
}
</style>
