import Vue from "vue";
import EzInlineEdit from "./EzInlineEdit.vue";
const Components = {
  EzInlineEdit
};
Object.keys(Components).forEach( name => {
  Vue.component(name, Components[name]);
});