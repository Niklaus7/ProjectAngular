-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2018 at 09:36 AM
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_AssignmentSeekerCompanyInfo`(IN `In_AssignmentSeekerID` INT(10), IN `In_CompanyName` VARCHAR(10), IN `In_CompanyAddress` VARCHAR(50), IN `In_CompanyEmailId` VARCHAR(20), IN `In_CompanyPhoneNo` INT(10), IN `In_CompanyWebSite` VARCHAR(30), IN `In_CompanyRegistrationNo` VARCHAR(15), IN `In_AboutCompany` TEXT, IN `In_Industry` VARCHAR(10), IN `In_IncorporationDate` DATE, IN `In_CompanyLogo` VARCHAR(25), IN `In_IncorporationCertificate` VARCHAR(25), IN `In_Country` VARCHAR(10), IN `In_State` VARCHAR(10), IN `In_PANNo` VARCHAR(10), IN `In_TANNo` VARCHAR(10), IN `In_Lat` VARCHAR(15), IN `In_Lng` VARCHAR(15))
    NO SQL
Begin
		INSERT INTO assignmentseekercompanyinfo (`AssignmentSeekerID`, `CompanyName`, `CompanyAddress`, `CompanyEmailId`, `CompanyPhoneNo`, `CompanyWebSite`, `CompanyRegistrationNo`, `AboutCompany`, `Industry`, `IncorporationDate`, `CompanyLogo`, `IncorporationCertificate`, `Country`, `State`, `PANNo`, `TANNo`, `Lat`, `Lng`) 
        VALUES (`In_AssignmentSeekerID`, `In_CompanyName`, `In_CompanyAddress`, `In_CompanyEmailId`, `In_CompanyPhoneNo`, `In_CompanyWebSite`, `In_CompanyRegistrationNo`, `In_AboutCompany`, `In_Industry`, `In_IncorporationDate`, `In_CompanyLogo`, `In_IncorporationCertificate`, `In_Country`, `In_State`, `In_PANNo`, `In_TANNo`, `In_Lat`, `In_Lng`);
        
ENd$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_AssignmentSeekerExperienceDetails`(`In_AssignmentSeekerID` int(5), `In_TotalExp_Year` int(10), `In_TotalExp_Month` int(10),`In_Salary` int(10), `In_JobTitle`varchar(15), `In_JobDescripion`varchar(20), `In_CompanyName`varchar(10), `In_Industry` varchar(10), `In_Department`varchar(10), `In_JobFromDate` varchar(10), `In_JobToDate` varchar(10))
BEGIN
		INSERT INTO Assignmentseekerexperiencedetails (`AssignmentSeekerID`, `TotalExp_Year`,`TotalExp_Month`,`Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) 
        VALUES (`In_AssignmentSeekerID`, `In_TotalExp_Year`, `In_TotalExp_Month`,`In_Salary`, `In_JobTitle`, `In_JobDescripion`, `In_CompanyName`, `In_Industry`, `In_Department`, `In_JobFromDate`, `In_JobToDate`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_AssignmentSeekerProfileImage`(IN `In_AssignmentSeekerID` INT(10), IN `In_Profile` VARCHAR(50))
INSERT INTO Assignmentseekerprofileimage (`AssignmentSeekerID`, `ProfileImage`) 
        VALUES (`In_AssignmentSeekerID`, `In_Profile`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_AssignmentSeekerProfileInfo`(IN `In_AssignmentSeekerID` INT(5), IN `In_FirstName` VARCHAR(15), IN `In_DOB` DATE, IN `In_Address` VARCHAR(20), IN `In_Location` VARCHAR(10), IN `In_Gender` VARCHAR(10), IN `In_Contact` INT(10), IN `In_PassportNo` VARCHAR(15), IN `In_Email` VARCHAR(30), IN `In_AssignmentSeekerType` VARCHAR(10),IN `In_AssignmentBiddingType` VARCHAR(10))
BEGIN
		INSERT INTO assignmentseekerprofile (`AssignmentSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `AssignmentSeekerType`,`AssignmentBiddingType`) 
        VALUES (`In_AssignmentSeekerID`, `In_FirstName`, `In_DOB`, `In_Address`, `In_Location`, `In_Gender`, `In_Contact`, `In_PassportNo`, `In_Email`, `In_AssignmentSeekerType`,`In_AssignmentBiddingType`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_AssignmentSeekerSkillSet`(IN `In_AssignmentSeekerID` INT(5), IN `In_SkillSetID` VARCHAR(50), IN `In_SkillExp` VARCHAR(50))
BEGIN
		INSERT INTO Assignmentseekerskillset (`AssignmentSeekerID`, `SkillSetID`,`SkillExp`) 
        VALUES (`In_AssignmentSeekerID`, `In_SkillSetID`,`In_SkillExp`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_jobinterview`(IN `JobPostId` INT(11), IN `JobseekerId` INT(20), IN `JobInterviewStatus` VARCHAR(10))
BEGIN
		INSERT INTO jobinterview (`JobPostId`, `JobseekerId`,`JobInterviewStatus`) 
        VALUES (`JobPostId`, `JobseekerId`,`JobInterviewStatus`);

       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobPost`(IN `In_JobPostedBy` INT(2), IN `In_JobTitle` VARCHAR(20), IN `In_JobDescription` TEXT, IN `In_NoOfVacancy` INT(2), IN `In_MinExp` INT(2), IN `In_MaxExp` INT(2), IN `In_MinSal` INT(2), IN `In_MaxSal` INT(2), IN `In_JobLocation` VARCHAR(40), IN `In_JobIndustry` VARCHAR(40), IN `In_JobFunctionalArea` VARCHAR(40), IN `In_UGQual` VARCHAR(50), IN `In_PGQual` VARCHAR(50), IN `In_JobPostDate` DATE, IN `In_JobActive` VARCHAR(10), IN `In_JobAprrovedstatus` VARCHAR(10), IN `In_lat` VARCHAR(30), IN `In_lng` VARCHAR(30))
BEGIN
		INSERT INTO jobpost( `JobPostedBy`, `JobTitle`, `JobDescription`, `NoOfVacancy`, `MinExp`, `MaxExp`, `MinSal`, `MaxSal`, `JobLocation`, `JobIndustry`, `JobFunctionalArea`, `UGQual`, `PGQual`, `JobPostDate`, `JobActive`, `JobAprrovedstatus`, `lat`, `lng`) 
        VALUES ( In_JobPostedBy, In_JobTitle, In_JobDescription, In_NoOfVacancy, In_MinExp, In_MaxExp, In_MinSal, In_MaxSal, In_JobLocation, In_JobIndustry, In_JobFunctionalArea, In_UGQual, In_PGQual, In_JobPostDate, In_JobActive, In_JobAprrovedstatus, In_lat, In_lng);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobPostCompany`(IN `In_JobPostID` INT(2), IN `In_CompanyName` VARCHAR(10), IN `In_AboutCompany` VARCHAR(20), IN `In_CompanyWebSite` VARCHAR(10), IN `In_CompanyAddress` VARCHAR(10), IN `In_ContactPersonName` VARCHAR(10), IN `In_ContactPersonPhNo` INT(10))
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerAplliedJob`(`In_JobSeekerID` INT(5), `In_JobPostID` INT(5), `In_ApplyDate` DATE, `In_JobApplyStatus` VARCHAR(10))
BEGIN
		INSERT INTO jobapplyactivity (`UserID`, `JobPostID`, `ApplyDate`, `JobApplyStatus`) 
        VALUES (`In_JobSeekerID`, `In_JobPostID`, `In_ApplyDate`, `In_JobApplyStatus`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerEducatinDetails`(`In_JobSeekerID` INT(5), `In_HighestQualification` VARCHAR(10), `In_InstituteName` VARCHAR(15), `In_CourseType` VARCHAR(10), `In_PassoutYear` VARCHAR(10), `In_CPI` DOUBLE(4,2))
BEGIN
		INSERT INTO jobseekereducatindetails (`JobSeekerID`, `HighestQualification`, `InstituteName`, `CourseType`, `PassoutYear`, `CPI`) 
        VALUES (`In_JobSeekerID`, `In_HighestQualification`,  `In_InstituteName`, `In_CourseType`, `In_PassoutYear`, `In_CPI`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerExperienceDetails`(`In_JobSeekerID` INT(5), `In_TotalExp_Year` INT(10), `In_TotalExp_Month` INT(10), `In_Salary` INT(10), `In_JobTitle` VARCHAR(15), `In_JobDescripion` VARCHAR(20), `In_CompanyName` VARCHAR(10), `In_Industry` VARCHAR(10), `In_Department` VARCHAR(10), `In_JobFromDate` VARCHAR(10), `In_JobToDate` VARCHAR(10))
BEGIN
		INSERT INTO jobseekerexperiencedetails (`JobSeekerID`, `TotalExp_Year`,`TotalExp_Month`,`Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) 
        VALUES (`In_JobSeekerID`, `In_TotalExp_Year`, `In_TotalExp_Month`,`In_Salary`, `In_JobTitle`, `In_JobDescripion`, `In_CompanyName`, `In_Industry`, `In_Department`, `In_JobFromDate`, `In_JobToDate`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerProfile`(IN `In_JobSeekerID` INT(11), IN `In_Profile` VARCHAR(45))
BEGIN
		INSERT INTO jobseekerprofileimage (`JobSeekerID`, `ProfileImage`) 
        VALUES (`In_JobSeekerID`, `In_Profile`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerProfileInfo`(IN `In_JobSeekerID` INT(5), IN `In_FirstName` VARCHAR(15), IN `In_DOB` DATE, IN `In_Address` VARCHAR(20), IN `In_Location` VARCHAR(10), IN `In_Gender` VARCHAR(10), IN `In_Contact` INT(10), IN `In_PassportNo` VARCHAR(15), IN `In_Email` VARCHAR(30), IN `In_JobSeekerType` VARCHAR(10))
BEGIN
		INSERT INTO jobseekerprofile (`JobSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `JobSeekerType`) 
        VALUES (`In_JobSeekerID`, `In_FirstName`, `In_DOB`, `In_Address`, `In_Location`, `In_Gender`, `In_Contact`, `In_PassportNo`, `In_Email`, `In_JobSeekerType`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerResume`(`In_JobSeekerID` INT(5), `In_Resume` VARCHAR(40))
BEGIN
		INSERT INTO jobseekerresume (`JobSeekerID`, `Resume`) 
        VALUES (`In_JobSeekerID`, `In_Resume`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_JobSeekerSkillSet`(IN `In_JobSeekerID` INT(5), IN `In_SkillSetID` VARCHAR(50), IN `In_SkillExp` VARCHAR(50))
BEGIN
		INSERT INTO jobseekerskillset (`JobSeekerID`, `SkillSetID`,`SkillExp`) 
        VALUES (`In_JobSeekerID`, `In_SkillSetID`,`In_SkillExp`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_Messages`(IN `In_SenderID` INT(10), IN `In_ReceiverID` INT(10), IN `In_TextMessage` VARCHAR(100), IN `In_MessageTime` DATETIME, IN `In_Status` BOOLEAN)
BEGIN
		INSERT INTO messageboard(`SenderID`, `ReceiverID`, `Message`, `MessageTime`, `Status`) 
        VALUES (In_SenderID,In_ReceiverID,In_TextMessage,In_MessageTime,In_Status);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_OtherUserRegistration`(IN `Userid` INT(11), IN `AuthPersonName` VARCHAR(45), IN `AuthPersonContact` VARCHAR(45), IN `AuthPersonEmail` VARCHAR(45), IN `IndustryType` VARCHAR(20), IN `ComapnyName` VARCHAR(20), IN `ComapnyAddress` VARCHAR(40), IN `ComapnyEmail` VARCHAR(45), IN `ComapnyWebsite` VARCHAR(45), IN `ComapnyLogo` VARCHAR(45), IN `ComapnyRegNo` VARCHAR(15), IN `IncorporationDate` DATE, IN `IncorporationCertificate` VARCHAR(45), IN `Country` VARCHAR(45), IN `State` VARCHAR(45), IN `PAN` VARCHAR(45), IN `TAN` VARCHAR(45), IN `Lat` VARCHAR(30), IN `Lng` VARCHAR(30), IN `Complete` INT(5), IN `AboutCompany` TEXT, IN `officelocation` VARCHAR(50))
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_ProjectMilestone`(`In_ProjectPostID` INT(10), `In_MilestoneName` VARCHAR(20), `In_MilestoneDate` DATE, `In_MilestoneBudget` INT(10))
BEGIN
		INSERT INTO projectmilestonedetails (`ProjectPostID`, `MilestoneName`, `MilestoneDate`, `MilestoneBudget`)
        VALUES (`In_ProjectPostID`, `In_MilestoneName`, `In_MilestoneDate`, `In_MilestoneBudget`);
       
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Insert_ProjectPost`(IN `In_ProjectPostBy` INT(5), IN `In_ProjectName` VARCHAR(20), IN `In_ProjectDesc` TEXT, IN `In_ProjectBudget` INT(5), IN `In_ProjectType` VARCHAR(20), IN `In_ProjectStartDate` DATE, IN `In_ProjectEndDate` DATE, IN `In_ProjectDateTime` DATE, IN `In_ProjectLocation` VARCHAR(45), IN `In_AssignmentActive` VARCHAR(10), IN `In_AssignmentAprrovedstatus` VARCHAR(10), IN `In_lat` VARCHAR(30), IN `In_lng` VARCHAR(30), IN `In_MemberShipType` INT(10))
BEGIN
		
		INSERT INTO projectpost (`ProjectPostBy`, `ProjectName`, `ProjectDesc`, `ProjectBudget`, `ProjectType`, `ProjectStartDate`, `ProjectEndDate`, `ProjectDateTime`, `ProjectLocation`, `AssignmentActive`, `AssignmentAprrovedstatus`, `lat`, `lng`,`MembershipType`) 
        VALUES (`In_ProjectPostBy`, `In_ProjectName`, `In_ProjectDesc`, `In_ProjectBudget`, `In_ProjectType`, `In_ProjectStartDate`, `In_ProjectEndDate`, `In_ProjectDateTime`, `In_ProjectLocation`, `In_AssignmentActive`, `In_AssignmentAprrovedstatus`, `In_lat`, `In_lng`,`In_MemberShipType`);
       
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
-- Table structure for table `assignmentseekercompanyinfo`
--

CREATE TABLE IF NOT EXISTS `assignmentseekercompanyinfo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AssignmentSeekerID` int(11) NOT NULL,
  `CompanyName` varchar(20) NOT NULL,
  `CompanyAddress` varchar(40) NOT NULL,
  `CompanyEmailId` varchar(45) NOT NULL,
  `CompanyPhoneNo` int(10) NOT NULL,
  `CompanyWebSite` varchar(45) NOT NULL,
  `CompanyRegistrationNo` varchar(15) NOT NULL,
  `AboutCompany` text NOT NULL,
  `Industry` varchar(20) NOT NULL,
  `IncorporationDate` date NOT NULL,
  `CompanyLogo` varchar(200) NOT NULL,
  `IncorporationCertificate` varchar(200) NOT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `State` varchar(45) NOT NULL,
  `PANNo` varchar(45) NOT NULL,
  `TANNo` varchar(45) NOT NULL,
  `Lat` varchar(30) NOT NULL,
  `Lng` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `assignmentseekercompanyinfo`
--

INSERT INTO `assignmentseekercompanyinfo` (`ID`, `AssignmentSeekerID`, `CompanyName`, `CompanyAddress`, `CompanyEmailId`, `CompanyPhoneNo`, `CompanyWebSite`, `CompanyRegistrationNo`, `AboutCompany`, `Industry`, `IncorporationDate`, `CompanyLogo`, `IncorporationCertificate`, `Country`, `State`, `PANNo`, `TANNo`, `Lat`, `Lng`) VALUES
(4, 49, 'kop', 'kop', 'kop@gmail.com', 1234567890, 'kop', 'kop123', 'kop', 'kop', '2018-02-07', 'AssignmentSeeker_CompanyL', 'AssignmentSeeker_Incorpor', 'kop', 'kop', 'kop892', 'kop892', '16.233', '23.22');

-- --------------------------------------------------------

--
-- Table structure for table `assignmentseekerexperiencedetails`
--

CREATE TABLE IF NOT EXISTS `assignmentseekerexperiencedetails` (
  `AssignmentSeekerExpID` int(11) NOT NULL AUTO_INCREMENT,
  `AssignmentSeekerID` int(11) NOT NULL,
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
  PRIMARY KEY (`AssignmentSeekerExpID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `assignmentseekerprofile`
--

CREATE TABLE IF NOT EXISTS `assignmentseekerprofile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `AssignmentSeekerID` int(11) NOT NULL,
  `FirstName` varchar(10) NOT NULL,
  `DOB` date NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Location` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Contact` int(10) NOT NULL,
  `PassportNo` varchar(15) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `AssignmentSeekerType` varchar(10) NOT NULL,
  `AssignmentBiddingType` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `assignmentseekerprofile`
--

INSERT INTO `assignmentseekerprofile` (`id`, `AssignmentSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `AssignmentSeekerType`, `AssignmentBiddingType`) VALUES
(8, 49, 'as', '2018-01-29', 'kop', 'kop', 'NA', 2147483647, 'kop892', 'as@gmail.com', 'Freshers', 'Person');

-- --------------------------------------------------------

--
-- Table structure for table `assignmentseekerprofileimage`
--

CREATE TABLE IF NOT EXISTS `assignmentseekerprofileimage` (
  `AssignmentSeekerProfileImageID` int(11) NOT NULL AUTO_INCREMENT,
  `ProfileImage` varchar(45) NOT NULL,
  `AssignmentSeekerID` int(11) NOT NULL,
  PRIMARY KEY (`AssignmentSeekerProfileImageID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `assignmentseekerprofileimage`
--

INSERT INTO `assignmentseekerprofileimage` (`AssignmentSeekerProfileImageID`, `ProfileImage`, `AssignmentSeekerID`) VALUES
(4, 'AssignmentSeeker_ProfileImages/49Profile.JPG', 49);

-- --------------------------------------------------------

--
-- Table structure for table `assignmentseekerskillset`
--

CREATE TABLE IF NOT EXISTS `assignmentseekerskillset` (
  `AssignmentSeekerSkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `AssignmentSeekerID` int(11) NOT NULL,
  `SkillSetID` varchar(50) NOT NULL,
  `SkillExp` varchar(50) NOT NULL,
  PRIMARY KEY (`AssignmentSeekerSkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `assignmentseekerskillset`
--

INSERT INTO `assignmentseekerskillset` (`AssignmentSeekerSkillSetID`, `AssignmentSeekerID`, `SkillSetID`, `SkillExp`) VALUES
(4, 49, 'java,c++', '1,2');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`CompanyID`, `JobPostID`, `CompanyName`, `AboutCompany`, `CompanyWebSite`, `CompanyAddress`, `ContactPersonName`, `ContactPersonPhNo`) VALUES
(1, 4, 'Cybertrium', '<h3 style="box-sizin', 'obstimkm.i', 'Flat no. A', 'Aroof Shai', 2147483647),
(2, 5, 'Cybertrium', '<h3 style="box-sizin', 'obstimkm.i', 'Flat no. A', 'Aroof Shai', 2147483647),
(3, 6, 'Cybertrium', '<h3 style="box-sizin', 'obstimkm.i', 'Flat no. A', 'Aroof Shai', 2147483647),
(4, 7, 'Cybertrium', '<h3 style="box-sizin', 'obstimkm.i', 'Flat no. A', 'Aroof Shai', 2147483647),
(5, 8, 'Cybertrium', '<h3 style="box-sizin', 'obstimkm.i', 'Flat no. A', 'Aroof Shai', 2147483647),
(6, 9, 'ARTISIGHTS', '<span style="color: ', 'www.artisi', 'pune', 'Hemant Jad', 2147483647),
(7, 10, 'ARTISIGHTS', '<span style="color: ', 'www.artisi', 'pune', 'Hemant Jad', 2147483647),
(8, 11, 'ARTISIGHTS', '<span style="color: ', 'www.artisi', 'pune', 'Hemant Jad', 2147483647),
(9, 12, 'ARTISIGHTS', '<span style="color: ', 'www.artisi', 'pune', 'Hemant Jad', 2147483647),
(10, 13, 'ARTISIGHTS', '<span style="color: ', 'www.artisi', 'pune', 'Hemant Jad', 2147483647),
(11, 14, 'Obstin Inf', '<p style="margin: 0.', 'www.obstin', 'Bangalore,', 'Chandrakan', 2147483647),
(12, 15, 'NFS Global', '<span style="color: ', 'nfs.com', 'Al Haram, ', 'Kedar Tora', 2147483647),
(13, 16, 'NFS Global', '<span style="color: ', 'nfs.com', 'Al Haram, ', 'Kedar Tora', 2147483647),
(14, 17, 'NFS Global', '<span style="color: ', 'nfs.com', 'Al Haram, ', 'Kedar Tora', 2147483647),
(15, 18, 'NFS Global', '<span style="color: ', 'nfs.com', 'Al Haram, ', 'Kedar Tora', 2147483647),
(16, 19, 'NFS Global', '<span style="color: ', 'nfs.com', 'Al Haram, ', 'Kedar Tora', 2147483647),
(17, 20, 'Obstin Inf', '<p style="margin: 0.', 'www.obstin', 'Bangalore,', 'Chandrakan', 2147483647);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `forumanswer`
--

INSERT INTO `forumanswer` (`ForumAnswerID`, `ForumQuestionID`, `AnswerBy`, `AnswerDesc`, `Date`) VALUES
(2, 3, 48, 'my answer', '2018-02-08 05:33:00'),
(3, 3, 48, 'answer2', '2018-02-08 05:38:43'),
(4, 3, 48, 'answer3 by me', '2018-02-08 05:37:31');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `forumanswercomment`
--

INSERT INTO `forumanswercomment` (`ForumAnswerCommentID`, `ForumQuestionID`, `ForumAnswerID`, `CommentedBy`, `AnswerComment`, `CommentDate`) VALUES
(2, 3, 2, 48, 'aa', '2018-02-08 05:38:15'),
(3, 3, 2, 48, 'pp', '2018-02-08 05:51:29'),
(4, 3, 2, 48, 'qq', '2018-02-08 05:51:31'),
(5, 3, 2, 48, 'rr', '2018-02-08 05:51:50'),
(6, 3, 2, 48, '$scope.commentText', '2018-02-08 05:39:34'),
(7, 3, 4, 48, '$scope.commentText', '2018-02-08 05:48:40');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `forumquestion`
--

INSERT INTO `forumquestion` (`ForumQuestionID`, `QuestionBy`, `QuestionTitle`, `QuestionDesc`, `TagKeyword`, `QuestionDate`, `LikeCount`, `ViewCount`, `AnswerCount`) VALUES
(3, 48, 'forum1', 'forum desc', 'Accounting', '2018-02-08 05:28:16', 1, 11, 3);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `jobpost`
--

INSERT INTO `jobpost` (`JobPostID`, `JobPostedBy`, `JobTitle`, `JobDescription`, `NoOfVacancy`, `MinExp`, `MaxExp`, `MinSal`, `MaxSal`, `JobLocation`, `JobIndustry`, `JobFunctionalArea`, `UGQual`, `PGQual`, `JobPostDate`, `JobActive`, `JobAprrovedstatus`, `lat`, `lng`) VALUES
(4, 40, 'Operations Coordinat', '<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;mso-fareast-font-family:\n&quot;Times New Roman&quot;;color:#142A54">Oversight and coordination of service delivery\nto global principals'' vessel nominations/appointments routed through the\nService Center. Ensures Principal &amp; vessel requirements are met focusing on\ndelivery to the client and value for money.<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;mso-fareast-font-family:\n&quot;Times New Roman&quot;;color:#142A54">&nbsp;<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;mso-fareast-font-family:\n&quot;Times New Roman&quot;;color:#142A54">Service delivery as required<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;mso-fareast-font-family:\n&quot;Times New Roman&quot;;color:#142A54">Ensure staff meets service delivery\nrequirements<o:p></o:p></span></p>\n                                        ', 3, 1, 2, 1, 3, 'Kolhapur, Maharashtra, India', 'OilfieldServices', 'Sales', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '16.728393911583', '74.198427080615'),
(5, 40, 'International Sales ', '<p style="margin: 0in 0in 12pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\ncolor:#142A54">The company has a long standing track record of realizing\nsuccessful projects globally. Equipped with a strong reputation and a broad\nrange of services, it is the Sales Manager''s responsibility to sell our\nsolution-based services to new and existing accounts in the USA for pipeline\nleak detection for terminals, chemical plants &amp; refineries.<o:p></o:p></span></p>\n\n<p style="margin: 0in 0in 12pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\ncolor:#142A54">Our candidate will operate mainly in the Houston area where he\nwill approach major players in the Oil &amp; Gas and Chemical industry. The\nsuccessful candidate is especially attracted to work within a dynamic and\ngrowing international SME environment.<o:p></o:p></span></p>\n                                        ', 2, 0, 2, 1, 3, 'Kolhapur, Maharashtra, India', 'Production&Construction', 'Pipeline', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '16.810522774403', '74.117093431738'),
(6, 40, 'Sr. Pipeline GIS Spe', '<p class="MsoNormal"><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Corrpro Companies, Inc. is\nlooking for a&nbsp;<b>Sr. Pipeline GIS Specialist.</b></span><span style="font-size:10.0pt;line-height:107%;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\ncolor:#142A54"><br>\n<br>\n<span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Corrpro Companies, Inc., a subsidiary of Aegion\nCorporation, is North America''s largest corrosion engineering, cathodic\nprotection, and corrosion monitoring business for the protection and\npreservation of infrastructure. Corrpro provides professional corrosion\nconsulting and cathodic protection engineering services to major oil companies,\ngovernment agencies, municipal water, sewer and gas utilities, universities,\nand public transportation agencies. Corrpro has complete construction\ninstallation services, including crews and equipment to install any type of\ncathodic protection system for any type of structure. For more details,\nvisit&nbsp;</span></span><a href="http://www.corrpro.com/" target="_blank"><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(0, 49, 104); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">www.corrpro.com</span></a><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">.</span><o:p></o:p></p>\n                                        ', 5, 1, 2, 1, 3, 'Kolhapur, Maharashtra, India', 'Refining&Petrochem', 'NDT', 'B.E', 'M.E.', '2018-01-25', 'Active', 'Yes', '16.658291078042', '74.199060306982'),
(7, 40, 'AUT Technical Author', '<p class="MsoNormal"><o:p>&nbsp;</o:p></p>\n\n<p class="MsoNormal"><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Company Profile</span><span style="font-size:10.0pt;line-height:107%;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\ncolor:#142A54"><br>\n<br>\n<br>\n<span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Oceaneering is a global oilfield provider of\nengineered services and products primarily to the offshore oil and gas\nindustry, with a focus on deepwater applications. Through the use of its\napplied technology expertise, Oceaneering also serves the defense,\nentertainment, and aerospace industries. Oceaneeringâ€™s business offerings\ninclude remotely operated vehicles, built-to-order specialty subsea hardware,\ndeepwater intervention and manned diving services, non-destructive testing and\ninspection, and engineering and project management.</span><br>\n<br>\n<span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Oceaneering Inspection Division is a major\nprovider of engineering, inspection and non-destructive testing services, with\nworldwide capability to the petrochemical, power generation, oil and gas and\naerospace industries.<o:p></o:p></span></span></p>\n                                        ', 4, 1, 2, 1, 3, 'Kolhapur, Maharashtra, India', 'Drilling/Rig', 'Sales', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '16.745721745826', '74.249902439209'),
(8, 40, 'Lead Water Treatment', '<p class="MsoNormal"><o:p>&nbsp;</o:p></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Overview /\nResponsibilities<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Wood is seeking\na&nbsp;<b>Lead Water Treatment Plant Operator&nbsp;</b>to join our project team\nin Columbus, GA.<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><b><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Key Responsibilities</span></b><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:\n&quot;Times New Roman&quot;;color:#142A54"><o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Leads operation of sewage\ntreatment, sludge processing, and disposal equipment in wastewater (sewage)\ntreatment plant to control flow and processing of sewage<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Monitors control\npanels and adjusts valves and gates manually or by remote control to regulate\nflow of sewage<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Observes variations in\noperating conditions and interprets meter and gauge readings, and tests results\nto determine load requirements<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Starts and stops\npumps, engines and generators to control flow of raw sewage through filtering,\nsettling, aeration, and sludge digestion processes<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Maintains log of\noperations and records meter and gas readings<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Gives directions to\nwastewater treatment-plant attendants and sewage-disposal workers in performing\nroutine operations and maintenance<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Collects sewage\nsample, using dipper or bottle and conduct laboratory tests, using testing\nequipment, such as colorimeter<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">May operate and\nmaintain power generating equipment to provide steam and electricity for plant<o:p></o:p></span></p>\n                                        ', 9, 0, 2, 2, 3, 'Kolhapur Bus Stand (CBS), Benadikar Path', 'Production&Construction', 'Procurement', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '16.703527295482', '74.243209242328'),
(9, 41, 'Refinery Additives M', '<p class="MsoNormal"><o:p>&nbsp;</o:p></p><p class="MsoNormal">\n\n<b><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Position Overview</span></b><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">: Troubleshoots,\ndiagnoses, repairs, reconditions and services oil field equipment, systems and\ncomponents to ensure continuous operation with all appropriate regulations, and\nBasicâ€™s policies, practices, and procedures. This is a safety sensitive\nposition.</span><span style="font-size:10.0pt;line-height:107%;font-family:\n&quot;Arial&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:Calibri;mso-fareast-theme-font:\nminor-latin;color:#142A54;mso-ansi-language:EN-US;mso-fareast-language:EN-US;\nmso-bidi-language:AR-SA"><br>\n<!--[if !supportLineBreakNewLine]--><br>\n<!--[endif]--></span></p>\n                                        ', 8, 1, 2, 1, 3, 'Pune, Maharashtra, India', 'Production', 'Piping', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '18.458183722253', '73.860879944922'),
(10, 41, 'Iraq Basra: Plant Op', '<p class="MsoNormal"><o:p>&nbsp;</o:p></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">We are looking for the\nright people - people who want to innovate, achieve, grow and lead. We attract\nand retain the best talent by investing in our employees and empowering them to\ndevelop themselves and their careers. Experience the challenges, rewards and\nopportunity of working for one of the world-s largest providers of products and\nservices to the global energy industry.<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Under strict\nsupervision, reports to and receives assignments, instructions, and direction\nfrom the Foreman or General Foreman. Reads and interprets instructions and\ndocumentation and plans work activities. Operates equipment required to mix\ncompletion fluids and/or cementing materials as required by customer orders.\nPerforms role of shipping and receiving of palletized and pnuematic bulk\nproducts. Performs role of maintenance and assures plant is in safe working\ncondition.. Perfoms housekeeping on an daily basis. Observes and follows all\nsafety rules and procedures, including wearing required personal safety\nequipment. Performs other duties and activities as directed. Job tasks,\ncorrectly performed, impact indirectly on cost containment, efficiency,\nprofitability or operations. Skills typically acquired through completion of\nHigh School Diploma, G.E.D. or equivalent experience to include 4 years\nexperience as material handler. Driver''s license is required.<o:p></o:p></span></p>\n                                        ', 5, 2, 2, 1, 3, 'Pune, Maharashtra, India', 'Engineering&Science', 'NDT', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '18.648632301429', '73.787092516211'),
(11, 41, 'Coordinator-Work Pro', '<p class="MsoNormal"><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;</span>Job\nDescription<span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;The OTM Coordinator role has\nresponsibilities relating to the field effectiveness of Operator Task\nManagement including support to ensure availability and effectiveness of the\nuse of the Hand Held PC and Vibration Monitoring tools (OTM field surveillance\nactivity tools). An important aspect of this role is education and training of\npersonnel who use these tools.<o:p></o:p></span></p>\n                                        ', 6, 1, 2, 3, 3, 'Pune, Maharashtra, India', 'Production', 'Piping', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '18.500454823439', '73.94799875625'),
(12, 41, 'International Sales ', '<p margin:="" 0px="" 15px;="" padding:="" 10px="" 0px;="" line-height:="" 21px;="" word-wrap:="" break-word;="" font-family:="" arial,="" sans-serif;="" font-size:="" 16px;="" background-color:="" rgb(255,="" 255,="" 255);''''="" style="max-height: 1e+06px; margin-right: 0px; margin-bottom: 1em; margin-left: 0px; color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;">Work from production check lists, procedures, instructions, test plans, diagrams, prints, computer programs and similar documentation.</p><p margin:="" 0px="" 15px;="" padding:="" 10px="" 0px;="" line-height:="" 21px;="" word-wrap:="" break-word;="" font-family:="" arial,="" sans-serif;="" font-size:="" 16px;="" background-color:="" rgb(255,="" 255,="" 255);''''="" style="max-height: 1e+06px; margin-right: 0px; margin-bottom: 1em; margin-left: 0px; color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;">Receive units following designated phases of production.</p><p margin:="" 0px="" 15px;="" padding:="" 10px="" 0px;="" line-height:="" 21px;="" word-wrap:="" break-word;="" font-family:="" arial,="" sans-serif;="" font-size:="" 16px;="" background-color:="" rgb(255,="" 255,="" 255);''''="" style="max-height: 1e+06px; margin-right: 0px; margin-bottom: 1em; margin-left: 0px; color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;">Inspect units for completeness, alignment, cosmetics and compliance with customer order.</p><p margin:="" 0px="" 15px;="" padding:="" 10px="" 0px;="" line-height:="" 21px;="" word-wrap:="" break-word;="" font-family:="" arial,="" sans-serif;="" font-size:="" 16px;="" background-color:="" rgb(255,="" 255,="" 255);''''="" style="max-height: 1e+06px; margin-right: 0px; margin-bottom: 1em; margin-left: 0px; color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;">Set up test fixture and ensure the proper calibration of test table and fixture, install designated ball bar and ensure proper alignment, attachment and positioning of unit.</p>\n                                        ', 8, 1, 2, 2, 3, 'Pune, Maharashtra, India', 'Maritime', 'Pipeline', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '18.44395130844', '73.781610617383'),
(13, 41, 'Frac Operators and S', '<ul ''''="" style="max-height: 1e+06px; margin-bottom: 21px; padding-left: 13px; list-style-type: none; color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;"><li ''''="" style="max-height: 1e+06px; margin-bottom: 4px; position: relative;"><span dir="" ''''="" segoe="" style="max-height: 1e+06px;"><span ''''="" style="max-height: 1e+06px;">Blend and prepare chemicals for pumping according to established procedures.</span></span></li><li ''''="" style="max-height: 1e+06px; margin-bottom: 4px; position: relative;"><span dir="" ''''="" segoe="" style="max-height: 1e+06px;"><span ''''="" style="max-height: 1e+06px;">Operate assigned bulk and auxiliary equipment during treatment, recognizes equipment malfunctions, and correct them as necessary or report them to Service Supervisor.</span></span></li><li ''''="" style="max-height: 1e+06px; margin-bottom: 4px; position: relative;"><span dir="" ''''="" segoe="" style="max-height: 1e+06px;"><span ''''="" style="max-height: 1e+06px;">Spot equipment into position; rig up treating lines, hoses, wellhead connections, etc., to trucks, tanks and wells, according to company location safety standards.</span></span></li><li ''''="" style="max-height: 1e+06px; margin-bottom: 4px; position: relative;"><span dir="" ''''="" segoe="" style="max-height: 1e+06px;"><span ''''="" style="max-height: 1e+06px;">Drive specialized company equipment to and from service jobs, following accepted company convoy procedures.</span></span></li><li ''''="" style="max-height: 1e+06px; margin-bottom: 4px; position: relative;"><span dir="" ''''="" segoe="" style="max-height: 1e+06px;"><span ''''="" style="max-height: 1e+06px;">Training to complete core components, and develop basic skills to meet the equipment operator standard.</span></span></li><li ''''="" style="max-height: 1e+06px; margin-bottom: 4px; position: relative;"><span dir="" ''''="" segoe="" style="max-height: 1e+06px;"><span ''''="" style="max-height: 1e+06px;">Strive for service quality and SQM implementation.</span></span></li></ul>\n                                        ', 8, 1, 2, 1, 3, 'Pune, Maharashtra, India', 'OilfieldServices', 'Safety', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '18.590478383935', '73.954525566406'),
(14, 43, 'Warehouse Supervisor', '<span style="color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;">The Warehouse Supervisor is responsible for keeping storage areas in a clean and organized condition, ensuring shipments are manifested and shipped in a timely manner. This is a supervisory position and a good sound knowledge of warehouse procedures and duties is essential. The Warehouse Supervisor will report to the line manager above them</span>\n                                        ', 10, 1, 2, 3, 2, 'Malur Rural, Karnataka, India', 'Refining&Petrochem', 'Pipeline', 'B.E', 'MBA', '2018-01-25', 'Active', 'Yes', '12.916371', '77.551235'),
(15, 42, 'Plant Specialist', '<p class="MsoNormal"><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chevron North America\nExploration and Production is accepting online applications for the position of\na Plant Specialist located at the Buckeye Plant near Lovington, NM through\nFebruary 1, 2018 at 11:59 p.m. (Eastern Standard Time).</span><span style="font-size:10.0pt;line-height:107%;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\ncolor:#142A54"><br>\n<br>\n<b><span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Overview:</span></b><br>\n<span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">This position assumes the responsibility of\nmonitoring and optimization of all production process variables, ensuring that\nall production equipment is operating at peak reliability and efficiency, and\nacquiring and storing data.<o:p></o:p></span></span></p>\n                                        ', 5, 1, 2, 1, 2, 'Thajir, Najran, Saudi Arabia', 'Refining&Petrochem', 'Pipeline', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '18.365991219558', '44.382778783887'),
(16, 42, 'Terminal Manager', '<p class="MsoNormal"><span style="font-size: 10pt; line-height: 107%; font-family: Arial, sans-serif; color: rgb(20, 42, 84); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">NES Global Talent is a\nleading global technical recruitment company providing professional contract\nand permanent staff to a diverse world-wide client base within the oil &amp;\ngas industry. Our client, a growing Midstream Operator, has a permanent\nopportunity for a Terminal Manager to be based in Harvey, Louisiana.<o:p></o:p></span></p>\n                                        ', 8, 1, 2, 1, 2, 'Ash Shalfa, Eastern Province, Saudi Arab', 'Maintenance&Inspection', 'Pipeline', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '21.877636222611', '49.70793509043'),
(17, 42, 'Assistant Operator', '<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">To work within a team\nto assist under supervision with the running of pipeline equipment ensuring\nsuccessful safe operations in accordance with Company procedures and thereby\nensuring a quality service to client.<o:p></o:p></span></p>\n                                        ', 4, 1, 2, 2, 3, 'Thabhloten, Eastern Province, Saudi Arab', 'Maintenance&Inspection', 'Pipeline', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '19.706372377655', '53.956478213184'),
(18, 42, 'Pipeline Operator', '<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">To work within a team\nto assist under supervision with the running of pipeline equipment ensuring\nsuccessful safe operations in accordance with Company procedures and thereby\nensuring a quality service to client.<o:p></o:p></span></p>\n                                        ', 4, 1, 2, 2, 3, 'Hail, Hail Province, Saudi Arabia', 'Production', 'Safety', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '27.518717943467', '41.657652913281'),
(19, 42, 'Lead Water Treatment', '<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Wood is seeking\na&nbsp;<b>Lead Water Treatment Plant Operator&nbsp;</b>to join our project team&nbsp;<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 12pt; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><b><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Key Responsibilities</span></b><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:\n&quot;Times New Roman&quot;;color:#142A54"><o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Leads operation of sewage\ntreatment, sludge processing, and disposal equipment in wastewater (sewage)\ntreatment plant to control flow and processing of sewage<o:p></o:p></span></p>\n\n<p class="MsoNormal" style="margin-bottom: 3pt; margin-left: 0in; text-indent: -0.25in; line-height: normal; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><!--[if !supportLists]--><span style="font-size:10.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;\nmso-bidi-font-family:Symbol;color:#142A54">Â·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;color:#142A54">Monitors control\npanels and adjusts valves and gates manually or by remote control to regulate\nflow of sewage<o:p></o:p></span></p>\n                                        ', 3, 1, 2, 1, 2, 'Tabuk, Tabuk Province, Saudi Arabia', 'Engineering&Science', 'Safety', 'B.E.', 'M.E.', '2018-01-25', 'Active', 'Yes', '28.375050152661', '36.54421814375'),
(20, 43, 'MYjob', 'descroption sadfsdaf', 5, 1, 2, 1, 2, 'Malur Rural, Karnataka, India', 'Refining&Petrochem', 'Safety', '', 'MBA', '2018-01-26', 'Inactive', 'No', '12.987657140886', '77.918659379687');

-- --------------------------------------------------------

--
-- Table structure for table `jobpostskillset`
--

CREATE TABLE IF NOT EXISTS `jobpostskillset` (
  `JobPostSkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `JobPostID` int(11) NOT NULL,
  `SkillSetID` varchar(50) NOT NULL,
  PRIMARY KEY (`JobPostSkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `jobpostskillset`
--

INSERT INTO `jobpostskillset` (`JobPostSkillSetID`, `JobPostID`, `SkillSetID`) VALUES
(1, 4, 'Arvhitect,Accounting,CAD / CAM,Camp Boss'),
(2, 5, 'A B Seaman,Accounting,Architect'),
(3, 6, 'Business A,casing,catering'),
(4, 7, 'Camp Boss,asset management,barge engineer'),
(5, 8, 'asset integrity engineer,A B Seaman,Architect'),
(6, 9, 'A B Seaman,Architect'),
(7, 10, 'A.B.SEAMON,ARCHITECTURE,DRILLING'),
(8, 11, 'architecture,A.B.Seamon'),
(9, 12, 'drilling,CAD / CAM'),
(10, 13, 'casing,camp bass,CAD / CAM'),
(11, 14, 'Ballast Co,Crane Operator'),
(12, 15, 'Architect,Bookkeeper'),
(13, 16, 'Architect,Ballast Co,CAD / CAM'),
(14, 17, 'CAD / CAM,Architect'),
(15, 18, 'Asset Inte,Ballast Co'),
(16, 19, 'CAD / CAM,Architect'),
(17, 20, 'operator');

-- --------------------------------------------------------

--
-- Table structure for table `jobqulaification`
--

CREATE TABLE IF NOT EXISTS `jobqulaification` (
  `JobQualificationID` int(11) NOT NULL AUTO_INCREMENT,
  `JobQualification` varchar(80) NOT NULL,
  `QualificationType` varchar(10) NOT NULL,
  PRIMARY KEY (`JobQualificationID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `jobqulaification`
--

INSERT INTO `jobqulaification` (`JobQualificationID`, `JobQualification`, `QualificationType`) VALUES
(1, 'B. Tech (Information Technology) ', 'Bachelor'),
(2, 'B.Tech (Electrical Engineering) ', 'Bachelor'),
(3, 'B. Tech (Civil Engineering)  ', 'Bachelor'),
(4, 'B.Tech (Petroleum Engineering)  ', 'Bachelor'),
(5, 'Bachelor of Business Administration(B.B.A)  ', 'Bachelor'),
(6, 'B A. Economics (Honors) ', 'Bachelor'),
(7, 'Bachelor of Computer Application(B.C.A)  ', 'Bachelor'),
(8, 'Bachelor of Business Administration(B.B.A)', 'Bachelor'),
(9, 'M.Tech Biotechnology ', 'Master'),
(10, 'M.Tech Geo-Informatics ', 'Master'),
(11, 'Master of Business Administration ', 'Master'),
(12, 'M. Sc. (Information Technology)  ', 'Master'),
(13, 'M.Tech (Control System)  ', 'Master'),
(14, 'M.Tech (Communication Systems)  ', 'Master'),
(15, 'M.Tech (Computer Science & Engg.)  ', 'Master'),
(16, 'M.Tech (VLSI Design and System)  ', 'Master'),
(17, 'M.Tech Structural Engineering  ', 'Master'),
(18, 'M. Tech in Computer Network Engg  ', 'Master'),
(19, 'M.Sc. Environmental Science', 'Master'),
(20, 'M.Tech (CAD/CAM Engineering) ', 'Master');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `jobseekereducatindetails`
--

INSERT INTO `jobseekereducatindetails` (`JobSeekerEducatinDetailsID`, `JobSeekerID`, `HighestQualification`, `InstituteName`, `CourseType`, `PassoutYear`, `CPI`) VALUES
(1, 46, 'BE', 'Dange Coll', 'Full Time', 2016, '85');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `jobseekerprofile`
--

INSERT INTO `jobseekerprofile` (`id`, `JobSeekerID`, `FirstName`, `DOB`, `Address`, `Location`, `Gender`, `Contact`, `PassportNo`, `Email`, `JobSeekerType`) VALUES
(1, 46, 'Kiran More', '1995-07-26', 'Kolhapur', 'Pune', 'NA', 2147483647, 'PAS465465646', 'kiranmore@gmail.com', 'Freshers');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `jobseekerprofileimage`
--

INSERT INTO `jobseekerprofileimage` (`JobSeekerProfileImageID`, `ProfileImage`, `JobSeekerID`) VALUES
(1, 'JobSeeker_Profile/46Profile.jpg', 46);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `jobseekerresume`
--

INSERT INTO `jobseekerresume` (`JobSeekerResumeID`, `JobSeekerID`, `Resume`) VALUES
(1, 46, 'JobSeeker_Resume/5a6a9615cb598.pdf');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `jobseekerskillset`
--

INSERT INTO `jobseekerskillset` (`JobSeekerSkillSetID`, `JobSeekerID`, `SkillSetID`, `SkillExp`) VALUES
(1, 46, 'java', '1');

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
-- Table structure for table `membershipplan`
--

CREATE TABLE IF NOT EXISTS `membershipplan` (
  `MembershipPlanId` int(11) NOT NULL AUTO_INCREMENT,
  `MembershipPlanName` varchar(50) NOT NULL,
  `MembershipPlanDescription` varchar(1000) NOT NULL,
  `MembershipPlanCost` decimal(10,2) NOT NULL,
  PRIMARY KEY (`MembershipPlanId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `membershipplan`
--

INSERT INTO `membershipplan` (`MembershipPlanId`, `MembershipPlanName`, `MembershipPlanDescription`, `MembershipPlanCost`) VALUES
(1, 'Featured', 'Featured projects attract more, higher-quality bids.', '9.00'),
(2, 'Urgent', 'Marks a project as urgent. Receive a faster response from Assignment Seeker to get your project started within 24 hours.', '9.00'),
(3, 'Private', 'Hide project details from search engines and users that are not logged in. Recommended for projects where confidentiality is a must.', '19.00'),
(4, 'Full Time', 'This project is for hiring a full time or commission-based position (e.g. Sales) and you will save money if you have ongoing work. Project fees are charged only if the project value exceeds $5000.00 USD calculated on the value of each payment made.', '199.00'),
(5, 'Recruiter', 'Our agent will clarify the project with you if necessary and will recommend a bidder based on your project requirements and the online bidder profile. The agent may also invite more Assignment Seekerto bid.', '19.00'),
(6, 'Non-Disclosure Agreement (NDA)', 'Assignment Seeker are prompted to sign a Non-Disclosure Agreement when working on a project. Assignment Seeker agree to keep details discussed through private messages and files confidential. ', '19.00'),
(7, 'IP Agreement', 'Assignment Seeker are prompted to sign an Intellectual Property (IP) Agreement when working on a project. This will demonstrate that all the work done belongs to you.', '19.00'),
(8, 'Sealed', 'Seal all bids so that Assignment Seeker cannot see what others are bidding.', '9.00'),
(9, 'Priority', 'List your project immediately by skipping the queue for admin to review your project.', '5.00'),
(10, 'Extend', 'Extend your project''s bidding period by 7 days to increase the amount of time to receive more bids.', '9.00'),
(11, 'Delete', 'Permanently remove your project fromProcStart, including all bids and attached files. Your project will also be removed from search engines the next time ProcStart is indexed.', '5.00');

-- --------------------------------------------------------

--
-- Table structure for table `membershipplanfeatures`
--

CREATE TABLE IF NOT EXISTS `membershipplanfeatures` (
  `PlanFeaturesID` int(10) NOT NULL AUTO_INCREMENT,
  `UserPlanID` int(10) NOT NULL,
  `UnlockRewards` varchar(6) NOT NULL,
  `UnlimitedProjectBookmarks` varchar(6) NOT NULL,
  `CustomCoverPhoto` varchar(6) NOT NULL,
  `DailyWithdrawals` varchar(6) NOT NULL,
  `PreferredAssignmentSeekerEligible` varchar(6) NOT NULL,
  `FreeProjectExtensions` varchar(6) NOT NULL,
  `HighValueProjectBidding` varchar(6) NOT NULL,
  `FreeSealedProjects` varchar(6) NOT NULL,
  `FreeNDAProjects` varchar(6) NOT NULL,
  `UnlimitedEmployerFollowings` varchar(6) NOT NULL,
  `UnlimitedExternalInvoicing` varchar(6) NOT NULL,
  PRIMARY KEY (`PlanFeaturesID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `membershipplanfeatures`
--

INSERT INTO `membershipplanfeatures` (`PlanFeaturesID`, `UserPlanID`, `UnlockRewards`, `UnlimitedProjectBookmarks`, `CustomCoverPhoto`, `DailyWithdrawals`, `PreferredAssignmentSeekerEligible`, `FreeProjectExtensions`, `HighValueProjectBidding`, `FreeSealedProjects`, `FreeNDAProjects`, `UnlimitedEmployerFollowings`, `UnlimitedExternalInvoicing`) VALUES
(1, 1, '1', '1', '1', '', '', '', '', '', '', '', ''),
(3, 3, '1', '0', '1', '', '', '', '', '', '', '', ''),
(4, 4, '1', '0', '0', '', '', '', '', '', '', '', ''),
(6, 7, '1', '0', '0', '0', '1', '0', '0', '1', '', '', ''),
(7, 8, '1', '0', '0', '0', '1', '0', '1', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `membershipplantypes`
--

CREATE TABLE IF NOT EXISTS `membershipplantypes` (
  `PlanTypeID` int(10) NOT NULL AUTO_INCREMENT,
  `PlanName` varchar(15) NOT NULL,
  PRIMARY KEY (`PlanTypeID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `membershipplantypes`
--

INSERT INTO `membershipplantypes` (`PlanTypeID`, `PlanName`) VALUES
(1, 'Intro'),
(2, 'Basic'),
(3, 'Plus'),
(4, 'Professional'),
(5, 'Premier');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `messageboard`
--

INSERT INTO `messageboard` (`MessageBoardID`, `SenderID`, `ReceiverID`, `Message`, `MessageTime`, `Status`) VALUES
(1, 49, 1, 'hii as...', '2018-02-01 04:21:28', 0),
(2, 1, 49, 'hii...', '2018-02-01 04:21:28', 0),
(3, 1, 49, 'pooja..', '2018-02-01 05:21:28', 0),
(4, 49, 1, 'gm', '2018-02-09 06:09:20', 0);

-- --------------------------------------------------------

--
-- Table structure for table `planconfiguration`
--

CREATE TABLE IF NOT EXISTS `planconfiguration` (
  `PlanConfigurationID` int(10) NOT NULL AUTO_INCREMENT,
  `UserPlanID` int(10) NOT NULL,
  `PlanConfiguredBy` int(10) NOT NULL,
  `AnnualSubs` int(10) NOT NULL,
  `MonthSubs` int(10) NOT NULL,
  `Description` text NOT NULL,
  PRIMARY KEY (`PlanConfigurationID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `planconfiguration`
--

INSERT INTO `planconfiguration` (`PlanConfigurationID`, `UserPlanID`, `PlanConfiguredBy`, `AnnualSubs`, `MonthSubs`, `Description`) VALUES
(2, 3, 1, 89, 59, 'p'),
(3, 4, 1, 1500, 1500, 'intro plan'),
(4, 7, 1, 2000, 2000, 'Professional plan desc');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `projectapplyactivity`
--

INSERT INTO `projectapplyactivity` (`ProjectApplyActivityID`, `UserID`, `BiddAmount`, `BiddDescription`, `ProjectPostID`, `ApplyDate`, `ProjectApplyStatus`) VALUES
(1, 49, '50', 'i am as...', 1, '2018-02-09', 'yes');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `projectmilestonedetails`
--

INSERT INTO `projectmilestonedetails` (`ProjectMilestoneID`, `ProjectPostID`, `MilestoneName`, `MilestoneDate`, `MilestoneBudget`) VALUES
(1, 1, 'Milestone1', '2017-10-10', 500),
(2, 2, 'Milestone 1', '2017-10-10', 100),
(3, 2, 'Milestone 2', '2017-10-10', 100),
(4, 3, 'Milestone 1', '2017-10-10', 600),
(5, 4, 'Milestone 1', '2017-10-10', 150),
(6, 4, 'Milestone 2', '2017-10-10', 100),
(7, 5, 'Milestone 1', '2017-10-10', 500),
(8, 6, 'pp', '2017-10-10', 55);

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
  `MembershipType` int(11) NOT NULL,
  PRIMARY KEY (`ProjectPostID`),
  KEY `MembershipPlanId` (`MembershipType`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `projectpost`
--

INSERT INTO `projectpost` (`ProjectPostID`, `ProjectPostBy`, `ProjectName`, `ProjectDesc`, `ProjectBudget`, `ProjectType`, `ProjectStartDate`, `ProjectEndDate`, `ProjectDateTime`, `ProjectLocation`, `AssignmentActive`, `AssignmentAprrovedstatus`, `lat`, `lng`, `MembershipType`) VALUES
(1, 40, 'Test Assignment', 'desc', 500, 'oil', '2018-02-06', '2018-02-06', '2018-01-25 00:00:00', 'Pune, Maharashtra, India', 'Active', 'Yes', '16.685817051919', '74.334543175293', 2),
(2, 40, 'Design Engine Oil La', '<span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;">Design a label for bike engine oil with the given logo. Also i am uploading a sample bottle with label and everything design but i need something different and new</span>\n                                    ', 200, 'Design', '2018-01-01', '2018-01-01', '2018-01-25 00:00:00', 'Kolhapur Bus Stand (CBS), Benadikar Path', 'Inactive', 'No', '16.703527295482', '74.243209242328', 2),
(3, 40, 'Design project', '<a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/engineering-design-process-project-ideas/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">engineering design process project ideas</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-project-civil-engineering/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design project civil engineering</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/engineering-design-projects-examples/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">engineering design projects examples</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-for-project-in-school/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design for project in school</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-project-ideas-for-students/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design project ideas for students</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-project-ideas-for-mechanical-engineers/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design project ideas for mechanical engineers</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-project-definition/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design project definition</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-project-for-mechanical-engineering/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design project for mechanical engineering</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/write-a-design-brief-with-spectations-for-the-packaging-you-are-going-to-make/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">write a design brief with spectations for the packaging you are going to make</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/design-write-a-design-brief-with-specifications-for-the-packaging-you-are-going-to-make/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">design write a design brief with specifications for the packaging you are going to make</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/need-freelance-graphic-design-project/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); text-decoration-line: underline; color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">need freelance graphic design project</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-want-to-make-a-catalog-i-need-designers/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i want to make a catalog i need designers</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-web-design-for-an-online-store-that-basically-specialises-in-the-sales-of-agricultural-products-such-as-poultry-product/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a web design for an online store that basically specialises in the sales of agricultural products such as poultry product</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/need-quick-easy-graphic-design-project/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">need quick easy graphic design project</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/need-sale-person-web-design-project/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">need sale person web design project</a>\n                                    ', 600, 'Design', '2018-02-01', '2018-03-31', '2018-01-25 00:00:00', 'Kolhapur Bus Stand (CBS), Benadikar Path', 'Active', 'Yes', '16.703527295482', '74.243209242328', 2),
(4, 42, 'AirDrive Oil and gas', '<span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-gas-station/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a gas station</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-gas-station-design/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a gas station design</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-italian-animation-team/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need italian animation team</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-help-with-walk-animation/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need help with walk animation</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-writer-for-my-animation/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a writer for my animation</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-logo-designed-similar-to-rated-people/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a logo designed similar to rated people</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-good-brand-name-for-oil-field-piping-process/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a good brand name for oil field piping process</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-dry-ice-qualified-expert-worked-oil-and-gas-engines-stations/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a dry ice qualified expert worked oil and gas engines stations</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-animation-logo-for-free/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a animation logo for free</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-animation-logo/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a animation logo</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-animation-from-indian-company/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a animation from indian company</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-3d-animation-intro/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a 3d animation intro</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-someone-to-create-a-basic-site-similar/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need someone to create a basic site similar</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-tshirt-design-for-a-promotion-that-shell-oil/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a tshirt design for a promotion that shell oil</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/i-need-a-design-for-the-main-web-page-and-subpage-for-a-oil-and-gas-company/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">i need a design for the main web page and subpage for a oil and gas company</a>\n                                    ', 250, 'Design', '2018-01-01', '2018-03-08', '2018-01-25 00:00:00', '66611, Saudi Arabia', 'Active', 'Yes', '18.145960168399', '44.7275995', 2),
(5, 42, 'Crude palm oil tradi', '<a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/oil-trading-academy-reviews/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">oil trading academy reviews</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/oil-trading-academy-code-2/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">oil trading academy code 2</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/oil-trading-academy/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">oil trading academy</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/google-oil-trading-academy/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">google oil trading academy</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/ton-per-hour-palm-oil-plant/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">ton per hour palm oil plant</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/palm-oil-business-consultant/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">palm oil business consultant</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/palm-oil-extraction-plant/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">palm oil extraction plant</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/palm-oil-writer/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">palm oil writer</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/tons-per-hour-palm-oil/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">tons per hour palm oil</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/palm-oil-management-software/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">palm oil management software</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/palm-oil-industry-philippines/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">palm oil industry philippines</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/palm-oil/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">palm oil</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/online-trading-virtual-trade/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">online trading virtual trade</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/check-roll-palm-oil-plantation/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">check roll palm oil plantation</a><span style="color: rgb(31, 40, 54); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">,&nbsp;</span><a class="PageProjectViewLogout-detail-tags-link" href="https://www.freelancer.com/job-search/tick-trading-auto-trade-software/" style="box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(31, 40, 54); transition: color 0.1s ease-out; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">tick trading auto trade software</a>\n                                    ', 500, 'Trading', '2018-01-01', '2018-02-28', '2018-01-25 00:00:00', '66611, Saudi Arabia', 'Active', 'Yes', '18.145960168399', '44.7275995', 2),
(6, 40, 'Assignment1', 'nbjh', 656, 'type1', '2018-02-05', '2018-04-04', '2018-02-08 00:00:00', 'Kolhapur Bus Stand (CBS), Benadikar Path', 'Active', 'No', '16.703527295482', '74.243209242328', 1);

-- --------------------------------------------------------

--
-- Table structure for table `projectuploadeddocumnet`
--

CREATE TABLE IF NOT EXISTS `projectuploadeddocumnet` (
  `ProjectDocumnetID` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectPostID` int(11) NOT NULL,
  `ProjectDocument` varchar(50) NOT NULL,
  PRIMARY KEY (`ProjectDocumnetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `projectuploadeddocumnet`
--

INSERT INTO `projectuploadeddocumnet` (`ProjectDocumnetID`, `ProjectPostID`, `ProjectDocument`) VALUES
(1, 1, 'Project_Document/5a69f491eea12.docx'),
(2, 2, 'Project_Document/5a6a284199279.txt'),
(3, 3, 'Project_Document/5a6a28dd2eb36.txt'),
(4, 4, 'Project_Document/5a6a2a135031d.txt'),
(5, 5, 'Project_Document/5a6a2b49390fd.txt');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=44 ;

--
-- Dumping data for table `registeruserinforamtion`
--

INSERT INTO `registeruserinforamtion` (`UserID`, `AuthorizedPersonName`, `AuthorizedPersonContact`, `AuthorizedPersonEmail`, `IndustryType`, `CompanyName`, `CompanyRegisteredAddress`, `CompanyEmailId`, `CompanyURL`, `CompanyLogo`, `CompanyRegistrationNo`, `AboutCompany`, `IncorporationDate`, `IncorporationCertificate`, `Country`, `State`, `PANNo`, `TANNo`, `Lat`, `Lng`, `officelocation`, `ProfileComplete`) VALUES
(40, 'Aroof Shaikh', '2147483647', 'aroof@gmail.com', 'Oil Refinery', 'Cybertriumph', 'Flat no. A/702, Waterfront apt, A Ward, ', 'info@cybertriumph.com', 'obstimkm.in', 'CompanyLogo/5a69f1ac93b27.png', '12345682756', '<h3 style="box-sizing: border-box; padding: 0px; margin-top: 0px; margin-bottom: 15px; font-family: Raleway, sans-serif; font-weight: 600; line-height: normal; color: rgb(51, 51, 51); font-size: 18px; position: relative;">Our work is about your users and their experience of you and what you offer</h3><p style="box-sizing: border-box; padding: 0px; margin: 15px 0px; font-size: 15px; color: rgb(51, 51, 51); line-height: 24px; font-family: &quot;Open Sans&quot;, sans-serif;">Our unique approach of â€œlistenâ€ allows us to understand your business and provide precise technical solutions coupled with business insights based on our experience with hundreds of projects and dozens of different industries. We work with you, not for or against you, to understand the expectations of the project. We hear what you donâ€™t say and propose technological solutions you may not have thought of. We use our vast development experience to work with you one-on-one as a partner.&nbsp;<br style="box-sizing: border-box; padding: 0px; margin: 0px;"></p>\n                                ', '2010-01-24', 'IncorporationCertificate/5a69f1ac9409a.docx', 'India', 'Maharashtra', 'GQPP5934H', '15784454', '16.703527295482', '74.243209242328', 'Kolhapur Bus Stand (CBS), Benadikar Path, Shahupur', 100),
(41, 'Hemant Jadhav', '2147483647', 'hemant222@gmail.co.in', 'IT', 'ARTISIGHTS SOLUTIONS', 'pune', 'artisight@gmail.com', 'www.artisight.com', 'CompanyLogo/5a69fa3d5703f.jpg', '168083', '<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Artisights Solutions Private Limited is a Private incorporated on 23 January 2017. It is classified as Non-govt company and is registered at Registrar of Companies, Pune. Its authorized share capital is Rs. 100,000 and its paid up capital is Rs. 100,000.It is inolved in Other computer related activities [for example maintenance of websites of other firms/ creation of multimedia presentations for other firms etc.]</span><br style="box-sizing: border-box; padding: 0px; margin: 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><br style="box-sizing: border-box; padding: 0px; margin: 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Artisights Solutions Private Limited''s Annual General Meeting (AGM) was last held on N/A and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on N/A.</span><br style="box-sizing: border-box; padding: 0px; margin: 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><br style="box-sizing: border-box; padding: 0px; margin: 0px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Directors of Artisights Solutions Private Limited are Snehal Ganesh Markad and Tarabai Madhav Adasare.</span>\n                                ', '2017-01-22', 'IncorporationCertificate/5a69fa3d5786e.jpg', 'india', 'maharashtra', 'AAPFA3421J', 'KLLL222', '18.501872697196', '73.867114084656', 'S T Depot Bus Stop, Jagannath Shankarsheth Rd, Gho', 100),
(42, 'Kedar Torase', '2147483647', 'kedar566@gmail.com', 'oil industry', 'NFS Global private l', 'Al Haram, Medina 42311, Saudi Arabia', 'nfs@nfs.com', 'nfs.com', 'CompanyLogo/5a6a01c7ce7a7.png', '253356', '<span style="color: rgb(20, 42, 84); font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 13px;">The company has a long standing track record of realizing successful projects globally. Equipped with a strong reputation and a broad range of services, it is the Sales Manager''s responsibility to sell our solution-based services to new and existing accounts in the USA for pipeline leak detection for terminals, chemical plants &amp; refineries.</span>\n                                ', '2014-02-09', 'IncorporationCertificate/5a6a01c7cee67.jpg', 'Soudi Arabia', 'Soudi Arabia', 'FDFDF12355', 'GFFFD524D', '18.145960168399', '44.7275995', '66611, Saudi Arabia', 100),
(43, 'Chandrakanta Mo', '2147483647', 'ktorase@gmail.com', 'Refineries', 'Obstin Infratech', 'Bangalore, Karnataka, India', 'support@obstin.in', 'www.obstin.in', 'CompanyLogo/5a6a048916fb1.png', 'OB123456', '<p style="margin: 0.5em 0px; line-height: inherit; color: rgb(34, 34, 34); font-family: sans-serif;">Oil refineries are typically large, sprawling&nbsp;<a href="https://en.wikipedia.org/wiki/Industry" title="Industry" style="color: rgb(11, 0, 128); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">industrial</a>&nbsp;complexes with extensive&nbsp;<a href="https://en.wikipedia.org/wiki/Piping" title="Piping" style="color: rgb(11, 0, 128); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">piping</a>&nbsp;running throughout, carrying streams of&nbsp;<a href="https://en.wikipedia.org/wiki/Fluid" title="Fluid" style="color: rgb(11, 0, 128); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">fluids</a>&nbsp;between large&nbsp;<a href="https://en.wikipedia.org/wiki/Chemical_process" title="Chemical process" style="color: rgb(11, 0, 128); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">chemical processing</a>&nbsp;units, such as&nbsp;<a href="https://en.wikipedia.org/wiki/Distillation" title="Distillation" style="color: rgb(11, 0, 128); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">distillation</a>&nbsp;columns. In many ways, oil refineries use much of the technology of, and can be thought of, as types of&nbsp;<a href="https://en.wikipedia.org/wiki/Chemical_plant" title="Chemical plant" style="color: rgb(11, 0, 128); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">chemical plants</a>.</p><div><br></div>\n                                ', '1990-12-07', 'IncorporationCertificate/5a6a048917562.png', 'India', 'Maharashtra', 'PAN154645646', 'TAN4654654654', '12.987657140886', '77.918659379687', 'Malur Rural, Karnataka, India', 100);

-- --------------------------------------------------------

--
-- Table structure for table `skillset`
--

CREATE TABLE IF NOT EXISTS `skillset` (
  `SkillSetID` int(11) NOT NULL AUTO_INCREMENT,
  `SkillSetName` varchar(10) NOT NULL,
  PRIMARY KEY (`SkillSetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `skillset`
--

INSERT INTO `skillset` (`SkillSetID`, `SkillSetName`) VALUES
(1, 'A B Seaman'),
(2, 'Accounting'),
(3, 'Architect'),
(4, 'Asset Inte'),
(5, 'Asset Mana'),
(6, 'Ballast Co'),
(7, 'Barge Engi'),
(8, 'Barge Mast'),
(9, 'Bookkeeper'),
(10, 'Budget / C'),
(11, 'Business A'),
(12, 'Business D'),
(13, 'Business D'),
(14, 'CAD / CAM'),
(15, 'Camp Boss'),
(16, 'Captain / '),
(17, 'Cartograph'),
(18, 'Cartograph');

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
(1, 1, 'Mohan', 'No', 'mohan@gmail.com', 'mohan@1234', 'Male', 2147483647, '2017-10-24', 'No', 'No'),
(5, 5, 'Mohan', 'No', 'mp@gmail.com', '1234', 'Male', 2147483647, '2017-10-25', 'No', 'No'),
(28, 1, 'Mohan Patil', 'No', 'mp@mpkl.com', 'M@123456', 'Male', 2147483647, '2017-12-04', 'No', 'No'),
(31, 6, 'rohan', 'No', 'rohan@gm.com', '1234', 'Male', 2147483647, '2017-12-15', 'No', 'No'),
(32, 5, 'Mohan Balaso pa', 'No', 'mp@mp1.com', 'M@123456', 'Male', 2147483647, '2017-12-26', 'No', 'No'),
(33, 7, 'SuperAdmin', 'No', 'admin@procstart.com', 'admin@123', 'No', 0, '2018-01-02', 'Active', 'Yes'),
(34, 6, 'Mohan', 'No', 'mp@mppp.com', 'M@123456', 'Male', 2147483647, '2018-01-09', 'No', 'No'),
(35, 5, 'mo', 'No', 'mo@mkmk.com', 'M@123456', 'Male', 2147483647, '2018-01-09', 'No', 'No'),
(36, 5, 'Mohan', 'No', 'mp@mpk.com', 'M@123456', 'Male', 2147483647, '2018-01-13', 'No', 'No'),
(37, 5, 'Aroof Shaikh', 'No', 'aroofshaikh@gmail.com', 'Kingkhan@123', 'Male', 2147483647, '2018-01-19', 'No', 'No'),
(38, 5, 'Mohan', 'No', 'mohanpp@gmai.com', 'M@123456', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(39, 5, 'Aroof shaikh', 'No', 'aruf_groovy@yahoo.com', 'Kingkhan123@', 'Male', 2147483647, '2018-01-20', 'No', 'No'),
(40, 1, 'Aroof Shaikh', 'No', 'aroof@gmail.com', 'Aroof@123', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(41, 1, 'Hemant Jadhav', 'No', 'hemant222@gmail.co.in', 'h@123456', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(42, 1, 'Kedar Torase', 'No', 'kedar566@gmail.com', 'k@123456', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(43, 1, 'Chandrakanta Mo', 'No', 'ktorase@gmail.com', 'ktorase@55', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(44, 6, 'Mohan Patil', 'No', 'mohanpatill@gmail.co.in', 'M@123456', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(45, 6, 'Rohit', 'No', 'rohitkadam415@gmail.com', 'rohit@123', 'Male', 2147483647, '2018-01-25', 'No', 'No'),
(46, 5, 'Kiran More', 'No', 'kiranmore@gmail.com', 'kiran@123', 'Male', 2147483647, '2018-01-26', 'No', 'No'),
(47, 5, 'Ravikiran Toras', 'No', 'ravikiran@gmail.com', 'ravikiran@55', 'Male', 2147483647, '2018-01-26', 'No', 'No'),
(48, 1, 'client', 'No', 'client@gmail.com', 'client@1', 'Male', 2147483647, '2018-02-08', 'No', 'No'),
(49, 6, 'as', 'No', 'as@gmail.com', 'as@12345', 'Female', 2147483647, '2018-02-08', 'No', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `usermembershipplan`
--

CREATE TABLE IF NOT EXISTS `usermembershipplan` (
  `UserPlanID` int(10) NOT NULL AUTO_INCREMENT,
  `PlanTypeID` int(10) NOT NULL,
  `CreatedBy` int(10) NOT NULL,
  `NoOfBids` int(10) NOT NULL,
  `NoOfSkills` int(10) NOT NULL,
  `NoOfEmpFollw` int(10) NOT NULL,
  `NoOfExtInvoice` int(10) NOT NULL,
  PRIMARY KEY (`UserPlanID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `usermembershipplan`
--

INSERT INTO `usermembershipplan` (`UserPlanID`, `PlanTypeID`, `CreatedBy`, `NoOfBids`, `NoOfSkills`, `NoOfEmpFollw`, `NoOfExtInvoice`) VALUES
(1, 1, 34, 10, 10, 0, 0),
(3, 2, 1, 12, 12, 12, 0),
(4, 1, 1, 1500, 1500, 0, 0),
(7, 4, 1, 2000, 2000, 2000, 2000),
(8, 3, 1, 111, 111, 111, 111);

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
-- Constraints for table `projectpost`
--
ALTER TABLE `projectpost`
  ADD CONSTRAINT `MembershipPlanId` FOREIGN KEY (`MembershipType`) REFERENCES `membershipplan` (`MembershipPlanId`);

--
-- Constraints for table `useraccount`
--
ALTER TABLE `useraccount`
  ADD CONSTRAINT `UserTypeID` FOREIGN KEY (`UserTypeID`) REFERENCES `usertype` (`UserTypeID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
