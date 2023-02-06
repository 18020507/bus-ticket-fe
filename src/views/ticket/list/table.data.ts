import { formatToDateTime } from '/@/utils/dateUtil';
import { BasicColumn } from '/@/components/Table';

export const getColumns = (isTwoWay: boolean): BasicColumn[] => [
  {
    dataIndex: 'created_at',
    title: 'Created_at',
    format: (text) => {
      return formatToDateTime(text); 
    }
  },
  {
    dataIndex: 'number_of_passenger',
    title: 'Number Of Passenger',
  },
];
