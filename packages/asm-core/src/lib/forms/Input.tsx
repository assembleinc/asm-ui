import React, { ReactNode } from 'react';
import {Icon} from "../Icon"
import {InputWrapper} from "./InputWrapper"

export type ErrorType = {
  error?: string;
  errorClassName?: string;
}

export type InputProps = ErrorType & {
  id: string;
  name?: string;
  value: string | number;
  label: string;
  labelClassName?: string;
  labelHidden?: boolean;
  placeholder?: string;
  type?: 'text'| 'url'| 'time'| 'tel'| 'search'| 'range'| 'password'| 'number'| 'email'| 'month'| 'week'|'date'| 'datetime-local'| 'color';
  min?: number;
  max?: number;
  step?: number;
  icon?: string | ReactNode;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
  onKeyDown?: any;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const Input = ({
  type='text',
  className='asm-input',
  disabled = false,
  required = false,
  labelHidden= false,
  placeholder,
  id,
  name,
  onChange,
  onClick,
  loading,
  value,
  label,
  labelClassName,
  error,
  errorClassName,
  style,
  icon,
  iconPosition,
  min,
  max,
  step,
  ...rest
}: InputProps): JSX.Element => (
  <InputWrapper
    // className={className}
    labelHidden={labelHidden}
    labelClassName={labelClassName}
    htmlFor={id}
    required={required}
    label={label}
    error={error}
    errorClassName={errorClassName}
    style={style}
  >
    {icon && iconPosition === "left" &&
      <span className="input-icon-left">{
        typeof icon === "string" ? <Icon size='small' name={icon} /> : icon
      }</span>
    }
    <input
      id={id}
      name={name}
      type={type}
      aria-labelledby={id}
      aria-label={label}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={onChange}
      onClick={onClick}
      value={value}
      min={min}
      max={max}
      step={step}
      {...rest}
    />
    {icon && iconPosition === "right" &&
      <span className="input-icon-right">{
        typeof icon === "string" ? <Icon size='small' name={icon} /> : icon
      }</span>
    }
  </InputWrapper>
);