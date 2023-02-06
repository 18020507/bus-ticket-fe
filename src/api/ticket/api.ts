import { defHttp } from '/@/utils/http/axios';

enum Api {
  TICKET = '/booking_ticket',
  GET_LIST_TICKET = '/list_ticket',
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

export async function getListTicket() {
  return defHttp.get(
    { url: Api.GET_LIST_TICKET },
    {
      joinParamsToUrl: true,
    },
  );
}

