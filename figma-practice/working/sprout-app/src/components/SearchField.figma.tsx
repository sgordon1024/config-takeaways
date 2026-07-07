// Code Connect mapping for Sprout's SearchField.
// Publish: npx figma connect publish

import figma from '@figma/code-connect'
import { SearchField } from './SearchField'

figma.connect(
  SearchField,
  'https://www.figma.com/design/3mN2yDTMU26rtwVBWQMuBa/Sprout-Design-File?node-id=5-2',
  {
    props: {
      placeholder: figma.string('Placeholder'),
    },
    example: ({ placeholder }) => <SearchField placeholder={placeholder} />,
  },
)
