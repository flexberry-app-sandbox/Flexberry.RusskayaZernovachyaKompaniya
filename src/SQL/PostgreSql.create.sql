




CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 Emile VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Телефон VARCHAR(255) NULL,
 ТабелНомер INT NULL,
 Накладная UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Склад (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 Номер VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СчетФактура (
 primaryKey UUID NOT NULL,
 ДатаЗаполн TIMESTAMP(3) NULL,
 Номер INT NULL,
 Контрагент UUID NOT NULL,
 Заказ UUID NOT NULL,
 Склад UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаписьВНакл (
 primaryKey UUID NOT NULL,
 Цена DOUBLE PRECISION NULL,
 Количество INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧСчФактуры (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Сумма DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТоварНаСкладе (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Товар UUID NOT NULL,
 Склад UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товар (
 primaryKey UUID NOT NULL,
 Описание VARCHAR(255) NULL,
 ЕдИзм VARCHAR(255) NULL,
 Название VARCHAR(255) NULL,
 КодТовара VARCHAR(255) NULL,
 ТЧСчФактуры UUID NOT NULL,
 ЗаписьВНакл UUID NOT NULL,
 КатегорияТовара UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагент (
 primaryKey UUID NOT NULL,
 НаимОрг VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Тип VARCHAR(9) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СтрокаЗаказа (
 primaryKey UUID NOT NULL,
 ЦенаСНалог DOUBLE PRECISION NULL,
 Количество INT NULL,
 Сумма DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказ (
 primaryKey UUID NOT NULL,
 ДатаОтгрузки TIMESTAMP(3) NULL,
 ДатаОплаты TIMESTAMP(3) NULL,
 Состояние VARCHAR(10) NULL,
 ЦенаТовара UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЦенаТовара (
 primaryKey UUID NOT NULL,
 Цена INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаОконч TIMESTAMP(3) NULL,
 Товар UUID NOT NULL,
 ТЧСчФактуры UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE КатегорияТовара (
 primaryKey UUID NOT NULL,
 КодКатегории INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Накладная (
 primaryKey UUID NOT NULL,
 ВремяОтгрузки TIMESTAMP(3) NULL,
 Примечание VARCHAR(255) NULL,
 Сумма DOUBLE PRECISION NULL,
 Тип VARCHAR(9) NULL,
 СостНакладной VARCHAR(10) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудник ADD CONSTRAINT FKcf1ec896454467f9aa2a24dd0a8ed5c547883be0 FOREIGN KEY (Накладная) REFERENCES Накладная; 
CREATE INDEX Indexcf1ec896454467f9aa2a24dd0a8ed5c547883be0 on Сотрудник (Накладная); 

 ALTER TABLE СчетФактура ADD CONSTRAINT FK59081d69e50f1b8c8c39b698c28148312e6c3228 FOREIGN KEY (Контрагент) REFERENCES Контрагент; 
CREATE INDEX Index59081d69e50f1b8c8c39b698c28148312e6c3228 on СчетФактура (Контрагент); 

 ALTER TABLE СчетФактура ADD CONSTRAINT FKfa1baf9f5ecf3bc79c930be00de673bd58886717 FOREIGN KEY (Заказ) REFERENCES Заказ; 
CREATE INDEX Indexfa1baf9f5ecf3bc79c930be00de673bd58886717 on СчетФактура (Заказ); 

 ALTER TABLE СчетФактура ADD CONSTRAINT FKeb9f2436102398c4ae9401b24e62ef547e66b4fc FOREIGN KEY (Склад) REFERENCES Склад; 
CREATE INDEX Indexeb9f2436102398c4ae9401b24e62ef547e66b4fc on СчетФактура (Склад); 

 ALTER TABLE СчетФактура ADD CONSTRAINT FK7c821db53cb7051458b2ab1816baf36ef581fb14 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index7c821db53cb7051458b2ab1816baf36ef581fb14 on СчетФактура (Сотрудник); 

 ALTER TABLE ТоварНаСкладе ADD CONSTRAINT FKe97f9c6950a83008d03928b4a97ffb73e3dd3fa3 FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Indexe97f9c6950a83008d03928b4a97ffb73e3dd3fa3 on ТоварНаСкладе (Товар); 

 ALTER TABLE ТоварНаСкладе ADD CONSTRAINT FK68cdd071f8f3c1def6a6830da38eab96386d73e3 FOREIGN KEY (Склад) REFERENCES Склад; 
CREATE INDEX Index68cdd071f8f3c1def6a6830da38eab96386d73e3 on ТоварНаСкладе (Склад); 

 ALTER TABLE Товар ADD CONSTRAINT FKaf9c76e28b4315de672651456f6cffa0cb219669 FOREIGN KEY (ТЧСчФактуры) REFERENCES ТЧСчФактуры; 
CREATE INDEX Indexaf9c76e28b4315de672651456f6cffa0cb219669 on Товар (ТЧСчФактуры); 

 ALTER TABLE Товар ADD CONSTRAINT FK121cf879c62783444e80a1d9fcaeaea7cae8361a FOREIGN KEY (ЗаписьВНакл) REFERENCES ЗаписьВНакл; 
CREATE INDEX Index121cf879c62783444e80a1d9fcaeaea7cae8361a on Товар (ЗаписьВНакл); 

 ALTER TABLE Товар ADD CONSTRAINT FK8f20759fb2b36f6fdcb76bd22b7c5b16dca536a4 FOREIGN KEY (КатегорияТовара) REFERENCES КатегорияТовара; 
CREATE INDEX Index8f20759fb2b36f6fdcb76bd22b7c5b16dca536a4 on Товар (КатегорияТовара); 

 ALTER TABLE Заказ ADD CONSTRAINT FK3c8124ca34a8ff519fbab37583c3cd51ca7dff33 FOREIGN KEY (ЦенаТовара) REFERENCES ЦенаТовара; 
CREATE INDEX Index3c8124ca34a8ff519fbab37583c3cd51ca7dff33 on Заказ (ЦенаТовара); 

 ALTER TABLE Заказ ADD CONSTRAINT FK57e4c0dbcbc3ff7aab471a01fe0c325cfcc94c3c FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index57e4c0dbcbc3ff7aab471a01fe0c325cfcc94c3c on Заказ (Сотрудник); 

 ALTER TABLE ЦенаТовара ADD CONSTRAINT FK56d325265cd3c8b5bfe059ad722d84b16f43d774 FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Index56d325265cd3c8b5bfe059ad722d84b16f43d774 on ЦенаТовара (Товар); 

 ALTER TABLE ЦенаТовара ADD CONSTRAINT FK0174fb99b9c57c5a5d5cb46101682f3e9b073cb3 FOREIGN KEY (ТЧСчФактуры) REFERENCES ТЧСчФактуры; 
CREATE INDEX Index0174fb99b9c57c5a5d5cb46101682f3e9b073cb3 on ЦенаТовара (ТЧСчФактуры); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

