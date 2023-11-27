import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  emile: DS.attr('string'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  табелНомер: DS.attr('number'),
  телефон: DS.attr('string'),
  фамилия: DS.attr('string'),
  накладная: DS.belongsTo('i-i-s-russkaya-zernovachya-kompaniya-накладная', { inverse: null, async: false })
});

export let ValidationRules = {
  emile: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.emile.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табелНомер: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.табелНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  накладная: {
    descriptionKey: 'models.i-i-s-russkaya-zernovachya-kompaniya-сотрудник.validations.накладная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-russkaya-zernovachya-kompaniya-сотрудник', {
    emile: attr('Emile', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    табелНомер: attr('Табел номер', { index: 5 }),
    накладная: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-накладная', 'Накладная', {
      примечание: attr('Примечание', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'примечание' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-russkaya-zernovachya-kompaniya-сотрудник', {
    emile: attr('Emile', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    табелНомер: attr('Табел номер', { index: 5 }),
    накладная: belongsTo('i-i-s-russkaya-zernovachya-kompaniya-накладная', 'Примечание', {
      примечание: attr('Примечание', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
