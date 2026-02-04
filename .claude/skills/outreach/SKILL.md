---
name: outreach
description: Craft psychologically-targeted, personalized outreach emails
allowed-tools:
  - Glob
  - Read
  - Edit
  - Write
  - WebFetch
  - WebSearch
  - Bash
---

# Psychology-First Outreach System

## Core Philosophy

**NEVER use templates.** Each email is a unique psychological conversation with a real person. Your job is to understand that person's situation, fears, desires, and motivations—then speak directly to them.

The goal is not to "send emails." The goal is to make one person feel genuinely understood, so they want to work with us.

## The 5-Step Psychology Process

### Step 1: Deep Target Research

Before writing a single word, spend time understanding the target. Read their:
- Website copy (what values do they emphasize?)
- About page (founder story, mission, personality)
- Blog posts (what do they care about?)
- Twitter/LinkedIn (recent wins, struggles, tone)
- Pricing page (who do they serve? struggling indie or funded startup?)

**You're looking for:**
- Their current stage (early/growth/established)
- Their apparent personality (formal/casual, technical/marketing-focused)
- Recent events (launch, funding, pivot, growth milestone)
- Pain indicators (hiring? scaling? competing with bigger players?)
- Values they signal (bootstrapped pride? impact focus? technical excellence?)

### Step 2: Identify Psychological Levers

Based on research, select 1-2 primary psychological principles to apply:

**Reciprocity** - Give first, unexpectedly
- Best for: Tools that aren't well-known yet
- Approach: "I added your tool to our directory because [specific genuine reason]. No ask needed."
- Later follow-up can mention featured listing as "by the way"

**Social Proof** - Show others like them succeed
- Best for: Tools competing with established players
- Approach: Reference similar tools that are featured, without being salesy
- "I noticed [Competitor] gets a lot of traffic from our directory..."

**Scarcity** - Limited opportunity (only if genuine)
- Best for: Competitive categories with multiple good options
- Approach: "We only feature one tool per category at a time"
- NEVER fake scarcity. Only use when true.

**Authority** - Establish credibility through specificity
- Best for: Skeptical, data-driven founders
- Approach: Lead with specific traffic numbers, conversion data, audience demographics

**Liking** - Find genuine common ground
- Best for: Founders with visible personalities/values
- Approach: Reference their blog post, agree with their stance, share similar experience

**Commitment/Consistency** - Small yes leads to bigger yes
- Best for: Busy founders who might not respond to direct pitch
- Approach: Ask a small question first, build relationship before any mention of paid

**Unity** - "We're the same tribe"
- Best for: Indie/bootstrapped founders
- Approach: Speak as fellow indie founder, reference shared struggles/values

### Step 3: Choose the Right Angle

Based on the tool and founder, pick ONE angle. Never combine multiple—it dilutes impact.

**The Congratulations Angle** (for recent wins)
- They just launched/raised/hit milestone
- Lead with genuine recognition of achievement
- Featured listing framed as "momentum accelerator"

**The Problem-Solution Angle** (for struggling visibility)
- They have a great product but aren't well-known
- Acknowledge the frustration of being overlooked
- Featured listing framed as "shortcut past the noise"

**The Competitor Angle** (for tools competing with giants)
- They're up against Stripe/Vercel/etc.
- Reference the David vs Goliath dynamic
- Featured listing framed as "leveling the playing field"

**The Insider Angle** (for founder-to-founder connection)
- They seem to value indie/bootstrapped community
- Speak as peer, not vendor
- Featured listing almost mentioned as afterthought

**The Data Angle** (for analytical founders)
- They clearly value metrics and ROI
- Lead with specific numbers
- Featured listing framed as "trackable experiment"

### Step 4: Write the Email

Rules for every email:

1. **No corporate speak.** Write like a human texting a colleague.
2. **First line must hook.** No "I hope this email finds you well."
3. **Show you've done homework.** Reference something specific only someone who researched would know.
4. **One clear emotion.** Pride? Frustration? Curiosity? Pick one and speak to it.
5. **Short.** Max 6-8 sentences. Nobody reads walls of text.
6. **Soft CTA.** "Thought you might be interested" not "Click here to buy now"
7. **No fake urgency.** No "limited time" unless actually true.
8. **Sound like you.** Casual, direct, genuine.

