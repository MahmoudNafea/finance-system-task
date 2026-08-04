import { HttpInterceptorFn } from '@angular/common/http';

const ACCESS_TOKEN_KEY = 'access_token';

export const jwtInterceptor: HttpInterceptorFn = (request, next) => {
  let token: string | null = null;

  try {
    token = globalThis.localStorage?.getItem(ACCESS_TOKEN_KEY) ?? null;
  } catch {
    token = null;
  }

  if (!token || request.headers.has('Authorization')) {
    return next(request);
  }

  return next(request.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  }));
};
