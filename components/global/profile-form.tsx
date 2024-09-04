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
    // image: z.any(),
  });

  const defaultValues = {
    name: user?.name || "",
    speciality: user?.speciality || "",
    hospitalName: user?.hospitalName || "",
    phone: user?.phone || "",
    // image: "",
  };

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  //   const { watch } = form;
  //   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  //   const watchedFields = watch(["name"]);

  //   useEffect(() => {
  //     const isFormEmpty = watchedFields[0] || image;

  //     setIsSubmitDisabled(isFormEmpty);
  //   }, [watchedFields, image]);

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

        {/* <FormField
          control={form.control}
          name="image"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => setImage(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        /> */}
        <Button type="submit" disabled={loading}>
          {loading ? "Updating" : "Update"}
        </Button>
      </form>
    </Form>
  );
}
