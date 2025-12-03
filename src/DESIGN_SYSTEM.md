# Inspired Energy Optimizer - Design System Documentation

## Overview
This document contains all design specifications, patterns, and guidelines for the Inspired Energy Optimizer marketing website. Use this as a reference to maintain consistency when building new features or pages.

---

## 🎨 Color Palette

### Background Colors
- **Primary Background**: `#0f172a` (Dark navy - main background)
- **Secondary Background**: `#111827` (Slightly lighter - alternating sections)
- **Card Background**: `#1f2937` (Elevated surfaces, cards)
- **Overlay Background**: `#0f172a/80` (Semi-transparent overlays with 80% opacity)

### Border Colors
- **Default Border**: `#334155` (Subtle borders)
- **Hover Border**: `#22c55e` (Green - interactive states)
- **Alert Border**: `#ef4444/30` (Red with 30% opacity - errors/anomalies)

### Text Colors
- **Primary Text**: `#f8fafc` (Near white - headings, important text)
- **Secondary Text**: `#94a3b8` (Light gray - body text, descriptions)
- **Muted Text**: `#64748b` (Used sparingly for metadata)

### Accent Colors
- **Primary Green**: `#22c55e` (Success, savings, optimal states)
- **Sky Blue**: `#38bdf8` (Forecasting, water, secondary actions)
- **Purple**: `#a855f7` (Charts, analytics, premium features)
- **Orange/Amber**: `#f59e0b` (Warnings, medium priority alerts)
- **Red**: `#ef4444` (Errors, critical alerts, anomalies)

### Gradient Definitions

#### Primary Gradient (Green → Sky Blue)
```css
background: linear-gradient(135deg, #22c55e 0%, #38bdf8 100%);
```
**Usage**: Primary CTAs, hero buttons, important actions

#### Secondary Gradient (Purple → Pink)
```css
background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
```
**Usage**: Alternative CTAs, special features

#### Tertiary Gradient (Sky Blue → Purple)
```css
background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
```
**Usage**: Charts, data visualizations, accents

---

## 📝 Typography

### Font Family
- **Primary**: System font stack via Tailwind defaults
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Font Sizes (Semantic Scale)
Defined in `/styles/globals.css`:

