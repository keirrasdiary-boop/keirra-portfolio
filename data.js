/* ============================================================
   data.js — Keirra Tatum Portfolio 2026
   Edit this file to update content. index.html reads from here.
   ============================================================ */

const CATEGORIES = [
  {id:'impact',    label:'Impact & Problem-Solving'},
  {id:'leadership',label:'Leadership & Culture'},
  {id:'innovation',label:'Innovation & Initiative'},
  {id:'recognition',label:'Recognition & Awards'},
  {id:'growth',    label:'Growth & Stretch'}
];

const AI_TOOLS = [
  {name:'Claude',  img:'icons_ai/claude.png'},
  {name:'Gemini',  img:'icons_ai/gemini.png'},
  {name:'Gumloop', img:'icons_ai/gumloop.png'},
  {name:'Ava',     img:'icons_ai/ava.png'},
  {name:'Gelan',   img:'icons_ai/gelan.png'}
];

const SONGS = [
  {id:'s1', file:'music/MJ - LibGirl.mp3',                    name:'Liberian Girl — Michael Jackson'},
  {id:'s2', file:'music/KC-letgo.mp3',                         name:'Let It Go — Keisha Cole'},
  {id:'s3', file:'music/AA-1inamil.mp3',                       name:'One in a Million — Aaliyah'},
  {id:'s4', file:'music/BIG1morechance.mp3',                   name:'One More Chance — Notorious B.I.G.'},
  {id:'s5', file:'music/Jt-ROCKYOurbodi.mp3',                  name:'Rock Your Body — Justin Timberlake'},
  {id:'s6', file:'music/TC-CAnwetalk.mp3',                     name:'Can We Talk — Tevin Campbell'},
  {id:'s7', file:'music/Robin Thicke - Blurred Lines.mp3',     name:'Blurred Lines — Robin Thicke'},
  {id:'s8', file:'music/BV-tellme.mp3',                        name:'Tell Me — Bobby Valentino'},
  {id:'s9', file:'music/on-the-hotline.mp3',                   name:'On the Hotline — Pretty Ricky'},
  {id:'s10',file:'music/Nelly - hot in Here.mp3',              name:'Hot in Herre — Nelly'},
  {id:'s11',file:'music/Brand-wannabedown.mp3',                name:'I Wanna Be Down — Brandy'},
  {id:'s12',file:'music/MJ-dntstptilyougetengh.mp3',           name:"Don't Stop 'Til You Get Enough — Michael Jackson"}
];

