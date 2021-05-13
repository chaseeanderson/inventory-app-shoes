import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export function getOrder() {
  return sendRequest(`${BASE_URL}/purchase-order`);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function addToOrder(productId) {
  return sendRequest(`${BASE_URL}/purchase-order/products/${productId}`, 'POST');
}

export function submitOrder(formData) { 
  return sendRequest(`${BASE_URL}/purchase-order/submit`, 'POST', formData);
}

export function removeOrder(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}