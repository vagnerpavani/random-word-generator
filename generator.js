const vogais = ['a','e','i','o','u'];
const vogaisComplexas = ['ae','ai','ao','au','ea','ei','eo','eu','ia','ie','io','iu','oa','oe','oi','ou','ui'];
const consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','qu','r','s','t','v','w','x','y','z'];
const consoantesComplexas = ['lh','nh','ch','sb','sc','sd','sf','sg','sh','sj','sk','sl','sm','sn','sp','squ','sr','ss','st','sv','sw','sx','sy','sz','br','cr','dr','fr','gr','kr','pr','rr','sr','tr','vr'];



function displayName(){
    let element = document.getElementById("nome");
    element.innerHTML = montaPalavra();
}

function montaPalavra(){
    let palavra = [];
    let qtdSilabas = 0;
    let vogalChance;

    vogalChance = Math.round(Math.random());

    while(qtdSilabas < 3){
        
        if(qtdSilabas == 0 && vogalChance == 1){
            palavra.push( escolheVogal());
        }else{
            palavra.push( montaSilaba() );
        }   
        
        qtdSilabas = qtdSilabas  + 1
    }
    
    return palavra.join("");
}

function montaSilaba(){
    return escolheConsoante() + escolheVogal();
}

function escolheVogal(){
    let validado = false;
    let index;
    let complexidade = Math.random() * 2;

    if(complexidade > 1.7){
        while (!validado){
            index = Math.round(Math.random() * vogaisComplexas.length - 1) ;
    
            if(index >= 0){
                validado = true;
            }
        }
        return vogaisComplexas[index];
    }
    else{
        while (!validado){
            index = Math.round(Math.random() * vogais.length - 1) ;
    
            if(index >= 0){
                validado = true;
            }
        }
        return vogais[index];
    }
}

function escolheConsoante(){
    let validado = false;
    let index;
    let complexidade = Math.random() * 2;

    if(complexidade > 1.4){
        while(!validado){
            index = Math.round(Math.random() * consoantesComplexas.length) - 1;

            if(index >= 0){
                validado = true;
            }
        }
        return consoantesComplexas[index];
    }

    else{
        while(!validado){
            index = Math.round(Math.random() * consoantes.length) - 1;

            if(index >= 0){
                validado = true;
            }
        }
        return consoantes[index];
    }
}