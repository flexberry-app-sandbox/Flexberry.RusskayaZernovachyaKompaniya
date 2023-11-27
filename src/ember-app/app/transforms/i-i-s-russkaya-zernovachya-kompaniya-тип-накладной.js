import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипНакладнойEnum from '../enums/i-i-s-russkaya-zernovachya-kompaniya-тип-накладной';

export default FlexberryEnum.extend({
  enum: ТипНакладнойEnum,
  sourceType: 'IIS.Russkaya_zernovachya_kompaniya.ТипНакладной'
});
