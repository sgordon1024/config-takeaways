# Figma Config 2026 — Talk Takeaways & Themes

*San Francisco · June 23–25, 2026 · Moscone Center*

This document distills **96 talks** from Config 2026. **39** were analyzed from full session transcripts (verbatim auto-captions, fact-checked against the recording); **57** had no published recording and are summarized from Figma's official session abstracts. Transcript-based takeaways carry a short supporting quote; abstract-based ones are marked **(from abstract)**.

---

## The Big Picture

Config 2026 was staged as Figma's biggest product year yet — Make, Code layers, the design agent, Motion, shaders, generative plugins, and MCP — but every keynote and breakout circled the same reversal: once AI makes building cheap, fast, and infinitely repeatable, speed collapses into table stakes and the scarce, defensible resources become judgment, context, trust, and care. The role of the designer visibly moved up the stack from maker to director — picking what is worth building, holding the quality bar through the last 5-10%, and saying "not that, this" — while a concrete new craft emerged around encoding implicit human taste as machine-readable context, because anything left unspecified gets defaulted to a generic average. As products themselves became agentic, leaders reframed trust and legibility as measurable, load-bearing product requirements built through earned autonomy and relationship design rather than transparency theater. A loud cultural countercurrent insisted that abundance makes fundamentals matter more, not less — you cannot prompt what you cannot name — and that the genuinely uncopyable assets are community, customer insight, and the conviction to resist cognitive surrender to averaged output. Underneath the tooling ran Holly Herndon's framing of the whole era: the choice between centaur systems that pull more thought out of people and minotaur systems that puppeteer them into slop. The collective verdict was that AI is a multiplier worthless without a strong human signal to multiply, so Config 2026 was finally about reclaiming taste, discernment, and humanity as the differentiators of the AI era — and building the practices, organizations, and infrastructure that protect them.

## Cross-Cutting Themes

### 1. From maker to director: taste and judgment become the scarce resource

With AI flooding the process with cheap, average, 'junk food' output, talk after talk relocated the designer's value from execution to direction — picking the right thing, evaluating ('not that, this'), and pushing the final 5-10% of craft that separates real work from slop. Speed has outrun confidence (a roughly 6:1 gap in one survey of 183 leaders) and designers report maybe 1.5x speedups, not 10x, because non-linear exploration and consensus haven't been compressed. Leaders explicitly refuse to measure designers on output volume, naming taste the new bottleneck — and therefore the source of more design jobs, not fewer.

*Talks: Scaling taste, craft, and quality in the AI era; Designing OpenAI's products: Rethinking design in the age of AI; Designing in the age of the 10x engineer; Build like it's 2030. Listen like you mean it.; Designing with confidence in an AI-powered world; Building AI products at enterprise scale; Be the director: how stage craft informs product craft; Designing brand intelligence: from rules to expression; The canvas is not dead*

### 2. Encoding the human: context and skills are the new design system

The most concrete workflow consensus was a layered stack — context first, then skills, then agents — where structured, machine-readable context is the non-negotiable foundation because anything left unspecified gets randomized or defaulted to a web convention nobody chose. Teams codified their taste, terminology, conventions, and definitions of 'done' into shared knowledge layers (custom skills as markdown, content systems scanned from production code, hyper tokens, golden sets, personal and team context graphs) so AI starts every session informed. This reframes the design system from a component library into a set of enforceable shared decisions that both humans and agents pull from.

*Talks: Designed to be read: making a system AI can actually use; Your best practices are trapped in your head—and your AI has no idea; How structured thinking gives your AI superpowers; Design context for agentic workflows; How to build content systems for AI product workflows; Skill issue: how we built an OS for PMs at Figma; Figma deep dive: designing with the Figma agent; Getting real output from Figma Make; Everyone's still eating: building Notion's design system*

### 3. The continuous design-to-code loop replaces the handoff

Figma's flagship launches — Make, Code layers, and a design-system-aware agent — were framed as collapsing the static handoff into one continuous loop from canvas to production code. The repeated practitioner lesson is that AI-generated UI only becomes shippable when anchored to a real design system via Code Connect and MCP; without that grounding it stays a throwaway prototype. Teams reported dramatic compression (Mercari doubling development speed, Rocket shipping 5x faster with a $1B incremental monthly origination lift), with several deliberately moving 'upstream' to own design systems in code rather than delivering files.

*Talks: Designing in code; Opening keynote; From idea to production: bridging design systems and code with AI; The metacognitive design loop; From handoffs to upstream; AI will upend your process—for the better; Preparing Rocket for the AI era; Generative plugins: building plugins has never been easier*

### 4. Agentic experiences are relationship design built on trust and legibility

As products themselves became agentic, leaders argued the design unit shifts from interaction to relationship — agents should mimic how colleagues collaborate (presence, attribution, earned autonomy, approval gates) rather than the physics of office objects, and trust compounds through repeated micro-moments. Trust and legibility were reframed as measurable, load-bearing product requirements, not transparency theater: users want control and resolution, deliberately added friction ('say it back to me') can build confidence, and the governing question becomes not whether AI can do something but whether it should. High-emotion or high-stakes moments get routed to humans or gated behind review.

*Talks: Trust as a through line; Trust, transparency, and flow: the UX of Gemini Enterprise; Navigating the age of agentic computing; Legibility by design; Designing for agents: rethinking the role of the interface; Designing money: how to build a trustworthy brand in the age of AI; Design for the future of apps*

### 5. AI-native is an org transformation: roles blur, governance ratchets, leadership pivots to direction

Leadership talks converged on becoming AI-native as an organizational transformation written in real time, not a feature bolted on — the line between design, product, and engineering is dissolving, roadmaps barely survive weekly model drops, and leaders abandon rigid plans for holding a taste bar, protecting exploration, and enabling grassroots explorers. Because AI routes around any rule it can ignore, several teams replaced compliance-cop governance with enforcement that is unavoidable-by-construction (ratcheting counts, drift checks, golden-set thresholds) or culture-driven and 'permissive by design.' Org charts flatten carefully — OpenAI keeps player-coaches accountable for surfaces — while quality at scale becomes a product of shared ethos and good defaults.

*Talks: Welcome and opening remarks; How to build an AI-native org; Chaos as a catalyst: building Sephora's next operating model; The next era of product building: Designing the workflows of the future; Designing at the pace of model drops; Design leadership in the age of acceleration; How design makes change legible; Design systems anarchy; Applied Insights: shifting roles in product building*

### 6. Insight over output: customer understanding and evals as the anti-slop moat

With models commoditized and everyone building from the same tools, multiple talks argued the durable edge is pairing shipping velocity with deep, timely customer insight, since velocity without understanding just produces slop that erodes trust. Research tooling raced to match the speed of building — parallel AI moderation, in-app interview intercepts, MCP servers piping real qualitative signal directly into the build loop — reframing product-market fit as a fast-moving 'flow.' Designers and researchers were urged to own AI evals and the human-centered definition of 'good,' since validation behavior is precisely what separates teams whose confidence rose from those whose risk went up.

*Talks: From concept to confidence with Dscout AI; Building real-time user insights into your design workflow; Own the loop: how designers and researchers win with AI evals; Human methods, new material: designing with AI for the classroom; Beyond design systems: designing for robots and seniors; 300GB story: how to inspire action when data isn't enough*

### 7. Defending the human signal: craft, conviction, care, and community as the uncopyable layer

A strong cultural countercurrent held that abundance makes fundamentals the multiplier — you cannot prompt what you cannot name, so vocabulary, motion fluency, density literacy, daily practice, and the emotional 'feeling' of software become the differentiators against a flood of averaged output. Holly Herndon's centaur-over-minotaur framing anchored a moral argument against cognitive surrender: AI averages, lacks conviction, and cannot be held accountable or supply care, so humans must drive high-context, divergent, high-stakes work. The most defensible assets were named as community, authentic voice, inclusion, and the care that makes users feel considered — competitors copy features but never belonging.

*Talks: Keynote; Closing keynote; The canvas is not dead; The invisible mechanisms in your interfaces; Dense by design; Don't forget the feeling: a critique of software in 2026; The most important component: community; The edge case is everyone; 10 years of daily sketching; The world of street art and care-filled design*

---

## Every Talk

### Main stage

#### Opening keynote
*Dylan Field (CEO & Co-founder, Figma)  ·  📄 abstract only*

> Dylan Field opens Config 2026 by arguing that AI is reshaping how products get built and the roles people play, then unveils Figma's biggest product launch of the year.

- Design and product-building roles are shifting, requiring teams to rethink product development from the ground up rather than tweaking existing methods. *(from abstract)*
- Capturing this change demands new mindsets and methods, not just new tools, in order to keep producing great work. *(from abstract)*
- The keynote anchors Config with Figma's biggest product launch of the year, signaling a major platform announcement. *(from abstract)*

#### Keynote
*Holly Herndon (Artist, Herndon Dryhurst Studio)  ·  📝 transcript*

> Artist Holly Herndon reframes AI as a collaborative art form, urging us to build "centaur" systems that pull more thought out of people rather than "minotaur" systems that trap and puppeteer us into slop.

- Herndon frames the core AI choice with two mythological figures: the centaur (a human orchestrating systems, with human interest at the core) versus the minotaur (a human trapped in and orchestrated by systems beyond their control).  
  <sub>“A centaur builds protocols and models, and a minotaur is trapped inside protocols built to model them.”</sub>
- Her practice is 'protocol art': the creative intervention is upstream orchestration that produces emergent media downstream, so the protocol and its incentives are the artwork, not the output.  
  <sub>“the protocol itself and the incentive and the incentives in that protocol that is the artwork”</sub>
- Rather than scraping choir recordings, she built training data from scratch: a song book covering every English phoneme sent to 15 UK choirs and recorded in person, to make models that sound like a specific group rather than a 'grand average.'.  
  <sub>“It doesn't sound like a kind of grand average.”</sub>
- Holly Plus (2021) released a model of her own voice for anyone to sing through, with a royalty-split incentive, a deliberately permissive, positive-sum approach to IP and identity.  
  <sub>“I took a really permissive approach to IP here imagining ways that tools could be really positive sum”</sub>
- Building for centaurs is harder and asks more of humans, capturing more considered thought, while minotaur systems do the thinking for you or puppeteer you into making what they want.  
  <sub>“A minotaur system does all of the thinking for you. Or worse, it puppeteers us into creating what it wants rather than what we want.”</sub>
- She argues that now that anyone can generate anything, the hardest and most important question is figuring out what we actually want, best answered collectively and worth leaning into the discomfort.  
  <sub>“possibly the most uncomfortable question that we ask ourselves is what is it that we want and why?”</sub>

#### Get animated with Figma Motion
*Daniela Muntyan (Product Designer, Figma), Luca Damasco (Manager, Software Engineering, Figma), Dave Hornsby (Product Manager, Figma)  ·  📝 transcript*

> Figma Motion brings timeline keyframe animation, design-system-aware components and variables, and agent-assisted authoring into the canvas, with export to video and production code.

- Figma Motion adds a timeline-based animation mode inside Figma: stackable pre-made animation styles plus fine-grained keyframes with custom/overshoot easing, all playable live on canvas.  
  <sub>“when you want more fine-grained control, you're going to turn over to key frames”</sub>
- It ships with a library of roughly 12-16 pre-composed animation styles (entrances, cycles, exits) today, with user/org-custom reusable styles coming.  
  <sub>“a set of 16 or 12 of the animation styles that we've created for you today”</sub>
- The Figma agent can author and iterate animations from a prompt, especially for tedious multi-keyframe or multi-shot work, and agent-made and manual animation can be mixed and composed onto one timeline.  
  <sub>“a mixture of manually created animation and agent created animation”</sub>
- Motion is multiplayer: timestamped comments tied to playhead position, real-time co-editing of motion paths, and synchronized timelines via spotlight/follow for remote reviews.  
  <sub>“we've actually synchronized the timelines together between Dave's machine and ours”</sub>
- Animations respect Figma design systems end-to-end: nested components, two new variable types (easing and timing) with modes like standard/expressive/smooth, and upstream color changes propagate to the final composition.  
  <sub>“we've added two new variable types for Figma motion. We've added easing and timing”</sub>
- Export to production is built in: animated MP4/WebM/GIF/SVG (up to 4K 60fps on Pro Plus), plus a dev mode read-only timeline that generates CSS/React-Motion/JSON code and an MCP prompt to rebuild in a real codebase.  
  <sub>“we have generated code assets for each of these animations. So, CSS, React in Motion, and JSON outputs”</sub>

#### Figma deep dive: designing with the Figma agent
*Rodrigo Davies (Product Lead, Agents, Figma)  ·  📝 transcript*

> Figma's design agent reaches beyond the canvas — web search, MCP connectors, custom skills, and parallel prompting — built to do the tedious work while preserving the messy, multiplayer exploration designers love.

- The agent now connects outward: web search for in-canvas research, local file attachments (CSVs, docs), and MCP connectors (Notion, Asana, GitHub, Hex, Slack, Granola) that can both read and write back — e.g. updating a PRD with references to the designs you made.  
  <sub>“you can take that brief, generate designs in Figma, and then write back your changes to the PRD with a bunch of references to all the designs”</sub>
- Custom skills are a headline primitive: plain markdown files of your conventions, shareable across an org to scale expertise, composable (skills calling other skills and connectors), and portable from other agents in seconds.  
  <sub>“skills are just markdown files. You can copy paste them in... it's a composable system. So, skills can can call other skills”</sub>
- Parallel prompting lets you fire multiple agent tasks at once and keep editing live while they run — running search-results generation, LA-to-SF content localization, and dark/light mode swaps simultaneously without blocking.  
  <sub>“parallel prompting, being able to stop, go somewhere else, do lots of different things at once”</sub>
- Guiding philosophy (citing Joanna): AI should do the chores so humans do the creative work — but because every designer loves and hates different parts of design, the agent must support a huge breadth of use cases or it can feel useless.  
  <sub>“We want the AI to do laundry and dishes so that we can do art and writing”</sub>
- Outputs are real, editable design layers connected to your design system — not flat images — so the agent can pull in your library components and reattach stripped colors/typography to nearest matches.  
  <sub>“it's all design layers all the way down. In fact, it's also connected to your design system”</sub>
- Deliberate design stance: counter AI tools that silo work on one machine and prematurely converge on a single high-fidelity idea — keep the multiplayer canvas for divergent, shareable exploration, with shareable (or one-click private) chats.  
  <sub>“our AI tools have created silos where the work is stuck in maybe one person's computer”</sub>

#### Generative plugins: building plugins has never been easier
*Avery Frankenberg (Software Engineer, Figma), Jason Calleiro (Product Designer, Figma)  ·  📝 transcript*

> Figma's new generative plugins let anyone build canvas-native tools by describing them in plain language—no code, no editor, no leaving Figma.

- Generative plugins are built by describing a workflow in natural language—no coding, no editor, no new frameworks required; the design agent handles it and can ask clarifying questions about controls before building.  
  <sub>“if you can describe the tool, you can build the tool”</sub>
- Plugins attach to the file and to specific layers, so they travel with the work—no publishing, installing, or link-sharing needed; duplicating or copying a layer carries the plugin with it.  
  <sub>“The tool always travels with the work.”</sub>
- A new UI library called Props Kit gives plugins native Figma look-and-feel by default, plus creative controls like joysticks, easing, and 3D inputs, and on-canvas handles you can map to any property.  
  <sub>“we've introduced a new UI library for plugins called Props Kit”</sub>
- Build cost is one-time: generating the plugin spends tokens, but running it—yours, Figma's, or a teammate's—is free forever, fitting a more cost-conscious post-token-maxing era.  
  <sub>“You create it once, and then it no longer costs you to run it... running plugins is free.”</sub>
- Generative plugins compose with the other Config launches—shader fills, shader effects, and generative plugins themselves—shown via a nail-studio plugin layering shader fills and a shader effect with a light-position on-canvas handle.  
  <sub>“how you can compose all of the new things that we created today and launched”</sub>
