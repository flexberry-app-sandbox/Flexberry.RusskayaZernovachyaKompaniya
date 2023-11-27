package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СтрокаЗаказа
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaСтрокаЗаказа")
@Table(schema = "public", name = "СтрокаЗаказа")
public class StrokaZakaza {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЦенаСНалог")
    private Double ценасналог;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Сумма")
    private Double сумма;


    public StrokaZakaza() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getЦенаСНалог() {
      return ценасналог;
    }

    public void setЦенаСНалог(Double ценасналог) {
      this.ценасналог = ценасналог;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}