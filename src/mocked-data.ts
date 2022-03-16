import { FeinDetailsModel } from './services/models/fein-details';
export class MockedData {
    static FeinData: FeinDetailsModel = {
        businessUniqueId: 20220222170216,
        businessName: 'Biz Street',
        creationDate: 1645216205863,
        creationUserId: 'Sample User',
        eventDetailLogId: null,
        fein: '92381',
        feinStatus: 'A',
        fileMapKeyId: '5545158518181814541112',
        insuredExternalKeyId: 'Sample_Key_ID',
        lastUpdatedDate: null,
        lastUpdatedUserId: null,
        partnerAssociateId: 654,
        policyFeinEffectiveDate: 1645403108220,
        policyFeinTermDate: 1655784000000,
        primaryFeinIndicator: true
    };
}
