build:
	pypugjs ./src/*.pug ./public/*.html
	sass --sourcemap=none ./src/style/style.sass:public/style/style.css
	cp -r ./src/assets ./public/

serve:
	python -m http.server --directory public/

clean:
	rm -rf ./public/*
	touch ./public/.gitkeep