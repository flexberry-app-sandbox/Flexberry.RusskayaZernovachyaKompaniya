import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостНакладнойEnum from '../enums/i-i-s-russkaya-zernovachya-kompaniya-сост-накладной';

export default FlexberryEnum.extend({
  enum: СостНакладнойEnum,
  sourceType: 'IIS.Russkaya_zernovachya_kompaniya.СостНакладной'
});
