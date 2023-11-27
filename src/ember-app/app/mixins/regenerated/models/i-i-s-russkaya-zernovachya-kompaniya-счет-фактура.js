import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date'),
  номер: DS.attr('number'),
  заказ: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-заказ', { inverse: null, async: false }),
  контрагент: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-контрагент', { inverse: null, async: false }),
  склад: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-склад', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СчетФактураE', 'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура', {
    датаЗаполн: attr('Дата заполн', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    контрагент: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-контрагент', 'Контрагент', {
      наимОрг: attr('Наим орг', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимОрг' }),
    заказ: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-заказ', 'Заказ', {
      датаОтгрузки: attr('Дата отгрузки', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'датаОтгрузки' }),
    склад: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-склад', 'Склад', {
      адрес: attr('Адрес', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'адрес' }),
    сотрудник: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-сотрудник', 'Сотрудник', {
      emile: attr('Emile', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'emile' })
  });

  modelClass.defineProjection('СчетФактураL', 'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура', {
    датаЗаполн: attr('Дата заполн', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    контрагент: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-контрагент', 'Наим орг', {
      наимОрг: attr('Наим орг', { index: 2 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-заказ', 'Дата отгрузки', {
      датаОтгрузки: attr('Дата отгрузки', { index: 3 })
    }, { index: -1, hidden: true }),
    склад: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-склад', 'Адрес', {
      адрес: attr('Адрес', { index: 4 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-сотрудник', 'Emile', {
      emile: attr('Emile', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
