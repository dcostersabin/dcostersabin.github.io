
$(document).ready(function(){
    
    $("#sidebar").hide();
    $(".wrapper-main2").hide();
    $(".wrapper-main3").hide();
    setDots();
  
})

$(".logo").hover(function(){
    $(this).css({"color":"#0babeb"});
    $(this).css({"height":"1px"})
},
function(){
    $(this).css({"color":"#FFFFFF"});
}
);

function dotClick(dot)
{
    $("#sidebar").hide();
    $("#pagecounter").val(dot) ;
    hidePages(dot);
}


$(window).bind('mousewheel DOMMouseScroll', function(event){
    let maxPage = 3;
    let minPage = 1;
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        let counter = $("#pagecounter").val();
        counter --;
        if(counter < minPage)
        {
            counter = maxPage
        }
        $("#pagecounter").val(counter) ;
        hidePages(counter);
        
    }
    else {
        let counter = $("#pagecounter").val();
        counter ++;
        if(counter > maxPage){
            counter = minPage
        }
        $("#pagecounter").val(counter) ;
        hidePages(counter);
        
    }
});


function hidePages(pageNo)
{
    let maxPage = 3;
    let minPage = 1;
    setDots();
    for (var i = minPage; i <= maxPage; i++) {
        
        if(i == pageNo)

        {
            $(".wrapper-main" + i).fadeIn("slow",function(){
                
            });

            

            if(i == 3)
            {
                $(".body").css("background-color","#8F6F60")
            }

            
            continue;
        }
        $(".wrapper-main" + i).hide();
        $(".body").css("background-color","#1F1F1F")
        
        
       }
   
}

function setDots(){
    let counter = $("#pagecounter").val();
   
    let page_text = ["Greetings",'What I Do','Resume']
    $("#watermark").text(page_text[counter - 1 ])
    let maxPage = 3;
    let minPage = 1;
    for (var i = minPage; i <= maxPage; i++) {
        
        if(i == counter)
        {
            $("#page-"+i+"-dot-"+i).css("background-color","#0babeb")
            $("#page-"+i+"-dot-"+i).css("height","15px")
            $("#page-"+i+"-dot-"+i).css("width","15px")
            $("#sidebar-"+i).css("color","#0babeb")
            continue;
        }
        $("#sidebar-"+i).css("color","#FFFFFF")
        $("#page-"+i+"-dot-"+i).css("background-color","#FFFFFF")
        
        
       }
}

function closeSidebar()
{
    $("#sidebar").fadeOut("fast");
}

function showSidebar()
{
    $("#sidebar").fadeIn("fast");
}

$("#education-box-1").hover(function(){
    $("#education-box-1").css("background-color","#523a2f")
},function(){
    $("#education-box-1").css("background-color","#8b756b")

});

$("#education-box-2").hover(function(){
    $("#education-box-2").css("background-color","#523a2f")
},function(){
    $("#education-box-2").css("background-color","#8b756b")
})