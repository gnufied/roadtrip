class Question < ActiveRecord::Base

  has_many :answers, :dependent => :destroy

  accepts_nested_attributes_for  :answers, :reject_if => proc { |attributes| attributes['content'].blank? }

end
