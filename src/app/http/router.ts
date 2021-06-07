import { Router, Request, Response } from 'express'
import { skillRouter } from '../../modules/skill/skillRouter'
import { categoryRouter } from '../../modules/category/categoryRouter'
import { progressRouter } from 'src/modules/category copy/progressRouter';

const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
});

v1Router.use('/skills', skillRouter)
v1Router.use('/categories', categoryRouter)
v1Router.use('/progress', progressRouter)

export { v1Router }