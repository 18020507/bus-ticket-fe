import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const busScheduleRoute: AppRouteModule = {
  path: '/bus-schedule',
  name: 'BusSchedule22',
  component: LAYOUT,
  redirect: '/bus-schedule/list',
  meta: {
    orderNo: 1,
    icon: 'ion:bus',
    title: 'Bus schedule',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'list',
      name: 'ListBusSchedule',
      component: () => import('/@/views/bus-schedule/list/index.vue'),
      meta: {
        title: 'Bus schedule',
      },
    },
  ],
};

export default busScheduleRoute;
