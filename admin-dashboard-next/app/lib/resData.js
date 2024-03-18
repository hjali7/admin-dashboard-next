import { connectToDb } from "./db";
import { User } from "./models";

export const fetchUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users ;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}