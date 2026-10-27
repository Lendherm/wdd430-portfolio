# Week 01 Forum — Copy/Paste Post (Teams)

> Attach **`architecture-diagram.png`** to your Teams post, then paste the text below into the **Week 01 Forum** channel.

---

## Post text

**Application researched:** Stripe Dashboard (payment processing platform)

I researched the **Stripe Dashboard** — the web app merchants use to manage payments, customers, subscriptions, payouts, and analytics. It’s a great example of how frontend, backend, and data systems work together in a real production product.

### Architecture diagram
*(Attach `architecture-diagram.png`)*

**Layers at a glance:**
- **Frontend:** React, TypeScript, Sail (Stripe’s design system), CSS/Sass  
- **Backend:** Ruby (+ Sorbet for types), Go for some services, REST API + webhooks, AWS, Docker/Kubernetes  
- **Data layer:** DocDB (MongoDB-based), Redis, Elasticsearch, Apache Kafka  

**How data flows:** The Dashboard UI sends HTTP requests to Stripe’s REST API → backend services apply business rules → data is read/written in DocDB (with Redis for caching and Elasticsearch for search) → JSON responses update the UI. Webhooks also notify external apps when payment events happen.

### 2–3 technologies I discovered (and why Stripe likely chose them)

1. **TypeScript (frontend)** — Stripe migrated millions of lines of Dashboard code from Flow to TypeScript. With a huge UI codebase and many engineers, strong typing helps catch bugs early and makes collaboration safer.

2. **Ruby + Sorbet (backend)** — Stripe is well known as a Ruby shop for its core API/business logic. As the codebase grew, they built **Sorbet** (a Ruby type checker) to keep developer speed *and* reliability — critical when you’re moving money.

3. **DocDB on MongoDB (data)** — Stripe’s primary store is a customized document database built on MongoDB. Payment-related objects fit a flexible document model, and Stripe needed extreme scale and uptime (they’ve written about ~99.999% availability and millions of queries per second), so they run and customize it themselves.

### One question
Stripe uses Ruby for a lot of the core API, but also Go for infrastructure/performance services. **How do teams decide when a new feature should stay in the Ruby API versus become a separate Go service?** I’m curious how that boundary works in a payments company where correctness matters as much as speed.

---

Looking forward to reading what everyone else chose (Netflix, Spotify, GitHub, Figma, etc.)!
