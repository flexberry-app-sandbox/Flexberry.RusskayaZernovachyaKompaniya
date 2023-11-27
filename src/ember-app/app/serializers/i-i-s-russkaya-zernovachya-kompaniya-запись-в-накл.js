import { Serializer as ЗаписьВНаклSerializer } from
  '../mixins/regenerated/serializers/i-i-s-russkaya-zernovachya-kompaniya-запись-в-накл';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьВНаклSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