- Scope ranges from trivial one-prompt utilities to full products: teammate Yuchen used the Figma Notion connector to create a PRD and fed it into the agent to build a two-part game terrain builder with tile sets and elevation.  
  <sub>“Yuchen used the Figma Notion connector to create a PRD... and fed that into the agent”</sub>

#### Shaders in Figma: create the effects and fills you've always wanted
*Yassir Solomah (Software Engineering Manager, Figma), Piers Cowburn (Director of Engineering, Expressive Design, Figma), Rogie King (Product Designer, Figma)  ·  📝 transcript*

> Figma shipped native, GPU-powered shaders you generate by talking to an AI agent, then stack and recombine as exportable effects and fills across text, strokes, and brush strokes.

- Shaders ship as two primitives — shader effects (applied on top of layers) and shader fills (usable anywhere a fill goes, including text, strokes, and brush strokes) — generated by asking an AI agent rather than hand-coded.  
  <sub>“it's a fill. It works on anything you would put a fill in.”</sub>
- Effects expose live on-canvas handles and parameters (sliders, gradients, selects, switches, colors, and point/angle/radius gizmos) you can request from the agent in plain language, e.g. asking for a point-and-radius handle to control the pixelation area.  
  <sub>“give me a point, give me a point line point, give me a point angle radius... the real fun ones are canvas controls.”</sub>
- The power comes from stacking and recombining effects on a base input — peel + shapes mosaic + stipple, or time-offset duplicate copies with blend modes — to reach surprising results you couldn't predict; the presenter calls it 'play jazz.'.  
  <sub>“by stacking and recombining effects, you can achieve some really interesting and surprising outcomes.”</sub>
- Shaders are raster, not vector: they render at frame/layer size, don't support infinite zoom, and cap at 2048px — small layers show a low-res indicator and oversized frames stretch the texture to fit.  
  <sub>“if shaders render at a maximum size as well. So, specifically 2048.”</sub>
- Your code is fully exportable via MCP/Dev Mode — you get the raw shader source (a setup function run once and a render function per frame), a runtime, and a defined-properties array mapping params to Figma's UI for direct HTML/WebGPU implementation.  
  <sub>“it had to be fully exportable because at the end of the day, your code is yours to take.”</sub>
- Technically these are 'secure WebGPU intra-layer render pipelines' built on Figma's WebGPU; the project went grassroots-to-launch in months after the team cold-messaged CEO Dylan in March and got a quick yes.  
  <sub>“Rogie suggested we just message Dylan... I found out you could just cold message your CEO because free will.”</sub>

#### Closing keynote
*Patrick Flaherty (Senior Motion Designer, Microsoft), Tommy Geoco (Storyteller, UX Tools   ), Catt Small (Staff Product Designer, Dropbox), Matt D. Smith (CEO, Shift Nudge), Rasmus Andersson (Software Painter, Playbit)  ·  📝 transcript*

> A motion designer demos capturing real-world movement to generate animation curves, followed by a panel arguing that AI multiplies design output but makes fundamentals, conviction, and storytelling matter more.

- Reframe the cubic Bezier curve workflow: don't drag handles to chase a feeling — capture real motion first, then read its spacing to derive the curve. Spacing is the visible proxy for velocity, which is the feel.  
  <sub>“Spacing equals velocity, and velocity equals feel.”</sub>
- Patrick built 'Motion Tracker' — a tool that records real movement (via camera or phone/watch accelerometer), tracks it, and exports usable easing curves into Figma and After Effects. He demoed it live, tracking a foam sword swing on the X-axis and a drop on the Y-axis.  
  <sub>“I would record a short, intentional motion. I would then track it. I would read the timing, and I would turn that into a curve.”</sub>
- Full motion workflow as a shareable team asset: capture, read the timing, shape the curve, apply it, then name and share it so a curve like 'swing' becomes part of a shared motion language; he applied a curve via Figma variables to update many layers at once.  
  <sub>“if you find something, you should name it. You should share it. And you should store it.”</sub>
- Survey data on AI adoption: Figma reported ~72% in the room are using or have tried generative AI; the UX Tools survey splits designers into thirds — a third haven't touched it, a third dabble, a third are fundamentally changing how they work.  
  <sub>“a third of us haven't actually even touched it. A third of us have dabbled a little bit. And the other third of us are fundamentally changing how we work”</sub>
- AI is a multiplying force, so design fundamentals matter MORE, not less — you need a solid foundation to multiply against, and you still must know whether a rectangle should exist whether you drew it or prompted it.  
  <sub>“if you're going to have that multiplication, you have to have a solid foundation to multiply against”</sub>
- Practitioner split on where to apply AI: Cat finds most value closer to production while owning early visioning by hand; Rasmus's spicy take is that production (error states, sign-up forms, design systems) should be automated, while ideation stays human.  
  <sub>“Figuring out that we need a sign-in form, that's like ideation.”</sub>

#### Opening keynotes
*Grant Sanderson (YouTube educator, 3Blue1Brown), Switch Angel + LO.FI.SCI.FI (Artists & Software Engineers)  ·  📝 transcript*

> 3Blue1Brown's Grant Sanderson reframes explaining math as a design problem, using e^(pi i) = -1 to show how asking "what does it look like?", giving each symbol a motivation, and reaching for surprising applications turn proofs into understanding.

- Principle 1: Treat math explanation as a visual design challenge. Just asking 'what does it look like?' surfaces a lot of low-hanging fruit, even if visualizing won't always give the best explanation.  
  <sub>“treat it as a visual design challenge. Ask the question, what does it look like?”</sub>
- Principle 2: To explain WHY something is true (not just that it is), give each symbol/component a clearly defined motivation, like characters in a novel. i 'wants' to rotate 90 degrees; e 'wants' a rate of change equal to itself.  
  <sub>“Give your characters motivation... That motivation is often the difference between a proof and an explanation.”</sub>
- Principle 3: The most memorable application is the most surprising one. Rather than signal processing (engineers) or quantum mechanics (physicists), he showed complex exponentials reproducing M.C. Escher's 'Print Gallery' for a design audience.  
  <sub>“sometimes the most memorable application is the most surprising one”</sub>
- e^(pi i) = -1 is visualized three different ways depending on the question asked: an infinite polynomial whose terms spiral onto -1, a velocity-locked rotation around the unit circle, and a global rolling-up/squishing of the plane into circles for the artistic use case.  
  <sub>“depending on what you're trying to answer about it, there are fundamentally different ways to visualize it”</sub>
- The Escher 'Print Gallery' decode came from mathematicians de Smit and Lenstra about 50 years later: take the logarithm of the self-nested image, rotate it precisely, then exponentiate to get the spiral. The same log-space trick powers Sanderson's animation.  
  <sub>“they started by uh looking at a logarithm of the straightened out concept... then you rotate it in just the right way... you exponentiate”</sub>
- Closing charge to designers: everyone is a teacher and all design is in the service of explanation. Spend 30 minutes defining your own teaching principles and how they overlap with design.  
  <sub>“everyone is a teacher, cuz everyone has the role of trying to explain what they do and why it matters to others”</sub>

#### Designing in code
*Elle Shwer (Product Manager, Figma), Iris Lin (Product Designer, Figma), Nikolas Klein (Product Manager, Figma), Ben Chen (Engineering Manager, Figma)  ·  📄 abstract only*

> Figma is closing the gap between design and code with two launches—Make and Code layers—that bring code natively into the canvas so teams can design, prototype, and iterate in code all the way to production.

- Make lets designers work directly in their local codebase from within Figma, designing in code rather than handing off static mockups. *(from abstract)*
- Code layers bring code natively onto the Figma canvas, letting teams explore and prototype with real code alongside their designs. *(from abstract)*
- The combined goal is a continuous design-to-code workflow—iterate, prototype, and collaborate in code from canvas through to production. *(from abstract)*

#### Inside the Weave workflow
*Gal Sharir (Product Designer, Figma), Ron Baranov (Creative Workflow Advocate, Figma)  ·  📄 abstract only*

> A behind-the-scenes look at how real creative work gets made in Weave, treating AI as a structured, iterative process rather than a one-shot magic trick.

- The talk focuses on the messy reality behind a finished frame: the branching, sequencing, iteration, edits, mistakes, and recoveries that actually produce creative output. *(from abstract)*
- Techniques like model chaining and deliberate sequencing are framed as core to the workflow, showing how multiple steps and models are combined to reach a result. *(from abstract)*
- Systems thinking is the throughline that turns AI from a 'magic trick' into a repeatable, real creative process. *(from abstract)*

#### Getting real output from Figma Make
*Brett McMillin (Designer Advocate, Figma), Laura Fehre (Designer Advocate, Figma )  ·  📝 transcript*

> Figma Make can faithfully reproduce your design system if you feed it the right scaffolding — versioned NPM packages, modular markdown guidelines, make kits, templates, and a compliance-check skill.

- Distinguish prototyping code from production code; Make targets fast, low-dependency prototype code, but you can still pull in your production design system via versioned NPM packages published to a private registry inside Figma.  
  <sub>“prototyping code is the opposite. You want speed, faster build times, and fewer external dependencies”</sub>
- Structure guidelines as modular markdown with three critical high-level files: a guidelines 'front door' file defining product character and reading order, a discovery file telling the agent where to look and how to verify (preventing hallucinated components/imports), and a setup file with exact CSS imports, providers, and build config.  
  <sub>“The discovery file teaches the agent how to navigate... This file also helps present hallucinated components, properties, imports, and icons”</sub>
- Three artifacts compose into a workflow hierarchy: make kits (a code representation of components plus usage guidelines), which can use NPM packages, and templates (pre-baked starting points for new files), which can use make kits — each layer optional but composable.  
  <sub>“make kits can use MPN packages, but they don't have to. And templates can use make kits, but they don't have to”</sub>
- Translating human-readable guidelines to machine-readable markdown is fast: Laura copied the public SAP guidelines into an LLM with the recommended structure and it took around 42 minutes, treated only as a starting point to refine with engineers and PMs.  
  <sub>“this took around 42 minutes, uh but it should just be the starting point”</sub>
- Use a custom 'compliance check' skill to score generated output against the design system before publishing — the SAP demo scored 4.7/5 against a 3.8 publish threshold, verifying components were composed with correct properties.  
  <sub>“the skill actually outputs for us a a score out of five. And so, this gives 4.7 out of five. Our publish threshold based on our skill is 3.8”</sub>
- File placement matters for governance: guideline files go in the guidelines folder, but presets/recipes and onboarding overlays must live in the app folder alongside the prompts; and kit updates (NPM packages, guidelines) push down to all consuming templates and make files on publish.  
  <sub>“updates to kits can be pushed down to consuming files... those will update when published and update any template or make file that uses them”</sub>

#### Design context for agentic workflows
*Jake Albaugh (Developer Advocate, Figma)  ·  📝 transcript*

> AI accelerates execution but not clarity, so designers must invest upfront intent and feed agents precise, abstracted design context (Code Connect, hyper tokens, FigJam) rather than surrendering judgment to polished averages.

- Beware 'cognitive surrender' — adopting an LLM's judgment as your own. AI speeds output but can obstruct clarity, producing surface polish built on averages with nothing meaningful underneath.  
  <sub>“AI accelerates execution, not clarity. If anything, AI can get in the way of clarity.”</sub>
- Apply a 'consideration imperative': clarify intent at the front of the process. Without upfront clarity, a 100x workflow is multiplication by zero; vibe coding leads to high maintenance friction and dead-ends.  
  <sub>“Not having clarity upfront is at best multiplication by zero. You have to start with intent.”</sub>
- Precise design context (Code Connect snippets) makes agents write more of the total code and produce leaner code with lower AI usage — versus verbose React/Tailwind dumps that leave humans filling in tech debt.  
  <sub>“When we provide agents with precise context like Code Connect snippets, agents write far more of the total code.”</sub>
- 'Hyper tokens' — named reusable style fragments extending Figma text styles to layout, motion, and effects — compile from one typed schema into libraries, docs, skills, and Code Connect, reducing LLM inference.  
  <sub>“Hyper tokens can be leveraged to apply this idea we see here with Text Styles to everything.”</sub>
- Don't hand-edit agent-generated skill markdown (like editing minified code). Keep one source of truth — built in FigJam — and let each agent compile its own tailored skill from it.  
  <sub>“Editing agentic markdown output is kind of like editing minified code.”</sub>
- Used FigJam as an agentic interface: agents split a task into sub-agent plans written back for review, then built a real stegasound website (design + design system + code) across Figma, Make, and a codebase in one evening.  
  <sub>“I asked the current agent session to write relevant context back into FigJam so I can have another agent pick up where it left off.”</sub>

#### Closing keynote
*Brent David Freaney (Art Director, Special Offer, Inc.), André Anjos (Artist , RAC)  ·  📄 abstract only*

> A closing-keynote tour of how a top art director builds culturally resonant design across albums, magazines, live media, and screens, from a single signature color to large-scale campaign systems.

- Cultural impact often hinges on small, deliberate craft decisions, illustrated by the process behind choosing a single shade of green for Charli XCX's Brat. *(from abstract)*
- Holding large-scale creative campaigns together depends on systems thinking, not just one-off visuals. *(from abstract)*
- Designing across media (albums, magazines, live media, and screens) requires a consistent personal process and toolset that travels across formats. *(from abstract)*

### Leadership Collective Main Stage

#### Welcome and opening remarks
*Sheila Vashee (Chief Marketing Officer, Figma), Noah Levin (VP, Design, Figma)  ·  📝 transcript*

> Figma's 2026 AI research maps teams into four adoption archetypes and argues that when anyone can build fast, leadership's real job shifts from speed to direction, differentiation, and giving teams agency.

- Figma's 2026 AI report sorts teams into four adoption buckets by personal vs. org-wide adoption: Nascent (smallest group today, where the whole industry was a couple years ago), Unified (perfectly aligned, moving in lockstep), Grassroots (ICs deep in AI, sometimes on personal accounts), and Directive (leadership bet on AI but ICs aren't there yet).  
  <sub>“they fall in a few buckets, varying by personal and org-wide adoption”</sub>
- Grassroots and Directive are the two more interesting and more realistic categories, and they are two very different problems to solve — so there is no single AI playbook for organizations.  
  <sub>“let's stop pretending for a second that there's one playbook”</sub>
- When anyone can build anything quickly, speed is now almost table stakes; the harder, differentiating problems are direction (picking the right things) and differentiation (standing out).  
  <sub>“almost table stakes now”</sub>
- Reframe from agents to agency: with AI, every idea can become a detailed prototype rather than a sticky note, forcing leaders to pick a path at record speed and record quantity of output.  
  <sub>“We don't just need agents... we need agency over the work that we do”</sub>
- Concrete leadership tactics Figma uses: protected weekly hour-long Friday study groups to build, play, and explore; finding and enabling 'explorers'; and modeling the behavior by building themselves.  
  <sub>“Every Friday our Figma design team gets together for about an hour”</sub>
- Today's generative plugins launch originated bottom-up from a monetization-team designer named Jason who DM'd Noah with an idea outside his day job — proof that enabling curious explorers pays off.  
  <sub>“one of our designers was on the monetization team... His name is Jason and he DM'd me one day”</sub>

#### Scaling taste, craft, and quality in the AI era
*Teo Connor (VP Design, Airbnb), Loredana Crisan (Chief Design Officer, Figma)  ·  📝 transcript*

> As AI floods the design process with output, the durable human edge becomes judgment, editing, care, and the will to push the last 5%.

- Evaluation and judgment ('not that, this') is the rising core skill — designers must now critique their own work, others' work, and AI's output, normalized via shared process and a 'collective understanding of what good looks like.'.  
  <sub>“people who can look at a lot of work and say, "Not that, this." And that is a skill”</sub>
- AI output is 'junk food' — easy, tasty, but often hollow; the discipline is resisting the tool when it says first-pass work is good enough and pushing the final 5% that makes ideas stand out.  
  <sub>“sometimes AI is a little bit like junk food... what you've created is a bit hollow”</sub>
