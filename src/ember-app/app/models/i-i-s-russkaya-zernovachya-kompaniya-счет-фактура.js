import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СчетФактураMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-счет-фактура';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СчетФактураMixin, Validations, {
});

defineProjections(Model);

export default Model;
