import bcrypt from "bcryptjs"

export const createPasswordHash = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 8);
    return hashedPassword;
}

export const checkPassword = async (user, password) => {
    const match = await bcrypt.compare(password, user.password);
    return match;
}

