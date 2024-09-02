'use client';

import * as z from 'zod';

import { toast } from 'sonner';
import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
const registerFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name...',
    validation: z.string().min(1, { message: 'Name has to be filled.' }),
  },
  {
    name: 'speciality',
    label: 'Speciality',
    type: 'text',
    placeholder: 'Enter your speciality...',
    validation: z.string().min(1, { message: 'Speciality has to be filled.' }),
  },
  {
    name: 'hospitalName',
    label: 'Hospital name',
    type: 'text',
    placeholder: 'Enter hospital name...',
    validation: z
      .string()
      .min(1, { message: 'Hospital name has to be filled.' }),
  },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'number',
    placeholder: 'Enter Phone number...',
    validation: z
      .number()
      .min(1, { message: 'Phone number has to be filled.' }),
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email...',
    validation: z
      .string()
      .min(1, { message: 'Email has to be filled.' })
      .email({ message: 'Enter a valid email address' }),
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    validation: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
  },
];

export default function Signup() {
  // const navigate = useNavigate();
  // const { userRefetch, setUserRefetch } = useContext(UserContext);

  // const handleSubmit = async (data) => {
  //   try {
  //     const promise = await axios.post(`/users/signin`, data);
  //     if (promise.status === 200) {
  //       localStorage.setItem("accessToken", promise.data.data);
  //       setUserRefetch(!userRefetch);
  //       setTimeout(() => {
  //         toast.success(`Logged in`);
  //         navigate("/");
  //       }, 1000);
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     return toast.error(error.response.data.message || `Log in failed`);
  //   }
  // };

  return (
    <Auth title={'Signup'} description={' '}>
      <AuthForm
        inputFields={registerFields}
        // onSubmit={handleSubmit}
        submitButtonText='Signup'
      />
    </Auth>
  );
}
