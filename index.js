function comeToMe(){

  var ran = Math.random()*6+1;
  ran = Math.floor(ran);
  var ran1 = Math.random()*6+1;
  ran1 = Math.floor(ran1);
  var img1Src = "images/dice"+ran+".png";
  var img2Src = "images/dice"+ran1+".png";
  if( ran1 > ran){
    document.querySelector("h1").textContent="Player 2 Wins";
  }
  else if( ran1 < ran){
    document.querySelector("h1").textContent="Player 1 Wins";
  }
  else {
    document.querySelector("h1").textContent="Draw";
  }
  document.querySelector(".img1").setAttribute("src",img1Src);
  document.querySelector(".img2").setAttribute("src",img2Src);

  //alert("yeahhhh it is coming naren");
}
