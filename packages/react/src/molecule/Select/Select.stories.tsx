import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';


// import built CSS from scss package
import '@react.ds/scss/dist/global.css';

/**
 * Metadata for the Select component.
 * 'satisfies Meta' ensures the object matches the Meta type while 
 * preserving the exact types of your properties.
 */
const meta = {
  title: 'Molecules/Select',
  component: Select,
  // Modern SB handles a11y automatically if the addon is in main.js.
  // We use tags to enable automatic documentation.
  tags: ['autodocs'],
  // Define default args for all stories in this file
    parameters: {
    a11y: {
      // Optional: manual configuration if you need to bypass specific rules
      context: '#storybook-root',
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
  },
  args: {
    options: [
      { label: 'Strict Black', value: 'black' },
      { label: 'Heavenly Green', value: 'green' },
      { label: 'Sweet Pink', value: 'pink' }
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;

// Standard Story type based on the meta defined above
type Story = StoryObj<typeof meta>;


/**
 * 1. Basic usage inheriting default options
 */
export const Common: Story = {};

/**
 * 2. Custom render logic
 * In CSF3, you can use the 'render' function for complex scenarios.
 */
export const RenderOption: Story = {
  render: (args) => (
    <Select 
      {...args} 
      renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
        <span {...getOptionRecommendedProps()}>
          {option.label} {isSelected ? ' SELECTED !' : ''}
        </span>
      )} 
    />
  ),
};

/**
 * 3. Custom Label
 */
export const CustomLabel: Story = {
  args: {
    label: 'Select a color',
  },
};
