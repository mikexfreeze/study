/**
 * Created by Micheal Xiao on 2016/11/7.
 */
var User = require('../lib/mongo').User;

module.exports = {
    // 注册一个用户
    create: function create(user) {
        return User.create(user).exec();
    },

    // 通过用户名获取用户信息
    getUserByName: function getUserByName(name) {
        return User
            .findOne({ name: name })
            .addCreatedAt()
            .exec();
    }
};