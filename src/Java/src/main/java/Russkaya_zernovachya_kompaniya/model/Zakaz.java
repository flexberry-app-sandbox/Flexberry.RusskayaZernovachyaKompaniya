package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Заказ
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaЗаказ")
@Table(schema = "public", name = "Заказ")
public class Zakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаОтгрузки")
    private Date датаотгрузки;

    @Column(name = "ДатаОплаты")
    private Date датаоплаты;

    @Column(name = "Состояние")
    private String состояние;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CenaTovara")
    @Convert("CenaTovara")
    @Column(name = "ЦенаТовара", length = 16, unique = true, nullable = false)
    private UUID _cenatovaraid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CenaTovara", insertable = false, updatable = false)
    private CenaTovara cenatovara;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public Zakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаОтгрузки() {
      return датаотгрузки;
    }

    public void setДатаОтгрузки(Date датаотгрузки) {
      this.датаотгрузки = датаотгрузки;
    }

    public Date getДатаОплаты() {
      return датаоплаты;
    }

    public void setДатаОплаты(Date датаоплаты) {
      this.датаоплаты = датаоплаты;
    }

    public String getСостояние() {
      return состояние;
    }

    public void setСостояние(String состояние) {
      this.состояние = состояние;
    }


}