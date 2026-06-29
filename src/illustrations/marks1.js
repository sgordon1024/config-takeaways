// Config 2026 theme marks 01–06. Animated (SMIL), monochrome via currentColor + one #06C167 accent.
// Each string is a complete, paste-ready inline SVG. Resting state is valid even if animation is unsupported.
export const marks = {
  'theme-01': `<svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Taste and judgment become the scarce skill</title>
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <g fill="currentColor" stroke="none" opacity="0.22">
      <circle cx="30" cy="30" r="3"/><circle cx="48" cy="30" r="3"/><circle cx="66" cy="30" r="3"/>
      <circle cx="30" cy="48" r="3"/><circle cx="66" cy="48" r="3"/>
      <circle cx="30" cy="66" r="3"/><circle cx="48" cy="66" r="3"/><circle cx="66" cy="66" r="3"/>
    </g>
    <circle cx="48" cy="48" r="4" fill="#06C167" stroke="none">
      <animate attributeName="r" values="4;4.9;4" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
    <circle cx="48" cy="48" r="9">
      <animateTransform attributeName="transform" type="translate" values="0,0;-18,-18;18,-18;0,0;0,0" keyTimes="0;0.25;0.5;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0.16 1 0.3 1;0.16 1 0.3 1;0.4 0 0.2 1"/>
    </circle>
  </g>
</svg>`,
  'theme-02': `<svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Speed is table stakes; direction is the edge</title>
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="14" y1="28" x2="32" y2="28" opacity="0.3">
      <animate attributeName="opacity" values="0;0.4;0" keyTimes="0;0.2;1" dur="1.3s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;5,0;28,0" keyTimes="0;0.2;1" dur="1.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1;0.4 0 1 1"/>
    </line>
    <line x1="14" y1="40" x2="36" y2="40" opacity="0.3">
      <animate attributeName="opacity" values="0;0.4;0" keyTimes="0;0.2;1" dur="1.3s" begin="0.42s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;5,0;28,0" keyTimes="0;0.2;1" dur="1.3s" begin="0.42s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1;0.4 0 1 1"/>
    </line>
    <line x1="14" y1="52" x2="30" y2="52" opacity="0.3">
      <animate attributeName="opacity" values="0;0.4;0" keyTimes="0;0.2;1" dur="1.3s" begin="0.84s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;5,0;28,0" keyTimes="0;0.2;1" dur="1.3s" begin="0.84s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1;0.4 0 1 1"/>
    </line>
    <g stroke="#06C167" transform="rotate(-26 48 56)">
      <line x1="32" y1="56" x2="64" y2="56"/>
      <polyline points="56,50 64,56 56,62"/>
      <animateTransform attributeName="transform" type="rotate" values="-26 48 56;-19 48 56;-26 48 56" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </g>
  </g>
</svg>`,
  'theme-03': `<svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Context is the fuel you must externalize</title>
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <g opacity="0.32" stroke-dasharray="2.5 7">
      <line x1="48" y1="48" x2="48" y2="20"><animate attributeName="stroke-dashoffset" values="0;-9.5" dur="1.4s" repeatCount="indefinite"/></line>
      <line x1="48" y1="48" x2="72" y2="34"><animate attributeName="stroke-dashoffset" values="0;-9.5" dur="1.4s" repeatCount="indefinite"/></line>
      <line x1="48" y1="48" x2="72" y2="62"><animate attributeName="stroke-dashoffset" values="0;-9.5" dur="1.4s" repeatCount="indefinite"/></line>
      <line x1="48" y1="48" x2="48" y2="76"><animate attributeName="stroke-dashoffset" values="0;-9.5" dur="1.4s" repeatCount="indefinite"/></line>
      <line x1="48" y1="48" x2="24" y2="62"><animate attributeName="stroke-dashoffset" values="0;-9.5" dur="1.4s" repeatCount="indefinite"/></line>
      <line x1="48" y1="48" x2="24" y2="34"><animate attributeName="stroke-dashoffset" values="0;-9.5" dur="1.4s" repeatCount="indefinite"/></line>
    </g>
    <g fill="currentColor" stroke="none" opacity="0.32">
      <circle cx="48" cy="20" r="2.6"/><circle cx="72" cy="34" r="2.6"/><circle cx="72" cy="62" r="2.6"/>
      <circle cx="48" cy="76" r="2.6"/><circle cx="24" cy="62" r="2.6"/><circle cx="24" cy="34" r="2.6"/>
    </g>
    <circle cx="48" cy="48" r="4.5" fill="#06C167" stroke="none">
      <animate attributeName="r" values="4.5;5.4;4.5" keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
  </g>
</svg>`,
  'theme-04': `<svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Design systems bridge slop to shippable code</title>
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <g fill="currentColor" stroke="none" opacity="0.85">
      <circle cx="62" cy="38" r="3"><animateTransform attributeName="transform" type="translate" values="-38,-12;0,0;0,0;-38,-12" keyTimes="0;0.35;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0 0 1 1;0.5 0 0.5 1"/></circle>
      <circle cx="74" cy="38" r="3"><animateTransform attributeName="transform" type="translate" values="-50,8;0,0;0,0;-50,8" keyTimes="0;0.35;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0 0 1 1;0.5 0 0.5 1"/></circle>
      <circle cx="62" cy="58" r="3"><animateTransform attributeName="transform" type="translate" values="-34,-2;0,0;0,0;-34,-2" keyTimes="0;0.35;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0 0 1 1;0.5 0 0.5 1"/></circle>
      <circle cx="74" cy="58" r="3"><animateTransform attributeName="transform" type="translate" values="-46,14;0,0;0,0;-46,14" keyTimes="0;0.35;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0 0 1 1;0.5 0 0.5 1"/></circle>
    </g>
    <g stroke="#06C167">
      <line x1="34" y1="48" x2="52" y2="48" stroke-dasharray="18" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="18;0;0;18" keyTimes="0;0.35;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0 0 1 1;0.5 0 0.5 1"/></line>
      <polyline points="47,43 53,48 47,53" stroke-dasharray="16" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="16;0;0;16" keyTimes="0;0.42;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.16 1 0.3 1;0 0 1 1;0.5 0 0.5 1"/></polyline>
    </g>
  </g>
</svg>`,
  'theme-05': `<svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Code enters the canvas natively</title>
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="22" y="22" width="52" height="52" rx="7"/>
    <line x1="34" y1="44" x2="56" y2="44" opacity="0.4" stroke-dasharray="22" stroke-dashoffset="0">
      <animate attributeName="stroke-dashoffset" values="22;0;0;22" keyTimes="0;0.3;0.8;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.5 0 0.5 1"/>
    </line>
    <line x1="34" y1="54" x2="48" y2="54" opacity="0.4" stroke-dasharray="14" stroke-dashoffset="0">
      <animate attributeName="stroke-dashoffset" values="14;0;0;14" keyTimes="0;0.4;0.8;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.5 0 0.5 1"/>
    </line>
    <line x1="34" y1="44" x2="34" y2="54" stroke="#06C167">
      <animateTransform attributeName="transform" type="translate" values="0,0;22,0;22,0;0,0" keyTimes="0;0.3;0.8;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.5 0 0.5 1"/>
      <animate attributeName="opacity" values="1;1;0.2;1;0.2;1" keyTimes="0;0.5;0.6;0.7;0.8;1" dur="3.4s" repeatCount="indefinite"/>
    </line>
  </g>
</svg>`,
  'theme-06': `<svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Expression goes native: Motion, Shaders, Draw, Weave</title>
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 60 C30 28 40 30 48 48 C56 66 66 68 80 36"/>
    <circle cx="16" cy="60" r="4.5" fill="#06C167" stroke="none">
      <animateTransform attributeName="transform" type="translate" values="0,0;18,-25;32,-12;46,1;64,-24;46,1;32,-12;18,-25;0,0" keyTimes="0;0.12;0.25;0.37;0.5;0.62;0.75;0.87;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
  </g>
</svg>`
};
