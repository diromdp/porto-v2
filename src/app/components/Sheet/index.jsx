"use client";

// shadcn/ui Sheet, trimmed to the one variant this site needs: a panel that
// slides in from the right. Radix handles focus trapping, body scroll lock,
// and Escape-to-close, so the header only has to supply the markup.

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetDescription = SheetPrimitive.Description;

function SheetOverlay({ className, ...props }) {
    return (
        <SheetPrimitive.Overlay
            className={cn(
                "fixed inset-0 z-50 bg-brand-dark/40 backdrop-blur-sm",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
                className,
            )}
            {...props}
        />
    );
}

function SheetContent({ className, children, closeLabel = "Close", ...props }) {
    return (
        <SheetPortal>
            <SheetOverlay />
            <SheetPrimitive.Content
                className={cn(
                    "fixed inset-y-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col gap-8 border-l border-brand-dark/10 bg-canvas p-7 shadow-[-24px_0_48px_rgba(17,35,69,0.12)]",
                    "data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=open]:duration-400",
                    "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=closed]:duration-300",
                    className,
                )}
                {...props}
            >
                {children}
                <SheetPrimitive.Close className="absolute right-6 top-6 rounded-badges p-1 text-brand-dark/60 transition-colors hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink">
                    <X size={20} aria-hidden />
                    <span className="sr-only">{closeLabel}</span>
                </SheetPrimitive.Close>
            </SheetPrimitive.Content>
        </SheetPortal>
    );
}

function SheetTitle({ className, ...props }) {
    return (
        <SheetPrimitive.Title
            className={cn(
                "font-display text-[15px] font-semibold tracking-[-0.025em] text-brand-dark",
                className,
            )}
            {...props}
        />
    );
}

export {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetOverlay,
    SheetPortal,
    SheetTitle,
    SheetDescription,
};
