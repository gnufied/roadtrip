class CreateAnswers < ActiveRecord::Migration
  def self.up
    create_table :answers do |t|
      t.string :content
      t.string :title
      t.integer :question_id
      t.boolean :correct, :default => false
      t.timestamps
    end
  end

  def self.down
    drop_table :answers
  end
end
