
help:
	@less Makefile

build.wasm:
	@cargo build --target wasm32-unknown-unknown

fill.dist: build.wasm
	@rm -rf dist
	@mkdir -p dist
	@cp -v assets/** dist/
	@cp -v target/wasm32-unknown-unknown/debug/micro_wasm.wasm dist/

http.server:
	@cd dist && python3 -m http.server 3333

# EOF
