import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  склад: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-склад', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-товар', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварНаСкладеE', 'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-товар', 'Товар', {
      описание: attr('Описание', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'описание' }),
    склад: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-склад', 'Склад', {
      адрес: attr('Адрес', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('ТоварНаСкладеL', 'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-товар', 'Описание', {
      описание: attr('Описание', { index: 1 })
    }, { index: -1, hidden: true }),
    склад: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-склад', 'Адрес', {
      адрес: attr('Адрес', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
