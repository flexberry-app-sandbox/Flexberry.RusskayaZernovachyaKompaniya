import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОплаты: DS.attr('date'),
  датаОтгрузки: DS.attr('date'),
  состояние: DS.attr('i-i-s-russkaya-zernovachya-kompaniya-сост-заказа'),
  сотрудник: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-сотрудник', { inverse: null, async: false }),
  ценаТовара: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-цена-товара', { inverse: null, async: false })
});

export let ValidationRules = {
  датаОплаты: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-заказ.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОтгрузки: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-заказ.validations.датаОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-заказ.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ценаТовара: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-заказ.validations.ценаТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-russkaya-zernovachya-kompaniya-заказ', {
    датаОтгрузки: attr('Дата отгрузки', { index: 0 }),
    датаОплаты: attr('Дата оплаты', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    ценаТовара: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-цена-товара', 'Цена товара', {
      цена: attr('Цена', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'цена' }),
    сотрудник: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-сотрудник', 'Сотрудник', {
      emile: attr('Emile', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'emile' })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-russkaya-zernovachya-kompaniya-заказ', {
    датаОтгрузки: attr('Дата отгрузки', { index: 0 }),
    датаОплаты: attr('Дата оплаты', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    ценаТовара: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-цена-товара', 'Цена', {
      цена: attr('Цена', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-сотрудник', 'Emile', {
      emile: attr('Emile', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
