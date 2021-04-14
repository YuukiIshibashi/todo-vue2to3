<template>
  <el-col :span="12">
    <el-card class="box-card" shadow="hover" style="margin: 5px 0">
      <el-row :gutter="12">
        <el-col :span="21">{{ todo }}</el-col>
        <el-col :span="3">
          <el-button @click="done(index)" type="success" icon="el-icon-check" circle></el-button>
        </el-col>
        </el-row>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'TodoItem',
  emits: {
    'handleClick'(payload) {
      if (payload.dulation && payload.response) {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    todo: String,
    index: Number
  },
  methods: {
    done(index) {
      this.$emit('handleClick', {
        dulation: 1,
        response: "Hello!"
      }, index);
    },
  }
}
</script>
