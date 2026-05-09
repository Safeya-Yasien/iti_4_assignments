import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../models/User";

const useMutation = {
  async register(parent, arg) {
    return await User.create(arg.user);
  },

  async login(_, { email, password }) {
    if (!email || !password) {
      throw new GraphQLError("Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new GraphQLError("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new GraphQLError("Invalid email or password");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return {
      token,
      user,
    };
  },
};
