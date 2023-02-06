<template>
  <div>
    <BasicTable @register="register" :columns="columns"> </BasicTable>
  </div>
</template>

<script lang="ts" setup name="ListBusSchedule">
  import { ref, computed, unref } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import * as TicketApi from '/@/api/ticket/api';
  import { ISearchBusSchedule } from '/@/api/bus-schedule/model';
  import { ModalPaymentTicket } from '/@/views/bus-schedule/components/modal-payment-ticket';
  import { ModalPaymentTicketDetail } from '/@/views/bus-schedule/components/modal-payment-ticket-detail';

  import { filterSchema } from './filter.data';
  import { getColumns } from './table.data';

  const [registerModal, { openModal }] = useModal();
  const [registerModalDetail, { openModal: openModalDetail }] = useModal();
  const isTwoWay = ref(false);

  const columns = computed(() => getColumns(unref(isTwoWay)));

  const [register, { reload }] = useTable({
    api: TicketApi.getListTicket,
  });
</script>
