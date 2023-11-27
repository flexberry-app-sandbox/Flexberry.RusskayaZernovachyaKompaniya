import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОконч: DS.attr('date'),
  цена: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-товар', { inverse: null, async: false }),
  тЧСчФактуры: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', { inverse: null, async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-цена-товара.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-цена-товара.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-цена-товара.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-цена-товара.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСчФактуры: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-цена-товара.validations.тЧСчФактуры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЦенаТовараE', 'i-i-s-russkaya-zernovachya-kompaniya-цена-товара', {
    цена: attr('Цена', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОконч: attr('Дата оконч', { index: 2 }),
    товар: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-товар', 'Товар', {
      описание: attr('Описание', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'описание' }),
    тЧСчФактуры: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', 'Т ч сч фактуры', {
      количество: attr('Количество', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'количество' })
  });

  modelClass.defineProjection('ЦенаТовараL', 'i-i-s-russkaya-zernovachya-kompaniya-цена-товара', {
    цена: attr('Цена', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОконч: attr('Дата оконч', { index: 2 }),
    товар: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-товар', 'Описание', {
      описание: attr('Описание', { index: 3 })
    }, { index: -1, hidden: true }),
    тЧСчФактуры: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', 'Количество', {
      количество: attr('Количество', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
