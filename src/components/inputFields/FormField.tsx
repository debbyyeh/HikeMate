import type { ReactNode } from 'react';

export default function FormField({
  id,
  label,
  showLabel = true,
  labelLen = 80,
  isMobile,
  type = 'text',
  onChange,
  children,
}: {
  id: string;
  label: string;
  showLabel?: boolean;
  labelLen?: number;
  isMobile?: boolean;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: string) => void;
  children?: ReactNode;
}) {
  return (
    <div
      className={`h-[36px] flex items-center justify-between rounded-md outline-1 ${
        showLabel ? 'pl-3' : 'pl-0'
      }  outline-offset-1 outline-gray-600 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500`}
    >
      {showLabel && (
        <label
          style={{ width: `${labelLen}px` }}
          htmlFor={id}
          className="text-left block text-xs md:text-sm/6 md:text-normal font-medium text-white"
        >
          {label.toUpperCase()}
        </label>
      )}
      <div className={`flex ${isMobile ? '' : 'grow'}`}>
        {children ? (
          children
        ) : (
          <input
            id={id}
            type={type}
            placeholder={`Please enter the ${label}`}
            className="block flex-1 bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            onChange={(e) => onChange?.(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}
