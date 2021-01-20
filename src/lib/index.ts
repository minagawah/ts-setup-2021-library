const DEFAULT_GREETING = 'zup';

export const upperFirst = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

interface DudeValue {
  name: string;
  greeting?: string;
  upper?: boolean;
}

/**
 * @example
 * dude({ name, "joe" }) --> "Zup, Joe!"
 */
export const dude = ({ name, ...options }: DudeValue): string => {
  const { greeting = DEFAULT_GREETING, upper = true } = options || {};
  return [greeting, name]
    .map(item => (upper ? upperFirst(item) : item))
    .join(', ')
    .concat('!');
};
