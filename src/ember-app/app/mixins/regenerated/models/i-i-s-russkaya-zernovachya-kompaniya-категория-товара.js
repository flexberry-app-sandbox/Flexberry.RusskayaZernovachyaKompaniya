import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКатегории: DS.attr('number')
});

export let ValidationRules = {
  кодКатегории: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-категория-товара.validations.кодКатегории.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КатегорияТовараE', 'i-i-s-russkaya-zernovachya-kompaniya-категория-товара', {
    кодКатегории: attr('Код категории', { index: 0 })
  });

  modelClass.defineProjection('КатегорияТовараL', 'i-i-s-russkaya-zernovachya-kompaniya-категория-товара', {
    кодКатегории: attr('Код категории', { index: 0 })
  });
};
