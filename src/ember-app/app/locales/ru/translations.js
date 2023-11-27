import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISRusskaya_zernovachya_kompaniyaЗаказLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-заказ-l';
import IISRusskaya_zernovachya_kompaniyaЗаписьВНаклLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l';
import IISRusskaya_zernovachya_kompaniyaКатегорияТовараLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l';
import IISRusskaya_zernovachya_kompaniyaКонтрагентLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-контрагент-l';
import IISRusskaya_zernovachya_kompaniyaНакладнаяLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-накладная-l';
import IISRusskaya_zernovachya_kompaniyaСкладLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-склад-l';
import IISRusskaya_zernovachya_kompaniyaСотрудникLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l';
import IISRusskaya_zernovachya_kompaniyaСтрокаЗаказаLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l';
import IISRusskaya_zernovachya_kompaniyaСчетФактураLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l';
import IISRusskaya_zernovachya_kompaniyaТЧСчФактурыLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l';
import IISRusskaya_zernovachya_kompaniyaТоварLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-товар-l';
import IISRusskaya_zernovachya_kompaniyaТоварНаСкладеLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l';
import IISRusskaya_zernovachya_kompaniyaЦенаТовараLForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l';
import IISRusskaya_zernovachya_kompaniyaЗаказEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-заказ-e';
import IISRusskaya_zernovachya_kompaniyaЗаписьВНаклEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-e';
import IISRusskaya_zernovachya_kompaniyaКатегорияТовараEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-категория-товара-e';
import IISRusskaya_zernovachya_kompaniyaКонтрагентEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-контрагент-e';
import IISRusskaya_zernovachya_kompaniyaНакладнаяEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-накладная-e';
import IISRusskaya_zernovachya_kompaniyaСкладEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-склад-e';
import IISRusskaya_zernovachya_kompaniyaСотрудникEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-сотрудник-e';
import IISRusskaya_zernovachya_kompaniyaСтрокаЗаказаEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-e';
import IISRusskaya_zernovachya_kompaniyaСчетФактураEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-e';
import IISRusskaya_zernovachya_kompaniyaТЧСчФактурыEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-e';
import IISRusskaya_zernovachya_kompaniyaТоварEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-товар-e';
import IISRusskaya_zernovachya_kompaniyaТоварНаСкладеEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-e';
import IISRusskaya_zernovachya_kompaniyaЦенаТовараEForm from './forms/i-i-s-russkaya-zernovachya-kompaniya-цена-товара-e';
import IISRusskaya_zernovachya_kompaniyaЗаказModel from './models/i-i-s-russkaya-zernovachya-kompaniya-заказ';
import IISRusskaya_zernovachya_kompaniyaЗаписьВНаклModel from './models/i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл';
import IISRusskaya_zernovachya_kompaniyaКатегорияТовараModel from './models/i-i-s-russkaya-zernovachya-kompaniya-категория-товара';
import IISRusskaya_zernovachya_kompaniyaКонтрагентModel from './models/i-i-s-russkaya-zernovachya-kompaniya-контрагент';
import IISRusskaya_zernovachya_kompaniyaНакладнаяModel from './models/i-i-s-russkaya-zernovachya-kompaniya-накладная';
import IISRusskaya_zernovachya_kompaniyaСкладModel from './models/i-i-s-russkaya-zernovachya-kompaniya-склад';
import IISRusskaya_zernovachya_kompaniyaСотрудникModel from './models/i-i-s-russkaya-zernovachya-kompaniya-сотрудник';
import IISRusskaya_zernovachya_kompaniyaСтрокаЗаказаModel from './models/i-i-s-russkaya-zernovachya-kompaniya-строка-заказа';
import IISRusskaya_zernovachya_kompaniyaСчетФактураModel from './models/i-i-s-russkaya-zernovachya-kompaniya-счет-фактура';
import IISRusskaya_zernovachya_kompaniyaТЧСчФактурыModel from './models/i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры';
import IISRusskaya_zernovachya_kompaniyaТоварНаСкладеModel from './models/i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе';
import IISRusskaya_zernovachya_kompaniyaТоварModel from './models/i-i-s-russkaya-zernovachya-kompaniya-товар';
import IISRusskaya_zernovachya_kompaniyaЦенаТовараModel from './models/i-i-s-russkaya-zernovachya-kompaniya-цена-товара';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-russkaya-zernovachya-kompaniya-заказ': IISRusskaya_zernovachya_kompaniyaЗаказModel,
    'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл': IISRusskaya_zernovachya_kompaniyaЗаписьВНаклModel,
    'i-i-s-russkaya-zernovachya-kompaniya-категория-товара': IISRusskaya_zernovachya_kompaniyaКатегорияТовараModel,
    'i-i-s-russkaya-zernovachya-kompaniya-контрагент': IISRusskaya_zernovachya_kompaniyaКонтрагентModel,
    'i-i-s-russkaya-zernovachya-kompaniya-накладная': IISRusskaya_zernovachya_kompaniyaНакладнаяModel,
    'i-i-s-russkaya-zernovachya-kompaniya-склад': IISRusskaya_zernovachya_kompaniyaСкладModel,
    'i-i-s-russkaya-zernovachya-kompaniya-сотрудник': IISRusskaya_zernovachya_kompaniyaСотрудникModel,
    'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа': IISRusskaya_zernovachya_kompaniyaСтрокаЗаказаModel,
    'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура': IISRusskaya_zernovachya_kompaniyaСчетФактураModel,
    'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры': IISRusskaya_zernovachya_kompaniyaТЧСчФактурыModel,
    'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе': IISRusskaya_zernovachya_kompaniyaТоварНаСкладеModel,
    'i-i-s-russkaya-zernovachya-kompaniya-товар': IISRusskaya_zernovachya_kompaniyaТоварModel,
    'i-i-s-russkaya-zernovachya-kompaniya-цена-товара': IISRusskaya_zernovachya_kompaniyaЦенаТовараModel
  },

  'application-name': 'Russkaya_zernovachya_kompaniya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Russkaya_zernovachya_kompaniya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Russkaya_zernovachya_kompaniya',
          title: 'Russkaya_zernovachya_kompaniya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'russkaya-zernovachya-kompaniya': {
          caption: 'Russkaya_zernovachya_kompaniya',
          title: 'Russkaya_zernovachya_kompaniya',
          'i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l': {
            caption: 'Счет фактура',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l': {
            caption: 'Запись в накл',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l': {
            caption: 'Т ч сч фактуры',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l': {
            caption: 'Товар на складе',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l': {
            caption: 'Строка заказа',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l': {
            caption: 'Цена товара',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l': {
            caption: 'Категория товара',
            title: ''
          },
          'i-i-s-russkaya-zernovachya-kompaniya-накладная-l': {
            caption: 'Накладная',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-russkaya-zernovachya-kompaniya-заказ-l': IISRusskaya_zernovachya_kompaniyaЗаказLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l': IISRusskaya_zernovachya_kompaniyaЗаписьВНаклLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l': IISRusskaya_zernovachya_kompaniyaКатегорияТовараLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-контрагент-l': IISRusskaya_zernovachya_kompaniyaКонтрагентLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-накладная-l': IISRusskaya_zernovachya_kompaniyaНакладнаяLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-склад-l': IISRusskaya_zernovachya_kompaniyaСкладLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l': IISRusskaya_zernovachya_kompaniyaСотрудникLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l': IISRusskaya_zernovachya_kompaniyaСтрокаЗаказаLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l': IISRusskaya_zernovachya_kompaniyaСчетФактураLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l': IISRusskaya_zernovachya_kompaniyaТЧСчФактурыLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-товар-l': IISRusskaya_zernovachya_kompaniyaТоварLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l': IISRusskaya_zernovachya_kompaniyaТоварНаСкладеLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l': IISRusskaya_zernovachya_kompaniyaЦенаТовараLForm,
    'i-i-s-russkaya-zernovachya-kompaniya-заказ-e': IISRusskaya_zernovachya_kompaniyaЗаказEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-e': IISRusskaya_zernovachya_kompaniyaЗаписьВНаклEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-категория-товара-e': IISRusskaya_zernovachya_kompaniyaКатегорияТовараEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-контрагент-e': IISRusskaya_zernovachya_kompaniyaКонтрагентEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-накладная-e': IISRusskaya_zernovachya_kompaniyaНакладнаяEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-склад-e': IISRusskaya_zernovachya_kompaniyaСкладEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-сотрудник-e': IISRusskaya_zernovachya_kompaniyaСотрудникEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-e': IISRusskaya_zernovachya_kompaniyaСтрокаЗаказаEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-e': IISRusskaya_zernovachya_kompaniyaСчетФактураEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-e': IISRusskaya_zernovachya_kompaniyaТЧСчФактурыEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-товар-e': IISRusskaya_zernovachya_kompaniyaТоварEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-e': IISRusskaya_zernovachya_kompaniyaТоварНаСкладеEForm,
    'i-i-s-russkaya-zernovachya-kompaniya-цена-товара-e': IISRusskaya_zernovachya_kompaniyaЦенаТовараEForm
  },

});

export default translations;
