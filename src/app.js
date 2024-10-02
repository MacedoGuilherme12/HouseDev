import express from 'express'
import moongose from 'mongoose'
import path from 'path'
import routes from './routes'

class App{
    constructor(){
        this.server = express()
        moongose.connect(
            "mongodb+srv://Macedo:Gui120705**@cluster0.d9ool.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
          );
      

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
          );
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)

    }
}

export default  new App().server