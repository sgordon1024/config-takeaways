// Code Connect mapping for the (AI-designed) ListRow. Publish: npx figma connect publish

import figma from '@figma/code-connect'
import { ListRow } from './ListRow'

figma.connect(
  ListRow,
  'https://www.figma.com/design/3mN2yDTMU26rtwVBWQMuBa/Sprout-Design-File?node-id=11-26',
  {
    props: {
      title: figma.string('Title'),
      subtitle: figma.string('Subtitle'),
      showSubtitle: figma.boolean('Show Subtitle'),
    },
    example: ({ title, subtitle, showSubtitle }) => (
      <ListRow title={title} subtitle={subtitle} showSubtitle={showSubtitle} />
    ),
  },
)
