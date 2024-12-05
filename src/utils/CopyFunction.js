import { toast } from 'react-toastify';

export const copyToClipboard = (text, message, errormsg) => {
  // Copy the text to clipboard
  navigator.clipboard.writeText(text).then(() => {
    // Show success toast
    toast.success(message);
  }).catch((error) => {
    // Show error toast if copy failed
    toast.error(errormsg);
    console.error("Error copying text: ", error);
  });
};
