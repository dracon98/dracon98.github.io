
 
jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    var x = document.getElementById("item-list");
    var y = x.getElementsByClassName("item row").length;
for(i=0;i<y;i++){
    if (i>2){
        x.getElementsByClassName("item row")[i].style.display = "none";
    }
}
        length.id = "hide";
        document.getElementById("button-more").addEventListener("click", function(){
            for(i=0;i<y;i++){
            if(x.getElementsByClassName("item row")[i].style.display == "inline-block"){
                    if (i>2){
                        x.getElementsByClassName("item row")[i].style.display = "none";
                    }
                }
            
            else{
                if (i>2){
                    x.getElementsByClassName("item row")[i].style.display = "inline-block";
                }
            }
        }
        });
        
    $(function(){
        
        var list = document.getElementsByClassName("wordcheck");
        for (i = 0; i < list.length; i++) {
        var inner = list[i].innerHTML;
        var word = inner.split(' ');
        var num = word.length;
        var init = 29;
        var item = "";
        for (j = 0; j < num; j++){
          if (j===init){
            item += word[j]+"<span class='collapsible'><u>More..</u></span><span class='context'>" + " ";
        }
        else if (j === num-1 && j>init){
            item += word[j]+ "</span><span class='less'><u>Less..</u></span></p>";
        }
        else{
            item += word[j] + " ";
        }
      }
        list[i].innerHTML = item;
    }
     
         var coll = document.getElementsByClassName("collapsible");
 var i;
 
 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     var less = content.nextElementSibling;
       content.style.display = "inline";
       this.style.display = "none";
       less.style.display = "inline";
      
   });
 }

 var coll = document.getElementsByClassName("less");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        var more = content.previousElementSibling;
          content.style.display = "none";
          this.style.display = "none";
          more.style.display = "inline";
           
      });
    }
    });
    $(function(){
        
        var list = document.getElementsByClassName("maincheck");
        for (i = 0; i < list.length; i++) {
        var inner = list[i].innerHTML;
        var word = inner.split(' ');
        var num = word.length;
        var init = 80;
        var item = "";
        for (j = 0; j < num; j++){
          if (j===init){
            item += word[j]+"<span class='collapsible'><u>More..</u></span><span class='context'>" + " ";
        }
        else if (j === num-1 && j>init){
            item += word[j]+ "</span><span class='less'><u>Less..</u></span></p>";
        }
        else{
            item += word[j] + " ";
        }
      }
        list[i].innerHTML = item;
    }
     
         var coll = document.getElementsByClassName("collapsible");
 var i;
 
 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     var less = content.nextElementSibling;
       content.style.display = "inline";
       this.style.display = "none";
       less.style.display = "inline";
      
   });
 }

 var coll = document.getElementsByClassName("less");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        var more = content.previousElementSibling;
          content.style.display = "none";
          this.style.display = "none";
          more.style.display = "inline";
           
      });
    }
    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );

});