import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'db',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'agropec_db',
});

class Event extends Model {}

Event.init({
  title: DataTypes.STRING,
  date: DataTypes.DATE,
  location: DataTypes.STRING,
}, { sequelize, modelName: 'event' });

sequelize.sync();

export { Event };