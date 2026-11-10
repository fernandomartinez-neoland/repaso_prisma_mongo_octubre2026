import { getUserService, createUserService } from "../services/user.service.js";

export async function getUserContrtoller(req, res) {
  res.status(200).send(await getUserService());
}

export async function createUserController(req, res) {
  const body = req.body;
  const user= await createUserService(body)
  res.status(user.status).send(user.message);
}