const PROJECTS = [
  {
    id:'case-tracking', tab:'01_Salesforce_Case_Tracking', cat:'impact',
    icon:'Salesforce_Case_Tracking.png',
    date:'January 2026', status:'complete',
    title:'Salesforce Case Tracking Audit',
    situation:'Leadership identified persistent inconsistencies between Salesforce case data and Mode reporting dashboards, creating a critical visibility gap for decision-makers across the retail team.',
    action:'Selected by Wilmer Fernandez and Shirlene Watson to lead a one-week data integrity audit, meticulously tracking and documenting 91 cases with full metadata — date, case ID, originating view, transfer status, and detailed action summaries. Maintained a shared tracking sheet that provided granular visibility into case routing, resolution patterns, and specialist touchpoints.',
    result:'Identified critical gaps where cases were not being captured in the leadership dashboard, directly enabling leadership to diagnose the data pipeline failure. Wilmer confirmed the impact was meaningful and directed me to add it to my brag document.',
    s3:'Supports audits of existing processes & policies',
    s4:'Conducts audits using basic data analysis skills',
    why:'Owning a leadership-requested data audit and surfacing systemic reporting failures is exactly the cross-functional, high-impact work that distinguishes Senior-level contributors.',
    links:[
      {label:'View Salesforce Tracking Sheet', url:'https://docs.google.com/spreadsheets/d/1pzpxilZa916y1jE4ofoxIBmH_zx-2e0QwSb07OLPMLY/edit?usp=sharing'},
      {label:'Slack DM Thread (Wilmer)', url:'https://instacart.enterprise.slack.com/archives/C0A9UNH5N56'}
    ]
  },
  {
    id:'engagement-committee', tab:'02_Engagement_Committee', cat:'leadership',
    icon:'Engagement_Committee.png',
    date:'January 29, 2026 — Present', status:'ongoing',
    title:'Retail Email Engagement Committee',
    situation:'The Retail Email team lacked a structured, specialist-led initiative dedicated to team culture, morale, and engagement. The committee needed members with creative vision and strategic perspective to carry out that mission at scale.',
    action:'Invited by Joy Peterson to join the Engagement Committee and named Advisor — a distinct role reflecting trust in my judgment and creative input. I took ownership of two key responsibilities: the creative direction of the monthly presentation and the weekly Think Tank Tuesday posts. Each month I conceptualized the theme, designed the title slide, and wrote posts tied to what the team was celebrating — designed to educate, spark conversation, and drive participation.',
    result:'The committee has produced consistent, team-wide engagement touchpoints throughout 2026. Monthly presentations open with intentional creative direction. Think Tank Tuesday posts created a steady weekly rhythm between huddles. As Advisor, I shape team culture in a way that reflects the leadership presence Senior-level roles require.',
    s3:'Actively contributes to team culture & morale',
    s4:'Leads huddle content creation & refinement',
    why:'Senior-level contributors don\'t just do the work — they shape the environment the work happens in. Being named Advisor to a structured engagement committee demonstrates the leadership presence and peer trust that Senior roles require.',
    links:[]
  },
  {
    id:'percy-pickle', tab:'03_Percy_the_Pickle', cat:'leadership',
    icon:'Percy_the_Pickle.png',
    date:'February 2026 — Ongoing', status:'ongoing',
    title:'Percy the Pickle — Team Mascot',
    situation:'Our Engagement Committee had no visual identity or cultural brand. I recognized that a recognizable mascot rooted in Instacart\'s produce-themed world would give us a consistent identity across Slack, huddles, and team events.',
    action:'I originated the mascot concept, led a structured voting process, then took full creative ownership — developed his complete brand identity including personality, motto, and hashtags, wrote every AI visual prompt used to generate his design, composed an original Percy the Pickle song featured in his reveal intro video, and designed his twin siblings Dillan and Cumber for National Siblings Day content. Every asset was independently produced using AI tools, primarily Gemini.',
    result:'Percy was officially revealed at our team huddle and has become a recurring centerpiece of team culture — appearing in monthly slides, holiday content, and Slack channels. Other team members are now independently creating additional supporting mascot roles that extend Percy\'s family unit.',
    s3:'Leads creation & refinement of huddle content',
    s4:'Builds cultural infrastructure others expand upon',
    why:'Independently conceiving and executing a branded team mascot — from the original idea through AI-generated character design, original music, and ongoing content production — demonstrates creative leadership and the ability to build something that becomes a living, lasting part of team identity.',
    links:[
      {label:'Mascot Voting Form', url:'https://docs.google.com/forms/d/e/1FAIpQLScRQ1ZISNMEDZObL3jxT29tAL5BxVzQ_dhjm6nq5YmDJ8kKRg/viewform'},
      {label:'Percy Content Video', url:'https://drive.google.com/file/d/1xf0ueLgapCGhYWnMo7yJ_ik98vj9dmLO/view'},
      {label:'Percy Reveal Video', url:'https://drive.google.com/file/d/1CLWZL8Hy6wZWG61Xv1uM8ogCv8ZmO-fb/view'},
      {label:'Percy Siblings Video', url:'https://drive.google.com/file/d/1ahPbI0bmsIWNo_0_b3zpNt2ku3cXVMVp/view'}
    ]
  },
  {
    id:'costco-eu', tab:'04_Costco_EU_Training', cat:'impact',
    icon:'Costco_EU_Training.png',
    date:'March 10, 2026', status:'complete',
    title:'Costco EU BPO Training Presentation',
    situation:'Costco\'s European BPO sites in Spain and France lacked standardized training on retailer email best practices, resulting in inconsistent quality and communication standards across global support operations.',
    action:'Selected by leadership to co-design and deliver a 30-minute training presentation to Costco EU BPO sites alongside teammate Kyosha Abraham. Owned content development end-to-end — building curriculum covering tone, style, communication approach, and Salesforce best practices. Independently designed interactive email scenario exercises and a structured Q&A segment.',
    result:'Delivered the live training to Costco\'s Spain and France BPO sites to strong acclaim. Retail Pillar Operations Manager Asia Ward confirmed the EU audience specifically praised the scenarios and activity design. Wilmer Fernandez issued a public team-wide Slack recognition. Director of CX Sapna Mitchell personally thanked me for creating the resource.',
    s3:'Engages in workshops, presentations & mentorship',
    s4:'Represents the Pillar cross-regionally',
    why:'Being handpicked to represent the Retail Email team and train international BPO operations across two countries demonstrates the cross-functional communication, subject-matter authority, and mentorship capabilities expected at the Senior level.',
    links:[
      {label:'View Presentation', url:'https://docs.google.com/presentation/d/1J3P-3EvX28ZKZXyC5iNQEC_myuP7mgzJCBwUKkzOSGQ/edit?slide=id.p1'}
    ]
  },
  {
    id:'sme-onboarding', tab:'05_SME_Onboarding', cat:'growth',
    icon:'SME_Onboarding.png',
    date:'April — June 2026', status:'complete',
    title:'SME Onboarding & Retail Pillar Support',
    situation:'The formal training and onboarding into SME duties was not facilitated until April 2026, when structured shadowing sessions began in preparation for me to take on governance of the retail-pillar-support Slack channel.',
    action:'I participated in the SME onboarding process, documented detailed observations, and submitted formal written feedback to Ciro Trombetta covering process improvement recommendations — including the creation of recurring SME alignment meetings. That recommendation was adopted, resulting in biweekly SME meetings now being on the calendar for the entire cohort.',
    result:'I successfully completed onboarding and assumed active monitoring responsibilities for the retail-pillar-support Slack channel. My feedback contributed directly to a structural change that benefits the full SME cohort — biweekly alignment meetings now exist because I identified the need and put it in writing.',
    s3:'Provides guidance to less-experienced team members',
    s4:'Proactively improves systems others operate within',
    why:'Completing a first-of-its-kind onboarding program, providing feedback that changed how it operates, and driving a recurring leadership touchpoint into existence demonstrates the systems-level thinking and proactive contribution expected at Senior level.',
    links:[]
  },
  {
    id:'sme-shadowing', tab:'06_SME_Shadowing', cat:'growth',
    icon:'SME_Shadowing.png',
    date:'May — June 2026', status:'complete',
    title:'SME Shadowing — LOA Return & Advocacy',
    situation:'Two teammates, Cynthia and Astazia, returned after extended LOA during a period when my direct supervisor was also out — creating a gap where neither returning team member had a structured reacclimation plan.',
    action:'I led structured shadowing for Cynthia upon her return. When I identified that Astazia had not received equivalent support, I drafted and sent a detailed message to DeMarcus Crews and Wilmer Fernandez, articulated the risk, referenced a specific incident where Astazia had unknowingly worked a restricted Woodman\'s case, and proposed a concrete plan — pairing her with a tenured morning agent for structured shadowing.',
    result:'Cynthia completed her reacclimation shadowing and returned to full workflow readiness. My advocacy for Astazia directly led leadership to establish a reacclimation plan for her — support that had been overlooked entirely until I raised it.',
    s3:'Supports teammates through knowledge sharing',
    s4:'Independently identifies & closes team support gaps',
    why:'Identifying an unmet need for a returning teammate, crafting a thoughtful leadership communication, and driving a proactive support plan into existence — without being asked — defines Senior-level contribution.',
    links:[
      {label:'Transition Schedule', url:'https://docs.google.com/document/d/1foyD_kn0iAGRVltbuAE2UPy5_LZo__mly4hDUKBgE0k/edit'}
    ]
  },
  {
    id:'sme-escalations', tab:'07_SME_Escalations_Training', cat:'growth',
    icon:'SME_Escalations_Training.png',
    date:'May 12–14, 2026', status:'complete',
    title:'SME Resource — Escalations Training',
    situation:'Selected by leadership to serve as an SME resource during a multi-day retail email escalations training workshop led by Eboni Collins — chosen specifically for how I handle escalations and communicate with retail partners.',
    action:'Attended the Escalations Training Workshop with Eboni across three sessions (May 12, 13, and 14), serving as a subject matter expert available to validate agent and specialist questions in real time. Because the training facilitator sat on the vendor partner side with limited retail-specific knowledge, she leaned on me throughout to ground the material in real workflow context. My responses during the live writing exercise were specifically highlighted.',
    result:'I served as a credible, real-time SME voice throughout a high-stakes multi-day training. Following the training, Eboni Collins sent me 50 Cheers Points with a direct recognition message — unsolicited peer-to-peer recognition from the training facilitator herself.',
    s3:'Provides guidance to less-experienced team members',
    s4:'Serves as thought partner to SMEs in CX launch readiness',
    why:'Being selected as the SME anchor for a formal multi-day training — not as an attendee but as a validator and resource — reflects the organizational trust and expertise visibility that Senior-level contributors earn.',
    links:[]
  },
  {
    id:'qa-calibration', tab:'08_QA_Calibration', cat:'innovation',
    icon:'QA_Calibration.png',
    date:'June 2026', status:'complete',
    title:'QA Calibration Proposal & Reference Guide',
    situation:'QA scoring inconsistencies were creating a measurable gap between actual specialist performance and reported quality metrics — and no one had formally addressed it.',
    action:'Independently identified the calibration gap and authored a detailed formal reference document breaking down every rubric item beyond what the existing spreadsheets covered — removing ambiguity and giving the team a single source of truth for what correct looks like. Submitted the proposal directly to DeMarcus Crews with a structured case for implementation.',
    result:'DeMarcus reviewed the proposal, brought it to the QA team, and confirmed adoption — the QA team is now adapting the document to anchor their calibration sessions. A specialist-authored, unsolicited process improvement document became official QA infrastructure.',
    s3:'Supports audits of existing processes & policies',
    s4:'Pilots new processes & proactively recommends improvements',
    why:'Authoring and driving adoption of an unsolicited process improvement proposal that targets a structural quality gap — and seeing it implemented by the QA team — demonstrates strategic systems thinking and cross-functional influence.',
    links:[
      {label:'View Reference Guide', url:'https://docs.google.com/document/d/1xuBfTA7_JNJbd6gT2N_bM1oMUsteY1pBsnJSpo9vr1k/edit?usp=sharing'}
    ]
  },
  {
    id:'woodmans-cohort', tab:'09_Woodmans_Cohort', cat:'impact',
    icon:'Woodmans_Cohort.png',
    date:'March 2026 — Ongoing', status:'ongoing',
    title:"Woodman's Retailer Cohort",
    situation:"Woodman's, a top-five Storefront Pro retailer generating approximately $157M annually, required a specialized support model where a small dedicated team of five agents would exclusively own all Woodman's B2B and B2C email communication.",
    action:"Selected as one of five agents for the Woodman's retailer cohort. Built and maintained deep expertise in Woodman's-specific operations, processes, escalation patterns, and communication standards. Participated in the account ownership intro meeting. Within the cohort, I identified and escalated a Salesforce-to-Slack sync gap, correctly routed a Wisconsin DHS law enforcement request via proper LER routing, flagged a multi-location order batching anomaly, and proactively surfaced a Gumloop automation opportunity.",
    result:"My contributions directly supported the operational integrity of Instacart's most closely watched retailer relationship. Executive-level feedback from Woodman's founder, CEO, and VPs confirmed that communication had significantly improved under the cohort model.",
    s3:'Supports SMEs in CX launch readiness',
    s4:'Represents the Pillar & meets cross-pillar stakeholder needs',
    why:'Operating as a dedicated account representative for a $157M retailer — identifying systemic sync failures, routing compliance-sensitive requests correctly, and proposing automation solutions — is Senior-level work.',
    links:[]
  },
  {
    id:'tdo-final-round', tab:'10_TDO_Final_Round', cat:'growth',
    icon:'TDO_Final_Round.png',
    date:'April 2026', status:'complete',
    title:'Retail Pillar TDO — Final Round',
    situation:'A competitive internal TDO opened for a Retail Pillar Operations Specialist role — operating above my current Specialist II title. The role required a formal multi-part take-home assessment.',
    action:'Applied, completed the full assessment independently, and advanced through two rounds of interviews — ultimately reaching the final round. My assessment demonstrated senior-level operational thinking across complex scenario navigation, data analysis, Jira ticket writing, and cross-functional judgment.',
    result:'Reached the final round of a highly competitive TDO process while at Specialist II. Written feedback from Asia Ward confirmed the decision came down to the competitive field, not a gap in capability — noting I showed "real operational instincts and analytical thinking that did not go unnoticed."',
    s3:'Pilots new processes & participates in feedback loops',
    s4:'Demonstrates readiness for operations-level responsibilities',
    why:'Reaching the final round of a TDO for a role above your current level — with written feedback confirming capability determined the outcome — is a formal, documented signal that leadership sees Senior-level performance.',
    links:[
      {label:'Take-Home Assessment', url:'https://docs.google.com/document/d/1OsePLrV8JM1p2U2RFPHWQe17yszDMZlmA6_aXejTcBQ/edit'},
      {label:'Assessment Document', url:'https://docs.google.com/document/d/1P7OcC__5pFYcicDaaBBZUaS1DDgdZKqSQgK7fcNn-UQ/edit'}
    ]
  },
  {
    id:'freshclip', tab:'11_FreshClip', cat:'innovation',
    icon:'FreshClip.png',
    date:'May 2026', status:'complete',
    title:'FreshClip Chrome Extension',
    situation:'Agents work across multiple platforms simultaneously, copying and pasting high volumes of information every shift. Chrome only holds one clipboard item at a time and no approved tool existed to address this.',
    action:'Without a development background, budget, or IT involvement, I independently designed, built, and iterated on a fully functional custom Chrome extension using Claude AI as the sole development resource. The extension captures clipboard content with timestamps, maintains searchable history of up to 500 items, and includes a Favorites tab, calculator, live clock, weather display, timer, customizable color schemes, and data export/import. I assembled a beta testing team, wrote installation guides for Mac and Chromebook users, produced a demo video, authored a User Manual, and built a structured feedback form.',
    result:'FreshClip is fully built and functional with 9 active beta users. All bugs reported have been identified and resolved. Full documentation suite is complete and ready for broader adoption. Kept in Developer Mode intentionally to control access.',
    s3:'Expertly uses CX tools including systems & AKBs',
    s4:'Determines methods & procedures others can use',
    why:'Rather than waiting for a solution, I identified a systemic workflow gap and owned the entire solution from ideation through development, iteration, bug resolution, documentation, and beta team coordination — all without a development background or budget.',
    links:[
      {label:'Mac Install Guide', url:'https://docs.google.com/document/d/1VF4mRW2X13hTmFXCYPU8R32xDJe_Dm_M5Q5eTd_n4Q4/edit'},
      {label:'Chromebook Install Guide', url:'https://docs.google.com/document/d/1ydk_rcjUcQH4sVLw5UXMMX28YqpcyxmmIocaKyDiRa8/edit'},
      {label:'Chromebook Install Video', url:'https://drive.google.com/file/d/13jMv7Ow9FHNZNOYYD6X8g5TLvxAPZvpx/view'},
      {label:'Tutorial Video', url:'https://drive.google.com/file/d/1T_sfq8l8FiiuwYZcn3MgzvAyVmAGTea9/view'}
    ]
  },
  {
    id:'wegmans-gumloop', tab:'12_Wegmans_Gumloop_Agent', cat:'innovation',
    icon:'Wegmans_Gumloop_Agent.png',
    date:'May 2026 — Present', status:'inprogress',
    title:'Wegmans Gumloop AI Agent',
    situation:'The Retail Pillar CX team spent approximately 60 minutes per specialist per week manually creating Salesforce cases and composing outbound emails for the Wegmans Unfound Digital Coupons workflow.',
    action:'Co-designed and built a Gumloop AI agent with Sinclaire Burkett and supervisor Andre Jones that reads the weekly Wegmans coupon spreadsheet, auto-creates pre-populated Salesforce cases, attaches a fully drafted outbound email to each case, and writes a hyperlinked case number back to the spreadsheet. Authored the full formal proposal, filed TGove ticket BIZSYS-12216, and validated the Salesforce connector through live test cases.',
    result:'The agent is build-complete and technically validated. The sole remaining blocker — TechGov approval of a per-user trigger bypass — is an external dependency. Once approved, projected impact is a 70–85% reduction in specialist time per sheet cycle, saving the team an estimated 9–11 hours of manual effort per week.',
    s3:'Supports SMEs in CX launch readiness',
    s4:'Pilots scalable automation processes',
    why:'Identifying a 13-hour weekly team inefficiency, designing a cross-platform automation from scratch, authoring a formal proposal with pilot criteria, and driving a technical escalation through to a Business Systems ticket reflects the cross-functional ownership expected at Senior level.',
    links:[
      {label:'TGov Jira Ticket', url:'https://instacart.atlassian.net/browse/TGOV-3994'},
      {label:'Business Systems Ticket', url:'https://instacart.atlassian.net/browse/BIZSYS-12216'},
      {label:'Automation Proposal', url:'https://docs.google.com/document/d/1yNfIZ5B53HRxWYK6F_3euChC8oncG77D_4SYC5Xa6gE/edit'},
      {label:'Test Spreadsheet', url:'https://docs.google.com/spreadsheets/d/1Rm5jAXVww8IcCHRXYR8dyRq77of8fUEB9lq_Fl1Jt6g/edit'}
    ]
  },
  {
    id:'apple-project', tab:'13_Apple_Project', cat:'impact',
    icon:'Apple_Project.png',
    date:'June 2026', status:'complete',
    title:'Project Apple — KB & Macro Gaps',
    situation:'The T3 Unbatchable Orders workflow contained critical knowledge base and macro gaps across two KB articles — including missing appeasement sections, conflicting macro guidance, customer-facing language that violated internal policy, and no defined reschedule limit for Connect orders.',
    action:'Submitted a detailed gap analysis through the Project Apple feedback form accompanied by a comprehensive memo and macro document identifying six distinct process failures across two KB articles and one active macro. Drafted three new T3-specific After Hours macro templates and flagged a policy-language conflict — providing management with actionable, ready-to-implement solutions.',
    result:'The submission surfaced systemic workflow failures that extended beyond a single KB fix, prompting a broader process-improvement conversation that led supervisor Wilmer Fernandez to select me to co-author a formal proposal to remove the Live Unbatchables queue entirely from the Retail Email team\'s scope.',
    s3:'Pilots new processes & participates in feedback loops',
    s4:'Identifies systemic failures & drives structural change',
    why:'Identifying six cross-article workflow gaps, drafting production-ready macro templates, and escalating a policy contradiction — all unprompted — demonstrates the systems-level thinking that distinguishes Senior contributors.',
    links:[
      {label:'View Memo & Macros', url:'https://docs.google.com/document/d/12JyJ76wP1A1AWpa9Rxo6mGHV8nYAyOhZwwOOEOShNMM/edit?tab=t.0'}
    ]
  },
  {
    id:'live-unbatchables', tab:'14_Live_Unbatchables', cat:'impact',
    icon:'Live_Unbatchables.png',
    date:'June 2026', status:'inprogress',
    title:'Live Unbatchables Queue Removal Proposal',
    situation:'The T3 Unbatchable Orders workflow required Email Team specialists — a retailer-centric, offline team — to conduct live outbound calls to shoppers with zero formal training, driving longer handle times and pulling agents away from high-priority retailer escalations.',
    action:'After submitting the Project Apple KB gaps memo, I was selected by Wilmer Fernandez to co-author a formal leadership proposal to transfer the Live Unbatchables queue to the Shopper Vanguard team. I reviewed the initial draft, identified gaps, submitted a detailed written analysis recommending five specific additions, and was then tasked with directly incorporating these revisions into the proposal document.',
    result:'The revised proposal — co-authored and strengthened with my analysis — is currently advancing toward leadership review, making a formal case to structurally remove the Live Unbatchables queue from the Email Team\'s scope.',
    s3:'Continuous improvement mindset',
    s4:'Pilots process changes & recommends structural improvements',
    why:'Being pulled into a leadership proposal as a co-author and trusted to revise it independently demonstrates that management views me as a strategic peer, not just an executor.',
    links:[
      {label:'View Proposal', url:'https://docs.google.com/document/d/14q4zpTVBz8pi_wQvPmt_AeoDdwQB2KL_HgpJG85QTBk/edit?usp=sharing'}
    ]
  },
  {
    id:'steering-committee', tab:'15_Steering_Committee', cat:'growth',
    icon:'Steering_Committee.png',
    date:'June 2026 — Present', status:'inprogress',
    title:'Steering Committee — Ways of Working',
    situation:'In June 2026, DeMarcus launched a cross-functional Steering Committee to address persistent operational pain points on the Retail Email team — broken knowledge management, fragmented AI tooling, noisy Slack channels, and feedback processes that had felt like dead ends.',
    action:'I responded with a detailed strategic proposal identifying tooling visibility and KB notification infrastructure as critical gaps. My response earned me a spot on the committee. I was placed on Team Kyosha and assigned ownership of the Slack strategy pillar — one of three core focus areas. I independently researched, drafted, and delivered a comprehensive Slack strategy proposal, and our team of three collaborated to build a unified cross-functional proposal.',
    result:'I am an active contributor in a leadership-created strategic forum, owning a defined work stream and co-authoring a formal proposal that has the potential to reshape how the entire Retail Email team operates.',
    s3:'Systems-level thinking & proactive contribution',
    s4:'Applies specialized skills to support team-wide goals',
    why:'This is exactly the cross-functional, systems-level thinking that distinguishes a Senior contributor — I didn\'t wait to be assigned impact; I pursued it, named the problems, and built solutions.',
    links:[
      {label:'Meeting Notes', url:'https://docs.google.com/document/d/1vljr46hdbjwwkqt4DStUwbH92C1Dqlc8yIxWJB9s5M0/edit'},
      {label:'Slack Strategy Proposal', url:'https://docs.google.com/document/d/1o_ud4fCGPBykhqnhPdgHiSI8pbPjQuv1E17vKgDKq0k/edit'}
    ]
  },
  {
    id:'tribal-knowledge', tab:'16_Tribal_Knowledge_Hub', cat:'innovation',
    icon:'Tribal_Knowledge_Hub.png',
    date:'May 2026 — Present', status:'complete',
    title:'Tribal Knowledge Hub',
    situation:'Tribal knowledge — the undocumented information that lives only in the heads of long-tenured team members — had no home on our team. When someone transitioned out, it disappeared. That gap showed up every day in repeated Slack questions and teammates who didn\'t feel equipped to execute confidently.',
    action:'I independently conceived, designed, and built the Tribal Knowledge Hub from the ground up — a full-stack internal video and document library. I architected the entire system solo, without a formal mandate, leveraging AI tools and the technical skills from my Computer Technologies program at Excelsior University. The platform includes Google OAuth restricted to @instacart.com accounts, a Supabase database with 9 tables and Row-Level Security, content search, engagement tracking, personalized user profiles, an admin backend, and built-in feedback channels. I presented a fully functional demo to my director and management chain.',
    result:'The Tribal Knowledge Hub is fully live at tribalknowledgehub.netlify.app. Director of Customer Experience Sapna Mitchell praised the initiative and directed managers to formally connect the Hub to the organization\'s broader Knowledge Management efforts.',
    s3:'Continuous improvement & ownership mindset',
    s4:'Determines methods & procedures others can use',
    why:'Independently identifying a systemic gap, building a working technology solution, and earning director-level validation without being asked is the exact ownership mindset required at Senior level.',
    links:[
      {label:'Live Platform', url:'https://tribalknowledgehub.netlify.app/'},
      {label:'Demo Walkthrough', url:'https://drive.google.com/file/d/1U6fGXHRpBB0YRvG-zLItFyr6mBsoVh7h/view'}
    ]
  },
  {
    id:'praise-recognition', tab:'17_Praise_Recognition', cat:'recognition',
    icon:'Praise_&_Recognition.png',
    date:'February — June 2026', status:'complete',
    title:'2026 Slack Praise & Recognition Log',
    situation:'Throughout 2026, I received consistent, unsolicited public recognition from leadership, managers, and cross-functional partners spanning formal pillar awards, Wall of Fame induction, and direct leadership callouts.',
    action:'Earned two formal Retail Pillar Specialist recognitions, "The Problem Solver" for January and "Problem Solver of the Month" for April, while receiving multiple unsolicited public callouts across #cx-superstars and #the-queue-crew for policy judgment, cross-functional communication, proactive issue identification, and team resource contributions. On July 9, 2026, was named Q2 2026 Specialist of the Quarter by manager DeMarcus Crews in a team-wide announcement, recognized for identifying gaps and building solutions that made the whole team better, specifically calling out the Tribal Knowledge Hub, the backup payment resource, and the LOA reacclimation support for Cynthia.',
    result:'Two formal pillar-level awards, permanent Wall of Fame recognition, six separate leadership callouts across two Slack channels, and the Q2 2026 Specialist of the Quarter award from manager DeMarcus Crews, all within a single calendar year. DeMarcus wrote: "Keirra doesn\'t just fix problems for themselves. They build for the team."',
    s3:'Sustained performance standard & peer trust',
    s4:'Consistent visibility across leadership levels',
    why:'Consistent, cross-channel recognition from multiple leaders at different levels — including a supervisor, manager, director-level partner, and two separate formal award committees — demonstrates the sustained performance standard that defines Senior-level impact.',
    links:[
      {label:'Shirlene Watson — Feb 5', url:'https://instacart.enterprise.slack.com/archives/C05QAAM205U/p1770327504367509'},
      {label:'Problem Solver Award — Feb 12', url:'https://instacart.enterprise.slack.com/archives/C05QAAM205U/p1770919077141979'},
      {label:'Wall of Fame — Feb 19', url:'https://instacart.enterprise.slack.com/archives/C05QAAM205U/p1771531537439719'},
      {label:'Wilmer — Costco EU — Mar 10', url:'https://instacart.enterprise.slack.com/archives/C05QAAM205U/p1773163334034649'},
      {label:'Sapna Mitchell — Mar 10', url:'https://instacart.enterprise.slack.com/archives/C05QAAM205U/p1773190505271629'},
      {label:'Problem Solver of Month — Jun 2', url:'https://instacart.enterprise.slack.com/archives/C05QAAM205U/p1780420464933429'},
      {label:'DeMarcus — Fresh Funds — Jun 1', url:'https://instacart.enterprise.slack.com/archives/C052H6NUAMN/p1780330325367139'},
      {label:'Wilmer — Fresh Funds Doc — Jun 18', url:'https://instacart.enterprise.slack.com/archives/C052H6NUAMN/p1781808301767069'}
    ]
  },
  {
    id:'associates-degree', tab:'18_Associates_Degree', cat:'growth',
    icon:'Associates_Degree.png',
    date:'July 22, 2026', status:'complete',
    title:'A.A.S. in Computer Technologies — Excelsior University',
    situation:'Keirra pursued and completed a full Associate in Applied Science in Computer Technologies while working full-time as a Retail Email Specialist II — hitting KPIs every month, running the Engagement Committee, building FreshClip, constructing the Tribal Knowledge Hub, co-building the Wegmans Gumloop Agent, and serving as SME resource across the team.',
    action:'Enrolled at Excelsior University using Instacart\'s Professional Development budget and completed all coursework with a 3.92 Excelsior GPA. Coursework included Technology and Society, Technical Writing, Fundamentals of Programming, Cloud Computing and Virtualization, Overview of Computer Security, Business Data Communications, Hardware and Software Essentials, and the Integrated Technology Assessment — a capstone course on building a professional technology portfolio. Every course was applied directly to real work product in real time.',
    result:'Graduated July 22, 2026 with an Associate in Applied Science in Computer Technologies — a 3.92 Excelsior GPA — without requesting reduced workload, missing a KPI, or asking for extra time. The technical foundation from this program is the operating system behind FreshClip, the Tribal Knowledge Hub, and every AI-powered tool built for the team.',
    s3:'Applies specialized skills & company knowledge to team goals',
    s4:'Sustained self-directed drive at S4 output level',
    why:'Earning a technical degree while performing at S4 level across every other dimension of this portfolio is not a footnote. It is the operating system behind everything else — and it demonstrates the sustained, self-directed drive the S4 level description calls out explicitly.',
    links:[
      {label:'Excelsior University — Computer Technologies Program', url:'https://excelsior.edu/programs/associate-in-applied-science-in-computer-technologies/'}
    ]
  }
];

