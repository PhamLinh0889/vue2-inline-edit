<template>
    <div>
    <span v-show="!showEdit"
          @dblclick="showEdit = true"
          :class="displayClass"
          :style="displayStyle">{{contentEdit}}</span>

        <input type="text"
               v-model="contentEdit"
               :class="inputClass"
               :style="inputStyleOption"
               v-show="showEdit"
               @blur="saveEdit"> <br>
    </div>
</template>

<script>
  export default {
    name: 'EzInlineEdit',
    props: {
      inputData: {default: ''},
      inputClass: {default: ''},
      inputStyleOption: {default: null},
      displayClass: {default: ''},
      displayStyle: {default: 'border-bottom: dotted 1px;'}
    },
    data() {
      return {
        showEdit: false,
        contentEdit: this.inputData
      }
    },
    methods: {
      saveEdit() {
        this.showEdit = false;
        if (this.inputData !== this.contentEdit) {
          this.$emit('inlineUpdateVale', this.contentEdit);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