- Reject the solo-agent narrative; magic comes from diverse disciplines plus AI together. Airbnb uses 'pod' teams structured like little startups, mixing product, design engineering, industrial design, data scientists, and business people.  
  <sub>“little pod teams and you can think about these teams as little startups”</sub>
- Don't fight over mediums (Figma layers, vectors, code) — embrace all materials together; abundance of tools is facilitating play and creative 'alchemy.'.  
  <sub>“We should not argue about which materials we use. We should embrace them all and work with them together”</sub>
- It's a great moment to be a junior/fresh designer; leaders have a responsibility to keep hiring early talent and interns for fresh thinking on unsolved problems.  
  <sub>“I actually think it's a really great time uh to be like fresh in this industry”</sub>
- Care = treating users like hosted guests — sweating consistent details so people feel considered; AI fundamentally doesn't care, so humans must supply it. Expect a flood of slop, but great work always rises above.  
  <sub>“we'll be swimming in some slop for for a while, but that's okay because... the great work will always rise above it”</sub>

#### Trust, transparency, and flow: the UX of Gemini Enterprise
*Sheta Chatterjee (Senior Director, Head of UX, Cloud AI, Google), Yuhki Yamashita (Chief Product Officer, Figma)  ·  📝 transcript*

> Designing enterprise AI is less about inventing new paradigms than borrowing the trust, transparency, and identity cues of human teamwork — starting agents on a short leash and earning autonomy over time.

- The chatbot-copy-paste model is obsolete; Gemini Enterprise reframes AI as a collaborator working inside a shared 'context container' (collaborative projects) holding a team's files, data, and people.  
  <sub>“it's not like chatting with AI... it's about AI working alongside you to help you get things done”</sub>
- For long-horizon agents (Gemini Sparks, running days/weeks/months), they borrowed the familiar email/inbox pattern so users can label, star, and approve tasks, fighting the 'black box' fear with familiarity.  
  <sub>“we designed something called inbox, and we used the familiar patterns of email, and brought this into this agentic workflow”</sub>
- Autonomy should be earned, not default: start agents on small tasks with approval gates built in, then add autonomy as trust builds, exactly like working with a new human teammate.  
  <sub>“starting small, building the smart defaults and then over time adding more autonomy”</sub>
- Multiplayer-with-agents demands two design primitives: presence (seeing what agents change in real time) and attribution (delineating human vs. agent work so it can be traced or rolled back).  
  <sub>“we need to be able to delineate what a human has done and what an agent has done”</sub>
- Determinism is a real enterprise requirement, not a dated aesthetic: 'flow-gramming' box-and-arrow agent design persists because regulated customers like healthcare need total control.  
  <sub>“a 5% delta in a dosage is life-threatening for somebody. So, there are customers who want that level of total control”</sub>
- Distinguish 'producing work' from 'writing work', requiring human review at high-stakes output moments (sending an email, publishing a doc) via Agent Designer's smart defaults.  
  <sub>“there is producing work and then there's writing that work... you want to be able to see it before it writes the work”</sub>

#### Chaos as a catalyst: building Sephora’s next operating model
*Sneha Narahalli (SVP, Technology, Sephora), Paige Costello (VP Product, Figma)  ·  📄 abstract only*

> A fireside chat on how Sephora is becoming an AI-native organization by writing its operating playbook in real time—building new ways of working and scalable patterns while preserving inclusive, brand-forward customer experiences.

- Becoming AI-native is treated as an organizational transformation, not just shipping AI features—it reshapes how teams work, not only what they build. *(from abstract)*
- Sephora is defining its operating model and patterns as it goes, working through ambiguity and writing the playbook in real time rather than following an established template. *(from abstract)*
- The goal is a scalable playbook that lets new ways of working spread across the org while still delivering inclusive, intuitive, and brand-forward customer experiences. *(from abstract)*

#### Designing OpenAI’s products: Rethinking design in the age of AI
*Ian Silber (Head of Product Design, Open AI), Noah Levin (VP, Design, Figma)  ·  📝 transcript*

> OpenAI's head of design argues that in the AI era process and roadmaps barely survive contact with weekly model changes — so the job becomes holding a taste bar, protecting exploration time, and hiring people resilient to constant ambiguity.

- Anyone internally can ship anything, but a taste bar gates real release — features earn their way out by getting internal support first, since with ~1000 engineers and ~50 designers every day is effectively a hackathon shipping into the product.  
  <sub>“anybody can ship anything internally. Uh, but there is going to be a bar and if it's going to ship like certain people have to kind of sign off”</sub>
- Designers shouldn't be measured by output volume (PRs, tokens, artboards) but by impact — did people love it, did it solve a problem; OpenAI explicitly does not evaluate designers on metrics.  
  <sub>“How many artboards did you create?' Like, it doesn't matter... we don't really... evaluate on on metrics or anything like that for for our designers”</sub>
- A new 'model design' discipline exists where the pixels become the easy part and most time goes to writing prompts, evals, and specs for when behavior should trigger — staffed by traditional designers plus former writers, not ML PhDs.  
  <sub>“the pixels are became the easy part and then it was about, 'Well, when should this trigger? How should it trigger?'”</sub>
- Designers are not getting the 10-100x speedup engineers claim — maybe 1.5x — because design is non-linear exploration that AI hasn't compressed, creating new bottlenecks where fast engineering meets slow consensus.  
  <sub>“I do not feel 10 or 100x as productive”</sub>
- Reject full org flattening: managers must own a surface and be accountable for it being great; OpenAI hires hybrid 'player-coaches' who still ship, having learned that 30 direct reports spreads attention like peanut butter.  
  <sub>“as someone who had like 30 reports at one point... I do think that there's there is a healthy spot”</sub>
- Hire for resilience and comfort with ambiguity over structure, and protect exploration — leaders deliberately create space to slow down since everyone can ship instantly; roadmaps are barely real because a new model capability can land any week.  
  <sub>“road maps are like a way... for managers to feel good about themselves... we change all the time and just accept that”</sub>

#### Welcome and opening remarks
*Shaunt Voskanian (Chief Revenue Officer, Figma), Viral Shah (VP, Research, Figma)  ·  📄 abstract only*

> Figma's CRO and VP of Research kick off the Leadership Collective with welcoming remarks framing the event's themes and agenda for design leaders.

- Serves as the scene-setting opening for the Leadership Collective Main Stage, orienting an audience of design and org leaders to the day ahead. *(from abstract)*
- Delivered jointly by a revenue/go-to-market leader (CRO) and a research leader (VP, Research), signaling a blend of business and insight-driven framing for the program. *(from abstract)*

#### Building AI products at enterprise scale
*Dylan Field (CEO & Co-founder, Figma), Jeetu Patel (President and Chief Product Officer, Cisco)  ·  📝 transcript*

> Cisco's Jeetu Patel argues design is a commercial lever and a culture-change engine at enterprise scale—and that AI makes human taste the new bottleneck, creating more design jobs, not fewer.

- Design leaders must justify design in commercial terms, not just idealism: love-able products, scaled adoption, and revenue. Cisco unified 251 acquisitions into one management plane with one design language across $63B of revenue.  
  <sub>“We now have a unified management plane with a single design language for $63 billion of revenue.”</sub>
- Patel directly credits design as a major contributor to Cisco's ~$320B market cap gain over two years, making the financial case design leaders often fail to articulate.  
  <sub>“we've added about 320 billion to the market cap. I don't think that was completely because of things other than design.”</sub>
- Scaling design culture means making everyone think like a designer (engineering, PM, and design as 'equal legs to the stool') because taste can't be outsourced—and as code gets automated, taste becomes the bottleneck.  
  <sub>“you can't outsource taste and especially as you start building code automatically uh the bottleneck becomes taste”</sub>
- Contrarian AI take: more automation creates MORE design jobs, not fewer, because human judgment/taste becomes the scarce bottleneck. Tools like Figma Make democratize design to PMs and engineers, making designers more valuable.  
  <sub>“I think you're going to have more jobs in the future because of AI because the human bottlenecks are actually getting to be far more profound”</sub>
