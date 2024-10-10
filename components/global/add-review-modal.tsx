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

import { useEffect, useState } from 'react';
import api from '@/utils/axiosInstance';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import { Input } from '../ui/input';
import { Star } from 'lucide-react';
import { Textarea } from '../ui/textarea';

export function AddReviewModal() {
  const [loading, setLoading] = useState(false);
  const { user } = useAppContext();
  const { reviewsRefetch, setReviewsRefetch, openReview, setOpenReview } =
    useAppContext();
  const [inputs, setInputs] = useState<any>({
    name: user?.name || '',
    title: '',
    description: '',
    rating: 0,
  });

  useEffect(() => {
    if (user) {
      setInputs({ ...inputs, name: user.name });
    }
  }, [user?.name]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (user.role === 'doctor') {
      inputs.image = user.image;
    }
    console.log(inputs);
    if (inputs.rating === 0 || !inputs.rating) {
      toast.error('Rating is required!', {
        position: 'top-center',
      });
      return;
    }
    setLoading(true);

    try {
      const promise = await api.post(`/review/create`, inputs);
      if (promise.status === 200) {
        setReviewsRefetch(!reviewsRefetch);
        setOpenReview(false);
        setLoading(false);
        toast.success(`New Review added.`, {
          position: 'top-center',
        });
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to add new review!`,
        {
          position: 'top-center',
        }
      );
    }
  };

  return (
    <Dialog open={openReview} onOpenChange={setOpenReview}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle>Add new Review</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='name' className=''>
              Name
            </Label>
            <Input
              id='name'
              className=''
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              value={inputs.name}
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='title' className=''>
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
            <Textarea
              id='description'
              className=''
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='rating' className=''>
              Rating
            </Label>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 cursor-pointer fill-current ${
                    star <= inputs.rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onClick={() => setInputs({ ...inputs, rating: star })}
                />
              ))}
            </div>
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
