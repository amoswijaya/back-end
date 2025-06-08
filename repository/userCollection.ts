import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const fetchUserData = async (uid: string): Promise<User | null> => {
  console.log(uid, "repos");
  const doc = await db.collection(USERS_COLLECTION).doc(uid).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUserData = async (
  uid: string,
  data: Partial<User>
): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(uid).set(data, { merge: true });
};

export const createUserData = async (data: User): Promise<User | null> => {
  const { uid, ...rest } = data;

  const docRef = db.collection(USERS_COLLECTION).doc(uid);
  await docRef.set({ uid, ...rest });

  const docSnap = await docRef.get();
  return docSnap.exists ? (docSnap.data() as User) : null;
};
