/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Plus } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { useState } from "react";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";

export function AddArticleModal() {
  const [inputs, setInputs] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { articlesRefetch, setArticlesRefetch } = useAppContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const value = inputs[key];
        formData.append(key, value);
      }
    }

    try {
      const promise = await api.post(`/article/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (promise.status === 200) {
        setArticlesRefetch(!articlesRefetch);
        setOpen(false);
        setLoading(false);
        toast.success(`New Article added.`, {
          position: "top-center",
        });
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to add new article!`,
        {
          position: "top-center",
        }
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs md:text-sm">
          <Plus className="mr-2 h-4 w-4" /> Add New Article
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Article</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="name" className="">
              Image
            </Label>
            <Input
              id="title"
              className=""
              type="file"
              onChange={(e) =>
                setInputs({ ...inputs, file: e.target.files?.[0] })
              }
              required
              disabled={loading}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="name" className="">
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
            <Label htmlFor="username" className="">
              Description
            </Label>
            <Textarea
              className=""
              required
              disabled={loading}
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
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
