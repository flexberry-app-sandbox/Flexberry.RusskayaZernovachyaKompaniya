import { Serializer as СчетФактураSerializer } from
  '../mixins/regenerated/serializers/i-i-s-russkaya-zernovachya-kompaniya-счет-фактура';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СчетФактураSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