**Subject line psychology:**
- Curiosity gap: Makes them need to open to resolve tension
- Personal reference: Their name, their tool, something specific
- No clickbait: Never mislead about contents
- Short: 4-7 words max

### Step 5: Calibrate and Send

Before sending, ask yourself:
- Would I respond to this if I received it?
- Does this sound like AI wrote it? (If yes, rewrite)
- Is there anything generic that could apply to any tool? (If yes, make specific)
- Am I asking for too much too soon?
- Does this respect their time?

## Example Psychological Approaches

### Example A: Small, Passionate Founder
**Research revealed:** Solo founder, bootstrapped, active on Twitter about indie life, recently complained about being overshadowed by VC-funded competitors.

**Principle:** Unity + Problem-Solution
**Angle:** Insider

**Email:**
```
Subject: noticed your tweet about [competitor]

Hey [name],

Saw your thread about how [VC-funded competitor] keeps showing up everywhere while bootstrapped tools get buried. Felt that.

We built founderstoolkit.org partly because of this problem—a directory specifically for solo founders to find tools built by people like them, not the default enterprise options.

[Tool] is already listed under [category]. If you ever want more visibility there, we do featured listings—puts you at the top of the category. €39/mo, cancel whenever.

No pressure either way. Just thought you'd want to know the option exists.

[signature]
```

### Example B: Data-Driven, Growing Company
**Research revealed:** Technical founder, content focuses on metrics and experiments, recently shared growth numbers, pricing indicates mid-market focus.

**Principle:** Authority
**Angle:** Data

**Email:**
```
Subject: [Tool] visibility data

[name],

Quick data point: our [category] page gets ~[X] monthly visits, 90% solo founders actively looking for tools. [Tool] is listed but below the fold.

Featured listings move tools to position 1 + homepage placement. €39/mo. Most tools see [Y] additional click-throughs.

Worth a test if you're optimizing acquisition channels.

[link]

[signature]
```

### Example C: Recent Launch/Milestone
**Research revealed:** Just launched new version, founder posting excitedly about it, seems to value momentum.

**Principle:** Liking + Reciprocity
**Angle:** Congratulations

**Email:**
```
Subject: congrats on [specific thing]

[name],

Just saw the [launch/update/milestone]—[specific genuine compliment about what they did].

Added [Tool] to founderstoolkit.org a while back because [genuine reason], figured now's a good time to mention we do featured listings if you want to ride the momentum. Top of category + badge + homepage.

Either way, nice work on [specific thing again].

[signature]
```

## Process for Each Outreach Session

1. **Select 3-5 candidates** (commercial tools, not recently contacted)
2. **Spend 10-15 minutes researching each one individually**
3. **Take notes on psychological profile**
4. **Decide principle + angle for each**
5. **Write unique email for each—no copy-paste between them**
6. **Review: would this stand out in my inbox?**
7. **Send via Resend API**
8. **Log the approach used (for learning what works)**

## Technical: Sending via Resend

```bash
curl -X POST 'https://api.resend.com/emails' \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "Founder Toolkit <hello@founderstoolkit.org>",
    "to": "contact@tool.com",
    "subject": "subject line here",
    "text": "email body here"
  }'
```

## Logging for Learning

After each session, log to `scripts/outreach-log.md`:
```markdown
## YYYY-MM-DD

### [Tool Name]
- **Psychological profile:** [brief notes]
- **Principle used:** [which Cialdini principle]
- **Angle:** [which angle from above]
- **Email sent to:** [email]
- **Response:** [pending/replied/converted/no-response]
- **Notes:** [what to do differently next time]
```

Track what works over time. Double down on winning approaches.

## Hard Rules

- **Max 5 emails per day.** Quality over quantity.
- **Never sound like AI.** If in doubt, make it more casual.
- **Never lie.** No fake scarcity, no inflated numbers.
- **Never email twice in 30 days.** Respect their inbox.
- **Never email tools marked `doNotContact: true` or `declined: true`**
- **Skip if no good email found.** Don't waste time on info@ addresses.
- **Update tool frontmatter** with `lastOutreach` and `outreachEmail` after sending.

## Measuring Success

Don't measure emails sent. Measure:
- Reply rate (target: 20%+)
- Positive reply rate (target: 10%+)
- Conversion rate (target: 5%+)

One converted customer from 20 well-crafted emails beats 100 template blasts.
