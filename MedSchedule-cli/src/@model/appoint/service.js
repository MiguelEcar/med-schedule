import { path, httpService } from '@http';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/appointment' };
/////////////////////////////////////////////////////////////////////////////////

export function createAppoint(payload) {
  return httpService.post(args, payload);
}

export function listAppoint() {
  return httpService.get(args);
}
