// Forecast page — six prediction illustrations (pred-01 … pred-06).
// Organic / risograph energy: loose line, blobby forms, built-in film grain + hand-made wobble
// (SVG <filter> feTurbulence/feDisplacementMap). Each value is a complete inline-SVG string,
// viewBox 0 0 320 320, role="img" + <title>, animated with SMIL. Transparent background.
// Color: line work is currentColor (the near-black page sets it to white); #06C167 is the accent,
// with sparing clay #E8633A / teal #0E6E5A. IDs are prefixed per illustration (p01_… … p06_…).
// IMPORTANT: render these INLINE in the DOM (not <img>, background-image, or standalone .svg) —
// currentColor, the SMIL animation, and the grain/wobble filters only work when inline.
export const predictions = {
  'pred-01': `<svg viewBox="0 0 320 320" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>You stop making, you start deciding: a hand choosing one glowing form from an abundant scatter</title>
  <defs>
    <filter id="p01_rough" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p01_grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="g"/>
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.5 0.5 0.5 0 -0.52"/>
    </filter>
    <radialGradient id="p01_glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06C167" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#06C167" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="220" cy="96" r="58" fill="url(#p01_glow)">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" keyTimes="0;0.5;1"/>
  </circle>
  <g filter="url(#p01_rough)" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <g opacity="0.34">
      <circle cx="74" cy="74" r="14"/><circle cx="118" cy="50" r="9"/><circle cx="52" cy="128" r="12"/>
      <circle cx="120" cy="116" r="8"/><circle cx="40" cy="186" r="10"/><circle cx="150" cy="64" r="7"/>
      <circle cx="92" cy="172" r="11"/>
    </g>
    <g transform="translate(220,96)">
      <g>
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" keyTimes="0;0.5;1"/>
        <circle cx="0" cy="0" r="26" stroke="#06C167" stroke-width="4" fill="#06C167" fill-opacity="0.16"/>
        <circle cx="0" cy="0" r="6" fill="#06C167" stroke="none"/>
      </g>
    </g>
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;6,-8;0,0" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
      <ellipse cx="150" cy="264" rx="38" ry="32" fill="currentColor" fill-opacity="0.1"/>
      <line x1="158" y1="240" x2="202" y2="138" stroke-width="14"/>
      <line x1="120" y1="256" x2="98" y2="232" stroke-width="12"/>
      <path d="M120 248 q12 -12 26 -2"/>
      <path d="M126 262 q12 -12 26 -2"/>
    </g>
  </g>
  <rect width="320" height="320" fill="#fff" opacity="0.32" filter="url(#p01_grain)"/>
</svg>`,
  'pred-02': `<svg viewBox="0 0 320 320" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Your taste becomes a file: loose, messy marks distilling into one tidy artifact</title>
  <defs>
    <filter id="p02_rough" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="2" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p02_grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="g"/>
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.5 0.5 0.5 0 -0.52"/>
    </filter>
  </defs>
  <g filter="url(#p02_rough)" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <g opacity="0.4">
      <path d="M40 60 q12 -16 22 -2 q10 14 22 -2 q12 -16 22 -2"><animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite"/></path>
      <path d="M48 92 q14 12 26 0 q12 -12 24 2"><animate attributeName="opacity" values="0.35;0.12;0.35" dur="3s" begin="-0.6s" repeatCount="indefinite"/></path>
      <path d="M58 124 q10 -14 22 -2 q12 14 24 0"><animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" begin="-1.2s" repeatCount="indefinite"/></path>
      <path d="M44 150 q16 10 28 -2"><animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="-1.8s" repeatCount="indefinite"/></path>
    </g>
    <path d="M104 96 C150 104 168 150 196 196" opacity="0.3" stroke-dasharray="3 9">
      <animate attributeName="stroke-dashoffset" values="0;-48" dur="1.6s" repeatCount="indefinite"/>
    </path>
    <g fill="#06C167" stroke="none">
      <circle cx="120" cy="108" r="4"><animateMotion path="M0 0 C46 8 64 54 92 100" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1"/></circle>
      <circle cx="120" cy="108" r="3"><animateMotion path="M0 0 C46 8 64 54 92 100" dur="2.4s" begin="-1.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1"/></circle>
    </g>
    <g transform="translate(186,186)">
      <rect x="0" y="0" width="86" height="100" rx="9" fill="currentColor" fill-opacity="0.06"/>
      <path d="M64 0 L86 22 L64 22 Z" fill="currentColor" fill-opacity="0.14" stroke="none"/>
      <line x1="64" y1="0" x2="64" y2="22"/><line x1="86" y1="22" x2="64" y2="22"/>
      <line x1="16" y1="46" x2="58" y2="46" opacity="0.5"/>
      <line x1="16" y1="62" x2="70" y2="62" opacity="0.5"/>
      <circle cx="22" cy="80" r="6" fill="#06C167" stroke="none">
        <animate attributeName="r" values="6;7.6;6" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
      </circle>
      <line x1="36" y1="80" x2="68" y2="80" opacity="0.5"/>
    </g>
  </g>
  <rect width="320" height="320" fill="#fff" opacity="0.32" filter="url(#p02_grain)"/>
</svg>`,
  'pred-03': `<svg viewBox="0 0 320 320" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>The handoff is dead: a canvas and a code block dissolving into one continuous organic loop</title>
  <defs>
    <filter id="p03_rough" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="2" seed="5" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p03_grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="g"/>
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.5 0.5 0.5 0 -0.52"/>
    </filter>
  </defs>
  <g filter="url(#p03_rough)" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path id="p03_loop" d="M160 160 C116 104 52 104 52 160 C52 216 116 216 160 160 C204 104 268 104 268 160 C268 216 204 216 160 160 Z" opacity="0.55"/>
    <path d="M160 160 C116 104 52 104 52 160 C52 216 116 216 160 160 C204 104 268 104 268 160 C268 216 204 216 160 160 Z" stroke="#06C167" stroke-width="3" stroke-dasharray="34 360" stroke-dashoffset="0" opacity="0.9">
      <animate attributeName="stroke-dashoffset" values="0;-394" dur="4.5s" repeatCount="indefinite"/>
    </path>
    <g opacity="0.4" transform="translate(78,160)">
      <rect x="-22" y="-22" width="44" height="44" rx="7"/>
      <circle cx="0" cy="0" r="4" fill="currentColor" stroke="none"/>
    </g>
    <g opacity="0.4" transform="translate(242,160)">
      <polyline points="-6,-12 -16,0 -6,12"/>
      <polyline points="6,-12 16,0 6,12"/>
    </g>
    <circle r="6" fill="#06C167" stroke="none">
      <animateMotion dur="4.5s" repeatCount="indefinite"><mpath xlink:href="#p03_loop" xmlns:xlink="http://www.w3.org/1999/xlink"/></animateMotion>
    </circle>
  </g>
  <rect width="320" height="320" fill="#fff" opacity="0.32" filter="url(#p03_grain)"/>
</svg>`,
  'pred-04': `<svg viewBox="0 0 320 320" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Your product becomes a coworker: a person and a not-quite-person side by side, sharing one idea</title>
  <defs>
    <filter id="p04_rough" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.019" numOctaves="2" seed="4" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p04_grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="g"/>
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.5 0.5 0.5 0 -0.52"/>
    </filter>
    <radialGradient id="p04_glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06C167" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#06C167" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="160" cy="74" r="34" fill="url(#p04_glow)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <g filter="url(#p04_rough)" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M104 96 Q160 56 216 96" opacity="0.5"/>
    <circle cx="160" cy="74" r="7" fill="#06C167" stroke="none">
      <animate attributeName="r" values="7;9;7" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
      <ellipse cx="106" cy="150" rx="40" ry="42" fill="currentColor" fill-opacity="0.06"/>
      <circle cx="124" cy="146" r="4.5" fill="currentColor" stroke="none"/>
      <path d="M58 244 Q66 196 106 196 Q146 196 154 244"/>
    </g>
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" keyTimes="0;0.5;1" dur="3.6s" begin="-1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
      <rect x="176" y="110" width="80" height="80" rx="22" fill="currentColor" fill-opacity="0.06"/>
      <circle cx="198" cy="150" r="8" stroke="#06C167" stroke-width="3" fill="#06C167" fill-opacity="0.2"/>
      <line x1="222" y1="104" x2="226" y2="86"/>
      <path d="M166 244 Q174 196 214 196 Q254 196 262 244"/>
    </g>
  </g>
  <rect width="320" height="320" fill="#fff" opacity="0.32" filter="url(#p04_grain)"/>
</svg>`,
  'pred-05': `<svg viewBox="0 0 320 320" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Models are free, taste is the tiebreaker: a discerning eye and a hand giving the verdict</title>
  <defs>
    <filter id="p05_rough" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="9" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="4" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p05_grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="g"/>
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.5 0.5 0.5 0 -0.52"/>
    </filter>
    <radialGradient id="p05_glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06C167" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#06C167" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="160" cy="132" r="40" fill="url(#p05_glow)">
    <animate attributeName="opacity" values="0.55;0.95;0.55" dur="3s" repeatCount="indefinite"/>
  </circle>
  <g filter="url(#p05_rough)" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(160,132)">
      <g>
        <animateTransform attributeName="transform" type="scale" values="1 1;1 1;1 0.08;1 1;1 1" keyTimes="0;0.46;0.5;0.54;1" dur="4.5s" repeatCount="indefinite"/>
        <path d="M-96 0 Q0 -54 96 0 Q0 54 -96 0 Z"/>
        <g>
          <animateTransform attributeName="transform" type="translate" values="0,0;9,0;-6,0;0,0" keyTimes="0;0.3;0.6;0.85" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <circle cx="0" cy="0" r="26" stroke="#06C167" stroke-width="4" fill="#06C167" fill-opacity="0.16"/>
          <circle cx="0" cy="0" r="8" fill="currentColor" stroke="none"/>
        </g>
      </g>
    </g>
    <g transform="translate(150,244)">
      <animateTransform attributeName="transform" type="translate" values="150,246;150,238;150,246" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.34 0 0.2 1;0.4 0 0.2 1"/>
      <ellipse cx="0" cy="14" rx="30" ry="24" fill="currentColor" fill-opacity="0.08"/>
      <path d="M-24 18 Q-30 -2 -16 -6"/>
      <line x1="12" y1="6" x2="22" y2="-30" stroke-width="13"/>
      <circle cx="23" cy="-34" r="5" fill="#06C167" stroke="none"/>
    </g>
  </g>
  <rect width="320" height="320" fill="#fff" opacity="0.32" filter="url(#p05_grain)"/>
</svg>`,
  'pred-06': `<svg viewBox="0 0 320 320" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Flat is over, software gets weird again: exuberant liquid blobs spilling out of a rigid frame</title>
  <defs>
    <filter id="p06_rough" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" seed="1" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="3" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p06_liquid" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="8" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="11" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="p06_grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="g"/>
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.5 0.5 0.5 0 -0.5"/>
    </filter>
  </defs>
  <g filter="url(#p06_rough)" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="86" y="150" width="148" height="118" rx="5" opacity="0.65"/>
  </g>
  <g filter="url(#p06_liquid)" stroke="none">
    <circle cx="150" cy="150" r="44" fill="#06C167" fill-opacity="0.9">
      <animate attributeName="r" values="44;50;44" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
      <animate attributeName="cy" values="150;138;150" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
    <circle cx="120" cy="98" r="26" fill="#E8633A" fill-opacity="0.85">
      <animate attributeName="r" values="26;31;26" keyTimes="0;0.5;1" dur="3s" begin="-0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
    <circle cx="198" cy="120" r="30" fill="#0E6E5A" fill-opacity="0.9">
      <animate attributeName="r" values="30;35;30" keyTimes="0;0.5;1" dur="3.8s" begin="-1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
    <circle cx="160" cy="92" r="15" fill="#06C167" fill-opacity="0.95">
      <animate attributeName="cy" values="92;72;92" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.3 1;0.3 0 0.3 1"/>
    </circle>
    <circle cx="226" cy="92" r="9" fill="#E8633A" fill-opacity="0.9">
      <animate attributeName="cy" values="92;66;92" keyTimes="0;0.5;1" dur="3.6s" begin="-1s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.3 1;0.3 0 0.3 1"/>
    </circle>
  </g>
  <g filter="url(#p06_liquid)" fill="none" stroke="currentColor" stroke-width="3" opacity="0.45">
    <circle cx="112" cy="138" r="20"/>
  </g>
  <rect width="320" height="320" fill="#fff" opacity="0.36" filter="url(#p06_grain)"/>
</svg>`
};
