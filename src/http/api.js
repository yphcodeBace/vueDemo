import { get, post } from './http';

export const getUserInfo = params => get('/customer/api/itsm/v1/itsmDicRel/getCurrentUserInfo', params); //查询
// export const sendcode = params => post('/carrier/sendcode', params); // 发送验证码
// export const playerlist = params => post('/carrier/playerlist', params, 'application/json');
