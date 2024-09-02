'use client';

import * as z from 'zod';

import { toast } from 'sonner';
import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
const loginFields = [
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

export default function Login() {
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
    <Auth title={'Login'} description={' '}>
      <AuthForm
        inputFields={loginFields}
        // onSubmit={handleSubmit}
        submitButtonText='Login'
      />
    </Auth>
  );
}
