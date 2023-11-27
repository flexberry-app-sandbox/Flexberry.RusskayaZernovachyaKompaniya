import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  номер: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-склад.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-склад.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-склад.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-russkaya-zernovachya-kompaniya-склад', {
    адрес: attr('Адрес', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    наименование: attr('Наименование', { index: 2 })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-russkaya-zernovachya-kompaniya-склад', {
    адрес: attr('Адрес', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    наименование: attr('Наименование', { index: 2 })
  });
};
