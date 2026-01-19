import { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ContextMenuProps } from '@/types';
import { useClickOutside } from '@/hooks/useClickOutside';

export const ContextMenu: React.FC<ContextMenuProps> = ({
  isOpen,
  onClose,
  items,
  triggerRef,
  className = '',
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  useClickOutside(menuRef, onClose, triggerRef);

  const updatePosition = useCallback(() => {
    if (isOpen && triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      const newTop = rect.bottom + scrollY + 4;
      const newLeft = rect.right + scrollX;

      setCoords((prev) => {
        if (prev && Math.abs(prev.top - newTop) < 0.5 && Math.abs(prev.left - newLeft) < 0.5) {
          return prev;
        }
        return { top: newTop, left: newLeft };
      });
    }
  }, [isOpen, triggerRef]);

  useLayoutEffect(() => {
    updatePosition();
  }, [updatePosition]);

  useEffect(() => {
    if (isOpen) {
      const handleUpdate = () => {
        requestAnimationFrame(updatePosition);
      };

      window.addEventListener('scroll', handleUpdate, true);
      window.addEventListener('resize', handleUpdate);
      return () => {
        window.removeEventListener('scroll', handleUpdate, true);
        window.removeEventListener('resize', handleUpdate);
      };
    }
  }, [isOpen, updatePosition]);

  if (!isOpen || !coords) return null;

  return createPortal(
    <div
      ref={menuRef}
      style={{
        top: coords.top,
        left: coords.left,
        transform: 'translateX(-100%)',
      }}
      className={`absolute z-[9999] w-48 bg-[#483D60] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col py-1 text-[15px] font-medium text-gray-100 animate-in fade-in zoom-in-95 duration-100 ${className}`}
    >
      {items.map((item) => (
        <button
          key={item.label}
          onClick={(e) => {
            e.stopPropagation();
            item.onClick();
            onClose();
          }}
          className="text-left px-4 py-3 hover:bg-white/10 transition-colors w-full border-b border-transparent last:border-0"
        >
          {item.label}
        </button>
      ))}
    </div>,
    document.body
  );
};
