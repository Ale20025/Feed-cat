//Variables
let Musica=document.getElementById("Musica");
let Sonido1=document.getElementById("Sonido1");
let Sonido2=document.getElementById("Sonido2");
let Sonido3=document.getElementById("Sonido3");
let Sonido4=document.getElementById("Sonido4");
let Sonido5=document.getElementById("Sonido5");
let Sonido6=document.getElementById("Sonido6");
let Sonido7=document.getElementById("Sonido7");
let YaGuardoPuntos = false;
let Gato=document.getElementById("Jugador");
let Comparacion=0;
let Puntos=0;
let Alepuntos=document.getElementById("Puntaje");
let Multiplicante=1;
let carril=0;
let velocidadComida=5;
let Nivel=0;
let objetoActivo = 0;
let velocidadObjeto=6;
let UltimoCarril=-1;
let VidasRestantes=3;
let Atraer=false;
let Congelado=false;
let MensajeFinal=document.getElementById("MensajeMuerte");
let Reiniciar=document.getElementById("Reiniciar");
let PuntosFinales=document.getElementById("TextDeath2");
let GameOver=false;
let Clave=document.getElementById("Clave");
let Numero=document.getElementById("Numero");



//Arreglos
let Vidas=[
    document.getElementById("Vida1"),
    document.getElementById("Vida2"),
    document.getElementById("Vida3")
]
let Comidas=[
    document.getElementById("Comida"),
    document.getElementById("Comida2"),
    document.getElementById("Comida3"),
    document.getElementById("Comida4"),
    document.getElementById("Comida5")
];

let yComidas=[
    -100,
    -380,
    -660,
    -940,
    -1220
];

let xComidas=[
    100,
    250,
    400,
    650,
    800
];

let carriles=[
    100, 
    250, 
    400, 
    650, 
    800
];

let Objetos=[
    document.getElementById("Bomba"),
    document.getElementById("Iman"),
    document.getElementById("DoblePuntos"),
    document.getElementById("Corazon"),
    document.getElementById("Congelacion")
]

let yObjetos=[
    -400,
    -800,
    -1200,
    -1600,
    -2000
];

console.log({
  innerWidth: window.innerWidth,
  outerWidth: window.outerWidth,
  clientWidth: document.documentElement.clientWidth,
  bodyWidth: document.body.clientWidth,
  juegoWidth: document.getElementById("Juego").clientWidth
});

//Jugador
function moverJugador(event){

    if(GameOver){
    return;
    }

    if(Congelado){
        return;
    }

    let x = event.clientX;
    if(x<0){
        x=0;
    }

    if(x>window.innerWidth-Gato.offsetWidth){
        x=window.innerWidth-Gato.offsetWidth;
    }

    Gato.style.left=x+"px";
}

document.addEventListener("pointerdown", moverJugador);
document.addEventListener("pointermove", moverJugador);



