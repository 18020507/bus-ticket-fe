import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const busScheduleRoute: AppRouteModule = {
  path: '/ticket',
  name: 'ListTicket',
  component: LAYOUT,
  redirect: '/ticket/list',
  meta: {
    orderNo: 1,
    icon: 'ion:ticket',
    title: 'List Ticket',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'list',
      name: 'ListTickets',
      component: () => import('/@/views/ticket/list/index.vue'),
      meta: {
        title: 'List Ticket',
      },
    },
  ],
};

export default busScheduleRoute;
