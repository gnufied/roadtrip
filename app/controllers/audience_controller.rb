class AudienceController < ApplicationController
  def index
  end

  def save
    respond_to do |format|
      format.js { 
        render :update do |page|
          page << "alert();"
        end
      }
    end
  end

  def start_quiz
    @question = Question.first
  end
end
