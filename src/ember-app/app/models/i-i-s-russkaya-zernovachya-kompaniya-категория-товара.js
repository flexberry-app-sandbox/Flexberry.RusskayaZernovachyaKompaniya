import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КатегорияТовараMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-категория-товара';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КатегорияТовараMixin, Validations, {
});

defineProjections(Model);

export default Model;
