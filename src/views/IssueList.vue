<template>
  <div>
    <h1>Issueリスト</h1>
    <!-- <el-button type="success" @click="getIssues()">issue取得</el-button> -->
    <el-row :gutter="12">
      <el-col :span="12"  v-for="( issue, index ) in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0">
          <div class="clearfix">
            <el-button style="float: right; margin-top: -5px" @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
          </div>
          <div>{{ issue.title }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import useIssues from '@/composables/useIssues'

// const HTTP = axios.create({
//   baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
//   headers: {
//     // 'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
//     'Accept': 'application/vnd.github.v3+json',
//     'Content-Type':'application/json',
//   },
// })

export default {
  name: 'IssueList',
  // data () {
  //   return {
  //     issues: []
  //   }
  // },
  created() {
    this.getIssues()
  },
  setup() {
    // const { issues, getIssues, closeIssue } = useIssues()
    const issues = useIssues().issues;
    
    const getIssues = useIssues().getIssues;
   
    const closeIssue = useIssues().closeIssue;
    return {
      issues,
      getIssues,
      closeIssue
    }
  },
}
</script>
