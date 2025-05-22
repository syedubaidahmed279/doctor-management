/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";

import { useEffect, useState } from "react";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function AddAdvertisementModal() {
  const [loading, setLoading] = useState(false);
  const { user } = useAppContext();
  const {
    advertisementsRefetch,
    setAdvertisementsRefetch,
    openAdvertisement,
    setOpenAdvertisement,
  } = useAppContext();

  const [inputs, setInputs] = useState<any>({
    title: "",
    description: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setInputs({ ...inputs, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    if (inputs.image) {
      formData.append("image", inputs.image);
    }

    try {
      const promise = await api.post(`/advertisement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (promise.status === 200) {
        setAdvertisementsRefetch(!advertisementsRefetch);
        setOpenAdvertisement(false);
        setLoading(false);
        toast.success(`New Advertisement added.`, {
          position: "top-center",
        });
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to add new advertisement!`,
        {
          position: "top-center",
        }
      );
    }
  };

  return (
    <Dialog open={openAdvertisement} onOpenChange={setOpenAdvertisement}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add new Advertisement</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="image" className="">
              Image
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              className=""
              onChange={handleImageChange}
              required
              disabled={loading}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="mt-2 w-full max-h-64 object-cover"
              />
            )}
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="title" className="">
              Title
            </Label>
            <Input
              id="title"
              className=""
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="description" className="">
              Description
            </Label>
            <Textarea
              id="description"
              className=""
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>

          <DialogFooter>
            <Button disabled={loading} type="submit">
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
