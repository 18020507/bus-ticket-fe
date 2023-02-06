import { defHttp } from '/@/utils/http/axios';

import { ISearchBusSchedule } from './model';

enum Api {
  ListSchedule = '/bus_schedule',
  ListTravelFrom = '/list_travel_from_field',
  ListTravelTo = '/list_travel_to_field',
}

/**
 * @description: user login api
 */
export async function getSchedule(params: ISearchBusSchedule) {
  return defHttp.get({ url: Api.ListSchedule, params });
}

export async function getListTravelFrom(params) {
  return defHttp.get({ url: Api.ListTravelFrom, params });
}

export async function getListTravelTo(params) {
  return defHttp.get({ url: Api.ListTravelTo, params });
}

