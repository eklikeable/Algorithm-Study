const students = [
    '강은지',
    '김유정',
    '박현서',
    '최성훈',
    '홍유진',
    '박지호',
    '권윤일',
    '김채리',
    '한지호',
    '김진이',
    '김민호',
    '강채연',
];

function numberingStudents(students, isAscending) {
    const result = students
        .sort((a, b) => {
            if (isAscending) {
                // 오름차순 정렬
                return a > b ? -1 : 1;
            } else {
                // 내림차순 정렬
                return a < b ? -1 : 1;
            }
        })
        .map((student, index) => `번호: ${index + 1}, 이름: ${student}`)
        .join('\n');

    return result;
}

const result = numberingStudents(students, true);
console.log(result);
