import sendRequest from './send-request';
const BASE_URL = '/api/products';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function updateProductQty(item) {
  return sendRequest(`${BASE_URL}/${item.product._id}`, 'PUT', item);
}