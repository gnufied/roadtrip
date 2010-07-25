class CreateUserAnswers < ActiveRecord::Migration
  def self.up
    create_table :user_answers do |t|
      t.integer :question_id
      t.integer :answer_id
      t.boolean :correct
      t.timestamps
    end
  end

  def self.down
    drop_table :user_answers
  end
end