- **Hero Headings**: 3.5rem - 4rem (56px - 64px)
- **H1**: 3rem (48px)
- **H2**: 2.25rem (36px)
- **H3**: 1.875rem (30px)
- **H4**: 1.5rem (24px)
- **Body Large**: 1.25rem (20px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **Tiny**: 0.75rem (12px)

### Font Weights
- **Regular**: 400 (body text)
- **Medium**: 500 (subtle emphasis)
- **Semibold**: 600 (headings, buttons)
- **Bold**: 700 (strong emphasis - use sparingly)

### Line Heights
- **Tight**: 1.2 (large headings)
- **Normal**: 1.5 (body text)
- **Relaxed**: 1.75 (long-form content)

### Letter Spacing
- **Tight**: -0.02em (large headings)
- **Normal**: 0 (default)
- **Wide**: 0.05em (labels, badges)

---

## 🧩 Component Patterns

### Cards

#### Frosted Glass Card
```tsx
<div className="frosted-glass rounded-2xl p-6 border border-[#334155]">
  {/* Content */}
</div>
```
- **Effect**: Backdrop blur with semi-transparent background
- **Border Radius**: 1rem (16px) to 1.5rem (24px)
- **Padding**: 1.5rem (24px) to 2rem (32px)
- **Border**: 1px solid #334155

#### Card with Glow
```tsx
<div className="relative">
  <div className="glow-primary absolute -inset-4 rounded-3xl opacity-20" />
  <div className="frosted-glass rounded-2xl p-6 border border-[#334155] relative">
    {/* Content */}
  </div>
</div>
```

### Buttons

#### Primary CTA
```tsx
<button className="px-8 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all">
  Book Demo
</button>
```
- **Padding**: px-8 py-4 (2rem horizontal, 1rem vertical)
- **Border Radius**: 0.75rem (12px)
- **Gradient**: Primary gradient (green → sky blue)
- **Hover**: Soft glow effect

#### Secondary Button
```tsx
<button className="px-8 py-4 rounded-xl border-2 border-[#334155] text-[#f8fafc] hover:border-[#22c55e] transition-all">
  Learn More
</button>
```
- **Border**: 2px solid #334155
- **Hover**: Border changes to #22c55e

#### Ghost Button
```tsx
<button className="px-6 py-3 rounded-lg text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
  View Details
</button>
```

### Badges

#### Status Badge
```tsx
<div className="inline-block px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e]">
  Live
</div>
```
- **Pattern**: `bg-{color}/10 border border-{color}/30 text-{color}`
- **Border Radius**: rounded-full
- **Padding**: px-4 py-2

#### Category Badge
```tsx
<div className="inline-block px-6 py-2 rounded-full bg-[#1f2937] border border-[#334155] text-[#94a3b8]">
  Solutions
</div>
```

### Icons

#### Icon Container (Colored Background)
```tsx
<div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
  <Icon className="w-6 h-6 text-[#22c55e]" />
</div>
```
- **Size**: 3rem (48px) container, 1.5rem (24px) icon
- **Background**: 20% opacity of accent color
- **Border Radius**: 0.75rem (12px)

#### Icon Container (Gradient)
```tsx
<div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center glow-soft">
  <Icon className="w-8 h-8 text-white" />
</div>
```

### Lists

#### Feature List
```tsx
<div className="space-y-4">
  {items.map((item, index) => (
    <div key={index} className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
      <span className="text-[#f8fafc]">{item}</span>
    </div>
  ))}
</div>
```

#### Checklist
```tsx
<div className="flex items-start gap-3">
  <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
    <Check className="w-4 h-4 text-[#22c55e]" />
  </div>
  <span className="text-[#f8fafc]">{item}</span>
</div>
```

---

## ✨ Visual Effects

### Glass Morphism (Frosted Glass)
Defined in `/styles/globals.css`:
```css
.frosted-glass {
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### Glow Effects

#### Primary Glow (Green)
```css
.glow-primary {
  box-shadow: 0 0 60px rgba(34, 197, 94, 0.4);
}
```

#### Soft Glow (Multi-color)
```css
.glow-soft {
  box-shadow: 0 0 40px rgba(34, 197, 94, 0.2),
              0 0 60px rgba(56, 189, 248, 0.15);
}
```

#### Hover Glow
```tsx
className="hover:glow-soft transition-all"
```

### Floating Blobs (Background Animations)
```tsx
<div className="floating-blob w-96 h-96 bg-[#a855f7] top-20 right-20" />
```
- **Animation**: Defined in globals.css (8s duration, ease-in-out)
- **Sizes**: w-80 (320px), w-96 (384px)
- **Colors**: Use accent colors (#22c55e, #38bdf8, #a855f7)
- **Delay**: Add `style={{ animationDelay: '3s' }}` for stagger

```css
.floating-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.08;
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

---

## 📊 Charts & Data Visualization

### Recharts Configuration

#### Color Scheme
- **Line 1**: `#a855f7` (Purple - actual data, primary metrics)
- **Line 2**: `#38bdf8` (Sky blue - forecasts, comparisons)
- **Line 3**: `#22c55e` (Green - optimal ranges, targets)
- **Alert/Anomaly**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Orange)

#### Chart Styling
```tsx
<CartesianGrid strokeDasharray="3 3" stroke="#334155" />
<XAxis dataKey="time" stroke="#94a3b8" />
<YAxis stroke="#94a3b8" />
<Tooltip
  contentStyle={{
    backgroundColor: '#1f2937',
    border: '1px solid #334155',
    borderRadius: '8px',
  }}
/>
```

#### Gradient Fills
```tsx
<defs>
  <linearGradient id="gradientName" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
  </linearGradient>
</defs>
<Area fill="url(#gradientName)" />
```

### KPI Tiles
```tsx
<div className="bg-[#0f172a] rounded-lg p-4 border border-[#334155]">
  <div className="text-[#94a3b8] text-sm mb-1">Label</div>
  <div className="text-2xl text-[#f8fafc]">Value</div>
  <div className="text-[#22c55e] text-sm mt-1">↓ 12%</div>
</div>
```

