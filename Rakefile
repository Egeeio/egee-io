require 'rake/clean'

task :serve do
  sh 'bundle exec jekyll serve'
end

task :build do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build'
end

task :new do
  sh 'bundle exec jekyll new egeeio'
end

task default: [:serve]
