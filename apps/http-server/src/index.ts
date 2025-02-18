import express, {type Request, type Response} from "express"
import { client } from "@repo/db/client"

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.status(200).json(
        {
            message:"server listening"
        }
    )
})
//@ts-ignore
app.post("/user", async (req: Request, res: Response) => {
    const username = Math.floor(Math.random() * 1000).toString();
    const password = Math.floor(Math.random() * 1000).toString();

    const user = await client.user.create(
        {
            data:{
                username: username,
                password: password
            }
        }
    )

    return res.status(200).json(
        {
            user
        }
    )
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
})
