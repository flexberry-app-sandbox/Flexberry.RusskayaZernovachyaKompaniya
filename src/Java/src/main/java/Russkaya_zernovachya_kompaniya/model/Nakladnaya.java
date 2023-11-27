package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Накладная
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaНакладная")
@Table(schema = "public", name = "Накладная")
public class Nakladnaya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВремяОтгрузки")
    private Date времяотгрузки;

    @Column(name = "Примечание")
    private String примечание;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "СостНакладной")
    private String состнакладной;


    public Nakladnaya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getВремяОтгрузки() {
      return времяотгрузки;
    }

    public void setВремяОтгрузки(Date времяотгрузки) {
      this.времяотгрузки = времяотгрузки;
    }

    public String getПримечание() {
      return примечание;
    }

    public void setПримечание(String примечание) {
      this.примечание = примечание;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public String getСостНакладной() {
      return состнакладной;
    }

    public void setСостНакладной(String состнакладной) {
      this.состнакладной = состнакладной;
    }


}