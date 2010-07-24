class QuestionsController < ApplicationController


  def create
    @question = Question.create(params[:question])
    render :nothing => true
  end

end
