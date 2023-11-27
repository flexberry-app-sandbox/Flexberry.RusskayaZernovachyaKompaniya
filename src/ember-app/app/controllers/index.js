import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.caption'),
          title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.title'),
          children: [{
            link: 'i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-склад-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-склад-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-товар-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-товар-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-контрагент-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-контрагент-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-заказ-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-заказ-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-russkaya-zernovachya-kompaniya-накладная-l',
            caption: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-накладная-l.caption'),
            title: i18n.t('forms.application.sitemap.russkaya-zernovachya-kompaniya.i-i-s-russkaya-zernovachya-kompaniya-накладная-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})