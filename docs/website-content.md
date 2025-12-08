# Inspired Energy Optimizer Website - Complete Content Documentation

**Last Updated:** January 2025  
**Purpose:** Comprehensive documentation of all content, styling, and placement across the website for content review and updates.

---

## Table of Contents

1. [Global Elements](#global-elements)
2. [Home Page](#home-page)
3. [Product Page](#product-page)
4. [Solutions Page](#solutions-page)
5. [About Page](#about-page)
6. [Contact Page](#contact-page)
7. [Design System Reference](#design-system-reference)

---

## Global Elements

### Header / Navigation Bar

**Location:** Fixed at top of all pages  
**Background:** `#0f172a` with 80% opacity, backdrop blur  
**Border:** Bottom border `#334155`  
**Z-index:** 50 (fixed positioning)

#### Desktop Navigation (md and above)
- **Layout:** Horizontal flex layout with gap-8
- **Logo Section:**
  - **Icon:** Zap icon (lightning bolt) in gradient box
  - **Text:** "Inspired Energy Optimizer" in `#f8fafc` color
  - **Style:** Tracking-tight, hover opacity-80
- **Navigation Links:**
  - Product (links to `/product`)
  - Solutions (links to `/solutions`)
  - About (links to `/about`)
  - Contact (links to `/contact`)
  - **Active State:** `#f8fafc` text color
  - **Inactive State:** `#94a3b8` text color, hover to `#f8fafc`
- **CTA Button:**
  - Text: "Book Demo"
  - Links to: `/contact`
  - Style: Gradient primary background, white text, rounded-lg, hover glow effect
  - Padding: px-5 py-2

#### Mobile Navigation (below md breakpoint)
- **Menu Button:** Hamburger icon (Menu) / Close icon (X) toggle
- **Menu Panel:**
  - **Position:** Fixed, slides in from right
  - **Width:** 280px
  - **Background:** `#0f172a` with border-left `#334155`
  - **Backdrop:** Black overlay with 60% opacity, backdrop blur
  - **Menu Items:** Same links as desktop, stacked vertically
  - **Active State:** Green background `#22c55e/10` with border
  - **Close Button:** X icon in top-right corner

---

### Footer

**Location:** Bottom of all pages  
**Background:** `#0f172a`  
**Border:** Top border `#334155`  
**Padding:** py-12 px-6

#### Footer Structure (4 columns on desktop, stacked on mobile)

**Column 1: Brand**
- Logo icon (Zap) in gradient box
- Brand name: "Inspired Energy Optimizer"
- Tagline: "AI Energy Intelligence for Buildings and Industrial Sites"
- Social Links (icons only, placeholder links):
  - LinkedIn
  - Twitter
  - GitHub
- **Color:** Links `#94a3b8`, hover `#22c55e`

**Column 2: Product**
- Heading: "Product" (`#f8fafc`)
- Links:
  - Features (anchor link `#features`)
  - Pricing (placeholder)
  - Integrations (placeholder)
  - API (placeholder)
- **Color:** Links `#94a3b8`, hover `#22c55e`

**Column 3: Solutions**
- Heading: "Solutions" (`#f8fafc`)
- Links:
  - Commercial Buildings (anchor link `#use-cases`)
  - Industrial (anchor link `#use-cases`)
  - Campuses (anchor link `#use-cases`)
  - Case Studies (placeholder)
- **Color:** Links `#94a3b8`, hover `#22c55e`

**Column 4: Company**
- Heading: "Company" (`#f8fafc`)
- Links:
  - About (placeholder)
  - Blog (placeholder)
  - Careers (placeholder)
  - Contact (placeholder)
- **Color:** Links `#94a3b8`, hover `#22c55e`

**Bottom Bar:**
- Copyright: "© 2025 Inspired Energy Optimizer. All rights reserved."
- Legal Links:
  - Privacy Policy (placeholder)
  - Terms of Service (placeholder)
  - Security (placeholder)
- **Layout:** Flex row on desktop, column on mobile
- **Border:** Top border `#334155`

---

## Home Page

**Route:** `/`  
**Background:** `#0f172a` (dark slate)

### Section 1: Hero Section

**Component:** `Hero.tsx`  
**Background:** Gradient from `#0f172a` to `#111827`  
**Padding:** pt-32 pb-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decorations
- **Floating Blobs:** 3 animated gradient circles
  - Green blob (`#22c55e`): 96x96, top-left
  - Blue blob (`#38bdf8`): 80x80, top-right, 5s delay
  - Purple blob (`#a855f7`): 64x64, bottom-left, 10s delay

#### Layout: 2-Column Grid (lg breakpoint)

**Left Column:**
- **Main Heading (H1):**
  - Text: "AI Energy Intelligence for Your Entire Portfolio"
  - Size: text-5xl lg:text-6xl
  - Color: `#f8fafc`
  - Tracking: tight
- **Subheading (Paragraph):**
  - Text: "Inspired Energy Optimizer unifies your real-time energy and building data into one intelligent platform. Detect waste instantly, forecast demand with precision, and take clear, data-backed actions that reduce operational costs and protect the grid."
  - Size: text-xl
  - Color: `#94a3b8`
  - Max-width: xl
- **CTA Buttons:**
  - **Primary Button:**
    - Text: "Book a Demo"
    - Style: Gradient primary, white text, rounded-xl
    - Padding: px-8 py-4
    - Hover: Glow effect
  - **Secondary Button:**
    - Text: "Watch Overview" (with Play icon)
    - Link: https://youtu.be/V71PE_jFGdU?si=cZBEBzkUNpRjG8O4
    - Style: Border `#334155`, hover border `#22c55e`
    - Opens in new tab
- **Live Status Indicator:**
  - Green pulsing dot (`#22c55e`)
  - Text: "Live data — updated every 15 seconds"
  - Color: `#94a3b8`

**Right Column: Dashboard Mockup**
- **Container:** Frosted glass effect, rounded-2xl, padding-6
- **Glow Effect:** Primary glow, absolute positioned, -inset-4, 30% opacity

**KPI Tiles (3-column grid):**
1. **Current kWh:**
   - Label: "Current kWh" (`#94a3b8`, text-sm)
   - Value: "2,847" (`#f8fafc`, text-2xl)
   - Change: "↓ 12%" (`#22c55e`, text-sm)
   - Border hover: `#22c55e`
   - Animation: Fades in with translate-y effect, repeats every 10 seconds

2. **Today's Cost:**
   - Label: "Today's Cost" (`#94a3b8`, text-sm)
   - Value: "$3,421" (`#f8fafc`, text-2xl)
   - Change: "↓ 8%" (`#22c55e`, text-sm)
   - Border hover: `#38bdf8`
   - Animation: Delayed fade-in (delay-200)

3. **CO₂ Avoided:**
   - Label: "CO₂ Avoided" (`#94a3b8`, text-sm)
   - Value: "1.2t" (`#f8fafc`, text-2xl)
   - Change: "↑ 15%" (`#22c55e`, text-sm)
   - Border hover: `#a855f7`
   - Animation: Delayed fade-in (delay-400)

**Energy Usage Chart:**
- **Title:** "Energy Usage - Today"
- **Live Indicator:** Activity icon with "Live" text (`#22c55e`)
- **Chart Type:** Area chart with line overlay
- **Data Points:** 6 time points (00:00, 04:00, 08:00, 12:00, 16:00, 20:00)
- **Area:** Purple gradient (`#a855f7`)
- **Line:** Blue dashed (`#38bdf8`) for forecast
- **Animation:** Re-animates every 10 seconds
- **Tooltip:** Dark glassmorphism style with purple border

**Recommendations Panel:**
- **Title:** "Recommended Actions" with green dot indicator
- **List Items:**
  1. "Reduce HVAC setpoint by 2°F during off-peak"
  2. "Schedule EV charging to off-peak hours"
  3. "Investigate anomaly in Building 3 baseline"
- **Style:** Left border `#22c55e`, text `#94a3b8`, text-sm

---

### Section 2: Problem & Solution

**Component:** `ProblemSolution.tsx`  
**Background:** `#111827`  
**Padding:** py-20 px-6

#### Main Heading
- **Text:** "Energy data is everywhere. Insight isn't."
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-16

#### Problem Cards (3-column grid, md breakpoint)

1. **Fragmented Data:**
   - **Icon:** AlertCircle (`#ef4444`)
   - **Title:** "Fragmented Data"
   - **Description:** "You're juggling utility portals, BMS dashboards, CSVs, and monthly bills — but never a single source of truth."
   - **Style:** Background `#1f2937`, border `#334155`, hover border `#ef4444`

2. **Reactive Operations:**
   - **Icon:** TrendingDown (`#f59e0b`)
   - **Title:** "Reactive Operations"
   - **Description:** "Issues are discovered after the bill arrives, not when the waste happens."

3. **Missed Opportunities:**
   - **Icon:** DollarSign (`#ef4444`)
   - **Title:** "Missed Opportunities"
   - **Description:** "Teams have charts, but no clear guidance on what should be done right now."

#### Solution Card
- **Container:** Gradient card with frosted glass, rounded-2xl, border-2 `#22c55e/30`
- **Icon:** Sparkles in gradient primary box
- **Heading:** "The Inspired Energy Optimizer solves this."
  - Size: text-3xl
  - Color: `#f8fafc`
- **Description:** "We centralize all your building and energy data, run advanced AI models on top, and surface live recommendations that operators can act on immediately — not next month."
  - Size: text-xl
  - Color: `#94a3b8`
- **Features Grid (2-column, md breakpoint):**
  1. "Auto-connects to meters, BMS, weather APIs" / "No manual data entry required"
  2. "AI detects anomalies and forecasts demand" / "Prevent issues before they happen"
  3. "Actionable playbooks, not just dashboards" / "Know exactly what to do and when"
  4. "Portfolio-wide visibility in seconds" / "All sites, all metrics, one view"
- **Feature Style:** Green dot (`#22c55e`) with title and subtitle

---

### Section 3: Features

**Component:** `Features.tsx`  
**Background:** `#0f172a`  
**Padding:** py-20 px-6

#### Main Heading
- **Text:** "Your AI-powered Energy Co-pilot"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-16

#### Feature Cards (4-column grid, lg breakpoint)

1. **Real-Time Monitoring:**
   - **Icon:** Activity (`#22c55e`)
   - **Title:** "Real-Time Monitoring"
   - **Description:** "Live dashboards that track energy use, load patterns, peak demand, and critical systems across your entire portfolio."
   - **Accent Color:** `#22c55e`

2. **Smart Forecasting:**
   - **Icon:** TrendingUp (`#38bdf8`)
   - **Title:** "Smart Forecasting"
   - **Description:** "AI models predict tomorrow's consumption, demand spikes, and cost exposure — letting you plan instead of react."
   - **Accent Color:** `#38bdf8`

3. **Anomaly Detection:**
   - **Icon:** AlertTriangle (`#a855f7`)
   - **Title:** "Anomaly Detection"
   - **Description:** "Instant alerts for unusual patterns, off-schedule equipment, or energy-intensive processes."
   - **Accent Color:** `#a855f7`

4. **Actionable Playbooks:**
   - **Icon:** BookOpen (`#22c55e`)
   - **Title:** "Actionable Playbooks"
   - **Description:** "Not just charts — clear, prioritized actions tied to measurable savings."
   - **Accent Color:** `#22c55e`

**Card Style:**
- Background: `#1f2937`
- Border: `#334155`, hover `#22c55e`
- Top accent bar on hover (colored by feature)
- Icon in colored background box
- Padding: p-6

#### Additional Feature Highlights (3-column grid, md breakpoint)
- **15-min:** Data refresh interval (`#22c55e`)
- **99.9%:** Uptime guarantee (`#38bdf8`)
- **24/7:** Monitoring & alerts (`#a855f7`)

---

### Section 4: Dashboard Gallery

**Component:** `DashboardGallery.tsx`  
**Background:** `#111827`  
**Padding:** py-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decoration
- Purple floating blob (`#a855f7`): 96x96, top-right

#### Main Heading
- **Text:** "See Your Buildings in Command Mode"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-16

#### Subheading
- **Text:** "The Inspired Energy Optimizer transforms raw data into a mission-ready control panel. Explore live metrics, time-series charts, alerts, and an intelligent recommendation feed that helps teams make fast, confident decisions."
- **Size:** text-xl
- **Color:** `#94a3b8`
- **Max-width:** 2xl, centered

#### Charts Grid (2-column, lg breakpoint)

**1. Portfolio Overview (Bar Chart):**
- **Container:** Frosted glass, rounded-2xl, border-2 `#a855f7/20`, glow effect
- **Title:** "Portfolio Overview"
- **Subtitle:** "Last 24 hours"
- **Chart Type:** Bar chart
- **Data:** Building A (450), Building B (380), Building C (290), Building D (520)
- **Gradient:** Purple to blue (`#a855f7` to `#38bdf8`)
- **Tooltip:** Dark glassmorphism with purple border

**2. Energy Distribution (Pie Chart):**
- **Container:** Frosted glass, rounded-2xl, border-2 `#38bdf8/20`, glow effect
- **Title:** "Energy Distribution"
- **Subtitle:** "Current"
- **Chart Type:** Donut pie chart
- **Data:**
  - HVAC: 42% (`#a855f7`)
  - Lighting: 28% (`#38bdf8`)
  - Equipment: 20% (`#22c55e`)
  - Other: 10% (`#94a3b8`)
- **Tooltip:** Dark glassmorphism with blue border
- **Legend:** Bottom, circular icons

**3. Performance vs. Baseline (Line Chart):**
- **Container:** Frosted glass, rounded-2xl, border-2 `#22c55e/20`, glow effect, full width
- **Title:** "Performance vs. Baseline"
- **Legend:**
  - Baseline: Gray dashed line (`#94a3b8`)
  - Actual: Green solid line (`#22c55e`)
- **Data:** 6 months (Jan-Jun) with baseline and actual values
- **Result:** "↓ 12.8%" below baseline (6 months)
- **Tooltip:** Dark glassmorphism with green border

#### AI-Powered Recommendations Panel
- **Container:** Frosted glass, rounded-2xl, border-2 `#a855f7/20`
- **Title:** "AI-Powered Recommendations"
- **Grid:** 3-column (md breakpoint)

**Recommendation Cards:**
1. **Optimize HVAC Schedule:**
   - Icon: Lightbulb (`#22c55e`)
   - Title: "Optimize HVAC Schedule"
   - Description: "Potential savings: $2,400/month"
   - Impact: High (`#22c55e`)

2. **Reduce Peak Demand:**
   - Icon: TrendingDown (`#38bdf8`)
   - Title: "Reduce Peak Demand"
   - Description: "Shift EV charging to off-peak"
   - Impact: Medium (`#38bdf8`)

3. **Building 3 Baseline Review:**
   - Icon: Building2 (`#22c55e`)
   - Title: "Building 3 Baseline Review"
   - Description: "Usage 15% above expected"
   - Impact: High (`#22c55e`)

**Card Style:**
- Background: `#111827`
- Border: `#334155`, hover `#22c55e`
- Icon in colored background box
- Impact badge with colored background

---

### Section 5: How It Works

**Component:** `HowItWorks.tsx`  
**Background:** `#0f172a`  
**Padding:** py-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decoration
- Blue floating blob (`#38bdf8`): 80x80, bottom-left, 3s delay

#### Main Heading
- **Text:** "How It Works"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-16

#### Steps (4 steps, horizontal on desktop, vertical on mobile)

**Desktop Layout:**
- Horizontal connection line with gradient (green → blue → purple → green)
- 4-column grid

**Step 1: Connect**
- **Icon:** Plug (`#22c55e`)
- **Title:** "Connect"
- **Description:** "Securely link meters, BMS systems, and operational data via API — no hardware installation required."
- **Number Badge:** 1 in green circle

**Step 2: Learn**
- **Icon:** Brain (`#38bdf8`)
- **Title:** "Learn"
- **Description:** "Our AI models build baselines, detect patterns, and understand your building's behavior."
- **Number Badge:** 2 in blue circle

**Step 3: Recommend**
- **Icon:** Lightbulb (`#a855f7`)
- **Title:** "Recommend"
- **Description:** "The system highlights high-impact opportunities with estimated savings and clear next steps."
- **Number Badge:** 3 in purple circle

**Step 4: Optimize & Iterate**
- **Icon:** TrendingUp (`#22c55e`)
- **Title:** "Optimize & Iterate"
- **Description:** "Track results, compare before/after curves, and continuously improve."
- **Number Badge:** 4 in green circle

**Step Style:**
- Icon in colored circular background with gradient
- Border: 2px solid (step color)
- Box shadow: Colored glow
- Number badge: Absolute positioned, top-right of icon

#### Bottom CTA
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Text:** "Setup takes less than 30 minutes. See results in 24 hours."
- **Button:** "Start Free Trial"
  - Style: Gradient primary, white text, rounded-lg
  - Padding: px-8 py-3

---

### Section 6: Use Cases

**Component:** `UseCases.tsx`  
**Background:** `#111827`  
**Padding:** py-20 px-6

#### Main Heading
- **Text:** "Built for Every Type of Facility"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-16

#### Use Case Cards (3-column grid, lg breakpoint)

**1. Commercial Buildings:**
- **Icon:** Building (`#22c55e`)
- **Image:** Modern office building (Unsplash)
- **Title:** "Commercial Buildings"
- **Description:** "Optimize comfort, reduce costs, and identify operational inefficiencies."
- **Benefits:**
  - Reduce tenant energy complaints
  - Optimize HVAC and lighting schedules
  - Meet ESG reporting requirements
  - Lower operating costs by 15-25%
- **Color Accent:** `#22c55e`

**2. Industrial & Manufacturing:**
- **Icon:** Factory (`#38bdf8`)
- **Image:** Industrial factory technology (Unsplash)
- **Title:** "Industrial & Manufacturing"
- **Description:** "Spot energy-heavy processes, optimize runtimes, and prevent expensive anomalies."
- **Benefits:**
  - Monitor production line energy
  - Detect equipment inefficiencies
  - Avoid costly demand charges
  - Track sustainability metrics
- **Color Accent:** `#38bdf8`

**3. Campuses & Multi-Site Portfolios:**
- **Icon:** School (`#a855f7`)
- **Image:** Energy building at night (Unsplash)
- **Title:** "Campuses & Multi-Site Portfolios"
- **Description:** "Unify data, benchmark buildings, and prioritize where to act first."
- **Benefits:**
  - Unified view across all sites
  - Benchmark building performance
  - Coordinate portfolio-wide initiatives
  - Scale best practices automatically
- **Color Accent:** `#a855f7`

**Card Style:**
- Frosted glass effect
- Border: `#334155`, hover `#22c55e`
- Image header: 48 height, gradient overlay
- Icon badge: Bottom-left of image, colored background
- Content padding: p-6
- Benefits: Colored dots with text

#### Stats Section (4-column grid, md breakpoint)
- **1,247:** Buildings Connected (`#22c55e`)
- **$47M:** Annual Savings Identified (`#38bdf8`)
- **18.5%:** Average Energy Reduction (`#a855f7`)
- **24k:** Tons CO₂ Avoided (`#22c55e`)

**Card Style:**
- Background: `#1f2937`
- Border: `#334155`
- Padding: p-6
- Text center aligned

---

### Section 7: Proof

**Component:** `Proof.tsx`  
**Background:** `#0f172a`  
**Padding:** py-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decoration
- Green floating blob (`#22c55e`): 96x96, top-right, 2s delay

#### Main Heading
- **Text:** "Why leading teams choose the Inspired Energy Optimizer"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-12

#### Proof Points List
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Max-width:** 3xl, centered
- **Padding:** p-8 md:p-12

**Points:**
1. "Up to 5–15% savings potential identified annually"
2. "No hardware lock-in — works with your existing systems"
3. "AI-driven visibility across all buildings"
4. "Action-first insights, not more spreadsheets"
5. "Scalable for portfolios, campuses, and industrial environments"

**Point Style:**
- Check icon in green circle (`#22c55e/20`)
- Text: `#f8fafc`, text-lg
- Hover: Icon background darkens
- Gap: 4 between icon and text

---

### Section 8: Final CTA

**Component:** `FinalCTA.tsx`  
**Background:** Gradient from `#0f172a` to `#111827`  
**Padding:** py-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decorations
- Green floating blob (`#22c55e`): 96x96, top-left
- Blue floating blob (`#38bdf8`): 80x80, bottom-right, 5s delay

#### Main CTA Card
- **Container:** Gradient card, frosted glass, rounded-3xl, border-2 `#22c55e/30`, glow effect
- **Max-width:** 4xl, centered
- **Padding:** p-12

**Heading:**
- **Text:** "Turn Your Energy Data into Intelligence"
- **Size:** text-5xl
- **Color:** `#f8fafc`
- **Margin:** mb-6

**Subheading:**
- **Text:** "Ready to uncover hidden savings, prevent waste, and run your buildings smarter?"
- **Size:** text-xl
- **Color:** `#94a3b8`
- **Max-width:** 2xl, centered
- **Margin:** mb-8

**Benefits List (2-column grid, md breakpoint):**
- Setup in under 30 minutes
- No credit card required
- Free 30-day trial
- Cancel anytime
- **Style:** CheckCircle icon (`#22c55e`) with text `#f8fafc`

**CTA Buttons:**
- **Primary:** "Book a Demo"
  - Style: Gradient primary, white text, text-lg
  - Padding: px-10 py-4
  - Icon: ArrowRight with hover translate
- **Secondary:** "Join Early Access"
  - Style: Border-2 `#334155`, hover `#22c55e`
  - Padding: px-10 py-4
  - Text: `#f8fafc`, text-lg

**Trust Indicator (COMMENTED OUT):**
- Section is commented out in code
- Would show: "Trusted by energy managers at:"
- Would list: Fortune 500 Companies, Leading Universities, Healthcare Systems
- **Note:** To be uncommented when customers are acquired

---

## Product Page

**Route:** `/product`  
**Background:** `#0f172a`

### Hero Section

**Background:** Gradient from `#0f172a` to `#111827`  
**Padding:** pt-32 pb-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decoration
- Purple floating blob (`#a855f7`): 96x96, top-right

#### Content (Centered, max-width 4xl)
- **Badge:** "Product — Inside the Inspired Energy Optimizer"
  - Style: Rounded-full, background `#22c55e/10`, border `#22c55e/30`, text `#22c55e`
  - Padding: px-6 py-2
  - Margin: mb-6
- **Heading (H1):**
  - Text: "Your Entire Energy Operations in One Command Center"
  - Size: text-5xl lg:text-6xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Subheading:**
  - Text: "Inspired Energy Optimizer transforms fragmented building data into a single, intelligent cockpit. Every dashboard, chart, and recommendation is designed to help operators make faster, more informed decisions — without complex tools or hardware dependencies."
  - Size: text-xl
  - Color: `#94a3b8`
  - Max-width: 3xl, centered
  - Margin: mb-8
- **CTA Button:**
  - Text: "Explore Live Demo"
  - Link: https://youtu.be/V71PE_jFGdU?si=cZBEBzkUNpRjG8O4
  - Style: Gradient primary, white text, rounded-xl
  - Opens in new tab

---

### Feature Panel 1: Real-Time Monitoring

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint)

**Left Column:**
- **Heading (H2):**
  - Text: "Live visibility you've never had before."
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "See consumption, demand, load profiles, and equipment behavior second-by-second. Across every building. Across your portfolio. From the main dashboard or detailed drilldowns."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-6
- **Feature List:**
  1. Portfolio-wide dashboards
  2. Live demand tracking
  3. Equipment-level visibility (if BMS integrated)
  4. Energy cost estimation in real time
  5. Multi-site comparison
  6. Automated updates every 15 seconds
  - **Style:** Blue dot (`#38bdf8`) with text `#f8fafc`

**Right Column: Dashboard Mockup**
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Glow:** Primary glow, -inset-4, 20% opacity

**KPI Tiles (3-column grid):**
1. Total kWh: 12,847 (↓ 12%)
2. Cost/Hour: $847 (↓ 8%)
3. Buildings: 24 (Active)

**Buildings Status List:**
- Building A: Optimal (`#22c55e`)
- Building B: Warning (`#f59e0b`)
- Building C: Optimal (`#22c55e`)

---

### Feature Panel 2: Smart Forecasting

**Background:** `#0f172a`  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint, reversed order)

**Left Column: Chart (order-2 lg:order-1)**
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Title:** "24-Hour Forecast"
- **Chart Type:** Line chart
- **Data:**
  - Actual: Purple line (`#a855f7`)
  - Forecast: Blue dashed line (`#38bdf8`)
- **Legend:** Below chart with colored dots

**Right Column: Content (order-1 lg:order-2)**
- **Heading (H2):**
  - Text: "Predict tomorrow, plan today."
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "Our ML models forecast consumption, demand spikes, and potential cost exposures based on: weather, building schedules, historical trends, and occupancy behaviors."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-6
- **Feature List:**
  1. AI forecasting models
  2. Peak demand prediction
  3. Cost exposure modeling
  4. "What-if" scenario analysis
  5. Dynamic weather impact modeling
  - **Style:** Blue dot (`#38bdf8`) with text `#f8fafc`

---

### Feature Panel 3: Anomaly Detection

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint)

**Left Column:**
- **Heading (H2):**
  - Text: "Find issues before they become expensive."
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "Inspired Energy Optimizer automatically detects unusual consumption patterns — equipment left on, inefficient cycles, weekend anomalies, unexpected spikes."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-6
- **Feature List:**
  1. Real-time anomaly alerts
  2. Weekend/holiday misuse detection
  3. Seasonal deviation detection
  4. Cross-building anomaly comparison
  5. Root-cause hints
  - **Style:** Red dot (`#ef4444`) with text `#f8fafc`

**Right Column: Anomaly Chart**
- **Container:** Frosted glass, rounded-2xl, border `#ef4444/30`
- **Title:** "Anomaly Detected"
- **Alert Badge:** Red background with AlertTriangle icon
- **Chart Type:** Area chart (purple gradient)
- **Alert Message:**
  - Text: "Unusual spike detected at 12am — 185% above baseline. Possible equipment left running."
  - Style: Red background `#ef4444/10`, border `#ef4444/30`

---

### Feature Panel 4: Actionable Playbooks

**Background:** `#0f172a`  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint, reversed order)

**Left Column: Recommendations Panel (order-2 lg:order-1)**
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Title:** "Priority Recommendations"
- **Recommendations:**
  1. "Reduce chiller load by 5% between 2–5 pm"
     - Savings: $420/mo
     - Impact: High (`#22c55e`)
     - Icon: Lightbulb
  2. "Investigate HVAC on Floor 4 — running outside schedule"
     - Savings: $280/mo
     - Impact: Medium (`#f59e0b`)
     - Icon: AlertTriangle
  3. "Shift equipment schedule to avoid upcoming peak demand window"
     - Savings: $650/mo
     - Impact: High (`#38bdf8`)
     - Icon: TrendingUp

**Right Column: Content (order-1 lg:order-2)**
- **Heading (H2):**
  - Text: "We don't just show data. We tell you what to do."
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "Every insight is translated into clear, impact-first actions — prioritized by savings potential."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-6
- **Feature List:**
  1. Pre-built optimization playbooks
  2. Priority-based recommendations
  3. Savings quantification
  4. Alerts with contextual explanations
  5. Before/after impact measurement
  - **Style:** Green dot (`#22c55e`) with text `#f8fafc`
- **Savings Gauge:**
  - Label: "Total Monthly Savings Potential"
  - Value: "$1,350" (`#22c55e`, text-4xl)
  - Progress Bar: 68% filled (green to blue gradient)
  - Subtext: "68% of recommendations implemented"

---

### CTA Section

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Content (Centered, max-width 3xl)
- **Heading (H2):**
  - Text: "Ready to see it in action?"
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Subheading:**
  - Text: "Schedule a personalized demo and see how Inspired Energy Optimizer can transform your energy operations."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-8
- **CTA Button:**
  - Text: "Book Your Demo"
  - Style: Gradient primary, white text, rounded-xl
  - Padding: px-10 py-4

---

## Solutions Page

**Route:** `/solutions`  
**Background:** `#0f172a`

### Hero Section

**Background:** Gradient from `#0f172a` to `#111827`  
**Padding:** pt-32 pb-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decorations
- Blue floating blob (`#38bdf8`): 96x96, top-left
- Green floating blob (`#22c55e`): 80x80, top-right, 5s delay

#### Content (Centered, max-width 4xl)
- **Badge:** "Solutions"
  - Style: Rounded-full, background `#38bdf8/10`, border `#38bdf8/30`, text `#38bdf8`
  - Padding: px-6 py-2
  - Margin: mb-6
- **Heading (H1):**
  - Text: "Designed for Every Facility Type"
  - Size: text-5xl lg:text-6xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Subheading:**
  - Text: "Inspired Energy Optimizer adapts to your building's unique profile — whether you operate a commercial tower, a manufacturing plant, or an entire campus portfolio."
  - Size: text-xl
  - Color: `#94a3b8`
  - Max-width: 3xl, centered

---

### Solution 1: Commercial Buildings

**Background:** `#111827` (even index)  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint)

**Left Column: Image (order-1)**
- **Image:** Modern office building (Unsplash)
- **Container:** Rounded-2xl, border-2 `#334155`, hover `#22c55e`
- **Overlay:** Gradient from bottom (dark to transparent)
- **Icon Badge:** Building icon (`#22c55e`) in colored box, bottom-left

**Right Column: Content (order-2)**
- **Badge:** "Commercial Buildings"
  - Style: Rounded-full, background `#1f2937`, border `#334155`, text `#94a3b8`
  - Padding: px-4 py-2
  - Margin: mb-4
- **Heading (H2):**
  - Text: "Smarter operations. Lower energy bills. Happier tenants."
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "Commercial buildings deal with unpredictable occupancy, HVAC load swings, and rising energy costs. Inspired Energy Optimizer equips your operations team with real-time visibility and AI insights that turn complexity into control."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-8
- **Benefits List:**
  1. Optimized HVAC scheduling
  2. Peak demand avoidance
  3. Weekend/holiday waste detection
  4. Tenant comfort monitoring
  5. Data-driven maintenance insights
  - **Style:** Check icon in green circle (`#22c55e`) with text `#f8fafc`, text-lg
- **CTA Button:**
  - Text: "Learn More"
  - Style: Border-2 `#334155`, hover `#22c55e`, text `#f8fafc`
  - Padding: px-8 py-3
  - Margin: mt-8

---

### Solution 2: Industrial & Manufacturing

**Background:** `#0f172a` (odd index)  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint, reversed)

**Left Column: Content (order-2 lg:order-1)**
- **Badge:** "Industrial & Manufacturing"
- **Heading (H2):**
  - Text: "Detect inefficiencies, reduce downtime, and control high-load processes."
- **Description:**
  - Text: "Industrial facilities face intense energy fluctuations. Our platform helps you identify energy-heavy steps, reduce unnecessary runtime, and prevent anomalies that can impact production."
- **Benefits List:**
  1. Production cycle energy mapping
  2. High-load shift recommendations
  3. Off-schedule equipment alerts
  4. Real-time process anomaly detection
  5. Peak shaving guidance
- **Color Accent:** `#38bdf8`

**Right Column: Image (order-1 lg:order-2)**
- **Image:** Industrial factory technology (Unsplash)
- **Icon Badge:** Factory icon (`#38bdf8`)

---

### Solution 3: Campuses & Multi-Site Portfolios

**Background:** `#111827` (even index)  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint)

