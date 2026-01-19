/**
 * Simulating Podbay behavior by generating a consistent color class based on a string value
 */
export const getColorFromString = (value: string): string => {
  const colors = [
    'text-blue-400',
    'text-purple-400',
    'text-pink-400',
    'text-teal-400',
    'text-yellow-400',
  ];

  const colorIndex = value.length % colors.length;
  return colors[colorIndex];
};
