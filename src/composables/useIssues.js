// import { ref, onMounted } from 'vue'
import { ref } from 'vue'
import axios from 'axios';

export default function useIssues() {
  const issues = ref([])
  const client = axios.create({
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
    headers: {
      'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type':'application/json',
    },
  })
  const getIssues = async () => {
    const res = await client.get('/issues')
    debugger
    issues.value = res.data;
  }
  // onMounted(getIssues);
  // function getIssues() {
  //   client.get('issues')
  //     .then((res) => {
  //       issues.value = res.data
  //   })
  // }
  const closeIssue = async (index) => {
    debugger
    const target = issues.value[index]
    return client.patch(`/issues/${target.number}`,
      {
        state: "closed"
      },
      )
      .then(() => {
        issues.value.splice(index, 1);
    })
  }
  
  return {
    issues,
    getIssues,
    closeIssue
  }
}

      
      
      