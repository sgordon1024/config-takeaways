// Config 2026 — Deep Dive panel illustrations (dd-01 … dd-05).
// Animated (SMIL) inline-SVG strings, viewBox 0 0 240 240. Monochrome via currentColor only
// (no hardcoded colors), transparent background. Designed to sit on the #06C167 green panel
// rendered in deep-green ink: set the panel's CSS color to #004824 and the art inherits it.
// IMPORTANT: inline these in the DOM (do NOT use <img>, background-image, or standalone .svg) —
// currentColor and the SMIL animation only work when the SVG is inline.
export const panels = {
  'dd-01': `<svg viewBox="0 0 240 240" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Scaling taste, craft and quality: refinement selecting the curated few from the abundant many</title>
  <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <g fill="currentColor" stroke="none" opacity="0.16">
      <circle cx="40" cy="56" r="3"/><circle cx="64" cy="32" r="3"/><circle cx="150" cy="28" r="3"/>
      <circle cx="200" cy="48" r="3"/><circle cx="214" cy="92" r="3"/><circle cx="216" cy="132" r="3"/>
      <circle cx="206" cy="178" r="3"/><circle cx="168" cy="208" r="3"/><circle cx="92" cy="212" r="3"/>
      <circle cx="46" cy="186" r="3"/><circle cx="24" cy="150" r="3"/><circle cx="26" cy="104" r="3"/>
    </g>
    <circle cx="120" cy="120" r="80" opacity="0.15"/>
    <circle cx="120" cy="120" r="58" opacity="0.3"/>
    <circle cx="120" cy="120" r="36" opacity="0.5"/>
    <circle cx="120" cy="120" r="58" stroke-width="3.5" stroke-dasharray="42 322" opacity="0.95">
      <animateTransform attributeName="transform" type="rotate" from="0 120 120" to="360 120 120" dur="6.5s" repeatCount="indefinite"/>
    </circle>
    <g fill="currentColor" stroke="none">
      <circle cx="120" cy="84" r="4.5"><animate attributeName="r" values="4.5;6;4.5" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="156" cy="120" r="4.5"><animate attributeName="r" values="4.5;6;4.5" keyTimes="0;0.5;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="120" cy="156" r="4.5"><animate attributeName="r" values="4.5;6;4.5" keyTimes="0;0.5;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="84" cy="120" r="4.5"><animate attributeName="r" values="4.5;6;4.5" keyTimes="0;0.5;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
    </g>
    <polygon points="120,98 142,120 120,142 98,120" stroke-width="3.5">
      <animateTransform attributeName="transform" type="rotate" values="0 120 120;7 120 120;0 120 120;-7 120 120;0 120 120" keyTimes="0;0.25;0.5;0.75;1" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
    </polygon>
    <circle cx="120" cy="120" r="3.5" fill="currentColor" stroke="none"/>
  </g>
</svg>`,
  'dd-02': `<svg viewBox="0 0 240 240" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Design context for agentic workflows: loose context tokens assembling into a precise specification lattice</title>
  <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <g opacity="0.5">
      <line x1="44" y1="74" x2="40" y2="120"/>
      <line x1="40" y1="120" x2="54" y2="166"/>
      <line x1="44" y1="74" x2="60" y2="44"/>
      <g fill="currentColor" stroke="none">
        <circle cx="44" cy="74" r="4.5"/><circle cx="40" cy="120" r="4.5"/><circle cx="54" cy="166" r="4.5"/><circle cx="60" cy="44" r="3.5" opacity="0.7"/>
      </g>
    </g>
    <g opacity="0.55" stroke-dasharray="3 9">
      <line x1="44" y1="74" x2="120" y2="72"><animate attributeName="stroke-dashoffset" values="0;-12" dur="1.1s" repeatCount="indefinite"/></line>
      <line x1="40" y1="120" x2="120" y2="120"><animate attributeName="stroke-dashoffset" values="0;-12" dur="1.1s" begin="-0.35s" repeatCount="indefinite"/></line>
      <line x1="54" y1="166" x2="120" y2="168"><animate attributeName="stroke-dashoffset" values="0;-12" dur="1.1s" begin="-0.7s" repeatCount="indefinite"/></line>
    </g>
    <g opacity="0.3">
      <line x1="120" y1="72" x2="216" y2="72"/><line x1="120" y1="120" x2="216" y2="120"/><line x1="120" y1="168" x2="216" y2="168"/>
      <line x1="120" y1="72" x2="120" y2="168"/><line x1="168" y1="72" x2="168" y2="168"/><line x1="216" y1="72" x2="216" y2="168"/>
    </g>
    <g fill="currentColor" stroke="none">
      <circle cx="120" cy="72" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="168" cy="72" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.22s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="216" cy="72" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.44s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="120" cy="120" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.22s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="168" cy="120" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.44s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="216" cy="120" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.66s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="120" cy="168" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.44s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="168" cy="168" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.66s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="216" cy="168" r="3.8"><animate attributeName="r" values="3.8;5.4;3.8" keyTimes="0;0.5;1" dur="2s" begin="-0.88s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
    </g>
  </g>
</svg>`,
  'dd-03': `<svg viewBox="0 0 240 240" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Navigating agentic computing: two systems cooperating as teammates, passing understanding through shared ground</title>
  <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="84" cy="120" r="52" opacity="0.55"/>
    <circle cx="156" cy="120" r="52" opacity="0.55"/>
    <circle cx="84" cy="120" r="18" stroke-dasharray="24 15" opacity="0.32">
      <animateTransform attributeName="transform" type="rotate" from="0 84 120" to="360 84 120" dur="11s" repeatCount="indefinite"/>
    </circle>
    <circle cx="156" cy="120" r="18" stroke-dasharray="24 15" opacity="0.32">
      <animateTransform attributeName="transform" type="rotate" from="360 156 120" to="0 156 120" dur="11s" repeatCount="indefinite"/>
    </circle>
    <g fill="currentColor" stroke="none" opacity="0.9">
      <circle cx="84" cy="120" r="4"/>
      <circle cx="156" cy="120" r="4"/>
    </g>
    <circle cx="120" cy="120" r="2.6" fill="currentColor" stroke="none" opacity="0.5"/>
    <circle cx="84" cy="120" r="5.5" fill="currentColor" stroke="none">
      <animateTransform attributeName="transform" type="translate" values="0,0;72,0;0,0" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
    </circle>
  </g>
</svg>`,
  'dd-04': `<svg viewBox="0 0 240 240" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Trust as a through line: one continuous thread stitching through every concentric layer to the core</title>
  <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="120" cy="120" r="92" opacity="0.14"/>
    <circle cx="120" cy="120" r="70" opacity="0.22"/>
    <circle cx="120" cy="120" r="48" opacity="0.32"/>
    <circle cx="120" cy="120" r="26" opacity="0.22"/>
    <circle cx="120" cy="120" r="92" stroke-width="3" stroke-dasharray="48 530" opacity="0.85">
      <animateTransform attributeName="transform" type="rotate" from="0 120 120" to="360 120 120" dur="7s" repeatCount="indefinite"/>
    </circle>
    <path d="M212 120 A85 85 0 0 1 120 198 A71 71 0 0 1 56 120 A58 58 0 0 1 120 68 A46 46 0 0 1 160 120 A35 35 0 0 1 120 150 A25 25 0 0 1 100 120 A15 15 0 0 1 120 109" stroke-width="3" opacity="0.5"/>
    <path d="M212 120 A85 85 0 0 1 120 198 A71 71 0 0 1 56 120 A58 58 0 0 1 120 68 A46 46 0 0 1 160 120 A35 35 0 0 1 120 150 A25 25 0 0 1 100 120 A15 15 0 0 1 120 109" stroke-width="4" stroke-dasharray="24 560" stroke-dashoffset="0">
      <animate attributeName="stroke-dashoffset" values="0;-554" dur="3.4s" repeatCount="indefinite"/>
    </path>
    <g fill="currentColor" stroke="none" opacity="0.7">
      <circle cx="120" cy="68" r="3.2"/><circle cx="160" cy="120" r="3.2"/><circle cx="120" cy="150" r="3.2"/>
    </g>
    <circle cx="120" cy="120" r="5" fill="currentColor" stroke="none">
      <animate attributeName="r" values="5;6.6;5;6;5;5;5" keyTimes="0;0.08;0.16;0.24;0.32;0.55;1" dur="2.8s" repeatCount="indefinite"/>
    </circle>
  </g>
</svg>`,
  'dd-05': `<svg viewBox="0 0 240 240" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>Designed to be read: a precise, modular system being scanned and verified line by line</title>
  <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="44" y="56" width="152" height="126" rx="3" opacity="0.55"/>
    <g opacity="0.26">
      <line x1="82" y1="56" x2="82" y2="182"/><line x1="120" y1="56" x2="120" y2="182"/><line x1="158" y1="56" x2="158" y2="182"/>
      <line x1="44" y1="98" x2="196" y2="98"/><line x1="44" y1="140" x2="196" y2="140"/>
    </g>
    <g opacity="0.5">
      <path d="M38 50 h8 M38 50 v8"/><path d="M202 50 h-8 M202 50 v8"/>
      <path d="M38 188 h8 M38 188 v-8"/><path d="M202 188 h-8 M202 188 v-8"/>
    </g>
    <g fill="currentColor" stroke="none" opacity="0.3">
      <circle cx="82" cy="98" r="3"><animate attributeName="r" values="3;4.4;3" keyTimes="0;0.5;1" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="120" cy="98" r="3"><animate attributeName="r" values="3;4.4;3" keyTimes="0;0.5;1" dur="1.8s" begin="-0.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="158" cy="98" r="3"><animate attributeName="r" values="3;4.4;3" keyTimes="0;0.5;1" dur="1.8s" begin="-0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="82" cy="140" r="3"><animate attributeName="r" values="3;4.4;3" keyTimes="0;0.5;1" dur="1.8s" begin="-0.45s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="120" cy="140" r="3"><animate attributeName="r" values="3;4.4;3" keyTimes="0;0.5;1" dur="1.8s" begin="-0.75s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
      <circle cx="158" cy="140" r="3"><animate attributeName="r" values="3;4.4;3" keyTimes="0;0.5;1" dur="1.8s" begin="-1.05s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>
    </g>
    <rect x="120" y="98" width="38" height="42" rx="2" opacity="0.9">
      <animate attributeName="opacity" values="0;0;0.9;0.9;0" keyTimes="0;0.34;0.4;0.62;0.7" dur="4s" repeatCount="indefinite"/>
    </rect>
    <g stroke-width="3" opacity="0.92">
      <line x1="44" y1="56" x2="196" y2="56"/>
      <line x1="44" y1="52" x2="44" y2="60"/>
      <line x1="196" y1="52" x2="196" y2="60"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,126;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    </g>
  </g>
</svg>`
};