//Juego
function actualizar(){


if(Puntos>=0 && Nivel==0){
    velocidadComida=3.2;
    velocidadObjeto=4;
    Nivel=1;

}
if(Puntos>=20 && Nivel==1){
    velocidadComida=4;
    velocidadObjeto=5;
    Nivel=2;

}
if(Puntos>=40 && Nivel==2){
    velocidadComida=5.2;
    velocidadObjeto=5.8;
    Nivel=3;

}
if(Puntos>=60 && Nivel==3){
    velocidadComida=7.5;
    velocidadObjeto=8;
    Nivel=4;

}
if(Puntos>=80 && Nivel==4){
    velocidadComida=10.5;
    velocidadObjeto=11;
    Nivel=5;

}
if(Puntos>=100 && Nivel==5){
    velocidadComida=16;
    velocidadObjeto=18;
    Nivel=6;
}
if(Puntos>=150 && Nivel==6){
    velocidadComida=21;
    velocidadObjeto=26;
    Nivel=6;
}



//Probabilidades
function generarObjeto(){
    Sonido6.play();
    for(let i=0;i<Objetos.length;i++){
    Objetos[i].style.display="none";
    }
    let TipoObjeto=Math.random();
    if(TipoObjeto<0.55){

        objetoActivo=0;

        yObjetos[0] = -Objetos[0].offsetHeight;
        Objetos[0].style.top = yObjetos[0] + "px";
        Objetos[0].style.display="flex"; 
        do{
            carril = Math.floor(Math.random()*carriles.length);
        }while(carril==UltimoCarril);

        UltimoCarril = carril;

        Objetos[0].style.left = carriles[carril] + "px";
    }

    else if(TipoObjeto<0.70){

        objetoActivo=1;

        yObjetos[1] = -Objetos[1].offsetHeight;
        Objetos[1].style.top = yObjetos[1] + "px";
        Objetos[1].style.display="flex"; 
        do{
            carril = Math.floor(Math.random()*carriles.length);
        }while(carril==UltimoCarril);

        UltimoCarril = carril;

        Objetos[1].style.left = carriles[carril] + "px";
    }

    else if(TipoObjeto<0.82){

        objetoActivo=2;

        yObjetos[2] = -Objetos[2].offsetHeight;
        Objetos[2].style.top = yObjetos[2] + "px";
        Objetos[2].style.display="flex"; 
        do{
            carril = Math.floor(Math.random()*carriles.length);
        }while(carril==UltimoCarril);

        UltimoCarril = carril;

        Objetos[2].style.left = carriles[carril] + "px";
    }

    else if(TipoObjeto<0.92){

        objetoActivo=3;

        yObjetos[3] = -Objetos[3].offsetHeight;
        Objetos[3].style.top = yObjetos[3] + "px";
        Objetos[3].style.display="flex"; 
        do{
            carril = Math.floor(Math.random()*carriles.length);
        }while(carril==UltimoCarril);

        UltimoCarril = carril;

        Objetos[3].style.left = carriles[carril] + "px";
    }

    else{

        objetoActivo=4;

        yObjetos[4] = -Objetos[4].offsetHeight;
        Objetos[4].style.top = yObjetos[4] + "px";
        Objetos[4].style.display="flex"; 
        do{
            carril = Math.floor(Math.random()*carriles.length);
        }while(carril==UltimoCarril);

        UltimoCarril = carril;

        Objetos[4].style.left = carriles[carril] + "px";
    }
}



//muerte
function perderVida(){
    VidasRestantes=VidasRestantes-1;
    Vidas[VidasRestantes].style.backgroundImage="url(imagenes/novida.png)";
}

if(VidasRestantes==0){
    GameOver=true;
}

if(GameOver){
    MensajeFinal.style.display="flex";
    PuntosFinales.textContent=Puntos+" Alepuntos"
    Musica.pause();
    if(!YaGuardoPuntos){

        GuardarAlePuntos(Puntos);

        YaGuardoPuntos = true;

    }
    return;
}

else{
    Musica.play();    
}



//VidasExtra
function ActivarVidaExtra(){
    if(VidasRestantes<3){
        Sonido5.play();
        VidasRestantes++;
        Vidas[VidasRestantes-1].style.backgroundImage="url(imagenes/vidaextra.png)";
    }
}


//Bomba
function ActivarBomba(){
    Sonido1.play();
    Gato.style.backgroundImage="url(imagenes/jugadorbomba.png)";
    perderVida();

    setTimeout(function(){
        Gato.style.backgroundImage="url(imagenes/jugador.png)";

    },2000);
}


//Multiplicador
function ActivarMultiplicador(){
    Sonido4.play();
    Multiplicante=2;
    Comidas[0].style.backgroundImage="url(imagenes/multiple1.png)";
    Comidas[1].style.backgroundImage="url(imagenes/multiple2.png)";
    Comidas[2].style.backgroundImage="url(imagenes/multiple3.png)";
    Comidas[3].style.backgroundImage="url(imagenes/multiple4.png)";
    Comidas[4].style.backgroundImage="url(imagenes/multiple5.png)";
    setTimeout(function(){
        Comidas[0].style.backgroundImage="url(imagenes/comida1.png)";
        Comidas[1].style.backgroundImage="url(imagenes/comida2.png)";
        Comidas[2].style.backgroundImage="url(imagenes/comida3.png)";
        Comidas[3].style.backgroundImage="url(imagenes/comida4.png)";
        Comidas[4].style.backgroundImage="url(imagenes/comida5.png)";
        Multiplicante=1;

    },6000);
}


//Congelacion
function ActivarCongelacion(){
    Sonido2.play();
    Congelado = true;
    Gato.style.backgroundImage="url(imagenes/jugadorhelado.png)";
    setTimeout(function(){

        Gato.style.backgroundImage="url(imagenes/jugador.png)";
        Congelado = false;
        
    },2000);


}


//Iman
function ActivarIman(){
    Sonido3.play();
    Atraer=true;
    Gato.style.backgroundImage="url(imagenes/jugadoriman.png)";    
    setTimeout(function(){
        Gato.style.backgroundImage="url(imagenes/jugador.png)";
        Atraer = false;

    },5000);
}


//Comida
function obtenerComidaMax(){
    let ComidaMax=yComidas[0];

    for(let j=1; j<yComidas.length; j++){
        if(yComidas[j]<ComidaMax){
            ComidaMax=yComidas[j];
        }
    }
    return ComidaMax;
}

for(let i=0; i<Comidas.length; i++){
yComidas[i]+=velocidadComida;
Comidas[i].style.top=yComidas[i]+"px";
let GatoRect=Gato.getBoundingClientRect();
if(Atraer){

    let CentroGato = GatoRect.left + GatoRect.width/2;
    let ComidaRect = Comidas[i].getBoundingClientRect();
    let CentroComida = ComidaRect.left + ComidaRect.width/2;

    if(CentroGato > CentroComida){
        xComidas[i] += 3;
    }
    else {
        xComidas[i] -= 3;
    }
    Comidas[i].style.left = xComidas[i] + "px";
}
if(yComidas[i]>window.innerHeight){
    yComidas[i]=obtenerComidaMax()-(250+Math.random()*200);

    do{
        carril=Math.floor(Math.random()*carriles.length);
    }while(carril==UltimoCarril);
    UltimoCarril=carril;

    xComidas[i] = carriles[carril];
    Comidas[i].style.left = xComidas[i] + "px";
    perderVida();
}

let ComidaRect=Comidas[i].getBoundingClientRect();

if(
    GatoRect.left<ComidaRect.right &&
    GatoRect.right>ComidaRect.left &&
    GatoRect.top<ComidaRect.bottom &&
    GatoRect.bottom>ComidaRect.top
){
    yComidas[i]=obtenerComidaMax()-(250+Math.random()*200);
    Comidas[i].style.top=yComidas[i]+"px";
    do{
        carril=Math.floor(Math.random()*carriles.length);
    }while(carril==UltimoCarril);
    UltimoCarril=carril;
    xComidas[i] = carriles[carril];
    Comidas[i].style.left = xComidas[i] + "px";

    Puntos+=Multiplicante;
    Alepuntos.textContent="Puntos: "+Puntos;
}
}



//Objeto
if(Puntos>=10){
    yObjetos[objetoActivo]+=velocidadObjeto;
    Objetos[objetoActivo].style.top=yObjetos[objetoActivo]+"px";

    if(yObjetos[objetoActivo]>window.innerHeight){
        yObjetos[objetoActivo] = -Objetos[objetoActivo].offsetHeight;
        generarObjeto();
    }
    let GatoRect=Gato.getBoundingClientRect();
    let ObjetosRect=Objetos[objetoActivo].getBoundingClientRect();

    if(
        GatoRect.left<ObjetosRect.right &&
        GatoRect.right>ObjetosRect.left &&
        GatoRect.top<ObjetosRect.bottom &&
        GatoRect.bottom>ObjetosRect.top
    ){
        yObjetos[objetoActivo]=-Objetos[objetoActivo].offsetHeight;
        Objetos[objetoActivo].style.top=yObjetos[objetoActivo]+"px";
        do{
            carril=Math.floor(Math.random()*carriles.length);
        }while(carril==UltimoCarril);
        UltimoCarril=carril;
        Objetos[objetoActivo].style.left=carriles[carril]+"px";
        
        switch(objetoActivo){
            case 0:
                ActivarBomba();
                break;

            case 1:
                ActivarIman();
                break;

            case 2:
                ActivarMultiplicador();
                break;

            case 3:
                ActivarVidaExtra();
                break;
    
            case 4:
                ActivarCongelacion();
                break;
        
        }

        generarObjeto();
    }

}

requestAnimationFrame(actualizar);
}
actualizar();

//Reiniciar
Reiniciar.addEventListener("click", function(){
    Sonido7.play();
    setTimeout (function(){
    location.reload();
    },1000);   
});

//Menu
Menu.addEventListener("click", function(){
    Sonido7.play();
    setTimeout(function(){
        window.location.href = "https://ale20025.github.io/Menu/";
    },1000); 
});

function GuardarAlePuntos(cantidad){

    let Total = Number(localStorage.getItem("AlePuntos")) || 0;

    Total += cantidad;

    localStorage.setItem("AlePuntos", Total);

}

Clave.addEventListener("click", function(){
    GameOver=true;
    Numero.style.display="block";
});
