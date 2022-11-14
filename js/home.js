$(document).ready(function(){
    $(".span_toggel").click(function(){

        $(".show_hide").slideToggle(500);

    });

});

$(document).ready(function(){

    $(".pagelodsecond").fadeOut(600);

});



function user_account()
{
    var in1 = document.getElementById("inp1").value;
    var in2 = document.getElementById("inp2").value;

     document.getElementById("hoi").innerHTML = in2 + in1;
     document.getElementById("hoi2").innerHTML = in2 + in1;
     $("#secv").fadeOut(500);
     $("body").css("overflow","scroll");
     $("#sinup").css("display","none");
     $("#hoi").css("visibilty","visible");
     $("#hoi22").css("opacity","1");
     $(".spo").css("opacity","1");
     $("#sinup2").css("display","none");
     $(".nm").css("display","block");
     
      
      
 

}

function hay(){

    var loin = document.getElementById("lod_input").value;

       
            
                if(loin == "")
                {
                    $(".regolar").fadeIn(1000); 
                }
                else
                {
                    document.getElementById("vistih1").innerHTML=
                    "Welcome " + " " +    loin + "   "  + "We are glad you visited our site";
                        $(".wido2").fadeIn(7000,function(){
                                $("#contain").fadeOut(16000,function(){
        
                                    $(".loading-screen").fadeOut(200,function(){
                                        $("body").css("overflow-y","scroll");
        
                                    });
                                });
        
                        });
                        $(".wido").css("display","none");
                     
                }
        

};