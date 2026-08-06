taskNumber=[2,134,54,5,7,2,87]

// const sortArray= taskNumber.sort(a,b)

// console.log(sortArray)


const sortArray = taskNumber.sort((a, b) => {
    return a-b;
});

console.log(sortArray);
