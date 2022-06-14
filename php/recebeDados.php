<?php

echo 'Script para receber e armazenar dados';

$nomeAutor = $_GET ['nameAutor'];
$titulo = $_GET['obra'];
$descricao = $_GET ['descricao']; //erro 
$urlImagem = $_GET ['urlImagem'];

//conectar com o banco de dados 
$hostname = 'localhost'; //variável e seus valores 
$user = 'root';
$password = 'no8la9de3';
$database = 'galeriaArtistica';
$conn = mysqli_connect($hostname,$user,$password,$database); 

if($conn){
    echo 'conexão efetuada com sucesso';
    //gravar no banco de dados 
    $query = "insert into cadastro (nome_autor,titulo,descricao,urlImagem) values ('".$nomeAutor."', '".$titulo."','". $descricao."','".$urlImagem."');";
  echo "<br/>";
  echo $query;
  //realizar leitura do banco de dados   
  $resultado = mysqli_query($conn,$query);
  if($resultado){
      echo '<h2>Produto incluido com sucesso. </h2>';
      //var_dump($_SERVER['HTTP_REFERER']);
      
      header("Location:".$_SERVER['HTTP_REFERER']);
      
      //header("Location:"$_SERVER['formulario.html']);
      //header("Location:http://127.0.0.1:5500/index.html"); 
  }else{
    echo '<h2>Produto não  incluido. </h2>';
    var_dump(mysqli_connect($conn));
  }

}else{
    echo 'conexão com o banco de dados não efetuada  <br/>';
    echo mysqli_connect_error();
}


?>