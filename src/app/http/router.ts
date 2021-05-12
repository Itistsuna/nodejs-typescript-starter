import { Router, Request, Response } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
});

v1Router.get('/test', (_: Request, response: Response) => {
    response.json({message: 'Ceci est un test'})
})

v1Router.get("/test2", (_: Request, response: Response)=>{
    const a = 3
    const b = 4
    response.json({result: a+b})
})

export { v1Router }