**Left Column: Image (order-1)**
- **Image:** Energy building at night (Unsplash)
- **Icon Badge:** School icon (`#a855f7`)

**Right Column: Content (order-2)**
- **Badge:** "Campuses & Multi-Site Portfolios"
- **Heading (H2):**
  - Text: "One unified dashboard for all buildings. All locations. One click away."
- **Description:**
  - Text: "Managing multiple sites means multiple data silos. Inspired Energy Optimizer consolidates everything into a single command center."
- **Benefits List:**
  1. Benchmark across buildings
  2. Compare efficiency scores
  3. Portfolio-wide alerts
  4. Prioritize buildings with highest savings potential
  5. Standardized reporting
- **Color Accent:** `#a855f7`

---

### Stats Section

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Main Heading
- **Text:** "Proven Results Across Industries"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-12

#### Stats Grid (4-column, md breakpoint)
- **5-15%:** Average energy savings (`#22c55e`)
- **$47M:** Savings identified annually (`#38bdf8`)
- **1,247:** Buildings connected (`#a855f7`)
- **24k:** Tons CO₂ avoided (`#22c55e`)

**Card Style:**
- Frosted glass, rounded-xl, border `#334155`
- Padding: p-8
- Text center aligned

---

### CTA Section

**Background:** `#0f172a`  
**Padding:** py-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decoration
- Purple floating blob (`#a855f7`): 96x96, bottom-left, 3s delay

