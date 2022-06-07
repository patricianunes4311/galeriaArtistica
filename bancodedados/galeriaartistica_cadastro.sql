-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: galeriaartistica
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cadastro`
--

DROP TABLE IF EXISTS `cadastro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastro` (
  `id_obra` int NOT NULL AUTO_INCREMENT,
  `nome_autor` varchar(100) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `urlImagem` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_obra`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro`
--

LOCK TABLES `cadastro` WRITE;
/*!40000 ALTER TABLE `cadastro` DISABLE KEYS */;
INSERT INTO `cadastro` VALUES (1,'Van Gogh','Sunflowers','As pinturas de girassóis de Van Gogh','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/girassois%20van%20gogh.jpg?alt=media&token=4a729ce7-2acc-4814-8d65-d8331ec9f585'),(2,'Leonardo da Vince','Monalisa','Retrato de monalisa','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/monalisa%20leonardo%20da%20vince.jfif?alt=media&token=bcdf6ef1-e14a-4139-a0b5-3074a73046d3'),(3,'Tarsila do Amaral','Abaporu','A obra é símbolo do Movimento Antropofágico','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/Abaporu%20tarsila%20de%20amaral.jpg?alt=media&token=9bda8133-34ff-4eb6-84d0-c26c848d3289'),(4,'vick Muniz','Visto a distância',' observador reconhece as paisagens na àrea do Rio de Janeiro','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/rio%20de%20janeiro%20vik%20muniz.jpg?alt=media&token=7b271290-5cc6-4034-9b1c-aec9b922cef5'),(5,'Van Gogh','noite estrelada','Noite estrelada é uma tentativa de expressar um estado de choque,Ele procurava a essência da paisagem, seu próprio ser','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/noite%20estrelada%20vangogh.jfif?alt=media&token=e59356ca-69fd-477d-8767-0315c7d5d13f'),(6,'Tarsila do amaral','O pescador ','Mostra um vilarejo as margens de um rio, com casas baixas em meio a vegetação e o homem que vive da pesca.','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/o_pescador%20tarsila%20do%20amaral.jpg?alt=media&token=0f7aa30c-9af3-44b3-909e-61fb0fa27262'),(7,'Leonardo da Vince','Homem Vitruviano','O Homem Vitruviano é um desenho de Leonardo da Vinci que apresenta o corpo humano a partir das proporções ideais.','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/homem%20vitruviano.jpg?alt=media&token=03d6f723-55ce-49b8-b02d-0df978e48152'),(8,'Van gogh','Terraço do café a noite ','A ideia de fazer este quadro veio depois de ler num romance de Guy Maupassant a descrição de um café à noite. O pintor desejava transmitir a escuridão de maneira natural, sem usar tinta preta.','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/terra%C3%A7o%20caf%C3%A9%20a%20noite.jpg?alt=media&token=fa45f4be-66c2-4bfb-b164-09aed7c51207'),(9,'Vick Muniz ','The Gipsy (Magna)','Obra chamada  “Lixo Extraordinário” trabalho de Vik Muniz, com catadores de lixo de Duque de Caxias, cidade localizada na área metropolitana do Rio de Janeiro. ','https://firebasestorage.googleapis.com/v0/b/galeria-artistica.appspot.com/o/vickmuniz.jfif?alt=media&token=e9fd702d-3a6b-4f92-b9bf-df7f2b35cfc9');
/*!40000 ALTER TABLE `cadastro` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-07 19:30:12
