var n1,n2,n3,numero = 1;
window.onload = function(){
    function ativa(){
        if(numero === 1){
            n1 = document.getElementById('imgf1');
            n2 = document.getElementById('imgf2');
            n3 = document.getElementById('imgf3');
            n1.className = 'img1'; 
            n2.className = 'img2'; 
            n3.className = 'img3'; 
            n1.style.transition = '1.1s';
            n2.style.transition = '1.1s';
            n3.style.transition = '1.1s';
        }
    }
    ativa();


}

function frente(){
    if(numero === 1){
        n1 = document.getElementById('imgf1');
        n2 = document.getElementById('imgf2');
        n3 = document.getElementById('imgf3');
        n1.className = 'img3'; 
        n2.className = 'img1'; 
        n3.className = 'img2'; 
        numero = 2;

    } else if(numero === 2){
        n1 = document.getElementById('imgf1');
        n2 = document.getElementById('imgf2');
        n3 = document.getElementById('imgf3');
        n1.className = 'img2';
        n2.className = 'img3';
        n3.className = 'img1';
        numero = 3;
        


    }else if(numero === 3){
        n1 = document.getElementById('imgf1');
        n2 = document.getElementById('imgf2');
        n3 = document.getElementById('imgf3');
        n1.className = 'img1';
        n2.className = 'img2';
        n3.className = 'img3';
        numero = 1;
    }
}

function atraz(){
    if(numero === 1){
        n1 = document.getElementById('imgf1');
        n2 = document.getElementById('imgf2');
        n3 = document.getElementById('imgf3');
        n1.className = 'img2'; 
        n2.className = 'img1'; 
        n3.className = 'img3'; 
        numero = 2;

    } else if(numero === 2){
        n1 = document.getElementById('imgf1');
        n2 = document.getElementById('imgf2');
        n3 = document.getElementById('imgf3');
        n1.className = 'img1';
        n2.className = 'img3';
        n3.className = 'img2';
        numero = 3;
        


    }else if(numero === 3){
        n1 = document.getElementById('imgf1');
        n2 = document.getElementById('imgf2');
        n3 = document.getElementById('imgf3');
        n1.className = 'img3';
        n2.className = 'img2';
        n3.className = 'img1';
        numero = 1;
    }
}