#### Content (Centered, max-width 3xl)
- **Heading (H2):**
  - Text: "Ready to optimize your facilities?"
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Subheading:**
  - Text: "Let's discuss your specific challenges and show you how Inspired Energy Optimizer can help."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-8
- **CTA Buttons:**
  - **Primary:** "Book a Demo" (gradient primary)
  - **Secondary:** "Download Solution Brief" (border style)
  - Padding: px-10 py-4

---

## About Page

**Route:** `/about`  
**Background:** `#0f172a`

### Hero Section

**Background:** Gradient from `#0f172a` to `#111827`  
**Padding:** pt-32 pb-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decorations
- Green floating blob (`#22c55e`): 96x96, top-left
- Purple floating blob (`#a855f7`): 80x80, top-right, 5s delay

#### Content (Centered, max-width 4xl)
- **Badge:** "About Us"
  - Style: Rounded-full, background `#a855f7/10`, border `#a855f7/30`, text `#a855f7`
  - Padding: px-6 py-2
  - Margin: mb-6
- **Heading (H1):**
  - Text: "Built for the Next Era of Energy Intelligence"
  - Size: text-5xl lg:text-6xl
  - Color: `#f8fafc`
  - Margin: mb-6

---

### Vision Section

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Layout: 2-Column Grid (lg breakpoint)

