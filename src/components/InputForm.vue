<template>
  <form @submit.prevent="$emit('add')">
    <input 
      placeholder="title"
      :value="todoTitle"
      @input="$emit('update:todoTitle', $event.target.value)" />
    <input 
      placeholder="content"
      :value="todoContent"
      @input="$emit('update:todoContent', $event.target.value)" />
    <button>追加</button>
  </form>
    <!-- <form>
    <input 
      placeholder="todo"
      :value="inputTodo"
      @input="$emit('update:inputTodo', $event.target.value)" 
      />
  </form> -->
</template>

<script>
export default {
  name: 'InputForm',
  props:{
    todoTitle: String,
    todoContent: String
  }
}
</script>
