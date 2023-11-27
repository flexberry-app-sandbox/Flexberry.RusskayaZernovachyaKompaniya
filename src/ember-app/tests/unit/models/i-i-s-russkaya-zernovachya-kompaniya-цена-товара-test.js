import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-russkaya-zernovachya-kompaniya-цена-товара', 'Unit | Model | i-i-s-russkaya-zernovachya-kompaniya-цена-товара', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-russkaya-zernovachya-kompaniya-заказ',
    'model:i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл',
    'model:i-i-s-russkaya-zernovachya-kompaniya-категория-товара',
    'model:i-i-s-russkaya-zernovachya-kompaniya-контрагент',
    'model:i-i-s-russkaya-zernovachya-kompaniya-накладная',
    'model:i-i-s-russkaya-zernovachya-kompaniya-склад',
    'model:i-i-s-russkaya-zernovachya-kompaniya-сотрудник',
    'model:i-i-s-russkaya-zernovachya-kompaniya-строка-заказа',
    'model:i-i-s-russkaya-zernovachya-kompaniya-счет-фактура',
    'model:i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры',
    'model:i-i-s-russkaya-zernovachya-kompaniya-товар-на-складе',
    'model:i-i-s-russkaya-zernovachya-kompaniya-товар',
    'model:i-i-s-russkaya-zernovachya-kompaniya-цена-товара',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