const TIMELINE = [
  {date:'Jan 2026',      project:'Salesforce Case Tracking Audit',         cat:'Impact',      catColor:'#FF6B2B', s3:'Supports process audits',                  s4:'Conducts data analysis audits'},
  {date:'Jan 29, 2026', project:'Engagement Committee',                    cat:'Leadership',  catColor:'#8B5CF6', s3:'Contributes to team culture',              s4:'Leads huddle content creation'},
  {date:'Feb 2026',     project:'Percy the Pickle',                        cat:'Leadership',  catColor:'#8B5CF6', s3:'Creates huddle content',                   s4:'Builds cultural infrastructure others expand upon'},
  {date:'Feb 12, 2026', project:'Problem Solver Pillar Award',             cat:'Recognition', catColor:'#F59E0B', s3:'Sustained performance standard',           s4:'Consistent visibility across leadership levels'},
  {date:'Feb 19, 2026', project:'Wall of Fame Induction',                  cat:'Recognition', catColor:'#F59E0B', s3:'Sustained performance standard',           s4:'Consistent visibility across leadership levels'},
  {date:'Mar 2026',     project:"Woodman's Retailer Cohort",               cat:'Impact',      catColor:'#FF6B2B', s3:'Supports CX launch readiness',             s4:'Represents Pillar cross-functionally'},
  {date:'Mar 10, 2026', project:'Costco EU BPO Training',                  cat:'Impact',      catColor:'#FF6B2B', s3:'Engages in workshops & mentorship',        s4:'Represents Pillar cross-regionally'},
  {date:'Apr 2026',     project:'TDO Final Round',                         cat:'Growth',      catColor:'#4AC4AF', s3:'Pilots new processes',                     s4:'Demonstrates ops-level readiness'},
  {date:'Apr–Jun 2026', project:'SME Onboarding',                          cat:'Growth',      catColor:'#4AC4AF', s3:'Provides team guidance',                   s4:'Improves systems others operate within'},
  {date:'May 2026',     project:'FreshClip Chrome Extension',              cat:'Innovation',  catColor:'#4FC8FF', s3:'Expert use of CX tools',                   s4:'Determines methods others can use'},
  {date:'May 2026',     project:'Wegmans Gumloop Agent',                   cat:'Innovation',  catColor:'#4FC8FF', s3:'Supports CX launch readiness',             s4:'Pilots scalable automation'},
  {date:'May 2026',     project:'Tribal Knowledge Hub',                    cat:'Innovation',  catColor:'#4FC8FF', s3:'Continuous improvement mindset',           s4:'Determines methods others can use'},
  {date:'May–Jun 2026', project:'SME Shadowing Sessions',                  cat:'Growth',      catColor:'#4AC4AF', s3:'Supports teammates via knowledge sharing', s4:'Independently closes team support gaps'},
  {date:'May 12–14',    project:'SME Escalations Training',                cat:'Growth',      catColor:'#4AC4AF', s3:'Guides less-experienced members',          s4:'Serves as thought partner to SMEs'},
  {date:'Jun 2026',     project:'QA Calibration Proposal',                 cat:'Innovation',  catColor:'#4FC8FF', s3:'Supports process audits',                  s4:'Pilots improvements proactively'},
  {date:'Jun 2026',     project:'Project Apple',                           cat:'Impact',      catColor:'#FF6B2B', s3:'Pilots new processes',                     s4:'Drives structural change'},
  {date:'Jun 2026',     project:'Live Unbatchables Proposal',              cat:'Impact',      catColor:'#FF6B2B', s3:'Continuous improvement mindset',           s4:'Recommends structural process changes'},
  {date:'Jun 2026',     project:'Steering Committee',                      cat:'Growth',      catColor:'#4AC4AF', s3:'Systems-level thinking',                   s4:'Applies skills to support team goals'},
  {date:'Jun 2, 2026',  project:'Problem Solver of the Month',             cat:'Recognition', catColor:'#F59E0B', s3:'Sustained performance standard',           s4:'Consistent visibility across leadership levels'},
  {date:'Jul 9, 2026',  project:'Q2 Specialist of the Quarter',            cat:'Recognition', catColor:'#F59E0B', s3:'Sustained performance standard',           s4:'Builds solutions that elevate the entire team'},
  {date:'Jul 22, 2026', project:'A.A.S. Computer Technologies — Graduated',cat:'Growth',     catColor:'#4AC4AF', s3:'Applies specialized skills to team goals', s4:'Sustained self-directed drive at S4 level'}
];

