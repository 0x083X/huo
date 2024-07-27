<script setup> 
import { ref, reactive, defineProps, computed, defineEmits } from 'vue'
const props = defineProps({
  // 单选框还是多选框 false -- 单选框 true -- 多选框
  isCheckbox: {
    type: Boolean,
    default: false
  },
  // 当前选中的数据 [] -- 多选框 '' -- 单选框
  currentSelect: {

  },
  // 数据源
  dataSource: {
    type: Array,
    default: []
  },
  // 横向还是竖向排列 true 为竖
  column: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update::currentSelect'])

const select = computed( {
  get() {
    return props.currentSelect
  },
  set(value) {
    emit('update::currentSelect', value)
  }
})

// const char = ['A、', 'B、', 'C、', 'D、', 'E、', 'F、', 'G、', 'H、', 'I、', 'J、', 'K、', 'L、', 'M、', 'N、', 'O、', 'P、', 'Q、', 'R、', 'S、', 'T、', 'U、', 'V、', 'W、', 'X、', 'Y、', 'Z、']
</script>

<template>
  <el-checkbox-group v-model="select" v-if="isCheckbox" :class="[{ 'column': column }]">
    <el-checkbox v-for="(item, index) in dataSource" :key="index" :value="item.value"> {{ item.text }}</el-checkbox>
  </el-checkbox-group>
  <el-radio-group v-model="select" v-else :class="[{ 'column': column }]">
    <el-radio v-for="(item, index) in dataSource" :key="index" :value="item.value"> {{ item.text }}</el-radio>
  </el-radio-group>
</template>

<style scoped lang='less'>
  .column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // el-radio不适配竖着的排列 清空样式影响
    /deep/ .el-radio {
      margin-right: 0;
    }
  }
</style>