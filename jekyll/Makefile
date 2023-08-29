up:
	@bundle exec jekyll serve --trace
	 
build:
	@rm -rf ../docs
	 bundle exec jekyll build

deploy_to_surge:
	@surge ../docs https://maksim-barouski.surge.sh
