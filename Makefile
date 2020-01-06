install:
	npm install

build:
	rm -rf build
	npm run build

.PHONY: build

lint:
	npm run lint

test:
	npm run test

.PHONY: test