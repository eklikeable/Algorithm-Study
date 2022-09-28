function solution(chars) {
    // createArray : 나올 수 있는 모든 경우의 수 생성하여 permute에 담기
    let permute = [];
    const createArray = (prefix, chars) => {
        for (let i = 0; i < chars.length; i++) {
            permute.push(prefix + chars[i]);

            //거꾸로 뒤집은숫자가 permute에 없다면 넣기
            if (permute.indexOf(chars[i] + prefix) === -1) {
                permute.push(chars[i] + prefix);
            }
            //포인터를 한칸 뒤로 옮겨, 재귀로 돌리기
            createArray(prefix + chars[i], chars.slice(i + 1));
        }
    };

    createArray('', chars);

    // len 자리의 수만 필터하여 result에 담음
    let result = permute.filter((x) => x.length === len);
    // 내림차순 정렬
    result.sort((a, b) => {
        return b - a;
    });
    // 제일 첫번째 item만 반환
    return result[0];
}

const num = '1723'.split('');
const len = parseInt('2', 10);
console.log(solution(num));
