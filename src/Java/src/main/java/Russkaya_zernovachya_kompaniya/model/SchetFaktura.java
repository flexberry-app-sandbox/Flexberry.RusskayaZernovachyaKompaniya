package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: СчетФактура
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaСчетФактура")
@Table(schema = "public", name = "СчетФактура")
public class SchetFaktura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполн")
    private Date датазаполн;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklad")
    @Convert("Sklad")
    @Column(name = "Склад", length = 16, unique = true, nullable = false)
    private UUID _skladid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklad", insertable = false, updatable = false)
    private Sklad sklad;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public SchetFaktura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаполн() {
      return датазаполн;
    }

    public void setДатаЗаполн(Date датазаполн) {
      this.датазаполн = датазаполн;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}