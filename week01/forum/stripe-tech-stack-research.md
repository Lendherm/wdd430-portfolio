# Stripe Dashboard — Technology Stack Research

**Application:** Stripe Dashboard  
**Type:** Payment processing platform with complex business logic  
**Sources:** Stripe.dev engineering blog, Stripe careers postings, QCon talks, public engineering write-ups

---

## Step 1: Application Overview

The **Stripe Dashboard** is the merchant-facing web app where businesses manage payments, customers, subscriptions, payouts, disputes, and analytics. Behind that UI sits Stripe’s payment APIs and infrastructure that must stay extremely reliable (Stripe has publicly discussed ~99.999% uptime goals) while handling enormous payment volume.

---

## Step 2: Technology Stack by Layer

### Frontend (User Interface)

| Technology | Role |
|---|---|
| **React** | Component-based UI for the Dashboard |
| **TypeScript** | Static typing for the large Dashboard codebase (migrated from Flow in a single PR of ~3.7M lines) |
| **JavaScript** | Core web language for browser apps |
| **Sail** | Stripe’s internal design system of typed React components |
| **HTML / CSS / Sass** | Structure and styling (mentioned in Stripe frontend job postings) |
| **D3.js / Canvas / SVG** (analytics surfaces) | Charts and dense data visualizations in Dashboard analytics |

**Why this matters:** The Dashboard is a large, long-lived SPA. React + TypeScript help many teams ship UI safely; Sail keeps the product visually and behaviorally consistent.

---

### Backend (Server-side Logic)

| Technology | Role |
|---|---|
| **Ruby** | Primary language for Stripe’s core API / business logic |
| **Sorbet** | Stripe’s open-source type checker for Ruby (type safety at scale) |
| **Go** | Infrastructure and performance-sensitive services |
| **Java / Scala** | Supporting services; Scala used for data/streaming/ETL-style work |
| **REST API + Webhooks** | Public interface merchants and the Dashboard talk to |
| **AWS** | Cloud hosting |
| **Docker / Kubernetes** | Packaging and orchestrating services |

**Why this matters:** Payments need clear business rules, auditing, and reliability. Ruby enabled fast product iteration early on; Sorbet added type safety as the Ruby codebase grew into millions of lines. Go helps where performance and simpler concurrency matter.

---

### Data Layer (Storage & Retrieval)

| Technology | Role |
|---|---|
| **DocDB (MongoDB-based)** | Stripe’s self-managed document database (core transactional store) |
| **Redis** | Caching / fast lookups |
| **Elasticsearch** | Search across Dashboard/API data |
| **Apache Kafka** | Event streaming between systems |
| **MySQL / PostgreSQL** (supporting uses) | Relational stores used in parts of the platform historically / for specific workloads |

**DocDB highlights (from Stripe’s engineering blog):**
- Built on **MongoDB Community**, heavily customized in-house
- Serves millions of queries per second
- Thousands of shards, petabytes of financial data
- Designed for high availability and zero-downtime data migrations

**Why this matters:** Payment objects (customers, charges, invoices, subscriptions) fit a flexible document model well, and Stripe needed horizontal scale + extreme uptime that they could control themselves.

---

## How the Layers Communicate

1. **Browser (React + TypeScript)** renders the Dashboard UI.
2. The frontend sends **HTTP requests** to Stripe’s **REST APIs** (authenticated sessions for Dashboard users).
3. **Ruby (and other) backend services** enforce business rules: payments, refunds, permissions, reporting.
4. Backend services **read/write** DocDB (MongoDB), use **Redis** for cache, **Elasticsearch** for search, and publish/consume events via **Kafka**.
5. Responses flow back as **JSON** to the frontend, which updates the UI.
6. External apps also receive **webhooks** when payment events happen (asynchronous notifications).

```
User → Dashboard (React/TS) → REST API (Ruby/Go/…) → DocDB / Redis / ES / Kafka
                 ← JSON responses ←──────────────────────────────┘
```

---

## Key Takeaways for Full-Stack Thinking

- A “simple” dashboard is really **UI + API + databases + cache + search + events**.
- Stripe mixes languages **by job**: Ruby for product/API, Go for infra speed, TypeScript for UI safety.
- The data layer is not one database — it’s a **system** (primary store + cache + search + streaming).

---

## Sources

1. [Migrating millions of lines of code to TypeScript](https://stripe.dev/blog/migrating-to-typescript) — Stripe.dev  
2. [How Stripe’s document databases supported 99.999% uptime…](https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations) — Stripe.dev  
3. [Sorbet: Stripe’s type checker for Ruby](https://stripe.dev/blog/sorbet-stripes-type-checker-for-ruby) — Stripe.dev  
4. Stripe careers: Frontend Engineer postings (React, TypeScript, Sail, Sass)  
5. QCon: “The Architecture That Helps Stripe Move Faster” (Ruby, Go, Scala, MongoDB mix)
