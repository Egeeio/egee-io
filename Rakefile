require 'rake/clean'

task :serve do
  sh 'bundle exec jekyll serve --livereload'
end

task :build do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build'
end

task default: [:serve]
