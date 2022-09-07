import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  colors: any;
  transform(values: any, searchName: string): any {
    console.log(searchName);
    if (searchName == null) {
      return values;
    }
    const resultsArray = (values: any, searchName: any) => {
      values.filter((variants: any) =>
        variants.map((color: any) => color).includes(searchName)
      );
    };
    return resultsArray;
  }
}
