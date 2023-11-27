package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ТЧСчФактуры
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaТЧСчФактуры")
@Table(schema = "public", name = "ТЧСчФактуры")
public class TCHSchFaktury {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Сумма")
    private Double сумма;


    public TCHSchFaktury() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
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