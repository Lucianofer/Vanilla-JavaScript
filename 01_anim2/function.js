const elementos = document.querySelectorAll('.conteudo');

       for(let i = 0; i < elementos.length; i++){
           let span = elementos[i].querySelector('span');
           let texto = elementos[i].querySelector('p');

           span.addEventListener('click', ()=>{

               if(texto.classList.contains('mostrar')){
                   texto.classList.remove('mostrar');
                   span.innerText = "Ver mais";
               }else {
                   texto.classList.add('mostrar');
                   span.innerText = "Ocultar";
               }
           })
       }