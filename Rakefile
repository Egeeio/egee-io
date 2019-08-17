require "rake/clean"

task :build do
  sh "gem build gsd-cli.gemspec"
end

task :clean do
  sh "rm -r gsd-cli*.gem"
end

task :push do
  sh "gem push gsd-cli-1.*.*.gem"
end

task :test do
  sh "rspec"
end

task :serve do
  sh "bundle exec jekyll serve"
end
