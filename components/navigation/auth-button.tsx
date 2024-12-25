'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/auth/auth-dialog";

export function AuthButton() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setShowAuthDialog(true)}>
        Sign in
      </Button>
      <AuthDialog 
        isOpen={showAuthDialog} 
        onClose={() => setShowAuthDialog(false)} 
      />
    </>
  );
}