const S3_CRITERIA = [
  {criterion:'Supports Audits of Existing Processes & Policies',
   entries:'Salesforce Case Tracking Audit (91 cases, surfaced Mode dashboard pipeline failure) · QA Calibration Proposal (identified scoring inconsistency, proposed structural fix)'},
  {criterion:'Engages in Workshops, Presentations & Mentorship',
   entries:'Costco EU BPO Training (Spain & France) · SME Escalations Training (resource, not attendee) · SME Shadowing Sessions (Cynthia & Astazia)'},
  {criterion:'Provides Guidance to Less-Experienced Team Members',
   entries:'SME Onboarding & retail-pillar-support channel monitoring · SME Shadowing (Cynthia LOA return) · Advocacy for Astazia reacclimation plan'},
  {criterion:'Supports SMEs in CX Launch Readiness',
   entries:"Woodman's Retailer Cohort · Wegmans Gumloop Agent · SME Escalations Training"},
  {criterion:'Pilots New Processes & Participates in Feedback Loops',
   entries:'TDO Final Round assessment · Project Apple feedback submission · SME Onboarding feedback to Ciro Trombetta (adopted: biweekly SME meetings)'},
  {criterion:'Actively Contributes to Team Culture & Morale',
   entries:'Engagement Committee (Advisor role) · Percy the Pickle mascot (concept, design, music, videos) · Think Tank Tuesday posts'},
  {criterion:'Leads Creation & Refinement of Huddle Content',
   entries:'Monthly presentation themes & title slides · Percy the Pickle reveal, siblings, and ongoing character content'},
  {criterion:'Expertly Uses CX Tools Including Systems & AKBs',
   entries:'FreshClip Chrome Extension (built to solve clipboard limitation) · Salesforce case tracking · Wegmans Gumloop Agent integration'},
  {criterion:'Continuous Improvement & Ownership Mindset',
   entries:'Tribal Knowledge Hub (identified gap, built solution) · Live Unbatchables Proposal (co-authored) · QA Calibration Proposal (self-initiated)'}
];

