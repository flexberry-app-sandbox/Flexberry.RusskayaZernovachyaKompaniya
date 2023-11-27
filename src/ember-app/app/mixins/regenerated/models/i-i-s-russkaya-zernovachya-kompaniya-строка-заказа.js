import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('decimal'),
  ценаСНалог: DS.attr('decimal')
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-строка-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-строка-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ценаСНалог: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-строка-заказа.validations.ценаСНалог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаЗаказаE', 'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа', {
    ценаСНалог: attr('Цена с налог', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    сумма: attr('Сумма', { index: 2 })
  });

  modelClass.defineProjection('СтрокаЗаказаL', 'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа', {
    ценаСНалог: attr('Цена с налог', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    сумма: attr('Сумма', { index: 2 })
  });
};
