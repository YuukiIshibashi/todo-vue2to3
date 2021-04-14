<template>
  <div>
    <h1>Todoリスト</h1>
    <!-- <form> -->
      <!-- <input placeholder="todo" v-model="todo"> -->
      <InputForm 
        v-model:todoTitle="title"
        v-model:todoContent="content"
        @add="addTodo" />
    <!-- </form>  -->
    <el-row :gutter="12">
      <TodoItem v-for="( todo, index ) in todos" :key="index" 
          @handleClick="removeTodo()" 
          :todo="todo" 
          :index="index" />
      <TodoItem v-for="( issue, index ) in issues" :key="issue.id" 
          @handleClick="closeIssue()"
          :todo="issue.title"
          :index="index" />
    </el-row>
  </div>
  <teleport to="#modal_area">
    <div>モーダルですぞ</div>
  </teleport>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import InputForm from '@/components/InputForm.vue';
import useIssues from '@/composables/useIssues'

export default {
  name: 'TodosIssues',
  components: {
    TodoItem,
    InputForm
  },
  setup() {
    const { issues, closeIssue } = useIssues()
    return {
      issues,
      closeIssue
    }
  },
  data () {
    return {
      title: '',
      content: '',
      todos: [],
    }
  },

  methods: {
    addTodo(){
      const todo = {
        title: this.title,
        content: this.content
      }
      this.todos.push(todo);
      this.title= '';
      this.content= '';
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    },
  }
}
</script>
