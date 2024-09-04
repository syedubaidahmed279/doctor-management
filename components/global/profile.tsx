"use client";

import axios from "axios";
import { toast } from "sonner";
import { useAppContext } from "@/lib/context";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ProfileForm from "./profile-form";
import api from "@/utils/axiosInstance";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { user, setUserRefetch, userRefetch } = useAppContext();
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      //   const formData = new FormData();
      //   formData.append("image", image);
      //   formData.append("name", data?.name);
      const promise = await api.patch(`/users/update/${user?._id}`, data);
      if (promise.status === 200) {
        setUserRefetch(!userRefetch);

        toast.success(`Profile updated Successfully!`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  return (
    <Card className="w-full  mx-auto">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage alt="@shadcn" src={user?.image} />
            <AvatarFallback>{user?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-lg font-medium">
              {user?.name} ({user?.role})
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ProfileForm
          onSubmit={onSubmit}
          loading={loading}
          setImage={setImage}
          image={image}
          user={user}
        />
      </CardContent>
    </Card>
  );
}
