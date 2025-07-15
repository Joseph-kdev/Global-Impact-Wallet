import { Eye, EyeOff } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  label?: string;
  value: string; 
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  [key: string]: unknown; 
}

export const Input = ({ 
  type = 'text', 
  placeholder = '', 
  label = '', 
  value = '', 
  onChange = () => {}, 
  className = '',
  disabled = false,
  ...props 
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="w-full">
      {label && (
        <label className="text-primary-600 font-semibold text-[16px]">
          {label}
        </label>
      )}
      
      <div className="relative mt-2">
        <input
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-2 py-2 border border-gray-300 rounded-lg 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
            disabled:bg-gray-50 disabled:cursor-not-allowed
            transition-all duration-200 outline-none
            ${type === 'password' ? 'pr-12' : ''}
            ${className}
          `}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};