**Left Column:**
- **Badge:** "Our Vision"
  - Style: Rounded-full, background `#22c55e/10`, border `#22c55e/30`, text `#22c55e`
  - Padding: px-4 py-2
  - Margin: mb-4
- **Heading (H2):**
  - Text: "To make every building run intelligently"
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "From high-rises to factories to campuses — we envision a world where buildings run intelligently, efficiently, and sustainably through advanced AI-driven insights."
  - Size: text-xl
  - Color: `#94a3b8`

**Right Column: Stats Grid**
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Grid:** 2x2 grid
- **Stats:**
  1. **100%:** Cloud-based (`#22c55e`)
  2. **0:** Hardware required (`#38bdf8`)
  3. **15 sec:** Data refresh (`#a855f7`)
  4. **24/7:** Monitoring (`#22c55e`)

---

### Mission Section

**Background:** `#0f172a`  
**Padding:** py-20 px-6

#### Content (Centered, max-width 4xl)
- **Badge:** "Our Mission"
  - Style: Rounded-full, background `#38bdf8/10`, border `#38bdf8/30`, text `#38bdf8`
  - Padding: px-4 py-2
  - Margin: mb-4
- **Heading (H2):**
  - Text: "Empower organizations with actionable intelligence"
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Description:**
  - Text: "To empower organizations with real-time visibility, predictive intelligence, and actionable recommendations that reduce waste, cut operational costs, and protect the grid."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-12

