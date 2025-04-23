function meu() {//seleciono com o query o nome da minha form ou class..
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
      let contador=1;
    const pessoas=[];//crio meu array para armazenar os dados que serão exibidos do input
    
  
     function recebe(evento){
         evento.preventDefault();
         const nome=document.querySelector('.nome')
         const sobrenome=document.querySelector('.sobrenome')
         const peso=document.querySelector('.peso')
         const altura=document.querySelector('.altura')
  
         //objeto por indice
         pessoas.push({
           nome:nome.value,
           sobrenome:sobrenome.value,
           altura:altura.value
         });
  
         console.log(pessoas)
  
         resultado.innerHTML+=`<p>${nome.value},${sobrenome.value},${peso.value},${altura.value}</p>`
         //pego o valor dos meus inputs
  
     }
     form.addEventListener('Submit',recebe);
 }
 meu();