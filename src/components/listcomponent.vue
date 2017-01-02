<template>

  <div id="listcomponent">
     
  </div>
</template>

<script>
    export default {
        data() {
           return {
                message :'aaaa',
                //my_head : this.list_head
           }
        },
        props : ['list_head','list'],
        computed : {
            my_head : function(){
                //console.log(this.list);
                console.log(this.list)
                return this.list_head
            }
        },
        methods: {
              handleSelectionChange(val) {
                this.multipleSelection = val;
              }
            }
    }
</script>