/*--------------------------------------------------------------
DBProjektScript
Dieses Script erstellt die Datenbank, welche wir für unser ImmoCare Projekt benötigen.
Author: Noel Keller 
Date:  30.3.23
Version		Date		Who 	Changes
1.0         30.3.23    Kel 	created
Copyright © 2018  Noel Keller Kantonsschule Frauenfeld, Switzerland. All rights reserved
----------------------------------------------------------------*/
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `TOrte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TOrte` ;

CREATE TABLE IF NOT EXISTS `TOrte` (
  `OrtORNP` INT NOT NULL,
  `OrtAdresse` VARCHAR(25) NOT NULL,
  `OrtOrtschaft` VARCHAR(30) NOT NULL,
  `OrtKanton` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`OrtORNP`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TImmobilienverwalter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TImmobilienverwalter` ;

CREATE TABLE IF NOT EXISTS `TImmobilienverwalter` (
  `VerwId` INT NOT NULL AUTO_INCREMENT,
  `VerwVorname` VARCHAR(15) NOT NULL,
  `VerwNachname` VARCHAR(15) NOT NULL,
  `VerwNr` VARCHAR(13) NOT NULL,
  `VerwMail` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`VerwId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TImmobilien`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TImmobilien` ;

CREATE TABLE IF NOT EXISTS `TImmobilien` (
  `ImmoId` INT NOT NULL AUTO_INCREMENT,
  `ImmoGrundstückNr` VARCHAR(10) NOT NULL,
  `ImmoBezeichnung` VARCHAR(150) NOT NULL,
  `ImmoAusbaustandart` VARCHAR(45) NOT NULL,
  `ImmoZustand` VARCHAR(45) NOT NULL,
  `ImmoAnzahl` DECIMAL(3,1) NOT NULL,
  `ImmoTyp` VARCHAR(25) NOT NULL,
  `ImmoGesammtwert` VARCHAR(45) NOT NULL,
  `TImmobilienverwalter_VerwId` INT NOT NULL,
  `TOrte_OrtORNP` INT NOT NULL,
  PRIMARY KEY (`ImmoId`))
ENGINE = InnoDB;


