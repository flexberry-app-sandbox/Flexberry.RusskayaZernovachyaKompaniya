import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВНаклE', 'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', {
    цена: attr('Цена', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });

  modelClass.defineProjection('ЗаписьВНаклL', 'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', {
    цена: attr('Цена', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });
};
