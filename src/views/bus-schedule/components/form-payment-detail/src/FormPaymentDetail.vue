<template>
  <BasicForm title="Payment Page Detail" okText="Payment Deta" @register="register"> </BasicForm>
</template>

<script lang="ts" setup>
  import { Steps, Step, TypographyTitle } from 'ant-design-vue';

  import { BasicForm, useForm } from '/@/components/Form';

  import { schema } from './form.data';

  const [register, { setFieldsValue, getFieldsValue, resetFields }] = useForm({
    schemas: schema,
    showActionButtonGroup: false,
  });

  defineExpose({
    setFieldsValue,
    getFieldsValue,
    resetFields,
  });
</script>