- Craft-as-leadership: a leader shows up to the most important reviews to signal care, which cascades through the org. Practical 'tells' for evaluating a company: dark mode by default and typography (he praised Anthropic's unconventional serif UI).  
  <sub>“what I really had liked about Anthropic when they started was they had used um serif fonts in such a different way”</sub>
- If your boss doesn't value design and can't be coached, leave—the best bosses have 'strong opinion, but loosely held.' Bad design costs the same effort as good design.  
  <sub>“it takes the same amount of effort to design a bad product than it does to design a good product”</sub>

#### How Codex is rewriting the product playbook
*Alexander Embiricos (Head of Enterprise, OpenAI), Kris Rasmussen (Chief Technology Officer, Figma)  ·  📄 abstract only*

> A fireside chat where OpenAI's Codex product lead traces how the tool evolved from early decisions to real-world deployment, and what it reveals about AI reshaping how product, design, and engineering teams build.

- Codex's evolution is told through its product decisions: from early choices about what to build to lessons learned deploying it in real-world settings. *(from abstract)*
- Codex is positioned as one of the most influential AI products on the market, and the talk shares the broader product vision behind it. *(from abstract)*
- AI tools like Codex are reframed as transforming team workflows across product, design, and engineering together, not just aiding individual coders. *(from abstract)*
- The conversation looks ahead to what Codex signals about the future of building software in an AI-driven era. *(from abstract)*

#### How design makes change legible
*Collin Whitehead (VP of Design , Superhuman)  ·  📄 abstract only*

> Design is uniquely positioned to create coherence amid rapid AI-era product launches, and design leaders should expand from managing craft to shaping strategy.

- Shipping agents, products, and features at unprecedented speed erodes clarity for both teams and users, making coherence harder to maintain. *(from abstract)*
- Design is uniquely positioned to create coherence across brands, teams, and experiences, drawing on lessons from scaling Superhuman and integrating new products into the business. *(from abstract)*
- Design leaders should expand their role from managing craft to shaping strategy. *(from abstract)*

#### The next era of product building: Designing the workflows of the future
*Yuhki Yamashita (Chief Product Officer, Figma), Kris Rasmussen (Chief Technology Officer, Figma), Loredana Crisan (Chief Design Officer, Figma)  ·  📄 abstract only*

> Three Figma leaders discuss how AI is reshaping the way products are imagined, designed, and built, and what stays essential as those workflows evolve.

- AI is changing the workflows behind software creation as fast as it is changing the products themselves, pushing teams toward new ways of working across the imagine-design-build cycle. *(from abstract)*
- The conversation pairs cross-functional leadership perspectives (product, engineering, and design) to examine how teams are adapting their collaboration and processes to these shifts. *(from abstract)*
- Alongside what is changing, the panel emphasizes identifying what remains essential and enduring as the next generation of product creation takes shape. *(from abstract)*

#### Designing for agents: rethinking the role of the interface
*Rachel Been (SVP of Design, Expedia), Charlie Sutton (Chief Design Officer, Atlassian), Yuhki Yamashita (Chief Product Officer, Figma)  ·  📄 abstract only*

> Design leaders from B2B and consumer companies discuss how the rise of AI agents is reshaping the role of the interface and what it takes to design agent-driven experiences people trust.

- As AI agents increasingly act on users' behalf, design is moving beyond traditional interfaces toward systems that mediate and delegate user intent. *(from abstract)*
- Designing agent-driven experiences brings emerging patterns, challenges, and opportunities that differ across B2B and consumer contexts. *(from abstract)*
- A central goal is building products people understand and feel confident using, making user trust and comprehension key design concerns in agentic experiences. *(from abstract)*

### Leadership Collective Deep Dives

#### Trust as a through line
*Thomas Vidal (VP Product Design , Accor), Deidre Kolarick (Managing Vice President, Head of Design for Bank, Business, and Card, Capital One), Katie Szeto (Manager, Product Management, Figma)  ·  📝 transcript*

> Trust is a core, measurable product requirement that AI can amplify but never replace — and the deciding question is not whether AI can do something, but whether it should.

- Capital One's debit-card mass reissuance (migrating customers onto the acquired Discover payment network) treated trust as design: early/progressive 'no surprises' communication, a card shipment tracker, a centralized place to update recurring charges, and behavior-segmented nudges. Service call volume came in lower than prior reissuances.  
  <sub>“The call rate volume was lower than it had been for previous reissuances and therefore like well exceeded our expectations”</sub>
- Accor gates AI by the intensity of the emotional signal: low-intensity tasks (booking a stay, comparing hotels, finding loyalty info) go to AI for efficiency, while high-emotion or personal moments are routed to the human hotelier (autelier) instead.  
  <sub>“the question is not only can AI do it, but should AI do it?”</sub>
- Users don't actually want full transparency into when AI is handling them; they want to feel in control and get issues resolved fast, plus an escape hatch for higher-stakes moments like managing a deceased family member's estate.  
  <sub>“people actually don't necessarily want to know all the details of what's going on behind the scenes. They do want to feel like they are in control”</sub>
- Accor governs AI behavior like a design system, with a dedicated AI product/content design team and layered rules: 'golden rules' (e.g. guests want to be 'known but not watching'), error and human-escalation rules, and a per-brand tone of voice across its 40+ brands.  
  <sub>“we did the same with design system 10 years ago... now we want when we need to do the same for AI behavior”</sub>
- Being able to ship code yourself collapses the old MVP-vs-fast-follow fights: polish trade-offs that used to get heavily litigated over cost are now largely eliminated, freeing teams to fix neglected critical journeys.  
  <sub>“those conversations are gone cuz she can just ship code. I can just ship code... a lot of those core trade-offs have been eliminated”</sub>
- AI lets designers run lean 'commando teams' and shift toward judgment and business value; Accor shipped its ChatGPT app in January with only three people: one PM, one designer, one data scientist.  
  <sub>“we ship our ChatGPT app in January with only three people”</sub>

#### Navigating the age of agentic computing
*Hector Ouilhet Olmos (VP of Design, AWS Applied AI Solutions, Amazon), Shani Taylor (VP, Customer Experience & Solutions, Figma)  ·  📝 transcript*

> AI feels artificial because we cram fluid intelligence into tool-shaped boxes; the fix is "humanism"—designing AI to mimic how colleagues collaborate, not how office objects look, turning interaction design into relationship design.

- Skeuomorphism (mimicking office objects) is the wrong metaphor for AI; AI is a colleague, not a desk, so we should mimic the dynamics of people instead of the physics of objects.  
  <sub>“a desktop is not the right metaphor for AI. AI is not a desk... It's a colleague.”</sub>
- Concrete UI pattern: an agent that watches your behavior and 'leans in' like a cubicle neighbor; when your cursor goes still or wavers between options it surfaces help unprompted, and shaking the cursor dismisses it.  
  <sub>“your cursor goes still. Your teammate noticed and gently leans into your space... If you're busy, you shake your cursor, it goes away.”</sub>
- The unit of AI design is a relationship built from repeated micro-moments of reading and adjusting to each other, which compounds trust over time, so it's relationship design, not interaction design, and can't ship in one release.  
  <sub>“we're not doing interaction design anymore. We're doing relationship design.”</sub>
- Counter to the remove-friction orthodoxy, deliberately adding friction can build trust and business value: a 'say it back to me' pattern in Amazon Connect Health significantly cut appointment cancellations.  
  <sub>“the number of cancellation we have decreased significantly because now people are on the same page.”</sub>
- When the interface IS the agent (not the tool), the design seat expands; Amazon's team now goes idea-to-prod end to end, freeing designers to assert what's meaningful rather than police drop shadows.  
  <sub>“we're able to now do the whole thing end to end. From idea to build it, to test it, to ship it to prod.”</sub>
- Freeing humans from being 'human API endpoints' (input-task-output tool operators) lets them reclaim higher-order work like taste and judgment, which his AI reframed, from his own writing, as 'the autobiography of your attention.'.  
  <sub>“Taste, according to what you've been writing, is like the autobiography of your attention.”</sub>

#### Design leadership in the age of acceleration
*Jen Dunnam (VP, Design, (Formerly) Patreon), Pedro Hernandez (Advocacy Manager, Figma)  ·  📄 abstract only*

> Two design VPs discuss how to build resilient design organizations that move fast under accelerating product demands without sacrificing craft, clarity, or creative foundations.

- Design leaders face a constant tension between moving fast and preserving clarity, quality, and creative foundations as product development accelerates and craft expectations rise. *(from abstract)*
- Building resilient design organizations depends on partnering effectively with product and engineering leadership. *(from abstract)*
- Systems, rituals, and principles are what let a design org hold up under pressure, and thoughtful process can extend to supporting healthy, lasting creator communities. *(from abstract)*

#### From idea to production: bridging design systems and code with AI
*Abdullah Alkhatib (Principal Designer, Mercari, Inc.), Motoki Narita (VP of Product Engineering (Marketplace), Mercari, Inc.), Marcel Weekes (VP, Product Engineering, Figma)  ·  📄 abstract only*

> The Mercari team shows how connecting AI-generated UI to design system components turns throwaway prototypes into production-ready code, doubling development speed while improving quality.

- AI can convert ideas, sketches, and screenshots into UI, but without a design system that output stays at the prototype stage rather than becoming shippable code. *(from abstract)*
- The key move is linking AI-generated output to existing design system components, which is what makes the resulting code real and production-ready. *(from abstract)*
- Mercari reports concrete results from these AI-to-design-system workflows: roughly doubled development speed alongside improved quality. *(from abstract)*

#### Designing at the pace of model drops
*Rodrigo Lemes (Ux Principal and OPS director, Mercado Livre), Paige Costello (VP Product, Figma)  ·  📄 abstract only*

> How Mercado Libre keeps a 1,500-strong design org curious, autonomous, and unafraid to fail as AI reshapes design tools almost weekly.

- Sustaining a risk-tolerant, mistake-friendly culture is hard at scale: Mercado Libre embeds it across 1,500+ designers within a 30,000-person product/design/engineering org spanning many countries, languages, and cultures. *(from abstract)*
- The rapid pace of AI tooling raises the stakes for how a large org adapts; turning stated company values into everyday design practice is the mechanism for keeping teams autonomous and willing to be wrong. *(from abstract)*
- Framed as a leadership conversation between a Mercado Libre principal designer and a Figma VP, the talk focuses on org-level practices for keeping a big distributed team curious and able to take risks rather than on specific tools or features. *(from abstract)*

#### In defense of radical naivete
*Archie Lee Coates IV (Co-Founder, PLAYLAB, INC.), Damien Correll (VP, Brand Studio, Figma)  ·  📄 abstract only*

> A fireside conversation on how "radical naivete"—questioning assumptions and approaching familiar problems with fresh, first-principles eyes—can unlock creative breakthroughs for leaders facing new paradigms.

- Radical naivete is framed as a deliberate creative practice: questioning assumptions, challenging conventions, and approaching familiar problems with fresh eyes rather than inherited expertise. *(from abstract)*
- Working from first principles and crossing disciplines—drawing on PlayLab's work across brands, institutions, and cultural experiences—is positioned as a path to unexpected breakthroughs. *(from abstract)*
- The approach is pitched as especially relevant for leaders navigating new problems and paradigms, where prior playbooks may not apply. *(from abstract)*

#### Digitizing the public sector
*Sau Sheong Chang (DCE (Products) & CTO, GovTech), Marcel Weekes (VP, Product Engineering, Figma)  ·  📄 abstract only*

> A GovTech leader shares how design, technology, and systems thinking combine to modernize public institutions, and what private-sector leaders can take from designing services for everyone.

- Modernizing government institutions requires integrating design, technology, and systems thinking rather than treating them as separate disciplines. *(from abstract)*
- Designing public services means designing for everyone, an inclusivity constraint that private-sector leaders can learn from. *(from abstract)*
- Lessons are drawn from hands-on experience building real government digital services, not abstract theory. *(from abstract)*

### Leadership Collective Peer Exchange

#### How to build an AI-native org
*Anique Drumright (Chief Product Officer, Harvey), Christina Nguyen White (VP, Design, Harvey), Gui Seiz (Design, Director, Figma)  ·  📄 abstract only*

> A facilitated peer roundtable with Harvey's product and design leaders on how AI is reshaping product development and dissolving the line between design and product in an AI-native organization.

- AI is blurring the boundary between design and product, pushing teams to rethink how the two disciplines collaborate and where their responsibilities begin and end. *(from abstract)*
- Building an AI-native org means evolving org structures and changing hiring dynamics rather than bolting AI onto existing roles. *(from abstract)*
- When anyone can create, leadership must reconsider what differentiated value designers and product people provide and how teams are composed. *(from abstract)*

#### Applied Insights: the state of AI and design (Option 1)
*Andrew Hogan (Head of Insights, Figma), Shane Johnston (Researcher, Figma), Christa Simon (Manager, Research, Figma)  ·  📄 abstract only*

> Figma's research team shares findings from their 2026 AI report, tracing three years of AI trends in design to reveal where impact is accelerating, how investment is shifting, and what is actually changing about how teams work.

- The talk draws on Figma's newly-released 2026 AI report, synthesizing three years of trend data on where AI's impact on design and product work is accelerating versus stalling. *(from abstract)*
- It examines how investment in AI is shifting over time, signaling which bets and tools are gaining traction across teams. *(from abstract)*
- A central focus is what is actually changing about how teams collaborate and work together, not just individual tool adoption. *(from abstract)*
- Framed as an interactive peer exchange, the session invites leaders to react, compare their own experiences, and pressure-test which AI practices are genuinely sticking in real-world use. *(from abstract)*

#### Applied Insights: shifting roles in product building
*Matt Walker (Researcher, Figma), Mike Blight (Manager, Research, Figma)  ·  📄 abstract only*

> Figma's research team runs an interactive session on how responsibilities across design, product, and engineering are blurring, and what that shift means for how teams work today.

- Roles across design, product, and engineering are converging rather than staying in fixed lanes, and teams need to reckon with where responsibilities now overlap. *(from abstract)*
- The session is framed around applied research insights, grounding the discussion of role shifts in what Figma's research team is observing rather than abstract speculation. *(from abstract)*
- The format is interactive and practitioner-focused, aimed at helping leaders translate these shifts into concrete changes in how their teams operate now. *(from abstract)*

### Level 2 Stage

#### Scooter, screen and duct-tape: from hack to habit
*Unni Krishnan Manikoth (Digital Experience Lead, Ather Energy ), Harish Kumar (Product Designer, Ather Energy )  ·  📄 abstract only*

> Designers at Ather Energy built their own tools from Arduinos, iPads, and Figma, turning scrappy hacks into repeatable habits that validate ideas, win over stakeholders, and ship real-world experiences faster.

- When the right tool doesn't exist, building your own from cheap hardware (Arduinos, iPads) plus Figma can unlock design work that off-the-shelf software can't. *(from abstract)*
- Scrappy experimentation and going 'outside the design loop' helps validate ideas faster and build conviction before heavy investment. *(from abstract)*
- Hacks can become durable team habits, and prototyping with real hardware helps influence stakeholders and create magical real-world (physical product) experiences. *(from abstract)*

#### Beyond design systems: designing for robots and seniors
*Anna Oh (Head of Product and Design, Norbert Health)  ·  📝 transcript*

> Building physical AI for nursing-home seniors, Norbert Health learned that a teddy-bear face and a four-part "human system" — not the model or the form factor — are what get patients to open the door.

- A teddy-bear face beat every alternative across 6 rounds of testing with 40+ patients; once added, patients renamed the robot 'Norbert' and responded to it as familiar, clear, and warm.  
  <sub>“The teddy bear won every single round.”</sub>
- Taste should be defined by the people you serve, not the design community — the speaker disliked the teddy bear aesthetically but it connected with patients.  
  <sub>“Taste does not come from the design community. Taste come from the people you are responsible for.”</sub>
- She introduces a 'human system' framework with four patterns for physical AI: recognition (identity), perception (shared reality), expression (emotional connection), and continuity (long-term relationship).  
  <sub>“Recognition creates identity. Perception creates shared reality. Expression creates emotional connection. Continuity creates long-term relationship.”</sub>
- The demographic stakes: by 2030 over a billion people will be over 65, outnumbering children under 10; in many facilities one nurse cares for 40 patients per shift — a crisis of presence, not technology.  
  <sub>“By 2030, more than a billion people will be over 65. For the first time in human history, they will outnumber children under 10.”</sub>
- The human system is the foundation technology depends on, not a soft add-on: 98% of patients accept Norbert, and without acceptance there is no data to collect.  
  <sub>“98% of a patients accept Norbert. Without acceptance, there is a no data and the no measurement.”</sub>
- Real-world physical AI is far messier than demos — the model misidentified a bloody TV face, sanitizing wipes, and chairs as patients, so most team time went to teaching the model what is NOT a face.  
  <sub>“Model look impressive in demos, but solving real-world challenges in high-stake environment like nursing home, that is another story.”</sub>

#### Figma meets hardware: prototyping for the physical world
*Frederik Ueberschär (Senior Designer for Creative Technology, Electrolux), Sam Thorne (Senior Principal Designer for Creative Technology, Electrolux)  ·  📄 abstract only*

> Electrolux's creative-technology team extended Figma onto real appliance hardware via "Figma Displays," collapsing their physical prototyping feedback loop from six months to two minutes.

- Built "Figma Displays" from off-the-shelf electronics to live-stream Figma prototypes onto production-accurate appliance screens, bridging the digital-physical gap. *(from abstract)*
- The new process shrank the prototype feedback loop from roughly six months to about two minutes, fundamentally revamping their hardware design workflow. *(from abstract)*
- Figma is used as the design environment for next-generation home appliances, with the canvas extended directly into the physical product. *(from abstract)*
- Framed as a replicable approach: encouraging designers to find their own ways to connect the digital canvas to physical devices around them. *(from abstract)*

#### Be the director: how stage craft informs product craft
*Kim Beverett (Product Manager, OpenAI)  ·  📄 abstract only*

> Product craft is a directing discipline: treat the screen as a stage and the user as the audience, making intentional choices and defining your product's non-negotiable spine.

- Frame product design as theatrical direction: the screen is the stage and the user is the audience, so designers should make deliberate, intentional choices about what the audience experiences. *(from abstract)*
- Define the non-negotiables in your 'script' and find the product's spine: a core throughline that anchors decisions and keeps the experience coherent. *(from abstract)*
- Adopt a 'the show must go on' mindset toward shipping and resilience: products must perform reliably for the audience despite constraints and imperfections. *(from abstract)*

#### Skill issue: how we built an OS for PMs at Figma
*Jinen Kamdar (Product Lead, Figma), Lawrence Luk (Product Technical Program Manager, Figma)  ·  📝 transcript*

> Figma's PM team built "PMOS," a GitHub-hosted set of AI skills that unifies fragmented tools, automates glue work, and reached 100% adoption of the product org in roughly a month.

- Every skill is built on three reusable building blocks (context, profile, experience) abstracted into shared files so any new skill inherits org knowledge and good UX cheaply.  
  <sub>“there were three fundamental building blocks to making any skill for this type of project really valuable. Those are context, profile, and experience”</sub>
- Start with one narrow use case and iterate the prompt rather than designing the whole system; their first 'What's up' digest improved by specifying channels, key people, max 5 bullets, and sources.  
  <sub>“Use a maximum of five bullets. Always include sources. Prioritize the items that seem like they're action items for me”</sub>
- Three starter 'apps' anchored adoption: a What's Up daily digest, a weekly-update writer that drafts in your voice with one-click publish, and a spec reviewer that gives a report-card rating sections red/yellow.  
  <sub>“it'll actually write your update based on your GitHub contributions, what you're doing on Slack, what you've done in Asana... And then there's one click to publish it”</sub>
- Adoption stalled at 25% from self-serve setup; they 'became forward deployed engineers,' kept a friction log iterated 10+ times, then hijacked a team offsite as a hackathon to hit 100% of the product org.  
  <sub>“you have to become a forward deployed engineer at your own company”</sub>
- Mature workflows chain multiple skills/MCPs (Slack scout, Hex experiment review, GitHub codebase insight, Figma FigJam builder) to prep a product review and save ~2 hours, leaving humans to debate.  
  <sub>“she probably saved at least two hours of her own time... the side-by-side discussion, the riffing, and the debate between real people”</sub>
- The framing opinion: there is no AI skill gap because the tech is so new; success came from passionate volunteers, executive sponsorship, and a tight one-month deadline as creative constraint.  
  <sub>“the technology is so nascent that I don't think there's a skill gap or a skill issue at all”</sub>

#### From handoffs to upstream
*Frederick Andersen (Founder, EDL )  ·  📄 abstract only*

> How design studio EDL deliberately moved from delivering handoffs to owning design systems in code and operating upstream of clients' engineering teams.

- EDL repositioned a design studio to push directly to clients' Git repos and run their design systems in code rather than handing off static files to engineers. *(from abstract)*
- The shift was framed as an intentional strategic bet on a person and a new idea of what a studio could own, not an accidental evolution. *(from abstract)*
- The talk lays out a concrete playbook: spotting the opportunity, the team rituals that operationalized it, and the metrics used to prove it worked. *(from abstract)*
- Aimed at design leaders weighing whether their own teams could move upstream of engineering in the same way. *(from abstract)*

#### The metacognitive design loop
*Jenny Au (Team Lead, UX QA Engineering, Epsilon/Publicis Groupe), Mike Green (Team Lead, Product Design, Epsilon/Publicis Groupe)  ·  📄 abstract only*

> How Epsilon's product design team fused Figma Code Connect, the Figma MCP, and generative AI layout creation with their CORE UI component library to dramatically accelerate the path from design to production.

- Combining Figma's Code Connect and MCP with a maintained design system (their CORE UI components) lets generative AI produce front-end layouts that map to real, production-ready components rather than throwaway markup. *(from abstract)*
- Anchoring AI generation to an established component library was the lever for transforming front-end development and reaching unusually high development velocity. *(from abstract)*
- The team reports compressing the design-to-production handoff, shipping product faster than their prior workflow allowed. *(from abstract)*

#### Your best practices are trapped in your head—and your AI has no idea
*Harald Kirschner (Principal Product Manager, Microsoft)  ·  📄 abstract only*

> Your hard-won design taste—tone of voice, component principles, your definition of "done"—is invisible to AI, and this talk shows how to build a shared knowledge layer so AI can assist with specs, prototypes, and design systems without you re-explaining yourself every session.

- The taste designers build over years (tone of voice, component principles, a definition of "done") currently lives only in their heads or scattered docs that their tools can't access. *(from abstract)*
- AI sessions repeatedly start from scratch because this implicit design context is invisible to the tools, forcing designers to repeat themselves. *(from abstract)*
- The proposed fix is a shared knowledge layer that captures and connects that context so AI can meaningfully help across specs, prototypes, and design systems. *(from abstract)*

#### The invisible mechanisms in your interfaces
*Johannes Mutter (Design Engineer, mutter.co)  ·  📝 transcript*

> Interfaces have no shared pattern language, so the durable design skill is noticing, naming, and remixing invisible UI mechanisms — because in an AI era you can't prompt what you can't name.

- A four-step method for studying interfaces — see it, notice it, name it, link it, then steal it — replaces frictionless bookmarking, which feels done but produces no understanding.  
  <sub>“You see it... And then you notice it... you name it... you link it... after that, what I do is I steal it.”</sub>
- Naming a pattern unlocks its whole family: 'cursor affinity' (Bike editor's tiny pixel cursor tail) descends from Xerox Star's I-beam and Jeff Raskin's work — nobody starts from zero.  
  <sub>“Originality is recognition, not invention. All design is redesign.”</sub>
- Move 1 — make invisible state visible with a one-pixel signal (unsaved-dot, iChat thinking clouds, signal bars) rather than sprouting a separate spinner.  
  <sub>“The state and the affordance are the same pixel.”</sub>
- Move 2 — forgive imprecise input: maximize hit boxes (not visible surface), use the Mac menu 'safety triangle', snapping, and keyboard hit-box growth so software absorbs the slop.  
  <sub>“never make the user absorb the slop”</sub>
- Move 3 — reveal hidden actions progressively (@ = noun, / = verb, markdown = pure recall) and reuse a mechanism by re-scoping it: swipe-on-item rotated 90 degrees to the list container becomes pull-to-refresh.  
  <sub>“The same gesture just rotated, re-scoped.”</sub>
- In an AI era where machines generate a thousand versions, vocabulary is the bottleneck on expression; his interfacelineage.com library exists to supply those names.  
  <sub>“you cannot prompt what you can't name”</sub>

#### Dense by design
*Matthew Ström-Awn (Founder,  mu.design)  ·  📝 transcript*

> UI "density" isn't about cramming in pixels — it's value density: the value users extract divided by the time and space you ask of them.

- Density has five distinct meanings, and conflating them causes muddled design arguments — visual, information, meaning, time, and value density form a 'ladder' of increasing sophistication.  
  <sub>“We're going to climb the ladder of understanding rung by rung. Five different definitions of density.”</sub>
- The core framework: value density = the value users get divided by the time and space you ask them to spend — 'value per second per pixel.'.  
  <sub>“value density equals the amount of value that your users are getting from what you've designed divided by the amount of time and space”</sub>
- Use concrete time thresholds to design perceived speed: under 100ms do it instantly (no animation), 100ms-10s show transitions, toward 10s show a spinner, 10s-1min show a progress bar, past 1min let users leave and notify them.  
  <sub>“if have anything in your interface that takes less than 100 milliseconds, don't have an animation... Just do it instantly”</sub>
- Arranging information (not adding it) communicates meaning — Gestalt principles like proximity, similarity, and common region increase understanding without adding pixels, as shown by the red/gray dot counting demo.  
  <sub>“I didn't add information to the screen... I just rearranged the information on the screen.”</sub>
- Density is relative to the viewer — Stripe can't just copy the Bloomberg Terminal because Bloomberg is for stockbrokers while Stripe serves startups and store owners; an ugly, dense ECG is the difference between a doctor saving a life or not.  
  <sub>“Density isn't fixed. It depends on who's looking at it.”</sub>
- Strong opinion: the field over-discusses craft instead of practicing it — the answers (Tufte, Gestalt, HCI research) already exist, so designers should stop talking and ship.  
  <sub>“I don't think we have a craft problem. I think we have a problem of talking about craft too much.”</sub>

#### Usernames on Instagram: how a craft fix became an identity crisis
*Rose McManus (Content Designer, Instagram (Meta))  ·  📝 transcript*

> A seemingly trivial username-vs-display-name craft fix on Instagram became a meditation on identity, using Baudrillard's theory of simulation to argue usernames have become as 'real' as users' given names.

- The trigger was a real craft bug: Instagram's story viewer list showed display names instead of usernames, letting spam accounts use capitals and emojis to rise to the top of the list.  
  <sub>“our story viewer list was showing display names rather than usernames, which allowed an account with maybe a meaningless username to add capital letters”</sub>
- Most peer platforms lean on display names (TikTok, Snapchat), while Twitter uses both and Instagram used both inconsistently, raising whether Instagram should adopt a completely different naming convention.  
  <sub>“TikTok uses display names or custom names throughout their interface... You really only see someone's username on TikTok when you go to their profile”</sub>
- She used Baudrillard's four-step theory of simulation (representation, distortion, masked absence, full hyperreality) as a framework to evaluate which name field is 'more real.'.  
  <sub>“Baudrillard's theory unfurls in four steps. The first step being a representation of reality, step zero being reality”</sub>
- Research shows users overwhelmingly abstract their names in usernames: a TikTok study found only 15% of Nigerian users had their real name in the handle while 40% added markers like 'real' or 'official.'.  
  <sub>“15% of Nigerian users have their actual name in their TikTok username, while 40% have some kind of authenticity marker, such as real or official”</sub>
- Usernames can become 'hyperreal' identities more real than legal names: the dril account is known as Drill rather than the man named Paul who runs it, and handles like Young Kombucha 420 become creator brands users are attached to.  
  <sub>“Drill is as real as Drill gets in this hyperreal simulation”</sub>
- Practical framework for product leaders: ask what users are investing (identity? livelihood?), what behavior you're enabling beyond current imagination, and what happens at massive scale before changing load-bearing patterns.  
  <sub>“what happens when this scales 10 times or a thousand times or 3 billion times?”</sub>

#### The future is low-tech: lessons from the early 2000s
*Jésabel DC (Tech Anthropologist & EdTech Founder, The Lifestyle Lab )  ·  📝 transcript*

> A tech anthropologist argues the early-2000s internet felt better-designed not because designers were nobler but because the ad-driven engagement business model didn't yet exist — and uses four nostalgic artifacts (LEGO instructions, loading bars, Pokemon, Animal Crossing) to teach how to build "low-tech" products that return users to their lives.

- The root cause of worsening UX isn't unethical designers but the ad/engagement business model — design changed when monetization changed, turning users from a relationship into a resource to be extracted.  
  <sub>“when the business model changed, the design changed with it”</sub>
- Lesson 1 (LEGO instructions): if a product needs explanation, redesign it rather than piling on tooltips and help centers — the strongest products teach through the experience itself.  
  <sub>“If it requires an explanation, it needs a redesign”</sub>
- Lesson 2 (loading bars): orientation cues answer four nervous-system questions — Where am I? What's happening? Can I interact? Did my action work? — and disorientation creates dependency while orientation creates trust.  
  <sub>“Disorientation creates dependency. Orientation creates trust.”</sub>
- Lesson 3 (Pokemon): technology should extend digital experiences into real-world action rather than substitute for them; cited Strava users tracing 'Strava art' routes and Tinder's March move to in-person events.  
  <sub>“Technology should activate reality, not replace it”</sub>
- Lesson 4 (Animal Crossing): products built with an 'anxious attachment style' use fear to retain users, while 'secure attachment' design trusts users to return — Nintendo could design natural stopping points because they were paid up front, not per engagement.  
  <sub>“instead of designing for retention, they were free to design for anticipation”</sub>
- Align the business model with user success so serving users becomes survival — the Lifestyle Lab monetizes institutions that benefit from user growth (schools, workplaces) rather than extracting from users; cited Pinterest's 'reason to go offline' campaign and Time Left's subscription model.  
  <sub>“Our business model decides what our product is free to become”</sub>

#### Everyone's still eating: building Notion's design system
*Tamara Chu (Design Engineer, Notion), Shauna Sapper (Software Engineer, Notion)  ·  📝 transcript*

> How Notion's tiny design-system team retrofitted a system onto a sprawling, CSS-less codebase — leaning on AI agents for mechanical migrations while using unavoidable "ratcheting" guardrails to enforce the rules on humans and bots alike.

- A design system is fundamentally a set of shared decisions, not a component library — the hard part is making and enforcing the decisions, not the buttons.  
  <sub>“what a design system really is at its core, which is just a set of shared decisions”</sub>
- Notion's app uses no CSS — styling was plain JavaScript objects set as inline styles everywhere, so basics like pseudo-classes/:hover were impossible until they migrated colors to CSS variables over a 56-part run.  
  <sub>“we don't really use CSS... What's a colon hover? Never heard of her.”</sub>
- AI agents excel at mechanical migrations (write plans in Notion, execute, type-check) but fail at perceptual/craft work like matching old-to-new colors or spotting icon view-box differences.  
  <sub>“the agents struggled with more delicate work like comparing our old colors to new colors, even when we tried fancy formulas”</sub>
- Concrete migration scale: thousands of icons hand-drawn by one person (Paul), 529 icons used only once, and they replaced every single icon in the web app.  
  <sub>“we had 529 icons that were only used once somewhere in the app”</sub>
- They visually verified mass agent-driven changes with Meticulous, which records real dev-environment activity and surfaces before/after/diff regressions on PRs, cutting manual checking dramatically.  
  <sub>“if I remove and change or change a single icon, I can view diffs in flows that I didn't trigger myself”</sub>
- Enforcement falls on a spectrum from ignorable (docs, lint squiggles) to unavoidable (PR blockers); their favorite is 'ratcheting' — tracking pattern usages so the count can only go down, enforced by bot Doug. Agents will route around soft rules (one hard-coded a style via a ref), so make the right way the easy way.  
  <sub>“our favorite is called ratcheting. It's like mega linting... that number can only go down like a ratchet strap”</sub>

#### Preparing Rocket for the AI era
*Emily Strobl (Director, Product Design - AI & Design Systems, Rocket), Will Hobick (Design Engineering Lead, Rocket)  ·  📝 transcript*

> Rocket shows how embedding Figma's full ecosystem (tokens, Code Connect, MCP, Make, drift-checking) across the product life cycle lets a 40-year-old company ship AI-native home-buying experiences 5x faster — with a $1B incremental monthly origination increase in Q1 2026 to prove it.

- AI-native transformation depends on a solid foundation layer, not just tool access: semantic tokens whose names encode intent, Nova components annotated for dev requirements/states/content, and Code Connect so the Figma MCP can read each component's implementation code.  
  <sub>“The hardest part of going AI native isn't getting access to the tools. It's making sure the tools have something solid to build on.”</sub>
- They demoed a full PRD-to-handoff loop on one pre-approval-letter component: prototype A/B (blue vs. green) variants in Figma Make (a shared internal AI-chat prototype with a node editor), embed live UserTesting research results on the canvas, then pick the winner (the green variant).  
  <sub>“we copied both of these components, and we pasted them in chat, and then asked the AI agent to add this component to the chat flow editor as a new node”</sub>
- They use Figma's new design-system drift check ('check designs') to catch detached colors, contrast failures, and detached dimensions before handoff — critical at their scale of accessibility responsibility.  
  <sub>“we have a text fill that actually is not meeting contrast standards for accessibility. Super important again when you're serving one in six Americans”</sub>
- A custom skill structures the MCP-driven build so the agent doesn't do everything at once: an initial draft first, then adjustments per annotations, then a final pass swapping classes/utilities for the design system — managing context deliberately.  
  <sub>“first start by implementing an initial draft of the component, then take a look at the annotations and make adjustments”</sub>
- A separate skill closes the loop with Playwright: it screenshots the Storybook implementation and the Figma design, then compares both code and visual to verify the build matches the source of truth.  
  <sub>“this skill uses Playwright to pull up Storybook, take a screenshot of the component, and then we also do the same with Figma, and compare the code”</sub>
- Concrete business outcomes: shipping 5x faster than two years ago, and faster experimentation drove a $1B incremental monthly origination volume increase in Q1 2026 — framed against the stat that 65% of Gen Z buyers cried during the process.  
  <sub>“led to a $1 billion incremental monthly origination volume increase in Q1 of 2026 alone”</sub>

#### Designed to be read: making a system AI can actually use
*Harvey Whiting (Product Designer, Meta)  ·  📝 transcript*

> Meta and Figma fought AI design "slop" by treating quality as a context problem—codeveloping MCP to deliver their design system as structured context, skills, and agents so AI output can hit a production bar at scale.

- AI design tools fail in three repeatable ways regardless of model or tool: low fidelity (wrong typography, inconsistent color, malformed/missing components), low repeatability (same prompt yields a different result each time), and context collapse as complexity grows (a single form is fine, a full Ads Manager experience falls off a cliff). This creates an adoption barrier because designers reject any tool where speed costs quality.  
  <sub>“Designers will not use a tool where speed comes at the cost of quality. Just to reiterate, designers will not use a tool where speed comes at the cost of quality. They just won't.”</sub>
- They made evaluation scientific using 'golden sets' (large suites of test cases run repeatedly with metrics so you can re-prompt and isolate failures), plus a concrete quality goalpost: 80%+ high accuracy, where 'high accuracy' means perfect and every required component is used.  
  <sub>“If we can produce prototypes that at least 80% high accuracy, and by high accuracy I mean perfect. And if it utilized every single component”</sub>
- Iterating on pixel-exact components with strict usage guidelines captured inside a Figma Make template let the model learn from mistakes within a session and course correct, reaching 87% high-accuracy (production-ready, issue-free) output and clearing the pilot bar.  
  <sub>“That got us to the bar we'd set for our pilot. 87 80 7% in fact above where we'd set our bar.”</sub>
- Because manual feedback loops don't scale, they codeveloped MCP (Model Context Protocol) with Figma as a context delivery system capturing all design-system dimensions (color, type, spacing, components, documentation, content standards, illustrations), producing aligned output in one shot with no template.  
  <sub>“Design system aligned output straight off the bat, in one shot, without even needing a template.”</sub>
- The proposed industry path is a layered stack—context, then skills, then agents—where context is the non-negotiable foundation, because anything left unspecified gets randomized or defaulted to a web convention you never chose.  
  <sub>“anything that is not specified is randomized or aligns to some web convention that you didn't define”</sub>
- Three-item cheat sheet for teams: audit whether AI can consume your design system, embrace the feedback loop instead of expecting one-shot perfection, and get context and skills ready before agents arrive.  
  <sub>“Number one, audit your context... Number two, embrace the feedback loop... And lastly, prepare for agents.”</sub>

#### 300GB story: how to inspire action when data isn’t enough
*Luke Fiorante (Design Engineer, Harvard University), Sirinda Limsong (Product Designer, Harvard University)  ·  📄 abstract only*

> A Harvard design team shares how they turned a hard-to-grasp 300GB data point into a story that moved people to act, arguing that data alone rarely inspires change.

- Raw data and metrics (like a 300GB figure) often fail to drive action on their own; the talk centers on bridging the gap between having data and inspiring people to do something with it. *(from abstract)*
- The session is framed as a case study from Harvard University, drawing on the speakers' design-engineering and product-design work to show techniques for translating abstract numbers into a compelling narrative. *(from abstract)*
- It emphasizes storytelling and communication craft as the lever for motivating action, positioning narrative framing as the missing ingredient when data isn't enough. *(from abstract)*

#### The marathon designer: creative endurance beyond prompts and pixels
*Socrates Charisis (Founder & Designer, Quintessential)  ·  📄 abstract only*

> A framework for "creative endurance" that reframes burnout, stale process, and waiting for permission—not AI—as design's real threat, drawing on lessons from running a bootstrapped studio in Athens.

- The biggest threat to design isn't AI but burnout, pixel-pushing, doing things the old way, and waiting for permission; the proposed antidote is a framework for sustainable creative endurance. *(from abstract)*
- The framework rests on three core practices: sustainable pacing, builder culture, and versatile hiring. *(from abstract)*
- Lessons are grounded in the real experience of running a bootstrapped design studio in Athens, offering actionable systems for keeping creativity alive as tools keep changing. *(from abstract)*

#### Design systems anarchy
*Lauren LoPrete (Head of Design Foundations, Mercury)  ·  📄 abstract only*

> Borrowing punk's playbook, this talk argues design systems should abandon gatekeeping and compliance in favor of shared ethos, light infrastructure, and culture-driven adoption—especially now that AI has democratized the means of design production.

- Design systems teams have drifted into a 'cop' role, enforcing rules that product teams route around, and that compliance-based model is fundamentally broken. *(from abstract)*
- Quality in a design system comes from culture, not enforcement—success requires a shared ethos, basic shared infrastructure, and people who genuinely care, modeled on how punk and indie scenes self-organized. *(from abstract)*
- AI has handed designers the 'means of production,' killing the gatekeeping model; the new mandate is to nurture subcultures and communities rather than centrally manage and police a system. *(from abstract)*

### Mezzanine stage

#### Ready for the world
*Vicki Tan (Designer and Author)  ·  📝 transcript*

> A designer recounts making her decision-making book entirely in Figma, arguing that following your restless creative energy and using what you already have produces work that is "unmistakably yours."

- Naming a cognitive bias rarely changes behavior; people change when they can feel and place themselves in a lived story, not when the mechanism is explained to them.  
  <sub>“the book didn't need to teach cognitive bias on its face. It just needed to help people experience the lived applied wisdom”</sub>
- She designed and published her hardcover book entirely in Figma, built as a choose-your-own-adventure that routes a reader's stuck question through lenses of topic, subtopic, and timing.  
  <sub>“here's my book, designed completely in Figma... it's a choose-your-own-adventure”</sub>
- The 'denomination effect' breakthrough: big life decisions feel enormous while small recurring choices quietly add up — illustrated by structuring her time off around a self-reinforcing budget instead of a fixed timeline.  
  <sub>“we overweight large things and undervalue small recurring ones... the small everyday choice was what added up”</sub>
- Polished, professional illustrations and pro-designed covers were repeatedly rejected by the publisher for not matching her voice; her own unrefined work won because it was authentically hers.  
  <sub>“we went with my unrefined illustrations and my non-literary writing... it was unmistakably mine”</sub>
- Designers already hold the core writing skills — helping readers understand, connecting to what they care about, making the difficult easier — so a non-writer can still author a book using design thinking.  
  <sub>“making things uh difficult easier to understand, and that is all what design is”</sub>
- She structured the telling of her story on Kishotenketsu, a four-part form from classical Chinese poetry with no final resolution, rejecting the hero's journey in favor of change driven by internal noticing.  
  <sub>“unlike the hero's journey we usually get told, there's no point at which everything resolves and you're done”</sub>

#### Dimensional shift: sculpting in Figma Draw
*Josh McKenna (Independent Illustrator)  ·  📄 abstract only*

> Illustrator Josh McKenna recounts how learning Figma Draw pulled him out of creative block and shares a unified workflow that uses 2D vector effects to fake 3D depth.

- Learning a new tool (Figma Draw) functioned as a creative lifeline out of a career-stalling creative block, not just a technical upgrade. *(from abstract)*
- He demonstrates a unified Figma Draw workflow with practical techniques for using 2D vector effects to simulate 3D depth, bridging flat design and 3D. *(from abstract)*
- Adopting a beginner's mindset and becoming a student again keeps the brain 'porous' to new dimensions and approaches. *(from abstract)*

#### Out of sync, on purpose: desktop design after mobile won
*Giulio Fagiolini (Staff Designer, Spotify)  ·  📄 abstract only*

> How a small, focused team designs Spotify's desktop app by deliberately diverging from mobile—tailoring each feature to desktop's strengths as a space for deep focus, creation, and immersive listening.

- Features are interpreted for the platform rather than ported 1:1 from mobile; execution is tailored to desktop's distinct strengths. *(from abstract)*
- Desktop occupies a different role in people's routines than mobile—a companion for deep focus, creation, and immersive listening—which justifies a separate design approach. *(from abstract)*
- Being a small, deliberate team that is intentionally 'out of sync' with mobile turns rote consistency into genuine craft. *(from abstract)*

#### Writing for humans in an AI world
*Chelsea Larsson (Content Design, Anthropic)  ·  📄 abstract only*

> Content designers at Anthropic shape AI products not by writing the model's replies but by crafting everything around them—prompt starters, UI copy, feature names, and voice principles—to teach users how to collaborate with an interface that talks back.

- Content design for AI products centers on the 'frame' around the model—prompt starters, UI copy, feature names, and voice principles—rather than the generated responses themselves. *(from abstract)*
- When an interface understands natural language, the craft of content design shifts: the copy's job becomes teaching users to collaborate with the AI, not just operate a tool. *(from abstract)*
- The edges of the experience (surrounding UI and language) are where designers can set expectations and guide behavior for intelligence that responds dynamically. *(from abstract)*

#### Designing the product that can do anything
*Brian Ringley (Distinguished Product Manager & HRI Designer, Boston Dynamics)  ·  📄 abstract only*

> A Boston Dynamics product designer unpacks how to design an interface for a general-purpose humanoid robot that can theoretically do anything, spanning skill training, task authoring, and facility integration.

- Designing UX for a humanoid robot that can theoretically perform any task is framed as one of the era's hardest design problems, born from the collision of software, robotics, machine intelligence, and spatial computing. *(from abstract)*
- The design challenge breaks into three parts: training robots to develop skills, building application interfaces to author task behaviors, and integrating with facilities to monitor robot effectiveness. *(from abstract)*
- The end goal is realizing the vision of the software-defined factory, where robots are taught about the world and their performance is monitored at the facility level. *(from abstract)*

#### Prompts to fashion: AI-powered 3D-printed garments
*Danit Peleg (Founder, 3D-Printed Fashion Lab )  ·  📄 abstract only*

> Danit Peleg presents an AI-powered workflow that turns prompts and sewing patterns into full-size, soft 3D-printed garments using bio-based, zero-microplastic materials, demonstrated through a live reveal of three looks.

- An end-to-end workflow converts text prompts and sewing patterns into full-size soft 3D-printable textiles, using Weavy to design and a new printing process to produce wearable garments. *(from abstract)*
- The materials are bio-based and zero-microplastic, developed specifically for soft, wearable textiles, positioning the approach as zero-waste and on-demand. *(from abstract)*
- A live reveal of three looks demonstrates that fully digitized, circular, on-demand fashion is achievable with tools that already exist today. *(from abstract)*

#### The edge case is everyone
*Willie King (Business Development Manager, T-Mobile ), Lex Liley (Associate Director, Product Strategy, Kettle)  ·  📄 abstract only*

> T-Mobile and Kettle partnered with the Deaf and Hard of Hearing community to rethink phone-call communication, showing how designing for excluded users produces better experiences for everyone.

- Communication tech has historically been built for an able-bodied world, leaving the 11M+ Americans who are Deaf or Hard of Hearing facing barriers in something as basic as a phone call. *(from abstract)*
- T-Mobile and agency Kettle partnered directly with the DHH community to challenge baseline assumptions about voice communication rather than designing for them from the outside. *(from abstract)*
- The central thesis is that inclusive design is not a niche concern: solving the hardest accessibility challenges yields better experiences for all users, not just the edge case. *(from abstract)*

#### ESPN's migration playbook: the move to Figma with One North
*Elliott Muñoz (Creative Director, ESPN Creative Studio), Matt Rogers (Product Design Lead, One North)  ·  📄 abstract only*

> ESPN and agency partner One North recount migrating ESPN's broadcast graphics design system from Photoshop to Figma, and how that move reshaped collaboration, scaling, and workflow speed for both teams.

- ESPN's game-day broadcast graphics (scoreboards, player stats, matchup visuals) traditionally required a heavy manual lift to go from concept to live on air, motivating the tooling change. *(from abstract)*
- Migrating from Photoshop to Figma surfaced new ways to collaborate, scale, and accelerate the design workflow across the production pipeline. *(from abstract)*
- The talk frames migration as a journey from initial adoption through to transformative impact, with Figma pushing ESPN's design system to the next level. *(from abstract)*
- The relationship was bidirectional: ESPN's design system also raised the bar for One North's own practices and capabilities. *(from abstract)*

#### Reimagining NASA.gov to tell Earth’s most important stories
*Ben Shown (Head of Design, Blink UX), Megan Greco (Senior Design Lead, Greenlight)  ·  📄 abstract only*

> How Blink UX and Greenlight reimagined NASA.gov with a bold new web experience and the Horizon Design System to tell Earth's most important stories with clarity, cohesion, and style.

- NASA's digital presence was overhauled with a new web experience built on a purpose-built design system (Horizon) to deliver missions, breakthroughs, and cosmic stories with visual cohesion and craft. *(from abstract)*
- Designing a system that scales across NASA's vast content while staying inspiring required deliberate decisions about consistency and reuse at scale. *(from abstract)*
- Delivering a high-stakes redesign for a scientific institution hinged on stakeholder alignment and balancing ambitious vision against shipping velocity. *(from abstract)*

#### 10 years of daily sketching
*Zach Lieberman (Artist, MIT Media Lab)  ·  📄 abstract only*

> Zach Lieberman reflects on a decade of posting a daily code sketch, and what that everyday practice taught him about iteration, research, and creative freedom.

- A daily creative practice, sustained for ten years, began as a personal response to a hard year and became a durable discipline of making something every single day. *(from abstract)*
- Boredom is treated as a productive force rather than something to avoid, and structured iteration is what turns a daily constraint into sustained creative output. *(from abstract)*
- Having a deliberate structure for research feeds the daily work, and the ultimate payoff of the practice is finding creative freedom. *(from abstract)*

#### The world of street art and care-filled design
*Ella Rochelle-Lawton (Project & Program Manager, First Amendment)  ·  📝 transcript*

> A San Francisco public artist argues that street art's practices — designing for permanence, ongoing conversation, revisiting work, and community participation — are a blueprint for more inclusive, care-filled design in the AI era.

- Designing for public space forces a different mindset than pixels/print: permanence and unpredictability shift the questions designers ask toward people, place, and presence.  
  <sub>“There's a different relationship to permanence as you can't undo something as easily and you can't fully predict how something will be experienced.”</sub>
- Design actively includes or excludes — she contrasts welcoming community murals with the Tenderloin's hostile architecture (uncomfortable benches that deter unhoused people).  
  <sub>“our work can include or exclude, create belonging or remove it”</sub>
- Street art rejects the finished handoff model; artists return to clean, restore, and revamp — a prompt to revisit and adjust design work over time rather than ending at a clear endpoint.  
  <sub>“In street art, the work always continues. Artists come back to clean, restore, and revamp their work.”</sub>
- There is real evidence for public art's impact: Yale School of Medicine's evaluation of the Porchlight Mural Program found increased social cohesion, agency, neighborhood conditions, and safety, and decreased mental health stigma.  
  <sub>“it found increases in social cohesion, sense of agency, overall neighborhood conditions and aesthetics, and feelings of safety”</sub>
- Community members making the murals (not just viewing them) is what builds confidence and agency — the value is participation, not aesthetics alone.  
  <sub>“it's not just about having pretty murals. It's about how people gain confidence and agency by shaping the world around them”</sub>
- Her call to action against AI that extracts from artists: borrow street art's 'going over someone's work is a challenge' ethic — don't just make more, make something intentional that amplifies overlooked voices.  
  <sub>“with AI that continues to take from artists, we have an even greater responsibility to create something meaningful”</sub>

#### Managing multiple creative passions in a world that tells you to specialize
*Lauren Hom (Lettering Artist & Designer, Hom Sweet Hom)  ·  📄 abstract only*

> Lettering artist Lauren Hom draws on 15 years of experience to argue that you can build a sustainable creative career around several passions at once, rather than narrowing down to a single specialty.

- Specialization is often presented as the only path to a creative career, but maintaining multiple creative passions can be a viable long-term strategy. *(from abstract)*
- Lessons here are grounded in a 15-year career sustaining several creative pursuits, not abstract theory. *(from abstract)*
- Aimed at creatives feeling pressure to pick one lane, offering an alternative model for managing breadth over a career. *(from abstract)*

#### The hidden craft of interface design in modern film
*Jayse Hansen (Fictional UI Design Director, ØFFGRID)  ·  📄 abstract only*

> A backstage tour of how story-driven holograms, HUDs, and fictional interfaces are designed and animated for blockbuster films, spanning more than 20 major franchises from Iron Man to Star Wars.

- The craft of fictional UI ('FUI') for film is narrative-first: holograms, HUDs, and futuristic interface systems are designed to serve the story rather than function as real, usable software. *(from abstract)*
- The work follows a full pipeline from hand sketches to IMAX-scale screen, covering how these interfaces are designed, animated, and brought to life for the camera. *(from abstract)*
- Drawn from experience across 20+ major franchises (Iron Man, The Hunger Games, Tron, Star Wars), the talk emphasizes meticulous detail to make technology that doesn't exist feel plausible and believable. *(from abstract)*

#### The canvas is not dead
*Catt Small (Staff Product Designer, Dropbox)  ·  📝 transcript*

> AI is a powerful force multiplier for execution and synthesis, but high-context, divergent, high-stakes design work still demands a human at the wheel—so the canvas isn't dead.

- Be the driver, not the passenger: on her Slack-inspired narrative game she handed AI the architecture (the Yarn narrative framework, exporting to HTML/JavaScript) so she could spend her cognitive energy writing 20+ distinct character voices and hand-drawing all 20 avatars.  
  <sub>“it's about being the driver, not the passenger when you're working with AI”</sub>
- AI failed at early visioning for a high-context Dropbox project (700M+ users, nearly 20 years of product history); reacting to and fixing weak output cost more than designing by hand, because AI struggles to retain product context.  
  <sub>“it was becoming more work to actually react to what I was receiving and to fix the output than to just do the work by myself by hand”</sub>
- A concrete pre-flight test before opening an AI tool: ask three questions—how much context the problem requires, how divergent you need to be, and the cost of getting it wrong. High context plus divergent plus high-risk means you drive.  
  <sub>“how much context does the problem require to answer?”</sub>
- Use AI for synthesis of research/data, generating copy variants, placeholder or real data, prototyping contained simple flows, finding missing use cases and poking holes in your thinking, and reframing a presentation for different audiences (crit, director, VP).  
  <sub>“AI is really, really valuable for situations where you need to do synthesis”</sub>
- Hard limits: AI can't truly innovate (it averages and recognizes patterns), can't replace human conviction, can't effectively balance pros and cons, can't manage up or persuade leaders, and cannot be held accountable for your decisions.  
  <sub>“It is unacceptable to say the AI did it as if that's a reasonable answer. It's just not.”</sub>
- Early AI prototyping breeds premature attachment—per Stripe lead product designer Megan Logan, people get married to a particular solution very quickly—so speed without direction is a trap.  
  <sub>“speed without direction will lead you down a dead end”</sub>

#### Own the loop: how designers and researchers win with AI evals
*Setor Zilevu (Researcher, Figma)  ·  📄 abstract only*

> As AI capabilities commoditize, designers and researchers should own AI evaluation by defining what "good" means in human-centered terms—making design the new competitive moat.

- Winning with AI is about measuring well, not just moving fast, and that measurement should start from a human-centered definition of "good" rooted in design and research rather than engineering alone. *(from abstract)*
- AI evals have traditionally been an engineering problem, but the talk argues that ownership is shifting toward design and research as capabilities become commoditized. *(from abstract)*
- Designers and researchers are invited to lead as architects of how AI is evaluated against real human needs, positioning design as the new moat. *(from abstract)*

#### Design for the future of apps
*Craig Labenz (Developer Relations Engineer, Google)  ·  📄 abstract only*

> Google's Craig Labenz explores Generative UI—AI composing ephemeral, on-demand interfaces—and how designers must evolve their design systems to capture its personalization upside without sacrificing consistency and clear hierarchy.

- Generative UI is an emerging pattern where AI composes ephemeral, on-demand interface elements per user, extending generative AI beyond text chat and image generation; it is in active use at Google. *(from abstract)*
- GenUI promises unparalleled per-user personalization, but that same dynamism risks regressions in core UX pillars like consistency and clear information hierarchy. *(from abstract)*
- Designers can adapt their design systems to realize GenUI's potential while constraining AI-generated UI to mitigate those risks. *(from abstract)*

#### Designing money: how to build a trustworthy brand in the age of AI
*Chris Warner (Creative Lead, Brand Studio, Plaid)  ·  📄 abstract only*

> Plaid's brand creative lead explores how authenticity and trust have shaped finance design through history, and what machine learning means for the future of how money looks and feels.

- Building trust in financial branding requires pairing machine learning with genuine human artistry, rather than letting AI alone define how money looks and feels. *(from abstract)*
- Adopting AI in a high-stakes domain like finance raises moral and safety questions designers must weigh — what is moral, what is safe, and what authentically resonates. *(from abstract)*
- Authenticity has long shaped the history of finance, and looking at that history through graphic design and branding offers lessons for designing trustworthy money brands in the AI era. *(from abstract)*

#### Legibility by design
*Ryan Powell (Head of Design, Waymo)  ·  📄 abstract only*

> Trust in AI products comes not from raw transparency but from communication design that makes a system's intent legible, drawing on Waymo's autonomous-vehicle experience.

- Building trust is reframed as a communication-design problem, not a transparency problem: the core question is how much a system should communicate, and the same challenge applies equally to autonomous vehicles and generative agents. *(from abstract)*
- Legibility should replace mere automation as the goal, designing so users understand a system's intent rather than just monitoring its tasks. *(from abstract)*
- Feedback must be calibrated to avoid alert fatigue, producing AI products that feel predictable and fundamentally trustworthy; the talk offers a framework for this drawn from years at Waymo. *(from abstract)*

### Maker Stage

#### From kickoff to canvas: connecting Google Workspace and Figma
*Addison Rodomista (UX Design Lead, Google ), Chloe Fagan-Tucker (Google Workspace, BD & Strategic Partnerships, Google)  ·  📝 transcript*

> A partnership pitch showing how deep Figma-Google Workspace integrations (smart chips in Docs, the interactive canvas embedded in Meet, Chat notifications) kill the "toggle tax," plus a push to use the new Workspace MCP server so designers can build apps from Workspace context.

- Figma links pasted into a Google Doc auto-transform into interactive 'smart chips' that surface file metadata and live thumbnails on hover, so they feel native instead of cluttering the doc with messy URLs.  
  <sub>“when he drops that link into the Figma file, it immediately transforms into this beautiful smart chip”</sub>
- The integration embeds the full interactive Figma canvas inside a Google Meet call, so attendees can pan, zoom, comment, and duplicate frames alongside the presenter rather than passively watching a screen share.  
  <sub>“they aren't just passively watching a video feed of his presentation. They're actually in that design file with him”</sub>
- Figma activity (comments, FigJam brainstorms, Slides updates) routes through Google Chat notifications that are mobile-accessible and suppress duplicate noise when you're already viewing the file.  
  <sub>“the integration is smart. It knows when Steve is actually looking at the Figma files, not so not to create additional duplicate noise”</sub>
- Google pitched the new Workspace MCP server as the way for 'citizen developers' to pull Workspace context (Gmail, Drive, Calendar, Chat, People) into apps via natural-language prompts instead of wiring up the traditional API.  
  <sub>“using AI natural language prompts instead of having to do it through the existing structure, which is also our API network”</sub>
- Scale claim used to position Workspace as a build platform: 3 billion users, 13 million customers, and over 6 billion marketplace app installs globally.  
  <sub>“We currently support 3 billion users, 13 million customers... we have over 6 billion app installs from our marketplace globally”</sub>
- Core thesis: fragmentation across meetings, docs, and chats is unavoidable, so the win is deep tool-to-tool integration that keeps ideas connected and preserves flow.  
  <sub>“Fragmentation is just the reality of the design process. There's no avoiding conversations, discussions, and decisions happening across a variety of tooling”</sub>

#### How to build content systems for AI product workflows
*Jessica Ouyang (Co-founder, Ditto), Jolena Ma (Co-founder, Ditto)  ·  📝 transcript*

> Just as UI needs a design system, AI-era product copy needs a content system — built from live code, governing every tool where work happens, and improving through feedback.

- Treat product copy like a design system: a single source of terminology, patterns, and approved language that both people and agents pull from. This is the talk's core thesis.  
  <sub>“you need a system for product copy, just like you need a design system for UI”</sub>
- Build the content system from production code, not a fresh style guide. Ditto's 'scan' tool reads the codebase, extracts shipped strings, tags them, and infers a style guide automatically.  
  <sub>“the production code base, what's live and users are already using, should be the starting point”</sub>
- Concrete demo numbers: scan found 99 strings (91 unique, 8 repeated) across two languages, auto-imported Spanish translations, and the Claude Code build reused six text components instead of rewriting them.  
  <sub>“Ditto found 99 strings in our product, 91 unique, eight repeated across two languages”</sub>
- Give agents scoped context, not the whole system. Their 'pull' command embeds copy rules in code right beside the design system component they apply to, so agents don't sift a giant file.  
  <sub>“more context isn't necessarily better context... Agents do better when they're given exactly what it needs”</sub>
- The system must govern everywhere work happens — Figma, Claude Code, and PR review — from one source of truth, rather than syncing separate markdown files per tool.  
  <sub>“It has to govern and adapt to everywhere work actually happens”</sub>
- Close the loop with usage analytics: track how often rules are used, accepted, or rejected, let users reject suggestions with feedback, and propagate term changes everywhere instantly.  
  <sub>“that term change is immediately enforced and governed everywhere”</sub>

#### From concept to confidence with Dscout AI
*Lauren Madura (Director of Product Design, Dscout), Michael Winnick (CEO & founder, Dscout)  ·  📝 transcript*

> As AI makes building cheap and product-market fit fleeting, Dscout's AI Studio aims to make user research fast enough to keep pace—so the speed of learning matches the speed of building.

- Core thesis: now that code is cheap and everyone can build, high-fidelity user feedback matters more, not less—the constraint shifts from how to build to what's worth building.  
  <sub>“code has kind of become cheap... high fidelity feedback, getting informed about your users... is really more important than ever”</sub>
- Reframes product-market fit as product-market flow: products fall in and out of fit so fast that agility to move with the market replaces stable fit.  
  <sub>“the driving concept is really product market flow. How able are you to be agile and move and fit with the flow of the market”</sub>
- Dscout AI Studio is a suite of four tools: Draft Your Study, Explore Your Data, AI Moderation, and a new MCP server—built so any builder on a team can run research at the pace product development now demands.  
  <sub>“a suite of four tools, draft your study, explore your data, AI moderation, and our new MCP server”</sub>
- AI moderation runs recorded, dynamically-probing interview sessions in parallel with hundreds or thousands of participants worldwide in multiple languages—and participants were surprisingly candid with the bot.  
  <sub>“I can run these sessions in parallel with hundreds, even thousands of participants all over the world, even in different languages”</sub>
- The Dscout MCP server (beta) closes the build-test-learn-iterate loop inside Figma Make: invoke @dscout to build a usability test, pull feedback back in, and have Make iterate—without leaving the tool.  
  <sub>“This is build, test, learn, iterate all happening in one place where the design work is already happening”</sub>
- AI templates deliver governance without bureaucracy—replacing stale Notion hubs and lengthy approval processes by letting leaders mix-and-match screener and study templates that uphold organizational standards.  
  <sub>“The old way of doing this was with documents that were hard to maintain, Notion hubs, research office hours, really lengthy review”</sub>

#### Hacking AI for creative operations at scale
*Rory Flynn (Founder, Systematiq Ai)  ·  📝 transcript*

> The real AI advantage isn't making one cool asset; it's building reusable, node-based Figma Weave workflows where you swap only the input and the system runs creative production at scale.

- Three transferable core skills work for any AI tool: deconstruction (reverse-engineer media into its components to learn how to prompt), system prompts (codify rules so the LLM does the work without you), and workflow development (chaining tools into a sequence to get from point A to point B).  
  <sub>“one is deconstruction... skill number two, which is system prompts... workflow dev basically is how do I get from point A to point B”</sub>
- Deconstruct any photo into its 'non-negotiables' (like lighting) to build a fill-in prompt formula; for edits the formula collapses to a simple keep/change structure (keep the exact product, change the background).  
  <sub>“editing is keep this, change that. It doesn't have to be any more complicated than that”</sub>
- Well-built workflows are stable: you change only the input, not the system. Scaling from one to 400 assets just means telling the system prompt to write more prompts plus a text iterator that splits them into individual generations.  
  <sub>“when these workflows are built scalable and structured appropriately, 95% of the time they don't have to change”</sub>
- BarkBox case: Weave digitally composites the monthly subscription boxes and adds lighting, depth, and shadow for a 3D feel, producing one reference 'feeder image' that then generates banner ads, UGC, and social variants.  
  <sub>“that one image feeds everything else. So, solving that one problem really helps”</sub>
- Shark Ninja shows real scale (hundreds of products, 35 global markets, 25 new products a year): a localization workflow bled into retouching, compositing, and video, and the company runs weekly cash prizes to incentivize building reusable systems.  
  <sub>“They're incentivizing people, whoever builds stuff that can help the company overall, cash prizes every week”</sub>
- Build a system for everyone, not just yourself: a true workflow lets you hand it off and 'replace yourself.' Don't over-index on tools since models churn; structured systems let you swap tools in.  
  <sub>“If only you can operate it, then it's not really a system”</sub>

#### How structured thinking gives your AI superpowers
*Carola Pescio Canale (Head of Design, AI, Atlassian)  ·  📝 transcript*

> The AI everyone uses doesn't know you, so build your personal context graph the lazy way—voice rants, your own writing, and camera photos—then scale it into a shared team graph.

- Habit 1: 'Empty your brain' at the end of the day by recording a rambling voice note (she uses Loom), then build a skill that digests the transcript into a Confluence doc AND extracts your reasoning into a thinking.md file so the AI knows your point of view when brainstorming. ~10 min/day, doesn't have to be daily.  
  <sub>“I ask it to extract any meaningful ways of thinking into a thinking MD file”</sub>
- Habit 2: Train the AI to write as you by feeding it your existing words—Gmail sent folder, last 30 days of Slack, or recorded conversations. AI sounds generic because it was trained on everybody and is the average of everyone; a few samples fixes that.  
  <sub>“You might not know it, but you're all writers. We all write somewhere.”</sub>
- Habit 3: Give your AI 'eyes' via your phone camera with three-word prompts. Example skill: photographing items to sell ('garden statue sell') analyzes the object's condition, finds a comparable listing and its price, estimates resale value, and builds an inventory.  
  <sub>“a photo is really worth 100 prompts”</sub>
- Camera-as-prompt examples: tracking home workouts by photo plus voice message, identifying birds by photo, and a 'Git merge for to-do lists' that photographs paper notebooks to reconcile physical and digital tasks.  
  <sub>“kind of like Git merge, but for my to-do list, and this is exactly what I do”</sub>
- Context compounds and personalizes daily briefs—AI stops flagging tasks as urgent that you already handled in person, because your photo and voice context bridges the digital and physical.  
  <sub>“having this way to bridge the digital and the physical with your photos... helps your to-do list be more personalized”</sub>
- The bigger bet is the team graph, not just the personal graph: logging decisions into a shared stack (she cites Loom + Confluence + Jira) turns AI from a personal assistant into a team collaborator.  
  <sub>“the team graph is what turns AI from your personal assistant into a team collaborator”</sub>

#### Build like it's 2030. Listen like you mean it.
*Ned Dwyer (CEO & Co-founder, Great Question)  ·  📝 transcript*

> When everyone builds with the same AI models, the only durable edge is pairing shipping velocity with deep customer insight, so you ship differentiated products instead of slop.

- The differentiator isn't speed alone but velocity + insight; velocity without understanding the customer problem just produces slop that eventually burns customer trust.  
  <sub>“if we take velocity, which is critical to the future, but we deliver it without insight, all you're really doing is delivering slop”</sub>
- Models are improving fast: code produced by Claude Code for the Anthropic team rose ~8x since 2023, and ~65% of code is now deployed to production with no human interaction (and rising each quarter).  
  <sub>“the amount of code that's being deployed to production without human interaction. It's currently sitting around 65%”</sub>
- Great Question rebuilt itself AI-native by first 'rethinking time' — work that took a year now takes a quarter/month/week, and a 3-5 day PRD now takes a morning but turns out better.  
  <sub>“Everything that traditionally would have taken a year, we now need to re- reimagine and reprogram ourselves to understand that actually could take a quarter, a month, a week, a day, an hour”</sub>
- Shift to 'permissive by design': replace heavy up-front gates/PRDs with empowering anyone to build, backed by a design system (Zeroheight) and rituals of expert sign-off before going live.  
  <sub>“rather than doing the gating and the the guardrails, uh, up front, write this elaborate product requirements document, we'd empower people to take their own initiative to go and build”</sub>
- Bake customer signal into every release via MCP: pipe all qualitative data (support tickets, sales calls, research, social) into the build loop. Demo showed Figma Make building a dashboard, generating a Great Question study, returning real customer quotes, then regenerating a v3 with the requested fixes.  
  <sub>“we baked customer signal that insight into every product release... accessing all of the qualitative data customers have ever told us via our MCP”</sub>
- AI can reach the first 90% of a design; the designer's job is now the last 10% — defining the system, setting the quality bar, and 'holding space for taste' to separate what's real from slop.  
  <sub>“it's that last 10% that ultimately is the most important and separates your product from being a general also product”</sub>

#### Designing in the age of the 10x engineer
*Andy Zhang (Design Engineer Lead , Google)  ·  📝 transcript*

> Cheap AI-generated code should make designers prototype and learn more, not ship more, because quality comes from curating which recyclable iteration you finally say yes to.

- Building faster forces a fork: launch earlier or raise quality. Andy Zhang argues teams should spend the speed on elevating quality, not on shipping sooner.  
  <sub>“how can we use speed to elevate quality instead of launching earlier?”</sub>
- Treat prototypes as recyclable assets: point the same agent at your past work so learnings stay embedded in the code instead of being rebuilt from scratch each iteration.  
  <sub>“You can recycle by reading the same agent now and have the agents reference your past work”</sub>
- There are three distinct prototyping starting points, each answering a different question: from scratch (blue-sky concepts), an isolated playground (reuse building blocks while staying experimental), or forking production (closest to real, but gated).  
  <sub>“if you really want to get as close to production code as possible... then maybe you should be forking off production code.”</sub>
- Google Anti-Gravity dogfoods relentlessly via an active feedback channel, then gradually promotes promising features from the team to larger Google groups to public, so only the best graduate.  
  <sub>“only the best features should be graduating”</sub>
- Cheap code is not a license to ship more; most code should never reach users. Good design is curation, and AI can't make the call on things it can't verify because AI and your users differ.  
  <sub>“you can't let AI decide something if you if it cannot verify because AI and your AI and your users are different”</sub>
- Quality comes from an intimate understanding built through repeated feedback over hundreds of recycled prototypes, not from one brilliant idea or a one-shot agent output.  
  <sub>“it's about trying and recycling hundreds of previous prototypes”</sub>

#### Building real-time user insights into your design workflow
*Prayag Narula (CEO & Co-Founder , HeyMarvin)  ·  📝 transcript*

> Marvin launches an in-app AI interviewer that intercepts users in the moment they're using your product, so insight reaches designers before the decision is made, not weeks after.

- The real bottleneck isn't research speed or scale, it's timing. AI moderation just built a 'faster horse'; the true unlock is getting insight before the decision is made.  
  <sub>“if the decisions are being made without the insight then what's the point?”</sub>
- New product launched: a live in-app AI interview intercept that uses JavaScript triggers (e.g. repeated button clicks signaling frustration, back-and-forth navigation) to start a real-time screen-share interview.  
  <sub>“What we just saw was the world's first live in AI interview intercept.”</sub>
- The interviewer asks intelligent follow-up questions in 40 languages, records the user's screen, and pipes videos back to Marvin's analysis tool, sharing results in real time via Slack, Teams, Figma.  
  <sub>“It asks these questions in 40 different languages then sends back the videos to your Marvin account.”</sub>
- In-app surveys fail because they force users to translate their mental model into words, causing abysmal response rates and low-fidelity answers like 'the service doesn't work.'.  
  <sub>“we are putting the onus on our users to convert their mental model into words”</sub>
- In-the-moment feedback beats retrospective interviews because you skip having users reconstruct their path from memory days, weeks, or months later.  
  <sub>“the best feedback comes from the moment someone is in your product, not in a survey that they fill out later”</sub>
- The guiding vision is 'one researcher per user', matching engineering's velocity without sacrificing the human-centered process designers depend on.  
  <sub>“We're calling it one researcher per user. That's the future we're building towards”</sub>

#### AI will upend your process—for the better
*Justin Meyer (CEO, Bitovi)  ·  📝 transcript*

> Non-engineers now ship prototypes in hours by climbing a maturity ladder of agentic skills—vibe coding, local agent orchestration, then cloud agents—that move work cleanly between Figma, Jira, and GitHub.

- Teams progress through three agentic maturity stages: solo vibe coders, 'local agent orchestrators' who develop skills to move work between sources of truth (GitHub, Jira, Figma), then 'cloud agent orchestrating' teams where a button click triggers the agent to take the next step.  
  <sub>“These are what we call cloud agent orchestrating teams. Where the agent can just do what take the next step”</sub>
- Adding a mock service worker layer lets the agent focus only on building the front end instead of figuring out service/data architecture, making vibe-coded prototypes faster and far more likely to succeed.  
  <sub>“the first thing we put in place is a mocking layer with something called mock service worker”</sub>
- Three core skills support non-technical prototyping: a brand skill (colors/padding/spacing), a component skill (reuse instead of rebuilding existing components), and a data model skill for mock consistency.  
  <sub>“The three core skills we find is a brand skill... a component skill... And finally a data model skill”</sub>
- Easy code sharing is the most important unlock for upending the process; you may already have it via GitHub Codespaces—push a branch, click the Code button's plus, and it launches a shareable cloud environment.  
  <sub>“the most important for upending your process is the ability to share your code easily”</sub>
- Their React-to-Figma skill runs a visual diff between what it builds in Figma and in code (validated against Storybook or Playwright) to catch small rendering mistakes, saving time across hundreds of components.  
  <sub>“it will do a diff of a visual diff between what it builds in Figma and what it builds in code”</sub>
- Code Connect (mapping a Figma component to its React/Angular code and variants) may roughly triple the likelihood of one-shotting a Figma design and is considered essential for correct implementation.  
  <sub>“code connect in our experience, like I mean, might triple the the likelihood that you're going to one shot a Figma design”</sub>

#### Quirk up your workplace
*Darby Thomas (Senior Product Designer, GitHub)  ·  📄 abstract only*

> A case for bringing playfulness, silliness, and fun rituals into the workplace, drawn from the gimmicks and stunts GitHub used to make remote work more engaging.

- Encourages designers and teams to be more playful and silly at work rather than defaulting to seriousness. *(from abstract)*
- Shares concrete rituals, gimmicks, and stunts GitHub used to make distributed/remote work more fun and interesting. *(from abstract)*
- Frames playfulness as a deliberate tool for combating the isolation and monotony of remote work culture. *(from abstract)*

#### Designing with confidence in an AI-powered world
*Bobby Meixner (VP, Solution Marketing, UserTesting)  ·  📝 transcript*

> AI lets one person ship what once took 100, but a UserTesting survey of 183 design leaders shows speed has outrun confidence — so the designer's enduring job is to validate and defend human judgment.

- UserTesting surveyed 183 design leaders: 91% say their work moves faster in an AI-enabled environment, but only 15% feel much more confident in quality — a roughly 6:1 speed-vs-confidence gap.  
  <sub>“91% of designers report that their work moves faster now in an AI-enabled environment... Only 15% feel much more confident in the quality”</sub>
- Confidence follows a 'reversibility factor': high in discovery/ideation (4.1/5) but dropping to 3.6-3.7 near ship time, when decisions are costly and hard to undo.  
  <sub>“Confidence holds when decisions are fast and cheap to undo, and it collapses as we get further down the cycle when they're not”</sub>
- 65% of designers can't confidently say AI makes their outcomes better; 37% say results are the same and 19% say they're sometimes worse — so added speed isn't translating into better results.  
  <sub>“65% of designers can't confidently say that their outcomes are better because of AI”</sub>
- What separates designers who feel risk went down from those who feel it went up is validation behavior — the confident group cross-checks research, runs usability tests, and gets customer feedback rather than skipping validation.  
  <sub>“same tools, same AI, same speed, different outcomes, but it all varies depending on how folks validate and defend their work”</sub>
- Demoed UserTesting plugins embedded in Figma and Figma Make: an AI prompt launches a test against a 7M+ participant panel and results return in-canvas as themes and an auto-generated highlight reel; a fictional Skyline example resolved a drop-off problem with completion up 79%.  
  <sub>“over 7 million verified authenticated participants... The completion rate is up 79%”</sub>
- Closing proof point: every 'first-time moment' photo in the deck was AI-generated with a subtle flaw, and human insight is what catches them — making human judgment 'the scarce thing.'.  
  <sub>“human insight notices, and that's the whole point... your judgment as a designer, still is the scarce thing”</sub>

### Community Stage

#### The most important component: community
*Alicia Kranjc (Figma Community Product Manager, Figma)  ·  📝 transcript*

> As AI erases the speed-and-craft edge, community — your users' relationship with you and with each other — becomes the differentiator competitors can't copy.

- Working definition of community to design around: it is the users' relationship with you AND with one another, and most teams never deliberately design for it.  
  <sub>“community is your users' relationship with you and their relationship with one another. And most teams never think to design it”</sub>
- AI has erased the build-fast-and-well advantage, so community is the new differentiator/moat: features get copied but belonging does not.  
  <sub>“features get copied, but belonging does not”</sub>
- Community is a truer product signal than interviews or surveys; real signal is what users say to each other unprompted (Linear became a signal of what kind of team you were).  
  <sub>“what they say to each other unprompted in Slack, that's where real signal lives”</sub>
- Devoted users become your best growth channel: Notion grew to 100M+ users with most early growth organic, even hiring a community member who had built a fan site drawing 80,000 monthly visitors.  
  <sub>“Notion has now grown to over 100 million users, and most of that initial growth came from the community itself”</sub>
- Figma's four directives: build products that foster connection, bring people together where they're at, stay flexible and try things that don't scale, and celebrate community publicly.  
  <sub>“The first directive is to build products that foster connection”</sub>
- Concrete scale proof: Friends of Figma is 250+ groups across 82 countries hosting 900+ events a year, and the latest Make-a-thon drew 11,000+ participants.  
  <sub>“over 250 groups across 82 different countries... they hosted over 900 events around the world”</sub>

#### Human methods, new material: designing with AI for the classroom
*Mubarak "Moby" Marafa (Staff Product Designer, Goodnotes), Wendy Liao (Learning and Development Specialist, Goodnotes)  ·  📄 abstract only*

> A look inside the 0-to-1 design journey of Goodnotes Classroom, showing how grounding the work in human research methods and educator co-creation became the foundation for designing with AI as a new material.

- The team built Goodnotes Classroom from scratch by starting with real teacher workarounds and classroom observations rather than leading with the technology. *(from abstract)*
- Traditional human-centered methods — observation, fast prototyping, and co-creation sessions with educators — anchored product decisions for an AI product. *(from abstract)*
- AI was treated as a new design material, with educators themselves shaping the product rather than being designed for. *(from abstract)*
- Their core argument: the fastest way to build well in a high-stakes, messy domain like the classroom is to get closer to the people you're building for. *(from abstract)*

#### Prototypes, failures, and unexpected breakthroughs
*Noah Finer (Software Engineer, Figma)  ·  📄 abstract only*

> A Figma engineer reflects on how two opposing crafts—rapid, scrappy interaction prototyping and obsessive polishing of barely-noticeable microinteractions—combine to shape the products he builds.

- Engineering at Figma spans two distinct mindsets: throwaway 'janky' prototyping to explore ideas fast, and meticulous refinement of subtle editor microinteractions, and the talk explores how these modes interact and reinforce each other. *(from abstract)*
- These complementary approaches have directly shaped real shipped and experimental experiences, including Figma Slides, FigPals, and interactive transit personality tests. *(from abstract)*
- Craft in interaction design often lives in details users barely consciously notice, and prototyping (including failures) is presented as a path toward those unexpected breakthroughs. *(from abstract)*

#### In praise of dark mode
*Mehmet Aydın Baytaş (Senior Design Engineer, Attio)  ·  📄 abstract only*

> A provocative manifesto arguing that dark mode is not an optional toggle but the proper default condition of all good interface design.

- Baytaş advances a thesis he calls 'Dark Mode Maximalism': the claim that all user interfaces should be designed in dark mode rather than treating it as an afterthought or alternate theme. *(from abstract)*
- He reframes dark mode away from being a user-selectable setting ('not a toggle') and toward being a foundational design principle — the baseline good design should start from. *(from abstract)*
- The argument rests on a stated design philosophy that good design minimizes emitted light, drawing on two decades of combined design and engineering practice plus historical/'arcane' scholarship rather than purely contemporary UI trends. *(from abstract)*

#### Designing brand intelligence: from rules to expression
*Nicole Martinez (Co-founder, Let's Jetty)  ·  📄 abstract only*

> As AI takes over technical execution, designers should reframe brand guides as cognitive frameworks—built interactively in Figma—and shift from making artifacts to directing brands strategically.

- The designer's competitive edge is moving away from technical execution toward how you think, decide, and design amid change that outpaces your design system. *(from abstract)*
- Brand guides can be reimagined as cognitive frameworks—organizing brands by cognition rather than rigid rules—using J Dilla's break from rigid quantization as a metaphor for more human, fluid, felt expression. *(from abstract)*
- Practical approach: build interactive brand frameworks directly in Figma and evolve the designer's role from maker to strategic director. *(from abstract)*

#### Gnarly by design: building systems with grit
*Beau Wingfield (Visual Product Designer, ex-EA, Full Circle Studio (skate.), Publix)  ·  📄 abstract only*

> A designer's playbook for extending clean, scalable design systems to handle gritty, texture-heavy visual styles, drawn from building a video game design system.

- Texture-heavy, gritty design systems are harder to build and maintain than clean ones, and the talk frames that added difficulty as the central challenge. *(from abstract)*
- Uses a video game design system as the concrete case study for adding character and grit to a system. *(from abstract)*
- Aims to show how to inject visual character into an otherwise squeaky-clean system while keeping it scalable. *(from abstract)*

#### Don't forget the feeling: a critique of software in 2026
*Luis Ouriach (Designer Advocate, Figma)  ·  📄 abstract only*

> A Figma designer advocate argues that as software in 2026 is increasingly shaped by AI and automation, the emotional, human feeling of a product is being lost and must be deliberately preserved.

- The talk is a critique of the current state of software, contending that craft and emotional resonance are being neglected in how products are built and experienced in 2026. *(from abstract)*
- It centers 'the feeling' of software as a first-class design concern that should not be sacrificed amid efficiency-driven and AI-influenced workflows. *(from abstract)*
- Framed from a designer advocate's perspective, it calls on practitioners to defend human taste and the qualitative experience of products against homogenized, soulless output. *(from abstract)*

### Learning Labs

#### Figma learning lab: design to development workflows
*Riccardo Erra (Developer Advocate, Figma)  ·  📄 abstract only*

> A beginner-friendly walkthrough of moving from Figma designs to code using Figma's MCP server, with best practices for feeding code context back into Figma to get stronger design-system results.

- Figma's MCP server is the bridge for a design-to-code workflow, aimed at newcomers learning the basics of generating code from designs. *(from abstract)*
- Bringing code context into Figma via variable prefixes and Code Connect improves the quality of generated output. *(from abstract)*
- A well-structured design system is the lever for stronger, more reliable design-to-code results. *(from abstract)*

#### Figma learning lab: the many ways to make with Figma Make
*Alexia Danton (Designer Advocate, Figma), Brett McMillin (Designer Advocate, Figma)  ·  📄 abstract only*

> A hands-on Learning Lab walking through the different ways to build with Figma Make, from scratching a new prototype to extending an existing codebase, with guidance on context, skills, and design systems.

- Figma Make supports multiple entry points to building: starting a brand-new prototype from scratch or working from an existing codebase. *(from abstract)*
- The session covers guidelines and skills plus how to provide strong context to get better results from Figma Make. *(from abstract)*
- It includes best practices for working with your design system inside Figma Make. *(from abstract)*

#### Figma learning lab: bringing designs to life with Figma Motion
*Miggi (Designer Advocate, Education, Figma)  ·  📄 abstract only*

> A hands-on Learning Lab introducing Figma Motion, walking attendees through the new motion features to add energy and animation to their product designs.

- Introduces Figma Motion as a way to bring animation and energy into product experiences, aimed at beginners easing into motion design. *(from abstract)*
- Covers the essentials needed to get started with Figma's new motion features in a hands-on lab format. *(from abstract)*
- Pairs with informal follow-up time in the Learning Lab Lounge for direct access to the Figma team. *(from abstract)*

#### Figma learning lab: unlocking speed and visual expression with generative plugins and shader effects
*Hugo Raymond (Designer Advocate, Figma), Mallory Dean (Designer Advocate, Figma)  ·  📄 abstract only*

> A hands-on Figma Learning Lab on using generative effects and shader effects to bring visual expression, consistency, and speed into the design workflow.

- Generative effects and shader effects are positioned as new Figma capabilities for adding rich visual expression directly within the design workflow. *(from abstract)*
- The session frames these effects around three practical outcomes for designers: visual expression, consistency, and speed. *(from abstract)*
- Delivered as a hands-on Learning Lab with follow-up informal time in the Learning Lab Lounge with the Figma team. *(from abstract)*

#### Figma learning lab: upskill on skills and agentic workflows
*Laura Fehre (Designer Advocate, Figma ), Manish Kumar (Developer Advocate, Figma)  ·  📄 abstract only*

> A hands-on Learning Lab on designing, authoring, and deploying AI "skills" that encode a team's domain knowledge so agents start every session informed and work measurably faster and more precisely.

- Skills are how AI learns a domain by capturing reusable knowledge like research frameworks, handoff standards, and definitions of done, so each agent session starts informed rather than from scratch. *(from abstract)*
- The session goes beyond basics into the full lifecycle of designing, authoring, and deploying skills, with the stated goal of making agents measurably faster and more precise for the specific work at hand. *(from abstract)*
- It is a hands-on, build-along format: attendees leave having helped build an actual skill, not just a framework to finish later, with optional follow-up time in the Learning Lab Lounge. *(from abstract)*

#### Figma learning lab: express yourself with Figma Draw
*Laura Butvinik (Manager, Education Content Strategy, Figma), Rachel Platt (Education Designer, Figma), Kristen Bates (Education Content Strategist, Figma)  ·  📄 abstract only*

> A hands-on Learning Lab where attendees collaboratively create a shared art piece to explore the expressive, creative capabilities of Figma Draw.

- Figma Draw is positioned as a tool for expressive, artistic design, demonstrated live by having attendees co-create a single shared art piece on their own laptops. *(from abstract)*
- The session is participatory and collaborative rather than a lecture, emphasizing learning the tool by making something together in real time. *(from abstract)*
- It centers craft and visual expression over process or technical workflow, framed around 'the magic of expressive design.'. *(from abstract)*

#### Figma learning lab: workflow tips—from slow to flow
*Chad Bergman (Designer Advocate, Figma), Michel Ferreira (Designer Advocate, Figma)  ·  📄 abstract only*

> A hands-on Learning Lab where two Figma Designer Advocates share practical workflow tips and tricks to help designers work faster and more fluidly on the canvas and beyond.

- A practical, tips-driven session focused on speeding up everyday Figma work and reducing friction on the canvas. *(from abstract)*
- Aims to move designers from a 'slow' to a 'flow' working state through workflow tricks that apply on the canvas and in surrounding tooling. *(from abstract)*
- Pairs the talk with informal follow-up access to the Figma team in the Learning Lab Lounge for hands-on questions. *(from abstract)*

#### Figma learning lab: build your first Weave workflow
*Moran Dankner (Creative workflow advocate, Figma), Ken Vreman (Senior Design Advocate, Figma)  ·  📄 abstract only*

> A hands-on Learning Lab walking attendees through building their first node-based workflow in Figma Weave, from blank canvas to a working pipeline of connected AI models.

- Node-based tools become intuitive once you build with them; the session takes attendees from a blank canvas to a functioning workflow live on their own laptops. *(from abstract)*
- Figma Weave lets you connect AI models and direct their outputs as discrete steps, giving granular control over every stage of the workflow. *(from abstract)*
- It's a learn-by-doing format, with continued informal access to the Figma team afterward in the Learning Lab Lounge. *(from abstract)*

---

### How this was produced

Talk roster parsed from the official Config 2026 agenda. Transcripts pulled from the public YouTube recordings via their auto-generated captions, cleaned to plain text. Each talk's takeaways were extracted and — for recorded talks — adversarially fact-checked against the transcript before inclusion. Themes were synthesized from all per-talk takeaways. Abstract-only entries reflect Figma's published session descriptions, not the delivered talk.
