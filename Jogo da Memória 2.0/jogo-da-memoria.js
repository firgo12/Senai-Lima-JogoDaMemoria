    function startGame(){
        var images = [];

        for(var i = 0; i < 16; i++){
            var img = {
                src: "img/" + i + ".png",
                id: i%8
            };
            images.push(img);
        }

        for(var i = 0; i < 16; i++){
            var carta = document.querySelector("#carta" + i);
            console.log(carta);
            carta.style.left = i % 8 == 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
            carta.style.top = i < 8 ? 5 + "px" : 250 + "px";

            carta.addEventListener("click", flipCard, false);

        }
    }
    function flipCard(){
        var rostos = this.getElementsByClassName("rosto");
        rostos[0].classList.toggle("virado");
        rostos[1].classList.toggle("virado");
    }
startGame();