<?php
//conexão banco de dados 
$hostname ='localhost'; //onde está o banco de dados 
$user = 'root'; //nome 
$password = 'no8la9de3';
$database ='galeriaArtistica';
$connection = mysqli_connect($hostname,$user,$password,$database); 
echo mysqli_connect_error();

if($connection){
    //echo "</br> Conexão efetuada com sucesso";


      //Realizar a leitura do banco de dados 

      $query ="select * from cadastro";
      $results=mysqli_query($connection,$query);
  
      //Entregar dados para quem pediu 
    $obras =[];
    $index=0;
   
    //while = enquanto 
    while($record = mysqli_fetch_row($results)){
        $obra = new stdClass();
        $obra  -> id_obra = $record[0];
        $obra  ->nome_Autor = $record[1];
        $obra ->obra= $record[2];
        $obra -> descricao = $record[3];    
        $obra -> urlImage = $record[4];     
        $obras[$index] = $obra;
        $index = $index + 1;
    }
    echo json_encode ($obras);
}else{
    echo "</br>Conexão não efetuada";
    echo "</br>".mysqli_connect_error(); //simular erro 
}

?>