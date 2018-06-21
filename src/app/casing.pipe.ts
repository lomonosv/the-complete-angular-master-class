import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casing'
})
export class CasingPipe implements PipeTransform {
  transform(value: string, args?: any) {
    if (!value) {
      return null;
    }

    let words = value.split(' ');

    words = words.map((word, index) => {
      const preparedWord = word.toLowerCase();

      if ((preparedWord === 'of' || preparedWord === 'the') && index > 0) {
        return preparedWord;
      }

      return preparedWord.charAt(0).toUpperCase() + preparedWord.slice(1);
    });

    return words.join(' ');
  }
}