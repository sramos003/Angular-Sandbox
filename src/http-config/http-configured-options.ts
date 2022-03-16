import { HttpHeaders, HttpParams } from '@angular/common/http';
import { SharedHeaders } from './shared-options/shared-headers';
import { SharedParams } from './shared-options/shared-params';

export class HttpConfigOptions implements HttpOptions {
    public headers = new HttpHeaders();
    public params = new HttpParams();
    constructor(options?: { headers?: DynamicHttpData, params?: DynamicHttpData, _default: boolean }) {
        // FirstFunctionDecorator check if default is true to combine or initialize the data.
        if (options?._default) {
            const defaultOptions = HttpConfigOptions.getDefaultOptions();
            // If options for header / param provided, combine two objects data.
            if (options?.headers) { Object.assign(options.headers, defaultOptions.headers); }
            if (options?.params) { Object.assign(options.params, defaultOptions.params); }
            // If options for header / param not provided, assign the default.
            if (!options?.headers) {  options.headers = defaultOptions.headers; }
            if (!options?.params) {  options.params = defaultOptions.params; }
        }
        // If option data passed, check if object has data then set associated data to http option.
        if (options?.headers && HttpConfigOptions.checkLength(options.headers)) { this.setAssociatedData(options.headers, HttpOptNames.HEADERS); }
        if (options?.params && HttpConfigOptions.checkLength(options.params)) { this.setAssociatedData(options.params, HttpOptNames.PARAMS); }
    }

    static checkLength: (o: object) => boolean = (o) => Object.keys(o).length > 0;
    static getDefaultOptions: () => DynamicHttpOptions = () => ({ headers: SharedHeaders.headers, params: SharedParams.params });
    // Debugger to get view options.
    public getHttpOptions: () => HttpOptions = () => ({ headers: this.headers, params: this.params });

    private setAssociatedData: (data: DynamicHttpData, optionToSet: HttpOptNames.PARAMS | HttpOptNames.HEADERS) => void = (data, optionToSet) => {
        for (const key of Object.keys(data)) {
            if (optionToSet === HttpOptNames.PARAMS) { this.params = this.params.set(key, data[key]); }
            if (optionToSet === HttpOptNames.HEADERS) { this.headers = this.headers.set(key, data[key]); }
        }
    }
}

export enum HttpOptNames {
    PARAMS = 'params',
    HEADERS = 'headers',
}

export interface HttpOptions {
    headers: HttpHeaders;
    params: HttpParams;
}

export interface DynamicHttpOptions {
    headers?: DynamicHttpData;
    params?: DynamicHttpData;
}

interface DynamicHttpData {
    [key: string]: any;
}
