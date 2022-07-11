/**
 * 
 * @param a 첫번째 인자 넘버
 * @param b 두번째 인자 넘버
 */
function _sum(a: number, b: number) {
    return a + b;
}


/**
 * 
 * @param a 첫번째 params
 * @param b 두번째 params
 */
function _div(a: number, b: number) {
    return a - b;;
}


// 함수의 반환값에 타입을 정의하는 방식

function add(): number {
    return 10;
}


// 함수에 타입을 정의하는 방식

function _add(a: number, b: number): number {
    return a + b;
}

_add(10, 20)


// 함수의 옵셔널 파라미터

function log(a: string, b?: string, c?: string): object {
    return { 'param1': a, 'param2': b, 'param3': c }
}

log('hello wolrd')
log('hello ts', 'abc')

