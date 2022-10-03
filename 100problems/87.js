const participant = '손오공 야모챠 메지터 비콜로'.split(' ');
const record = '70 10 55 40'.split(' ');

let result = {};

for (let i = 0; i < participant.length; i++) {
    result[participant[i]] = record[i];
}

for (let i = 1; i <= participant.length; i++) {
    let recordHigh = String(Math.max(...record));
    let index = record.indexOf(recordHigh);
    result[participant[index]] = i;
    record[index] = 0;
}

const sortable = Object.entries(result)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sortable);
