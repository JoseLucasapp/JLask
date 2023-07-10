import { Sequelize } from 'sequelize-typescript';

import options from '../../sequelize'

const db = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    dialect: 'mysql'
})
export default db;