const S4_CRITERIA = [
  {criterion:'Conducts Audits Using Basic Data Analysis Skills',
   entries:'Salesforce Case Tracking Audit — 91 cases, full metadata, surfaced dashboard pipeline failure reported directly to Wilmer Fernandez'},
  {criterion:'Serves as Thought Partner to SMEs in CX Launch Readiness',
   entries:'Costco EU BPO Training · SME Escalations Training · Steering Committee proposal · Wegmans Gumloop Agent co-design'},
  {criterion:'Pilots New Processes & Proactively Recommends Improvements',
   entries:'Wegmans Gumloop AI Agent · FreshClip Chrome Extension · QA Calibration Proposal · Live Unbatchables Proposal · Project Apple'},
  {criterion:'Represents the Pillar & Meets Cross-Pillar Stakeholder Needs',
   entries:"Costco EU BPO Training (Spain & France) · Steering Committee · TDO Final Round · Woodman's Cohort"},
  {criterion:'Determines Methods & Procedures Others Can Use',
   entries:'Tribal Knowledge Hub (live at tribalknowledgehub.netlify.app) · FreshClip Extension · Wegmans AI Agent · QA Calibration Reference Guide'},
  {criterion:'Leads Huddle Content Creation & Cultural Infrastructure',
   entries:'Percy the Pickle — mascot, original music, AI visuals, siblings content · Engagement Committee monthly presentation direction'},
  {criterion:'Independently Identifies & Closes Team Support Gaps',
   entries:'SME Shadowing (Cynthia) · Advocacy for Astazia reacclimation · SME Onboarding feedback driving biweekly meetings'},
  {criterion:'Applies Specialized Skills to Support Team-Wide Goals',
   entries:'Steering Committee Slack strategy pillar · Wegmans automation (9–11 hrs/week recovered) · Live Unbatchables Proposal'},
  {criterion:'Proactively Improves Systems Others Operate Within',
   entries:'SME Onboarding feedback → biweekly meetings adopted · QA Calibration Proposal → adapted by QA team · Project Apple → escalated to co-authored leadership proposal'},
  {criterion:'Demonstrates Readiness for Operations-Level Responsibilities',
   entries:'TDO Final Round — written feedback confirmed "real operational instincts and analytical thinking" · Steering Committee ownership of Slack strategy pillar'},
  {criterion:'A.A.S. Computer Technologies — Excelsior University (Jul 22, 2026)',
   entries:'3.92 Excelsior GPA · Completed while hitting KPIs monthly, building team-facing tools, and performing at S4 level across all dimensions · Funded via Instacart Professional Development budget'}
];

