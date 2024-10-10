/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Plus } from 'lucide-react';
import { Label } from '../ui/label';
import { Editor } from '@tinymce/tinymce-react';

import { useState, useEffect } from 'react';
import api from '@/utils/axiosInstance';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import { Input } from '../ui/input';

export function AddArticleModal() {
  const [inputs, setInputs] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editorLoading, setEditorLoading] = useState(true);

  const { articlesRefetch, setArticlesRefetch } = useAppContext();

  console.log({ inputs });

  const handleEditorChange = (content: any, editor: any) => {
    setInputs({ ...inputs, [editor.id]: content });
  };

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
          'Content-Type': 'multipart/form-data',
        },
      });
      if (promise.status === 200) {
        setArticlesRefetch(!articlesRefetch);
        setOpen(false);
        setLoading(false);
        toast.success(`New Article added.`, {
          position: 'top-center',
        });
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to add new article!`,
        {
          position: 'top-center',
        }
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setEditorLoading(false);
    }, 2000); // Simulate a 2-second loading time for the editor

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='text-xs md:text-sm'>
          <Plus className='mr-2 h-4 w-4' /> Add New Article
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[1000px]'>
        <DialogHeader>
          <DialogTitle>Add new Article</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='name' className=''>
              Image
            </Label>
            <Input
              id='title'
              className=''
              type='file'
              onChange={(e) =>
                setInputs({ ...inputs, file: e.target.files?.[0] })
              }
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='name' className=''>
              Title
            </Label>
            <Input
              id='title'
              className=''
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='description' className=''>
              Description
            </Label>
            {editorLoading ? (
              <div className='w-full h-48 bg-gray-200 animate-pulse'></div>
            ) : (
              <Editor
                apiKey='kwmff1tgv4dkqqe9p1r0nhms2hw1nqlgeq4xa31845lb7089'
                id='description'
                init={{
                  width: '100%',
                  height: 400,
                  menubar: false,
                  statusbar: false,
                  branding: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                }}
                onEditorChange={handleEditorChange}
                disabled={loading}
                // onInit={() => {
                //   setEditorLoading(false);
                // }}
              />
            )}
          </div>

          <DialogFooter>
            <Button disabled={loading} type='submit'>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
