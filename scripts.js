

let lat="";
let lon="";
var statusTemp;
let temp;
let humidity;
let cidade="";
let icone;



document.querySelector(".btn").addEventListener("click",async function(e){
    
    let cep = document.querySelector(".input").value; 
    // location.replace('show.html');
    
    await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res)=>
    res.json()).then((res)=>{ 
        /*previsão do tempo */
        cidade = res.localidade; 
        
        PrevisaoTempo();
        Noticias();
        Mapa();
       
    } 
    )
     
});

 function PrevisaoTempo(){
console.log(cidade); 
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=701526791a36fb7fdc75ec0da60ff140&lang=pt_br`).then((res)=>
        res.json()).then((res)=>{
        console.log(res);
        statusTemp = res.weather[0].description;
        lat = res.coord.lat;
        lon = res.coord.lon;
        temp = res.main.temp;
        humidity = res.main.humidity;
        icone = res.weather[0].icon;
        console.log(lat);
        console.log(lon);
        console.log(Math.round(temp));
        console.log(humidity);
        console.log(statusTemp);
        Mostrar_informacoes();

        })
}

function Noticias(){
     fetch(`https://newsapi.org/v2/everything?q=Brasil&language=pt&sortBy=relevancy&apiKey=ad446c1ee1d34a4fb9eb25096918764f`).then((res)=>
            res.json()).then((res)=>{
            console.log(res);
            })
    }

async function Mapa(){
        await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${long}&appid=8d540014541ecd29672dd3401dd86b77`).then((resp)=>
        resp.json()).then((resp)=>{
            console.log(resp);})
        }
function Mostrar_informacoes(){
    document.querySelector('.box').innerHTML='<h1>'+cidade+'</h1><h3>'+statusTemp+'</h3><div class="temp-hum"><div class="div-temp"><p id="">Temperatura:</p><p id="temperatura">'+Math.round(temp)+'°C'+'</p></div><p id="separador">|</p><div class="div-hum"><p >Umidade:</p><p id="humidade">'+humidity+'%'+'</p></div></div>'
    
    // document.querySelector('.box2 h1').innerText = cidade;
    // document.querySelector('.box2 h3').innerText = statusTemp;
    // document.querySelector('#temperatura').innerText = Math.round(temp)+"ºC";
    // document.querySelector('#humidade').innerText = humidity+"%";
}
