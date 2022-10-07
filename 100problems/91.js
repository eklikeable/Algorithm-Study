let student_score = [];
let class_score = [];
let topStudentsScore = [];
let total_score = [];

// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
// 5과목 * 30명씩 * 7반 점수 삼중배열 생성
// student_score[반][학생][과목]
function getWholeScores() {
    for (let k = 1; k <= 7; k++) {
        let individualScore = [];
        let temp = [];
        for (let j = 1; j <= 30; j++) {
            for (let i = 0; i < 5; i++) {
                temp.push(Math.floor(Math.random() * 100) + 1);
            }
            individualScore.push(temp);
            temp = [];
        }
        student_score.push(individualScore);
        individualScore = [];
    }
}
getWholeScores();
// console.log(student_score)

// 2. 반 평균을 구하세요
// 과목별 반 평균 이중배열 생성
// class_score[반][과목]
function getClassAverage() {
    for (let i = 0; i < 7; i++) {
        let averages = [];
        for (let k = 0; k < 5; k++) {
            let average = [];
            let sum = 0;
            for (let j = 0; j < 30; j++) {
                sum += student_score[i][j][k];
            }
            average = Math.round(sum / 30);
            sum = 0;
            averages.push(average);
            average = [];
        }
        class_score.push(averages);
        averages = [];
    }
}
getClassAverage();
// console.log(class_score)

// 3. 반 1등 점수를 구하세요
// 반 1등의 과목별 점수 이중배열 생성
function getTopStudentsScore() {
    for (let i = 0; i < 7; i++) {
        let indexOfTopStudentClass = 0;
        let indexOfTopStudent = 0;
        let topStudentScore = 0;

        for (let j = 0; j < 30; j++) {
            let currentStudentScore = 0;
            for (let k = 0; k < 5; k++) {
                currentStudentScore += student_score[i][j][k];
            }
            if (currentStudentScore > topStudentScore) {
                indexOfTopStudentClass = i;
                indexOfTopStudent = j;
                topStudentScore = currentStudentScore;
                currentStudentScore = 0;
            }
        }
        topStudentScore = 0;
        topStudentsScore.push(
            student_score[indexOfTopStudentClass][indexOfTopStudent]
        );
    }
}
getTopStudentsScore();
// console.log(topStudentsScore);

// 4. 전교 평균을 구하세요
// 과목별 전체평균 [국,영,수,사,과]
function getWholeAverage() {
    for (let k = 0; k < 5; k++) {
        let subjectAverage = 0;
        let temp = 0;
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 30; j++) {
                temp += student_score[i][j][k];
            }
        }
        subjectAverage = Math.round(temp / (30 * 7));
        total_score.push(subjectAverage);
    }
}
getWholeAverage();
// console.log(total_score)
