window.onload=function () {

  function mayus(){

    var autorName = document.getElementById("autor");
    var publicar = document.getElementById("areaPost");

    autorName= autorName.value.split(" ");
    publicar=publicar.value.split(" ");

      var datoMayusAutor= "";
      var postPublicar="";
      for(var a =0; a<autorName.length;a++){
      datoMayusAutor += autorName[a].charAt(0).toUpperCase() + autorName[a].substring(1).toLowerCase() + " ";
      }
      autorName= datoMayusAutor;
      postPublicar= publicar[0].trim().charAt(0).toUpperCase() + publicar[0].substring(1).toLowerCase() + " ";
        for(var i =1; i<publicar.length;i++){
      postPublicar += publicar[i]+ " ";
    }

      publicar = postPublicar;

    var muro = document.getElementById("muro");
    var post = document.createElement("div");


    var br = document.createElement("br");
        post.innerHTML= "<br>" +publicar +" - autor: "+ autorName + "</br>" ;

        muro.appendChild(post);

        document.getElementById("autor").value="";
        document.getElementById("areaPost").value="";

  }

  var boton = document.getElementById("publicar");
  boton.addEventListener("click", function(){
    var autorName = document.getElementById("autor").value;
    var publicar = document.getElementById("areaPost").value;
    if(autorName.length !=0 && publicar.length != 0){
      mayus();
    }else{return false;}
  });

}
