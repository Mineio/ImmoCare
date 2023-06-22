/*--------------------------------------------------------------
DBProjektScript
Dieses Script erstellt die Datenbank, welche wir für unser ImmoCare Projekt benötigen.
Author: Noel Keller 
Date:  30.3.23
Version		Date		Who 	Changes
1.0         30.3.23    	Kel 	created
1.1			15.4.23	   	RV		removed TOrte, changed TUsers and TLiegenschaften, added TLiegenschaftsUser
1.2			08.05.23	RV		changed LiegTyp, LiegAusbaustandart, LiegZustand
1.3			21.06.23	RV		removed TUser, added TWohnungen, added LiegEinnahmen and Lieg
Copyright © 2023  Noel Keller Kantonsschule Frauenfeld, Switzerland. All rights reserved
----------------------------------------------------------------*/

USE SC_ImmoCareDB ;

-- -----------------------------------------------------
-- Table TLiegenschaften
-- -----------------------------------------------------
DROP TABLE IF EXISTS TLiegenschaften ;

CREATE TABLE TLiegenschaften (
  LiegNR INT UNSIGNED NOT NULL AUTO_INCREMENT,
  LiegTyp ENUM('Eckhaus', 'Eigentumswohnung', 'Einfamilienhaus', 'Gewerbeliegenschaft', 'Hof', 'Loft', 'Mehrfamilienhaus', 'MFH', 'Reiheneinfamilienhaus') NOT NULL,
  LiegBezeichnung VARCHAR(100) NOT NULL,
  LiegBaujahr CHAR(4) NOT NULL,
  LiegGrundstückfläche INT UNSIGNED NOT NULL,
  LiegNutzfläche INT UNSIGNED NOT NULL,
  LiegAusbaustandart ENUM('einfach', 'normal', 'luxuriös', 'rustikal') NULL,
  LiegZustand ENUM('normal', 'neuwertig', 'sanierungsbedürftig', 'renoviert') NULL,
  LiegZusatz VARCHAR(50) NULL,
  LiegEinahmen INT UNSIGNED NULL,
  LiegAusgaben INT UNSIGNED NULL,
  PRIMARY KEY (LiegNR))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table TWohnungen
-- -----------------------------------------------------
DROP TABLE IF EXISTS TWohnungen ;

CREATE TABLE TWohnungen (
  WohnID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  WohnBezeichnung VARCHAR(100) NOT NULL,
  WohnEinahmen INT UNSIGNED NULL,
  WohnAusgaben INT UNSIGNED NULL,
  TLiegenschaften_LiegNR INT UNSIGNED NOT NULL,
  WohnAusbaustandart ENUM('einfach', 'normal', 'luxuriös', 'rustikal') NULL,
  WohnZustand ENUM('normal', 'neuwertig', 'sanierungsbedürftig', 'renoviert') NULL,
  WohnNutzfläche INT UNSIGNED NOT NULL,
  PRIMARY KEY (WohnID, TLiegenschaften_LiegNR))
ENGINE = InnoDB;

alter table TLiegenschaften auto_increment = 1000;
alter table TWohnungen auto_increment = 100;