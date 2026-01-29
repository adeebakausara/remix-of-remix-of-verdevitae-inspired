import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/apex-consultancy-and-coaching/discovery-call";

// Helper function to render content with "Book a call" as a highlighted link
const renderContentWithCalendlyLink = (content: string) => {
  const regex = /(Book a call)/gi;
  const parts = content.split(regex);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === "book a call") {
      return (
        <a
          key={index}
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
const categories = ["All", "Burnout", "Wellness", "Performance", "Leadership"];

const blogPosts = [
  {
    id: 1,
    title: "How High-Achieving Women Silently Lose Their Edge, And the 10-Minute Daily Practice That Brings It Back Without Slowing Down",
    excerpt: "Let's be honest with ourselves. As high-achieving women, we know what it feels like to carry the weight of doing it all well. We show up strong, deliver results, guide teams, make tough calls, and still manage the quiet load at home, the hormonal shifts that no one talks about enough, the unspoken rule that we must always seem composed.",
    fullContent: `In 2026, that load hasn't gone away. If anything, the work has become more human-focused, deeper relationships, creative thinking under pressure, holding space for uncertainty, while machines take the predictable parts. And yet we keep pushing, because that's what we've always done to prove we belong here.

The truth is, this constant pushing leads to a slow, silent depletion that we often don't name until it's too late. We stay competent on the outside: deadlines met, people supported, decisions made. But inside, the capacity to stay open and present starts to shrink. Our responses get shorter. Curiosity fades. The body keeps score: that ongoing tightness in your neck or chest, sleep that feels shallow even when you get the hours, thoughts that race and won't settle. We tell ourselves it's just the price of ambition, the cost of being capable. But it's more than that. It's our nervous system telling us the balance is off.

The science behind this is clear and consistent. When stress lingers without enough recovery, the body's fight-or-flight system stays engaged. Cortisol and adrenaline stay high, attention tightens to what's urgent, and flexible thinking gives way to automatic habits. For women, this often layers with natural cycles that can make us more sensitive to stress at certain times, plus the extra responsibilities that don't stop when the workday ends. The result? We make choices that get us through the moment but not the long game. Interactions feel more protected than connected. We project strength while hiding the fatigue underneath.

This isn't a personal failing. It's what happens when we try to meet impossible expectations without the right support for our whole selves. In 2026, the gap feels wider because the work asks for more empathy, more insight, more steady presence, exactly the things that suffer when we're running on empty. Quick fixes like apps or short breaks help for a moment, but they don't rebuild the deep capacity we need to keep showing up fully without burning out.

The ripple effects matter too. When we deplete without noticing, our leadership feels inconsistent. Teams pick up on the subtle shifts: a flatter tone, quicker endings to conversations, less attunement to what's really going on. Trust softens. Cohesion weakens. Innovation slows because risk feels too heavy. People leave when they sense the gap between what we say we value and how we're actually living it.

The good news is that we can change this pattern. It starts with gentle, honest observation of ourselves, not judging, just noticing. Take ten minutes in the morning and evening to check in: What's my pulse doing? How deep is my breath? Where is tension living in my body? What are my thoughts racing toward? Write down one moment in the day when you felt yourself contract or shut down. Over time, these small acts of attention reveal what's really happening beneath the surface.

From there, build in consistent practices that restore you. Spend twenty to thirty minutes each day simply paying attention to your breath or the sensations in your body. It sounds simple, but it trains your system to come back from distraction without force. Add moderate movement a few times a week, it helps balance hormones and strengthens your heart's resilience. Set clear boundaries around your time and energy: protect your evenings, communicate when you're off, allow yourself real rest. These aren't luxuries. They are the structures that let you show up as your full, capable self.

In your professional world, bring this awareness into your relationships. Ask colleagues how they're really holding up, no apologies needed. Talk about boundaries as smart design choices that make you better at your work, not as weaknesses. Show what recovery looks like: take a short walk between meetings, step away when you need to reset. When we model this, we give others permission to do the same, and the whole team benefits.

Organisations that truly support women build this in: training that recognises the unique ways strain shows up for us, schedules with built-in breathing room, a culture that treats our well-being as essential, not optional.

We stumble sometimes. We overthink the need for change but keep old habits. We set boundaries in our heads but override them in practice. We want quick fixes and get discouraged when steady effort is what works. That's human. The key is to keep showing up for ourselves with compassion and consistency.

In 2026, we don't have to choose between high performance and feeling whole. The real strength comes from regulated endurance, the ability to meet demands while staying connected to our own experience. Machines don't tire or feel. We do. And when we honour that, we bring depth, empathy, and real adaptability that nothing else can replace.

If this feels familiar, if you're holding it together but at a growing cost, know that there is a way forward. At Verde Vitae Woman, we guide high-achieving women through exactly this: assessing your current load and cycles, creating personalised practices that fit your life, holding accountability, and tracking real gains in energy, presence, and performance.

Book a call today to explore how we can support you in reclaiming your endurance without sacrifice.`,
    date: "January 28, 2026",
    readTime: "8 min read",
    category: "Burnout",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Why Most High-Performing Women Are Leading on Empty, And the One Daily Habit That Lets You Carry Both Career and Life Without Breaking",
    excerpt: "Let's talk about the double load we carry as women. We show up for excellence at work, leading teams, hitting targets, handling crises, while also holding the invisible responsibilities at home, caregiving, and the constant effort to appear completely together.",
    fullContent: `In 2026, that load hasn't lightened. Automation helps with some tasks, but the heart of the work, building relationships, making adaptive decisions, navigating ethical grey areas, stays deeply human and demanding. We absorb it all while keeping our composure, often paying a quiet price in our own well-being.

This strain builds slowly. On the surface, everything looks solid: goals achieved, people supported, problems solved. But inside, the space for real nuance starts to close. Responses feel more automatic. Curiosity pulls back. The body keeps sending signals: tightness across your shoulders or chest, breathing that stays shallow in tense moments, sleep that doesn't fully restore you. We tell ourselves it's just what success looks like. But it's our nervous system saying the balance is off.

The body responds in predictable ways to ongoing pressure. When stress stays high without recovery, fight-or-flight stays engaged. Cortisol and adrenaline linger. Attention tightens to survival mode. Thinking becomes more habitual than flexible. For women, this layers with hormonal cycles that can heighten sensitivity at certain times, caregiving that extends availability, and the cultural message that we must always seem steady. We choose quick fixes over deeper solutions, guard our energy in conversations, and project strength while hiding the wear.

Recent data shows this clearly. Women in senior roles experience frequent burnout at higher rates than men in similar positions, six in ten compared to half. Globally, many working women describe moderate to high ongoing pressure, worsened by work-life overlap and unclear boundaries. Leaders feel this most: modelling resilience while carrying both organisational uncertainty and personal responsibilities.

In 2026, the stakes feel higher. The work asks for more empathy, more insight under pressure, qualities that fade when we're depleted. The always-on culture and pressure to seem effortless keep the nervous system activated. Generic wellness tools help briefly but don't touch the structural double load or rebuild the capacity we need to thrive long-term.

The impact spreads. When we deplete without addressing it, leadership feels uneven: direction shifts subtly, support seems inconsistent, connection to the team weakens. Trust softens. Innovation slows because risk feels heavier. People leave when they sense the gap between our potential and our lived reality.

Change starts with honest self-compassion. Spend ten minutes morning and evening noticing your state without fixing it: check your pulse, breath depth, tension spots, thought patterns. Note one moment where you felt yourself contract. These small acts reveal what's really happening.

Build from there with steady practices. Twenty to thirty minutes daily of gentle attention to breath or body sensations helps you return from automatic reactions. Moderate movement balances hormones and strengthens your system. Set boundaries around your time and energy, they protect the recovery you need.

Bring this into your relationships. Ask peers how they're really doing, no need to justify the question. Frame boundaries as choices that let you contribute more fully. Model what rest looks like: communicate when you're offline, take short resets openly. When we do this, we create space for everyone.

Organisations that get it right train on the specific ways strain shows up for women, build in flexibility for caregiving and cycles, and treat our capacity as core to success.

We trip up along the way. We analyse the problem but don't change habits. We set boundaries but then override them. We want fast results and get frustrated with gradual progress. That's okay. Real change comes from compassion and consistency.

In 2026, we don't have to lead from exhaustion. Regulated capacity lets us meet demands while staying connected to ourselves. Machines don't carry this load. We do. And when we honour it, we bring empathy, depth, and strength that changes everything.

If the double load is wearing you down, if you're capable but paying too high a price, there is support to redesign this. At Verde Vitae Woman, we work with high-achieving women through tailored programmes: assessing mind, body, emotions, lifestyle, and standards with the S.P.I.R.I.T Framework, identifying friction points, making precise changes, and refining for lasting energy, resilience, and performance.

Book a call today to see how we can help you carry less and lead more fully.`,
    date: "January 25, 2026",
    readTime: "7 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Why So Many High-Performing Female Leaders Are Still Delivering... But Silently Losing Their Edge Every Month",
    excerpt: "Let's name it plainly. Burnout doesn't always look like someone falling apart in the office. In 2026 it often looks like someone who is still delivering, still chairing meetings, still signing off on reports, still replying to emails at speed, but inside the tank is running dangerously low.",
    fullContent: `The person in the mirror looks competent. The performance dashboard looks fine. But the internal capacity to stay open, curious, steady, and present is shrinking.

We miss it because we have trained ourselves to value output over everything else. We reward the person who powers through. We celebrate the leader who never shows strain. So when burnout shows up in its quiet form, it hides behind competence. Decisions get a little narrower. Patience gets a little shorter. Curiosity fades into compliance. The body sends signals, tight chest, shallow breathing in meetings, sleep that feels thin even when you get the hours, but we dismiss them as just stress or part of the job. We tell ourselves it's temporary. We keep going.

The body doesn't lie. When stress lingers without enough genuine recovery, the nervous system stays in fight-or-flight far too long. Cortisol and adrenaline stay elevated. Attention tightens to survival mode. Flexible thinking gives way to automatic habits. For leaders this shows up in subtle ways: quicker to shut down ideas, less able to hold space for difficult conversations, more reactive than responsive. You are still getting results, but the depth, the warmth, the wisdom that great leadership requires starts to thin out.

In 2026 this blind spot is bigger than ever. Automation has taken the predictable work, leaving leaders with the parts that are deeply human: navigating ambiguity, reading unspoken team dynamics, making ethical calls when the data is incomplete, holding people through uncertainty. These are exactly the things that suffer first when we are depleted. You cannot sense the quiet fear in a team member's voice when your own nervous system is screaming for rest. You cannot inspire long-term commitment when your own presence feels flat. You cannot lead with courage when you are secretly running on empty.

Teams feel it before anyone names it. They pick up the flatter tone, the quicker conclusions, the subtle withdrawal. Psychological safety erodes. People stop bringing their full selves. Innovation slows because risk feels too dangerous. Turnover creeps up as people decide they won't burn out for someone who can't see their own depletion.

The research is consistent and sobering. Leaders experience burnout at rates equal to or higher than individual contributors, yet they are the least likely to admit it or seek help. The quiet version is particularly dangerous because it doesn't trigger alarms until the damage is already deep. By the time performance dips noticeably, trust has already leaked away and key people have started looking for the exit.

So how do we turn this around? It starts with the bravest act of leadership: honest self-compassion. Not fixing yourself. Just looking without judgement.

Take ten minutes morning and evening. Sit quietly and check in. How is my breathing right now? Where is tension living in my body? What is my heart rate telling me? What thoughts are looping? Write down one moment in the day when you felt yourself contract, shut down, or push through when you needed to pause. These small acts of attention are the beginning of seeing what you have been trained to ignore.

Then build simple, consistent practices that actually restore you. Twenty to thirty minutes a day of gentle attention to your breath or body sensations. No need to empty your mind, just notice when it wanders and kindly come back. Add movement that feels good and gets your heart working a few times a week. Protect real recovery time: decide when you are offline and honour it. Communicate it clearly to your team. Model it. When the leader takes boundaries seriously, the team starts to believe they can too.

Bring this awareness into your leadership. Ask direct, kind questions in one-to-ones: How are you really holding up? Where is this feeling heavy? Create space for honest answers without rushing to solve. Show what regulated presence looks like: pause before responding, stay present in the conversation, admit when you need a moment to think. These are not signs of weakness. They are signs of strength that others can trust.

Organisations that want to survive this era will make this non-negotiable. Train leaders to recognise depletion in themselves first. Build schedules with breathing room. Treat nervous system health as core infrastructure, not an optional wellness perk.

We all stumble. We intellectualise the problem but keep the old habits. We set boundaries and then break them at 11 p.m. We want instant relief and get discouraged when change is gradual. That is human. What matters is coming back to ourselves with kindness and doing the next right thing.

In 2026, great leadership is not about never feeling strain. It is about recognising it early, responding to it honestly, and protecting the capacity to stay steady for the people who depend on you. Machines don't burn out. We do. And when we honour that truth with courage and care, we bring something to the table no technology can ever match: real, regulated, human leadership.

If this feels familiar, if you are still delivering but paying a growing internal price, if you suspect the blind spot is bigger than you want to admit, there is a clear path forward.

At Verde Vitae we work with leaders who are ready to stop powering through and start leading from a place of genuine capacity. We assess where the depletion is hiding, build simple, enforceable practices that fit your real life, and track meaningful gains in presence, decision quality, and team trust.

Book a call today. You do not have to carry this alone, and you do not have to wait until it breaks to change it.`,
    date: "January 22, 2026",
    readTime: "9 min read",
    category: "Burnout",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Why Always-On Is Stealing Your Sharpest Thinking And the 10-Minute Boundary That Gets It Back Fast",
    excerpt: "Let's just say it straight. We have allowed our phones to own us. We wake up to notifications, we fall asleep scrolling replies, and somewhere in between we convince ourselves that being instantly available is the same as being effective. In 2026, that lie is costing us more than we admit.",
    fullContent: `The machines never switch off. They answer at 3 a.m. with perfect composure. They never feel the jolt of adrenaline when another urgent message lands during dinner. And because they don't, we have now accepted that we shouldn't either. We wear constant connectivity like a badge of importance. Look how needed I am. Look how fast I respond. Look how much I matter.

But our bodies are not servers. They are not designed for perpetual uptime. When the pings never stop, the nervous system never stands down. Cortisol and adrenaline stay elevated long after the crisis has passed. Attention fragments into smaller and smaller pieces. Recovery time stretches longer each month. We still get the work done, we still chair the meetings, we still hit send on the emails, but the quality of what we bring to every interaction is eroding. Decisions get narrower. Patience gets thinner. Presence gets performative.

The research is brutal on this point. People who are always available show higher rates of cognitive fatigue, poorer sleep architecture, and faster decline in complex decision-making ability. Leaders who pride themselves on rapid response times are the same ones making riskier, shorter-term calls six months later. The body keeps the score even when the performance review says outstanding.

In 2026 the irony is painful. Automation has removed huge chunks of mechanical work, leaving us with the parts that only humans can do well: building trust, reading the room, holding creative tension, making brave ethical choices. These are not tasks you can do well when your nervous system is in chronic fight-or-flight. You cannot inspire people when you are secretly running on fumes. You cannot spot subtle team dynamics when your own bandwidth is shot. You cannot lead with wisdom when your attention is a shredded resource.

And teams feel it immediately. They mirror the leader's state. When the leader is always on, the team learns that boundaries are for other people. Psychological safety leaks away. People stop bringing half-formed ideas because they know the reply will be instant and probably curt. Innovation dies in the cracks between notifications.

The cost is not theoretical. It is showing up in turnover numbers, in recruitment difficulty, in the quiet exodus of talent who refuse to burn out for someone else's urgency addiction.

Here is what actually works, and it is simpler than we like to admit. We have to choose to switch off. Not occasionally. Not as a treat. As non-negotiable infrastructure.

Start small and honest. Notice what happens in your body when the next notification lands. Feel the micro-jolt, the breath catch, the impulse to respond instantly. Do not judge it. Just notice it. Ten minutes twice a day is enough to begin rewiring the habit.

Then protect your recovery like you protect your most important meeting. Decide when you are offline and tell people clearly. After 19:00 my phone is in another room. Weekend emails wait until Monday. Use the tools that enforce this for you. Do it visibly. When leaders model real boundaries, teams breathe out and start to trust that they can do the same.

Bring it into the culture. Make response windows explicit. Rotate who carries the urgent pager. Build buffer zones between meetings so people can actually think. Treat being offline as professional, not lazy.

We fall down here all the time. We set the boundary and then break it ourselves at 10 p.m. because one more thing. We announce phone-free Fridays and then send the WhatsApp anyway. We want to be seen as decisive and caring. The truth is that real care starts with protecting our own regulation so we can actually be present when it matters.

In 2026, boundaries are not rude. They are not optional. They are the single most powerful leadership statement you can make. They say: I value depth over speed. I value human beings over servers. I value sustainable performance over the illusion of constant urgency.

Machines will never need this conversation. We do. And when we get it right, we bring something to work that no algorithm can ever fake: genuine presence, real wisdom, and the kind of leadership people will follow anywhere.

If constant connectivity is draining the life out of your leadership and your team, if you know the cost is too high but you are not sure how to change it without looking weak, there is a proven way.

At Verde Vitae we help leaders and teams redesign their relationship with urgency and build boundaries that actually stick. We assess where the leaks are, create simple enforceable systems, and track the gains in decision quality, team trust, and sustainable output.

Book a call today. The work is straightforward, the results are measurable, and the alternative is continuing to pay a price no one can afford.`,
    date: "January 19, 2026",
    readTime: "7 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "The One Thing AI Can't Copy And How 10 Minutes a Day Keeps You Ahead",
    excerpt: "Let's be really honest for a moment. As leaders, we feel the pressure to keep up with everything accelerating around us. Machines are getting faster, smarter, more consistent every day. They don't get tired. They don't second-guess themselves. They just deliver.",
    fullContent: `And yet here we are, human beings, still the ones who have to make the calls that matter most, the ones that involve incomplete information, real people with real feelings, ethical grey areas, and the long-term consequences no algorithm can feel.

In 2026, that contrast is sharper than ever. Automation has taken over so much of the routine work that what's left for us is deeply human: holding space for uncertainty, building trust under pressure, inspiring people when the path isn't clear, making decisions where the data only tells half the story. These are not things machines can do. They don't have hearts that race, bodies that carry tension, minds that replay difficult conversations at 2 a.m. They don't feel the weight of responsibility toward actual human beings.

But here's the truth we don't say out loud enough: we are trying to meet these deeply human demands while running on a nervous system that's often in survival mode. We push through fatigue, override signals of strain, tell ourselves it's just part of being strong. The body keeps the score anyway. Elevated stress hormones linger. Attention tightens to what's urgent instead of what's important. Recovery takes longer each time. We still produce, we still lead, but something essential starts to shrink, the depth of our insight, the warmth in our presence, the steadiness we need to offer others when everything feels unsteady.

The science is straightforward. When the fight-or-flight system stays engaged too long without enough rest and reset, cortisol and adrenaline stay high. The brain narrows its focus to immediate threats. Flexible thinking fades. We make choices that get us through the day but not the year. In leadership roles, this shows up as quicker decisions that miss nuance, conversations that end abruptly, a tone that feels more directive than connective. We may look like we're keeping it together, but the margin for real leadership, the kind that inspires trust and innovation, gets thinner.

This isn't about weakness. It's about biology meeting a world that never stops asking for more. In 2026, the work asks us to be more human precisely because machines are handling the mechanical parts. The roles that remain require empathy, ethical courage, adaptive wisdom, qualities that depend on a regulated nervous system. When we're depleted, we can't access them fully. We react instead of respond. We manage instead of lead. Teams feel the difference even if they can't name it: inconsistency creeps in, psychological safety softens, people start to disengage.

The cost is real. When leaders deplete without replenishing, direction wavers and trust erodes. Innovation slows because risk feels too heavy. Retention drops as people sense the gap between what we say we stand for and how we're actually showing up.

The hopeful part is that we can change this. It begins with honest, gentle attention to ourselves, not fixing, just noticing. Take ten minutes twice a day to check in: How is my breathing right now? Where is tension living in my body? What is my heart rate telling me? What thoughts are racing? Write down one moment when you felt yourself tighten or shut down. These small acts of courage reveal patterns we usually ignore.

From there, build steady, realistic practices that restore your system. Spend twenty to thirty minutes each day simply paying attention to your breath or the sensations in your body. It isn't about emptying your mind; it's about training your system to come back when it wanders. Add movement a few times a week, walking, stretching, anything that feels good and gets your heart moving. It helps balance stress hormones and rebuild resilience. Protect your recovery time: set clear boundaries around when you're available, honour your rest, model what real balance looks like.

When you bring this into your leadership, magic happens. You start to notice when a team member is carrying unspoken strain. You respond with more presence instead of rushing to fix. You create space for honest conversations. You show that being regulated isn't selfish, it's the foundation that allows you to hold space for others.

Organisations that understand this thrive. They train leaders to recognise depletion in themselves and their people. They build schedules with breathing room. They treat nervous system health as essential infrastructure, not an optional extra.

We all stumble. We overthink instead of practise. We set boundaries and then break them. We want instant calm and get frustrated with gradual progress. That's normal. What matters is coming back to ourselves with kindness and consistency.

In 2026, the human advantage isn't about out-computing the machines. It's about staying regulated enough to bring what only humans can bring: depth, empathy, courage, connection. Machines don't tire or feel. We do. And when we honour that truth, we lead in ways that are steady, wise, and truly human.

If you're feeling the gap between what you're capable of and how you're actually showing up, if you're leading hard but paying a quiet price in your own well-being, there is a way to reclaim your capacity.

At Verde Vitae, we guide leaders through exactly this: assessing where your system is carrying too much, creating personalised practices that fit your real life, holding you accountable with compassion, and tracking real gains in presence, decision-making, and team impact.

Book a call today. Explore how we can help you lead from a place of regulated strength rather than depletion.`,
    date: "January 16, 2026",
    readTime: "8 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Why You're Already Penalised for Kids You Don't Have And How to Stop It",
    excerpt: "Let's speak plainly. You are in your late twenties or thirties, maybe even forties, delivering strong results, building a solid track record, and positioning yourself for the next step. You have not announced any plans to start a family. You may not even have those plans yet.",
    fullContent: `And still, somewhere behind closed doors, someone is sneakily making a different calculation: she might get pregnant soon, she might need time off, she might not be available in the way we need. So they pass you over for the stretch project, hesitate on the promotion, or choose the candidate who seems less likely to step away.

This is the motherhood penalty that arrives before motherhood. It is not loud or obvious. No one says the words out loud. But the outcome is the same: fewer opportunities, slower progression, a narrower path than your performance warrants. The assumption is baked in before you ever get the chance to prove it wrong.

The impact is measurable and persistent. Studies show women without children still face slower pay growth and lower promotion rates in roles where leadership potential is judged, because the possibility of future caregiving is projected onto them. For women of colour the effect is often stronger. The decision-makers may believe they are being practical rather than biased. They are protecting the business, they tell themselves. Yet the result is the same: you are penalised for a life stage you have not entered.

Your body registers this injustice long before your mind names it. The quickened pulse when feedback feels vague but loaded. The tightening in your chest when a male colleague with a similar record is given the high-visibility assignment. The slow drain of confidence when you realise the opportunities are not matching your effort. Over time, the nervous system learns that ambition carries a hidden risk. So many women start to play it safer, speak less boldly, volunteer less for stretch work. It is protective. It is also exactly what keeps the penalty in place.

In 2026 this feels sharper. The leadership roles that remain human-centred demand deep presence, relational insight, and adaptive thinking under pressure. These are the very capacities that suffer when you are managing the fear of being seen as a future liability. The always-on culture already stretches capacity. Add the unspoken assumption that you might step away, and the margin for error shrinks further.

The good news is that you can interrupt this pattern without waiting for the system to change first. You start by noticing what is happening inside you. Take ten minutes morning and evening to check in. How is my breathing right now. Where is tension sitting in my body. What thoughts are looping when I think about the next opportunity. Write down one moment in the day when you felt yourself pull back or second-guess your own readiness. These small acts of attention reveal the internal cost of the external assumption.

Next, build a proof file that makes bias harder to justify. Keep a running document of your wins: quantifiable results, stakeholder feedback, projects delivered ahead of schedule, problems solved that others could not. Update it monthly. When promotion or stretch assignment conversations arise, bring evidence calmly and factually. This is not boasting. This is accuracy. The more undeniable your record, the less room remains for vague assumptions about future availability.

Practise unapologetic self-advocacy in low-stakes settings first. Ask for feedback on specific skills you want to develop. Request stretch opportunities directly: this project would allow me to bring more value and grow in this area, can we discuss how I can contribute. When you hear hesitation that feels unrelated to performance, name it professionally: I notice the conversation is focusing on long-term availability rather than my current results, can we explore how my track record aligns with the role requirements. These are not confrontational. They are clear.

If the bias appears in feedback or decisions, document it privately: date, context, exact words used. Patterns become visible. When the time is right, you can raise them with HR or a trusted senior sponsor, always framing the discussion around fairness and business outcomes rather than personal grievance.

Organisations that want to keep talented women will eventually close this gap. They will train decision-makers on bias, make promotion criteria transparent, and reward outcomes over perceived future risk. Until then, protect your trajectory by making your value impossible to overlook.

You do not have to wait for permission to claim what you have earned. The motherhood penalty before motherhood is real. But it is not inevitable. When you notice the signals, document your worth, advocate without apology, and build evidence that speaks louder than assumption, you take back the power they were exercising over your future.

If this pattern is already costing you momentum, if you are delivering at a high level but the opportunities still feel out of reach, there is a clear way forward.

At Verde Vitae Woman we guide high-achieving women through exactly this: assessing where assumptions are limiting access, building the internal steadiness and external evidence that make bias harder to sustain, and tracking real movement in visibility, sponsorship, and progression.

Book a call today. Your future should be decided by your performance, not by someone else's guess about your life. Let's make sure it is.`,
    date: "January 13, 2026",
    readTime: "8 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Everyone Calls You Strong... Until the Moment You Can't Be Anymore. There's a Better Way.",
    excerpt: "Let's speak plainly. You have heard it your whole career: you are so strong, so resilient, so unflappable. People admire it. They rely on it. You rely on it too. So when the body sends a signal, tight chest, racing thoughts, sleep that never quite restores you, you push through.",
    fullContent: `You tell yourself this is what strong looks like. You override the strain because stopping feels like failure. And you keep going. Until one day the override stops working. The crash comes. Not always dramatic. Sometimes it is simply the realisation that you can no longer access the depth, the patience, the steady presence you once brought so easily.

This is not weakness. This is what happens when strength is defined as never showing strain. The cultural script praises women for being unbreakable, then judges them the moment they break. So many high-achieving women end up wearing the label like armour. It protects them from criticism. It also traps them inside it.

The body does not lie. When stress lingers without recovery, the nervous system stays in fight-or-flight. Cortisol and adrenaline remain elevated. Attention narrows. Flexible thinking fades. You still deliver, still lead, still appear composed. But the margin for real leadership, the nuance, the empathy, the courage to hold uncertainty, shrinks. Decisions become shorter-term. Conversations end faster. Presence flattens. You are still strong on the outside. Inside, the reserves are running dry.

In 2026 this trap feels tighter. The work left for humans is the work that requires full presence: guiding teams through ambiguity, building trust in hybrid environments, making ethical calls when the path is unclear. These are capacities that depend on a regulated nervous system. When you are overriding every signal of strain to stay strong, those capacities thin. You cannot hold space for others when your own space is collapsing.

The shift begins with honest attention, not more effort. Take ten minutes morning and evening. Sit quietly and ask your body these questions: How is my breathing right now? Where is tension living? What is my heart rate telling me? What thoughts are looping without rest? Write down one moment in the day when you pushed through instead of pausing. Do not judge the answers. Simply notice them. These small check-ins reveal what you have been trained to ignore.

From there, reframe strength as regulated endurance rather than override. Strength is not never feeling strain. It is feeling it, naming it, and responding to it with care. Practise twenty to thirty minutes daily of gentle attention to breath or body sensation. No need to empty your mind. Simply notice when it wanders and return without force. Add moderate movement a few times a week to support hormone balance and cardiovascular resilience. Set boundaries that protect recovery: decide when you are offline, communicate it clearly, honour it. These are not signs of weakness. They are the infrastructure that lets you stay strong for longer.

When you model this in leadership, everything changes. You ask team members how they are really holding up. You create space for honest answers. You show that strength includes rest. You demonstrate that regulated capacity is what allows you to lead with depth rather than depletion.

We stumble often. We hear the praise and believe it means we must never falter. We override signals to prove we can handle it. We fear being seen as less capable more than we fear burnout. That is human. What matters is coming back to yourself with kindness and choosing one small pause at a time.

In 2026, being strong does not mean never breaking. It means building the kind of endurance that lets you bend without snapping. Machines do not need this conversation. You do. And when you honour your own signals instead of overriding them, you bring something far more powerful than unbreakable armour: steady, present, truly human leadership.

If the label strong is starting to feel like a cage, if you are delivering at a high level but the inner cost is rising, there is a clear way to change the equation.

At Verde Vitae Woman we guide high-achieving women through exactly this: assessing where override is costing you, building simple daily practices that restore regulated endurance, and tracking real gains in energy, presence, and sustainable performance.

Book a call today. You do not have to wait until you break to redefine what strong really means.`,
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "You're the Glue But the Glue Is Running Out. Here's How to Stop It Disappearing into the Background.",
    excerpt: "Let's speak plainly. You walk into meetings and sense the unspoken tension before anyone says a word. You check in on the team member who has been quiet lately. You remember that someone's parent is unwell and ask how they are.",
    fullContent: `You smooth over the friction between two colleagues who are not speaking. You make sure the new joiner feels welcomed. You hold the space so everyone can do their best work. None of this appears in your objectives. It never shows up in your performance review. Yet it is real work. Deeply relational. Emotionally demanding. Cognitively expensive. And it lands on women far more often than on men.

This is the invisible relational load. It is the glue that keeps teams from falling apart. It is the quiet labour of connection, empathy, and emotional maintenance that makes everything else possible. Without it, collaboration frays, trust erodes, and productivity suffers. But because it is invisible, it is rarely counted. It is rarely rewarded. It is simply expected. And when you carry more than your share, your strategic bandwidth shrinks. There is less left for deep thinking, creative problem-solving, long-term vision. You are still delivering. You are still leading. But the depth and originality you once brought are thinning. The body keeps the score: persistent fatigue that rest does not fix, tension that lingers in your shoulders, a mind that feels scattered even when you try to focus.

The pattern is clear and consistent. Women in leadership and professional roles take on disproportionate amounts of this relational work. Mentoring conversations that stretch into evenings. Emotional support during team crises. Remembering personal details so people feel seen. Leading inclusion efforts that require constant attunement. Smoothing conflict so the meeting can move forward. These tasks are essential. They are also exhausting. They draw from the same finite pool of energy as strategic thinking and decision-making. When that pool is drained by invisible labour, the high-level work suffers first. You make choices that are good enough rather than great. You end conversations sooner than you should. You hesitate on bold ideas because you lack the mental space to hold them.

In 2026 this load feels heavier. The work that remains human is precisely the relational work machines cannot do: building trust across distributed teams, navigating conflict in hybrid environments, fostering inclusion when differences are visible and invisible. These are high-touch, high-empathy capacities. The very capacities that deplete fastest when you are already carrying the extra emotional weight. The always-on culture adds another layer. Notifications arrive at all hours. The expectation of immediate response never sleeps. When you add the relational glue to that mix, the nervous system stays in low-level alert. Recovery becomes a luxury you cannot afford. Burnout builds in the background.

The organisational cost is enormous. When women burn out from unrecognised relational labour, companies lose the glue that holds high-performing teams together. Psychological safety weakens. Collaboration slows. Innovation suffers because trust is the soil where ideas grow. Retention drops as women decide the emotional cost is unsustainable. The leadership pipeline narrows because the women who could have risen are too drained to keep climbing.

The shift begins with honest attention. Take ten minutes morning and evening to check in with yourself. How is my breathing right now? Where is tension living in my body? What is my energy telling me? What relational tasks did I carry yesterday that no one will ever mention? Write down three things: one visible win, one invisible relational task, one moment when you felt your bandwidth shrink. Do not judge. Simply notice. These small acts of attention reveal how much of your day is spent on work that is essential but uncounted.

From there, track the invisible load deliberately. Keep a simple log for two weeks. Note every mentoring chat, every check-in, every conflict smoothed, every personal detail remembered. Quantify the time where you can. You will likely be shocked at the total hours. This is not about complaining. This is about making the invisible visible so you can renegotiate it.

In one-to-ones or team discussions, name it calmly and factually. I have noticed I am carrying a significant portion of the relational maintenance work: mentoring, inclusion efforts, emotional support. This is valuable for the team, but it is reducing my capacity for strategic projects. Can we discuss how to distribute this more evenly or recognise it in my objectives. Frame it as a team benefit: when relational labour is shared, everyone thinks more clearly and collaborates better. You are not asking for special treatment. You are asking for fairness.

Delegate or renegotiate where possible. Share mentoring responsibilities with peers. Rotate who leads inclusion initiatives. Make check-ins a team norm rather than your personal role. When new tasks arise, ask: is this the best use of my strategic time right now. If not, who else could own it. These are not selfish moves. They are accurate moves that protect your contribution.

Protect time for high-level thinking. Block focused hours in your calendar and defend them. Treat them as non-negotiable as client meetings. Use those blocks for deep work, not for catching up on relational loose ends. When someone asks for emotional labour outside those boundaries, respond kindly but firmly: I am in deep work right now, can we schedule a time later. You are teaching others that your strategic capacity is valuable.

We stumble often. We say yes because it is easier in the moment. We carry the load silently to prove we can handle it. We fear being seen as not a team player more than we fear burnout. That is human. What matters is coming back to yourself with kindness and choosing one small renegotiation at a time.

In 2026, the invisible relational load is not your personal obligation to carry alone. It is team infrastructure. When you make it visible, share it fairly, and protect your strategic bandwidth, you do not just save yourself. You strengthen the whole team. You model that real leadership includes caring for capacity as much as caring for outcomes.

If the glue is running out, if you are giving more than shows up on any scorecard and paying for it in energy and focus, there is a clear way to change the balance.

At Verde Vitae Woman we guide high-achieving women through exactly this: assessing the full picture of visible and invisible labour, building simple daily practices that protect your capacity without apology, and tracking real gains in energy, strategic impact, and sustainable performance.

Book a call today. You deserve to lead without disappearing into the background work. Let's make the glue visible, and fairly shared.`,
    date: "January 7, 2026",
    readTime: "9 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "How to Say No Without the Guilt Tax That Follows",
    excerpt: "Let's spell it out straight. You already know how to say no. The real problem is what happens thirty seconds later. The wave of guilt arrives, fast and familiar. You second-guess yourself. You wonder if you sounded too harsh.",
    fullContent: `You worry the relationship has cracked. You start thinking of ways to make it up to them. Sometimes you even go back and say yes after all. That is the guilt tax. It is paid in energy, in peace, in time you can never get back. And it lands on women far more heavily because we have been taught from childhood that saying no is selfish, that caring means giving everything, that boundaries are mean rather than necessary.

This is not about lacking assertiveness. It is about the internal cost of using it. The moment you decline a request, your nervous system registers it as danger. Heart rate rises. Breath shallows. A story runs: they will think I am difficult, they will stop liking me, I have let the team down. The body interprets no as threat. So the guilt arrives to pull you back into yes. And the cycle continues. You say yes to avoid the discomfort, then resent the overload, then feel guilty for the resentment. It is exhausting.

In 2026 this tax feels heavier. The work asks for more relational depth, more empathy, more availability. The expectation of constant yes is stronger than ever. When you finally set a limit, the guilt spike can be intense because the stakes feel high. You are not just protecting time. You are protecting your capacity to lead with presence and clarity. When guilt wins, that capacity shrinks. Decisions become reactive. Presence flattens. You are still delivering, but the depth you bring to everything starts to thin.

The good news is you can reduce the tax. Not eliminate it completely. But make it small enough that you can stick to the boundary anyway. Start with honest attention to the body. When a request lands and the yes reflex kicks in, pause for ten seconds. Notice what happens inside. Is your breath shallow? Is your chest tight? Is your heart racing? Is there a story running about what they will think? Do not try to stop it. Simply name it. I feel the guilt rising. I feel the impulse to fix it. Naming it without judgement loosens its grip. The spike loses power when you see it coming.

Next, use this simple three-step script for declining requests while keeping the relationship intact.

Step one: Acknowledge the request and the person. Thank you for thinking of me. I can see why this matters to the team.
Step two: State your no clearly and briefly. I am not able to take this on right now.
Step three: Offer an alternative where possible, or simply close positively. I am happy to support in this other way instead. Or: Let me know how it goes and I will cheer you on.

The script is short on purpose. It avoids over-explaining, which often invites negotiation or guilt. You do not owe a full justification. You owe clarity and respect.

Practise the script out loud alone first. Say it in front of a mirror. Say it to a trusted friend. The more your mouth and ears get used to the words, the less foreign they feel when the moment arrives. When the guilt spike hits after you deliver the no, return to the body check. Breathe with the feeling for ten seconds. Let it move through without feeding it a new story. The spike peaks and falls faster when you stop arguing with it.

Over time, the tax gets smaller. You say no more often. You protect your energy. You bring more presence to the yeses that truly matter. Relationships do not break. Most people respect clarity far more than endless availability.

We stumble often. We apologise for the no before we even say it. We add three paragraphs of explanation and weaken the boundary. We feel the guilt and rush to take it back. That is human. What matters is coming back to yourself with kindness and choosing the script again next time.

In 2026, saying no is not selfish. It is strategic. It is the difference between leading from depletion and leading from regulated capacity. When you protect your energy without apology, you model what real strength looks like. You teach others that boundaries are not walls. They are the structure that lets everyone bring their best.

If the guilt tax is still costing you more than you want to pay, if you are saying yes to avoid discomfort and resenting it later, there is a clear way to change the pattern.

At Verde Vitae Woman we guide high-achieving women through exactly this: assessing where the yes reflex is draining you, building simple scripts and body-based practices that make no feel safe and sustainable, and tracking real gains in energy, presence, and leadership impact.

Book a call today. You deserve to say no without paying a tax you cannot afford. Let's make the boundary feel like strength instead of guilt.`,
    date: "January 4, 2026",
    readTime: "6 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop",
  },
];

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Latest Articles
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Insights & Resources
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Evidence-based insights on performance, burnout prevention, and sustainable success 
            for high-performing professional women.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 card-shadow ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? "h-64 lg:h-80" : "h-48"}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className={`font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors ${
                  index === 0 ? "text-xl lg:text-2xl" : "text-lg"
                }`}>
                  {post.title}
                </h3>

                <div className={`text-muted-foreground leading-relaxed mb-4 whitespace-pre-line ${
                  index === 0 ? "text-base" : "text-sm"
                }`}>
                  {expandedPost === post.id ? (
                    <>
                      {renderContentWithCalendlyLink(post.excerpt + " " + post.fullContent)}
                    </>
                  ) : (
                    <>
                      {post.excerpt.slice(0, 150)}...
                    </>
                  )}
                </div>

                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className="inline-flex items-center text-primary font-medium text-sm group/btn"
                >
                  {expandedPost === post.id ? "Show Less" : "Read More"}
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
