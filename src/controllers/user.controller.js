import { getUserService } from "../services/user.service.js"
export async function getUserContrtoller(req, res){

    res.status(200).send(await getUserService())

}