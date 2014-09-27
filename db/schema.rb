# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140926232834) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "post_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "followings", force: true do |t|
    t.integer  "follower_id"
    t.integer  "followee_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", force: true do |t|
    t.text     "body",                               null: false
    t.string   "title"
    t.integer  "sender_id",                          null: false
    t.integer  "sendee_id",                          null: false
    t.boolean  "is_follow_request?", default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "sender_deleted?",    default: false
    t.boolean  "recipient_deleted?", default: false
    t.string   "sender_name"
    t.string   "recipient_name"
    t.boolean  "unread?",            default: true
  end

  create_table "posts", force: true do |t|
    t.integer  "user_id"
    t.string   "filepicker_url"
    t.string   "string"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "comment"
    t.float    "order"
  end

  create_table "users", force: true do |t|
    t.string   "session_token",   null: false
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
