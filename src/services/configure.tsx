export class Configure {
  configure: any;
  constructor(
    configure: any
  ) {
    this.configure = configure;
  }

  generateToken = () => {
    const skipServices = true;
    const TOKEN_ALIASES = [
      'frame_sku',
      'temple_sku',
      'temple_tips_sku',
      'lenses_sku',
      'metal_sku',
      'size',
      'service_1',
      'service_2',
      'service_3'
    ];

    const recipe = this.configure.run('getRecipe', 'custom', 'alias', 'vendorId');
    const productVendorId = this.configure.run('getProduct').vendorId;
    let tokenArray = TOKEN_ALIASES.map(alias => {
      if (alias.indexOf('service') > -1) {
        return '';
      } else {
        return recipe[alias] ? recipe[alias].replace(/\s/g, '.') : 'NULL';
      }
    });
    tokenArray = tokenArray.filter(el => {
      if (el) {
        return el;
      }
    });
    if (!skipServices) {
      const selectedLensesSku = this.configure.run('getAttribute', {alias: 'lenses_sku'}).values.filter((value: any) => value.selected)[0];
      if (selectedLensesSku.metadata) {
        const services: any [] = [];
        selectedLensesSku.metadata.map((data: any) => {
          if (data.key.indexOf('Service') > -1) {
            const order = data.key.match(/[0-9]/);
            services[order[0]] = data.value;
          }
        });
        services.map(service => tokenArray.push(service));
      }
    }
    const token = ['TKN', productVendorId.toUpperCase()].concat(tokenArray).join('~');
    return encodeURIComponent(token);
  };
}
