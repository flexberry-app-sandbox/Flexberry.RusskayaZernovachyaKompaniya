import { Serializer as ТЧСчФактурыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-russkaya-zernovachya-kompaniya-т-ч-сч-фактуры';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСчФактурыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
