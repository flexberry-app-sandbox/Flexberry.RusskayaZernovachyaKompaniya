package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Товар
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaТовар")
@Table(schema = "public", name = "Товар")
public class Tovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Описание")
    private String описание;

    @Column(name = "ЕдИзм")
    private String едизм;

    @Column(name = "Название")
    private String название;

    @Column(name = "КодТовара")
    private String кодтовара;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHSchFaktury")
    @Convert("TCHSchFaktury")
    @Column(name = "ТЧСчФактуры", length = 16, unique = true, nullable = false)
    private UUID _tchschfakturyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHSchFaktury", insertable = false, updatable = false)
    private TCHSchFaktury tchschfaktury;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZapisVNakl")
    @Convert("ZapisVNakl")
    @Column(name = "ЗаписьВНакл", length = 16, unique = true, nullable = false)
    private UUID _zapisvnaklid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZapisVNakl", insertable = false, updatable = false)
    private ZapisVNakl zapisvnakl;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KategoriyaTovara")
    @Convert("KategoriyaTovara")
    @Column(name = "КатегорияТовара", length = 16, unique = true, nullable = false)
    private UUID _kategoriyatovaraid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KategoriyaTovara", insertable = false, updatable = false)
    private KategoriyaTovara kategoriyatovara;


    public Tovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }

    public String getЕдИзм() {
      return едизм;
    }

    public void setЕдИзм(String едизм) {
      this.едизм = едизм;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(String кодтовара) {
      this.кодтовара = кодтовара;
    }


}