---

## 📐 Spacing & Layout

### Container
```tsx
<div className="container mx-auto px-6">
  {/* Max-width handled by Tailwind's container class */}
</div>
```

### Section Padding
- **Vertical**: `py-20` (5rem / 80px)
- **Horizontal**: `px-6` (1.5rem / 24px)

### Gap Spacing
- **Small**: `gap-4` (1rem / 16px)
- **Medium**: `gap-6` (1.5rem / 24px)
- **Large**: `gap-12` (3rem / 48px)

### Grid Patterns

#### Two-Column Layout
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  {/* Content */}
</div>
```

#### Three-Column Grid
```tsx
<div className="grid md:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

#### Four-Column Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

### Max Widths
- **Text Content**: `max-w-3xl` (48rem / 768px)
- **Centered Content**: `max-w-4xl` (56rem / 896px)
- **Form Content**: `max-w-2xl` (42rem / 672px)

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Common Patterns
```tsx
// Mobile-first approach
className="text-4xl lg:text-6xl"  // Larger on desktop
className="grid md:grid-cols-2 lg:grid-cols-3"  // Stacked on mobile
className="hidden md:flex"  // Hide on mobile
className="order-2 lg:order-1"  // Reorder on desktop
```

---

## 🎭 Animation Patterns

### Transitions
```tsx
className="transition-all"  // All properties
className="transition-colors"  // Colors only
className="transition-transform"  // Transform only
```

### Hover Effects
```tsx
className="hover:scale-110 transition-transform"  // Scale up
className="hover:border-[#22c55e] transition-all"  // Border color
className="group-hover:translate-x-1"  // Move on group hover
```

### Custom Animations

#### Pulse (Slow)
```css
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

#### Gradient Shift
```css
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## 🖼️ Images & Assets

### Image Component
Always use the `ImageWithFallback` component:
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/..."
  alt="Description"
  className="w-full h-80 object-cover"
/>
```

### Image Overlays
```tsx
<div className="relative">
  <ImageWithFallback src="..." alt="..." />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent" />
</div>
```

### Icon Library
**Use**: Lucide React (`lucide-react` package)

Common icons:
- `Zap` - Logo, energy
- `Activity` - Monitoring, live data
- `TrendingUp` - Growth, forecasting
- `AlertTriangle` - Warnings, anomalies
- `Lightbulb` - Insights, recommendations
- `Check` - Success, completion
- `Building2` - Buildings, facilities
- `Factory` - Industrial
- `Target` - Goals, vision

---

## 📋 Form Patterns

### Input Field
```tsx
<input
  type="text"
  className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all"
  placeholder="Enter value"
/>
```

### Select Dropdown
```tsx
<select
  className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all"
>
  <option value="">Select option</option>
</select>
```

### Textarea
```tsx
<textarea
  rows={5}
  className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all resize-none"
  placeholder="Enter message"
/>
```

### Label
```tsx
<label className="block text-[#f8fafc] mb-2">
  Field Name *
</label>
```

---

## 🎯 Page Structure Patterns

### Hero Section
```tsx
<section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
  <div className="floating-blob w-96 h-96 bg-[#a855f7] top-20 right-20" />
  
  <div className="container mx-auto relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block px-6 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] mb-6">
        Category
      </div>
      <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
        Headline
      </h1>
      <p className="text-xl text-[#94a3b8] mb-8">
        Description
      </p>
      <button className="px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all">
        CTA Button
      </button>
    </div>
  </div>
</section>
```

### Content Section (Alternating Backgrounds)
```tsx
// Even sections
<section className="py-20 px-6 bg-[#111827]">
  {/* Content */}
</section>

// Odd sections
<section className="py-20 px-6 bg-[#0f172a]">
  {/* Content */}
</section>
```

### Two-Column Feature Section
```tsx
<section className="py-20 px-6 bg-[#111827]">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div>
        <h2 className="text-4xl text-[#f8fafc] mb-6">Heading</h2>
        <p className="text-xl text-[#94a3b8] mb-6">Description</p>
      </div>
      
      {/* Right: Visual */}
      <div className="relative">
        <div className="glow-primary absolute -inset-4 rounded-3xl opacity-20" />
        <div className="frosted-glass rounded-2xl p-6 border border-[#334155] relative">
          {/* Chart or mockup */}
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🔧 Utility Classes Reference

