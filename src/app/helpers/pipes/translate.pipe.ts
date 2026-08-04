import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';

@Pipe({ name: 'translate', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  translations = inject(TranslationService);

  transform(key: string): string {
    return this.translations.translate(key);
  }
}
