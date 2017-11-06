module.exports = {
    findById: function (id) {
        let user = {
            id: 1,
            name: 1,
            age: 1
        }
        return user;
    },
    findAll: () => {
        let users = [{
            id: 1,
            name: 1,
            age: 1
        }, {
            id: 2,
            name: 2,
            age: 2
        }];
        return user;
    },
    create: (user) => {
        console.log('-----------')
        console.log(user.name);
        console.log('-----------')
        return user;
    },
    update: (id) => {
        console.log('-----------')
        console.log(`Update by id:${id}`);
        console.log('-----------')
        return id;
    },
    delete: (id) => {
        console.log('-----------')
        console.log(`Delete user by id=${id}`);
        console.log('-----------')
        return id;
    }
}