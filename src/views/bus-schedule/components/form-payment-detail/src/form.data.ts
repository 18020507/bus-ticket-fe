import { FormSchema } from '/@/components/Form';

export const schema: FormSchema[] = [
  {
    field: 'cardDetail',
    label: 'Card Detail',
    component: 'Divider',
  },
  {
    field: 'cardHolderName',
    label: 'Card Holder Name',
    component: 'Input',
    colProps: { xl: 24 },
  },
  {
    field: 'creditCardNumber',
    label: 'Credit Card Number',
    component: 'Input',
  },
  {
    field: 'ccv',
    label: 'CCV',
    component: 'InputNumber',
    componentProps: { max: 999, class: 'w-full' },
  },
  {
    field: 'registerDate',
    label: 'Register Date',
    component: 'MonthPicker',
  },
//   {
//     field: 'year',
//     label: 'Year',
//     component: 'InputNumber',
//     componentProps: { max: 9999, class: 'w-full' },
//     colProps: { xl: 8 },
//   },
  {
    field: 'abc',
    label: 'Full Address',
    component: 'Divider',
    colProps: { xl: 24 },
  },
  {
    field: 'address',
    label: 'Address',
    component: 'Input',
    colProps: { xl: 24 },
  },
  {
    field: 'addressDetail',
    label: 'Apt/Suite',
    component: 'Input',
  },
  {
    field: 'city',
    label: 'City',
    component: 'Input',
  },
  {
    field: 'zipcode',
    label: 'Zip/Postal',
    component: 'Input',
  },
];
