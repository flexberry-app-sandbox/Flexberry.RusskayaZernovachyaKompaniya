import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСчФактурыMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСчФактурыMixin, Validations, {
});

defineProjections(Model);

export default Model;
