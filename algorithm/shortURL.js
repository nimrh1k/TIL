/**
 * 짧은 URL 만들기
 * 
 * 규칙1. 파라미터는 최대한 짧게
 * 규칙2. 최대한 많이 만들 수 있게
 * 규칙3. 동일 URL을 입력받아도 새로운 파라미터를 반환
 */

const memoryDB = [];
const HOST = 'domain.com';
const PARAMETER_RULE = '0123456789abcdef'; // 파라미터로 사용할 수 있는 문자 [0-9][a-z][A-Z]
const N_NUMBERAL_SYSTEM = PARAMETER_RULE.length;

const getIndexNumber = () => memoryDB.length - 1;

const recursiveDivide = (number, arrayToPushRemainder) => {
    if (number < N_NUMBERAL_SYSTEM) {
        arrayToPushRemainder.push(number);
        return arrayToPushRemainder;
    }

    const quotient = Math.floor(number / N_NUMBERAL_SYSTEM);
    const remainder = number % N_NUMBERAL_SYSTEM;

    arrayToPushRemainder.push(remainder);

    return recursiveDivide(quotient, arrayToPushRemainder);
};

const createParameter = number => recursiveDivide(number, []).map(parameterIndex => PARAMETER_RULE[parameterIndex]).reverse().join('');

const createShortUrl = url => {
    memoryDB.push(url);
    return HOST + '/' + createParameter(getIndexNumber());
};

// TEST
const testCaseCount = 1000;

for (let i = 0; i < testCaseCount; i++) {
    // createShortUrl(i)
    console.log(createShortUrl(i));
}

/**
 * 추가로 생각해 볼만한 거
 * 파라미터에 특정 특수문자가 들어갈수있다면?
 * + 그 특수문자가 맨 앞에는 올 수 없다면?
 * 
 * 처음엔 특수문자 뺀 진법으로 돌다가 자릿수가 올라가면 특수문자 넣고 돌리면 될까?
 */