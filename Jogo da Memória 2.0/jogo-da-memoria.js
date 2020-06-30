        var acertos = 0;
        
        var images = [];

        var cartasviradas = [];

        //Estrutura de repetição que inicializa o jogo fazendo a distribuição das cartas dentro da "mesa"
        for(var i = 0; i < 16; i++){
            var img = {
                src: "img/" + i + ".png",
                id: i%8
            };
            images.push(img);
        }
        startGame();

        function startGame(){
        //Embaralhar as cartas
        cartasviradas = [];
        images = randomsort(images);

        var rostoFrente = document.getElementsByClassName("frente");
        //Vai colocar as cartas em uma fileira com id = 0 até id = 7
        for(var i = 0; i < 16; i++){
            var carta = document.querySelector("#carta" + i);
            console.log(carta);
            carta.style.left = i % 8 == 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
            carta.style.top = i < 8 ? 5 + "px" : 250 + "px";

            carta.addEventListener("click", flipCard, false);

            rostoFrente[i].style.background = "url('"+ images[i].src +"')"
            rostoFrente[i].setAttribute("id",images[i].id)

        }
    }
    //Embaralhar as cartas (função)
    function randomsort(oldArray){
        var newArray = [];
        while(newArray.length != oldArray.length){
            var i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0){
                newArray.push(oldArray[i]);
            }

        }
        return newArray;

    }

    //Girar as cartas + a implementação do terceiro clique para desvirar as cartas
    function flipCard(){
        if(cartasviradas.length < 2){
            var rostos = this.getElementsByClassName("rosto");

            if(rostos[0].classList.length > 2){
                return;
            }
            rostos[0].classList.toggle("virado");
            rostos[1].classList.toggle("virado");

            cartasviradas.push(this);

            if(cartasviradas.length == 2){
                if(cartasviradas[0].childNodes[3].id == cartasviradas[1].childNodes[3].id){
                    cartasviradas[0].childNodes[1].classList.toggle("acertos");
                    cartasviradas[0].childNodes[3].classList.toggle("acertos");
                    cartasviradas[1].childNodes[1].classList.toggle("acertos");
                    cartasviradas[1].childNodes[3].classList.toggle("acertos");

                    acertos ++;

                    cartasviradas = [];

                    if(acertos == 8){
                        
                    }
                }
            }
        }
        
        else{
            cartasviradas[0].childNodes[1].classList.toggle("virado");
            cartasviradas[0].childNodes[3].classList.toggle("virado");
            cartasviradas[1].childNodes[1].classList.toggle("virado");
            cartasviradas[1].childNodes[3].classList.toggle("virado");

            cartasviradas = [];
        }
    }