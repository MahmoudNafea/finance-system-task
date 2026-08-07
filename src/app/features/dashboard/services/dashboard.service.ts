import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface PurchaseOrdersLoadResult {
  source: 'fake';
  loadedAt: string;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  /* Fake api */
  load(): Observable<PurchaseOrdersLoadResult> {
    return of({
      source: 'fake' as const,
      loadedAt: new Date().toISOString(),
    }).pipe(delay(250));
  }
}
