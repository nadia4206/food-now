class AddDigest < ActiveRecord::Migration[7.0]
  def change
      rename_column :customers, :password, :password_digest
  end
end
