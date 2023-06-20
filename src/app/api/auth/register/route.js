import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new Response("User has Been Created", {
      status: 201,
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};
