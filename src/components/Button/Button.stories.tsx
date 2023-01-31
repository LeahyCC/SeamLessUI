import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['docsPage'],
  argTypes: {},
}

export default meta

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary = {
  args: {
    label: 'Button',
  },
}

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const OnlyIcon = {
  args: {
    icon: '👍',
  },
}

export const IconWithLabel = {
  args: {
    icon: '👍',
    label: 'Button',
  },
}

export const IconWithLabelRight = {
  args: {
    icon: '👍',
    label: 'Button',
    iconPosition: 'right',
  },
}
