import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Text from '../../atoms/Text';

export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ESC: 'Escape',
};

export interface SelectOption {
  label: string;
  value: string;
}

export interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: object) => React.HTMLAttributes<HTMLLIElement>;
}

export interface SelectProps {
  options?: SelectOption[];
  label?: string;
  onOptionSelected?: (option: SelectOption, index: number) => void;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option ...',
  onOptionSelected,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option: SelectOption, index: number) => {
    setSelectedIndex(index);
    onOptionSelected?.(option, index);
    setIsOpen(false);
    // Focus returns to button after selection for a11y
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement | HTMLLIElement>) => {
    if (event.key === KEYS.ESC) {
      setIsOpen(false);
      buttonRef.current?.focus();
      return;
    }

    if ([KEYS.ARROW_DOWN, KEYS.ARROW_UP].includes(event.key)) {
      event.preventDefault();
      if (!isOpen) setIsOpen(true);
      
      setHighlightedIndex((prev) => {
        if (event.key === KEYS.ARROW_DOWN) {
          return prev === options.length - 1 ? 0 : prev + 1;
        }
        return prev === 0 ? options.length - 1 : prev - 1;
      });
    }

    if ([KEYS.ENTER, KEYS.SPACE].includes(event.key)) {
      event.preventDefault();
      if (isOpen) {
        handleOptionSelect(options[highlightedIndex], highlightedIndex);
      } else {
        setIsOpen(true);
      }
    }
  };

  useEffect(() => {
    if (isOpen && listRef.current) {
      const currentOption = listRef.current.children[highlightedIndex] as HTMLElement;
      currentOption?.focus();
    }
  }, [highlightedIndex, isOpen]);

  const selectedOption = selectedIndex !== null ? options[selectedIndex] : null;

  return (
    <div className="dse-select">
      <button
        ref={buttonRef}
        className="dse-select__label"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        // Fix for SB_ADDON_A11Y_0001
        aria-controls={isOpen ? "dse-select-list" : undefined}
        data-testid="DseSelectButton"
      >
        <Text>{selectedOption?.label ?? label}</Text>
      </button>

      <ul
        role="listbox"
        id="dse-select-list"
        ref={listRef}
        className={`dse-select__overlay ${isOpen ? 'dse-select__overlay--open' : ''}`}
      >
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;
          const isHighlighted = index === highlightedIndex;

          const getOptionRecommendedProps = (overrideProps: object = {}) => ({
            role: 'menuitemradio',
            'aria-selected': isSelected,
            tabIndex: isHighlighted ? 0 : -1,
            className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''} ${
              isHighlighted ? 'dse-select__option--highlighted' : ''
            }`,
            onClick: () => handleOptionSelect(option, index),
            onMouseEnter: () => setHighlightedIndex(index),
            ...overrideProps,
          });

          // Check for custom render
          if (renderOption) {
            return (
              <React.Fragment key={option.value}>
                {renderOption({ isSelected, option, getOptionRecommendedProps })}
              </React.Fragment>
            );
          }

          return (
            <li key={option.value} {...getOptionRecommendedProps()}>
              <Text>{option.label}</Text>
              {isSelected && (
                <svg width="1rem" height="1rem" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
