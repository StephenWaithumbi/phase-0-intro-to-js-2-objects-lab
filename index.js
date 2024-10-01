// Write your solution in this file!
const employee = {
    name: 'James',
    streetAddress: '442-Thika'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const updatedEmployees = {...obj};
    updatedEmployees[key] = value;

    return updatedEmployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];

    return obj;
}