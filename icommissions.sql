-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2018 at 05:47 AM
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_AssignmentSeekerProfileImage`(IN `In_AssignmentSeekerID` INT(10), IN `In_Profile` VARCHAR(50))
INSERT INTO Assignmentseekerprofileimage (`AssignmentSeekerID`, `ProfileImage`) 
        VALUES (`In_AssignmentSeekerID`, `In_Profile`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_jobinterview`(IN `JobPostId` INT(11), IN `JobseekerId` INT(20), IN `JobInterviewStatus` VARCHAR(10))
INSERT INTO jobinterview (`JobPostId`, `JobseekerId`,`JobInterviewStatus`) 
        VALUES (`JobPostId`, `JobseekerId`,`JobInterviewStatus`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobPost`(IN `In_JobPostedBy` INT(2), IN `In_JobTitle` VARCHAR(20), IN `In_JobDescription` TEXT, IN `In_NoOfVacancy` INT(2), IN `In_MinExp` INT(2), IN `In_MaxExp` INT(2), IN `In_MinSal` INT(2), IN `In_MaxSal` INT(2), IN `In_JobLocation` VARCHAR(40), IN `In_JobIndustry` VARCHAR(40), IN `In_JobFunctionalArea` VARCHAR(40), IN `In_UGQual` VARCHAR(50), IN `In_PGQual` VARCHAR(50), IN `In_JobPostDate` DATE, IN `In_JobActive` VARCHAR(10), IN `In_JobAprrovedstatus` VARCHAR(10), IN `In_lat` VARCHAR(30), IN `In_lng` VARCHAR(30))
BEGIN
		INSERT INTO jobpost( `JobPostedBy`, `JobTitle`, `JobDescription`, `NoOfVacancy`, `MinExp`, `MaxExp`, `MinSal`, `MaxSal`, `JobLocation`, `JobIndustry`, `JobFunctionalArea`, `UGQual`, `PGQual`, `JobPostDate`, `JobActive`, `JobAprrovedstatus`, `lat`, `lng`) 
        VALUES ( In_JobPostedBy, In_JobTitle, In_JobDescription, In_NoOfVacancy, In_MinExp, In_MaxExp, In_MinSal, In_MaxSal, In_JobLocation, In_JobIndustry, In_JobFunctionalArea, In_UGQual, In_PGQual, In_JobPostDate, In_JobActive, In_JobAprrovedstatus, In_lat, In_lng);
       
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerAlert`(IN `In_UserID` INT(11), IN `In_JobAlertName` VARCHAR(50), IN `In_Skills` VARCHAR(50), IN `In_Location` VARCHAR(50), IN `In_MinExp` INT(11), IN `In_MaxExp` INT(11), IN `In_Salary` INT(20), IN `In_Industry` VARCHAR(50), IN `In_Preference` VARCHAR(20))
    NO SQL
BEGIN
        INSERT INTO `jobseekerjobalert`(`UserID`, `JobAlertName`, `Skills`, `Location`, `MinExp`, `MaxExp`, `Salary`, `Industry`,`Preference`) 
        VALUES (`In_UserID`, `In_JobAlertName`, `In_Skills`, `In_Location`, `In_MinExp`, `In_MaxExp`, `In_Salary`, `In_Industry`,`In_Preference`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerAplliedJob`(`In_JobSeekerID` int(5), `In_JobPostID` int(5), `In_ApplyDate` DATE, `In_JobApplyStatus` varchar(10))
BEGIN
		INSERT INTO jobapplyactivity (`UserID`, `JobPostID`, `ApplyDate`, `JobApplyStatus`) 
        VALUES (`In_JobSeekerID`, `In_JobPostID`, `In_ApplyDate`, `In_JobApplyStatus`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerEducatinDetails`(`In_JobSeekerID` int(5), `In_HighestQualification` varchar(10),  `In_InstituteName`varchar(15), `In_CourseType`varchar(10), `In_PassoutYear`varchar(10), `In_CPI` DOUBLE(4,2))
BEGIN
		INSERT INTO jobseekereducatindetails (`JobSeekerID`, `HighestQualification`, `InstituteName`, `CourseType`, `PassoutYear`, `CPI`) 
        VALUES (`In_JobSeekerID`, `In_HighestQualification`,  `In_InstituteName`, `In_CourseType`, `In_PassoutYear`, `In_CPI`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerExperienceDetails`(`In_JobSeekerID` int(5), `In_TotalExp_Year` int(10), `In_TotalExp_Month` int(10),`In_Salary` int(10), `In_JobTitle`varchar(15), `In_JobDescripion`varchar(20), `In_CompanyName`varchar(10), `In_Industry` varchar(10), `In_Department`varchar(10), `In_JobFromDate` varchar(10), `In_JobToDate` varchar(10))
BEGIN
		INSERT INTO jobseekerexperiencedetails (`JobSeekerID`, `TotalExp_Year`,`TotalExp_Month`,`Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) 
        VALUES (`In_JobSeekerID`, `In_TotalExp_Year`, `In_TotalExp_Month`,`In_Salary`, `In_JobTitle`, `In_JobDescripion`, `In_CompanyName`, `In_Industry`, `In_Department`, `In_JobFromDate`, `In_JobToDate`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerProfile`(IN `In_JobSeekerID` INT(5), IN `In_Profile` VARCHAR(50))
BEGIN
		INSERT INTO jobseekerprofileimage (`JobSeekerID`, `ProfileImage`) 
        VALUES (`In_JobSeekerID`, `In_Profile`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerProfileInfo`(IN `In_JobSeekerID` INT(5), IN `In_FirstName` VARCHAR(15), IN `In_DOB` DATE, IN `In_Address` VARCHAR(20), IN `In_Location` VARCHAR(10), IN `In_Gender` VARCHAR(10), IN `In_Contact` INT(10), IN `In_PassportNo` VARCHAR(15), IN `In_Email` VARCHAR(30), IN `In_JobSeekerType` VARCHAR(10))
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_OtherUserRegistration`(IN `Userid` INT(11), IN `AuthPersonName` VARCHAR(45), IN `AuthPersonContact` VARCHAR(45), IN `AuthPersonEmail` VARCHAR(45), IN `IndustryType` VARCHAR(20), IN `ComapnyName` VARCHAR(20), IN `ComapnyAddress` VARCHAR(40), IN `ComapnyEmail` VARCHAR(45), IN `ComapnyWebsite` VARCHAR(45), IN `ComapnyLogo` VARCHAR(45), IN `ComapnyRegNo` VARCHAR(15), IN `IncorporationDate` DATE, IN `IncorporationCertificate` VARCHAR(45), IN `Country` VARCHAR(45), IN `State` VARCHAR(45), IN `PAN` VARCHAR(45), IN `TAN` VARCHAR(45), IN `Lat` VARCHAR(30), IN `Lng` VARCHAR(30), IN `Complete` INT(5), IN `AboutCompany` TEXT, IN `officelocation` VARCHAR(50))
    NO SQL
BEGIN
		INSERT INTO registeruserinforamtion (`UserID`, `AuthorizedPersonName`, `AuthorizedPersonContact`, `AuthorizedPersonEmail`, `IndustryType`, `CompanyName`, `CompanyRegisteredAddress`, `CompanyEmailId`, `CompanyURL`, `CompanyLogo`, `CompanyRegistrationNo`, `IncorporationDate`, `IncorporationCertificate`, `Country`, `State`, `PANNo`, `TANNo`, `Lat`, `Lng`, `ProfileComplete`, `AboutCompany`, `officelocation`) 
        VALUES (`Userid`, `AuthPersonName`, `AuthPersonContact`, `AuthPersonEmail`, `IndustryType`, `ComapnyName`, `ComapnyAddress`, `ComapnyEmail`, `ComapnyWebsite`, `ComapnyLogo`, `ComapnyRegNo`, `IncorporationDate`, `IncorporationCertificate`, `Country`, `State`, `PAN`, `TAN`, `Lat`, `Lng`, `Complete`, `AboutCompany`, `officelocation`);
        
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_PostForumAnswer`(IN `In_ForumQuestionID` INT(10), IN `In_AnswerBy` INT(10), IN `In_AnswerDesc` TEXT, IN `In_Date` DATETIME)
Insert into forumanswer (`ForumQuestionID`, `AnswerBy`, `AnswerDesc`, `Date`)
    values(`In_ForumQuestionID`, `In_AnswerBy`, `In_AnswerDesc`, `In_Date`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_PostForumAnswerComment`(IN `In_ForumQuestionID` INT(10), IN `In_ForumAnswerID` INT(10), IN `In_CommentedBy` INT(10), IN `In_AnswerComment` TEXT, IN `In_CommentDate` DATETIME)
insert into forumanswercomment(`ForumQuestionID`, `ForumAnswerID`, `CommentedBy`, `AnswerComment`, `CommentDate`)
    values(`In_ForumQuestionID`, `In_ForumAnswerID`, `In_CommentedBy`, `In_AnswerComment`, `In_CommentDate`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_PostForumQuestion`(IN `In_QuestionBy` INT(10), IN `In_QuestionTitle` VARCHAR(50), IN `In_QuestionDesc` TEXT, IN `In_TagKeyword` VARCHAR(25), IN `In_QuestionDate` DATETIME, IN `In_LikeCount` INT(10), IN `In_ViewCount` INT(10), IN `In_AnswerCount` INT(10))
INSERT INTO forumquestion (`QuestionBy`, `QuestionTitle`, `QuestionDesc`, `TagKeyword`, `QuestionDate`,`LikeCount`,`ViewCount`,`AnswerCount`) 
        VALUES (`In_QuestionBy`, `In_QuestionTitle`, `In_QuestionDesc`, `In_TagKeyword`, `In_QuestionDate`,`In_LikeCount`,`In_ViewCount`,`In_AnswerCount`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_ProjectDocuments`(IN `In_ProjectPostID` INT(10), IN `In_ProjectDocument` VARCHAR(50))
BEGIN
		INSERT INTO projectuploadeddocumnet (`ProjectPostID`, `ProjectDocument`)
        VALUES (`In_ProjectPostID`, `In_ProjectDocument`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_ProjectMilestone`(`In_ProjectPostID` int(10), `In_MilestoneName`varchar(20), `In_MilestoneDate` DATE, `In_MilestoneBudget` int(10))
BEGIN
		INSERT INTO projectmilestonedetails (`ProjectPostID`, `MilestoneName`, `MilestoneDate`, `MilestoneBudget`)
        VALUES (`In_ProjectPostID`, `In_MilestoneName`, `In_MilestoneDate`, `In_MilestoneBudget`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_ProjectPost`(IN `In_ProjectPostBy` INT(5), IN `In_ProjectName` VARCHAR(20), IN `In_ProjectDesc` TEXT, IN `In_ProjectBudget` INT(5), IN `In_ProjectType` VARCHAR(20), IN `In_ProjectStartDate` DATE, IN `In_ProjectEndDate` DATE, IN `In_ProjectDateTime` DATE, IN `In_ProjectLocation` VARCHAR(45), IN `In_AssignmentActive` VARCHAR(10), IN `In_AssignmentAprrovedstatus` VARCHAR(10), IN `In_lat` VARCHAR(30), IN `In_lng` VARCHAR(30))
BEGIN
		INSERT INTO projectpost (`ProjectPostBy`, `ProjectName`, `ProjectDesc`, `ProjectBudget`, `ProjectType`, `ProjectStartDate`, `ProjectEndDate`, `ProjectDateTime`, `ProjectLocation`, `AssignmentActive`, `AssignmentAprrovedstatus`, `lat`, `lng`) 
        VALUES (`In_ProjectPostBy`, `In_ProjectName`, `In_ProjectDesc`, `In_ProjectBudget`, `In_ProjectType`, `In_ProjectStartDate`, `In_ProjectEndDate`, `In_ProjectDateTime`, `In_ProjectLocation`, `In_AssignmentActive`, `In_AssignmentAprrovedstatus`, `In_lat`, `In_lng`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_ProjectSeekerAplliedJob`(IN `In_ProjectSeekerID` INT(5), IN `In_ProjectPostID` INT(5), IN `In_ApplyDate` DATE, IN `In_ProjectApplyStatus` VARCHAR(10), IN `In_BiddAmount` INT(20), IN `In_BiddDescription` TEXT)
    NO SQL
BEGIN
        INSERT INTO `projectapplyactivity`(`UserID`, `ProjectPostID`, `ApplyDate`, `ProjectApplyStatus`, `BiddAmount`, `BiddDescription`) 
        VALUES (`In_ProjectSeekerID`, `In_ProjectPostID`, `In_ApplyDate`, `In_ProjectApplyStatus`,`In_BiddAmount`,`In_BiddDescription`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_SkillSet`(IN `In_SkillSetName` VARCHAR(30))
BEGIN
		INSERT INTO skillset (`SkillSetName`) 
        VALUES (In_SkillSetName);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_UserRegistration`(IN `RoleType` INT(11), IN `Name` VARCHAR(15), IN `UserAccountcol` VARCHAR(15), IN `Email` VARCHAR(45), IN `Password` VARCHAR(45), IN `gender` VARCHAR(10), IN `Phone` INT(11), IN `registrationdate` DATE, IN `IsActive` VARCHAR(10), IN `ApprovedStatus` VARCHAR(10))
    NO SQL
BEGIN
		INSERT INTO useraccount (`UserTypeID`, `FirstName`, `UserAccountcol`, `UserName`, `Password`, `Gender`, `ContactNo`, `RegisterationDate`, `IsActive`, `ApprovedStatus`) 
        VALUES (`RoleType`, `Name`, `UserAccountcol`, `Email`, `Password`, `gender`, `Phone`, `registrationdate`, `IsActive`, `ApprovedStatus`);
       
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `assignmentseekerprofileimage`
--

CREATE TABLE IF NOT EXISTS `assignmentseekerprofileimage` (
  `AssignmentSeekerProfileImageID` int(11) NOT NULL AUTO_INCREMENT,
  `ProfileImage` varchar(45) NOT NULL,
  `AssignmentSeekerID` int(11) NOT NULL,
  PRIMARY KEY (`AssignmentSeekerProfileImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`CompanyID`, `JobPostID`, `CompanyName`, `AboutCompany`, `CompanyWebSite`, `CompanyAddress`, `ContactPersonName`, `ContactPersonPhNo`) VALUES
(1, 69, 'Obstin Inf', '', 'obstin.in', 'Kolhapur', 'Mohan Pati', 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `forumanswer`
--

CREATE TABLE IF NOT EXISTS `forumanswer` (
  `ForumAnswerID` int(10) NOT NULL AUTO_INCREMENT,
  `ForumQuestionID` int(10) NOT NULL,
  `AnswerBy` int(10) NOT NULL,
  `AnswerDesc` text NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`ForumAnswerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `forumanswercomment`
--

CREATE TABLE IF NOT EXISTS `forumanswercomment` (
  `ForumAnswerCommentID` int(10) NOT NULL AUTO_INCREMENT,
  `ForumQuestionID` int(10) NOT NULL,
  `ForumAnswerID` int(10) NOT NULL,
  `CommentedBy` int(10) NOT NULL,
  `AnswerComment` text NOT NULL,
  `CommentDate` datetime NOT NULL,
  PRIMARY KEY (`ForumAnswerCommentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `forumquestion`
--

CREATE TABLE IF NOT EXISTS `forumquestion` (
  `ForumQuestionID` int(10) NOT NULL AUTO_INCREMENT,
  `QuestionBy` int(10) NOT NULL,
  `QuestionTitle` varchar(50) NOT NULL,
  `QuestionDesc` text NOT NULL,
  `TagKeyword` varchar(50) NOT NULL,
  `QuestionDate` datetime NOT NULL,
  `LikeCount` int(10) NOT NULL,
  `ViewCount` int(10) NOT NULL,
  `AnswerCount` int(10) NOT NULL,
  PRIMARY KEY (`ForumQuestionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `jobinterview`
--

CREATE TABLE IF NOT EXISTS `jobinterview` (
  `JobInterviewID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostId` int(11) NOT NULL,
  `JobseekerId` int(20) NOT NULL,
  `JobInterviewStatus` varchar(10) NOT NULL,
  PRIMARY KEY (`JobInterviewID`)
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
  `JobDescription` text NOT NULL,
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
  `JobAprrovedstatus` varchar(10) NOT NULL,
  `lat` varchar(30) NOT NULL,
  `lng` varchar(30) NOT NULL,
  PRIMARY KEY (`JobPostID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=70 ;

--
-- Dumping data for table `jobpost`
--

INSERT INTO `jobpost` (`JobPostID`, `JobPostedBy`, `JobTitle`, `JobDescription`, `NoOfVacancy`, `MinExp`, `MaxExp`, `MinSal`, `MaxSal`, `JobLocation`, `JobIndustry`, `JobFunctionalArea`, `UGQual`, `PGQual`, `JobPostDate`, `JobActive`, `JobAprrovedstatus`, `lat`, `lng`) VALUES
(65, 1, 'ert', 'sdf', 5, 1, 2, 1, 3, 'Kolhapur, Maharashtra, India', 'Engineering&Science', 'Sales', 'B.E', 'M.tech', '2018-01-20', 'Active', 'Yes', '16.704329631532', '74.247372573047'),
(69, 1, 'sdf', 'dfg', 5, 1, 2, 1, 3, 'Kolhapur, Maharashtra, India', 'Geosciences', 'Piping', 'B.E', 'M.tech', '2017-12-25', 'Inactive', 'No', '16.703979444697', '74.245397924884');

-- --------------------------------------------------------

--
-- Table structure for table `jobpostskillset`
--

CREATE TABLE IF NOT EXISTS `jobpostskillset` (
  `JobPostSkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostID` int(11) NOT NULL,
  `SkillSetID` varchar(50) NOT NULL,
  PRIMARY KEY (`JobPostSkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=79 ;

--
-- Dumping data for table `jobpostskillset`
--

INSERT INTO `jobpostskillset` (`JobPostSkillSetID`, `JobPostID`, `SkillSetID`) VALUES
(55, 41, 'Blow Moduling,operator,edible oil'),
(56, 65, 'Blow Moduling,civil,gps,refinery,oil & gas'),
(57, 43, 'mep inspector,Blow Moduling,oil & gas'),
(58, 49, 'Blow Moduling,operator,edible oil'),
(59, 50, 'c Lang,java,html,php'),
(60, 51, 'c Lang,html'),
(61, 51, 'Blow Moduling,operator,edible oil'),
(62, 52, 'java,html'),
(63, 53, 'java,html'),
(64, 54, 'java,html,angular2'),
(65, 55, 'java,html'),
(66, 56, 'java,html,angular2'),
(67, 57, 'java,php'),
(68, 59, 'java,php,angular2'),
(69, 60, 'java,php,angular2'),
(70, 61, 'java,php,angular2'),
(71, 62, 'java,php,angular2'),
(72, 63, 'java,html,angular2'),
(73, 64, 'java,php'),
(74, 65, 'java,php'),
(75, 66, 'java,angular2'),
(76, 67, 'java'),
(77, 68, 'java,php'),
(78, 69, 'java');

-- --------------------------------------------------------

--
-- Table structure for table `jobqulaification`
--

CREATE TABLE IF NOT EXISTS `jobqulaification` (
  `JobQualificationID` int(11) NOT NULL AUTO_INCREMENT,
  `JobQualification` varchar(20) NOT NULL,
  `QualificationType` varchar(10) NOT NULL,
  PRIMARY KEY (`JobQualificationID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `jobqulaification`
--

INSERT INTO `jobqulaification` (`JobQualificationID`, `JobQualification`, `QualificationType`) VALUES
(1, 'B.E', 'Bachelor '),
(2, 'M.tech', 'Master'),
(3, 'B.Sc', 'Bachelor '),
(4, 'M.B.A', 'Master'),
(5, 'Any graduate', 'Bachelor'),
(6, 'Any Post-graduate', 'Master');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=62 ;

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
(50, 14, 'MTECH', 'qq', 'Full Time', 2016, '98'),
(51, 15, 'BE', 'abc', 'Full Time', 2017, '89'),
(52, 16, 'BE', 'bb', 'Full Time', 2017, '9'),
(53, 17, 'BE', 'dd', 'Full Time', 2016, '89'),
(54, 21, 'MTECH', 'NMCE, Peth', 'Full Time', 2015, '78'),
(56, 23, 'MTECH', 'NMCE, Peth', 'Full Time', 2015, '78'),
(57, 23, 'MTECH', 'NMCE, Peth', 'Full Time', 2015, '78'),
(58, 23, 'MTECH', 'NMCE, Peth', 'Full Time', 2015, '78'),
(59, 35, 'BE', 'NMCE', 'Full Time', 2017, '78'),
(60, 36, 'BE', 'NMCE', 'Full Time', 2015, '78'),
(61, 47, 'MTECH', 'dfg', 'Full Time', 2015, '75');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `jobseekerexperiencedetails`
--

INSERT INTO `jobseekerexperiencedetails` (`JobSeekerExpID`, `JobSeekerID`, `TotalExp_Year`, `TotalExp_Month`, `Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) VALUES
(25, 36, 2, 0, '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(26, 5, 2, 0, '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015'),
(28, 17, 1, 0, '2', 'pp', 'pp', 'pp', 'Industry0', 'Department', 'Jan-2017', 'Jan-2017'),
(29, 14, 1, 0, '23', 'qq', 'q', 'qq', 'Industry2', 'Department', 'Nov-2015', 'Dec-2015'),
(31, 15, 1, 1, '2', 'abc', 'abc', 'abc', 'Industry2', 'Department', 'Aug-2015', 'Aug-2015'),
(32, 16, 1, 0, '6', 'bb', 'bbb', 'bb', 'Industry0', 'Department', 'Nov-2016', 'Oct-2016'),
(33, 10, 2, 0, '3', 'php devlpoer', 'php', 'php', 'Industry2', 'Department', 'Nov-2015', 'Oct-2015');

-- --------------------------------------------------------

--
-- Table structure for table `jobseekerjobalert`
--

CREATE TABLE IF NOT EXISTS `jobseekerjobalert` (
  `JobAlertId` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `JobAlertName` varchar(50) NOT NULL,
  `Skills` varchar(50) NOT NULL,
  `Location` varchar(50) NOT NULL,
  `MinExp` int(11) NOT NULL,
  `MaxExp` int(11) NOT NULL,
  `Salary` int(20) NOT NULL,
  `Industry` varchar(50) NOT NULL,
  `Preference` varchar(20) NOT NULL,
  `MailStatus` varchar(20) NOT NULL,
  `DateSent` date NOT NULL,
  `NextScheduledDate` date NOT NULL,
  PRIMARY KEY (`JobAlertId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `jobseekerjobalert`
--

INSERT INTO `jobseekerjobalert` (`JobAlertId`, `UserID`, `JobAlertName`, `Skills`, `Location`, `MinExp`, `MaxExp`, `Salary`, `Industry`, `Preference`, `MailStatus`, `DateSent`, `NextScheduledDate`) VALUES
(5, 5, 'JobAlert', 'Blow Moduling,civil,gps,refinery,oil & gas', 'Pune,Mumbai', 1, 2, 20000, 'df', 'Daily', '', '0000-00-00', '0000-00-00'),
(8, 5, 'dfg', 'dfg', 'fdg', 1, 2, 2, 'inin', 'Daily', '', '0000-00-00', '0000-00-00');

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
  `Gender` varchar(10) NOT NULL,
  `Contact` int(10) NOT NULL,
  `PassportNo` varchar(15) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `JobSeekerType` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `JobSeekerID_idx` (`JobSeekerID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=75 ;

--
-- Dumping data for table `jobseekerprofile`
--

INSERT INTO `jobseekerprofile` (`id`, `JobSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `JobSeekerType`) VALUES
(66, 5, 'Mohan', '2017-10-30', 'dffd', 'Kolhapur', '', 2147483647, 'dfg', 'mohanpatil1302@gmail.com', 'Freshers'),
(73, 36, 'Mohan', '1993-01-24', 'Flat no. A/702\nWater', 'KOLHAPUR', 'NA', 2147483647, '125478963', 'mp@mpk.com', 'Experience'),
(74, 47, 'mp', '2018-01-12', 'a/p: kole, chavdi ch', 'kolhapu', 'NA', 2147483647, '456', 'mp@mpkl.co', 'Freshers');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `jobseekerprofileimage`
--

INSERT INTO `jobseekerprofileimage` (`JobSeekerProfileImageID`, `ProfileImage`, `JobSeekerID`) VALUES
(1, 'php/JobSeeker_Profile/21Profile.jpg', 21),
(2, 'php/JobSeeker_Profile/10Profile.jpg', 36),
(3, 'php/JobSeeker_Profile/11Profile.jpg', 11),
(4, 'php/JobSeeker_Profile/12Profile.jpg', 12),
(5, 'php/JobSeeker_Profile/3Profile.jpg', 1),
(6, 'php/JobSeeker_Profile/4Profile.jpg', 4),
(7, 'php/JobSeeker_Profile/5Profile.jpg', 5),
(8, 'JobSeeker_Profile/35Profile.png', 35),
(9, 'JobSeeker_Profile/47Profile.jpg', 47);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=50 ;

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
(39, 14, 'JobSeeker_Resume/59d082ed1f8a5.doc'),
(40, 15, 'JobSeeker_Resume/59d86f1803576.sql'),
(41, 16, 'JobSeeker_Resume/59d863d2765ee.pdf'),
(42, 17, 'JobSeeker_Resume/59d8644fa827a.sql'),
(43, 21, 'JobSeeker_Resume/5a19077fa5ee5.doc'),
(45, 23, 'JobSeeker_Resume/5a193c9843294.doc'),
(46, 23, 'JobSeeker_Resume/5a193d2feeb46.doc'),
(47, 23, 'JobSeeker_Resume/5a193d643e8a7.doc'),
(48, 35, 'JobSeeker_Resume/5a54855158e70.doc'),
(49, 47, 'JobSeeker_Resume/5a6b3adae429f.doc');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=52 ;

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
(44, 14, 'c', '2'),
(45, 15, 'java', '1'),
(46, 16, 'c', '2'),
(47, 17, 'c++,c', '1,2'),
(48, 21, 'java', '1'),
(49, 35, 'java', '1'),
(50, 36, 'java', '1'),
(51, 47, 'java', '3');

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
  `MessageTime` datetime NOT NULL,
  `Status` tinyint(1) NOT NULL,
  PRIMARY KEY (`MessageBoardID`),
  KEY `senderID_idx` (`SenderID`),
  KEY `ResciverId_idx` (`ReceiverID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `messageboard`
--

INSERT INTO `messageboard` (`MessageBoardID`, `SenderID`, `ReceiverID`, `Message`, `MessageTime`, `Status`) VALUES
(1, 36, 1, 'hiiii ', '2018-01-10 05:10:00', 0),
(2, 34, 1, 'hiiii how r u ????????????', '2018-01-09 05:00:00', 1),
(3, 34, 1, 'plz call me', '2018-01-10 05:12:10', 0),
(4, 35, 1, 'got mail', '2018-01-10 06:17:18', 0),
(5, 36, 1, 'pooja', '0000-00-00 00:00:00', 1),
(6, 36, 1, 'pl', '0000-00-00 00:00:00', 1),
(7, 36, 1, 'kkkkkkk', '0000-00-00 00:00:00', 1),
(8, 36, 1, 'new msg', '0000-00-00 00:00:00', 1),
(9, 36, 1, 'GMMMMMMMMMMMM', '0000-00-00 00:00:00', 0),
(10, 35, 34, 'hello js', '0000-00-00 00:00:00', 0),
(11, 35, 34, 'send data..', '0000-00-00 00:00:00', 0),
(12, 35, 34, 'ge', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `projectapplyactivity`
--

CREATE TABLE IF NOT EXISTS `projectapplyactivity` (
  `ProjectApplyActivityID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `BiddAmount` varchar(20) NOT NULL,
  `BiddDescription` text NOT NULL,
  `ProjectPostID` int(11) NOT NULL,
  `ApplyDate` date NOT NULL,
  `ProjectApplyStatus` varchar(10) NOT NULL,
  PRIMARY KEY (`ProjectApplyActivityID`),
  KEY `UserID_idx` (`UserID`),
  KEY `ProjectPostID_idx` (`ProjectPostID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=71 ;

--
-- Dumping data for table `projectapplyactivity`
--

INSERT INTO `projectapplyactivity` (`ProjectApplyActivityID`, `UserID`, `BiddAmount`, `BiddDescription`, `ProjectPostID`, `ApplyDate`, `ProjectApplyStatus`) VALUES
(56, 31, '40000', 'nothing', 82, '2017-12-29', 'yes'),
(57, 31, '40000', 'nothing', 77, '2017-12-30', 'yes'),
(59, 31, '4141', 'kj', 80, '2018-01-03', 'yes'),
(60, 31, '1500', 'desc', 74, '2018-01-05', 'yes'),
(61, 31, '500', 'dsf', 75, '2018-01-05', 'yes'),
(65, 5, '500', 'desc', 0, '2018-01-23', 'yes'),
(66, 5, '500', 'desc', 0, '2018-01-23', 'yes'),
(67, 5, '500', 'dfgdf', 0, '2018-01-23', 'yes'),
(68, 5, '0', 'ghjghj', 0, '2018-01-23', 'yes'),
(69, 5, '50', 'ghjghj', 0, '2018-01-23', 'yes'),
(70, 5, '500', 'desc', 86, '2018-01-23', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `projectmilestonedetails`
--

CREATE TABLE IF NOT EXISTS `projectmilestonedetails` (
  `ProjectMilestoneID` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectPostID` int(10) NOT NULL,
  `MilestoneName` varchar(20) NOT NULL,
  `MilestoneDate` varchar(10) NOT NULL,
  `MilestoneBudget` int(10) NOT NULL,
  PRIMARY KEY (`ProjectMilestoneID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=84 ;

--
-- Dumping data for table `projectmilestonedetails`
--

INSERT INTO `projectmilestonedetails` (`ProjectMilestoneID`, `ProjectPostID`, `MilestoneName`, `MilestoneDate`, `MilestoneBudget`) VALUES
(54, 49, 'pmp1', '2017-10-10', 1000),
(55, 49, 'mpmp2', '2017-10-10', 500),
(56, 50, 'ppp', '2017-10-10', 55),
(57, 62, 'qq', '2017-10-10', 5),
(58, 66, 'ppp', '2017-10-1', 55),
(59, 66, 'qq', '2017-10-10', 5),
(60, 67, 'k', '2017-10-10', 545),
(61, 68, 'pp', '2017-10-10', 450),
(62, 69, 'pp', '2017-10-10', 1500),
(63, 70, 'p1', '2017-10-10', 100),
(64, 70, 'p2', '2017-10-10', 1500),
(65, 71, 'pp', '2017-10-10', 100),
(66, 72, 'pp', '2017-10-10', 100),
(67, 73, 'PP', '2017-10-10', 200),
(68, 1, 'dfsd', '2017-10-24', 1),
(69, 74, 'Kick Off', '2017-10-10', 100000),
(70, 74, 'DDD document ', '2017-10-10', 20000),
(71, 75, 'Milestone1', '2017-10-10', 250000),
(72, 75, 'Milestone2', '2017-10-10', 300000),
(73, 76, 'Milestone1', '2017-10-10', 250000),
(74, 76, 'Milestone1', '2017-10-10', 2500000),
(75, 82, 'ffgh', '2017-10-10', 212121),
(76, 83, 'hb', '2017-10-10', 54564654),
(77, 82, 'sfd', '2017-10-10', 5000),
(78, 83, 'Milestone1', '2017-10-10', 5000),
(79, 84, 'Milestone1', '2017-10-10', 5000),
(80, 85, 'Mohan', '2017-10-10', 0),
(81, 86, 'sfd', '2017-10-10', 500),
(82, 87, 'df', '2017-10-10', 500),
(83, 88, 'dsf', '2017-10-10', 500);

-- --------------------------------------------------------

--
-- Table structure for table `projectpost`
--

CREATE TABLE IF NOT EXISTS `projectpost` (
  `ProjectPostID` int(10) NOT NULL AUTO_INCREMENT,
  `ProjectPostBy` int(11) NOT NULL,
  `ProjectName` varchar(50) NOT NULL,
  `ProjectDesc` text NOT NULL,
  `ProjectBudget` int(10) NOT NULL,
  `ProjectType` varchar(25) NOT NULL,
  `ProjectStartDate` date NOT NULL,
  `ProjectEndDate` date NOT NULL,
  `ProjectDateTime` datetime NOT NULL,
  `ProjectLocation` varchar(40) NOT NULL,
  `AssignmentActive` varchar(10) NOT NULL,
  `AssignmentAprrovedstatus` varchar(10) NOT NULL,
  `lat` varchar(30) NOT NULL,
  `lng` varchar(30) NOT NULL,
  PRIMARY KEY (`ProjectPostID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=87 ;

--
-- Dumping data for table `projectpost`
--

INSERT INTO `projectpost` (`ProjectPostID`, `ProjectPostBy`, `ProjectName`, `ProjectDesc`, `ProjectBudget`, `ProjectType`, `ProjectStartDate`, `ProjectEndDate`, `ProjectDateTime`, `ProjectLocation`, `AssignmentActive`, `AssignmentAprrovedstatus`, `lat`, `lng`) VALUES
(86, 1, 'df', 'dsfsd', 500, 'fdg', '2018-01-20', '2018-01-20', '2018-01-20 00:00:00', 'Kolhapur, Maharashtra, India', 'Active', 'Active', '16.704329631532', '74.241879408984');

-- --------------------------------------------------------

--
-- Table structure for table `projectuploadeddocumnet`
--

CREATE TABLE IF NOT EXISTS `projectuploadeddocumnet` (
  `ProjectDocumnetID` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectPostID` int(11) NOT NULL,
  `ProjectDocument` varchar(50) NOT NULL,
  PRIMARY KEY (`ProjectDocumnetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `projectuploadeddocumnet`
--

INSERT INTO `projectuploadeddocumnet` (`ProjectDocumnetID`, `ProjectPostID`, `ProjectDocument`) VALUES
(7, 49, 'Project_Document/59dc7bfbd49fb.sql'),
(8, 68, 'Project_Document/59dc7f3e3597d.sql'),
(9, 70, 'Project_Document/59e066bfc3db2.sql'),
(10, 73, 'Project_Document/59e0a67f9a80f.jpg'),
(11, 83, 'Project_Document/59fd3f30e507c.docx'),
(12, 82, 'Project_Document/5a41d0197666d.docx'),
(13, 83, 'Project_Document/5a4db8cd48b6a.doc'),
(14, 84, 'Project_Document/5a4db8ec23dfe.doc'),
(15, 85, 'Project_Document/5a60a4e3d0bcc.txt'),
(16, 86, 'Project_Document/5a635b6df1a4f.docx'),
(17, 87, 'Project_Document/5a65ba31a6190.docx'),
(18, 88, 'Project_Document/5a65baafb2665.docx');

-- --------------------------------------------------------

--
-- Table structure for table `registeruserinforamtion`
--

CREATE TABLE IF NOT EXISTS `registeruserinforamtion` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `AuthorizedPersonName` varchar(45) NOT NULL,
  `AuthorizedPersonContact` varchar(45) NOT NULL,
  `AuthorizedPersonEmail` varchar(45) NOT NULL,
  `IndustryType` varchar(20) NOT NULL,
  `CompanyName` varchar(20) NOT NULL,
  `CompanyRegisteredAddress` varchar(40) NOT NULL,
  `CompanyEmailId` varchar(45) NOT NULL,
  `CompanyURL` varchar(45) NOT NULL,
  `CompanyLogo` varchar(45) NOT NULL,
  `CompanyRegistrationNo` varchar(15) NOT NULL,
  `AboutCompany` text NOT NULL,
  `IncorporationDate` date NOT NULL,
  `IncorporationCertificate` varchar(45) NOT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `State` varchar(45) NOT NULL,
  `PANNo` varchar(45) NOT NULL,
  `TANNo` varchar(45) NOT NULL,
  `Lat` varchar(30) NOT NULL,
  `Lng` varchar(30) NOT NULL,
  `officelocation` varchar(50) NOT NULL,
  `ProfileComplete` int(5) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=47 ;

--
-- Dumping data for table `registeruserinforamtion`
--

INSERT INTO `registeruserinforamtion` (`UserID`, `AuthorizedPersonName`, `AuthorizedPersonContact`, `AuthorizedPersonEmail`, `IndustryType`, `CompanyName`, `CompanyRegisteredAddress`, `CompanyEmailId`, `CompanyURL`, `CompanyLogo`, `CompanyRegistrationNo`, `AboutCompany`, `IncorporationDate`, `IncorporationCertificate`, `Country`, `State`, `PANNo`, `TANNo`, `Lat`, `Lng`, `officelocation`, `ProfileComplete`) VALUES
(1, 'Mohan Patil', '8600620889', 'mohan@gmail.com', 'IT Industry', 'Obstin Infratech', 'Kolhapur', 'obstin@ob.in', 'obstin.in', 'CompanyLogo/59f7186c3dd0b.png', '1234567890', '', '2017-10-29', 'IncorporationCertificate/59f7186c3e79e.docx', 'India', 'Maharashtra', 'njnjn', 'jnjjnj', '16.653398675308', '74.208087634571', 'Kolhapur, Maharashtra, India', 100),
(28, 'Mohan Patil', '2147483647', 'mp@mpkl.com', 'IT Industry', 'Obstin', 'Flat no. A/702, Waterfront apt, A Ward, ', 'obstin@ob.in', 'obstin.in', 'CompanyLogo/5a251eb19a1ab.png', '1234567890', '', '2017-12-03', 'IncorporationCertificate/5a251eb19b4ee.doc', 'India', 'Maharashtra', 'GQPP5934H', 'GDSG454DSSD', '16.706960291812', '74.250805800586', 'Kolhapur, Maharashtra, India', 100),
(31, 'rohan', '2147483647', 'rohan@gm.com', 'hbh', 'mohan', 'hbh', 'jn@njn.com', 'hjbhj', 'CompanyLogo/5a5c54c805a17.jpg', '5456', 'jjkbbj', '2018-01-14', 'IncorporationCertificate/5a5c54c807084.docx', 'India', 'Maharashtra', '5454', '5454', '16.705644966203', '74.245312636524', 'Kolhapur, Maharashtra, India', 100),
(45, 'Rohit', '2147483647', 'rk@gmaill.comm', 'Oil industry', 'RTC', 'address', 'rtc@gmaill.com', 'http://obstin.in', 'CompanyLogo/5a634c2f64fcf.jpg', '87451123', 'desc', '2018-12-19', 'IncorporationCertificate/5a634c2f6af44.docx', 'India', 'Maharashtra', '8745', '5454', '16.705644966203', '74.248745864063', 'Kolhapur, Maharashtra, India', 100),
(46, 'Mohan P', '2147483647', 'mp@mkj.com', 'kjn', 'h', 'hfg', 'dffg@njn.com', 'jnj', 'CompanyLogo/5a69f19c4aa63.png', '54564', 'dfg', '2018-01-24', 'IncorporationCertificate/5a69f19c4b863.docx', 'dfg', 'dfg', 'dfg', 'dfg', '16.70360950451', '74.2432307', 'Kolhapur Bus Stand (CBS), Benadikar Path, Shahupur', 100);

-- --------------------------------------------------------

--
-- Table structure for table `skillset`
--

CREATE TABLE IF NOT EXISTS `skillset` (
  `SkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillSetName` varchar(10) NOT NULL,
  PRIMARY KEY (`SkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `skillset`
--

INSERT INTO `skillset` (`SkillSetID`, `SkillSetName`) VALUES
(1, 'c'),
(2, 'java'),
(3, 'html'),
(4, 'php'),
(10, 'angularjs');

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
  `Gender` varchar(10) NOT NULL,
  `ContactNo` int(11) NOT NULL,
  `RegisterationDate` date NOT NULL,
  `IsActive` varchar(10) NOT NULL,
  `ApprovedStatus` varchar(10) NOT NULL,
  PRIMARY KEY (`UserAccountID`),
  KEY `UserTypeID_idx` (`UserTypeID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=50 ;

--
-- Dumping data for table `useraccount`
--

INSERT INTO `useraccount` (`UserAccountID`, `UserTypeID`, `FirstName`, `UserAccountcol`, `UserName`, `Password`, `Gender`, `ContactNo`, `RegisterationDate`, `IsActive`, `ApprovedStatus`) VALUES
(1, 1, 'Mohan', 'No', 'mohan@gmail.com', '1234', 'Male', 2147483647, '2017-10-24', 'No', 'No'),
(5, 5, 'Mohan', 'No', 'mp@gmail.com', '1234', 'Male', 2147483647, '2017-10-25', 'No', 'No'),
(28, 1, 'Mohan Patil', 'No', 'mp@mpkl.com', 'M@123456', 'Male', 2147483647, '2017-12-04', 'No', 'No'),
(31, 6, 'rohan', 'No', 'rohan@gm.com', '1234', 'Male', 2147483647, '2017-12-15', 'No', 'No'),
(32, 5, 'Mohan Balaso pa', 'No', 'mp@mp1.com', 'M@123456', 'Male', 2147483647, '2017-12-26', 'No', 'No'),
(33, 7, 'SuperAdmin', 'No', 'admin@procstart.com', 'admin@123', 'No', 0, '2018-01-02', 'Active', 'Yes'),
(35, 6, 'Mohan', 'No', 'mp@mppp.com', 'M@123456', 'Male', 2147483647, '2018-01-09', 'No', 'No'),
(39, 5, 'mp', 'No', 'mpks@mp.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(40, 6, 'Mohan', 'No', 'mpkll@mp.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(41, 6, 'mppp', 'No', 'mklj@mp.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(42, 6, 'mppp', 'No', 'mpk@mpk.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(43, 6, 'kmkm', 'No', 'mkmk@km.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(44, 1, 'mohan', 'No', 'mkjkj@jn.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(45, 1, 'Rohit', 'No', 'rk@gmaill.comm', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(46, 1, 'Mohan P', 'No', 'mp@mkj.com', 'M@123456', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(47, 5, 'mp', 'No', 'mp@mpkl.co', 'M@123456', 'Male', 2147483647, '2018-01-26', 'No', 'No'),
(48, 5, 'Mohan Balaso pa', 'No', 'mp@pm.mp', 'M@123456', 'Male', 2147483647, '2018-01-26', 'No', 'No'),
(49, 1, 'mp', 'No', 'm@nj.jn', 'M@123456', 'Male', 2147483647, '2018-01-30', 'No', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `usertype`
--

CREATE TABLE IF NOT EXISTS `usertype` (
  `UserTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `UserRoleName` varchar(20) NOT NULL,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`UserTypeID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `usertype`
--

INSERT INTO `usertype` (`UserTypeID`, `UserRoleName`, `Description`) VALUES
(1, 'Client', 'Client'),
(2, 'Vendor', 'vendor'),
(3, 'SME', 'SME'),
(4, 'Consultant', 'Consultant'),
(5, 'User', 'User'),
(6, 'AssignmentSeeker', 'AssignmentSeeker'),
(7, 'SuperAdmin', 'SuperAdmin');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `JobPostID` FOREIGN KEY (`JobPostID`) REFERENCES `jobpost` (`JobPostID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `useraccount`
--
ALTER TABLE `useraccount`
  ADD CONSTRAINT `UserTypeID` FOREIGN KEY (`UserTypeID`) REFERENCES `usertype` (`UserTypeID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
