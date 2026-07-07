// Code Connect mapping for Sprout's Button.
// Maps the Figma Button component set to this repo's <Button>, so Dev Mode and
// the Figma MCP return real code instead of guessed markup.
//
// Publish (from figma-practice/working/sprout-app, after `npm install` + FIGMA_ACCESS_TOKEN):
//   npx figma connect publish

import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(
  Button,
  'https://www.figma.com/design/3mN2yDTMU26rtwVBWQMuBa/Sprout-Design-File?node-id=2-6',
  {
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
      }),
      disabled: figma.boolean('Disabled'),
    },
    example: ({ label, variant, disabled }) => (
      <Button variant={variant} disabled={disabled}>
        {label}
      </Button>
    ),
  },
)
