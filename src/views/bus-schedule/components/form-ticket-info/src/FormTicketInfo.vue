<template>
  <BasicForm title="Payment ticket" okText="Payment" @register="register">
    <template #routeStart="{ model, field }">
      <TypographyTitle :level="5">Outward</TypographyTitle>
      <Steps progressDot :current="model[field]?.length" direction="vertical">
        <Step
          v-for="item in model[field]"
          :key="item.location"
          :title="item.location"
          :description="item.time"
        />
      </Steps>
    </template>
    <template #routeBack="{ model, field }">
      <TypographyTitle :level="5">Return</TypographyTitle>
      <Steps progressDot :current="model[field]?.length" direction="vertical">
        <Step
          v-for="item in model[field]"
          :key="item.location"
          :title="item.location"
          :description="item.time"
        />
      </Steps>
    </template>
    <template #capacity="{ model, field }">
      <div>{{ model[field] }}</div>
    </template>
  </BasicForm>
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
