build:
	pypugjs ./src/*.pug ./public/*.html
	cp -r ./src/assets ./public/

serve:
	python -m http.server --directory public/

clean:
	rm -rf ./public/*
	touch ./public/.gitkeep