// Code Connect mapping for Sprout's Card.
// Publish: npx figma connect publish

import figma from '@figma/code-connect'
import { Card } from './Card'

figma.connect(
  Card,
  'https://www.figma.com/design/3mN2yDTMU26rtwVBWQMuBa/Sprout-Design-File?node-id=9-2',
  {
    props: {
      title: figma.string('Title'),
      subtitle: figma.string('Subtitle'),
    },
    example: ({ title, subtitle }) => <Card title={title} subtitle={subtitle} />,
  },
)
