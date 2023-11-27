import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзм: DS.attr('string'),
  кодТовара: DS.attr('string'),
  название: DS.attr('string'),
  описание: DS.attr('string'),
  записьВНакл: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', { inverse: null, async: false }),
  категорияТовара: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-категория-товара', { inverse: null, async: false }),
  тЧСчФактуры: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', { inverse: null, async: false })
});

export let ValidationRules = {
  едИзм: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  записьВНакл: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.записьВНакл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  категорияТовара: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.категорияТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСчФактуры: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар.validations.тЧСчФактуры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-russkaya-zernovachya-kompaniya-товар', {
    описание: attr('Описание', { index: 0 }),
    едИзм: attr('Ед изм', { index: 1 }),
    название: attr('Название', { index: 2 }),
    кодТовара: attr('Код товара', { index: 3 }),
    тЧСчФактуры: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', 'Т ч сч фактуры', {
      количество: attr('Количество', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'количество' }),
    записьВНакл: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', 'Запись в накл', {
      цена: attr('Цена', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'цена' }),
    категорияТовара: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-категория-товара', 'Категория товара', {
      кодКатегории: attr('Код категории', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'кодКатегории' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-russkaya-zernovachya-kompaniya-товар', {
    описание: attr('Описание', { index: 0 }),
    едИзм: attr('Ед изм', { index: 1 }),
    название: attr('Название', { index: 2 }),
    кодТовара: attr('Код товара', { index: 3 }),
    тЧСчФактуры: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', 'Количество', {
      количество: attr('Количество', { index: 4 })
    }, { index: -1, hidden: true }),
    записьВНакл: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', 'Цена', {
      цена: attr('Цена', { index: 5 })
    }, { index: -1, hidden: true }),
    категорияТовара: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-категория-товара', 'Код категории', {
      кодКатегории: attr('Код категории', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
