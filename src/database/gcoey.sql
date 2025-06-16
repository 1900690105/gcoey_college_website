-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 05:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gcoey`
--

-- --------------------------------------------------------

--
-- Table structure for table `administration`
--

CREATE TABLE `administration` (
  `administration_id` int(11) NOT NULL,
  `administration_name` varchar(100) NOT NULL,
  `administration_post` varchar(50) NOT NULL,
  `administration_department` varchar(50) NOT NULL,
  `administration_image` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administration`
--

INSERT INTO `administration` (`administration_id`, `administration_name`, `administration_post`, `administration_department`, `administration_image`) VALUES
(1, 'Shri V C Rastogi', 'Principal Secretary', 'Higher & Technical Education', '/teachers/sir1.png'),
(2, 'Dr Vinod Mohitkar', 'Director', 'Technical Education', '/teachers/sir2.png'),
(3, 'Prof. V.B. Waghmare', 'Principal', 'Govt. College of Engg., Yavatmal', '/teachers/sir3.png');

-- --------------------------------------------------------

--
-- Table structure for table `administration_message`
--

CREATE TABLE `administration_message` (
  `message_id` int(11) NOT NULL,
  `message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administration_message`
--

INSERT INTO `administration_message` (`message_id`, `message`) VALUES
(1, ' We are delighted to have you with us. At GCOEY, we are committed to\r\n            nurturing the next generation of technical professionals who will\r\n            drive innovation and excellence in various sectors across India. As\r\n            an institution affiliated with Dr. Babasaheb Ambedkar Technological\r\n            University (BATU), we take pride in our mission to provide a quality\r\n            technical education that meets the demands of a rapidly evolving\r\n            industry. Join us on this journey of learning, growth, and success.\r\n            Welcome to GCOEY, where your future begins!');

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `aid` int(11) NOT NULL,
  `atid` varchar(20) NOT NULL,
  `aemail` varchar(30) NOT NULL,
  `apassword` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`aid`, `atid`, `aemail`, `apassword`) VALUES
(1, 'CO72', 'graminpoly123@gmail.com', '123456'),
(13, 'EXTC68', 'nikhilkandhare22@gmail.com', 'N12312312312');

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `aid` varchar(250) NOT NULL,
  `aname` varchar(50) NOT NULL,
  `linkedin_url` varchar(100) NOT NULL,
  `adept` varchar(20) NOT NULL,
  `abatch` decimal(50,0) NOT NULL,
  `apost` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `package` int(11) NOT NULL,
  `aphone` decimal(11,0) NOT NULL,
  `aaddress` varchar(150) NOT NULL,
  `message` varchar(2000) NOT NULL,
  `image` varchar(400) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`aid`, `aname`, `linkedin_url`, `adept`, `abatch`, `apost`, `company`, `package`, `aphone`, `aaddress`, `message`, `image`, `status`) VALUES
('2210121245502', 'nikhil k', 'sadf', 'CSE', 0, 'Web developer', 'google', 3, 91112432001, 'nanded', 'werf', 'https://drive.google.com/uc?id=1M-fJ9BO1ir1acgx1Cr3lEtQE5q8Pi0So', 'Active'),
('22101212845502', 'Saraswati Adkine', 'sadf', 'EE', 0, 'Electrical Helper', 'Relience', 7, 99999999999, 'efw', 'werf', 'https://drive.google.com/uc?id=1mKvo1Jf-P5HmBP9xo4dqcdPYkbK-SiPl', 'Active'),
('28801212845502', 'Pooja Kale', 'sadf', 'CSE', 0, 'Hardware Engineer', 'TCS', 8, 8888240411, 'efw', 'werf', 'https://drive.google.com/uc?id=1nx6GtGHLYR9ljic4EZqAC-s2UxWt352X', 'Active'),
('44801212845502', 'Jyoti Kokare', 'sadf', 'CSE', 0, 'Frontend Engineering', 'ABC Corporation', 7, 9988240411, 'latur', 'werf', 'https://drive.google.com/uc?id=1nx6GtGHLYR9ljic4EZqAC-s2UxWt352X', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `priority` enum('low','medium','high') DEFAULT 'medium',
  `targetAudience` enum('students','faculty','staff','all') DEFAULT 'all',
  `status` enum('active','draft') DEFAULT 'active',
  `createdAt` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`id`, `title`, `content`, `priority`, `targetAudience`, `status`, `createdAt`) VALUES
(1, 'hello', 'fghdfghf', 'low', 'students', 'active', '2025-06-07');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `bid` int(11) NOT NULL,
  `btitle` varchar(100) NOT NULL,
  `bimage` varchar(400) NOT NULL,
  `bdescription` varchar(400) NOT NULL,
  `bdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bonafide`
