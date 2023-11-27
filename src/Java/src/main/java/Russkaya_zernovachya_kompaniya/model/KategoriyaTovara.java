package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: КатегорияТовара
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaКатегорияТовара")
@Table(schema = "public", name = "КатегорияТовара")
public class KategoriyaTovara {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКатегории")
    private Integer кодкатегории;


    public KategoriyaTovara() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКатегории() {
      return кодкатегории;
    }

    public void setКодКатегории(Integer кодкатегории) {
      this.кодкатегории = кодкатегории;
    }


}