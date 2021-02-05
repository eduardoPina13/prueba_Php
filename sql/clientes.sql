-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-02-2021 a las 03:15:39
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clientes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listado`
--

DROP TABLE IF EXISTS `listado`;
CREATE TABLE IF NOT EXISTS `listado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `apellidoPat` varchar(100) NOT NULL,
  `apellidoMat` varchar(100) NOT NULL,
  `mail` text NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `tarjeta` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `listado`
--

INSERT INTO `listado` (`id`, `nombre`, `apellidoPat`, `apellidoMat`, `mail`, `telefono`, `tarjeta`) VALUES
(1, 'José Eduardo', 'Piña', 'Balderas', 'joseeduardo1996@live.com', '7861047114', '5555444400001111'),
(2, 'Juan', 'Peréz', 'Correa', 'juan@mail.com', '7864561546', '1111222233334444');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
