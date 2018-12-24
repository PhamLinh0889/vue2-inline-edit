# vue-inline-edit


### Import Component 
```
   <template>
   <EzInlineEdit :inputData="props.item.username"
                 inputClass="input-inline"
                 @inlineUpdateVale="inlineUpdateVale(valueToEdit)"/>
   </template>
   <script>
      import Components from '@phamlinh0208/vue2-ez-common'
    
      export default {
        components: {
          ...Components
        },
        data() {
            valueToEdit: ''
        }
      }
  </script>
```
 

### Component props

```
      inputData: {default: ''},
      inputClass: {default: ''},
      inputStyleOption: {default: null},
      displayClass: {default: ''},
      displayStyle: {default: 'border-bottom: dotted 1px;'}
```
### Component event when value changed
```
method : inlineUpdateVale
    - payload : value after change
```