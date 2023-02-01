import { FormSchema } from '/@/components/Form';

export const schema: FormSchema[] = [
  {
    field: 'space_left',
    label: 'Free space',
    component: 'Input',
    slot: 'capacity',
  },
  {
    field: 'passengers',
    label: 'Passengers',
    component: 'InputNumber',
    required: true,
    defaultValue: 1,
    componentProps: ({ formModel }) => ({
      min: 1,
      max: Number(formModel.space_left),
    }),
  },
  {
    field: 'routeStart',
    label: '',
    component: 'Input',
    slot: 'routeStart',
  },
  {
    field: 'routeBack',
    label: '',
    component: 'Input',
    slot: 'routeBack',
    show: ({ model }) => Number(model.ways) === 2,
  },
  {
    field: 'ways',
    label: '',
    component: 'Input',
    show: false,
  },
  {
    field: 'id',
    label: '',
    component: 'Input',
    show: false,
  },
];
