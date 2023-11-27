import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', 'Unit | Serializer | i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-russkaya-zernovachya-kompaniya-сост-заказа',
    'transform:i-i-s-russkaya-zernovachya-kompaniya-сост-накладной',
    'transform:i-i-s-russkaya-zernovachya-kompaniya-тип-контрагента',
    'transform:i-i-s-russkaya-zernovachya-kompaniya-тип-накладной',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
