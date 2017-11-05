module.exports = {
    findById: function (id) {
        let entry = {
            1: {
                name: 1,
                age: 1
            },
            2: {
                name: 2,
                age: 2
            }
        }
        return entry[id];
    }
}