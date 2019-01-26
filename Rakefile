trap('SIGINT') { exit(0) }
trap('SIGTERM') { exit(0) }

task :run do
  system('bundle exec middleman')
end

task default: :run