import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьВНаклMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьВНаклMixin, Validations, {
});

defineProjections(Model);

export default Model;
