import React from 'react'
import { type Story, type Meta } from '@storybook/react'

import Button from './Button'
import { type ButtonProps } from './Button.types'

const story: Meta<typeof Button> = {
  title: 'Marbella/Button',
  component: Button,
  argTypes: {
  }
}
export default story

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  disabled: false,
  text: 'Secondary'
}

export const Disabled = Template.bind({})
Disabled.args = {
  primary: false,
  disabled: true,
  text: 'Disabled'
}

export const Small = Template.bind({})
Small.args = {
  primary: true,
  disabled: false,
  size: 'small',
  text: 'Small'
}

export const Medium = Template.bind({})
Medium.args = {
  primary: true,
  disabled: false,
  size: 'medium',
  text: 'Medium'
}

export const Large = Template.bind({})
Large.args = {
  primary: true,
  disabled: false,
  size: 'large',
  text: 'Large'
}
