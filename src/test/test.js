/* @flow */

function isNum(num: Number) {
    if (typeof num === 'number') {
        return true
    } else {
        return false
    }
}

exports.isNum = isNum