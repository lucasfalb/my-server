import bcrypt from "bcryptjs"

export const createPasswordHash = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 8);
    return hashedPassword;
 }