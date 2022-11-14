$(document).ready(function(){
    $(".span_toggel").click(function(){

        $(".show_hide").slideToggle(500);

    });

});

$(document).ready(function(){

    $(".pagelodsecond").fadeOut(600);

});


function roles(){

    var w1 = document.getElementById("in1").value;
    var w2 = document.getElementById("in2").value;
    var w3 = document.getElementById("in3").value;
    var w4 = document.getElementById("in4").value;
    var w5 = document.getElementById("in5").value;


    document.getElementById("name_name").innerHTML =
     " أهلا  : "  +"(" + w1 + ")" + "<span class='glyphicon glyphicon-user'></span>";
    if(w1 == ""|| w2 == ""|| w3 == ""|| w4 == "")
    {
        console.log("helqwd");
    }else if(w3 < 50 )
    {
       document.getElementById("li1").innerHTML = ": وزنك اقل من 50 لذا يجب تنفيذ الاتى"; 
       document.getElementById("li2").innerHTML = "لابد انت تاكل لحوم كل يوم بشكل جيد"; 
       document.getElementById("li3").innerHTML = "لابد انت تشرب سوائل كثيرة "; 
       document.getElementById("li4").innerHTML = "لابد انت تاخذ وقت راحة للنوم"; 
       document.getElementById("li5").innerHTML = "لابد ان يزيد وزنك عن هذا لان ذلك خطر عليك"; 
       $(".sec4").fadeOut(1000, function(){
        $("#calc_protin").fadeIn(2000);
    });
    
    }else if(w3 == 50)
    {

        document.getElementById("li1").innerHTML = ": وزنك يساوى 50 لذا يجب تنفيذ الاتى"; 
        document.getElementById("li2").innerHTML = "لابد انت تاكل لحوم ولكن مش بشكل يومى ممكن يوم ويوم"; 
        document.getElementById("li3").innerHTML = "عليك بشرب السوائل  "; 
        document.getElementById("li4").innerHTML = "يجب انت تنام جيدا ايضا"; 
        document.getElementById("li5").innerHTML = "وزنك ليس سيئ ولكن يجب الزيادة "; 
        $(".sec4").fadeOut(1000, function(){
         $("#calc_protin").fadeIn(2000);
         });

    }else if(w3 > 50 )
    {
        document.getElementById("li1").innerHTML = ":وزنك اكبر من 50 لذا يجب تنفيذ الاتى "; 
        document.getElementById("li2").innerHTML = "لابد ان تخفف من الحوم والاكلات الدسمة "; 
        document.getElementById("li3").innerHTML = "عليك بتقليل السكريات   "; 
        document.getElementById("li4").innerHTML = "لا تاخذ وقت طويل فى النون "; 
        document.getElementById("li5").innerHTML = "وزنك يحتاج الى رياضة لا تهمل نفسك  "; 
        $(".sec4").fadeOut(1000, function(){
         $("#calc_protin").fadeIn(2000);
         });

    }
    
    
    else

    {

        document.getElementById("li1").innerHTML = "؟؟؟؟"; 
        document.getElementById("li2").innerHTML = "؟؟؟؟ "; 
        document.getElementById("li3").innerHTML = "؟؟؟؟   "; 
        document.getElementById("li4").innerHTML = "؟؟؟؟؟"; 
        document.getElementById("li5").innerHTML = "؟؟؟؟؟؟  "; 

        $(".sec4").fadeOut(1000, function(){
            $("#calc_protin").fadeIn(2000);
        });

    }
        

    

};
