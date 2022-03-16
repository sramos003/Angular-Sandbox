import { Observable, Timestamp } from 'rxjs';
import { FeinUrls } from './fein-urls.enum';

export interface FeinDetailsModel {
    businessUniqueId?: number;
    policyFeinEffectiveDate: Date | string | number;
    policyFeinTermDate: Timestamp<Date> | number;
    fein: string;
    businessName: string;
    feinStatus: string;
    primaryFeinIndicator: boolean;
    partnerAssociateId: number;
    insuredExternalKeyId: string;
    fileMapKeyId: string;
    creationDate: Timestamp<Date> | number;
    creationUserId: string;
    lastUpdatedDate: Timestamp<Date> | number;
    lastUpdatedUserId: string;
    eventDetailLogId: number;
}

export interface FeinDetails {
    getFeinDetails(businessId: number, feinUrls: FeinUrls): Observable<FeinDetailsModel>;
    postFeinDetails(feinDetails: FeinDetailsModel, feinUrls: FeinUrls): Observable<FeinDetailsModel>;
    putFeinDetails(feinDetails: FeinDetailsModel, feinUrls: FeinUrls): Observable<FeinDetailsModel>;
}
