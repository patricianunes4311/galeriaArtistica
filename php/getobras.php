<?php
//conexão banco de dados 
$hostname ='localhost'; //onde está o banco de dados 
$user = 'root'; //nome 
$password = 'No8La9De3';
$database = 'galeriaartistica';
$connection = mysqli_connect($hostname,$user,$password,$database ); 

if($connection){
    echo "</br> Conexão efetuada com sucesso";


      //Realizar a leitura do banco de dados 

      $query = "select * from cadastro";
      $results = mysqli_query($connection,$query);
  
      //Entregar dados para quem pediu 
    $obras =[];
    $index=0;

    while($record = mysqli_fetch_row($results)){
        $obras = new stdClass();
        $obras  -> id_obra = $record[0];
        $obras  ->NameAutor = $record[1];
        $obras ->obra= $record[2];
        $obras -> descricao = $record[3];    
        $obras -> urlProductImage = $record[4];     
        $obras[$index] = $obras;
        $index = $index + 1;
    }
    echo json_encode ($products);
}else{
    echo "</br>Conexão não efetuada";
    echo "</br>".mysqli_connect_error(); //simular erro 
}

?>