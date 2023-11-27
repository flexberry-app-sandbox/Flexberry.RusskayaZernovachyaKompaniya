import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  наимОрг: DS.attr('string'),
  отчество: DS.attr('string'),
  тип: DS.attr('i-i-s-russkaya-zernovachya-kompaniya-тип-контрагента'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-контрагент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимОрг: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-контрагент.validations.наимОрг.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-контрагент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-контрагент.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-контрагент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-russkaya-zernovachya-kompaniya-контрагент', {
    наимОрг: attr('Наим орг', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    тип: attr('Тип', { index: 4 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-russkaya-zernovachya-kompaniya-контрагент', {
    наимОрг: attr('Наим орг', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    тип: attr('Тип', { index: 4 })
  });
};
