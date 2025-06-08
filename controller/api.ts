import { Request, Response } from "express";
import {
  fetchUserData,
  updateUserData,
  createUserData,
} from "../repository/userCollection";

export const getUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const uid = (req as any).user?.uid;
  console.log(uid);
  if (!uid) {
    res.status(400).json({ error: "No UID found" });
    return;
  }

  const user = await fetchUserData(uid);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

export const patchUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const uid = (req as any).user?.uid;
  const update = req.body;

  try {
    await updateUserData(uid, update);
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

export const postUser = async (req: Request, res: Response): Promise<void> => {
  const { fullName, email, uid } = req.body;

  try {
    const user = await createUserData({
      uid,
      fullName,
      email,
    });
    console.log(user);
    res.json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Create failed" });
  }
};
