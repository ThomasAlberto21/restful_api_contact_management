-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 09, 2023 at 04:57 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `country` varchar(100) NOT NULL,
  `postal_code` varchar(15) NOT NULL,
  `contact_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `street`, `city`, `province`, `country`, `postal_code`, `contact_id`) VALUES
(5, 'Jalan Surya Suci', 'Pontianak', 'kalimantan Barat', 'Indonesia', '12345678', 598),
(52, 'Sungai Raya', 'Pontianak', 'kalimantan Barat', 'Indonesia', '123422678', 598),
(53, 'Sungai Raya 2', 'Pontianak', 'kalimantan Barat', 'Indonesia', '123422678', 598),
(54, 'Sungai Raya 3', 'Pontianak', 'kalimantan Barat', 'Indonesia', '123422678', 598),
(55, 'batu Ampar', 'Pontianak', 'kalimantan Barat', 'Indonesia', '123422678', 598);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `first_name`, `last_name`, `email`, `phone`, `username`) VALUES
(597, 'Teguh', 'Firmansyah', 'teguh@gmail.com', '0382382332', 'thomasalberto21'),
(598, 'Thomas', 'Alberto', 'thomas@gmail.com', '038238233332', 'thomasalberto21'),
(599, 'Fransiskus', 'Berto', 'frans@gmail.com', '038233332', 'thomasalberto21'),
(600, 'Tom', 'Jerry', 'tom@gmail.com', '03823323332', 'thomasalberto21'),
(601, 'Teman', 'lama', 'teman@gmail.com', '0382332323332', 'thomasalberto21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `token` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `name`, `token`) VALUES
('thomasalberto21', '$2b$10$.N2t8bf9Cc9OdYBaoqryBuBKqBwt0UYlZy/y7Kl.VHJIHYY6tpkPC', 'Thomas Keren', 'f89c9305-ed91-4764-a274-a739cf94767b');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('4de8147e-fc86-4a4f-994e-562c13e2c3a2', '0b2047cdce71ccc54cc94825824a5a9e1ecd2f4d90d9863a5ed98237784f4177', '2023-09-06 10:39:53.763', '20230906103819_create_table_contact', NULL, NULL, '2023-09-06 10:39:53.745', 1),
('9464f9b6-bafa-45c2-a299-c69ad96f3667', '95ede780072b2027393041b0c1ccbaf7b408ef719c2b37aa191c2c23bc1dde58', '2023-09-06 10:51:45.368', '20230906105014_create_table_address', NULL, NULL, '2023-09-06 10:51:45.355', 1),
('b9ed3d45-cfcf-4d28-9b3e-b12408e67319', 'c26a38586c56ca95711df76214905a9f1d6ae1cc0e8fb90a554cf0d60b200dc1', '2023-09-06 10:27:20.709', '20230906102551_create_table_users', NULL, NULL, '2023-09-06 10:27:20.704', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addresses_contact_id_fkey` (`contact_id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_username_fkey` (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1318;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_username_fkey` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
