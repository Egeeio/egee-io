build:
	pypugjs ./src/index.pug ./public/index.html
	sass --sourcemap=none ./src/assets/style/site.sass:public/assets/style/site.css
	cp -r ./src/assets ./public/

serve:
	python -m http.server --directory public/

clean:
	rm -rf ./public/*
	touch ./public/.gitkeep