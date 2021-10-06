-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 26 oct. 2018 à 14:55
-- Version du serveur :  10.1.32-MariaDB
-- Version de PHP :  5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `essaigprojet`
--

-- --------------------------------------------------------

--
-- Structure de la table `affecter`
--

CREATE TABLE `affecter` (
  `coutTotal` double NOT NULL,
  `Coututilise` double DEFAULT NULL,
  `materiel` varchar(256) DEFAULT NULL,
  `heurepass` time DEFAULT NULL,
  `pourcentAcheve` enum('0%','25','50%','75%','100%') DEFAULT NULL,
  `identificatglob` enum('Tâche achevée','tâche en retard','tâche juste dans le temp') DEFAULT NULL,
  `travailrest` varchar(256) DEFAULT NULL,
  `idemp` int(11) NOT NULL,
  `idtache` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `affecter`
--

INSERT INTO `affecter` (`coutTotal`, `Coututilise`, `materiel`, `heurepass`, `pourcentAcheve`, `identificatglob`, `travailrest`, `idemp`, `idtache`) VALUES
(5000, 0, '2Pc ASUS', '00:00:00', '', '', ' ', 2, 1),
(7000, 0, '', '00:00:00', '', '', ' ', 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `idclient` int(10) UNSIGNED NOT NULL,
  `nomclient` varchar(100) NOT NULL,
  `logincli` varchar(25) NOT NULL,
  `mpcli` varchar(15) DEFAULT NULL,
  `telcli` varchar(18) NOT NULL,
  `mailcli` varchar(50) DEFAULT NULL,
  `nature` enum('Sociéte','Particulier') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`idclient`, `nomclient`, `logincli`, `mpcli`, `telcli`, `mailcli`, `nature`) VALUES
(1, 'VOVOR kossi', 'vovor', 'vovor', '98222222', 'vovorkossi@yahoo.com', ''),
(2, 'KODJO koffi', 'kofa', '12345', 'kofak@yahoo.fr', '98555555', '');

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `idemp` int(10) UNSIGNED NOT NULL,
  `nomemp` varchar(25) NOT NULL,
  `prenomemp` varchar(50) DEFAULT NULL,
  `loginemp` varchar(25) DEFAULT NULL,
  `mpemp` varchar(15) DEFAULT NULL,
  `telemp` varchar(18) NOT NULL,
  `mailemp` varchar(50) DEFAULT NULL,
  `profil` enum('Administrateur','Employe(e)') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employe`
--

INSERT INTO `employe` (`idemp`, `nomemp`, `prenomemp`, `loginemp`, `mpemp`, `telemp`, `mailemp`, `profil`) VALUES
(1, 'ADMIN', 'admin', 'root', 'root', '90000000', 'admin@admin.com', 'Administrateur'),
(2, 'USER', 'user', 'user', 'user', '90333333', 'user@user.com', 'Employe(e)'),
(3, 'FOVI', '', 'fogan', '12345', '87456213', 'fovi@navi.com', 'Employe(e)');

-- --------------------------------------------------------

--
-- Structure de la table `livrable`
--

CREATE TABLE `livrable` (
  `idlivrable` int(10) UNSIGNED NOT NULL,
  `descripliv` varchar(256) NOT NULL,
  `dateAjout` date DEFAULT NULL,
  `fichierjoint` varchar(256) NOT NULL,
  `idtache` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `phases`
--

CREATE TABLE `phases` (
  `idphase` int(10) UNSIGNED NOT NULL,
  `nomphase` varchar(50) NOT NULL,
  `descriptionphase` text,
  `idprojet` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `phases`
--

INSERT INTO `phases` (`idphase`, `nomphase`, `descriptionphase`, `idprojet`) VALUES
(1, 'Phase de test1', 'Phase durant laquelle on réalise les premières test', 1),
(2, 'Phase de test2', 'Phase durant laquelle on réalise les secondes et dernières test', 1),
(3, 'Phase de synthese', 'C\'est une phase de synthèse', 2),
(4, 'phase4', 'phase4', 2),
(6, 'phase 1', 'description de la phase 1', 6),
(7, 'phase 2', 'Descrition de la phase 2', 6);

-- --------------------------------------------------------

--
-- Structure de la table `planification`
--

CREATE TABLE `planification` (
  `idplan` int(10) UNSIGNED NOT NULL,
  `predecesseur` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `nomtacheplan` varchar(100) NOT NULL,
  `numerotacheplan` int(11) NOT NULL,
  `datedebutplan` date NOT NULL,
  `datefinplan` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `planification`
--

INSERT INTO `planification` (`idplan`, `predecesseur`, `idprojet`, `nomtacheplan`, `numerotacheplan`, `datedebutplan`, `datefinplan`) VALUES
(1, 0, 2, '', 0, '0000-00-00', '0000-00-00'),
(2, 2, 2, 'tache1', 1, '2018-08-22', '2018-08-23');

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `idprojet` int(10) UNSIGNED NOT NULL,
  `nomprojet` varchar(70) NOT NULL,
  `descriptionpro` text,
  `datedebutpro` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `etatprojet` enum('En attente','En cours','Cloturé') NOT NULL,
  `typepro` enum('Interne','Externe') DEFAULT NULL,
  `budget` double NOT NULL,
  `idclient` int(11) DEFAULT NULL,
  `idemp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`idprojet`, `nomprojet`, `descriptionpro`, `datedebutpro`, `etatprojet`, `typepro`, `budget`, `idclient`, `idemp`) VALUES
