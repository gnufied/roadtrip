class ModeratorController < ApplicationController


  def index
    @question = Question.new
    4.times {@question.answers.build}
    
  end

end
