<template>
{{nav_list}}
    <!--<a class='tab-item external' v-link="{path:path, activeClass: 'active', replace:true}"> -->
    <nav class="bar bar-tab">
    <span v-for="(data,index) in nav_list" style='width:20%;float:left' @click="setActive(index)">
        <router-link :to="data.path" class='tab-item external' :class="{active:iscur==index}" >
            <span class="icon" v-bind:class="data.icon"></span>
            <span class="tab-label" v-text="data.label"></span>
        </router-link>

    </span>
    </nav>

    <!--</a> -->
</template>

<script>
export default {
     data() {
        return {
            iscur:0,
        }
      },
    props : ['nav_list'],
    computed : {
        iconClass() {
            return "icon-"+this.icon
        }
    },
    methods : {
        setActive(index){
            this.iscur = index
        }
    }
}

</script>