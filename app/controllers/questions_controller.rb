class QuestionsController < ApplicationController


  def create
    Question.create(params[:question])
    @question = Question.new
    4.times {@question.answers.build}
  end

end
