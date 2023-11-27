



CREATE TABLE [Сотрудник] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Emile] VARCHAR(255)  NULL,

	 [Имя] VARCHAR(255)  NULL,

	 [Отчество] VARCHAR(255)  NULL,

	 [ТабелНомер] INT  NULL,

	 [Телефон] VARCHAR(255)  NULL,

	 [Фамилия] VARCHAR(255)  NULL,

	 [Накладная] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Склад] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Номер] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СчетФактура] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаЗаполн] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Заказ] UNIQUEIDENTIFIER  NOT NULL,

	 [Контрагент] UNIQUEIDENTIFIER  NOT NULL,

	 [Склад] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудник] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЗаписьВНакл] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [Цена] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧСчФактуры] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [Сумма] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТоварНаСкладе] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [Склад] UNIQUEIDENTIFIER  NOT NULL,

	 [Товар] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Товар] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ЕдИзм] VARCHAR(255)  NULL,

	 [КодТовара] VARCHAR(255)  NULL,

	 [Название] VARCHAR(255)  NULL,

	 [Описание] VARCHAR(255)  NULL,

	 [ЗаписьВНакл] UNIQUEIDENTIFIER  NOT NULL,

	 [КатегорияТовара] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧСчФактуры] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Контрагент] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Имя] VARCHAR(255)  NULL,

	 [НаимОрг] VARCHAR(255)  NULL,

	 [Отчество] VARCHAR(255)  NULL,

	 [Тип] VARCHAR(9)  NULL,

	 [Фамилия] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СтрокаЗаказа] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [Сумма] FLOAT  NULL,

	 [ЦенаСНалог] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Заказ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаОплаты] DATETIME  NULL,

	 [ДатаОтгрузки] DATETIME  NULL,

	 [Состояние] VARCHAR(10)  NULL,

	 [Сотрудник] UNIQUEIDENTIFIER  NOT NULL,

	 [ЦенаТовара] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЦенаТовара] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОконч] DATETIME  NULL,

	 [Цена] INT  NULL,

	 [Товар] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧСчФактуры] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [КатегорияТовара] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодКатегории] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Накладная] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВремяОтгрузки] DATETIME  NULL,

	 [Примечание] VARCHAR(255)  NULL,

	 [СостНакладной] VARCHAR(10)  NULL,

	 [Сумма] FLOAT  NULL,

	 [Тип] VARCHAR(9)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




