import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      записьВНакл: { serialize: 'odata-id', deserialize: 'records' },
      категорияТовара: { serialize: 'odata-id', deserialize: 'records' },
      тЧСчФактуры: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
