import { db } from "../prisma/db.ts";

export function getUserModel() {
  return "getUserModel";
}

export async function createUserModel(email, username, name) {
  try {
    const user = await db.orm.users.create({
      email,
      username,
      name,
    });
    return "ok";
  } catch (e) {
    throw new Error("todo mal");
  }
}