#### Mission Cards (3-column grid, md breakpoint)

**1. Reduce Waste:**
- **Icon:** Target (`#22c55e`)
- **Title:** "Reduce Waste"
- **Description:** "Identify and eliminate energy waste in real-time"

**2. Cut Costs:**
- **Icon:** TrendingUp (`#38bdf8`)
- **Title:** "Cut Costs"
- **Description:** "Lower operational expenses with smart optimization"

**3. Protect the Grid:**
- **Icon:** Shield (`#a855f7`)
- **Title:** "Protect the Grid"
- **Description:** "Support grid stability through demand management"

**Card Style:**
- Frosted glass, rounded-xl, border `#334155`
- Padding: p-6
- Icon in colored background box (w-16 h-16)
- Text center aligned

---

### Why We Built This Section

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Content (Max-width 4xl, centered)
- **Heading (H2):**
  - Text: "Why We Built Inspired Energy Optimizer"
  - Size: text-4xl
  - Color: `#f8fafc`
  - Alignment: Center
  - Margin: mb-6

#### Paragraphs (text-xl, `#94a3b8`)
1. "The energy grid is under unprecedented pressure. Buildings waste more energy than ever before. And operators are expected to manage increasingly complex systems — with outdated tools."
2. "Inspired Energy Optimizer was born from one question: **"What if buildings could think ahead?"**" (highlighted in `#22c55e`)
3. "We built a platform that uses machine learning, forecasting, and anomaly detection to turn raw data into live, actionable intelligence."

