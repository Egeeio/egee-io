trap('SIGINT') { exit(0) }
trap('SIGTERM') { exit(0) }

task :run do
  system('middleman')
end

task default: :run