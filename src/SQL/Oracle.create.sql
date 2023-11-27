



CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"Emile" NVARCHAR2(255) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	"ТабелНомер" NUMBER(10) NULL,

	"Накладная" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склад"
(

	"primaryKey" RAW(16) NOT NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Номер" NVARCHAR2(255) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СчетФактура"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаполн" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Контрагент" RAW(16) NOT NULL,

	"Заказ" RAW(16) NOT NULL,

	"Склад" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаписьВНакл"
(

	"primaryKey" RAW(16) NOT NULL,

	"Цена" FLOAT(126) NULL,

	"Количество" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧСчФактуры"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Сумма" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТоварНаСкладе"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Товар" RAW(16) NOT NULL,

	"Склад" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товар"
(

	"primaryKey" RAW(16) NOT NULL,

	"Описание" NVARCHAR2(255) NULL,

	"ЕдИзм" NVARCHAR2(255) NULL,

	"Название" NVARCHAR2(255) NULL,

	"КодТовара" NVARCHAR2(255) NULL,

	"ТЧСчФактуры" RAW(16) NOT NULL,

	"ЗаписьВНакл" RAW(16) NOT NULL,

	"КатегорияТовара" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагент"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаимОрг" NVARCHAR2(255) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"Тип" NVARCHAR2(9) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СтрокаЗаказа"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЦенаСНалог" FLOAT(126) NULL,

	"Количество" NUMBER(10) NULL,

	"Сумма" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Заказ"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОтгрузки" DATE NULL,

	"ДатаОплаты" DATE NULL,

	"Состояние" NVARCHAR2(10) NULL,

	"ЦенаТовара" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЦенаТовара"
(

	"primaryKey" RAW(16) NOT NULL,

	"Цена" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"ДатаОконч" DATE NULL,

	"Товар" RAW(16) NOT NULL,

	"ТЧСчФактуры" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КатегорияТовара"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКатегории" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Накладная"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВремяОтгрузки" DATE NULL,

	"Примечание" NVARCHAR2(255) NULL,

	"Сумма" FLOAT(126) NULL,

	"Тип" NVARCHAR2(9) NULL,

	"СостНакладной" NVARCHAR2(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FНак_326" FOREIGN KEY ("Накладная") REFERENCES "Накладная" ("primaryKey");

CREATE INDEX "Сотрудник_IНа_4475" on "Сотрудник" ("Накладная");

ALTER TABLE "СчетФактура"
	ADD CONSTRAINT "СчетФактура_F_1703" FOREIGN KEY ("Контрагент") REFERENCES "Контрагент" ("primaryKey");

CREATE INDEX "СчетФактура_I_8728" on "СчетФактура" ("Контрагент");

ALTER TABLE "СчетФактура"
	ADD CONSTRAINT "СчетФактура_F_3981" FOREIGN KEY ("Заказ") REFERENCES "Заказ" ("primaryKey");

CREATE INDEX "СчетФактура_I_3749" on "СчетФактура" ("Заказ");

ALTER TABLE "СчетФактура"
	ADD CONSTRAINT "СчетФактура_F_8621" FOREIGN KEY ("Склад") REFERENCES "Склад" ("primaryKey");

CREATE INDEX "СчетФактура_I_6170" on "СчетФактура" ("Склад");

ALTER TABLE "СчетФактура"
	ADD CONSTRAINT "СчетФактура_FС_257" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "СчетФактура_IС_227" on "СчетФактура" ("Сотрудник");

ALTER TABLE "ТоварНаСкладе"
	ADD CONSTRAINT "ТоварНаСклад_1456" FOREIGN KEY ("Товар") REFERENCES "Товар" ("primaryKey");

CREATE INDEX "ТоварНаСклад_9279" on "ТоварНаСкладе" ("Товар");

ALTER TABLE "ТоварНаСкладе"
	ADD CONSTRAINT "ТоварНаСклад_8011" FOREIGN KEY ("Склад") REFERENCES "Склад" ("primaryKey");

CREATE INDEX "ТоварНаСклад_2552" on "ТоварНаСкладе" ("Склад");

ALTER TABLE "Товар"
	ADD CONSTRAINT "Товар_FТЧСчФа_5478" FOREIGN KEY ("ТЧСчФактуры") REFERENCES "ТЧСчФактуры" ("primaryKey");

CREATE INDEX "Товар_IТЧСчФа_3109" on "Товар" ("ТЧСчФактуры");

ALTER TABLE "Товар"
	ADD CONSTRAINT "Товар_FЗапись_7862" FOREIGN KEY ("ЗаписьВНакл") REFERENCES "ЗаписьВНакл" ("primaryKey");

CREATE INDEX "Товар_IЗапись_2386" on "Товар" ("ЗаписьВНакл");

ALTER TABLE "Товар"
	ADD CONSTRAINT "Товар_FКатего_4836" FOREIGN KEY ("КатегорияТовара") REFERENCES "КатегорияТовара" ("primaryKey");

CREATE INDEX "Товар_IКатего_4992" on "Товар" ("КатегорияТовара");

ALTER TABLE "Заказ"
	ADD CONSTRAINT "Заказ_FЦенаТов_98" FOREIGN KEY ("ЦенаТовара") REFERENCES "ЦенаТовара" ("primaryKey");

CREATE INDEX "Заказ_IЦенаТов_849" on "Заказ" ("ЦенаТовара");

ALTER TABLE "Заказ"
	ADD CONSTRAINT "Заказ_FСотруд_1724" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Заказ_IСотрудник" on "Заказ" ("Сотрудник");

ALTER TABLE "ЦенаТовара"
	ADD CONSTRAINT "ЦенаТовара_FТ_9564" FOREIGN KEY ("Товар") REFERENCES "Товар" ("primaryKey");

CREATE INDEX "ЦенаТовара_IТ_4184" on "ЦенаТовара" ("Товар");

ALTER TABLE "ЦенаТовара"
	ADD CONSTRAINT "ЦенаТовара_FТЧ_824" FOREIGN KEY ("ТЧСчФактуры") REFERENCES "ТЧСчФактуры" ("primaryKey");

CREATE INDEX "ЦенаТовара_IТ_9398" on "ЦенаТовара" ("ТЧСчФактуры");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


