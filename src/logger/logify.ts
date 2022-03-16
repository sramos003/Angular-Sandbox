import { Observable } from 'rxjs';

export class Logify<T> {
    static statTable: (data: any) => void = (data: any) => console.table(data);
    public table: (observable: Observable<T>) => void = (observable: Observable<T>) => observable.subscribe((dataToTable: T) => console.table(dataToTable));
}
