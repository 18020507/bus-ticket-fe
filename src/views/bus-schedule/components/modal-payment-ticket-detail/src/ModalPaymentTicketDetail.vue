<template>
  <BasicModal
    width="60%"
    :height="1000"
    title="Payment ticket"
    okText="Pay"
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
  import { useMessage } from '/@/hooks/web/useMessage';

  const emit = defineEmits(['register', 'submit-success']);
  const { createMessage } = useMessage();

  const formTicketInfoRef = ref();

  const [register, { closeModal }] = useModalInner((data) => {
    console.log(data);
  });

  const userStore = useUserStore();

  const handlePayment = () => {
    createMessage.success('Payment success');
    emit('submit-success');
    handleClose();
  };

  const handleClose = () => {
    closeModal();
  };
</script>
