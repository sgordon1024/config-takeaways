// Code Connect mapping for the (AI-designed) EmptyState. Publish: npx figma connect publish

import figma from '@figma/code-connect'
import { EmptyState } from './EmptyState'

figma.connect(
  EmptyState,
  'https://www.figma.com/design/3mN2yDTMU26rtwVBWQMuBa/Sprout-Design-File?node-id=11-37',
  {
    props: {
      title: figma.string('Title'),
      subtitle: figma.string('Subtitle'),
    },
    example: ({ title, subtitle }) => <EmptyState title={title} subtitle={subtitle} />,
  },
)
