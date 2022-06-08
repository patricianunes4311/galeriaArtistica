const showobras = (obras) => {
    console.log(obras);

    //repetir o processo dos cards 
    for (let i = 0; i < obras.length; i++) {   //i ++ imcrementar cada vez mais um 
        console.log(obras[i].cadastro) //valores da variável sempre vão ficar em colchetes 
        if (obras[i].nome_Autor == 'Van Gogh') {

            let tagDivCard = document.createElement('div');
            tagDivCard.setAttribute('class', 'card mx-auto mb-1');
            tagDivCard.setAttribute('style', 'width: 400px');

            let tagImagem = document.createElement('img');
            tagImagem.setAttribute('class', 'card-img-top');
            tagImagem.setAttribute('src', obras[i].urlImage); //definindo a imagem que está no banco  de dados 
            tagImagem.setAttribute('alt', obras[i].obra);

            tagDivCard.appendChild(tagImagem);

            let tagDivCardBody = document.createElement('div');
            tagDivCardBody.setAttribute('class', 'card-body');
            tagDivCard.appendChild(tagDivCardBody);

            let tagH5 = document.createElement('h5');
            tagH5.setAttribute('class', 'text-center');
            let textNode = document.createTextNode(obras[i].obra);
            tagH5.appendChild(textNode);
            tagDivCardBody.appendChild(tagH5);

            let tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].nome_Autor); //obras nome do show obras //nomeAutor nome que está no php tem que ser igual 
            tagP.appendChild(textNode);
            tagDivCardBody.appendChild(tagP);

            tagP = document.createElement('p');      
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].descricao);            
            tagP.appendChild(textNode);
            tagDivCard.appendChild(tagP);
           
            tagDivCardBody.appendChild(tagP);


            let autor1 = document.getElementById('autor1');
            autor1.appendChild(tagDivCard);

            console.log(tagDivCard)

        }
    }
    //repetir o processo dos cards 
    for (let i = 0; i < obras.length; i++) {   //i ++ imcrementar cada vez mais um 
        console.log(obras[i].cadastro) //valores da variável sempre vão ficar em colchetes 
        console.log(obras[i].urlImage)
        if (obras[i].nome_Autor == 'Leonardo da Vince') {

            let tagDivCard = document.createElement('div');
            tagDivCard.setAttribute('class', 'card mx-auto mb-1');
            tagDivCard.setAttribute('style', 'width:400px');

            let tagImagem = document.createElement('img');
            tagImagem.setAttribute('class', 'card-img-top');
            tagImagem.setAttribute('src', obras[i].urlImage); //definindo a imagem que está no banco  de dados 
            tagImagem.setAttribute('alt', obras[i].obra);

            tagDivCard.appendChild(tagImagem);

            let tagDivCardBody = document.createElement('div');
            tagDivCardBody.setAttribute('class', 'card-body');
            tagDivCard.appendChild(tagDivCardBody);

            let tagH5 = document.createElement('h5');
            tagH5.setAttribute('class', 'text-center');
            let textNode = document.createTextNode(obras[i].obra);
            tagH5.appendChild(textNode);
            tagDivCardBody.appendChild(tagH5);

            let tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].nome_Autor); //obras nome do show obras //nomeAutor nome que está no php tem que ser igual 
            tagP.appendChild(textNode);
            tagDivCardBody.appendChild(tagP);

            tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].descricao);
            tagP.appendChild(textNode);
            tagDivCardBody.appendChild(tagP);


            let autor1 = document.getElementById('autor2');
            autor1.appendChild(tagDivCard);

            console.log(tagDivCard)

        }
    }


    for (let i = 0; i < obras.length; i++) {   //i ++ imcrementar cada vez mais um 
        console.log(obras[i].cadastro) //valores da variável sempre vão ficar em colchetes 
        console.log(obras[i].urlImage)
        if (obras[i].nome_Autor == 'Tarsila do Amaral') {

            let tagDivCard = document.createElement('div');
            tagDivCard.setAttribute('class', 'card mx-auto mb-1');
            tagDivCard.setAttribute('style', 'width:400px');

            let tagImagem = document.createElement('img');
            tagImagem.setAttribute('class', 'card-img-top');
            tagImagem.setAttribute('src', obras[i].urlImage); //definindo a imagem que está no banco  de dados 
            tagImagem.setAttribute('alt', obras[i].obra);

            tagDivCard.appendChild(tagImagem);

            let tagDivCardBody = document.createElement('div');
            tagDivCardBody.setAttribute('class', 'card-body');
            tagDivCard.appendChild(tagDivCardBody);

            let tagH5 = document.createElement('h5');
            tagH5.setAttribute('class', 'text-center');
            let textNode = document.createTextNode(obras[i].obra);
            tagH5.appendChild(textNode);
            tagDivCardBody.appendChild(tagH5);

            let tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].nome_Autor); //obras nome do show obras //nomeAutor nome que está no php tem que ser igual 
            tagP.appendChild(textNode);
            tagDivCardBody.appendChild(tagP);

            tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].descricao);
            tagP.appendChild(textNode);    
            tagDivCardBody.appendChild(tagP);


            let autor1 = document.getElementById('autor3');
            autor1.appendChild(tagDivCard);

            console.log(tagDivCard)

        }
    }

    for (let i = 0; i < obras.length; i++) {   //i ++ imcrementar cada vez mais um 
        console.log(obras[i].cadastro) //valores da variável sempre vão ficar em colchetes 
        console.log(obras[i].urlImage)
        if (obras[i].nome_Autor == 'Vick Muniz') {

            let tagDivCard = document.createElement('div');
            tagDivCard.setAttribute('class', 'card mx-auto mb-1');
            tagDivCard.setAttribute('style', 'width:400px');

            let tagImagem = document.createElement('img');
            tagImagem.setAttribute('class', 'card-img-top');
            tagImagem.setAttribute('src', obras[i].urlImage); //definindo a imagem que está no banco  de dados 
            tagImagem.setAttribute('alt', obras[i].obra);

            tagDivCard.appendChild(tagImagem);

            let tagDivCardBody = document.createElement('div');
            tagDivCardBody.setAttribute('class', 'card-body');
            tagDivCard.appendChild(tagDivCardBody);

            let tagH5 = document.createElement('h5');
            tagH5.setAttribute('class', 'text-center');
            let textNode = document.createTextNode(obras[i].obra);
            tagH5.appendChild(textNode);
            tagDivCardBody.appendChild(tagH5);

            let tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].nome_Autor); //obras nome do show obras //nomeAutor nome que está no php tem que ser igual 
            tagP.appendChild(textNode);
            tagDivCardBody.appendChild(tagP);

            tagP = document.createElement('p');
            tagP.setAttribute('class', 'card-text text-center');
            textNode = document.createTextNode(obras[i].descricao);
            tagP.appendChild(textNode);      
            tagDivCardBody.appendChild(tagP); // filho do corpo do card 


            let autor1 = document.getElementById('autor4');
            autor1.appendChild(tagDivCard);

            console.log(tagDivCard)

        }
    }

    
}

//buscar produtos no banco de dados 
const fetchobras = () => {
    console.log("Cheguei na script para carregar os produtos");
    //carregar os produtos no banco de dados
    //endereço da api http://localhost:8000/getobras.php

    fetch('http://localhost:8000/getobras.php')
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                return response.json()
            }
            // mensagem de erro 
            throw new Error(response.statusText);
        })
        .then((obras) => {
            showobras(obras);
        })
        .catch((error) => {
            console.log(error);
        })
}