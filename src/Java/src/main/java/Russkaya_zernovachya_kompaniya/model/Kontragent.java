package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaКонтрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимОрг")
    private String наиморг;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "Тип")
    private String тип;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимОрг() {
      return наиморг;
    }

    public void setНаимОрг(String наиморг) {
      this.наиморг = наиморг;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }


}