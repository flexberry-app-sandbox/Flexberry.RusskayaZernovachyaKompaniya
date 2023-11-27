import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостЗаказаEnum from '../enums/i-i-s-russkaya-zernovachya-kompaniya-сост-заказа';

export default FlexberryEnum.extend({
  enum: СостЗаказаEnum,
  sourceType: 'IIS.Russkaya_zernovachya_kompaniya.СостЗаказа'
});
