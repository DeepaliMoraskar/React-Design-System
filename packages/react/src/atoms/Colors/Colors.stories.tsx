import type { Meta } from '@storybook/react';
import Colors from './Colors';


// import built CSS from scss package
import '@react.ds/scss/dist/global.css';
// import { Spacing } from '@react.ds/foundation';

const meta = {
  title: 'Atoms/Colors',
  component: Colors,
  tags: ['autodocs'],
} satisfies Meta<typeof Colors>;

export default meta;

// Standard Story type based on the meta defined above
// type Story = StoryObj<typeof meta>;


export const Common = {
  args: {
    hexCode: 'pink'
  }
};

export const CustomDimension = {
  args: {
    hexCode: "red",
    width: "xl",
    height: "xl",
  }
};