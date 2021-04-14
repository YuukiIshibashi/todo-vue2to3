<template>
  <div>
    <h1>Todoリスト</h1>
    <!-- <form @submit.prevent="addTodo()">
      <el-input placeholder="todo" v-model="todo"></el-input>
    </form> -->

    <InputForm 
      v-model:todoTitle="title"
      v-model:todoContent="content"
      @add="addTodo" />
    <!-- <InputForm 
      :inputTodo="todo"
      @update:inputTodo="todo = $event"/> -->

    <el-row :gutter="12">
      <el-col :span="12" v-for="( todo, index ) in todos" :key="index">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <!-- <el-row :gutter="12">
            <el-col :span="21">
              <p><strong>{{ todo.title }}</strong></p>
              <p>{{ todo.content }}</p>
            </el-col>
            <el-col :span="3">
              <el-button @click="removeTodo(index)" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row> -->
          <el-row :gutter="12">
            <el-col :span="21">{{ todo }}</el-col>
            <el-col :span="3">
              <el-button @click="removeTodo(index)" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue';

export default {
  name: 'TodoList',
  components: {
    InputForm
  },
  data () {
    return {
      title: '',
      content: '',
      // todo: '',
      todos: []
    }
  },
  methods: {
    addTodo(){
      const todo = {
        title: this.title,
        content: this.content
      }
      this.todos.push(todo);
      this.title = '';
      this.content = '';
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>
