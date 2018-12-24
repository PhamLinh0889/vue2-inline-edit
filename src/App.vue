<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <EzInlineEdit :inputData="editorValue" @inlineUpdateVale="updateEditValue"/>
    </div>
</template>

<script>
  import EzInlineEdit from './components/EzInlineEdit.vue'

  export default {
    name: 'app',
    components: {
      EzInlineEdit
    },
    data() {
      return {
        editorValue: "LinhPV"
      }
    },
    methods: {
      updateEditValue(newValue) {
        this.editorValue = newValue;
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
