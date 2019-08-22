import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'customizeDate'
})
export class CustomizeDate implements PipeTransform {
    transform(value: string): string {
        const date = new Date(value);
        return date.toLocaleTimeString();
    }
}
