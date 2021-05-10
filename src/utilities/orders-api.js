import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export function getOrder() {
  return sendRequest(`${BASE_URL}/purchase-order`);
}