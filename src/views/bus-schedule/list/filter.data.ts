import { FormSchema } from '/@/components/Form';
import { getListTravelFrom, getListTravelTo } from '/@/api/bus-schedule/api';

export const filterSchema: FormSchema[] = [
  {
    field: 'ways',
    label: 'Way',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: 'One ways',
          value: 1,
        },
        {
          label: 'Two ways',
          value: 2,
        },
      ],
    },
    colProps: {
      xl: 24,
    },
    defaultValue: 1,
    required: true,
  },
  {
    field: 'travel_from',
    label: 'Travel from',
    component: 'ApiSelect',
    componentProps: {
      api: getListTravelFrom,
      labelField: 'travel_from',
      valueField: 'travel_from',
    },
    required: true,
  },
  {
    field: 'travel_to',
    label: 'Travel to',
    component: 'ApiSelect',
    componentProps: {
      api: getListTravelTo,
      labelField: 'travel_to',
      valueField: 'travel_to',
    },
    required: true,
  },
];
