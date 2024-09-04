"use client";

import * as z from "zod";

import { toast } from "sonner";
import Auth from "@/components/auth/auth";
import AuthForm from "@/components/auth/auth-form";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import { useRouter } from "next/navigation";
const loginFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email...",
    validation: z
      .string()
      .min(1, { message: "Email has to be filled." })
      .email({ message: "Enter a valid email address" }),
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password...",
    validation: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  },
];

export default function Login() {
  const router = useRouter();
  const { userRefetch, setUserRefetch } = useAppContext();

  const handleSubmit = async (data: any) => {
    console.log("insidee");
    try {
      const promise = await api.post(`/users/signin`, data);
      if (promise.status === 200) {
        window.localStorage.setItem("dmToken", promise.data.data);
        setUserRefetch(!userRefetch);
        setTimeout(() => {
          toast.success(`Logged in`, {
            position: "top-center",
          });
          router.push("/doctors-dashboard");
        }, 1000);
      }
    } catch (error: any) {
      console.log(error);

      return toast.error(error.response.data.message || `Log in failed`, {
        position: "top-center",
      });
    }
  };

  return (
    <Auth title={"Login"} description={" "}>
      <AuthForm
        inputFields={loginFields}
        onSubmit={handleSubmit}
        submitButtonText="Login"
      />
    </Auth>
  );
}
