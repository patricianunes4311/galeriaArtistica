const checkForm= {
    nameAutor: false,  
    obra:false, 
  descricao:false,    
  urlImagem:false
}

document.getElementById('nameAutor').addEventListener('input', function (e) {
    console.log(checkForm);
    const nameAutor = e.target.value;
    // Quero verificar se o tamanho do nome do produto que o usuÃ¡rio digitou Ã© maior que 50. 
    // Se for maior que 50 mostra a mensagem de erro. 
    if(nameAutor.length < 1 || nameAutor.length  > 50){
        console.log('O nome do autor inserido deve ter 1 à 50 caracteres');
        document.getElementById("nameAutor-error").style.display = "block";
        checkForm.nameAutor = false;
    } else {
        document.getElementById("nameAutor-error").style.display = "none";
        checkForm.nameAutor = true;
    }
    enableButton();
});

document.getElementById('obra').addEventListener('input',function(e){
    console.log(checkForm);
    const obra = e.target.value;

    if(obra.length < 1 || obra.length > 200){
        console.log ('o Titulo da obra inserida deve possuir de 1 à 50 caracteres');
        document.getElementById("obra-error").style.display = "block";
        checkForm.obra = false
    } else {
        document.getElementById("obra-error").style.display = "none";
        checkForm.obra = true;
    }
    enableButton();
});

document.getElementById('descricao').addEventListener('input', function(e) {
    console.log(checkForm);
    const descricao = e.target.value;

    if(descricao.length < 1 || descricao.length > 200){
        console.log("Neste campo só deve ser inserido de 1 à 200 caracteres.");
        document.getElementById('descricao-error').style.display = 'block';
        checkForm.descricao = false;
    } else {
        document.getElementById('descricao-error').style.display = 'none';
        checkForm.descricao = true;
    }
    enableButton();
});

document.getElementById('urlImagem').addEventListener('input', function(e) {
    console.log(checkForm);
    console.log('Monitorando url');
    const urlImagem = e.target.value;
    if(validURL(urlImagem)){
        console.log('A imagem deve ser uma url');
        document.getElementById('urlImagem-error').style.display = 'block';
        checkForm.urlImagem = false;
    } else {
        document.getElementById('urlImagem-error').style.display = 'none';
        checkForm.urlImagem = true;        
    }
    enableButton();

});

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !pattern.test(str);
  }
  
  function enableButton(){
      const button = document.getElementById("button");
      if(checkForm.nameAutor && checkForm.obra&& checkForm.descricao && checkForm.urlImagem){
          button.disabled = false;
      }else{
          button.disabled = true;
      }
      console.log (checkForm);
  }