#### Highlight Box
- **Container:** Frosted glass, rounded-xl, border-2 `#22c55e/30`
- **Padding:** p-8
- **Grid:** 3-column (md breakpoint)
- **Items:**
  1. "No hardware."
  2. "No complex integrations."
  3. "Just smarter operations from Day 1."
- **Text Color:** `#f8fafc`

---

### Values Section

**Background:** `#0f172a`  
**Padding:** py-20 px-6

#### Main Heading
- **Text:** "Our Values"
- **Size:** text-4xl
- **Color:** `#f8fafc`
- **Alignment:** Center
- **Margin:** mb-4

#### Subheading
- **Text:** "The principles that guide everything we build"
- **Size:** text-xl
- **Color:** `#94a3b8`
- **Max-width:** 2xl, centered
- **Margin:** mb-16

#### Values Grid (3-column, lg breakpoint, max-width 5xl)

**1. Impact First:**
- **Icon:** Target (`#22c55e`)
- **Title:** "Impact First"
- **Description:** "Insights must drive real, measurable outcomes."

**2. Simplicity:**
- **Icon:** Lightbulb (`#38bdf8`)
- **Title:** "Simplicity"
- **Description:** "Dashboards should be powerful, not overwhelming."

**3. Transparency:**
- **Icon:** Shield (`#a855f7`)
- **Title:** "Transparency"
- **Description:** "No black-box recommendations."

**4. Scalability:**
- **Icon:** Zap (`#22c55e`)
- **Title:** "Scalability"
- **Description:** "Built for portfolios and enterprises."

**5. Sustainability:**
- **Icon:** TrendingUp (`#38bdf8`)
- **Title:** "Sustainability"
- **Description:** "Every insight should push the world toward a cleaner grid."

**Card Style:**
- Frosted glass, rounded-xl, border `#334155`, hover `#22c55e`
- Padding: p-6
- Icon in colored background box (w-14 h-14)
- Hover: Icon scales up (scale-110)

---

### Team CTA Section

**Background:** `#111827`  
**Padding:** py-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decoration
- Blue floating blob (`#38bdf8`): 96x96, bottom-right, 2s delay

#### Content (Centered, max-width 3xl)
- **Icon:** Users icon in gradient circle (green to blue), glow effect
- **Heading (H2):**
  - Text: "Join us in building the future of energy intelligence"
  - Size: text-4xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Subheading:**
  - Text: "We're always looking for passionate individuals who want to make an impact on how buildings use energy."
  - Size: text-xl
  - Color: `#94a3b8`
  - Margin: mb-8
- **CTA Buttons:**
  - **Primary:** "View Open Positions" (gradient primary)
  - **Secondary:** "Learn Our Story" (border style)
  - Padding: px-10 py-4

---

## Contact Page

**Route:** `/contact`  
**Background:** `#0f172a`

### Hero Section

**Background:** Gradient from `#0f172a` to `#111827`  
**Padding:** pt-32 pb-20 px-6  
**Position:** Relative with overflow hidden

