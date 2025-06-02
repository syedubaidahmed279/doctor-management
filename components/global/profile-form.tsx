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
    gstin: z
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
    address: z.string(),
    mapUrl: z.string().url().optional(),
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
    gstin: user?.gstin === "undefined" ? "" : user?.gstin,
    address: user?.hospitalAddress?.address || "",
    mapUrl: user?.mapUrl || "",
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
    "gstin",
    "address",
    "mapUrl",
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
              name="gstin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GSTIN</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                      placeholder="(e.g., 22AAAAA0000A1Z5)"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mapUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Google Maps URL</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      disabled={loading}
                      {...field}
                      // placeholder="https://maps.app.goo.gl/8x3fqsFRexfRWCaJ6"
                    />
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
