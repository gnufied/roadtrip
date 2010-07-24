var Quiz = {

  generateIdeas: function(){
        var query = jQuery("#idea_keyword").attr("value");
        jQuery.yql(            
            "select * from xml where url='http://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&format=xml' and itemPath = 'SearchSuggestion.Section.Item'", {},
            function (data) {
                if (data.query.results.Item.length > 0) {
                  var suggestions_html = "";
                  // There are some results. Now display them
                  jQuery.each(data.query.results.Item, function(index, value){
                    suggestions_html += "<p>";
                    suggestions_html += value.Description.content;
                    suggestions_html += "</p>";
                  });
                  jQuery("#question_ideas").html(suggestions_html);
                }
            }
          );
        jQuery.yql(
            "select * from flickr.photos.search where text=#{query}", {query: query},
            function(data) {  
              if(data.query.results.photo.length >0) {
                var suggestions_image_html = "";
                jQuery.each(data.query.results.photo, function(index, value){
                    suggestions_image_html += "<p>";
                    suggestions_image_html += "<img src='http://farm"+value.farm+".static.flickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_s.jpg'/>";
                    suggestions_image_html += "</p>";
                });
                  jQuery("#question_ideas_images").html(suggestions_image_html);
              }
        });
  }
};
