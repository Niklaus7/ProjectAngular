-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2017 at 07:00 AM
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

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobApplyActivity`(`In_UserID` int(3), `In_JobPostID` int(3), `In_ApplyDate` DATE, `In_JobApplyStatus` varchar(10))
BEGIN
		INSERT INTO jobapplyactivity (`UserID`, `JobPostID`, `ApplyDate`, `JobApplyStatus`) 
        VALUES (`In_UserID`, `In_JobPostID`, `In_ApplyDate`, `In_JobApplyStatus`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobPost`(IN `In_JobPostedBy` INT(2), IN `In_JobTitle` VARCHAR(20), IN `In_JobDescription` VARCHAR(100), IN `In_NoOfVacancy` INT(2), IN `In_MinExp` INT(2), IN `In_MaxExp` INT(2), IN `In_MinSal` INT(2), IN `In_MaxSal` INT(2), IN `In_JobLocation` VARCHAR(40), IN `In_JobIndustry` VARCHAR(40), IN `In_JobFunctionalArea` VARCHAR(40), IN `In_UGQual` VARCHAR(50), IN `In_PGQual` VARCHAR(50), IN `In_JobPostDate` DATE, IN `In_JobActive` VARCHAR(10), IN `In_JobAprrovedstatus` VARCHAR(10))
BEGIN
		INSERT INTO jobpost( `JobPostedBy`, `JobTitle`, `JobDescription`, `NoOfVacancy`, `MinExp`, `MaxExp`, `MinSal`, `MaxSal`, `JobLocation`, `JobIndustry`, `JobFunctionalArea`, `UGQual`, `PGQual`, `JobPostDate`, `JobActive`, `JobAprrovedstatus`) 
        VALUES ( In_JobPostedBy, In_JobTitle, In_JobDescription, In_NoOfVacancy, In_MinExp, In_MaxExp, In_MinSal, In_MaxSal, In_JobLocation, In_JobIndustry, In_JobFunctionalArea, In_UGQual, In_PGQual, In_JobPostDate, In_JobActive, In_JobAprrovedstatus);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobPostCompany`(In_JobPostID int(2), In_CompanyName varchar(10), In_AboutCompany varchar(20), In_CompanyWebSite varchar(10), In_CompanyAddress varchar(10), In_ContactPersonName varchar(10), In_ContactPersonPhNo int(10))
BEGIN
		INSERT INTO company(`JobPostID`, `CompanyName`, `AboutCompany`, `CompanyWebSite`, `CompanyAddress`, `ContactPersonName`, `ContactPersonPhNo`) 
        VALUES (In_JobPostID, In_CompanyName, In_AboutCompany, In_CompanyWebSite, In_CompanyAddress, In_ContactPersonName, In_ContactPersonPhNo);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobPostSkillSet`(IN `In_JobPostID` INT(2), IN `In_Skill` VARCHAR(50))
BEGIN
		INSERT INTO jobpostskillset (`JobPostID`, `SkillSetID`) 
        VALUES (In_JobPostID, In_Skill);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerEducatinDetails`(`In_JobSeekerID` int(5), `In_HighestQualification` varchar(10),  `In_InstituteName`varchar(15), `In_CourseType`varchar(10), `In_PassoutYear`varchar(10), `In_CPI` DOUBLE(4,2))
BEGIN
		INSERT INTO jobseekereducatindetails (`JobSeekerID`, `HighestQualification`, `InstituteName`, `CourseType`, `PassoutYear`, `CPI`) 
        VALUES (`In_JobSeekerID`, `In_HighestQualification`,  `In_InstituteName`, `In_CourseType`, `In_PassoutYear`, `In_CPI`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerExperienceDetails`(IN `In_JobSeekerID` INT(5), IN `In_TotalExp` VARCHAR(15), IN `In_Salary` INT(10), IN `In_JobTitle` VARCHAR(15), IN `In_JobDescripion` VARCHAR(20), IN `In_CompanyName` VARCHAR(10), IN `In_Industry` VARCHAR(10), IN `In_Department` VARCHAR(10), IN `In_JobFromDate` VARCHAR(10), IN `In_JobToDate` VARCHAR(10))
