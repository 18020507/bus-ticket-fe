<template>
  <BasicModal
    width="75%"
    title="Payment ticket"
    okText="Payment"
    @register="register"
    @close="handleClose"
    @ok="handlePayment"
  >
    <FormTicketInfo ref="formTicketInfoRef" />
  </BasicModal>
</template>

<script lang="ts" setup>
  import { ref, unref } from 'vue';

  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { FormTicketInfo } from '/@/views/bus-schedule/components/form-ticket-info';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';

  import * as TicketApi from '/@/api/ticket/api';

  const emit = defineEmits(['register', 'submit-success']);

  const formTicketInfoRef = ref();

  const { createMessage } = useMessage();

  const [register, { closeModal }] = useModalInner((data) => {
    const routeStart = [
      { location: data.start_location, time: data.start_time },
      { location: data.finish_location, time: data.end_time },
    ];
    const routeBack = [
      { location: data.finish_location, time: data.start_time_back },
      { location: data.start_location, time: data.end_time_back },
    ];
    unref(formTicketInfoRef)?.setFieldsValue({
      routeStart,
      routeBack,
      ways: data.ways,
      capacity: data.capacity,
      space_left: data.space_left,
      id: data.id,
    });
  });

  const userStore = useUserStore();
  const handlePayment = async () => {
    const form = unref(formTicketInfoRef)?.getFieldsValue();
    if (!form) return;

    const formData = {
      user_id: userStore.getUserInfo.userId,
      number_of_passenger: form.passengers,
      bus_id: form.id,
    };
    await TicketApi.createTicket(formData);
    createMessage.success('Payment success');
    emit('submit-success');
    handleClose();
  };

  const handleClose = () => {
    closeModal();
    unref(formTicketInfoRef)?.resetFields();
  };
</script>
