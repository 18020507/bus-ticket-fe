import { BasicColumn } from '/@/components/Table';

export const getColumns = (isTwoWay: boolean): BasicColumn[] => [
  {
    dataIndex: 'start_location',
    title: 'Start location',
  },
  {
    dataIndex: 'finish_location',
    title: 'Finish location',
  },
  {
    dataIndex: 'start_time',
    title: 'Start time',
  },
  {
    dataIndex: 'end_time',
    title: 'End time',
  },
  {
    dataIndex: 'start_time_back',
    title: 'Start time back',
    ifShow: isTwoWay,
  },
  {
    dataIndex: 'end_time_back',
    title: 'End time back',
    ifShow: isTwoWay,
  },
  {
    dataIndex: 'capacity',
    title: 'Capicity',
  },
  {
    dataIndex: 'space_left',
    title: 'Space left',
  },
  {
    dataIndex: 'price',
    title: 'Price',
  },
];
