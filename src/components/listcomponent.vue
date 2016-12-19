<template>

  <div id="listcomponent">
      <!-- <table style='width:60%;border:1px solid #eaeaea' border=1 cellspacing=0 cellpadding=0>
           <tbody>
                <tr><th v-for='head in list_head'>{{head}}</th></tr>
                <tr v-for='mydata in list'>
                <td>{{mydata.username}}</td>
                <td>{{mydata.email}}</td>
                <td>{{mydata.created_at}}</td>
                <td><a href='#'>编辑</a></td>
                </tr>

            </tbody>
       </table>-->
    <!--<el-table :data="list" border style='width:60%' @selection-change="handleSelectionChange">
        <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              inline-template
              label="日期"
              width="120"
              v-for="head in list_head"
              >
              <div>{{ row.created_at }}</div>
            </el-table-column>
            <el-table-column
              prop="username"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              show-overflow-tooltip>
            </el-table-column>

            <el-table-column
                  :context="_self"
                  inline-template
                  label="操作">
                  <div>
                    <el-button
                      size="small"
                      @click="handleEdit($index, row)">
                      编辑
                    </el-button>
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete($index, row)">
                      删除
                    </el-button>
                  </div>
                </el-table-column>

    </el-table> -->

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