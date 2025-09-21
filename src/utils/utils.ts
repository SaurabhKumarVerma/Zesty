import Toast from 'react-native-toast-message';

export type SpecialKey = string & { __brand: 'SpecialKey' };

const SPECIAL_KEY_REGEX = /^[A-Za-z0-9!@#$%^&*()_\-+=\[{\]};:'",.<>/?\\|`~]+$/;

export function asSpecialKey(input: string): SpecialKey {
  if (!SPECIAL_KEY_REGEX.test(input)) {
    Toast.show({
      position: 'bottom',
      type: 'error',
      props: 'Invalid key: Only alphanumeric and allowed special characters (no spaces).',
    });
  }
  return input as SpecialKey;
}

export function isSpecialKey(input: string): input is SpecialKey {
  return SPECIAL_KEY_REGEX.test(input);
}
