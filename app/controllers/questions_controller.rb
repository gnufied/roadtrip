class QuestionsController < ApplicationController


  def create
    @question = Question.create(params[:question])
  end

end
