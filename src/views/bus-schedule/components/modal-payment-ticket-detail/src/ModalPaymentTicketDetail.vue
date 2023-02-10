<template>
  <BasicModal
    width="60%"
    title="Payment ticket"
    okText="Pay"
    @register="register"
    @close="handleClose"
    @ok="handlePayment"
  >
    <FormPaymentDetail ref="formTicketInfoRef" v-show="!openQrcode" />
    <div v-if="openQrcode">
      <div class="flex justify-center">
        <qrcode-vue value="https://example.com" :size="300" level="H" />
      </div>
    </div>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import QrcodeVue from 'qrcode.vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useUserStore } from '/@/store/modules/user';
  import { FormPaymentDetail } from '../../form-payment-detail';
  import { useMessage } from '/@/hooks/web/useMessage';

  const emit = defineEmits(['register', 'submit-success']);
  const { createMessage } = useMessage();
  const openQrcode = ref(false);
  const formTicketInfoRef = ref();

  const [register, { closeModal }] = useModalInner((data) => {
    console.log(data);
  });

  const userStore = useUserStore();

  const handlePayment = () => {
    if (openQrcode.value) {
      createMessage.success('Payment success');
      emit('submit-success');
      handleClose();
    } else {
      openQrcode.value = true;
    }
  };

  const handleClose = () => {
    closeModal();
    openQrcode.value = false;
  };
</script>
