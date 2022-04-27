// Write your solution in this file!
const employee = { name: 'Ludig', streetAddress: '147th Street' }
function updateEmployeeWithKeyAndValue(obj, key, val) {
    const newObj = { ...obj }
    newObj[key] = val
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj }
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}