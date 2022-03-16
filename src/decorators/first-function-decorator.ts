import { HttpConfiguredClient } from '../http-config/http-configured-client';

export function LogMethod(target: any) {
    console.log('Hello from decorator!');
    console.log(target.prototype.constructor);
    // Object.defineProperty(target.prototype, 'myNewTestMethod', {value: (data: any) => console.log(data)});
}
