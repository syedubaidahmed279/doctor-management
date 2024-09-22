import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ProfileForm({
  onSubmit,
  loading,
  setImage,
  image,
  user,
}: any) {
  const profileSchema = z.object({
    name: z.string(),
    speciality: z.string(),
    hospitalName: z.string(),
    phone: z.string(),
    image: z.any(),
    password: z.string(),
    city: z.string(),
    state: z.string(),

    address: z.string(),
  });

  console.log(user);

  const defaultValues = {
    name: user?.name || "",
    speciality: user?.speciality || "",
    hospitalName: user?.hospitalName || "",
    phone: user?.phone || "",
    image: user?.image || "",
    password: "",
    city: user?.hospitalAddress?.city || "",
    state: user?.hospitalAddress?.state || "",

    address: user?.hospitalAddress?.address || "",
  };

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  const { watch } = form;
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const watchedFields = watch([
    "name",
    "speciality",
    "hospitalName",
    "phone",
    "image",
    "password",
    "city",
    "state",

    "address",
  ]);

  useEffect(() => {
    const isFormEmpty = watchedFields[0] || image;

    setIsSubmitDisabled(isFormEmpty);
  }, [watchedFields, image]);

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {user?.role === "doctor" && (
          <>
            <FormField
              control={form.control}
              name="speciality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Speciality</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hospitalName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input disabled={loading} {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    disabled={loading}
                    onChange={(e) => setImage(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {user?.role === "admin" && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update password</FormLabel>
                <FormControl>
                  <Input disabled={loading} {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" disabled={loading}>
          {loading ? "Updating" : "Update"}
        </Button>
      </form>
    </Form>
  );
}
