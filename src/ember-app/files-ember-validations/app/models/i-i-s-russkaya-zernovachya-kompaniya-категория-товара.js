import {
  defineNamespace,
  defineProjections,
  Model as КатегорияТовараMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-категория-товара';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КатегорияТовараMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
