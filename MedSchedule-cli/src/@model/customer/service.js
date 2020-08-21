import { path, httpService } from '@http';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/customer' };
/////////////////////////////////////////////////////////////////////////////////

export function createCustomer(payload) {
  return httpService.post(args, payload);
}

export function listCustomer() {
  return httpService.get(args);
}
