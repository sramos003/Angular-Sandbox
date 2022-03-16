import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicHttpOptions, HttpConfigOptions, HttpOptions } from './http-configured-options';

export class HttpConfiguredClient implements HttpConfigured {
    private httpClient: HttpClient;

    constructor(httpBackend: HttpBackend) {
        this.httpClient = new HttpClient(httpBackend);
    }

    public get<T>(url: string, options?: DynamicHttpOptions): Observable<any> {
        return this.httpClient.get<T>(url, this.getOptions(options));
    }

    public post<T>(url: string, body: T, options?: DynamicHttpOptions): Observable<any> {
        return this.httpClient.post<T>(url, body, this.getOptions(options));
    }

    public put<T>(url: string, body: T, options?: DynamicHttpOptions): Observable<T> {
        return this.httpClient.put<T>(url, body, this.getOptions(options));
    }

    private getOptions: (options: DynamicHttpOptions) => HttpOptions = (options) => {
        if (!options) {
            return new HttpConfigOptions({_default: true});
        }
        return new HttpConfigOptions({
            headers: options.headers,
            params: options.params,
            _default: true
        });
    };
}

interface HttpConfigured {
    get<T>(url: string, options?: HttpOptions): Observable<T>;

    post<T>(url: string, body: T, options?: HttpOptions): Observable<T>;

    put<T>(url: string, body: T, options?: HttpOptions): Observable<T>;
}

/* One Liner implementations for client */
// public put: (url: string, body: any, options?: DynamicHttpOptions) => Observable<any> = (url, body, options) => this.httpClient.put(url, body, this.getOptions(options));
// public get: (url: string, options?: DynamicHttpOptions) => Observable<any> = (url, body, options) => this.httpClient.put(url, body, this.getOptions(options));
//  public post: (url: string, body: any, options?: DynamicHttpOptions) => Observable<any> = (url, body, options) => this.httpClient.put(url, body, this.getOptions(options));