--

CREATE TABLE `bonafide` (
  `bid` int(11) NOT NULL,
  `bprn` decimal(13,0) NOT NULL,
  `bname` varchar(50) NOT NULL,
  `bdate` date NOT NULL DEFAULT current_timestamp(),
  `bclass` varchar(30) NOT NULL,
  `bdept` varchar(50) NOT NULL,
  `bcaste` varchar(20) NOT NULL,
  `bsubject` varchar(200) NOT NULL,
  `bapplication` varchar(400) NOT NULL,
  `ballotment` varchar(400) NOT NULL,
  `bfees` varchar(400) NOT NULL,
  `bstetus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bonafide`
--

INSERT INTO `bonafide` (`bid`, `bprn`, `bname`, `bdate`, `bclass`, `bdept`, `bcaste`, `bsubject`, `bapplication`, `ballotment`, `bfees`, `bstetus`) VALUES
(4, 2210121245502, 'test', '2024-05-01', '3', 'tsst', 'test', 'gsdhtjfyu', 'ce.jpg', 'co.jpg', 'el.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `collegedepartment`
--

CREATE TABLE `collegedepartment` (
  `id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `dname` varchar(255) NOT NULL,
  `established` decimal(50,0) NOT NULL,
  `idhod` varchar(400) NOT NULL,
  `dhod` varchar(255) NOT NULL,
  `hodmessage` varchar(5000) NOT NULL,
  `hodemail` varchar(255) NOT NULL,
  `hodphone` bigint(20) NOT NULL,
  `dstudent` int(11) NOT NULL,
  `dteacher` int(11) NOT NULL,
  `dclassroom` int(11) NOT NULL,
  `dlabs` int(11) NOT NULL,
  `dmassage` text NOT NULL,
  `dabout` text NOT NULL,
  `vision` varchar(400) NOT NULL,
  `mission` varchar(400) NOT NULL,
  `dcurriculum` varchar(255) NOT NULL,
  `timetable` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `collegedepartment`
--

INSERT INTO `collegedepartment` (`id`, `code`, `dname`, `established`, `idhod`, `dhod`, `hodmessage`, `hodemail`, `hodphone`, `dstudent`, `dteacher`, `dclassroom`, `dlabs`, `dmassage`, `dabout`, `vision`, `mission`, `dcurriculum`, `timetable`) VALUES
(6, 'CSE', 'Computer Engineering', 2018, '1vd_eDXnDhhFz1WUKj3RErWg3bQ3fHo8X', 'Prof. Chetan  Andhare', 'Dear Students and Visitors,\r\n\r\nWarm greetings from the Department of Computer Engineering at Government College of Engineering Yavatmal. Since its establishment in 2018, our department has been committed to providing quality education and shaping skilled professionals in the field of Computer Engineering.\r\n\r\nComputer Engineering is an ever-evolving discipline that plays a pivotal role in driving innovation and technological progress. It encompasses diverse areas, such as software development, artificial intelligence, data science, cybersecurity, and more. Our team of passionate and dedicated faculty members is committed to imparting knowledge and guiding students on their academic journey.\r\n\r\nIn our department, we strongly believe in inclusivity and diversity and as we stride ahead on our path of growth and evolution, we pledge to cultivate an environment of innovation and creativity. Moving forward, we are enthusiastic about making meaningful contributions to the technological landscape and solving real-world challenges through innovation and collaboration. Our goal is to empower our graduates with the skills and knowledge necessary to thrive in the competitive global landscape and make positive contributions to society.\r\n\r\nTo all our students, I extend my best wishes as you embark on this exciting journey of learning and self-discovery. Together, let\'s make a difference in the world of Computer Engineering and create a brighter future for all.', 'chetanandhare@gmail.com', 91124005522, 280, 8, 6, 3, 'Welcome to the Department of computer engineering at gcoey! As the Head of Department (HOD), it gives me immense pleasure to extend a warm greeting to all students, faculty members, staff, and visitors. Our department is committed to providing a nurturing and intellectually stimulating environment where students can excel academically, develop essential skills, and pursue their passions in technicaly]. ', 'The Computer Department at our college is a dynamic hub of innovation and learning, dedicated to fostering excellence in the field of computer science and technology. With a strong emphasis on theoretical knowledge and practical application, our department offers cutting-edge programs that equip students with the skills and expertise needed to thrive in the rapidly evolving IT industry. ', 'A vision statement outlines what the organization wants to be or how it wants the world in which it operates to be. It is a long-term view and concentrates on the future. It can be emotive and is a source of inspiration.', 'A mission statement defines the organization\'s purpose and primary objectives. Its focus is on what the organization does and its primary purpose. It should guide the actions of the organization, spell out its overall goal, provide a path, and guide decision-making.', 'Revised-Computer-Engg-Syllabus-wef-2021 (1).pdf', 'cotimetable (3).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `cid` int(11) NOT NULL,
  `image` varchar(400) NOT NULL,
  `companyName` varchar(50) NOT NULL,
  `numStudents` varchar(50) NOT NULL,
  `placementRate` varchar(50) NOT NULL,
  `avgPackage` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`cid`, `image`, `companyName`, `numStudents`, `placementRate`, `avgPackage`) VALUES
(2, 'assets/company/adni.jpeg', 'adani', '12', '12', '12'),
(3, 'assets/company/jio.jpeg', 'jio', '52', '5', '5'),
(4, 'assets/company/ongc.jpeg', 'ongc', '54', '4', '55'),
(5, 'assets/company/tata.jpeg', 'tcs', '55', '55', '55'),
(6, 'assets/company/oil.jpeg', 'oil', '85', '22', '22'),
(7, 'assets/company/hp.jpeg', 'hp', '678', '637', '75'),
(8, 'assets/company/gail.jpeg', 'gail', '45', '44', '44');

-- --------------------------------------------------------

--
-- Table structure for table `complain_table`
--

CREATE TABLE `complain_table` (
  `cid` int(11) NOT NULL,
  `std_prn` decimal(13,0) NOT NULL,
  `sname` varchar(100) NOT NULL,
  `tcid` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `cdept` varchar(20) NOT NULL,
  `complain` varchar(1000) NOT NULL,
  `complain_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complain_table`
--

INSERT INTO `complain_table` (`cid`, `std_prn`, `sname`, `tcid`, `date`, `cdept`, `complain`, `complain_date`) VALUES
(4, 2210121245503, 'nikhil vitthal kandhare', 'CO68', '2024-05-09', 'CO', 'massage here', '2024-05-14 08:44:32'),
(5, 2210121245502, 'nikhil', 'CO68', '2024-05-10', 'CO', 'massage here', '2024-05-14 08:44:32');

-- --------------------------------------------------------

--
-- Table structure for table `docdept`
--

CREATE TABLE `docdept` (
  `did` int(11) NOT NULL,
  `sem` int(11) NOT NULL,
  `dept` varchar(20) NOT NULL,
  `timetable` varchar(400) NOT NULL,
  `curriculum` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `docdept`
--

INSERT INTO `docdept` (`did`, `sem`, `dept`, `timetable`, `curriculum`) VALUES
(2, 6, 'CO', 'cotimetable.jpg', 'Revised-Computer-Engg-Syllabus-wef-2021.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE `email` (
  `eid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `date-time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `email`
--

INSERT INTO `email` (`eid`, `name`, `email`, `message`, `subject`, `date-time`) VALUES
(4, 'NIKHIL VITTHAL KANDHARE', 'graminpoly123@gmail.com', 'Ingredia Nutrisha,A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it There hung a picture\r\nEven the all-powerful Pointing has no control about the blind texts it is\r\n												an almost unorthographic life One day however a small line of blind text\r\n												by the name of Lorem Ipsum decided to leave for the far World of\r\n												Grammar. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor\r\n												eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,\r\n												viverra quis, feugiat a, tellus.									Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,\r\n												consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,\r\n												viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius\r\n												laoreet.\r\n												Quisque rutrum. Aenean imperdiet. ', 'nothing', '2024-04-21 09:44:14'),
(6, 'nikhil', 'graminpoly123@mail.com', 'dfsdc', 'nothing', '2024-04-26 13:02:15'),
(7, 'nikhil', 'graminpoly123@gmail.com', 'fsdacsxcds', 'test', '2024-04-26 13:05:09'),
(8, 'Nikhil kandhare Kandhare', 'doxipo4532@losvtn.comm', 'erttyfyguihiop', 'mkmk', '2024-05-14 05:56:42');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eid` int(11) NOT NULL,
  `etitle` varchar(100) NOT NULL,
  `eimage` varchar(400) NOT NULL,
  `edate` date NOT NULL,
  `etime` time NOT NULL,
  `eplace` varchar(100) NOT NULL,
  `edescription` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eid`, `etitle`, `eimage`, `edate`, `etime`, `eplace`, `edescription`) VALUES
(7, 'Tech Fest 2024', '/assets/hero/hero (1).png', '2024-04-27', '21:56:00', 'seminar hall main building', 'Get ready for three days of innovation and technology at our annual Tech Fest! Featuring hackathons, coding competitions, workshops, and keynote speakers, it\'s an event you don\'t want to miss.'),
(8, 'Cultural Night', '/assets/hero/hero (2).png', '2024-05-11', '22:11:00', 'college play grond', 'Experience the rich diversity of our college community at Cultural Night! Enjoy performances showcasing various cultures, including music, dance, fashion shows, and traditional cuisine.'),
(9, 'Career Fair', '/assets/hero/hero (3).png', '2024-05-08', '03:07:00', 'computer department seminar hall', 'Explore exciting career opportunities at our Career Fair! Connect with leading companies, attend informative sessions, and network with industry professionals to kickstart your career journey.'),
(10, 'Green Campus Initiative', '/assets/hero/hero (5).png', '2024-05-07', '02:21:00', 'electrical department', 'Join us in promoting sustainability with our Green Campus Initiative! Participate in tree planting activities, waste management workshops, and eco-friendly campus projects to create a greener future.');

-- --------------------------------------------------------

--
-- Table structure for table `flashnews`
--

CREATE TABLE `flashnews` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(500) DEFAULT NULL,
  `expire_date` date NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flashnews`
--

INSERT INTO `flashnews` (`id`, `title`, `file_name`, `file_path`, `expire_date`, `status`, `created_at`, `updated_at`) VALUES
(4, 'admission forms are open', 'Screenshot (1).png', '/uploads/flashnews/1749672665558-Screenshot (1).png', '2025-06-14', 'active', '2025-06-11 20:11:05', '2025-06-12 05:08:45'),
(6, 'sports week', 'Screenshot 2024-02-25 164036.png', '/uploads/flashnews/1749705586554-Screenshot 2024-02-25 164036.png', '2025-06-20', 'active', '2025-06-12 05:19:46', '2025-06-12 05:19:46'),
(7, 'test', 'Screenshot 2024-01-30 101132.png', '/uploads/flashnews/1749714162305-Screenshot 2024-01-30 101132.png', '2025-06-21', 'active', '2025-06-12 07:42:42', '2025-06-12 07:42:42');

-- --------------------------------------------------------

--
-- Table structure for table `gallary`
--

CREATE TABLE `gallary` (
  `id` int(11) NOT NULL,
  `url` varchar(400) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `upload_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallary`
--

INSERT INTO `gallary` (`id`, `url`, `title`, `category`, `upload_date`) VALUES
(35, 'https://drive.google.com/uc?id=19ACPc-A5m7nQgJamz2fC9qbqSB30dnHY', 'crush 1.0', 'events', '2025-06-05 18:30:00'),
(36, 'https://drive.google.com/uc?id=1bxNHbiDoDoZPL0L6_XMobTSfqNAWuM78', 'crush 1.0', 'events', '2025-06-05 18:30:00'),
(37, 'https://drive.google.com/uc?id=1eRO_5Ofam_g5P0VJqdqmftLo_Gvwljt_', 'crush 1.0 winner', 'events', '2025-06-05 18:30:00'),
(38, 'https://drive.google.com/uc?id=1_NcBFy9md5bi0kmBZM_FFcfT4CsSpma0', 'crush 1.0 1st runner up', 'events', '2025-06-05 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `leaveapply`
--

CREATE TABLE `leaveapply` (
  `lid` int(11) NOT NULL,
  `lprn` decimal(13,0) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `fdate` date NOT NULL,
  `tdate` date NOT NULL,
  `dreason` varchar(500) NOT NULL,
  `ladate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `stetus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leaveapply`
--

INSERT INTO `leaveapply` (`lid`, `lprn`, `reason`, `fdate`, `tdate`, `dreason`, `ladate`, `stetus`) VALUES
(2, 2210121245503, 'test', '2024-04-27', '2024-05-02', 'I hope this message finds you well. I am writing to request leave from college due to my sister\'s marriage ceremony, which is scheduled to take place on. As a member of my family, I have important responsibilities and would like to be present to support and participate in this significant event.\r\n\r\nI plan to take leave from to to ensure I can fully participate in all pre-wedding rituals, ceremonies, and celebrations. I assure you that I will make every effort to mi', '2024-05-03 09:28:12', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `content` longtext NOT NULL,
  `category` enum('general','events','academic','infrastructure','alumni','sports') DEFAULT 'general',
  `author` varchar(100) DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `status` enum('draft','published','archived') DEFAULT 'draft',
  `featured` tinyint(1) DEFAULT 0,
  `views` int(11) DEFAULT 0,
  `image_url` text DEFAULT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `excerpt`, `content`, `category`, `author`, `publish_date`, `status`, `featured`, `views`, `image_url`, `tags`, `created_at`, `updated_at`) VALUES
(11, 'crush', 'c programming event', 'c programming event', 'events', 'nk', '2025-06-07', 'published', 1, 0, 'https://drive.google.com/uc?id=1lYXJ2VBzEIjHIbZdPnsjnLMfl3yd4j7p', '[]', '2025-06-07 04:36:11', '2025-06-07 04:45:11');

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

CREATE TABLE `notices` (
  `nid` int(11) NOT NULL,
  `tid` varchar(20) NOT NULL,
  `dept` varchar(50) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `priority` varchar(20) NOT NULL,
  `attachments` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`nid`, `tid`, `dept`, `title`, `description`, `date`, `priority`, `attachments`) VALUES
(8, 'CO72', 'CSE', 'Smart Grid Technology', 'The session will be conducted by Dr. Sneha Kulkarni, Professor at VNIT Nagpur. All final year students are required to attend. Participation certificates will be provided.\r\n\r\nFor further information, contact the department office.', '2025-06-16 11:56:27', 'high', 'dd'),
(9, 'CO72', 'CSE', 'AI Trends in 2025', 'The session will be conducted by Dr. Sneha Kulkarni, Professor at VNIT Nagpur. All final year students are required to attend. Participation certificates will be provided.\r\n\r\nFor further information, contact the department office.', '2025-06-16 11:56:59', 'high', 'dd');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `student_prn` decimal(13,0) NOT NULL,
  `ptitle` varchar(225) NOT NULL,
  `pdescription` varchar(400) NOT NULL,
  `pdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pimage` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `student_prn`, `ptitle`, `pdescription`, `pdate`, `pimage`) VALUES
(2, 2210121245502, 'Exploring the Future of Education: Virtual Classrooms and Beyond', 'Discover practical strategies to maximize productivity and achieve your goals by managing your time more efficiently.', '2024-04-27 10:59:59', '5995342.jpg'),
(4, 2210121245503, 'Unlocking the Power of IoT: Innovations in Home Automation', 'Learn how adopting a positive mindset can transform your life and improve your overall well-being through simple daily practices.\r\n', '2024-04-27 11:00:39', '33bb665873d81cd9a4dc587d2051efb7.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `projectdetails`
--

CREATE TABLE `projectdetails` (
  `project_id` int(11) NOT NULL,
  `student` decimal(13,0) NOT NULL,
  `pname` varchar(255) DEFAULT NULL,
  `pguide` varchar(255) DEFAULT NULL,
  `pproblem` varchar(255) DEFAULT NULL,
  `pdept` varchar(255) DEFAULT NULL,
  `pmember` int(11) NOT NULL,
  `psem` varchar(255) DEFAULT NULL,
  `dos` date DEFAULT NULL,
  `lphone` varchar(20) DEFAULT NULL,
  `lemail` varchar(255) DEFAULT NULL,
  `pcategory` varchar(255) DEFAULT NULL,
  `demo` varchar(255) DEFAULT NULL,
  `pdescription` varchar(1000) NOT NULL,
  `uploadfile` varchar(255) DEFAULT NULL,
  `pcoverimage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projectdetails`
--

INSERT INTO `projectdetails` (`project_id`, `student`, `pname`, `pguide`, `pproblem`, `pdept`, `pmember`, `psem`, `dos`, `lphone`, `lemail`, `pcategory`, `demo`, `pdescription`, `uploadfile`, `pcoverimage`) VALUES
(5, 2210121245502, 'Automatic Time Table Creation', 'Nikhil kandhare', 'Address the need for accessible and interactive online learning resources to facilitate skill development and continuous education in various fields.o', 'computer engineering', 4, '6', '2024-04-03', '9112430021', 'graminpoly123@gmail.com', 'website development', 'https://youtu.be/Prv4PIEep_8?si=Bcnufw4rLfC_QFbF', 'Develop an e-learning platform that offers courses and resources for skill development in various domains such as programming, digital marketing, graphic design, and more. Include features like interactive lessons, quizzes, progress tracking, and a certification system upon course completion.', 'phpmailer_smtp.zip', 'p5.png\r\n'),
(8, 2210121245503, 'Product Rating System as per the Consumer Reviews\r\n\r\n', 'Nikhil kandhare', 'test', 'computer engineering', 4, '6', '2024-04-03', '9112430021', 'graminpoly123@gmail.com', 'website development', 'https://youtu.be/Prv4PIEep_8?si=Bcnufw4rLfC_QFbF', 'It is a comprehensive web-based task management system designed to streamline project collaboration and enhance productivity for small businesses. With a user-friendly interface and robust features, it serves as a centralized platform for organizing, assigning, and tracking tasks within teams.', 'phpmailer_smtp.zip', 'p4.png'),
(9, 2210121245502, 'Health and Fitness Tracker App', 'Nikhil kandhare', 'test', 'computer engineering', 4, '6', '2024-04-03', '9112430021', 'graminpoly123@gmail.com', 'website development', 'https://youtu.be/Prv4PIEep_8?si=Bcnufw4rLfC_QFbF', 'It is a comprehensive web-based task management system designed to streamline project collaboration and enhance productivity for small businesses. With a user-friendly interface and robust features, it serves as a centralized platform for organizing, assigning, and tracking tasks within teams.', 'phpmailer_smtp.zip', 'p3.png\r\n'),
(10, 2210121245502, 'Community Marketplace for Local Artisans\r\n\r\n\r\n', 'Nikhil kandhare', 'test', 'computer engineering', 4, '6', '2024-04-03', '9112430021', 'graminpoly123@gmail.com', 'website development', 'https://youtu.be/Prv4PIEep_8?si=Bcnufw4rLfC_QFbF', 'It is a comprehensive web-based task management system designed to streamline project collaboration and enhance productivity for small businesses. With a user-friendly interface and robust features, it serves as a centralized platform for organizing, assigning, and tracking tasks within teams.', 'phpmailer_smtp.zip', 'p2.png'),
(11, 2210121245503, 'Environmental Monitoring System', 'Nikhil kandhare', 'test', 'computer engineering', 4, '6', '2024-04-03', '9112430021', 'graminpoly123@gmail.com', 'website development', 'https://youtu.be/Prv4PIEep_8?si=Bcnufw4rLfC_QFbF', 'Develop an environmental monitoring system that collects real-time data on air quality, temperature, humidity, and pollution levels in a specific area. Visualize the data on a web dashboard or mobile app, allowing users to stay informed about environmental conditions and take proactive measures to mitigate risks.', 'phpmailer_smtp.zip', 'p1.jpg\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `recentnews`
--

CREATE TABLE `recentnews` (
  `nid` int(11) NOT NULL,
  `ntitle` varchar(100) NOT NULL,
  `ndescription` varchar(2000) NOT NULL,
  `ndate` date NOT NULL,
  `nby` varchar(500) NOT NULL,
  `nimage` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recentnews`
--

INSERT INTO `recentnews` (`nid`, `ntitle`, `ndescription`, `ndate`, `nby`, `nimage`) VALUES
(17, 'Annual Sports Meet 2024', 'Join us for the Annual Sports Meet 2024! Get ready for a week of fun and competition as students showcase their athletic talents in various sports.', '2024-04-11', 'nikhil kandhare', 'e4.jpg'),
(18, 'Guest Lecture by Renowned Scie', 'Don\'t miss a guest lecture by Dr. [Name], a renowned scientist! Gain insights into the latest developments in [field] and engage in interactive discussions.\r\n', '2024-04-04', 'pooja kale', 'e5.jpg'),
(19, 'College Achieves 95% Placement Rate', 'Our college achieved an impressive 95% placement rate for the graduating batch of 2024, reflecting our commitment to student success and industry readiness.', '2024-04-04', 'jyoti kokare', 'e6.jpg'),
(20, 'Inauguration of New Library Wing', 'Excited to inaugurate our new library wing! Equipped with the latest resources and study spaces, it\'s set to enhance the learning experience for our students.', '2024-04-05', 'saraswati adkine', 'e3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sendmail`
--

CREATE TABLE `sendmail` (
  `id` int(11) NOT NULL,
  `mto` decimal(13,0) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `massage` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sendmail`
--

INSERT INTO `sendmail` (`id`, `mto`, `subject`, `massage`, `date`) VALUES
(39, 2210121245502, 'happy ram navami', 's', '0000-00-00 00:00:00'),
(40, 2210121245502, 'ok', 'xxxxxxxx', '0000-00-00 00:00:00'),
(41, 2210121245502, 'happy ram navami', 'Wishing you and your family a joyous and blessed Ram Navami!\r\nMay Lord Rama bless you with happiness, peace, and prosperity.\r\n', '0000-00-00 00:00:00'),
(42, 2210121245503, 'happy ram navami', 'Wishing you and your family a joyous and blessed Ram Navami! May Lord Rama bless you with happiness, peace, and prosperity.', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `prn` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `father` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `mother` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(30) NOT NULL,
  `phone` decimal(10,0) DEFAULT NULL,
  `pphone` decimal(10,0) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `religion` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `caste` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` decimal(10,0) NOT NULL,
  `dept` varchar(30) NOT NULL,
  `class` varchar(30) NOT NULL,
  `cgpa` float NOT NULL,
  `rollno` decimal(10,0) NOT NULL,
  `image` varchar(400) NOT NULL,
  `marksheet` varchar(400) NOT NULL,
  `stetus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`prn`, `password`, `name`, `father`, `surname`, `mother`, `dob`, `gender`, `phone`, `pphone`, `email`, `religion`, `category`, `caste`, `city`, `state`, `address`, `pincode`, `dept`, `class`, `cgpa`, `rollno`, `image`, `marksheet`, `stetus`) VALUES
('2110121245054', 'Aboli@123', 'Aboli', 'Vijay', 'Galat', 'varsha', '2003-04-30', 'FEMALE', 7709709523, 9422154885, 'aboligalat017@gmail.com', 'Hinduism', 'NTC', 'VJNT', 'nagpur', 'maharashtra', '18A shrihari nagar no 2 Omkar nagar nagpur 440027', 440027, 'CO', '4', 7.52, 53, '33bb665873d81cd9a4dc587d2051efb7.jpg', '', 1),
('2210121245503', '123123', 'jyoti', 'maroti', 'kokare', 'ok', '2003-04-17', 'FEMALE', 9112430022, 789456123, 'graminpoly123@gmail.com', 'Hinduism', 'SC', 'SC', 'nanded', 'maharashtra', 'shakti nagar, itwara road', 441604, 'EXTC', '3', 6.66, 67, 'IMG20230914190018.jpg', '', 1),
('2210121245504', 'N1234567', 'test', 'test', 'test', 'test', '2024-04-03', 'MALE', 9112430028, 8888240411, 'nikhilkandhare33@gmail.com', 'Hinduism', 'test', 'SC', 'nanded', 'Maharashtra', 'dhamangaoroad yavatmal', 445001, 'CO', '1', 6.68, 66, 'user_avatar.png', '', 1),
('2210121245520', 'N1234567', 'Nikhil ', 'vitthal', 'kandhare', 'varsha', '2003-04-17', 'MALE', 9112430080, 8888240400, 'nikhilkahre22@email.com', 'Hinduism', 'matang', 'SC', 'nagpur', 'maharashtra', '18A shrihari nagar no 2 Omkar nagar nagpur 440027', 445500, 'CO', '4', 6.66, 66, 'pic8.jpg', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tcapplication`
--

CREATE TABLE `tcapplication` (
  `tcid` int(11) NOT NULL,
  `tcname` varchar(100) NOT NULL,
  `tcprn` decimal(13,0) NOT NULL,
  `tcadmi` date NOT NULL,
  `tcdept` varchar(50) NOT NULL,
  `subcaste` varchar(20) NOT NULL,
  `tcdob` date NOT NULL,
  `birthplace` varchar(20) NOT NULL,
  `linstitute` varchar(200) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `tccaste` varchar(30) NOT NULL,
  `ackletter` varchar(400) NOT NULL,
  `marksheets` varchar(400) NOT NULL,
  `stetus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tcapplication`
--

INSERT INTO `tcapplication` (`tcid`, `tcname`, `tcprn`, `tcadmi`, `tcdept`, `subcaste`, `tcdob`, `birthplace`, `linstitute`, `nationality`, `tccaste`, `ackletter`, `marksheets`, `stetus`) VALUES
(2, 'nikhil vitthalrao kandhare', 2210121245503, '2003-03-31', 'CO', 'matang', '2003-04-17', 'nanded', 'gramin technical and managment campus', 'indian', 'SC', '8f019927b0edee6827c7d5f1fb921602.jpg', '10thtcnk_compressed.pdf', 2),
(3, 'Nikhil  Vijay kandhare', 2210121245520, '2024-05-09', 'CO', 'matang', '2003-04-17', 'nanadd', 'gcoey', 'indian', 'SC', 'pic7.jpg', 'Bonafide-2210121245502.pdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `tid` int(11) NOT NULL,
  `teacher_id` varchar(20) NOT NULL,
  `tname` varchar(100) NOT NULL,
  `temail` varchar(50) NOT NULL,
  `tgender` varchar(20) NOT NULL,
  `tpassword` varchar(20) NOT NULL,
  `tqualification` varchar(50) NOT NULL,
  `tbio` varchar(500) NOT NULL,
  `tdept` varchar(50) NOT NULL,
  `tpost` varchar(50) NOT NULL,
  `tphone` decimal(10,0) NOT NULL,
  `texperience` int(11) NOT NULL,
  `taddress` varchar(100) NOT NULL,
  `tphoto` varchar(400) NOT NULL,
  `tlinkedin` varchar(200) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`tid`, `teacher_id`, `tname`, `temail`, `tgender`, `tpassword`, `tqualification`, `tbio`, `tdept`, `tpost`, `tphone`, `texperience`, `taddress`, `tphoto`, `tlinkedin`, `status`) VALUES
(15, 'CO46', 'Shweta A. Junghare', 'shwetajunghare7@gmail.com', 'Female', 'Shweta1234', 'ME IN Computer Engineering', 'Specializes in Artificial Intelligence and Machine Learning with over 15 years of research experience. Published 50+ papers in top-tier conferences.', 'CSE', 'Teaching staff', 8975647701, 3, 'Gandhi Chowk Kalamb, Yavatmal, maharashtra', '1zf11sfssvDvE4OtGeg0r6Iq5yByTWsdvgTeETGz7', 'https://www.linkedin.com/404/', 1),
(16, 'CO48', 'Vivek Rajendra Shelke', 'vivekshelke55@gmail.com', 'Female', 'Shweta1234', 'ME IN Computer Engineering', 'Specializes in Artificial Intelligence and Machine Learning with over 15 years of research experience. Published 50+ papers in top-tier conferences.', 'CSE', 'Teaching staff', 8975647788, 3, 'Gandhi Chowk Kalamb, Yavatmal, maharashtra', '1zf11DvE4OtGeg0r6Iq5yByTmWgTeETGz7', 'https://www.linkedin.com/404/', 1),
(19, 'CO49', 'Rashmi Thakre', 'RashmiThakre58@gmail.com', 'Female', 'Rashmi Thakre1234', 'ME IN Computer Engineering', 'Specializes in Artificial Intelligence and Machine Learning with over 15 years of research experience. Published 50+ papers in top-tier conferences.', 'CSE', 'Teaching staff', 8988647788, 3, 'Gandhi Chowk Kalamb, Yavatmal, maharashtra', '1zf11DvE4OtGeg0r6Iq5yByTmWgTeETGz7', 'https://www.linkedin.com/404/', 1);

-- --------------------------------------------------------

--
-- Table structure for table `uploads`
--

CREATE TABLE `uploads` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `drive_file_id` varchar(255) DEFAULT NULL,
  `uploaded_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uploads`
--

INSERT INTO `uploads` (`id`, `file_name`, `drive_file_id`, `uploaded_at`) VALUES
(1, 'IMG_20231019_001129_387.webp', '1NoxMbVHVToIq9nXlRaLkf6mhF5gBe485', '2025-06-06 14:37:47'),
(2, 'ganapati-2118407_1280-1120x672.jpg', '1_ixZul7mZ19LSLb8Y2v8SN5HmuOauy0d', '2025-06-06 14:41:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administration`
--
ALTER TABLE `administration`
  ADD PRIMARY KEY (`administration_id`);

--
-- Indexes for table `administration_message`
--
ALTER TABLE `administration_message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`aid`),
  ADD UNIQUE KEY `atid` (`atid`);

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`aid`),
  ADD UNIQUE KEY `aphone` (`aphone`),
  ADD UNIQUE KEY `aid` (`aid`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `bonafide`
--
ALTER TABLE `bonafide`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `collegedepartment`
--
ALTER TABLE `collegedepartment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `complain_table`
--
ALTER TABLE `complain_table`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `docdept`
--
ALTER TABLE `docdept`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `flashnews`
--
ALTER TABLE `flashnews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallary`
--
ALTER TABLE `gallary`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gid` (`id`,`url`);

--
-- Indexes for table `leaveapply`
--
ALTER TABLE `leaveapply`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `projectdetails`
--
ALTER TABLE `projectdetails`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `recentnews`
--
ALTER TABLE `recentnews`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `sendmail`
--
ALTER TABLE `sendmail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`prn`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `tcapplication`
--
ALTER TABLE `tcapplication`
  ADD PRIMARY KEY (`tcid`),
  ADD UNIQUE KEY `tcprn` (`tcprn`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`),
  ADD UNIQUE KEY `phone` (`tphone`),
  ADD UNIQUE KEY `temail` (`temail`),
  ADD UNIQUE KEY `teacher_id` (`teacher_id`),
  ADD UNIQUE KEY `tid` (`tid`);

--
-- Indexes for table `uploads`
--
ALTER TABLE `uploads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administration`
--
ALTER TABLE `administration`
  MODIFY `administration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `administration_message`
--
ALTER TABLE `administration_message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `adminlogin`
--
ALTER TABLE `adminlogin`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `bonafide`
--
ALTER TABLE `bonafide`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `collegedepartment`
--
ALTER TABLE `collegedepartment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `complain_table`
--
ALTER TABLE `complain_table`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `docdept`
--
ALTER TABLE `docdept`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `flashnews`
--
ALTER TABLE `flashnews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gallary`
--
ALTER TABLE `gallary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `leaveapply`
--
ALTER TABLE `leaveapply`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notices`
--
ALTER TABLE `notices`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `projectdetails`
--
ALTER TABLE `projectdetails`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `recentnews`
--
ALTER TABLE `recentnews`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `sendmail`
--
ALTER TABLE `sendmail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `tcapplication`
--
ALTER TABLE `tcapplication`
  MODIFY `tcid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `uploads`
--
ALTER TABLE `uploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