#### Background Decorations
- Blue floating blob (`#38bdf8`): 96x96, top-left
- Green floating blob (`#22c55e`): 80x80, top-right, 5s delay

#### Content (Centered, max-width 4xl)
- **Badge:** "Contact Us"
  - Style: Rounded-full, background `#22c55e/10`, border `#22c55e/30`, text `#22c55e`
  - Padding: px-6 py-2
  - Margin: mb-6
- **Heading (H1):**
  - Text: "Let's Talk Energy Intelligence"
  - Size: text-5xl lg:text-6xl
  - Color: `#f8fafc`
  - Margin: mb-6
- **Subheading:**
  - Text: "Fill out the form and our team will help you understand your energy data, assess your optimization potential, and explore real use cases for your building type."
  - Size: text-xl
  - Color: `#94a3b8`
  - Max-width: 3xl, centered

---

### Main Contact Section

**Background:** `#111827`  
**Padding:** py-20 px-6

#### Layout: 3-Column Grid (lg breakpoint)

**Left Column: Contact Info (1 column span)**

**Heading:**
- **Text:** "Get in Touch"
- **Size:** text-2xl
- **Color:** `#f8fafc`
- **Margin:** mb-6

**Description:**
- **Text:** "We respond within 24 hours. No sales pressure — just insights."
- **Color:** `#94a3b8`
- **Margin:** mb-8

**Contact Info Cards (4 cards):**

1. **Email:**
   - **Icon:** Mail (`#22c55e`)
   - **Title:** "Email"
   - **Detail:** "theinspiredtechlabs@gmail.com"
   - **Color Accent:** `#22c55e`

2. **Phone:**
   - **Icon:** Phone (`#38bdf8`)
   - **Title:** "Phone"
   - **Detail:** "+1 (226) 724-2781"
   - **Color Accent:** `#38bdf8`

3. **Location:**
   - **Icon:** MapPin (`#a855f7`)
   - **Title:** "Location"
   - **Detail:** "Windsor, Ontario"
   - **Color Accent:** `#a855f7`

4. **Response Time:**
   - **Icon:** Clock (`#22c55e`)
   - **Title:** "Response Time"
   - **Detail:** "Within 24 hours"
   - **Color Accent:** `#22c55e`

**Card Style:**
- Frosted glass, rounded-xl, border `#334155`, hover `#22c55e`
- Padding: p-6
- Icon in colored background box (w-12 h-12)
- Hover: Icon scales up (scale-110)

**Trust Badges Card:**
- **Container:** Frosted glass, rounded-xl, border `#334155`
- **Title:** "What we'll help you with:"
- **List:**
  1. Understand your energy data
  2. Assess optimization potential
  3. Explore use cases
  4. See a tailored platform demo
- **Style:** Green dot (`#22c55e`) with text `#f8fafc`, text-sm

**Right Column: Contact Form (2 column span)**

**Container:** Frosted glass, rounded-2xl, border `#334155`  
**Padding:** p-8 md:p-12  
**Glow:** Soft glow, absolute, -inset-4, 10% opacity

**Form Title:**
- **Text:** "Book Your Demo"
- **Size:** text-2xl
- **Color:** `#f8fafc`
- **Margin:** mb-8

**Form Fields:**

1. **Name** (required)
   - Label: "Name *"
   - Input: Text, placeholder "John Doe"
   - Style: Background `#0f172a`, border `#334155`, focus `#22c55e`

2. **Email** (required)
   - Label: "Email *"
   - Input: Email, placeholder "john@company.com"
   - Style: Same as Name

3. **Organization** (required)
   - Label: "Organization *"
   - Input: Text, placeholder "Acme Corporation"
   - Style: Same as Name

4. **Type of Facility** (required, dropdown)
   - Label: "Type of Facility *"
   - Options:
     - Select a facility type (placeholder)
     - Commercial Building
     - Industrial / Manufacturing
     - Campus / Multi-Site Portfolio
     - Healthcare Facility
     - Educational Institution
     - Other
   - Style: Same as Name

5. **Message** (optional)
   - Label: "Message"
   - Input: Textarea, 5 rows
   - Placeholder: "Tell us about your energy challenges and goals..."
   - Style: Same as Name, resize-none

**File Upload Suggestion:**
- **Container:** Background `#0f172a`, border `#334155`, rounded-lg, padding-4
- **Text:** "Optional:"
- **Description:** "Attach a month of sample energy data to receive insights in your demo"
- **Button:** "Upload Data (CSV, PDF)"
  - Style: Border `#334155`, hover `#22c55e`, text-sm
  - **Note:** Currently non-functional (button only)

**Submit Button:**
- **Text:** "Book My Demo" (with Send icon)
- **Loading State:** "Sending..."
- **Style:** Full width, gradient primary, white text, rounded-xl
- **Padding:** px-8 py-4
- **Hover:** Glow effect, icon translates right
- **Disabled State:** Opacity 50%, cursor not-allowed

**Success Message:**
- **Text:** "✓ Thank you! We'll be in touch within 24 hours."
- **Style:** Background `#22c55e/10`, border `#22c55e/30`, text `#22c55e`
- **Padding:** p-4, rounded-lg, text-center

**Error Message:**
- **Text:** "Something went wrong. Please email us directly at theinspiredtechlabs@gmail.com"
- **Style:** Background `#ef4444/10`, border `#ef4444/30`, text `#ef4444`
- **Padding:** p-4, rounded-lg, text-center

**Privacy Note:**
- **Text:** "We respect your privacy. Your information will never be shared with third parties."
- **Style:** Text `#94a3b8`, text-sm, text-center

**Form Integration:**
- **Service:** Formspree
- **Endpoint:** https://formspree.io/f/mvgerekn
- **Method:** POST (JSON)
- **Honeypot Field:** `_gotcha` (hidden, prevents spam)
- **Subject Field:** `_subject` = "New Demo Request - Inspired Energy Optimizer"

---

### Bottom Banner

**Background:** `#0f172a`  
**Border:** Top border `#334155`  
**Padding:** py-16 px-6

#### Content (Centered, max-width 4xl)
- **Container:** Frosted glass, rounded-2xl, border `#334155`
- **Padding:** p-8 md:p-12
- **Alignment:** Center

**Heading:**
- **Text:** "Prefer to talk first?"
- **Size:** text-2xl
- **Color:** `#f8fafc`
- **Margin:** mb-4

**Description:**
- **Text:** "Schedule a quick 15-minute call to discuss your needs before the full demo."
- **Color:** `#94a3b8`
- **Margin:** mb-6

**CTA Button:**
- **Text:** "Schedule a Call"
- **Style:** Border-2 `#22c55e`, text `#22c55e`, hover background `#22c55e/10`
- **Padding:** px-8 py-3
- **Note:** Currently non-functional (button only)

---

## Design System Reference