BEGIN
		INSERT INTO jobseekerexperiencedetails (`JobSeekerID`, `TotalExp`, `Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) 
        VALUES (`In_JobSeekerID`, `In_TotalExp`, `In_Salary`, `In_JobTitle`, `In_JobDescripion`, `In_CompanyName`, `In_Industry`, `In_Department`, `In_JobFromDate`, `In_JobToDate`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerProfileInfo`(IN `In_JobSeekerID` INT(5), IN `In_FirstName` VARCHAR(15), IN `In_DOB` DATE, IN `In_Address` VARCHAR(20), IN `In_Location` VARCHAR(10), IN `In_Gender` VARCHAR(10), IN `In_Contact` INT(10), IN `In_PassportNo` VARCHAR(15), IN `In_Email` VARCHAR(15), IN `In_JobSeekerType` VARCHAR(10))
BEGIN
		INSERT INTO jobseekerprofile (`JobSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `JobSeekerType`) 
        VALUES (`In_JobSeekerID`, `In_FirstName`, `In_DOB`, `In_Address`, `In_Location`, `In_Gender`, `In_Contact`, `In_PassportNo`, `In_Email`, `In_JobSeekerType`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerResume`(`In_JobSeekerID` int(5), `In_Resume` varchar(40))
BEGIN
		INSERT INTO jobseekerresume (`JobSeekerID`, `Resume`) 
        VALUES (`In_JobSeekerID`, `In_Resume`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerSkillSet`(IN `In_JobSeekerID` INT(5), IN `In_SkillSetID` VARCHAR(50), IN `In_SkillExp` VARCHAR(50))
BEGIN
		INSERT INTO jobseekerskillset (`JobSeekerID`, `SkillSetID`,`SkillExp`) 
        VALUES (`In_JobSeekerID`, `In_SkillSetID`,`In_SkillExp`);
       
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `CompanyID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostID` int(11) NOT NULL,
  `CompanyName` varchar(20) NOT NULL,
  `AboutCompany` varchar(25) NOT NULL,
  `CompanyWebSite` varchar(45) NOT NULL,
  `CompanyAddress` varchar(20) NOT NULL,
  `ContactPersonName` varchar(10) NOT NULL,
  `ContactPersonPhNo` int(10) NOT NULL,
  PRIMARY KEY (`CompanyID`),
  KEY `JobPostID_idx` (`JobPostID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`CompanyID`, `JobPostID`, `CompanyName`, `AboutCompany`, `CompanyWebSite`, `CompanyAddress`, `ContactPersonName`, `ContactPersonPhNo`) VALUES
(1, 1, 'obstin', 'company', 'www.obstin', 'kop', 'pooja', 1234567890),
(24, 25, 'p', 'p', 'p', 'p', 'p', 1234),
(25, 28, 'njn', 'kkkmk', 'mk', 'kkk', 'kmm', 466612656),
(26, 29, 'pp', 'pp', 'pp', 'pp', 'pp', 2147483647),
(27, 26, 'pm', 'pm', 'pm', 'pm', 'pm', 123),
(28, 27, 'pml', 'pml', 'pml', 'pml', 'pml', 12345),
(29, 30, 'ABC', 'ABC', 'ABC', 'ABC', 'ABC', 0),
(30, 31, 'LLL', 'LLL', 'L', 'L', 'L', 0),
(31, 32, 'n', 'n', 'nn', 'jn', 'jn', 0),
(32, 33, 'dnj', 'nnjn', 'n', 'j', 'n', 0),
(33, 34, 'dnj', 'nnjn', 'n', 'j', 'n', 0),
(34, 35, 'dnj', 'nnjn', 'n', 'j', 'n', 0),
(35, 36, 'NHJKH', 'JJKKHH', 'KHKJHK', 'KJKHKHK', 'LJOL.', 0),
(36, 37, 'pm', 'pm', 'pm', 'pm', 'pm', 0),
(37, 38, 'oo', 'oo', 'ooo', 'ooo', 'ooo', 0);

-- --------------------------------------------------------

--
-- Table structure for table `jobapplyactivity`
--

CREATE TABLE IF NOT EXISTS `jobapplyactivity` (
  `JobApplyActivityID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `JobPostID` int(11) NOT NULL,
  `ApplyDate` date NOT NULL,
  `JobApplyStatus` varchar(10) NOT NULL,
  PRIMARY KEY (`JobApplyActivityID`),
  KEY `UserID_idx` (`UserID`),
  KEY `JobPostID_idx` (`JobPostID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `jobapplyactivity`
--

INSERT INTO `jobapplyactivity` (`JobApplyActivityID`, `UserID`, `JobPostID`, `ApplyDate`, `JobApplyStatus`) VALUES
(1, 3, 1, '2017-09-04', 'yes'),
(2, 4, 1, '2017-09-22', 'yes'),
(3, 5, 25, '2017-09-28', 'yes'),
(4, 10, 26, '2017-09-22', 'yes'),
(5, 12, 27, '2017-09-12', 'yes'),
(6, 12, 26, '2017-09-04', 'yes'),
(7, 11, 25, '2017-09-04', 'yes'),
(8, 12, 25, '2017-09-06', '');

-- --------------------------------------------------------

--
-- Table structure for table `jobinterview`
--

CREATE TABLE IF NOT EXISTS `jobinterview` (
  `JobInterviewID` int(11) NOT NULL AUTO_INCREMENT,
  `JobApplySelectedStatusId` int(11) NOT NULL,
  `InterviewDate` date NOT NULL,
  `JobInterviewStatus` varchar(10) NOT NULL,
  PRIMARY KEY (`JobInterviewID`),
  KEY `JobApplySelectedStatusId_idx` (`JobApplySelectedStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `joblocation`
--

CREATE TABLE IF NOT EXISTS `joblocation` (
  `JobLocationID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostID` int(11) NOT NULL,
  `JobCity` varchar(10) NOT NULL,
  `JobState` varchar(10) NOT NULL,
  `JobCountry` varchar(10) NOT NULL,
  PRIMARY KEY (`JobLocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `jobpost`
--

CREATE TABLE IF NOT EXISTS `jobpost` (
  `JobPostID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostedBy` int(11) NOT NULL,
  `JobTitle` varchar(20) NOT NULL,
  `JobDescription` varchar(45) NOT NULL,
  `NoOfVacancy` int(2) NOT NULL,
  `MinExp` int(2) NOT NULL,
  `MaxExp` int(2) NOT NULL,
  `MinSal` int(2) NOT NULL,
  `MaxSal` int(2) NOT NULL,
  `JobLocation` varchar(40) NOT NULL,
  `JobIndustry` varchar(40) NOT NULL,
  `JobFunctionalArea` varchar(40) NOT NULL,
  `UGQual` varchar(50) NOT NULL,
  `PGQual` varchar(50) NOT NULL,
  `JobPostDate` date NOT NULL,
  `JobActive` varchar(10) NOT NULL,
  `JobAprrovedstatus` char(1) NOT NULL,
  PRIMARY KEY (`JobPostID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `jobpost`
--

INSERT INTO `jobpost` (`JobPostID`, `JobPostedBy`, `JobTitle`, `JobDescription`, `NoOfVacancy`, `MinExp`, `MaxExp`, `MinSal`, `MaxSal`, `JobLocation`, `JobIndustry`, `JobFunctionalArea`, `UGQual`, `PGQual`, `JobPostDate`, `JobActive`, `JobAprrovedstatus`) VALUES
(1, 1, 'db designer', 'db', 12, 1, 2, 2, 3, 'Mumbai\n   ', ' IT hardware/software', 'sql', 'btech', 'M.tech', '2017-09-22', 'Active', 'y'),
(25, 1, 'phpdevlpoer', 'db', 12, 2, 2, 3, 2, 'Pune\n                                   ', 'IT hardware/software\n                   ', 'sql', 'btech', 'M.tech', '2017-09-22', 'Active', 'y'),
(26, 2, 'WebDesigner', 'web', 12, 1, 2, 1, 2, 'pune', 'it', 'sql', 'btech', 'M.tech', '2017-09-05', 'active', 'y'),
(27, 2, 'WebDesigner level 2', 'web', 515, 2, 5, 23, 56, 'pune', 'it', 'sql', 'btech', 'M.tech', '2017-09-05', 'active', 'y'),
(28, 1, 'mkmkm', 'db', 554, 1, 0, 3, 3, 'Bangolre\n                               ', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.E,B.Sc,btech', 'M.tech,m.e.', '2017-09-24', 'Active', 'y'),
(29, 1, 'java developer', 'db', 45, 2, 2, 3, 3, 'Pune\n                                   ', 'Db Design\n                              ', 'Programming\n                            ', 'B.E', 'M.tech,M.ca', '2017-09-26', 'Active', 'y'),
(30, 1, 'cloud admin', 'db', 121, 1, 1, 3, 3, 'Bangolre\n                               ', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.Sc', 'M.B.A', '2017-09-26', 'Active', 'y'),
(31, 1, 'NNN', 'db', 12, 2, 2, 3, 3, 'Pune\n                                   ', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.Sc', 'M.B.A', '2017-09-26', 'Active', 'y'),
(32, 1, 'jijijijoijoi', 'db', 548, 1, 1, 2, 3, 'Pune\n                                   ', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.Sc', 'M.B.A', '2017-09-26', 'Active', 'y'),
(33, 1, 'mvkmdmvkd', 'db', 555, 1, 0, 2, 3, 'Array', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.E', 'M.B.A', '2017-09-26', 'Active', 'y'),
(34, 1, 'mvkmdmvkd', 'db', 555, 1, 0, 2, 3, 'Array', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.E', 'M.B.A', '2017-09-26', 'Active', 'y'),
(35, 1, 'mvkmdmvkd', 'db', 555, 1, 0, 2, 3, 'Mumbai\n                                 ', 'DB Architecture\n                        ', 'Programming\n                            ', 'B.E', 'M.B.A', '2017-09-26', 'Active', 'y'),
(36, 1, 'bhjbjhb', 'db', 44, 1, 1, 2, 2, 'Pune\n                                   ', 'IT hardware/software\n                   ', 'Programming\n                            ', 'B.E', 'M.tech', '2017-09-26', 'Active', 'y'),
(37, 1, 'QA Analyst', 'db', 12, 0, 1, 3, 3, 'Mumbai\n                                 ', 'IT hardware/software\n                   ', 'Programming\n                            ', 'B.Sc', 'M.B.A', '2017-10-01', 'Active', 'y'),
(38, 1, 'Testing', 'db', 12, 2, 2, 3, 3, 'Pune,Mumbai,Bangolre', 'IT hardware/software\n                   ', 'Programming\n                            ', 'B.Sc,B.E', 'M.tech,M.B.A', '2017-10-01', 'Active', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `jobpostskillset`
--

CREATE TABLE IF NOT EXISTS `jobpostskillset` (
  `JobPostSkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostID` int(11) NOT NULL,
  `SkillSetID` varchar(50) NOT NULL,
  PRIMARY KEY (`JobPostSkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `jobpostskillset`
--

INSERT INTO `jobpostskillset` (`JobPostSkillSetID`, `JobPostID`, `SkillSetID`) VALUES
(38, 1, 'html,php,angular2,c++'),
(39, 28, 'html,php,angular2,c++'),
(40, 29, 'jav,j2ee,javasacrpt'),
(41, 26, 'html'),
(42, 27, 'php'),
(43, 25, 'html'),
(44, 30, 'jav'),
(45, 31, 'html,angular2'),
(46, 32, 'html,php'),
(47, 33, 'php'),
(48, 34, 'php'),
(49, 35, 'php'),
(50, 36, 'html,BJBVJFJ'),
(51, 37, 'html,php,angular2'),
(52, 38, 'jav,html,angular2,php');

-- --------------------------------------------------------

--
-- Table structure for table `jobqulaification`
--

CREATE TABLE IF NOT EXISTS `jobqulaification` (
  `JobQualificationID` int(11) NOT NULL AUTO_INCREMENT,
  `JobQualification` varchar(20) NOT NULL,
  `QualificationType` varchar(10) NOT NULL,
  PRIMARY KEY (`JobQualificationID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `jobqulaification`
--

INSERT INTO `jobqulaification` (`JobQualificationID`, `JobQualification`, `QualificationType`) VALUES
(1, 'B.E', 'Bachelor '),
(2, 'M.tech', 'Master'),
(3, 'B.Sc', 'Bachelor '),
(4, 'M.B.A', 'Master');

-- --------------------------------------------------------

--
-- Table structure for table `jobrole`
--

CREATE TABLE IF NOT EXISTS `jobrole` (
  `JobRoleID` int(11) NOT NULL AUTO_INCREMENT,
  `JobRoleName` varchar(20) NOT NULL,
  PRIMARY KEY (`JobRoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `jobseekereducatindetails`
--

CREATE TABLE IF NOT EXISTS `jobseekereducatindetails` (
  `JobSeekerEducatinDetailsID` int(11) NOT NULL AUTO_INCREMENT,
  `JobSeekerID` int(11) NOT NULL,
  `HighestQualification` varchar(15) NOT NULL,
  `InstituteName` varchar(10) NOT NULL,
  `CourseType` varchar(20) NOT NULL,
  `PassoutYear` int(11) NOT NULL,
  `CPI` varchar(11) NOT NULL,
  PRIMARY KEY (`JobSeekerEducatinDetailsID`),
  KEY `UserID_idx` (`JobSeekerID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `jobseekereducatindetails`
--

INSERT INTO `jobseekereducatindetails` (`JobSeekerEducatinDetailsID`, `JobSeekerID`, `HighestQualification`, `InstituteName`, `CourseType`, `PassoutYear`, `CPI`) VALUES
(43, 3, 'MTECH', 'wce', 'Full Time', 2016, '8.9'),
(44, 4, 'MTECH', 'wce', 'Full Time', 2016, '8.9'),
(45, 5, 'MTECH', 'wce', 'Full Time', 2016, '8.9'),
(46, 10, 'MTECH', 'wce', 'Full Time', 2016, '8.9'),
(47, 11, 'MTECH', 'wce', 'Full Time', 2016, '8.9'),
(48, 12, 'MTECH', 'wce', 'Full Time', 2016, '8.9'),
(49, 13, 'MTECH', 'pp', 'Full Time', 2016, '89'),
(50, 14, 'MTECH', 'qq', 'Full Time', 2016, '98');

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerexperiencedetails`
--

CREATE TABLE IF NOT EXISTS `jobseekerexperiencedetails` (
  `JobSeekerExpID` int(11) NOT NULL AUTO_INCREMENT,
  `JobSeekerID` int(11) NOT NULL,
  `TotalExp` varchar(50) NOT NULL,
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `jobseekerexperiencedetails`
--

INSERT INTO `jobseekerexperiencedetails` (`JobSeekerExpID`, `JobSeekerID`, `TotalExp`, `Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) VALUES
(25, 4, '2Year-1Month', '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(26, 5, '2Year-1Month', '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(27, 10, '2Year-1Month', '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(28, 13, '1Year-2Month', '2', 'pp', 'pp', 'pp', 'Industry0', 'Department', 'Jan-2017', 'Jan-2017'),
(29, 14, '1Year-1Month', '23', 'qq', 'q', 'qq', 'Industry2', 'Department', 'Nov-2015', 'Dec-2015'),
(30, 14, '1Year-2Month', '89', 'll', 'l', 'l', 'Industry1', 'Department', 'Dec-2015', 'Dec-2015');

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerprofile`
--

CREATE TABLE IF NOT EXISTS `jobseekerprofile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `JobSeekerID` int(11) NOT NULL,
  `FirstName` varchar(10) NOT NULL,
  `DOB` date NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Location` varchar(10) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Contact` int(10) NOT NULL,
  `PassportNo` varchar(15) NOT NULL,
  `Email` varchar(15) NOT NULL,
  `JobSeekerType` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `JobSeekerID_idx` (`JobSeekerID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=55 ;

--
-- Dumping data for table `jobseekerprofile`
--

INSERT INTO `jobseekerprofile` (`id`, `JobSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `JobSeekerType`) VALUES
(47, 3, 'pooja', '1994-04-12', 'kop', 'kop', 'Female', 1564644, '4njn', 'pooja@gmial.com', 'Freshers'),
(48, 4, 'pooja', '1994-04-12', 'kop', 'kop', 'Female', 1564644, '4njn', 'pooja@gmial.com', 'Experience'),
(49, 5, 'pooja', '1994-04-12', 'kop', 'kop', 'Female', 1564644, '4njn', 'pooja@gmial.com', 'Experience'),
(50, 10, 'pooja', '1994-04-12', 'kop', 'kop', 'Female', 1564644, '4njn', 'pooja@gmial.com', 'Experience'),
(51, 11, 'pooja', '1994-04-12', 'kop', 'kop', 'Female', 1564644, '4njn', 'pooja@gmial.com', 'Freshers'),
(52, 12, 'pooja', '1994-04-12', 'kop', 'kop', 'Female', 1564644, '4njn', 'pooja@gmial.com', 'Freshers'),
(53, 13, 'pp', '1994-05-12', 'pune', 'pune', 'Female', 123456123, '123pp123', 'pp@gmail.com', 'Experience'),
(54, 14, 'qq', '2001-04-12', 'qq', 'qq', 'Female', 1454, '5554m545', 'qq@gmail.com', 'Experience');

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerprofileimage`
--

CREATE TABLE IF NOT EXISTS `jobseekerprofileimage` (
  `JobSeekerProfileImageID` int(11) NOT NULL AUTO_INCREMENT,
  `ProfileImage` varchar(45) NOT NULL,
  `JobSeekerID` int(11) NOT NULL,
  PRIMARY KEY (`JobSeekerProfileImageID`),
  KEY `JobSeekerID_idx` (`JobSeekerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerresume`
--

CREATE TABLE IF NOT EXISTS `jobseekerresume` (
  `JobSeekerResumeID` int(11) NOT NULL AUTO_INCREMENT,
  `JobSeekerID` int(11) NOT NULL,
  `Resume` varchar(45) NOT NULL,
  PRIMARY KEY (`JobSeekerResumeID`),
  KEY `JobSeekerID_idx` (`JobSeekerID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `jobseekerresume`
--

INSERT INTO `jobseekerresume` (`JobSeekerResumeID`, `JobSeekerID`, `Resume`) VALUES
(32, 3, 'JobSeeker_Resume/59d07c4691bcf.doc'),
(33, 4, 'JobSeeker_Resume/59d07cbde780c.doc'),
(34, 5, 'JobSeeker_Resume/59d07cea7a735.doc'),
(35, 10, 'JobSeeker_Resume/59d07cf573827.doc'),
(36, 11, 'JobSeeker_Resume/59d07d199c8de.doc'),
(37, 12, 'JobSeeker_Resume/59d07d2f71d0c.doc'),
(38, 13, 'JobSeeker_Resume/59d081b496b1c.doc'),
(39, 14, 'JobSeeker_Resume/59d082ed1f8a5.doc');

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerskillset`
--

CREATE TABLE IF NOT EXISTS `jobseekerskillset` (
  `JobSeekerSkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `JobSeekerID` int(11) NOT NULL,
  `SkillSetID` varchar(50) NOT NULL,
  `SkillExp` varchar(50) NOT NULL,
  PRIMARY KEY (`JobSeekerSkillSetID`),
  KEY `SkillSetID_idx` (`SkillSetID`),
  KEY `JobSeekerID_idx` (`JobSeekerID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `jobseekerskillset`
--

INSERT INTO `jobseekerskillset` (`JobSeekerSkillSetID`, `JobSeekerID`, `SkillSetID`, `SkillExp`) VALUES
(37, 3, 'java,c', '0,0'),
(38, 4, 'java,c', '1,2'),
(39, 5, 'java,c', '1,2'),
(40, 10, 'java,c', '1,2'),
(41, 11, 'java,c', '1,2'),
(42, 12, 'java,c', '1,2'),
(43, 13, 'java', '2'),
(44, 14, 'c', '2');

-- --------------------------------------------------------

--
-- Table structure for table `jobtype`
--

CREATE TABLE IF NOT EXISTS `jobtype` (
  `JobTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `JobType` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`JobTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `messageboard`
--

CREATE TABLE IF NOT EXISTS `messageboard` (
  `MessageBoardID` int(11) NOT NULL AUTO_INCREMENT,
  `SenderID` int(11) NOT NULL,
  `ReceiverID` int(11) NOT NULL,
  `Message` varchar(45) NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`MessageBoardID`),
  KEY `senderID_idx` (`SenderID`),
  KEY `ResciverId_idx` (`ReceiverID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `registeruserinforamtion`
--

CREATE TABLE IF NOT EXISTS `registeruserinforamtion` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `IndustryType` varchar(20) NOT NULL,
  `CompanyName` varchar(20) NOT NULL,
  `CompanyRegisteredAddress` varchar(40) NOT NULL,
  `CompanyURL` varchar(45) NOT NULL,
  `CompanyRegistrationNo` varchar(15) NOT NULL,
  `IncorporationDate` date NOT NULL,
  `IncorporationCertificate` varchar(45) NOT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `State` varchar(45) NOT NULL,
  `CompanyEmailId` varchar(45) NOT NULL,
  `CompanyLogo` varchar(45) NOT NULL,
  `PANNo` varchar(45) NOT NULL,
  `TANNo` varchar(45) NOT NULL,
  `AuthorizedPersonName` varchar(45) NOT NULL,
  `AuthorizedPersonEmail` varchar(45) NOT NULL,
  `AuthorizedPersonContact` varchar(45) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `skillset`
--

CREATE TABLE IF NOT EXISTS `skillset` (
  `SkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillSetName` varchar(10) NOT NULL,
  PRIMARY KEY (`SkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `skillset`
--

INSERT INTO `skillset` (`SkillSetID`, `SkillSetName`) VALUES
(1, 'c'),
(2, 'jav'),
(3, 'html'),
(4, 'php'),
(5, 'angular2');

-- --------------------------------------------------------

--
-- Table structure for table `useraccount`
--

CREATE TABLE IF NOT EXISTS `useraccount` (
  `UserAccountID` int(11) NOT NULL AUTO_INCREMENT,
  `UserTypeID` int(11) NOT NULL,
  `FirstName` varchar(15) NOT NULL,
  `UserAccountcol` varchar(15) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Gender` char(1) NOT NULL,
  `ContactNo` int(11) NOT NULL,
  `RegisterationDate` date NOT NULL,
  `IsActive` char(1) NOT NULL,
  `ApprovedStatus` char(1) NOT NULL,
  PRIMARY KEY (`UserAccountID`),
  KEY `UserTypeID_idx` (`UserTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `usertype`
--

CREATE TABLE IF NOT EXISTS `usertype` (
  `UserTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `UserRoleName` varchar(20) NOT NULL,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`UserTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `JobPostID` FOREIGN KEY (`JobPostID`) REFERENCES `jobpost` (`JobPostID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `jobinterview`
--
ALTER TABLE `jobinterview`
  ADD CONSTRAINT `JobApplySelectedStatusId` FOREIGN KEY (`JobApplySelectedStatusId`) REFERENCES `jobapplyactivity` (`JobApplyActivityID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `messageboard`
--
ALTER TABLE `messageboard`
  ADD CONSTRAINT `ResciverId` FOREIGN KEY (`ReceiverID`) REFERENCES `useraccount` (`UserAccountID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `senderID` FOREIGN KEY (`SenderID`) REFERENCES `useraccount` (`UserAccountID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `useraccount`
--
ALTER TABLE `useraccount`
  ADD CONSTRAINT `UserTypeID` FOREIGN KEY (`UserTypeID`) REFERENCES `usertype` (`UserTypeID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
