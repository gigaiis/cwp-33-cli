const Sequelize = require('sequelize');
const config = require('../config.json');

const options = {
    host: config.db.host,
    dialect: 'mysql',
    logging: false
};
const sequelize = new Sequelize('cwp32', 'root', '11111', options);

const Repo = require('./repo')(Sequelize, sequelize);
const Commit = require('./commit')(Sequelize, sequelize);

Commit.belongsTo(Repo, { foreignKey: 'repoId' });

const context = {
    repos: Repo,
    commits: Commit,

    Sequelize,
    sequelize,
};

module.exports = context;