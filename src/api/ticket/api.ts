import { defHttp } from '/@/utils/http/axios';

enum Api {
  TICKET = '/booking_ticket',
}

/**
 * @description: user login api
 */
export async function createTicket(params) {
  return defHttp.post(
    { url: Api.TICKET, params },
    {
      joinParamsToUrl: true,
    },
  );
}
