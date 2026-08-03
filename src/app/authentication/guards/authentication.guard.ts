import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (_route, state) => {
  console.log(`Authentication guard approved navigation to: ${state.url}`);

  return true;
};
