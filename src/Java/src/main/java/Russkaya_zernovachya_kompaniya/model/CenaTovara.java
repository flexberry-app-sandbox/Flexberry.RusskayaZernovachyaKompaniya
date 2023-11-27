package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЦенаТовара
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaЦенаТовара")
@Table(schema = "public", name = "ЦенаТовара")
public class CenaTovara {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОконч")
    private Date датаоконч;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovar")
    @Convert("Tovar")
    @Column(name = "Товар", length = 16, unique = true, nullable = false)
    private UUID _tovarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovar", insertable = false, updatable = false)
    private Tovar tovar;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHSchFaktury")
    @Convert("TCHSchFaktury")
    @Column(name = "ТЧСчФактуры", length = 16, unique = true, nullable = false)
    private UUID _tchschfakturyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHSchFaktury", insertable = false, updatable = false)
    private TCHSchFaktury tchschfaktury;


    public CenaTovara() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(Date датаоконч) {
      this.датаоконч = датаоконч;
    }


}