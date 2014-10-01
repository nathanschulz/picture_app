require 'wikipedia'
require 'addressable/uri'
require 'rest-client'



page = Wikipedia.find("Paranoid Android").sanitized_content

paragraph_end = page.index('</p>')

puts page[3...paragraph_end]