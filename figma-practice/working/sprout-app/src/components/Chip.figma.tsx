// Code Connect mapping for the (AI-designed) Chip. Publish: npx figma connect publish

import figma from '@figma/code-connect'
import { Chip } from './Chip'

figma.connect(
  Chip,
  'https://www.figma.com/design/3mN2yDTMU26rtwVBWQMuBa/Sprout-Design-File?node-id=11-36',
  {
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        Default: 'default',
        Selected: 'selected',
      }),
    },
    example: ({ label, variant }) => <Chip label={label} variant={variant} />,
  },
)
