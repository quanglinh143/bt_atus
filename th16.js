var couter=1;
setInterval(()=>{
    document.querySelector('#radio-'+couter).checked= true;
    couter++;
    if(couter>3){
        couter=1;
    }
    if(couter !=1){
        document.querySelector('.auto-btn1').classList.remove('active');
    }
},3000);

window.addEventListener('scroll',()=>{
    console.log(pageYOffset);
    if(pageYOffset > 300){
        document.querySelector('.navigation-head').classList.add("fixed-top");
        var he=document.querySelector('.navigation-head');
        he.style.background="#FFF";

        
        

    }else if(pageYOffset<=300){
        document.querySelector('.navigation-head').classList.remove("fixed-top");
        var he=document.querySelector('.navigation-head');
        he.style.background=" rgba(0, 0, 0, 0)";
    }
           
})


function show(message){
    console.log(message);
}
show(1+3);

$(document).ready(function(){
    $(".bar-reponsive").click(function(){
      $(".content-reponsive").slideToggle("slow");
      $(".navigation-head").css("background-color", "#FFF");
    });
  });

  $(document).ready(function(){
    $('.isearch').click(function(){
      $('.searching').toggleClass('activee');
    })
  })
  $(document).ready(function(){
    $('.isearchh').click(function(){
      $('.searchingg').toggleClass('activee');
    })
  })


