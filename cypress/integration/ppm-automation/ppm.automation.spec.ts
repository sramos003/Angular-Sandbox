import { PPMValues } from './ppm-values.enum';
import cy = Cypress.cy;

describe('ppm automation', () => {
    const isMiscellaneousOnPage: () => unknown = () => cy.contains(PPMValues.MiscellaneousOptionText);
    beforeEach(() => {
        cy.visit('https://ppm-thehartford.saas.microfocus.com/');
    });
});

