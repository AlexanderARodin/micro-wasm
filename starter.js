console.log('--> starter')

const micro_wasm_instance = init_micro_wasm();

const testButton = document.querySelector('#test-button');

testButton.addEventListener('click', function(micro_wasm_instance) {
	console.log('push me HARdd')

	micro_wasm_instance.exports.invoke_test(44);
	//const rustWasm = import('micro_wasm.wasm')
	//(async () => {
		//let response = await fetch('./micro_wasm.wasm');
		//let bytes = await response.arrayBuffer();
		//let { instance } = await WebAssembly.instantiate(bytes, { });
		//console.log('The answer is: ', instance.exports.convert('tst1'));
		//console.log('The answer is: ', instance.exports.invoke_test(13));
	//});

});

document.addEventListener('click', function() {
	once: true,
	console.log('push ALLLLLLLLLLLLLLLLL')
})

async function init_micro_wasm() {
	console.log('--> init micro WASM');
	let response = await fetch('./micro_wasm.wasm');
	let bytes = await response.arrayBuffer();
	let { instance } = await WebAssembly.instantiate(bytes, { });
	let a = instance.exports.convert('fff');
	console.log('--> IN micro WASM', a);
	return instance;
}

