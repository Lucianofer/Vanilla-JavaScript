var items = [
    {
        id: 0,
        nome: 'Camiseta',
        img: 'shirt.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Short',
        img: 'short.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: 'shoes.jpg',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Blusa',
        img: 'blouse.jpg',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Jaqueta',
        img: 'jacket.jpg',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Calça',
        img: 'pants.jpg',
        quantidade: 0
    }
]

inicializarLoja = ()=>{

    var containerProduto = document.getElementById('produtos');

    items.map((val)=>{

        containerProduto.innerHTML += `
        
            <div class="produtos-single">
                <img src="`+val.img+`" />
                <p>`+val.nome+`</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
            </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = ()=>{

    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";

    items.map((val)=>{

        if(val.quantidade > 0){

            containerCarrinho.innerHTML += `

            <p>Produto: `+val.nome+` | Quantidade: `+val.quantidade+`</p>
            <hr />
        `;
        
        }

        
    })
}

var link = document.getElementsByTagName('a');

for(let i = 0; link.length; i++){
    link[i].addEventListener('click', (t)=>{
        let key = t.target.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();

        return false;
    })
}