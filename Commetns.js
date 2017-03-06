var jsCommentPages = function(){
  var $activePage,
  $activeTab,
  init = function(){    $(&quot;.comments-tab&quot;).each(function(){
    var $tab = $(this);
    $tab.click(selectPage)
     .addClass(&quot;js-inactive-tab&quot;);
    switch ($tab.attr(&quot;id&quot;)){
     case &quot;blogger-comments&quot;:
      $tab.prepend(&quot;<img src='http://lh6.googleusercontent.com/-_InM8Yxvqlg/Tg03QmGCkDI/AAAAAAAAAd8/Ozlnv5wP_C8/s800/blogger-white-B.png'/>&quot;);
      break;
     case &quot;disqus-comments&quot;:
      $tab.prepend(&quot;<img src='http://4.bp.blogspot.com/-Vh58qAXwdcw/UcbkHl31HMI/AAAAAAAAEJ0/QndAwVtUZAI/s1600/white-disqus-D.png'/>&quot;);
      break;
     case &quot;fb-comments&quot;:
      $tab.prepend(&quot;<img src='http://3.bp.blogspot.com/-WZFew-hmWYs/UcbkHj-2D2I/AAAAAAAAEJw/D0mXysXQP_Q/s1600/white-Facebook-F.png'/>&quot;);
      break;
     case &quot;get-this&quot;:
      $tab.prepend(&quot;<img src='http://3.bp.blogspot.com/-9dSC4V-ERMs/UclFdUjqV_I/AAAAAAAAEKQ/R0F5B-uHzwM/s1600/Get-this.png'/>&quot;);
      break;
     case &quot;gplus-comments&quot;:
      $tab.prepend(&quot;<img src='http://2.bp.blogspot.com/-oAGoAXHbA1s/UdVqbMTj5yI/AAAAAAAAENU/b0lZ9QaO0fc/s210/white-Google-Plus.png'/>&quot;);
      break;
          }
    $tab = null;
   });
         getTweetCounts();
      var $default = $(&quot;.js-default-tab:first&quot;),
    strDefault = &quot;#blogger-comments&quot;;
   if($default.length &gt; 0){
    strDefault = &quot;#&quot; + $default.attr(&quot;id&quot;);
   }
   //Set default tab and page Active
   $activeTab = $(strDefault);
   $activeTab.removeClass(&quot;js-inactive-tab&quot;);
      $activePage = $(strDefault + &quot;-page&quot;);      $activePage.show();
  },
  getTweetCounts = function(){
     $(&quot;.js-page-tweet-count&quot;).each(
    function(){
     var $count = $(this);
     $.getJSON(&quot;http://urls.api.twitter.com/1/urls/count.json?callback=?&quot;,
         {url: $count.attr(&quot;href&quot;)},
           function(json){$count.text(json.count);$count = null;});             }
   );   
    },
  selectPage = function() {
     $activeTab.addClass(&quot;js-inactive-tab&quot;);
   $activeTab = $(this);
     $activeTab.removeClass(&quot;js-inactive-tab&quot;);
        $activePage.hide();
     $activePage = $(&quot;#&quot; + $activeTab.attr(&quot;id&quot;) + &quot;-page&quot;);
     $activePage.show();
  };
   $(&quot;document&quot;).ready(init);
}();