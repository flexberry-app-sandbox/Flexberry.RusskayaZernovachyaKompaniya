import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОтгрузки: DS.attr('date'),
  примечание: DS.attr('string'),
  состНакладной: DS.attr('i-i-s-russkaya-zernovachya-kompaniya-сост-накладной'),
  сумма: DS.attr('decimal'),
  тип: DS.attr('i-i-s-russkaya-zernovachya-kompaniya-тип-накладной')
});

export let ValidationRules = {
  времяОтгрузки: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-накладная.validations.времяОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  примечание: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-накладная.validations.примечание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состНакладной: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-накладная.validations.состНакладной.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-накладная.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-накладная.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НакладнаяE', 'i-i-s-russkaya-zernovachya-kompaniya-накладная', {
    времяОтгрузки: attr('Время отгрузки', { index: 0 }),
    примечание: attr('Примечание', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    состНакладной: attr('Сост накладной', { index: 4 })
  });

  modelClass.defineProjection('НакладнаяL', 'i-i-s-russkaya-zernovachya-kompaniya-накладная', {
    времяОтгрузки: attr('Время отгрузки', { index: 0 }),
    примечание: attr('Примечание', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    состНакладной: attr('Сост накладной', { index: 4 })
  });
};
