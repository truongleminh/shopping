-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Apr 12, 2024 at 01:16 PM
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
-- Database: `data`
--

-- --------------------------------------------------------

--
-- Table structure for table `icon`
--

CREATE TABLE `icon` (
  `idicon` int(11) NOT NULL,
  `icon` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `icon`
--

INSERT INTO `icon` (`idicon`, `icon`) VALUES
(1, 'fa-brands fa-youtube pe-3'),
(2, 'fa-brands fa-facebook pe-3'),
(3, 'fa-brands fa-instagram pe-3');

-- --------------------------------------------------------

--
-- Table structure for table `img_thanh_toan`
--

CREATE TABLE `img_thanh_toan` (
  `idimg_thanh_toan` int(11) NOT NULL,
  `img` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `img_thanh_toan`
--

INSERT INTO `img_thanh_toan` (`idimg_thanh_toan`, `img`) VALUES
(1, '/logo/img_payment_1.webp'),
(2, '/logo/img_payment_2.webp'),
(3, '/logo/img_payment_3.webp');

-- --------------------------------------------------------

--
-- Table structure for table `infor`
--

CREATE TABLE `infor` (
  `idinfor` int(11) NOT NULL,
  `infor` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `infor`
--

INSERT INTO `infor` (`idinfor`, `infor`) VALUES
(1, 'Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường L'),
(2, '19006750'),
(3, 'support@sapo.com');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `idmenu` int(11) NOT NULL,
  `path` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`idmenu`, `path`, `name`) VALUES
(1, '/homepage', 'Home'),
(2, '/contact', 'Contact'),
(3, '/product', 'Product'),
(4, '/about', 'About');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `idsanpham` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gia` varchar(45) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `thuonghieu` varchar(50) DEFAULT NULL,
  `msp` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`idsanpham`, `name`, `gia`, `img`, `thuonghieu`, `msp`) VALUES
(1, 'Giầy Adidas', '3000000', './logo/adidas-1.webp', 'adidas', 'A001'),
(2, 'Giày Adidas Ultraboost 20', '1300000', './logo/adidas-2.webp', 'adidas', 'A002'),
(3, 'GIÀY ADIDAS PERFORMANCE ', '3999000', './logo/adidas-3.webp', 'adidas', 'A003'),
(4, 'Giày Adidas B79774', '1800000', './logo/adidas-4.jpg', 'adidas', 'A004'),
(5, 'GIÀY TENNIS ADIDAS GAME COURT 2 CORE', '1549000', './logo/adidas-5.jpg', 'adidas', 'A005'),
(6, 'GIÀY ADIDAS YEEZY BOOTS 350 V2', '750000', './logo/adidas-6.jpg', 'adidas', 'A006'),
(7, 'Giày Adidas Originals Prophere Unisex Wine Re', '679000', './logo/adidas-7.jpg', 'adidas', 'A007'),
(8, 'GIÀY ADIDAS ADIFOM CORE BLACK HQ8752', '3750000', './logo/adidas-8.jpg', 'adidas', 'A008'),
(9, 'Giày chạy bộ nam Nike Air Zoom Pegasus 39', '3719000', './logo/nike-1.webp', 'nike', 'N001'),
(10, 'Giày Nike Air Jordan 1 Low ‘UNC’ 553558 144', '5800000', './logo/nike-2.jpg', 'nike', 'N002'),
(11, 'Giày Nike Air Jordan 4 Fire Red Like Auth', '2000000', './logo/nike-3.jpg', 'nike', 'N003'),
(12, 'Giày Nike Nam Chính hãng - Air Force 1 Low ', '3500000', './logo/nike-4.webp', 'nike', 'N004'),
(13, 'Giày Nike Air Force 1 LX Tear Away Xé Rách Tr', '1800000', './logo/nike-5.webp', 'nike', 'N005'),
(14, 'Giầy Nike đen trắng', '5000000', './logo/nike-6.webp', 'nike', 'N006'),
(15, 'Giầy Nike cam trắng', '2000000', './logo/nike-7.webp', 'nike', 'N007'),
(16, 'Giầy Nike thể thao', '1800000', './logo/nike-8.webp', 'nike', 'N008'),
(35, 'hihi', '12', '/logo/20230420_ExnDny6Z.webp', 'dfg', 'ex1'),
(36, '', '', './logo/20230420_ExnDny6Z.webp', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user`, `password`) VALUES
(1, 'truonglm54@wru.vn', 'As1234567');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `icon`
--
ALTER TABLE `icon`
  ADD PRIMARY KEY (`idicon`);

--
-- Indexes for table `img_thanh_toan`
--
ALTER TABLE `img_thanh_toan`
  ADD PRIMARY KEY (`idimg_thanh_toan`);

--
-- Indexes for table `infor`
--
ALTER TABLE `infor`
  ADD PRIMARY KEY (`idinfor`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`idmenu`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`idsanpham`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `icon`
--
ALTER TABLE `icon`
  MODIFY `idicon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `img_thanh_toan`
--
ALTER TABLE `img_thanh_toan`
  MODIFY `idimg_thanh_toan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `infor`
--
ALTER TABLE `infor`
  MODIFY `idinfor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `idmenu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `idsanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