### Color Palette

#### Primary Colors
- **Green (Primary):** `#22c55e`
  - Used for: Primary CTAs, success states, positive metrics, active states
  - Variations: `/10` (10% opacity), `/20` (20% opacity), `/30` (30% opacity)

- **Blue (Secondary):** `#38bdf8`
  - Used for: Secondary accents, forecasting features, informational elements
  - Variations: `/10`, `/20`, `/30`

- **Purple (Tertiary):** `#a855f7`
  - Used for: Tertiary accents, anomaly detection, special highlights
  - Variations: `/10`, `/20`, `/30`

#### Neutral Colors
- **Background Dark:** `#0f172a` (slate-900)
- **Background Medium:** `#111827` (gray-900)
- **Background Card:** `#1f2937` (gray-800)
- **Border:** `#334155` (slate-700)
- **Text Primary:** `#f8fafc` (slate-50)
- **Text Secondary:** `#94a3b8` (slate-400)

#### Status Colors
- **Error/Alert:** `#ef4444` (red-500)
- **Warning:** `#f59e0b` (amber-500)
- **Success:** `#22c55e` (green-500)

### Typography

#### Font Family
- **System Font Stack:** Uses system fonts (no custom font imports)
- **For Canva/Design Tools:** Use equivalent fonts:
  - **Sans-serif:** Inter, SF Pro Display, or Roboto
  - **Monospace:** System default (for code/data)

#### Font Sizes
- **H1:** text-5xl lg:text-6xl (48px / 60px)
- **H2:** text-4xl (36px)
- **H3:** text-3xl (30px)
- **H4:** text-2xl (24px)
- **Body Large:** text-xl (20px)
- **Body:** text-base (16px, default)
- **Body Small:** text-sm (14px)

#### Font Weights
- **Headings:** Default (600-700)
- **Body:** Default (400)
- **Bold:** font-semibold (600)

### Spacing System

#### Padding
- **Section:** py-20 px-6 (80px vertical, 24px horizontal)
- **Card:** p-6 (24px) or p-8 (32px)
- **Button:** px-8 py-4 (32px horizontal, 16px vertical) or px-10 py-4

#### Margins
- **Section Bottom:** mb-16 (64px) or mb-12 (48px)
- **Element Bottom:** mb-6 (24px) or mb-4 (16px)
- **Gap (Grid/Flex):** gap-4 (16px), gap-6 (24px), gap-8 (32px)

### Component Styles

#### Buttons

**Primary Button:**
- Background: Gradient primary (green to blue)
- Text: White
- Border Radius: rounded-xl (12px)
- Padding: px-8 py-4 or px-10 py-4
- Hover: Glow effect
- Transition: transition-all

**Secondary Button:**
- Background: Transparent
- Border: 2px solid `#334155`
- Text: `#f8fafc`
- Border Radius: rounded-xl
- Padding: px-8 py-4 or px-10 py-4
- Hover: Border color changes to `#22c55e`
- Transition: transition-all

#### Cards

**Frosted Glass:**
- Background: Semi-transparent dark
- Backdrop Filter: blur effect
- Border: `#334155`
- Border Radius: rounded-xl or rounded-2xl
- Padding: p-6 or p-8

**Gradient Card:**
- Background: Gradient (varies by context)
- Border: Colored border (e.g., `#22c55e/30`)
- Glow: Colored glow effect
- Border Radius: rounded-2xl or rounded-3xl

#### Badges

**Status Badge:**
- Background: Colored with opacity (e.g., `#22c55e/10`)
- Border: Colored border (e.g., `#22c55e/30`)
- Text: Colored text (e.g., `#22c55e`)
- Border Radius: rounded-full
- Padding: px-4 py-2 or px-6 py-2

### Animations

#### Chart Animations
- **Duration:** 1500ms
- **Easing:** ease-in-out
- **Repeat:** Every 10 seconds (Hero section)

#### KPI Animations
- **Type:** Fade in with translate-y
- **Duration:** 1000ms
- **Stagger:** 100ms delay between items
- **Repeat:** Every 10 seconds (Hero section)

#### Floating Blobs
- **Animation:** Continuous floating motion
- **Delay:** Varies (0s, 2s, 3s, 5s, 10s)

#### Hover Effects
- **Scale:** hover:scale-105 or hover:scale-110
- **Border Color:** Changes on hover
- **Glow:** Glow effect on hover
- **Transition:** transition-all

### Layout Breakpoints

- **Mobile:** Default (< 768px)
- **Tablet (md):** ≥ 768px
- **Desktop (lg):** ≥ 1024px
- **Large Desktop (xl):** ≥ 1280px

### Grid Systems

- **2-Column:** `grid lg:grid-cols-2`
- **3-Column:** `grid md:grid-cols-3`
- **4-Column:** `grid md:grid-cols-4` or `grid lg:grid-cols-4`

### Container

- **Max-width:** Container with mx-auto
- **Padding:** px-6 (24px horizontal)

---

## Content Notes

### External Links
- **YouTube Demo:** https://youtu.be/V71PE_jFGdU?si=cZBEBzkUNpRjG8O4
  - Used in: Hero "Watch Overview" button, Product "Explore Live Demo" button
  - Opens in new tab with `target="_blank"` and `rel="noopener noreferrer"`

### Form Integration
- **Service:** Formspree
- **Form ID:** mvgerekn
- **Endpoint:** https://formspree.io/f/mvgerekn
- **Spam Protection:** Honeypot field (`_gotcha`)

### Placeholder Content
- Social media links in footer (LinkedIn, Twitter, GitHub)
- Some footer navigation links (Pricing, Integrations, API, Blog, Careers)
- "Schedule a Call" button on Contact page
- File upload functionality (button exists but not functional)

### Commented Out Content
- "Trusted by energy managers at:" section in FinalCTA component
- **Reason:** No customers acquired yet
- **Location:** `src/components/FinalCTA.tsx` (lines 48-55)

---

## Page Structure Summary

### Home Page (`/`)
1. Hero Section
2. Problem & Solution
3. Features
4. Dashboard Gallery
5. How It Works
6. Use Cases
7. Proof
8. Final CTA

### Product Page (`/product`)
1. Hero Section
2. Real-Time Monitoring
3. Smart Forecasting
4. Anomaly Detection
5. Actionable Playbooks
6. CTA Section

### Solutions Page (`/solutions`)
1. Hero Section
2. Commercial Buildings
3. Industrial & Manufacturing
4. Campuses & Multi-Site Portfolios
5. Stats Section
6. CTA Section

### About Page (`/about`)
1. Hero Section
2. Vision Section
3. Mission Section
4. Why We Built This
5. Values Section
6. Team CTA Section

### Contact Page (`/contact`)
1. Hero Section
2. Main Contact Section (Info + Form)
3. Bottom Banner

---

**End of Documentation**

