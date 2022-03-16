import { Observable } from 'rxjs';
import { LogMethod } from '../decorators/first-function-decorator';
import { HttpConfiguredClient } from '../http-config/http-configured-client';
import { FeinDetails, FeinDetailsModel } from './models/fein-details';
import { FeinUrls } from './models/fein-urls.enum';

@LogMethod
export class FeinDetailsService implements FeinDetails {
    constructor(public httpClient: HttpConfiguredClient) { }

    /** Create */
    public postFeinDetails<T>(feinDetails: FeinDetailsModel, feinUrl: FeinUrls): Observable<FeinDetailsModel> {
        return this.httpClient.post<FeinDetailsModel>(feinUrl, feinDetails);
    }

    /** Read */
    public getFeinDetails: (businessId: number, feinUrl: FeinUrls) => Observable<FeinDetailsModel> = (businessId, feinUrl) => {
        return this.httpClient.get<FeinDetailsModel>(feinUrl, {params: {businessId}});
    };

    /** Update */
    public putFeinDetails: (feinDetails: FeinDetailsModel, feinUrls: FeinUrls) => Observable<FeinDetailsModel> = (feinDetails, feinUrls) => {
        return this.httpClient.put<FeinDetailsModel>(feinUrls, feinDetails);
    };
}
