import {
  defineNamespace,
  defineProjections,
  Model as СчетФактураMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-счет-фактура';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СчетФактураMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
