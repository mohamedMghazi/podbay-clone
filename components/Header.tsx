import { useEffect, useRef, useState } from 'react';
import { HeaderProps } from '@/types';
import { Logo } from '@/components/Logo';

export const Header: React.FC<HeaderProps> = ({ onSearch, initialQuery = '' }) => {
  const [inputValue, setInputValue] = useState(initialQuery);
  const lastSearchedValue = useRef<string>(initialQuery);

  useEffect(() => {
    if (inputValue === lastSearchedValue.current) {
      return;
    }

    const timer = setTimeout(() => {
      if (inputValue.trim()) {
        onSearch(inputValue);
        lastSearchedValue.current = inputValue;
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [inputValue, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-podbay-bg/95 backdrop-blur-md pt-4 pb-2 px-4 md:px-8">
      <div className="flex justify-between items-center gap-3 md:gap-4">
        <div className="md:hidden shrink-0">
          <Logo />
        </div>

        <form onSubmit={handleSubmit} className="flex-1 w-full relative group">
          <input
            type="text"
            className="block w-full px-4 py-2.5 md:py-3 border border-podbay-border rounded-lg md:rounded-xl leading-5 bg-podbay-surface text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-sm md:text-base transition-all text-center"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};
