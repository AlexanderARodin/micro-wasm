

#[no_mangle]
pub extern "C" fn invoke_test(input: i32) -> i32 {
    input * 10
}
