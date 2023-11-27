import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('decimal')
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСчФактурыE', 'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 })
  });

  modelClass.defineProjection('ТЧСчФактурыL', 'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 })
  });
};
