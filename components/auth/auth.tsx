/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Auth({ title, children, subtitle }) {
  return (
    <div className='relative h-screen flex-col items-center justify-center'>
      <div className='p-4 lg:p-8 h-full flex items-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
            {subtitle ? (
              <p className='text-sm text-muted-foreground'>{subtitle}</p>
            ) : (
              <p className='text-sm text-muted-foreground'>
                Enter your details below to {title}
              </p>
            )}
          </div>
          {children}
          {title !== 'Create Admin' && (
            <>
              {title === 'Login' ? (
                <>
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                      <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                      <span className='bg-background px-2 text-muted-foreground'>
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <p className='px-8 text-center text-sm text-muted-foreground'>
                    Don't have an account?{' '}
                    <Link
                      href='/signup'
                      className='underline underline-offset-4 hover:text-primary'
                    >
                      Signup now
                    </Link>{' '}
                  </p>
                </>
              ) : (
                <p className='px-8 text-center text-sm text-muted-foreground'>
                  Already have an account?{' '}
                  <Link
                    href='/login'
                    className='underline underline-offset-4 hover:text-primary'
                  >
                    Login now
                  </Link>{' '}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
