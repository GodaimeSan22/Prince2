// questions.js
const questions = [
    {
        category: "OVERVIEW",
        question: "Which is a delivery approach that is defined as starting the next delivery step only when the previous step has been completed and the product is made available at the end of project?",
        options: ["Linear-sequential", "Hybrid", "Iterative-incremental", "Event-driven"],
        correct: 0,
        rationale: "The linear-sequential approach (often called Waterfall) is characterized by completing one step before starting the next, with the final product usually delivered at the very end."
    },
    {
        category: "CONCEPTS",
        question: "Which characteristic of a project relates to teams from different organizations working together?",
        options: ["Cross-functional", "Unique", "Temporary", "Change"],
        correct: 0,
        rationale: "Projects are cross-functional because they involve people from different departments or organizations with different skills working together."
    },
    {
        category: "PRINCIPLES",
        question: "Which principle is being applied when reviewing whether the project will deliver valuable products?",
        options: ["Ensure continued business justification", "Learn from experience", "Manage by exception", "Tailor to suit the project"],
        correct: 0,
        rationale: "The 'Ensure continued business justification' principle requires that there remains a valid Business Case for the project throughout its lifecycle."
    },
    {
        category: "PRINCIPLES",
        question: "An external IT company is being appointed to deliver a new accounting system. Which principle is being applied when agreeing the contract with the IT company?",
        options: ["Define roles, responsibilities and relationships", "Manage by stages", "Manage by exception", "Tailor to suit the project"],
        correct: 0,
        rationale: "This principle covers the 'Relationships' aspect of the people element, ensuring everyone knows what is expected of them and others."
    },
    {
        category: "PRINCIPLES",
        question: "What does the 'manage by exception' principle enable?",
        options: ["Decisions to be made by the right people, at the right time", "The project to deliver benefits required by the business", "The project team members to understand their contribution to the project", "The project team to define the scope to be delivered by the project"],
        correct: 0,
        rationale: "Manage by exception allows the higher management level to be informed only when tolerances are forecast to be exceeded, ensuring decisions are made at the right level."
    },
    {
        category: "PRINCIPLES",
        question: "The project manager agreed with the team manager that a work package can be delivered up to 1 week later than shown on the team plan. Which principle is being applied?",
        options: ["Learn from experience", "Define roles, responsibilities and relationships", "Manage by exception", "Focus on products"],
        correct: 2,
        rationale: "By setting a 1-week tolerance for the Team Manager, the Project Manager is applying 'Manage by Exception'."
    },
    {
        category: "PRACTICES",
        question: "The project manager has recommended that some of the management products for the project should be combined. In which management product should this be documented?",
        options: ["Project plan", "Project initiation documentation", "Stage plan", "Business case"],
        correct: 1,
        rationale: "The PID (Project Initiation Documentation) contains the 'Tailoring' decisions, including how management products will be adapted."
    },
    {
        category: "PEOPLE",
        question: "What is a definition of leadership?",
        options: ["Motivating people through the use of persuasion, influencing and co-creating", "Ensuring that the project is properly initiated before work starts on delivery", "Enabling governance by delegating authority from one management level to the next", "Keeping the project aligned with the benefits being sought by the business"],
        correct: 0,
        rationale: "Leadership in PRINCE2 focuses on the 'soft' side: motivating, persuading, and influencing people to achieve project goals."
    },
    {
        category: "PEOPLE",
        question: "Which term is defined as the process of people working together to achieve the project’s objectives?",
        options: ["Collaboration", "Plans", "Change", "Co-creation"],
        correct: 0,
        rationale: "Collaboration is the practice of people working together toward shared objectives."
    },
    {
        category: "PEOPLE",
        question: "What is a definition of a stakeholder?",
        options: ["An individual that can affect the project", "Someone who owns an action to mitigate an uncertainty", "Anyone with responsibility for the overall direction of the project", "An independent person who assesses if a product meets its quality criteria"],
        correct: 0,
        rationale: "A stakeholder is any individual, group, or organization that can affect, be affected by, or perceive itself to be affected by the project."
    },
    {
        category: "PEOPLE",
        question: "Which activity should be managed carefully as part of 'leading across organizational boundaries' since it can be performed by people that are outside the project team?",
        options: ["Delivering the products to the agreed quality specifications", "Integrating new products into each impacted area of the business", "Gaining commitment for the realization of benefits post-project", "Securing funding from the business layer for the business case"],
        correct: 1,
        rationale: "Integrating products into the business often requires cooperation from operational staff outside the direct control of the project team."
    },
    {
        category: "PEOPLE",
        question: "Which statement about effective stakeholder engagement within a project is CORRECT?",
        options: ["Key influencers are usually senior executives, rather than those undertaking operational tasks", "Key influencers with the greatest influence will remain the same over the life of the project", "Most communication with key influencers should occur through formal communication channels", "The project management team should engage closely with key influencers to ensure project success"],
        correct: 3,
        rationale: "Engaging with key influencers—regardless of their formal seniority—is vital to project success as they can sway stakeholder opinion."
    },
    {
        category: "PEOPLE",
        question: "What is MOST LIKELY to be considered when building an effective project team?",
        options: ["Whether team members need training to improve their skills and competencies", "Ensuring the project manager is more senior than team members", "Whether the communication management approach is likely to evolve during the life of the project", "Ensuring each team member is hand picked by the project manager"],
        correct: 0,
        rationale: "An effective team requires the right skills; identifying and closing skill gaps through training is a key part of team building."
    },
    {
        category: "PRACTICES",
        question: "Which is a description of a purpose of the change management approach?",
        options: ["To describe the roles responsible for managing uncertainties", "To describe how to assess the impact of a request for change on the timeline", "To describe the techniques that will be used to review whether products meet expectations", "To describe how the business will move from the current ways of working to the target state"],
        correct: 3,
        rationale: "In PRINCE2 7, the Change Management Approach describes how the business will transition from the current state to the future state."
    },
    {
        category: "PRINCIPLES",
        question: "Which principle is being applied by the 'people' element when the level of confidence and trust determines the amount of delegation?",
        options: ["Manage by exception", "Manage by stages", "Focus on products", "Tailor to suit the project context"],
        correct: 0,
        rationale: "Manage by exception uses delegation of authority. The level of trust between the Board and the PM determines how wide the tolerances are."
    },
    {
        category: "PRACTICES",
        question: "Which management product BEST provides the project team with a basis for the ongoing management of the overall project?",
        options: ["Highlight report", "Project plan", "Project initiation documentation", "Business case"],
        correct: 2,
        rationale: "The PID provides the 'single source of truth' for the project and the basis for its management and control."
    },
    {
        category: "BUSINESS CASE",
        question: "What do the desired outcomes directly result in?",
        options: ["In achievement of the business objectives", "In delivery of outputs to quality specifications", "In measurable improvements defined in the business case", "In a reduction in the business change costs"],
        correct: 2,
        rationale: "Outcomes result in Benefits. Benefits are the measurable improvements that contribute to the Business Case."
    },
    {
        category: "BUSINESS CASE",
        question: "Which should provide confidence that there is a robust justification for undertaking a project?",
        options: ["Project brief", "Business case", "Benefits management approach", "Project plan"],
        correct: 1,
        rationale: "The Business Case practice is specifically designed to provide the justification for the investment."
    },
    {
        category: "BUSINESS CASE",
        question: "Which term is defined as the tangible or intangible deliverable of an activity?",
        options: ["Output", "Outcome", "Benefit", "Plan"],
        correct: 0,
        rationale: "An Output is a specialist product that is handed over to the users (e.g., a new software system)."
    },
    {
        category: "BUSINESS CASE",
        question: "How are some of the seven aspects of project performance used when establishing business justification?",
        options: ["By solely focusing on costs", "By incorporating dis-benefits in the investment appraisal", "By understanding product quality requirements and their impact on targets", "By ensuring products are fully used in operations"],
        correct: 2,
        rationale: "Project performance aspects (Time, Cost, Quality, Scope, Benefits, Risk, Sustainability) must be balanced to maintain business justification."
    },
    {
        category: "PROCESSES",
        question: "In which step of the business case management technique should the project mandate be reviewed?",
        options: ["Develop", "Check", "Maintain", "Confirm"],
        correct: 0,
        rationale: "The 'Develop' step involves reviewing the project mandate (the trigger) to create the outline Business Case."
    },
    {
        category: "ORGANIZING",
        question: "Which principle is being applied by the 'organizing' practice when the project executive ensures that decisions align to changing business needs?",
        options: ["Focus on products", "Ensure continued business justification", "Learn from experience", "Manage by exception"],
        correct: 1,
        rationale: "The Executive is responsible for the Business Case. Ensuring decisions align with business needs maintains the 'continued business justification' of the project."
    },
    {
        category: "ORGANIZING",
        question: "A new department head wants to know which members of staff will be involved in the project. Which management product should the department head review?",
        options: ["Project management team structure", "Role descriptions", "Project log", "Project board"],
        correct: 0,
        rationale: "The Project Management Team Structure is a chart showing the people involved in the project and their reporting lines."
    },
    {
        category: "ORGANIZING",
        question: "Identify the missing word(s) in the following sentence: PRINCE2 uses the term [?] to cover all people required to allocate their time to the project.",
        options: ["Stakeholders", "Users", "Project team", "Project support"],
        correct: 2,
        rationale: "In PRINCE2 7, 'Project Team' is the specific term used to encompass everyone contributing time to the project, regardless of their organizational background."
    },
    {
        category: "ORGANIZING",
        question: "According to the guidance for effective organizing, how should the commissioning party contribute to a project when it is started?",
        options: ["By identifying the project executive in the project mandate", "By setting sustainability targets on a stage-by-stage basis", "By authorizing any breach of a project level tolerance that arises", "By responsible for the overall management of the project"],
        correct: 0,
        rationale: "The commissioning party (Corporate/Programme) triggers the project and is responsible for appointing the Project Executive via the project mandate."
    },
    {
        category: "PRACTICES: ORGANIZING",
        question: "In which step of the organizational design and development technique should responsibility for setting personal objectives be agreed?",
        options: [
            "Understand the organizational ecosystem", 
            "Design the project ecosystem", 
            "Develop the project ecosystem", 
            "Transition the project into the organizational ecosystem"
        ],
        correct: 0, 
        rationale: "Correct. During the 'Understand the organizational ecosystem' step, clarity is required on who retains responsibility for people management, performance management (including personal objectives), and rewards. Ref 6.3.1.1"
    },
    {
        category: "PLANS",
        question: "How should approved plans enable control?",
        options: ["Plans should provide the baseline from which the schedule can be developed", "Plans should be used to monitor progress and assess the impact of issues and risks", "Plans should be updated as soon as a change in scope is identified", "Plans for the project as a whole include estimates that are the most accurate"],
        correct: 1,
        rationale: "Plans provide the baseline against which progress is measured. They are essential for assessing how issues or risks might delay the project."
    },
    {
        category: "PLANS",
        question: "The team manager needs to check what products should be delivered by his team. Which management product should the team manager review?",
        options: ["Project product description", "Work package description", "Stage plan", "Project plan"],
        correct: 1,
        rationale: "A Work Package description contains the details of what needs to be produced by a team and the constraints (time/cost/quality) they must work within."
    },
    {
        category: "PLANS",
        question: "What is defined as a high-level plan showing the major products of the project?",
        options: ["A project plan", "A stage plan", "A team plan", "A work package"],
        correct: 0,
        rationale: "The Project Plan is a high-level plan that provides the Business Case with planned costs and timescales for the project as a whole."
    },
    {
        category: "PLANS",
        question: "How should the project manager address the planning horizon?",
        options: ["By preparing a complete and detailed project plan", "By preparing a stage plan for the next stage based on more accurate estimates", "By identifying the major products and activities in the project plan", "By identifying interdependencies between major products in the stage plan"],
        correct: 1,
        rationale: "The 'Planning Horizon' principle states that it is only possible to plan in detail for a short period. Therefore, Stage Plans are created closer to the time they start."
    },
    {
        category: "PLANS",
        question: "In which step of the planning technique should the project manager identify the equipment needed to deliver the plan?",
        options: ["Preparing estimates", "Defining and analysing the products", "Organizing work packages", "Preparing a schedule"],
        correct: 0,
        rationale: "Estimating involves identifying the effort and resources (including people and equipment) required to complete the work."
    },
    {
        category: "QUALITY",
        question: "What is a description of a purpose of the quality practice?",
        options: ["To define how products will be tested to obtain acceptance", "To define how the executive will decide if benefits exceed costs", "To enable the team to communicate effectively", "To collect and assess off-specifications"],
        correct: 0,
        rationale: "The purpose of the Quality practice is to ensure that the project's products meet business expectations and are fit for purpose."
    },
    {
        category: "QUALITY",
        question: "The project manager needs to check when an output is planned to be inspected. Which management product should the project manager review?",
        options: ["Quality management approach", "Product description", "Product register", "Quality register"],
        correct: 3,
        rationale: "The Quality Register is a diary of all planned and completed quality activities (inspections, tests, reviews)."
    },
    {
        category: "QUALITY",
        question: "Which describes quality specifications?",
        options: ["They are applied when inspecting a finished product", "They are applied when accepting the project product", "They are documented in the project product description", "They are documented in the quality management approach"],
        correct: 0,
        rationale: "Quality specifications are the criteria that a product must meet; they are used during quality control (inspections) to verify the product is correct."
    },
    {
        category: "QUALITY",
        question: "A building construction project needs to meet environmental targets. Which information should be recorded as part of quality planning?",
        options: ["Quality activities in the quality register", "Test results after testing", "Environmental requirements as specifications in the product description", "Post project reviews in the benefits management approach"],
        correct: 2,
        rationale: "Requirements (like environmental targets) must be translated into measurable quality specifications within the Product Description."
    },
    {
        category: "QUALITY",
        question: "The project manager has prioritized the criteria for the user to accept the product. In which step of the quality management technique should this be used to define specifications?",
        options: ["Gathering user inputs", "Accepting products", "Describing the quality management approach", "Controlling quality"],
        correct: 0,
        rationale: "The first step, 'Gathering user inputs', involves identifying what the users want (requirements) and prioritizing their importance."
    },
    {
        category: "RISK",
        question: "Why should the risk practice be performed?",
        options: ["To enable the board to achieve benefits", "To enable the PM to predict time and cost", "To identify modifications to current products", "To identify and manage opportunities that would positively affect objectives"],
        correct: 3,
        rationale: "PRINCE2 defines risk as both threats (negative) and opportunities (positive). Managing opportunities helps achieve or improve project objectives."
    },
    {
        category: "RISK",
        question: "The PRINCE2 procedure needs to be tailored to manage events likely to affect objectives. In which product should this be documented?",
        options: ["Risk management approach", "Risk register", "Issue management approach", "Issue register"],
        correct: 0,
        rationale: "The Risk Management Approach describes how risk will be managed, including the specific procedure, roles, and tools to be used."
    },
    {
        category: "RISK",
        question: "Which term is defined as an uncertain event or set of events that, should it occur, will have an effect on the achievement of objectives?",
        options: ["Risk", "Off-specification", "Request for change", "Problem/concern"],
        correct: 0,
        rationale: "This is the official PRINCE2 definition of a risk. It is an uncertainty that affects objectives."
    },
    {
        category: "RISK",
        question: "How does effective risk management enable understanding of the overall risk exposure for a project?",
        options: ["By positioning risks on a summary risk profile", "By identifying sustainability risks", "By identifying, assessing and planning responses", "By establishing a risk budget"],
        correct: 0,
        rationale: "A summary risk profile (a plot of probability vs impact) allows the Board to see the 'total' amount of risk (exposure) at a glance."
    },
    {
        category: "RISK",
        question: "The project manager needs to review the project brief to decide who will be responsible for each step in the risk management technique. In which step should this occur?",
        options: ["Identify - define context and objectives", "Identify - identify threats and opportunities", "Assess - prioritize risks", "Plan"],
        correct: 0,
        rationale: "Defining the context includes identifying the roles and responsibilities for the risk management process."
    },
    {
        category: "ISSUES",
        question: "The senior user is concerned that the scope of the project needs to be changed. When should the senior user raise this issue?",
        options: ["As soon as the issue has been identified", "At the next scheduled formal project meeting", "At the next scheduled meeting of project board members", "As the stage end approaches"],
        correct: 0,
        rationale: "Issues should be raised as soon as they are identified to ensure they are captured, assessed, and managed before they impact the project further."
    },
    {
        category: "ISSUES",
        question: "The project manager wants to review the status of all events that are being considered by the project management team. Which management product should the project manager review?",
        options: ["Issue register", "Issue report", "Risk register", "Product register"],
        correct: 0,
        rationale: "The Issue Register captures and maintains the status of all formal issues (Requests for Change, Off-specifications, and Problems/Concerns)."
    },
    {
        category: "ISSUES",
        question: "What is the definition of a request for change?",
        options: ["A proposal for a change to a baseline", "Something that should be provided but has not been provided", "An uncertain event which may affect objectives", "The current versions of project products that are subject to change control"],
        correct: 0,
        rationale: "A Request for Change is an issue that provides a proposal for a change to a previously agreed baseline (scope, product description, etc.)."
    },
    {
        category: "ISSUES",
        question: "The project board has delegated significant change authority to several roles. What negative effect could directly result from this?",
        options: ["Most changes to product descriptions may be generated by team members", "The status of products recorded in the product register may not agree", "The project board may be slow to make decisions", "The project scope may become less aligned to the business case"],
        correct: 3,
        rationale: "If too much change authority is delegated without strict oversight, numerous small changes (scope creep) can lead the project away from its original Business Case."
    },
    {
        category: "ISSUES",
        question: "The project manager needs to consider the impact of an issue on the benefits and costs. In which step of the issue management technique should this occur?",
        options: ["Assessing issues", "Capturing issues", "Deciding on changes", "Implementing changes"],
        correct: 0,
        rationale: "Assessing involves analyzing the impact of the issue on the project's performance targets (Time, Cost, Quality, Scope, Benefits, Risk)."
    },
    {
        category: "PROGRESS",
        question: "Which statement BEST describes where progress should be monitored?",
        options: ["At stage boundaries at the end of each stage", "At the project, stage, and work package level", "At the product delivery level", "At project closure when costs are being calculated"],
        correct: 1,
        rationale: "PRINCE2 requires progress monitoring across the three management levels: Project (Board), Stage (PM), and Work Package (Team Manager)."
    },
    {
        category: "PROGRESS",
        question: "The project manager needs to inform the project board of what approved products are outstanding before the board approves further work. In which management product is this recorded?",
        options: ["Checkpoint report", "Highlight report", "End stage report", "End project report"],
        correct: 2,
        rationale: "The End Stage Report is used by the PM to give the Board a summary of the stage's performance and the status of products before the Board decides on the next stage."
    },
    {
        category: "PROGRESS",
        question: "Identify the missing word: The business layer, outside the project team, sets the overall requirements and [?] levels for the project.",
        options: ["Tolerance", "Issue", "Forecast", "Risk"],
        correct: 0,
        rationale: "Corporate, programme management, or the customer (Business Layer) sets the overall project-level tolerances."
    },
    {
        category: "PROGRESS",
        question: "The project mandate set a firm date for delivery. It has now been agreed that the project can be delayed by up to 4 weeks. Which level of management should agree this?",
        options: ["Project board", "Project manager", "Business layer", "Team manager"],
        correct: 2,
        rationale: "Changes to project-level tolerances (the overall project finish date) must be approved by the Business Layer (Corporate or Programme management)."
    },
    {
        category: "PRACTICES: PROGRESS",
        question: "What action may be taken by a project manager when an issue causes one of the stage tolerances to be exceeded?",
        options: [
            "Accept or reject the recommendation from the exception report", 
            "Resolve the issue within other project tolerances", 
            "Escalate to the business layer for advice", 
            "Resolve the issue using other stage tolerances and include in the next highlight report"
        ],
        correct: 3,
        rationale: "Correct. According to the 'exception management' technique, if the issue can be resolved by the project manager within the stage tolerances, it does not require an exception report and should be included in the next highlight report. Ref 11.3.1.1"
    },
    {
        category: "PROCESSES",
        question: "Which is a description of a purpose of the 'initiating a project' (IP) process?",
        options: ["To define how long it will take to gain acceptance", "To enable control between the PM and team managers", "To review, at a high level, whether the project will add value", "To assess whether a project has been delivered on time"],
        correct: 0,
        rationale: "A purpose of IP is to establish solid foundations for the project, enabling the organization to understand the work that needs to be done to deliver the product."
    },
    {
        category: "PROCESSES",
        question: "The team manager needs to agree what products need to be produced, and when. In which process should this be agreed?",
        options: ["Managing product delivery", "Directing a project", "Managing a stage boundary", "Controlling a stage"],
        correct: 0,
        rationale: "The Managing Product Delivery process is where the Team Manager and Project Manager agree on the Work Package."
    },
    {
        category: "PROCESSES",
        question: "In which process is the work undertaken to assess whether all objectives in the current PID have been achieved?",
        options: ["Closing a project", "Controlling a stage", "Managing product delivery", "Managing a stage boundary"],
        correct: 0,
        rationale: "The Closing a Project process involves checking the project's performance against its baseline (the PID) to confirm objectives were met."
    },
    {
        category: "PROCESSES",
        question: "Which TWO are objectives of the 'starting up a project' process? (1. Define scope for initiation, 4. Assess alternative delivery ways)",
        options: ["1 and 2", "2 and 3", "3 and 4", "1 and 4"],
        correct: 3,
        rationale: "Starting Up a Project aims to ensure the prerequisites for initiation are in place, which includes defining scope (1) and looking at the Project Approach/alternatives (4)."
    },
    {
        category: "PROCESSES",
        question: "Which TWO activities support the 'directing a project' process? (1. Authorize team disbanding, 2. Review plans for post-project benefits)",
        options: ["1 and 2", "2 and 3", "3 and 4", "1 and 4"],
        correct: 0,
        rationale: "The Project Board (Directing) authorizes the project closure/disbanding (1) and is responsible for ensuring the Benefits Management Approach covers post-project reviews (2)."
    },
    {
        category: "PROCESSES",
        question: "Which TWO are objectives of the 'controlling a stage' process? (1. Respond to risks and issues, 4. Continually assess business justification)",
        options: ["1 and 2", "2 and 3", "3 and 4", "1 and 4"],
        correct: 3,
        rationale: "Controlling a Stage is the PM's day-to-day work: managing issues/risks (1) and ensuring the Business Case remains valid (4)."
    },
    {
        category: "PROCESSES",
        question: "During 'managing a stage boundary', when should the project manager replan the rest of the stage?",
        options: [
            "After reporting a tolerance breach", 
            "After receiving advice in response to a highlight report", 
            "After requesting board approval for an exception plan", 
            "After requesting board approval for a team change"
        ],
        correct: 0, 
        rationale: "Correct. The process of 'managing a stage boundary' provides the means to implement an exception procedure. This is triggered when the project manager forecasts that stage or project tolerances are likely to be exceeded (a breach). Ref 18.3"
    },
    {
        category: "PROCESSES",
        question: "Which describes how the 'controlling a stage' process may be used?",
        options: ["To monitor the initiation stage of a large project", "Omitted if PM is also Team Manager", "Merged with Managing a Stage Boundary", "Omitted if team managers are internal"],
        correct: 0,
        rationale: "The 'initiation' of a project is itself a stage. Therefore, the Project Manager uses 'Controlling a Stage' to manage the work of the 'Initiating a Project' process."
    },
    {
        category: "PROCESSES",
        question: "Which describes a project characteristic that drives the need for the 'closing a project' process?",
        options: ["A project should hand over the desired change to business as usual", "A project is delivered using a new project team", "A project uses resources from different departments", "A project deals with higher levels of uncertainty"],
        correct: 0,
        rationale: "Projects are temporary. The 'Closing a Project' process ensures a controlled end where products are handed over to 'Business as Usual'."
    },
    {
        category: "CONCEPTS",
        question: "Which statement describes the project context?",
        options: [
            "It should be understood by stakeholders so that the principles are applied appropriately",
            "It explains how each aspect of project management should be applied for the processes to be effective",
            "It guides the progression from pre-project activity through the stages of the project lifecycle",
            "It ensures an understanding of the needs of stakeholders, and the relationships between them"
        ],
        correct: 0,
        rationale: "PRINCE2 is not a 'one-size-fits-all' method. The project context must be understood so the principles can be tailored and applied effectively to that specific environment."
    },
    {
        category: "CONCEPTS",
        question: "Which is a characteristic of a project that distinguishes it from business as usual?",
        options: [
            "Projects continue after business as usual resumes",
            "Projects include ongoing management of operations",
            "Every project will be different to previous projects",
            "Project work is generally less risky than business as usual work"
        ],
        correct: 2,
        rationale: "Uniqueness is a core characteristic. Even if projects are similar, every project will have different stakeholders, locations, or team members, making it different from repetitive BAU work."
    },
    {
        category: "PRINCIPLES",
        question: "The project board has decided that the project should close prematurely as the external environment has changed. Which principle is being applied?",
        options: ["Learn from experience", "Tailor to suit the project", "Manage by exception", "Ensure continued business justification"],
        correct: 3,
        rationale: "If the project is no longer justified (e.g., due to market changes), it should be closed. This is the core of 'Ensure continued business justification'."
    },
    {
        category: "PRINCIPLES",
        question: "Which statement about the 'define roles, responsibilities and relationships' principle is CORRECT?",
        options: [
            "The project management team should consist exclusively of internal stakeholders",
            "An organization's day-to-day management structures are likely to be suited to control the project work",
            "The project board should exclude external supplier representatives",
            "Suppliers are stakeholders that can be external to the business"
        ],
        correct: 3,
        rationale: "PRINCE2 recognizes three primary categories of stakeholders: Business, User, and Supplier. Suppliers can be internal or external to the organization."
    },
    {
        category: "PRINCIPLES",
        question: "Which principle is being applied when setting limits for the seven aspects of performance to enable the project manager to work effectively?",
        options: ["Manage by exception", "Learn from experience", "Tailor to suit the project", "Define roles, responsibilities and build relationships"],
        correct: 0,
        rationale: "Manage by exception uses 'Tolerances' (limits) for time, cost, quality, scope, benefits, risk, and sustainability to define the PM's authority."
    },
    {
        category: "PRINCIPLES",
        question: "What does the 'ensure continued business justification' principle facilitate?",
        options: [
            "That the project has a business stakeholder to ensure the investment continues",
            "That the project remains desirable, viable and achievable as the project progresses",
            "That products delivered by the project meet their quality requirements",
            "That the PRINCE2 project management method is suited to the scale of investment"
        ],
        correct: 1,
        rationale: "Business justification means the project must remain desirable (the benefits outweigh costs/risks), viable (it can be done), and achievable (it will deliver)."
    },
    {
        category: "PRINCIPLES",
        question: "Which statement describes how the principles support effective project management?",
        options: [
            "They allow the project team to decide how the method should be applied on the project",
            "They take into account industry-specific models as PRINCE2 is generic",
            "They rely on a common vocabulary that should be applied as defined in PRINCE2",
            "They should be applied in the same way across projects within an organization"
        ],
        correct: 0,
        rationale: "The principles are the 'why' of PRINCE2. They provide a framework that allows the team to tailor the method while still following best practices."
    },
    {
        category: "PEOPLE",
        question: "Which statement describes leadership on a project?",
        options: [
            "It is best done through collaboration across the project ecosystem",
            "It is the set of shared attitudes, values and goals for the project",
            "It is a control that takes place when a specific event occurs",
            "It is instructing the execution of tasks in line with agreed ways of working"
        ],
        correct: 0,
        rationale: "Effective leadership in PRINCE2 7 emphasizes collaboration and influencing across the entire project ecosystem, not just top-down instruction."
    },
    {
        category: "PEOPLE",
        question: "Which is a definition of co-creation?",
        options: [
            "Working with key influencers to ensure ways of working are adopted",
            "Modifying any of the approved management products that are part of the baseline",
            "Ensuring decisions made at stage boundaries are informed by justification",
            "Applying management control whenever a specific event takes place"
        ],
        correct: 0,
        rationale: "Co-creation involves working together with stakeholders to develop and adopt shared ways of working and solutions."
    },
    {
        category: "PEOPLE",
        question: "Which is NOT an aspect of leadership?",
        options: [
            "Instructing the execution of tasks in line with agreed ways of working",
            "Motivating people to achieve a project’s objectives",
            "Persuading, influencing, and co-creating with stakeholders",
            "Seeking regular feedback to remain aligned to the project’s objectives"
        ],
        correct: 0,
        rationale: "Instructing the execution of tasks is an aspect of *Management*, whereas Leadership focuses on motivating, persuading, and influencing."
    },
    {
        category: "PEOPLE",
        question: "Which activity should be managed carefully as part of 'leading across organizational boundaries', because it is likely to be performed by people outside the project team?",
        options: [
            "Securing funding from the business layer for the business case",
            "Integrating new products into each impacted area of the business",
            "Gaining commitment for the realization of benefits post-project",
            "Delivering the products to the agreed quality specifications"
        ],
        correct: 1,
        rationale: "Integration often involves operational staff who are not part of the project team, requiring the PM to lead across organizational boundaries."
    },
    {
        category: "PEOPLE",
        question: "Why is change management important in a project?",
        options: [
            "Stakeholders should understand which organizational areas are impacted",
            "The project products should be described and subject to change control",
            "Confidence is needed that the project can meet scope objectives",
            "User’s quality expectations of the project products should be understood"
        ],
        correct: 0,
        rationale: "Change management (the people side of change) ensures that the organization and stakeholders are prepared for and can adopt the changes the project brings."
    },
    {
        category: "PEOPLE",
        question: "Which statement about capability and competency within a project is CORRECT?",
        options: [
            "Teams should consist of members with similar capabilities and competencies",
            "Team members are likely to perform differently depending on the structure of the team",
            "Standard roles and responsibilities should be used, focused on the project's needs",
            "Career progression of project team members is often the responsibility of the project manager"
        ],
        correct: 1,
        rationale: "PRINCE2 recognizes that people are not interchangeable; the way a team is structured and led directly impacts how members perform."
    },
    {
        category: "PRACTICES",
        question: "What is a description of a purpose of the change management approach?",
        options: [
            "To describe how proposals to change the project baseline should be recorded",
            "To describe the standards required to deliver products that meet expectations",
            "To define how the business will need to operate in the future to meet objectives",
            "To describe the processes and procedures required to manage uncertainty"
        ],
        correct: 2,
        rationale: "The Change Management Approach (in the context of the People element) defines how the business will transition to a new way of operating."
    },
    {
        category: "PEOPLE",
        question: "A project holds a workshop to share experiences of new ways of working between project team members. Which principle is being applied?",
        options: ["Learn from experience", "Manage by exception", "Define roles, responsibilities and relationships", "Focus on products"],
        correct: 0,
        rationale: "Workshops to share experiences and 'lessons' are a direct application of the 'Learn from experience' principle."
    },
    {
        category: "PRACTICES",
        question: "Which management product should the project board approve to commit to the project scope and timescale?",
        options: ["Project mandate", "Benefits management approach", "Project initiation documentation", "Business case"],
        correct: 2,
        rationale: "The PID (Project Initiation Documentation) contains the project plan and scope; its approval marks the formal commitment to the project."
    },
    {
        category: "BUSINESS CASE",
        question: "What is a purpose of the business case practice?",
        options: [
            "To enable the project executive to decide whether to continue with the project",
            "To identify the user’s quality expectations to meet the business need",
            "To prevent the planned outcomes from causing dis-benefits to the business",
            "To define the products and how they will be delivered to satisfy the business case"
        ],
        correct: 0,
        rationale: "The Business Case Practice provides a mechanism for the Executive (and Board) to judge whether the project remains a worthwhile investment."
    },
    {
        category: "BUSINESS CASE",
        question: "Which should be used to justify whether the project should be progressed?",
        options: ["Project brief and benefits management approach", "Highlight report and benefits management approach", "Business case and highlight report", "Project brief and business case"],
        correct: 3,
        rationale: "In 'Starting Up', the Project Brief (containing the outline Business Case) is used; later, the full Business Case is the primary document for justification."
    },
    {
        category: "BUSINESS CASE",
        question: "Identify the missing word(s): A business objective is the measurable outcomes that demonstrate progress in relation to [?] and to which the project should contribute.",
        options: ["organization’s strategy", "the outputs desired by the business", "the benefits desired by the business", "the business justification"],
        correct: 0,
        rationale: "Business objectives link the project's work to the overall strategic goals of the parent organization."
    },
    {
        category: "BUSINESS CASE",
        question: "A government department has a target to reduce its carbon footprint by 8-12%. How should this requirement be captured?",
        options: ["As a benefits tolerance", "As a sustainability tolerance", "As outcomes to be achieved", "As a quality tolerance"],
        correct: 1,
        rationale: "Sustainability is the 7th performance aspect in PRINCE2 7. Environmental targets are managed as sustainability tolerances."
    },
    {
    id: 101,
    category: "Practices: Business Case",
    question: "During a stage, the project manager recorded a new risk on the risk register. In which step of the business case management technique should its impact on the business case be assessed?",
    options: [
        "Develop",
        "Check",
        "Maintain",
        "Confirm"
    ],
    correct: 1, // Індекс 1 відповідає 'Check'
    rationale: "The 'Check' step involves assessing the project's continued viability and desirability, especially when new risks or issues are identified. 'Maintain' is focused on updating the business case with actuals and forecasts."
    },
    {
        category: "ORGANIZING",
        question: "The project manager has received feedback from stakeholders identifying the need to change the project team structure. Which principle is being applied by the 'organizing' practice when actioning this feedback?",
        options: ["Learn from experience", "Define roles, responsibilities, and relationships", "Manage by stages", "Tailor to suit the project"],
        correct: 0,
        rationale: "Seeking and acting on feedback to improve the project's organization is a key aspect of 'Learning from experience' in PRINCE2 7."
    },
    {
        category: "ORGANIZING",
        question: "Which management product should specify individual accountability for sustainability targets?",
        options: ["Role descriptions", "Project management team structure", "Product description", "Business case"],
        correct: 0,
        rationale: "Role descriptions define the specific responsibilities and accountabilities for individuals, including any specific targets like sustainability."
    },
    {
        category: "ORGANIZING",
        question: "What is defined as having the authority to direct the project within the remit set by the business?",
        options: ["Project manager", "Project executive", "Project management team", "Project board"],
        correct: 3,
        rationale: "The Project Board is responsible for the overall direction and management of the project within the constraints set by Corporate/Programme management."
    },
    {
        category: "PEOPLE",
        question: "How should the senior user fulfil their responsibility for continued realization of benefits post-project?",
        options: [
            "By representing the work needed in a hierarchy to help organize the project",
            "By ensuring commitment from people in the user community to adopting the new products",
            "By defining how to assure the continued justification of the project",
            "By ensuring the technical integrity of the project products delivered to the users"
        ],
        correct: 1,
        rationale: "The Senior User is responsible for ensuring that the products are used by the business to realize the expected benefits."
    },
    {
        category: "ORGANIZING",
        question: "A new team member has just joined the project team and will be going on a site visit. In which step of the organizational design and development technique should this occur?",
        options: ["Develop the project ecosystem", "Understand the organizational ecosystem", "Design the project ecosystem", "Manage the ongoing changes to the project ecosystem"],
        correct: 0,
        rationale: "The 'Develop' step involves onboarding team members and helping them understand the project environment (ecosystem), such as through site visits."
    },
    {
        category: "PLANS",
        question: "What is the purpose of the plans practice?",
        options: [
            "To enable the project manager to control the project by defining who will deliver the products, and when",
            "To enable the project executive to monitor whether the project is desirable, viable and achievable",
            "To allow the project executive to define which role is responsible for producing the plan",
            "To allow the project manager to plan how to respond to uncertainties"
        ],
        correct: 0,
        rationale: "The primary purpose of Plans is to provide a baseline for control by defining the who, what, how, and when of product delivery."
    },
    {
        category: "PLANS",
        question: "The business strategy has changed, requiring the scope of the project to be increased beyond the tolerances agreed by the business layer. Which plan should be produced?",
        options: ["Project plan", "Stage plan", "Team plan", "Exception plan"],
        correct: 3,
        rationale: "An Exception Plan is prepared to replace a Project Plan or Stage Plan when it is forecast that tolerances will be exceeded."
    },
    {
        category: "PLANS",
        question: "Identify the missing word: When planning, there are at least two types of [?] relevant to a project: internal and external.",
        options: ["dependency", "plan", "exception", "scope"],
        correct: 0,
        rationale: "PRINCE2 identifies internal dependencies (between project activities) and external dependencies (on activities outside the project team's control)."
    },
    {
        category: "PLANS",
        question: "How should the project plan typically accommodate an iterative-incremental project?",
        options: [
            "By having multiple delivery stages that allow acceptance criteria to be refined",
            "By ensuring that product descriptions are complete before approval",
            "By breaking down the work of the stage to the level of detail required for day-to-day control",
            "By dividing the project into two stages"
        ],
        correct: 0,
        rationale: "Iterative-incremental delivery often uses multiple stages to allow for feedback and refinement of products as they are developed."
    },
    {
        category: "PLANS",
        question: "The project manager needs to capture the user’s quality expectations. In which step of the planning technique should this occur?",
        options: ["Defining and analysing the products", "Organizing work packages", "Preparing estimates", "Preparing a schedule"],
        correct: 0,
        rationale: "User quality expectations are identified and translated into project-wide requirements during the product-based planning steps."
    },
    {
        category: "QUALITY",
        question: "What is a purpose of the quality practice?",
        options: [
            "To enable control by defining how the project will deliver the products to satisfy the business case",
            "To document the user requirements and ensure they remain unchanged",
            "To identify how the project will ensure that the user requirements are met",
            "To agree to deliver products that were not part of the justification"
        ],
        correct: 2,
        rationale: "Quality practice ensures that the products delivered meet the expectations and specifications of the users/business."
    },
    {
        category: "QUALITY",
        question: "The team manager needs to record that a product needs to be tested but has not yet been approved. Where should this information be recorded?",
        options: ["Quality register", "Quality specifications", "Product register", "Project product description"],
        correct: 0,
        rationale: "The Quality Register tracks all quality activities, including the status of tests and whether a product has passed or failed."
    },
    {
        category: "QUALITY",
        question: "Which statement describes project assurance, rather than quality assurance?",
        options: [
            "It is independent of the project manager but not the project",
            "It monitors the project's quality control measures",
            "It is independent of the project team and may be part of the user's system",
            "It describes the documented expectations"
        ],
        correct: 0,
        rationale: "Project Assurance is the responsibility of the Project Board and is internal to the project. Quality Assurance is typically independent of the project itself (Corporate/External)."
    },
    {
        category: "ISSUES",
        question: "A new requirement is identified when producing a subordinate plan (e.g., Team Plan). How should this be managed?",
        options: ["By preparing new product descriptions", "By using the issue management approach", "By updating the project product description", "By updating the quality management approach"],
        correct: 1,
        rationale: "Any new requirement identified after the baseline is agreed is treated as a Request for Change and handled via the Issue Management Approach."
    },
    {
        category: "QUALITY",
        question: "A system has been tested and the user needs to take ownership of the system. In which step of the quality management technique should this occur?",
        options: ["Gathering user inputs", "Accepting products", "Describing the quality management approach", "Controlling quality"],
        correct: 1,
        rationale: "'Accepting products' is the formal handover step where ownership is transferred from the project to the users."
    },
    {
        category: "RISK",
        question: "What is a purpose of the risk practice?",
        options: [
            "To address concerns about standards that are to be applied",
            "To identify the likelihood of a threat occurring and its possible impact",
            "To guarantee delivery of the agreed scope",
            "To ensure that problems are resolved before they negatively impact the project"
        ],
        correct: 1,
        rationale: "The core purpose of the Risk practice is to manage uncertainty by identifying threats/opportunities and assessing their probability and impact."
    },
    {
        category: "RISK",
        question: "Which provides the project management team with guidance on how to record threats?",
        options: ["Risk management approach", "Risk register", "Digital and data management approach", "Work package description"],
        correct: 0,
        rationale: "The Risk Management Approach defines the tools, techniques, and procedures (including recording) for risk management on the project."
    },
    {
        category: "RISK",
        question: "Which term describes who is responsible for responding to a risk satisfactorily?",
        options: ["Risk owner", "Risk action owner", "Project support", "Project assurance"],
        correct: 0,
        rationale: "The Risk Owner is responsible for managing the risk, while the Risk Action Owner is responsible for carrying out the specific response actions."
    },
    {
        category: "RISK",
        question: "How does loss aversion result in less effective decision-making when considering risks?",
        options: [
            "By valuing the need to keep what you have, rather than to get something new",
            "By discounting downside risk, believing things will go to plan",
            "By valuing team unity, rather than reaching the right decision",
            "By viewing risks that are more likely soon as riskier"
        ],
        correct: 0,
        rationale: "Loss aversion is a cognitive bias where individuals prefer avoiding losses to acquiring equivalent gains, often leading to overly cautious decision-making."
    },
    {
        category: "RISK",
        question: "The project manager needs to understand the project environment and define how to manage the risk on the project. In which step of the risk management technique should this be defined?",
        options: ["Identify", "Assess", "Plan", "Implement"],
        correct: 0,
        rationale: "The 'Identify' step includes defining the context, which involves understanding the project environment and deciding how risk management will be performed (documented in the Risk Management Approach)."
    },
    {
        category: "ISSUES",
        question: "How does the issues practice contribute to a successful project?",
        options: [
            "By identifying events that might positively impact the project objectives",
            "By controlling modifications to the current approved versions of management products",
            "By adjusting the level of approval required according to the user’s expectations",
            "By making the uncertain situation certain by addressing its cause"
        ],
        correct: 1,
        rationale: "The Issues practice ensures that all changes to baselined products are controlled, preventing 'scope creep' and unauthorized modifications."
    },
    {
        category: "ISSUES",
        question: "Project support needs to understand how to make changes to approved versions of the project products. Which management product should they review?",
        options: ["Issue management approach", "Risk management approach", "Benefits management approach", "Quality management approach"],
        correct: 0,
        rationale: "The Issue Management Approach defines the procedure for change control, including how to handle requests for change to baselined products."
    },
    {
        category: "ISSUES",
        question: "What is the definition of an issue?",
        options: [
            "An event relevant to the project that requires project management consideration",
            "An uncertain event that, should it occur, will have an effect on the project",
            "A description of the impact an uncertain event would have on the objectives",
            "A measurable threshold to represent the range of outcomes"
        ],
        correct: 0,
        rationale: "PRINCE2 defines an issue as any event that has already happened, is happening, or is about to happen that requires the PM's attention. (Option B is the definition of a Risk)."
    },
    {
        category: "ISSUES",
        question: "A change has been approved and needs to be implemented. Which part of the guidance for effective issue management should enable the change to be implemented?",
        options: [
            "Delegation of authority by the board to decide on changes at the appropriate level",
            "Application of the change budget within authorized constraints",
            "Audit of whether the actual product status reflects the product register",
            "Definition of an appropriate level at which products need to be baselined"
        ],
        correct: 1,
        rationale: "A change budget is a sum of money the Project Board sets aside to pay for authorized changes to the scope or functional requirements."
    },
    {
        category: "ISSUES",
        question: "An issue has been identified and its impact on the project scope needs to be understood. In which step of the technique should the impact be understood?",
        options: ["Assessing issues", "Capturing issues", "Deciding on changes", "Implementing changes"],
        correct: 0,
        rationale: "The 'Assessing' step involves evaluating the impact of the issue on the project's performance targets (Time, Cost, Quality, Scope, etc.)."
    },
    {
        category: "PROGRESS",
        question: "What is the purpose of the progress practice?",
        options: [
            "To forecast whether the stage is on track to deliver on time and budget",
            "To capture information to enable past mistakes to be avoided",
            "To decide what to do about a product that does not meet quality specifications",
            "To ensure that the user’s quality expectations are met"
        ],
        correct: 0,
        rationale: "The purpose of Progress is to establish mechanisms to monitor and compare actual achievements against those planned, providing a forecast for the future."
    },
    {
        category: "PROGRESS",
        question: "Which should be reviewed by the project board when making the decision about what to do next with the project?",
        options: ["Digital and data management approach", "End stage report", "Highlight report", "Checkpoint report"],
        correct: 1,
        rationale: "The End Stage Report provides the Project Board with information on the stage's performance, which is used to decide whether to authorize the next stage."
    },
    {
        category: "PROGRESS",
        question: "What is the definition of an exception?",
        options: [
            "A forecast that there will be a deviation beyond agreed tolerance levels",
            "An uncertain event that will have an effect on objectives",
            "A product that will not meet its quality specifications",
            "A report to the project manager on the status of the work package"
        ],
        correct: 0,
        rationale: "An exception occurs when it is forecast that a tolerance level (Time, Cost, etc.) will be exceeded."
    },
    {
        category: "PROGRESS",
        question: "How should the use of data and systems support effective progress management?",
        options: [
            "By focusing efforts on collecting data about the past",
            "By providing accurate data to assist in predicting future project performance",
            "By focusing the efforts on manual data collection",
            "By defining the tolerances for each management level"
        ],
        correct: 1,
        rationale: "In PRINCE2 7, the use of digital data and systems is emphasized to provide 'real-time' information and better forecasting/predictive analytics."
    },
    {
        category: "PROGRESS",
        question: "According to the exception management technique, at which levels are projects MOST LIKELY to identify issues that exceed stage tolerances?",
        options: ["Commissioning AND directing", "Directing AND managing", "Directing AND delivering", "Managing AND delivering"],
        correct: 3,
        rationale: "The Project Manager (Managing level) monitors the stage, and the Team Manager (Delivering level) monitors work packages. These levels are where tolerance deviations are first identified."
    },
    {
        category: "PROCESSES",
        question: "Which is a purpose of the 'starting up a project' (SU) process?",
        options: [
            "To assess whether a project is likely to be valuable to the organization",
            "To analyze work required before committing to the PID",
            "To provide the opportunity for users to confirm acceptance",
            "To delegate the management of the project in a controlled way"
        ],
        correct: 0,
        rationale: "The main purpose of SU is to ensure the question 'Do we have a viable and worthwhile project?' is answered before expensive work starts."
    },
    {
        category: "PROCESSES",
        question: "Which process should ensure that an organization does not proceed to establish solid foundations for unsuitable projects?",
        options: ["Starting up a project", "Directing a project", "Initiating a project", "Managing a stage boundary"],
        correct: 0,
        rationale: "SU acts as a filter, preventing the organization from wasting resources on 'Initiating' a project that isn't justified."
    },
    {
        category: "PROCESSES",
        question: "Which is a purpose of the 'directing a project' process?",
        options: [
            "To retain accountability of the project board while delegating the detailed work",
            "To prevent any projects with poor justification from being undertaken",
            "To manage the work of a stage by implementing corrective actions",
            "To provide information so commissioning can commit to delivery"
        ],
        correct: 0,
        rationale: "Directing a Project allows the Project Board to manage 'by exception'—they stay accountable for the project's success but delegate day-to-day management to the PM."
    },
    {
        category: "PROCESSES",
        question: "Which TWO are objectives of the 'controlling a stage' process? (1. No uncontrolled changes, 4. Products meet quality criteria)",
        options: ["1 and 2", "2 and 3", "3 and 4", "1 and 4"],
        correct: 3,
        rationale: "Controlling a Stage (CS) is about managing the work. This includes change control (1) and ensuring delivery meets quality (4)."
    },
    {
        category: "PROCESSES",
        question: "Which TWO are objectives of the 'directing a project' process? (1. Closed only when authorized, 2. Post-project benefit reviews scheduled)",
        options: ["1 and 2", "2 and 3", "3 and 4", "1 and 4"],
        correct: 0,
        rationale: "The Board (Directing) is responsible for authorizing the end of the project (1) and ensuring the plan for benefits realization extends past the project end date (2)."
    },
    {
        category: "PROCESSES",
        question: "Which TWO are objectives of the 'initiating a project' process? (3. How changes are approved, 4. Plan and estimate costs)",
        options: ["1 and 2", "2 and 3", "3 and 4", "1 and 4"],
        correct: 2,
        rationale: "Initiating a Project (IP) establishes the management approaches—including change (3)—and the Project Plan/Budget (4)."
    },
    {
        category: "PROCESSES",
        question: "Which activity is performed ONLY in the 'managing a stage boundary' (SB) process?",
        options: [
            "Preparing a replacement for the current stage plan (Exception Plan)",
            "Constantly reviewing the business justification",
            "Reporting stage progress regularly",
            "Preparing the project for premature closure"
        ],
        correct: 0,
        rationale: "SB is the process used to create an Exception Plan if a tolerance is breached. Other options like reviewing justification happen in other processes too (e.g., CS)."
    },
    {
        category: "PROCESSES",
        question: "What is needed to perform the 'managing a stage boundary' process?",
        options: [
            "The work of the project needs to be broken down into sections (stages)",
            "Each stage needs to deliver project benefits incrementally",
            "The project needs to have a predictable end date",
            "Every stage needs to be in exception"
        ],
        correct: 0,
        rationale: "The SB process only exists because PRINCE2 mandates 'Manage by Stages'. Without dividing the project into stages, there are no boundaries to manage."
    },
    {
        category: "PROCESSES",
        question: "What action should be taken if a project is closed prematurely?",
        options: [
            "The project manager should still use the 'closing a project' process",
            "The project manager should ensure no additional work is undertaken",
            "The project manager should trigger premature close if justification is lost",
            "The project board should approve remaining budget for operational costs"
        ],
        correct: 0,
        rationale: "Even if a project is closed early, the 'Closing a Project' process is used to ensure products are handed over, lessons are captured, and resources are released properly."
    }
];