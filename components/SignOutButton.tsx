'use client';

import { signOut } from 'next-auth/react';
import { FC, ButtonHTMLAttributes, useState } from 'react';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';
import { Loader2, LogOut } from 'lucide-react';
import { redirect } from 'next/navigation';

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (erorr) {
          toast.error('There was a problem signing out');
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4 " />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
