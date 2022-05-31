const showobras= (obras) => {
    console.log (obras);

  //repetir o processo dos cards 
  for (let i=0; i < obras.length; i ++){   //i ++ imcrementar cada vez mais um 
      console.log (obras[i].cadastro) //valores da variável sempre vão ficar em colchetes 

      let tagDivCard = document.createElement ('div');
      tagDivCard.setAttribute ('class','card max-auto','mb-2');
      tagDivCard.setAttribute ('style', 'width:300px');

      let tagImagem = document.createElement ('img');
      tagImagem.setAttribute ('class','card-img-top');
      tagImagem.setAttribute ('src',obras[i].urlImage); //definindo a imagem que está no banco  de dados 
      tagImagem.setAttribute ('alt',obras[i].obra);

      tagDivCard.appendChild(tagImagem);

      let tagDivCardBody = document.createElement('div');
      tagDivCardBody.setAttribute('class','card-body');
      tagDivCard.appendChild(tagDivCardBody);

      let tagH5 =document.createElement('h5');
      tagH5.setAttribute('class','text-center');
      let textNode = document.createTextNode(obras[i].obra);
      tagH5.appendChild(textNode);
      tagDivCardBody.appendChild(tagH5);

      let tagP = document.createElement ('p');
      tagP.setAttribute('class','card-text text-center');
      textNode = document.createTextNode(obras[i].nome_Autor); //obras nome do show obras //nomeAutor nome que está no php tem que ser igual 
      tagP.appendChild(textNode);
      tagDivCardBody.appendChild(tagP);
     
      tagP.setAttribute('class','card-text text-center');
      textNode = document.createTextNode(obras[i].descricao);
      tagP.appendChild(textNode);
      tagDivCard.appendChild(tagP);


      let autor1 = document.getElementById ('autor1');
      autor1.appendChild(tagDivCard);

      console.log(tagDivCard)

      
      //tagP.setAttribute('class','card-text text-center');
     // textNode = document.createTextNode(products[i].productDescription);
     // tagP.appendChild(textNode);
      //tagDivCardBody.appendChild(tagP);




  }
}

  //buscar produtos no banco de dados 
  const fetchobras =  () => {
    console.log("Cheguei na script para carregar os produtos");
    //carregar os produtos no banco de dados
    //endereço da api http://localhost:8000/getobras.php

    fetch('http://localhost:8000/getobras.php')
    .then((response)=>{
        if(response.status >= 200 && response.status < 300 ){
            console.log(response);
            return response.json()
        }
        // mensagem de erro 
        throw new Error (response.statusText);
    })
    .then((obras) => {
        showobras(obras);
    } )
    .catch((error)=>{
        console.log(error);
    })
}