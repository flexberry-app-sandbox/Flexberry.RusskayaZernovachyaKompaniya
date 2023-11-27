import {
  defineNamespace,
  defineProjections,
  Model as ЦенаТовараMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-цена-товара';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЦенаТовараMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
