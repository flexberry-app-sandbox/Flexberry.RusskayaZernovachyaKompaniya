import { Serializer as ЦенаТовараSerializer } from
  '../mixins/regenerated/serializers/i-i-s-russkaya-zernovachya-kompaniya-цена-товара';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЦенаТовараSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
