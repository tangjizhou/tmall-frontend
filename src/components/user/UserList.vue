<template>
  <div>
    <div>
      <el-form :inline="true" :model="searchItem" class="search-form-inline">
        <el-form-item label="账号">
          <el-input v-model="searchItem.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="searchItem.realName" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchItem.userState" placeholder="请选择" value="请选择" clearable filterable
                     @change="onUserStateChange">
            <el-option v-for="item in userStates" :key="item.value" :label="item.description" :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search"><span class="el-icon-search"></span>查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="username" label="账号" width="160"></el-table-column>
      <el-table-column prop="realName" label="真实姓名" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="state.description" label="状态" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
                searchItem: {
                    username: '',
                    realName: '',
                    userState: ''
                },
                userStates: [],
                tableData: [],
                multipleSelection: []
            }
        },
        created() {
            this.initUserStates();
            this.search();
        },
        methods: {
            handleSelectionChange(selectedRows) {
                this.multipleSelection = selectedRows;
            },
            search() {
                this.$http.get("/tmall/user/listAll", {params: this.searchItem}
                ).then((reponse) => {
                    let data = reponse.data;
                    if (this.Status.OK === data.code) {
                        this.tableData = data.result;
                    } else {
                        this.$message({message: data.message, type: 'error', showClose: true});
                    }
                });
            },
            initUserStates() {
                this.$http.get("/tmall/user/listUserSates").then((reponse) => {
                    let data = reponse.data;
                    if (this.Status.OK === data.code) {
                        this.userStates = data.result;
                    } else {
                        this.$message({message: data.message, type: 'error', showClose: true});
                    }
                });
            },
            onUserStateChange() {
                this.search();
            }
        }
    }
</script>


<style scoped>
  .search-form-inline {
    float: left;
  }
</style>
