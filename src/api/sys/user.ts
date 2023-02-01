import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/user_detail',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export async function loginApi(params: LoginParams, mode: ErrorMessageMode = 'none') {
  const res = await defHttp.post(
    {
      url: Api.Login,
      params: {
        username_id: params.username,
        password: params.password,
      },
    },
    {
      errorMessageMode: mode,
      isReturnNativeResponse: true,
    },
  );
  return res.data as LoginResultModel;
}

/**
 * @description: getUserInfo
 */
export async function getUserInfo() {
  const res = await defHttp.get({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
  console.log('res', res);

  return res as GetUserInfoModel;
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
