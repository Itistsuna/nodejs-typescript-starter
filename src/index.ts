import { createServer } from './app/http/app'
import {createConnection} from 'typeorm'
require('dotenv').config()

import {User} from './app/database/typeorm/entities/user'
import {Skill} from './app/database/typeorm/entities/skill'
import {Level} from './app/database/typeorm/entities/level'
import {Category} from './app/database/typeorm/entities/category'
import {Progress} from './app/database/typeorm/entities/progress'

createConnection({
    type: "mysql",
    host:"localhost",
    port: 3306,
    username: process.env.username,
    password: process.env.dbPassword,
    database: process.env.db, 
    synchronize: true,
    logging:true,
    entities:[User,Skill,Level,Category,Progress]
}).then(() => {
    console.log('Connection establised');
})

createServer();
