import {
  defineNamespace,
  defineProjections,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-russkaya-zernovachya-kompaniya-накладная';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НакладнаяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
