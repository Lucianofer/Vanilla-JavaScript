var playerOptions = document.querySelectorAll('.container .player-options > img');
            var inimigoOptions = document.querySelectorAll('.container .enemy-options > img');
            var playerOpt = "";
            var inimigoOpt = "";

            var playerPlacar = document.querySelector('.placar .player-venceu');
            var inimigoPlacar = document.querySelector('.placar .inimigo-venceu');
            var playerVitoria = 0;
            var inimigoVitoria = 0;
            

            function validarVitoria(){
                let vencedor = document.querySelector('.vencedor');

                if(playerOpt == "papel"){

                    if(inimigoOpt == "papel"){
                            vencedor.innerHTML = "Empate";
                    }else if(inimigoOpt == "tesoura"){
                            vencedor.innerHTML = "Inimigo Venceu";
                            inimigoVitoria += 1;
                            inimigoPlacar.innerHTML = inimigoVitoria;
                    }else if(inimigoOpt == "pedra"){
                            vencedor.innerHTML = "Player Venceu";
                            playerVitoria += 1;
                            playerPlacar.innerHTML = playerVitoria;
                    }
                }

                if(playerOpt == "pedra"){

                    if(inimigoOpt == "pedra"){
                            vencedor.innerHTML = "Empate";
                    }else if(inimigoOpt == "papel"){
                            vencedor.innerHTML = "Inimigo Venceu";
                            inimigoVitoria += 1;
                            inimigoPlacar.innerHTML = inimigoVitoria;
                    }else if(inimigoOpt == "tesoura"){
                            vencedor.innerHTML = "Player Venceu";
                            playerVitoria += 1;
                            playerPlacar.innerHTML = playerVitoria;
                    }
                }

                if(playerOpt == "tesoura"){

                    if(inimigoOpt == "tesoura"){
                            vencedor.innerHTML = "Empate";
                    }else if(inimigoOpt == "pedra"){
                            vencedor.innerHTML = "Inimigo Venceu";
                            inimigoVitoria += 1;
                            inimigoPlacar.innerHTML = inimigoVitoria;
                    }else if(inimigoOpt == "papel"){
                            vencedor.innerHTML = "Player Venceu";
                            playerVitoria += 1;
                            playerPlacar.innerHTML = playerVitoria;
                    }
                }

            }

            resetOpacityInimigo = ()=>{
                let inimigoOptions = document.querySelectorAll('.container .enemy-options > img');

                for(let i = 0; i < inimigoOptions.length; i++){
                    inimigoOptions[i].style.opacity = 0.3;
                }
            }

            inimigoJogar = ()=>{
                let rand = Math.floor(Math.random()*3);
                resetOpacityInimigo();

                for(let i = 0; i < inimigoOptions.length; i++){
                    if(i == rand){
                        inimigoOptions[i].style.opacity = 1;
                        inimigoOpt = inimigoOptions[i].getAttribute('opt');
                    }
                }
                
                validarVitoria();
            }

            resetOpacityPlayer = ()=>{
                for(let i = 0; i < playerOptions.length; i++){
                    playerOptions[i].style.opacity = 0.3;
                }
            }

            playerJogar = ()=>{

                for(let i = 0; i < playerOptions.length; i++){
                    playerOptions[i].addEventListener('click', (t)=>{
                        resetOpacityPlayer();
                        t.target.style.opacity = 1;
                        playerOpt = t.target.getAttribute('opt');
                        inimigoJogar();
                    });
                }
            }

            playerJogar();