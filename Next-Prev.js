//<![CDATA[

var postnavPrevText = "السابق"; 
var postnavNextText = "التالي"; 
var navPrevMsg = "أنت تشاهد آخر موضوع";
var navNextMsg = "أنت تشاهد أحدث موضوع";

$(".post-nav").each(function(){$(".prev .nav-inner span").text(postnavPrevText),$(".prev .nav-inner p").text(navPrevMsg),$(".next .nav-inner span").text(postnavNextText),$(".next .nav-inner p").text(navNextMsg);var a=$("a.prev-post").attr("href"),b=$("a.next-post").attr("href");$.ajax({url:a,type:"get",success:function(a){var b=$(a).find(".post h3.post-title").text(),c=postnavPrevText,d="",e=$(a).find(".post-body img:first").attr("src");if(void 0===e)var e=noThumbnail;d+="<div class='nav-thumb'><img alt='"+b+"' src='"+e+"'/></div><div class='nav-content'><span>"+c+"</span><p class='truncate'>"+b+"</p></div>",$("a.prev-post").html(d)}}),$.ajax({url:b,type:"get",success:function(a){var b=$(a).find(".post h3.post-title").text(),c=postnavNextText,d="",e=$(a).find(".post-body img:first").attr("src");if(void 0===e)var e=noThumbnail;d+="<div class='nav-thumb'><img alt='"+b+"' src='"+e+"'/></div><div class='nav-content'><span>"+c+"</span><p class='truncate'>"+b+"</p></div>",$("a.next-post").html(d)}})});

//]]>
