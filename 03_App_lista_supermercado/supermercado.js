/*****************************************************************************************/
//ADICIONANDO VALIDAÇÃO

var items = [];

    var btn = document.querySelector('input[type=submit]');
    btn.addEventListener('click', ()=>{
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto = document.querySelector('input[name=valor_produto]');
            
        items.push({
                nome: nomeProduto.value,
                preco: precoProduto.value
            })
        
        let listaProdutos = document.querySelector('.lista-produto');
        listaProdutos.innerHTML = "";
        var soma = 0;
    
        items.map((val)=>{
            
            if(val.nome != "" && val.preco != ""){
                
                soma += parseFloat(val.preco);
                listaProdutos.innerHTML += `
            
                <div class="produto-single">
                    <h3>`+val.nome+`</h3>
                    <h3 class="price-produto"><span>`+val.preco+`</span></h3>
                </div>
                `;
            }          
            
        });
    
        nomeProduto.value = "";
        precoProduto.value = "";
        soma = soma.toFixed(2);
    
        let somaProduto = document.querySelector('.soma-produto h1');
        somaProduto.innerHTML = 'R$ '+soma;
    });

    var limpar = document.querySelector('button[name=limpar]');
    limpar.addEventListener('click', ()=>{
        items = [];
        document.querySelector('.lista-produto').innerHTML = "";
        document.querySelector('.soma-produto h1').innerHTML = "R$ 0,00";
    });