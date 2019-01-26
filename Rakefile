trap('SIGINT') { exit(0) }
trap('SIGTERM') { exit(0) }

task :run do
  system('bundle exec middleman')
end

task :build do
  system('bundle exec middleman build')
end

task default: :run