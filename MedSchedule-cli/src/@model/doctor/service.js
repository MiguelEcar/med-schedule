import { path, httpService } from '@http';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/doctor' };
/////////////////////////////////////////////////////////////////////////////////

export function createDoctor(payload) {
  return httpService.post(args, payload);
}

export function listDoctor() {
  return httpService.get(args);
}
