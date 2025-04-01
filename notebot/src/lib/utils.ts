import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleError = async (error:unknown) => {
  if (error instanceof Error) {
    return {errormessage: error.message}
    
  }else{
    return {errormessage:"an error occured"}

  }
}