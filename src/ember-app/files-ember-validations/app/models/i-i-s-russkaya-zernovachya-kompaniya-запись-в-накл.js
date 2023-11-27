import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьВНаклMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьВНаклMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
