import { useState } from "react";
import ConsultationDialog from "../landing/ConsultationDialog";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

export default function ConsultationDialogExample() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Consultation Dialog</Button>
      <ConsultationDialog open={open} onOpenChange={setOpen} />
      <Toaster />
    </>
  );
}
