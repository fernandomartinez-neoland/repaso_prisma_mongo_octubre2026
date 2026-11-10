import { getUserModel, createUserModel } from "../models/user.model.js";
export function getUserService() {
  return getUserModel();
}

export async function createUserService(body) {
  const { email, username, name } = body;
  try {
    const user =await createUserModel(email, username, name);

    return {
      status: 201,
      message: "usuario guardado",
    };
  } catch (e) {
    return {
      status: 400,
      message: "error al guardar usuario",
    };
  }
}
