<template>
  <div>
    <BasicTable @register="register" :columns="columns">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ion:cash-outline',
              onClick: handlePaymentTicket.bind(null, record),
              tooltip: 'Buy',
            },
          ]"
        />
      </template>
    </BasicTable>
    <ModalPaymentTicket @register="registerModal" @submit-success="reload" />
  </div>
</template>

<script lang="ts" setup name="ListBusSchedule">
  import { ref, computed, unref } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import * as BusScheduleApi from '/@/api/bus-schedule/api';
  import { ISearchBusSchedule } from '/@/api/bus-schedule/model';
  import { ModalPaymentTicket } from '/@/views/bus-schedule/components/modal-payment-ticket';

  import { filterSchema } from './filter.data';
  import { getColumns } from './table.data';

  const [registerModal, { openModal }] = useModal();
  const isTwoWay = ref(false);

  const columns = computed(() => getColumns(unref(isTwoWay)));

  const [register, { reload }] = useTable({
    api: BusScheduleApi.getSchedule,
    beforeFetch: (params: Partial<ISearchBusSchedule>) => {
      isTwoWay.value = params.ways === 2;
      return params;
    },
    useSearchForm: true,
    formConfig: {
      schemas: filterSchema,
      showAdvancedButton: false,
    },
    immediate: false,
    actionColumn: {
      width: 80,
      title: 'Action',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });
  const handlePaymentTicket = (record) => {
    openModal(true, record);
  };
</script>
