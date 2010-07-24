class SeedQuestionData < ActiveRecord::Migration
  def self.up
    q = Question.create!(:content => %{Identify the author <br />
      <em>
	All that is gold does not glitter, <br/>
	Not all those who wander are lost;
      </em>})
    Answer.create!(:content => "Shakespeare",:question_id => q.id)
    Answer.create!(:content => "George Bernard Shaw",:question_id => q.id)
    Answer.create!(:content => "J R R Tolkien",:question_id => q.id,:correct => 1)
    Answer.create!(:content => "T S Elliot",:question_id => q.id,:correct => 0)
  end

  def self.down
  end
end
