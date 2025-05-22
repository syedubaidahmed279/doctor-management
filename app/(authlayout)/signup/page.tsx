"use client";

import * as z from "zod";

import { toast } from "sonner";
import Auth from "@/components/auth/auth";
import AuthForm from "@/components/auth/auth-form";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context";
import api from "@/utils/axiosInstance";
const registerFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name...",
    validation: z.string().min(1, { message: "Name has to be filled." }),
  },
  {
    name: "speciality",
    label: "Speciality",
    type: "text",
    placeholder: "Enter your speciality...",
    validation: z.string().min(1, { message: "Speciality has to be filled." }),
  },
  {
    name: "hospitalName",
    label: "Hospital name",
    type: "text",
    placeholder: "Enter hospital name...",
    validation: z
      .string()
      .min(1, { message: "Hospital name has to be filled." }),
  },
  {
    name: "hospitalAddress_city",
    label: "Hospital City",
    type: "text",
    placeholder: "Enter city...",
    validation: z.string().min(1, { message: "City has to be filled." }),
  },
  {
    name: "gstin",
    label: "GSTIN",
    type: "text",
    placeholder: "(e.g., 22AAAAA0000A1Z5)",
    validation: z
      .string()
      .transform((val) => (val.trim() === "" ? undefined : val))
      .optional()
      .refine(
        (val) =>
          val === undefined ||
          /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z]{1}\d{1}$/.test(val),
        {
          message:
            "Invalid GSTIN format. Please ensure it follows the correct pattern: 22AAAAA0000A1Z5.",
        }
      ),
  },

  {
    name: "hospitalAddress_state",
    label: "Hospital State",
    type: "text",
    placeholder: "Enter state...",
    validation: z.string().min(1, { message: "State has to be filled." }),
  },
  {
    name: "hospitalAddress_pincode",
    label: "Hospital Pincode",
    type: "text",
    placeholder: "Enter pincode...",
    validation: z.string().min(1, { message: "Pincode has to be filled." }),
  },
  {
    name: "hospitalAddress_address",
    label: "Hospital Address",
    type: "text",
    placeholder: "Enter address...",
    validation: z.string().min(1, { message: "Address has to be filled." }),
  },
  {
    name: "phone",
    label: "Phone number",
    type: "number",
    placeholder: "Enter Phone number...",
    validation: z
      .string()
      .min(1, { message: "Phone number has to be filled." }),
  },
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
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Enter confirm password...",
    validation: z.string().min(6, {
      message: "Confirm Password must be at least 6 characters long",
    }),
  },
];

export default function Signup() {
  const router = useRouter();
  const { userRefetch, setUserRefetch } = useAppContext();

  const handleSubmit = async (data: any) => {
    try {
      const formData = {
        ...data, // Spread other form fields
        hospitalAddress: {
          city: data?.["hospitalAddress_city"] ?? "",
          state: data?.["hospitalAddress_state"] ?? "",
          pincode: data?.["hospitalAddress_pincode"] ?? "",
          address: data?.["hospitalAddress_address"] ?? "",
        },
      };

      delete formData["hospitalAddress_city"];
      delete formData["hospitalAddress_state"];
      delete formData["hospitalAddress_pincode"];
      delete formData["hospitalAddress_address"];

      if (
        !formData.hospitalAddress.city ||
        !formData.hospitalAddress.state ||
        !formData.hospitalAddress.pincode ||
        !formData.hospitalAddress.address
      ) {
        return toast.error("All fields are required", {
          position: "top-center",
        });
      }

      const promise = await api.post(`/users/signup`, formData);
      if (promise?.status === 200) {
        window.localStorage.setItem("dmToken", promise?.data?.data ?? "");
        setUserRefetch(!userRefetch);
        setTimeout(() => {
          toast.success(`Signed up`, {
            position: "top-center",
          });
          router.push("/doctors-dashboard");
        }, 1000);
      }
    } catch (error: any) {
      console.error(error);

      return toast.error(error?.response?.data?.message || `Sign up failed`, {
        position: "top-center",
      });
    }
  };

  return (
    <Auth title={"Signup"} description={" "}>
      <AuthForm
        inputFields={registerFields}
        onSubmit={handleSubmit}
        submitButtonText="Signup"
      />
    </Auth>
  );
}
