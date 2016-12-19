<template>
    <div>
        <table>
            <tr><th>用户名</th><th>邮箱</th><th>创建时间</th></tr>

            <tr v-for='l in list'>
                <td>{{l.username}}</td>
                <td>{{l.email}}</td>
                <td>{{l.created_at}}</td>
            </tr>
        </table>
    </div>
</template>
<style>

</style>
<script>
import { mapGetters } from 'vuex'
    export default{
       created: function () {
           this.$store.dispatch('getList')
       },
       computed: {
            ...mapGetters({
              list: 'list_dat',
            })
       }
    }
</script>
