<script setup lang="ts">

</script>

<template>
  <div class="size-full flex flex-col items-center justify-center">
    <div class="flex flex-col gap-3 w-2/3">
      <MainHeader />

      <ElTag type="primary" class="w-full flex" size="large">
        <ElIcon>
          <QuestionFilled />
        </ElIcon>
        <p class="text-sm whitespace-normal">
          Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
        </p>
      </ElTag>

      <MainForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-tag) {
  justify-content: flex-start !important;
  height: auto !important;
}

:deep(.el-tag__content) {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>