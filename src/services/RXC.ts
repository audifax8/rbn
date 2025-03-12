export interface IRXCService {
  renderRxc(): Promise<boolean>;
}

export class RXCService implements IRXCService {
  api: any;
  rxc: any;

  prescription: any;
  config: any;

  constructor(api: any) {
    this.api = api;
    this.prescription = {
      "prescriptionFlow": "MANUAL",
      "prescriptionId": 123456789,
      "SPH_OD": -1.5,
      "SPH_OS": -1.5,
      "CYL_OD": 0,
      "CYL_OS": 0,
      "AX_OD": null,
      "AX_OS": null,
      "ADD_OD": null,
      "ADD_OS": null,
      "PD_OD": 63,
      "PD_OS": null,
      "PRISM_ENABLED": false,
      "VPRISM_OD": null,
      "VPRISM_OS": null,
      "VBASEDIR_OD": null,
      "VBASEDIR_OS": null,
      "HPRISM_OD": null,
      "HPRISM_OS": null,
      "HBASEDIR_OD": null,
      "HBASEDIR_OS": null,
      "COMMENT": null,
      "lastUpdate": "2024-11-14T15:56:16.059Z",
      "issueDate": null,
      "rxType": "DISTANCE",
      "POWER": null,
      "SPH": {
          "OD": -1.5,
          "OS": -1.5
      },
      "CYL": {
          "OD": 0,
          "OS": 0
      },
      "AX": null,
      "ADD": null,
      "PD": {
          "OD": 63,
          "OS": null
      },
      "VPRISM": {
          "OD": null,
          "OS": null
      },
      "VBASEDIR": {
          "OD": null,
          "OS": null
      },
      "HPRISM": {
          "OD": null,
          "OS": null
      },
      "HBASEDIR": {
          "OD": null,
          "OS": null
      }
    };

    this.config = {
      selector: '.rxcApp',
      //selector: "#rxcApp",
      brand: "glasses",
      data: {
          frame: {
              upc: "8053672195736",
              model: "0RX5154",
              color: "2000",
              listPrice: 263.00,
              offerPrice: 263.00,
              name: "RB5154 CLUBMASTER OPTICS",
              size: "L",
              imageUrl: "https://assets2.clearly.com.au/cdn-record-files-pi/9f81c8ee-571c-4e24-aa12-a358001ddb43/c12584a8-28ee-4a99-8ba6-ad33014b4b22/0RX5154__2000__STD__shad__qt.png",
              brandImageUr: "/images/brands/ray-ban.svg",
              brand: "Ray-Ban"
          }
      },
      translation: {
          language: "en_US",
      },
      actionsModule: {
          genericAddToCart: function (_frameObject: any, _lensObject: any, _warrantyObject: any, _reviewObject: any, _imagery: any) {
              // Interface called when add-to-cart is performed
              alert('Calling genericAddToCart()');
              console.log("_frameObject:", _frameObject);
              console.log("_lensObject:", _lensObject);
              console.log("_warrantyObject:", _warrantyObject);
              console.log("_reviewObject:", _reviewObject);
              console.log("_imagery:", _imagery);
          },
          genericSaveEditFromCart: function (_frameObject: any, _lensObject: any, _warrantyObject: any, _cartMode: any, _reviewObject: any, _imagery: any) {
              // Interface called instead of genericAddToCart when the user
              // is editing a selection from cart (_cartMode is passed as argument
              // to get the orderItemId)
              alert('Calling genericSaveEditFromCart()');
          },
          genericExit: function () {
              // Interface called when RXC is closed by the user
          },
          loadContent: function (_loadContentName: any) {
              alert('Calling loadContent("' + _loadContentName + '")');
          },
      },
      prescriptionModule: {
          prescriptionType: "FULL",
          prescriptionFlows: ["MANUAL"],
          fileExtensions: ["png", "gif", "jpeg", "tiff", "bmp", "word", "pdf"],
          maxFileSize: 10,
          hideMoreOptions: false,
          enablePrismComment: false,
          enablePrism: true,
          loadExtendedPrescription: function (_prescriptionObject: any) {
              /*return new Promise(function (resolve, reject) {
                  resolve(this.prescription);
              });*/
          },
          saveExtendedPrescription: function (_prescriptionObject: any) {
              return new Promise(function (resolve, reject) {
                  _prescriptionObject.prescriptionId = 123456789;
                  resolve(_prescriptionObject);
              });
          },
          clearExtendedPrescription: function (_prescriptionObject: any) {
              return new Promise(function (resolve, reject) {
                  resolve({});
              });
          }
      }
    };
  }

  async renderRxc(): Promise<boolean> {
    try {
      if (window.RXC_LOADED) {
        window._rxcData = this.config;
        console.info('ROX data:');
        console.info(this.config);
        console.info('--------');
        this.rxc = window.RXC.rxcWidget.new(this.config);
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