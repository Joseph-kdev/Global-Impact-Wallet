import { Eye, EyeOff } from 'lucide-react';
import { ChangeEvent, useState, useCallback, useEffect } from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  label?: string;
  value: string;
  onChange: (value: string, isValid?: boolean) => void;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  customValidation?: (value: string) => string | null;
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
  required = false,
  customValidation,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  // Sync external value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const validateInput = useCallback((value: string, inputType: string) => {
    if (required && !value.trim()) {
      return 'This field is required';
    }
    if (inputType === 'email' && value.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    
    if (customValidation && value.trim()) {
      const customError = customValidation(value);
      if (customError) {
        return customError;
      }
    }
    
    return null;
  }, [required, customValidation]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
  if (touched) {
      const validationError = validateInput(newValue, type);
      setError(validationError);
      onChange(newValue, !validationError);
    } else {
      onChange(newValue, !validateInput(newValue, type));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validateInput(inputValue, type);
    setError(validationError);
    onChange(inputValue, !validationError);
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
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-2 py-2 border rounded-lg
            focus:ring-1 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-secondary-100 disabled:cursor-not-allowed
            transition-all duration-200 outline-none
            ${type === 'password' ? 'pr-12' : ''}
            ${error ? 'border-red-500' : 'border-secondary-200'}
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
        {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
}