var Quiz = {

  generateIdeas: function(){
        var query = jQuery("#idea_keyword").attr("value");
        jQuery.yql(            
            "select * from xml where url='http://en.wikipedia.org/w/api.php?action=opensearch&search="+escape(query)+"&format=xml' and itemPath = 'SearchSuggestion.Section.Item' limit 5", {},
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
            "select * from flickr.photos.search where text=#{query} limit 9", {query: query},
            function(data) {  
              if(data.query.results.photo.length >0) {
                var suggestions_image_html = "";
                jQuery.each(data.query.results.photo, function(index, value){
                    suggestions_image_html += "<img src='http://farm"+value.farm+".static.flickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_s.jpg'/>";
                });
                  jQuery("#question_ideas_images").html(suggestions_image_html);
              }
        });
  },

  init: function(){
         arr = jQuery('#rte').rte({
                css: ['/stylesheets/jquery.rte.css'],
                controls_rte: rte_toolbar
          });

        
          jQuery("#create_q_form").submit(function(){
//            console.log(jQuery("#rte body").html);
            jQuery("#question_content").val(jQuery("iframe").contents().find("body").html());
            jQuery.post(jQuery(this).attr("action"), jQuery(this).serialize(), null , "script");
            return false;
          });
  },

  questionCreated: function(question_id){
    alert("Question created with id: "+question_id);
  }

};
