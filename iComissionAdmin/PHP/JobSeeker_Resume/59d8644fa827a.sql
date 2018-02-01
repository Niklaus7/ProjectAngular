-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2017 at 07:11 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `icommissions`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerexperiencedetails`
--

CREATE TABLE IF NOT EXISTS `jobseekerexperiencedetails` (
  `JobSeekerExpID` int(11) NOT NULL AUTO_INCREMENT,
  `JobSeekerID` int(11) NOT NULL,
  `TotalExp_Year` int(10) NOT NULL,
  `TotalExp_Month` int(10) NOT NULL,
  `Salary` varchar(10) NOT NULL,
  `JobTitle` varchar(15) NOT NULL,
  `JobDescripion` varchar(50) NOT NULL,
  `CompanyName` varchar(10) NOT NULL,
  `Industry` varchar(10) NOT NULL,
  `Department` varchar(10) NOT NULL,
  `JobFromDate` varchar(10) NOT NULL,
  `JobToDate` varchar(10) NOT NULL,
  PRIMARY KEY (`JobSeekerExpID`),
  KEY `JobSeekerID_idx` (`JobSeekerID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `jobseekerexperiencedetails`
--

INSERT INTO `jobseekerexperiencedetails` (`JobSeekerExpID`, `JobSeekerID`, `TotalExp_Year`, `TotalExp_Month`, `Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) VALUES
(25, 4, 2, 0, '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(26, 5, 2, 0, '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(27, 10, 2, 0, '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(28, 13, 1, 0, '2', 'pp', 'pp', 'pp', 'Industry0', 'Department', 'Jan-2017', 'Jan-2017'),
(29, 14, 1, 0, '23', 'qq', 'q', 'qq', 'Industry2', 'Department', 'Nov-2015', 'Dec-2015'),
(30, 14, 1, 0, '89', 'll', 'l', 'l', 'Industry1', 'Department', 'Dec-2015', 'Dec-2015'),
(31, 15, 1, 1, '2', 'abc', 'abc', 'abc', 'Industry2', 'Department', 'Aug-2015', 'Aug-2015');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