(1, 'Test', 'Ce projet est un test', '2018-08-05 00:00:00.000000', 'En attente', 'Externe', 10000, 1, 1),
(2, 'projetQT', 'Teeeeeeeeeeeeeeeeeeeeeeeeeeeeest', '2018-06-11 00:00:00.000000', 'En attente', 'Interne', 30000, 1, 2),
(3, 'ToujousTest', 'toujours des tests', '2018-02-01 00:00:00.000000', 'En attente', 'Interne', 50000, 2, 2),
(4, 'test4', 'rojet de test', '2018-08-14 00:00:00.000000', 'En attente', 'Externe', 10000, 1, 2),
(5, 'Projet de test', 'projet derealisation', '2018-07-30 00:00:00.000000', 'En attente', 'Externe', 100000, 2, 2),
(6, 'IAI-TOGO', 'projet de fin de formation, partie2', '2018-08-24 00:00:00.000000', 'En cours', 'Interne', 150000000000, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `risque`
--

CREATE TABLE `risque` (
  `idrisq` int(10) UNSIGNED NOT NULL,
  `facteurisq` varchar(256) NOT NULL,
  `probabilite` enum('Minimale','Faible','Moyenne','Elevée','Maximale') NOT NULL,
  `gravite` enum('Négligeable','Significatif','Majeure','Critique','Catastrophique') NOT NULL,
  `actionprop` varchar(256) NOT NULL,
  `idprojet` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tache`
--

CREATE TABLE `tache` (
  `idtache` int(10) UNSIGNED NOT NULL,
  `numero` int(11) NOT NULL,
  `nomtache` varchar(100) NOT NULL,
  `descriptache` varchar(256) NOT NULL,
  `etatTache` enum('En attente','En cours','Cloturé') NOT NULL,
  `idprojet` int(11) DEFAULT NULL,
  `idphase` int(11) DEFAULT NULL,
  `datedebT` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `datefinT` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  `duree` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tache`
--

INSERT INTO `tache` (`idtache`, `numero`, `nomtache`, `descriptache`, `etatTache`, `idprojet`, `idphase`, `datedebT`, `datefinT`, `duree`) VALUES
(1, 1, 'tache1', '', 'En attente', 2, 3, '2018-08-22 05:58:42.231594', '2018-08-23 00:00:00.000000', 2),
(2, 2, 'tache2', 'tache2 de phase fucj', 'En attente', 2, 3, '2018-08-22 05:58:57.966480', '2018-08-28 00:00:00.000000', 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `affecter`
--
ALTER TABLE `affecter`
  ADD PRIMARY KEY (`idemp`,`idtache`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`idclient`);

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`idemp`);

--
-- Index pour la table `livrable`
--
ALTER TABLE `livrable`
  ADD PRIMARY KEY (`idlivrable`);

--
-- Index pour la table `phases`
--
ALTER TABLE `phases`
  ADD PRIMARY KEY (`idphase`);

--
-- Index pour la table `planification`
--
ALTER TABLE `planification`
  ADD PRIMARY KEY (`idplan`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`idprojet`);

--
-- Index pour la table `risque`
--
ALTER TABLE `risque`
  ADD PRIMARY KEY (`idrisq`);

--
-- Index pour la table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`idtache`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `idclient` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `employe`
--
ALTER TABLE `employe`
  MODIFY `idemp` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `livrable`
--
ALTER TABLE `livrable`
  MODIFY `idlivrable` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `phases`
--
ALTER TABLE `phases`
  MODIFY `idphase` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `planification`
--
ALTER TABLE `planification`
  MODIFY `idplan` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `idprojet` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `risque`
--
ALTER TABLE `risque`
  MODIFY `idrisq` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tache`
--
ALTER TABLE `tache`
  MODIFY `idtache` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
