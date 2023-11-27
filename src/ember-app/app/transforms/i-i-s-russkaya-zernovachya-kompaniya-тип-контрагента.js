import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипКонтрагентаEnum from '../enums/i-i-s-russkaya-zernovachya-kompaniya-тип-контрагента';

export default FlexberryEnum.extend({
  enum: ТипКонтрагентаEnum,
  sourceType: 'IIS.Russkaya_zernovachya_kompaniya.ТипКонтрагента'
});
