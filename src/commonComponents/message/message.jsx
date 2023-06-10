import { toast } from 'wc-toast';

const TOAST_CONFIG_ICON = {
  success: "✅",
  warning: '⚠️',
  error: '🚫'
};

const initToastConfig = (type) => {
  return {
    icon: { type: 'custom', content: TOAST_CONFIG_ICON[type]},
    theme: {
      type: 'custom',
      style: {background: '#FEFEFE', color: 'var(--color-black)'}
    },
    duration: 3000
  };
};

export class message {
  static success = (message_text) => {
    return toast.success(message_text, initToastConfig('success'));
  };

  static warning = (message_text) => {
    return toast.success(message_text, initToastConfig('warning'));
  };

  static error = (message_text) => {
    return toast.success(message_text, initToastConfig('error'));
  };

  static loading = (message_text) => {
    return toast.loading(message_text, {
      theme: {
        type: 'custom',
        style: {background: '#FEFEFE', color: 'var(--color-black)'}
      },
      duration: 2000
    });
  };
}
