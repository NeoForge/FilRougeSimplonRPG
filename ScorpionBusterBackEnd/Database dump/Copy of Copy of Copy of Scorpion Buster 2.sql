CREATE TABLE [hero] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(255),
  [image] nvarchar(255),
  [story_stage] int,
  [hp] int,
  [attack] int,
  [defense] int,
  [did_i_do] string,
  [passion] int,
  [credit] int,
  [weapon_id] int,
  [armor_id] int
)
GO

CREATE TABLE [items] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(255),
  [description] nvarchar(255),
  [image] nvarchar(255),
  [price] int,
  [owned] boolean,
  [quantity] int,
  [consomable] boolean,
  [isBuyable] boolean,
  [isEquipped] boolean,
  [itemType] string,
  [statValue] int
)
GO

CREATE TABLE [monster] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [item_id] int,
  [name] nvarchar(255),
  [image] nvarchar(255),
  [hp] int,
  [attack] int,
  [defense] int
)
GO

CREATE TABLE [map] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(255),
  [text] nvarchar(255),
  [background] nvarchar(255),
  [pnj_id] int,
  [monster_id] int
)
GO

CREATE TABLE [pnj] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(255),
  [image] nvarchar(255),
  [stage] int,
  [dialog] nvarchar(255),
  [response] nvarchar(255)
)
GO

CREATE TABLE [indice] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [text] string
)
GO
