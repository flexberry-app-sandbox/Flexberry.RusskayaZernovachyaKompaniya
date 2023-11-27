package Russkaya_zernovachya_kompaniya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Russkaya_zernovachya_kompaniya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISRusskaya_zernovachya_kompaniyaСотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Emile")
    private String emile;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "Телефон")
    private String телефон;

    @Column(name = "ТабелНомер")
    private Integer табелномер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nakladnaya")
    @Convert("Nakladnaya")
    @Column(name = "Накладная", length = 16, unique = true, nullable = false)
    private UUID _nakladnayaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nakladnaya", insertable = false, updatable = false)
    private Nakladnaya nakladnaya;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getEmile() {
      return emile;
    }

    public void setEmile(String emile) {
      this.emile = emile;
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

    public String getТелефон() {
      return телефон;
    }

    public void setТелефон(String телефон) {
      this.телефон = телефон;
    }

    public Integer getТабелНомер() {
      return табелномер;
    }

    public void setТабелНомер(Integer табелномер) {
      this.табелномер = табелномер;
    }


}