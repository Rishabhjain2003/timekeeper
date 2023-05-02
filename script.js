function display(){
    var current = new Date();
    var h = current.getHours(); 
    var m = current.getMinutes();
    var s = current.getSeconds();
    if(h>10 && h<20){
        document.getElementById('h1').style.transform = "translateY(37%)";
    }
    else if(h<10){
        document.getElementById('h1').style.transform = "translateY(-47%)";
    }
    else if(h>=20){
        document.getElementById('h1').style.transform = "translateY(28%)";
    }


    if(h%10==1){
        document.getElementById('h2').style.transform = "translateY(37%)";
    }
    else if(h%10==2){
        document.getElementById('h2').style.transform = "translateY(28%)";
    }
    else if(h%10==3){
        document.getElementById('h2').style.transform = "translateY(18%)";
    }
    else if(h%10==4){
        document.getElementById('h2').style.transform = "translateY(9%)";
    }
    else if(h%10==5){
        document.getElementById('h2').style.transform = "translateY(0%)";
    }
    else if(h%10==6){
        document.getElementById('h2').style.transform = "translateY(-9%)";
    }
    else if(h%10==7){
        document.getElementById('h2').style.transform = "translateY(-18%)";
    }
    else if(h%10==8){
        document.getElementById('h2').style.transform = "translateY(-28%)";
    }
    else if(h%10==9){
        document.getElementById('h2').style.transform = "translateY(-37%)";
    }
    else if(h%10==0){
        document.getElementById('h2').style.transform = "translateY(-47%)";
    }

    var M = Math.floor(m/10);

    if(M==1){
        document.getElementById('m1').style.transform = "translateY(37%)";
    }
    else if(M==2){
        document.getElementById('m1').style.transform = "translateY(28%)";
    }
    else if(M==3){
        document.getElementById('m1').style.transform = "translateY(18%)";
    }
    else if(M==4){
        document.getElementById('m1').style.transform = "translateY(9%)";
    }
    else if(M==5){
        document.getElementById('m1').style.transform = "translateY(0%)";
    }
    else if(M==6){
        document.getElementById('m1').style.transform = "translateY(-9%)";
    }
    else if(M==7){
        document.getElementById('m1').style.transform = "translateY(-18%)";
    }
    else if(M==8){
        document.getElementById('m1').style.transform = "translateY(-28%)";
    }
    else if(M==9){
        document.getElementById('m1').style.transform = "translateY(-37%)";
    }
    else if(M==0){
        document.getElementById('m1').style.transform = "translateY(-47%)";
    }

    if(m%10==1){
        document.getElementById('m2').style.transform = "translateY(37%)";
    }
    else if(m%10==2){
        document.getElementById('m2').style.transform = "translateY(28%)";
    }
    else if(m%10==3){
        document.getElementById('m2').style.transform = "translateY(18%)";
    }
    else if(m%10==4){
        document.getElementById('m2').style.transform = "translateY(9%)";
    }
    else if(m%10==5){
        document.getElementById('m2').style.transform = "translateY(0%)";
    }
    else if(m%10==6){
        document.getElementById('m2').style.transform = "translateY(-9%)";
    }
    else if(m%10==7){
        document.getElementById('m2').style.transform = "translateY(-18%)";
    }
    else if(m%10==8){
        document.getElementById('m2').style.transform = "translateY(-28%)";
    }
    else if(m%10==9){
        document.getElementById('m2').style.transform = "translateY(-37%)";
    }
    else if(m%10==0){
        document.getElementById('m2').style.transform = "translateY(-47%)";
    }
    

    var S = Math.floor(s/10);

    if(S==1){
        document.getElementById('s1').style.transform = "translateY(37%)";
    }
    else if(S==2){
        document.getElementById('s1').style.transform = "translateY(28%)";
    }
    else if(S==3){
        document.getElementById('s1').style.transform = "translateY(18%)";
    }
    else if(S==4){
        document.getElementById('s1').style.transform = "translateY(9%)";
    }
    else if(S==5){
        document.getElementById('s1').style.transform = "translateY(0%)";
    }
    else if(S==6){
        document.getElementById('s1').style.transform = "translateY(-9%)";
    }
    else if(S==7){
        document.getElementById('s1').style.transform = "translateY(-18%)";
    }
    else if(S==8){
        document.getElementById('s1').style.transform = "translateY(-28%)";
    }
    else if(S==9){
        document.getElementById('s1').style.transform = "translateY(-37%)";
    }
    else if(S==0){
        document.getElementById('s1').style.transform = "translateY(-47%)";
    }


    if(s%10==1){
        document.getElementById('s2').style.transform = "translateY(37%)";
    }
    else if(s%10==2){
        document.getElementById('s2').style.transform = "translateY(28%)";
    }
    else if(s%10==3){
        document.getElementById('s2').style.transform = "translateY(18%)";
    }
    else if(s%10==4){
        document.getElementById('s2').style.transform = "translateY(9%)";
    }
    else if(s%10==5){
        document.getElementById('s2').style.transform = "translateY(0%)";
        console.log(s%10);
    }
    else if(s%10==6){
        document.getElementById('s2').style.transform = "translateY(-9%)";
    }
    else if(s%10==7){
        document.getElementById('s2').style.transform = "translateY(-18%)";
    }
    else if(s%10==8){
        document.getElementById('s2').style.transform = "translateY(-28%)";
    }
    else if(s%10==9){
        document.getElementById('s2').style.transform = "translateY(-37%)";
    }
    else if(s%10==0){
        document.getElementById('s2').style.transform = "translateY(-47%)";
    }
}
setInterval(display,10);