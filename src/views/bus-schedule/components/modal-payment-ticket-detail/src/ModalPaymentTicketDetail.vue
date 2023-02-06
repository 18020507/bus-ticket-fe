<template>
  <BasicModal
    width="60%"
    :height="1000"
    title="Payment ticket"
    okText="Go to payment page"
    @register="register"
    @close="handleClose"
    @ok="handlePayment"
  >
    <FormPaymentDetail ref="formTicketInfoRef" />
  </BasicModal>
</template>

<script lang="ts" setup>
  import { ref, unref } from 'vue';

  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useUserStore } from '/@/store/modules/user';
  import { FormPaymentDetail } from '../../form-payment-detail';

  const emit = defineEmits(['register', 'submit-success']);

  const formTicketInfoRef = ref();

  const [register, { closeModal }] = useModalInner((data) => {
    console.log(data);
  });

  const userStore = useUserStore();

  const handlePayment = () => {

  }

  const handleClose = () => {
    closeModal();
    unref(formTicketInfoRef)?.resetFields();
  };
</script>
