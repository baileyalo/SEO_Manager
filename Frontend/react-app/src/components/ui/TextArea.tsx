import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", onChange, ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full border border-seo-orgltr rounded px-3 py-2 ${className}`}
      onChange={onChange} 
      {...props}
    />
  )
);