const EVIDENCE = {
  '01_Salesforce_Case_Tracking':[
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_01.jpg',label:'Cheers Points Screenshot'},
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_02.jpg',label:'Slack Channel Screenshot 1'},
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_03.jpg',label:'Slack Channel Screenshot 2'},
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_04.jpg',label:'Slack Channel Screenshot 3'},
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_05.jpg',label:'Spreadsheet Screenshot 1'},
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_06.jpg',label:'Spreadsheet Screenshot 2'},
    {file:'evidence/01_Salesforce_Case_Tracking/01_Salesforce_Case_Tracking_07.jpg',label:'Spreadsheet Screenshot 3'}
  ],
  '02_Engagement_Committee':[
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_01.jpg',label:'Committee Slack Invite 1'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_02.jpg',label:'Committee Slack Invite 2'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_03.jpg',label:'Think Tank Tuesday Post 1'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_04.jpg',label:'Think Tank Tuesday Post 2'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_05.jpg',label:'Think Tank Tuesday Post 3'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_06.jpg',label:'Think Tank Tuesday Post 4'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_07.jpg',label:'Think Tank Tuesday Post 5'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_08.jpg',label:'Think Tank Tuesday Post 6'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_09.jpg',label:'Think Tank Tuesday Post 7'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_10.jpg',label:'Think Tank Tuesday Post 8'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_11.jpg',label:'Think Tank Tuesday Post 9'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_12.jpg',label:'Think Tank Tuesday Post 10'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_13.jpg',label:'Think Tank Tuesday Post 11'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_14.jpg',label:'Think Tank Tuesday Post 12'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_15.jpg',label:'Presentation Title Slide 1'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_16.jpg',label:'Presentation Title Slide 2'},
    {file:'evidence/02_Engagement_Committee/02_Engagement_Committee_17.jpg',label:'Presentation Title Slide 3'}
  ],
  '03_Percy_the_Pickle':[
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_01.jpg',label:'Slack Message 1'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_02.jpg',label:'Slack Message 2'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_03.jpg',label:'Slack Message 3'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_04.jpg',label:'Percy Background & Introduction'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_05.jpg',label:'Dillan Background & Introduction'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_06.jpg',label:'Cumber Background & Introduction'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_07.jpg',label:'Percy Character Image 1'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_08.jpg',label:'Percy Character Image 2'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_09.jpg',label:'Dillan Character Image 1'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_10.jpg',label:'Dillan Character Image 2'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_11.jpg',label:'Cumber Character Image'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_12.jpg',label:'Dillan & Cumber 1'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_13.jpg',label:'Dillan & Cumber 2'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_14.jpg',label:'Presentation Slide 1'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_15.jpg',label:'Presentation Slide 2'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_16.jpg',label:'Presentation Slide 3'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_17.jpg',label:'Presentation Slide 4'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_18.jpg',label:'Presentation Slide 5'},
    {file:'evidence/03_Percy_the_Pickle/03_Percy_the_Pickle_19.jpg',label:'Presentation Slide 6'}
  ],
  '04_Costco_EU_Training':[
    {file:'evidence/04_Costco_EU_Training/04_Costco_EU_Training_01.jpg',label:'Slack Recognition 1'},
    {file:'evidence/04_Costco_EU_Training/04_Costco_EU_Training_02.jpg',label:'Slack Recognition 2'},
    {file:'evidence/04_Costco_EU_Training/04_Costco_EU_Training_03.jpg',label:'Recognition & Shoutout'}
  ],
  '05_SME_Onboarding':[
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_01.jpg',label:'SME Onboarding Email'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_02.jpg',label:'Follow-up Email to Leadership'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_03.jpg',label:'Observations & Feedback Email'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_04.jpg',label:'SME Support in Retail Pillar Channel 1'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_05.jpg',label:'SME Support in Retail Pillar Channel 2'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_06.jpg',label:'SME Support in Retail Pillar Channel 3'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_07.jpg',label:'SME Support in Retail Pillar Channel 4'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_08.jpg',label:'SME Support in Retail Pillar Channel 5'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_09.jpg',label:'SME Support in Retail Pillar Channel 6'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_10.jpg',label:'SME Support in Retail Pillar Channel 7'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_11.jpg',label:'SME Support in Retail Pillar Channel 8'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_12.jpg',label:'SME Support in Retail Pillar Channel 9'},
    {file:'evidence/05_SME_Onboarding/05_SME_Onboarding_13.jpg',label:'Bi-Weekly SME Meetings Email'}
  ],
  '06_SME_Shadowing':[
    {file:'evidence/06_SME_Shadowing/06_SME_Shadowing_01.jpg',label:"Advocacy Message for Astazia's Reacclimation"}
  ],
  '07_SME_Escalations_Training':[
    {file:'evidence/07_SME_Escalations_Training/07_SME_Escalations_Training_01.jpg',label:'Meeting Invite — Escalation Training 1'},
    {file:'evidence/07_SME_Escalations_Training/07_SME_Escalations_Training_02.jpg',label:'Meeting Invite — Escalation Training 2'},
    {file:'evidence/07_SME_Escalations_Training/07_SME_Escalations_Training_03.jpg',label:'Meeting Invite — Escalation Training 3'},
    {file:'evidence/07_SME_Escalations_Training/07_SME_Escalations_Training_04.jpg',label:'SME in Retail Escalation Training 1'},
    {file:'evidence/07_SME_Escalations_Training/07_SME_Escalations_Training_05.jpg',label:'SME in Retail Escalation Training 2'},
    {file:'evidence/07_SME_Escalations_Training/07_SME_Escalations_Training_06.jpg',label:'Cheers Points from Eboni Collins'}
  ],
  '08_QA_Calibration':[
    {file:'evidence/08_QA_Calibration/08_QA_Calibration_01.jpg',label:'Slack Message — QA Proposal 1'},
    {file:'evidence/08_QA_Calibration/08_QA_Calibration_02.jpg',label:'Slack Message — QA Proposal 2'},
    {file:'evidence/08_QA_Calibration/08_QA_Calibration_03.jpg',label:'Slack Message — QA Proposal 3'}
  ],
  '09_Woodmans_Cohort':[
    {file:'evidence/09_Woodmans_Cohort/09_Woodmans_Cohort_01.jpg',label:'Woodmans Slack Communication 1'},
    {file:'evidence/09_Woodmans_Cohort/09_Woodmans_Cohort_02.jpg',label:'Woodmans Slack Communication 2'},
    {file:'evidence/09_Woodmans_Cohort/09_Woodmans_Cohort_03.jpg',label:'Woodmans Slack Communication 3'},
    {file:'evidence/09_Woodmans_Cohort/09_Woodmans_Cohort_04.jpg',label:'Account Ownership Meeting Email'}
  ],
  '10_TDO_Final_Round':[
    {file:'evidence/10_TDO_Final_Round/10_TDO_Final_Round_01.jpg',label:'TDO Feedback from Asia Ward 1'},
    {file:'evidence/10_TDO_Final_Round/10_TDO_Final_Round_02.jpg',label:'TDO Feedback from Asia Ward 2'},
    {file:'evidence/10_TDO_Final_Round/10_TDO_Final_Round_03.jpg',label:'TDO Assessment Screenshot'}
  ],
  '11_FreshClip':[
    {file:'evidence/11_FreshClip/11_FreshClip_01.jpg',label:'FreshClip Screenshot 1'},
    {file:'evidence/11_FreshClip/11_FreshClip_02.jpg',label:'FreshClip Screenshot 2'},
    {file:'evidence/11_FreshClip/11_FreshClip_03.jpg',label:'FreshClip Screenshot 3'},
    {file:'evidence/11_FreshClip/11_FreshClip_04.jpg',label:'FreshClip Screenshot 4'}
  ],
  '12_Wegmans_Gumloop_Agent':[
    {file:'evidence/12_Wegmans_Gumloop_Agent/12_Wegmans_Gumloop_Agent_01.jpg',label:'Gumloop Agent Screenshot'},
    {file:'evidence/12_Wegmans_Gumloop_Agent/12_Wegmans_Gumloop_Agent_02.jpg',label:"Keller Riedel's Jira Comment"},
    {file:'evidence/12_Wegmans_Gumloop_Agent/12_Wegmans_Gumloop_Agent_03.jpg',label:'Test Case in Salesforce'}
  ],
  '13_Apple_Project':[
    {file:'evidence/13_Apple_Project/13_Apple_Project_01.jpg',label:'Project Apple Feedback Form 1'},
    {file:'evidence/13_Apple_Project/13_Apple_Project_02.jpg',label:'Project Apple Feedback Form 2'},
    {file:'evidence/13_Apple_Project/13_Apple_Project_03.jpg',label:'Project Apple Feedback Form 3'},
    {file:'evidence/13_Apple_Project/13_Apple_Project_04.jpg',label:'Project Apple Feedback Form 4'},
    {file:'evidence/13_Apple_Project/13_Apple_Project_05.jpg',label:'Slack — Co-author Live Unbatchables'}
  ],
  '14_Live_Unbatchables':[
    {file:'evidence/14_Live_Unbatchables/14_Live_Unbatchables_01.jpg',label:'Proposal Email Screenshot'},
    {file:'evidence/14_Live_Unbatchables/14_Live_Unbatchables_02.jpg',label:'Slack — Co-author Confirmation'},
    {file:'evidence/14_Live_Unbatchables/14_Live_Unbatchables_03.jpg',label:'Proposal Comment 1'},
    {file:'evidence/14_Live_Unbatchables/14_Live_Unbatchables_04.jpg',label:'Proposal Comment 2'},
    {file:'evidence/14_Live_Unbatchables/14_Live_Unbatchables_05.jpg',label:'Proposal Comment 3'}
  ],
  '15_Steering_Committee':[
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_01.jpg',label:'Slack — DeMarcus Crews 1'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_02.jpg',label:'Slack — DeMarcus Crews 2'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_03.jpg',label:'Slack — DeMarcus Crews 3'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_04.jpg',label:'Steering Committee Channel 1'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_05.jpg',label:'Steering Committee Channel 2'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_06.jpg',label:'Steering Committee Channel 3'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_07.jpg',label:'Team Kyosha Group Chat 1'},
    {file:'evidence/15_Steering_Committee/15_Steering_Committee_08.jpg',label:'Team Kyosha Group Chat 2'}
  ],
  '16_Tribal_Knowledge_Hub':[
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_01.jpg',label:'Leadership Email Thread 1'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_02.jpg',label:'Leadership Email Thread 2'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_03.jpg',label:'Leadership Email Thread 3'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_04.jpg',label:'Hub Screenshot 1'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_05.jpg',label:'Hub Screenshot 2'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_06.jpg',label:'Hub Screenshot 3'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_07.jpg',label:'Hub Screenshot 4'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_08.jpg',label:'Hub Screenshot 5'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_09.jpg',label:'Hub Screenshot 6'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_10.jpg',label:'Hub Screenshot 7'},
    {file:'evidence/16_Tribal_Knowledge_Hub/16_Tribal_Knowledge_Hub_11.jpg',label:'Hub Screenshot 8'}
  ],
  '17_Praise_Recognition':[
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_01.jpg',label:'#cx-superstars 1'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_02.jpg',label:'#cx-superstars 2'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_03.jpg',label:'#cx-superstars 3'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_04.jpg',label:'#cx-superstars 4'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_05.jpg',label:'#cx-superstars 5'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_06.jpg',label:'#cx-superstars 6'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_07.jpg',label:'#cx-superstars 7'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_08.jpg',label:'#the-queue-crew 1'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_09.jpg',label:'#the-queue-crew 2'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_10.jpg',label:'CX Recognition Wall of Fame'},
    {file:'evidence/17_Praise_Recognition/17_Praise_Recognition_11.jpg',label:'Q2 Specialist of the Quarter — DeMarcus Crews'}
  ],
  '18_Associates_Degree':[
    {file:'evidence/18_Associates_Degree/18_Associates_Degree_01.jpg',label:'Graduation — Excelsior University, July 2026'}
  ]
};
