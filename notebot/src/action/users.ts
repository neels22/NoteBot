"use server";

import { createClient } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export const LoginAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();

    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    return handleError(error);
  }
};
export const LogoutAction = async () => {
    try {
      const { auth } = await createClient();
  
      const { error } = await auth.signOut();
  
      if (error) {
        throw error;
      }
    } catch (error) {
      return handleError(error);
    }
  };

export const SignupAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();

    const { data, error } = await auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    const userId = data.user?.id;
    if (!userId) {
      throw new Error("Error signing up");
    }

    //add user to database
    await prisma.user.create({
      data:{
        id:userId,
        email,
      }
    })

    
  } catch (error) {
    return handleError(error);
  }
};
