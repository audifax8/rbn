export interface IRXCService {
  renderRox(model: string, name: string, upc?: string): Promise<boolean>;
}

export class RXCService implements IRXCService {
  api: any;
  rxc: any;

  constructor(api: any) {
    this.api = api;
  }

  async renderRox(model: string, name: string, upc?: string): Promise<boolean> {
    console.log({model, name, upc});
    try {
      if (window.RXC_LOADED) {
        const rxcConfig = {
          selector: '.rxcApp',
          showUI: true, 
          flowName: 'RB_EYE_00001',
          lensesData: { /* Refer to deep dive into lenses object section */
          },
          actionsModule: { /* Refer to actions module section */
          },
          data: {
            frame: {
              catEntryId: '134363',
              name: name,
              upc: upc || '8053672195781',
              category: 'EYEGLASSES',
              model,
              color: '2077',
              listPrice: 400.0,
              offerPrice: 300.0, // if provided, the frame PST is displayed
              brand: 'Ray-Ban',
              rxValues: {
                // prescription power max and min values, MANDATORY for prescription filtering feature
                powerCombinedMin: '-9.00',
                powerCombinedMax: '9.00'
              }, 
            }
          },
          brand: 'glasses',
          cartMode: {
              orderItemId: 123345,
              orderIndex: 0,
          },
          translation: {
              language: 'en_US',
          },
          insuranceModule: { /* Refer to insurance module section */
          },
          dynamicPromoModule: { /* Refer to dynamic discount module section */
          },
          prescriptionModule: { /* Refer to prescription module section */
          },
        };
        window._rxcData = rxcConfig;
        console.info('ROX data:');
        console.info(rxcConfig);
        console.info('--------');
        this.rxc = window.RXC.rxcWidget.new(rxcConfig);
        this.rxc.render();
        return true;
      }
      return false;
    } catch (e) {
      console.error({e});
      return false;
    }
  }
};