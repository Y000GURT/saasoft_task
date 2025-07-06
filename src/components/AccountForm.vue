<script setup lang="ts">
import { ref } from 'vue';
import { OPTIONS } from '../consts/record-type';
import type { RecordForm } from '../types/record-form';

const form = ref<RecordForm>({
  tags: null,
  type: 'local',
  login: '',
  password: ''
})
</script>

<template>
  <ElFormItem label-position="top">
    <ElInput maxlength="50" />
  </ElFormItem>
  <ElFormItem label-position="top">
    <ElSelect v-model="form.type">
      <ElOption v-for="option in OPTIONS" :key="option.value" :label="option.label" :value="option.value" />
    </ElSelect>
  </ElFormItem>
  <ElFormItem label-position="top">
    <ElInput maxlength="100"/>
  </ElFormItem>
  <ElFormItem label-position="top">
    <ElInput maxlength="100"/>
  </ElFormItem>

  <ElFormItem>
    <ElButton link>
      <ElIcon size="28">
        <Delete />
      </ElIcon>
    </ElButton>
  </ElFormItem>
</template>

<style scoped lang="scss"></style>