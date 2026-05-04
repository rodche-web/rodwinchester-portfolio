---
name: Software Engineering Portfolio
colors:
  surface: '#11131c'
  surface-dim: '#11131c'
  surface-bright: '#373943'
  surface-container-lowest: '#0c0e17'
  surface-container-low: '#191b24'
  surface-container: '#1d1f29'
  surface-container-high: '#282933'
  surface-container-highest: '#33343e'
  on-surface: '#e2e1ef'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e2e1ef'
  inverse-on-surface: '#2e303a'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002387'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#104af0'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb59b'
  on-tertiary: '#5b1a00'
  tertiary-container: '#c24100'
  on-tertiary-container: '#ffece6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812900'
  background: '#11131c'
  on-background: '#e2e1ef'
  surface-variant: '#33343e'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-base:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style
The design system is engineered to project technical mastery, precision, and modern sophistication. It targets a high-end audience of technical recruiters and CTOs, evoking an emotional response of trust and intellectual rigor. 

The aesthetic is a hybrid of **Minimalism** and **Modern Corporate**, utilizing a restrained color palette and expansive negative space to let the code and projects speak. Visual interest is generated through high-precision typography and "micro-interactions" rather than decorative elements. The overall vibe is that of a high-end IDE or a premium developer tool—utilitarian yet polished.

## Colors
The palette is rooted in a deep, nocturnal foundation. The primary background uses a rich black to maximize contrast for the vibrant accent. 

- **Primary:** An "Electric Blue" used exclusively for calls to action, active states, and highlights.
- **Secondary:** An "Emerald Green" reserved for success states, uptime indicators, or "open to work" badges.
- **Neutrals:** A scale of cool grays (Deep Gray to Slate) used for surfaces and secondary text to maintain a clear visual hierarchy without distracting from the primary content.

## Typography
This design system employs a strategic pairing to balance technicality with readability. **Space Grotesk** is used for headlines and labels to provide a geometric, slightly "engineered" feel that mimics technical documentation and futuristic interfaces. **Manrope** is used for all body text to ensure maximum legibility and a contemporary, professional tone. 

Use uppercase labels for section headers and metadata to maintain an organized, catalog-like appearance.

## Layout & Spacing
The layout follows a **fixed grid** model on desktop to ensure long-form technical content remains readable and focused. A 12-column grid is used for modular project cards, while a single-column layout is preferred for blog posts and documentation.

Rhythm is maintained through an 8px base unit. Wide vertical spacing (stack-lg) should be used between major sections to create a sense of premium quality and focus, while tighter spacing (stack-sm) is used for related technical metadata.

## Elevation & Depth
Depth in this design system is achieved through **tonal layers** and **low-contrast outlines** rather than heavy shadows. 

1. **Base Layer:** The darkest value (#0A0A0B), used for the page background.
2. **Surface Layer:** A slightly lighter gray (#141416), used for cards and containers.
3. **Borders:** Every surface element must have a 1px solid border (#262626). This creates a crisp, "circuit-board" structure.
4. **Shadows:** When necessary to indicate hover states, use a soft, ambient shadow with a 15% opacity tint of the Primary Electric Blue to create a subtle glow effect.

## Shapes
The design system utilizes **Soft** roundedness. A base radius of 0.25rem (4px) is applied to buttons and inputs, while larger containers like cards use 0.5rem (8px). 

This slight rounding softens the "brutalist" edge of the dark theme, making the interface feel modern and approachable without losing its professional, technical character.

## Components
- **Buttons:** Primary buttons are solid Electric Blue with white or very dark navy text. Secondary buttons use the "Ghost" style: a subtle border (#262626) with no background, transitioning to a light gray background on hover.
- **Chips / Tags:** Small, low-contrast pills used for "Tech Stack" indicators. Use `label-sm` typography and a #1A1A1E background.
- **Cards:** Project cards should feature a 1px border. On hover, the border color should transition from #262626 to the Primary Electric Blue.
- **Input Fields:** Darker than the surface layer with a subtle inset shadow. The focus state must use a 1px Electric Blue border.
- **Code Blocks:** Use a dedicated surface color (#010101) with syntax highlighting that mirrors the primary and secondary accent colors.
- **Progress Indicators:** Use thin, 2px lines for skill bars or loading states to maintain the precise, technical aesthetic.