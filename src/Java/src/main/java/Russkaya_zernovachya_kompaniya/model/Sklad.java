package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Склад
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaСклад")
@Table(schema = "public", name = "Склад")
public class Sklad {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Номер")
    private String номер;

    @Column(name = "Наименование")
    private String наименование;


    public Sklad() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getНомер() {
      return номер;
    }

    public void setНомер(String номер) {
      this.номер = номер;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}