### Custom Classes (from globals.css)
- `.gradient-primary` - Primary gradient background
- `.gradient-secondary` - Secondary gradient background
- `.frosted-glass` - Frosted glass effect
- `.glow-primary` - Primary glow shadow
- `.glow-soft` - Soft multi-color glow
- `.floating-blob` - Animated background blob
- `.animate-pulse-slow` - Slow pulse animation

### Common Tailwind Combinations
```tsx
// Card hover effect
className="hover:border-[#22c55e] hover:glow-soft transition-all"

// Group hover (parent affects child)
className="group"  // on parent
className="group-hover:translate-x-1 transition-transform"  // on child

// Centering
className="flex items-center justify-center"
className="mx-auto text-center"

// Shadows
className="shadow-lg shadow-[#22c55e]/20"
```

---

## 📝 Content Guidelines

### Tone of Voice
- **Professional but accessible**: Technical but not jargon-heavy
- **Action-oriented**: Focus on outcomes and benefits
- **Confident**: "Transform", "Optimize", "Intelligent"
- **Transparent**: Explain how things work

### Headline Patterns
- Questions: "What if buildings could think ahead?"
- Action-focused: "Transform fragmented data into intelligent insights"
- Benefit-driven: "Reduce waste. Cut costs. Protect the grid."
- Before/After: "From outdated tools to AI-powered intelligence"

### CTA Patterns
- **Primary**: "Book Demo", "Get Started", "See It In Action"
- **Secondary**: "Learn More", "View Details", "Explore Features"
- **Low-commitment**: "Schedule a Call", "Download Guide", "See Example"

---

## 🚀 Best Practices

### Performance
1. Use `ImageWithFallback` for all images
2. Lazy load charts and heavy components
3. Minimize animation complexity on mobile
4. Keep floating blobs to 2-3 per section

### Accessibility
1. Always include `alt` text for images
2. Use semantic HTML (h1, h2, nav, main, section)
3. Ensure color contrast meets WCAG AA standards
4. Make all interactive elements keyboard accessible
5. Use `aria-label` for icon-only buttons

### Code Organization
1. Create reusable components in `/components`
2. Keep page components in separate files
3. Use TypeScript interfaces for props
4. Follow consistent naming: PascalCase for components
5. Group related components in subdirectories

### Consistency Checklist
- [ ] Using correct color variables
- [ ] Following spacing patterns (py-20, gap-12)
- [ ] Applying frosted-glass to elevated surfaces
- [ ] Adding hover states to interactive elements
- [ ] Using proper gradient on CTAs
- [ ] Including floating blobs in hero sections
- [ ] Maintaining responsive grid patterns
- [ ] Using correct icon sizes (w-6 h-6 for standard)

---

## 📦 Required Packages

```json
{
  "recharts": "^2.x",
  "lucide-react": "^0.x",
  "react": "^18.x",
  "motion": "^11.x" (if using animations)
}
```

### Package Usage Notes
- **Recharts**: All data visualizations
- **Lucide React**: All icons
- **Motion/React**: Advanced animations (import as `motion`)

---

## 🎨 Quick Reference: Color Usage

| Element | Color | Hex |
|---------|-------|-----|
| Success/Savings | Green | #22c55e |
| Forecasting/Info | Sky Blue | #38bdf8 |
| Analytics/Premium | Purple | #a855f7 |
| Warning | Orange | #f59e0b |
| Error/Alert | Red | #ef4444 |
| Primary Text | White | #f8fafc |
| Secondary Text | Gray | #94a3b8 |
| Border | Dark Gray | #334155 |
| Card Background | Dark | #1f2937 |
| Page Background | Darkest | #0f172a |

---

## 📞 Support & Updates

This design system is a living document. Update it whenever you:
- Add new component patterns
- Introduce new colors or gradients
- Create new animation effects
- Establish new spacing rules
- Build reusable utilities

**Version**: 1.0  
**Last Updated**: November 2025  
**Maintained by**: Inspired Energy Optimizer Team
