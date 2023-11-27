import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-russkaya-zernovachya-kompaniya-заказ-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-заказ-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-заказ-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-заказ-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-заказ-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-категория-товара-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-категория-товара-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-категория-товара-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-категория-товара-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-категория-товара-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-контрагент-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-контрагент-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-контрагент-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-контрагент-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-контрагент-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-накладная-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-накладная-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-накладная-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-накладная-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-накладная-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-склад-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-склад-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-склад-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-склад-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-склад-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-сотрудник-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-сотрудник-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-сотрудник-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-сотрудник-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-сотрудник-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-строка-заказа-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-счет-фактура-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-товар-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-товар-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-товар-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-товар-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-товар-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе-e/new' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-цена-товара-l');
  this.route('i-i-s-russkaya-zernovachya-kompaniya-цена-товара-e',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-цена-товара-e/:id' });
  this.route('i-i-s-russkaya-zernovachya-kompaniya-цена-товара-e.new',
  { path: 'i-i-s-russkaya-zernovachya-kompaniya-цена-товара-e/new' });
});

export default Router;
