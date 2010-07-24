class SeedQuestionData < ActiveRecord::Migration
  def self.up
    q = Question.create!(:content => "Which Mughal Emperor built the Taj Mahal?<br><br><img src=\"http://farm4.static.flickr.com/3428/4571119895_baf6448288_s.jpg\">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <img src=\"http://farm5.static.flickr.com/4054/4409397909_fbc8a533c3_s.jpg\">&nbsp; &nbsp; &nbsp; &nbsp; <img src=\"http://farm4.static.flickr.com/3337/3183846349_b3e20577bb_s.jpg\">")

    Answer.create!(:content => "Aurangzeb",:question_id => q.id)
    Answer.create!(:content => "Shah Jahan",:question_id => q.id, :correct => true)
    Answer.create!(:content => "Humayun",:question_id => q.id)
    Answer.create!(:content => "Akbar",:question_id => q.id)
  end

  def self.down
  end
end
