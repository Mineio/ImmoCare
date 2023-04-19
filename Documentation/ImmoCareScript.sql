/*--------------------------------------------------------------
DBProjektScript
Dieses Script erstellt die Datenbank, welche wir für unser ImmoCare Projekt benötigen.
Author: Noel Keller 
Date:  30.3.23
Version		Date		Who 	Changes
1.0         30.3.23    	Kel 	created
1.1			15.4.23	   	RV		removed TOrte, changed TUsers and TLiegenschaften
Copyright © 2023  Noel Keller Kantonsschule Frauenfeld, Switzerland. All rights reserved
----------------------------------------------------------------*/

USE SC_ImmoCareDB ;


-- -----------------------------------------------------
-- Table TUser
-- -----------------------------------------------------
DROP TABLE IF EXISTS TUser ;

CREATE TABLE TUser (
  UserID INT NOT NULL AUTO_INCREMENT,
  UserEmail VARCHAR(30) NOT NULL,
  UserPasswort VARCHAR(50) NOT NULL,
  PRIMARY KEY (UserID))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table TLiegenschaften
-- -----------------------------------------------------
DROP TABLE IF EXISTS TLiegenschaften ;

CREATE TABLE TLiegenschaften (
  LiegNR CHAR(4) NOT NULL,
  LiegTyp VARCHAR(30) NOT NULL,
  LiegBezeichnung VARCHAR(100) NOT NULL,
  LiegBaujahr Char(4) NOT NULL,
  LiegGrundstückfläche INT UNSIGNED NOT NULL,
  LiegNutzfläche INT UNSIGNED NOT NULL,
  LiegAusbaustandart ENUM('einfach','normal','luxeriös') NOT NULL,
  LiegZustand ENUM('normal','neuwertig','sanierungsbedürftig') NOT NULL,
  LiegZusatz VARCHAR(50),
  TUser_UserID INT NOT NULL,
  PRIMARY KEY (LiegNR))
ENGINE = InnoDB;


