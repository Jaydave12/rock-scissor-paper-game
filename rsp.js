let choice=["rock","scissor","paper"];
var score=1;
var score1=1;



function rockk(){
    let userchoice=choice[0];
    let compchoice=choice[Math.floor(Math.random()*choice.length)];

    if(userchoice===compchoice){
    document.getElementById("hh3").innerHTML="match tie!";
        document.getElementById("res1").style.backgroundColor="yellow";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F537927be-0a36-4c4f-b89f-bb9e736aa50e_450x234.gif";
        
        console.log(compchoice);
    }
    if(compchoice===choice[1]&&compchoice!==choice[0]){
        
        document.getElementById("hh3").innerHTML="you win!";
        document.getElementById("res1").style.backgroundColor="green";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://www.icegif.com/wp-content/uploads/2022/07/icegif-1303.gif";
        console.log(compchoice);
        document.getElementById("you").innerHTML=score;
        score++;

        

    
    }
    if(compchoice===choice[2]&&compchoice!==choice[1]&&compchoice!==choice[0]){
        document.getElementById("hh3").innerHTML="you lost!";
        document.getElementById("res1").style.backgroundColor="red";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://media1.giphy.com/media/Y5PnpRvm8PVba/200w.gif?cid=82a1493bwbp3j3atoc5axyom7bf4iuvp898td3b69byae1ui&ep=v1_gifs_related&rid=200w.gif&ct=g";
        console.log(compchoice);
        document.getElementById("comp").innerHTML=score1;
        score1++;
    }

}
function scissors(){
    let userchoice=choice[1];
    let compchoice=choice[Math.floor(Math.random()*choice.length)];

    if(userchoice===compchoice){
    document.getElementById("hh3").innerHTML="match tie!";
        document.getElementById("res1").style.backgroundColor="yellow";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F537927be-0a36-4c4f-b89f-bb9e736aa50e_450x234.gif";
        console.log(compchoice);
    }
    if(compchoice===choice[2]&&compchoice!==choice[1]){
        
        document.getElementById("hh3").innerHTML="you win!";
        document.getElementById("res1").style.backgroundColor="green";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://www.icegif.com/wp-content/uploads/2022/07/icegif-1303.gif";
        console.log(compchoice);
        document.getElementById("you").innerHTML=score;
        score++;

    
    }
    if(compchoice===choice[0]&&compchoice!==choice[2]&&compchoice!==choice[1]){
        document.getElementById("hh3").innerHTML="you lost!";
        document.getElementById("res1").style.backgroundColor="red";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://media1.giphy.com/media/Y5PnpRvm8PVba/200w.gif?cid=82a1493bwbp3j3atoc5axyom7bf4iuvp898td3b69byae1ui&ep=v1_gifs_related&rid=200w.gif&ct=g";
        console.log(compchoice);
        document.getElementById("comp").innerHTML=score1;
        score1++;
    }

}
function paperr(){
    let userchoice=choice[2];
    let compchoice=choice[Math.floor(Math.random()*choice.length)];

    if(userchoice===compchoice){
    document.getElementById("hh3").innerHTML="match tie!";
        document.getElementById("res1").style.backgroundColor="yellow";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F537927be-0a36-4c4f-b89f-bb9e736aa50e_450x234.gif";
        console.log(compchoice);
    }
    if(compchoice===choice[0]&&compchoice!==choice[1]){
        
        document.getElementById("hh3").innerHTML="you win!";
        document.getElementById("res1").style.backgroundColor="green";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://www.icegif.com/wp-content/uploads/2022/07/icegif-1303.gif";
        console.log(compchoice);
        document.getElementById("you").innerHTML=score;
        score++;

    }
    if(compchoice===choice[1]&&compchoice!==choice[0]&&compchoice!==choice[2]){
        document.getElementById("hh3").innerHTML="you lost!";
        document.getElementById("res1").style.backgroundColor="red";
        document.getElementById("img12").style.visibility="visible";
        document.getElementById("img12").src="https://media1.giphy.com/media/Y5PnpRvm8PVba/200w.gif?cid=82a1493bwbp3j3atoc5axyom7bf4iuvp898td3b69byae1ui&ep=v1_gifs_related&rid=200w.gif&ct=g";
        console.log(compchoice);
        document.getElementById("comp").innerHTML=score1;
        score1++;

    }

    

}