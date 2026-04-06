// AI assisted development
/**
 * Know Your Team (CN RevOps) — data, search, and render.
 * Groups: Leadership, Revenue Operations.
 * Org chart: Kaustubh → Yash → two cluster columns (RevOps — Satyam | RevOps — Aryan), like department boxes under CTO.
 */

(function () {
  "use strict";

  /** @typedef {{ id: string, group: string, name: string, role: string, department: string, location: string, phone: string, telHref: string, doj: string, timezone: string, dob?: string | null, skills: string[], bio: string | null, photoUrl: string | null }} Employee */

  /** @type {Employee[]} */
  const EMPLOYEES = [
    {
      id: "kaustubh-singh",
      group: "Leadership",
      name: "Kaustubh Singh",
      role: "Founder & CEO",
      department: "Leadership",
      location: "Hyderabad",
      phone: "+91 92010 04208",
      telHref: "tel:+919201004208",
      doj: "08 Dec 2023",
      timezone: "Full-time",
      skills: [],
      bio: null,
      photoUrl: "assets/kaustubh-singh.png",
    },
    {
      id: "yash",
      group: "Leadership",
      name: "Yash Singh",
      role: "CTO",
      department: "Leadership",
      location: "Hyderabad",
      phone: "+91 90989 64288",
      telHref: "tel:+919098964288",
      doj: "18 Jan 2025",
      timezone: "Full-time",
      skills: [
        "Technology Strategy & Vision",
        "System Architecture",
        "Data Engineering",
        "Cloud Computing",
        "AI/ML",
        "Leadership",
        "Product Development",
        "Stakeholder Management",
      ],
      bio:
        "Passionate technologist focused on scalable solutions and innovation. Inspired by football mindset—consistency, teamwork, and high performance. Combines strategic thinking with hands-on execution.",
      photoUrl: "assets/yash-singh.png",
    },
    {
      id: "satyam-tiwari",
      group: "Revenue Operations",
      name: "Satyam Tiwari",
      role: "Revenue Operations (RevOps)",
      department: "Revenue Operations",
      location: "Hyderabad, Telangana",
      phone: "+91 83054 12608",
      telHref: "tel:+918305412608",
      doj: "21 July, 2025",
      timezone: "Full-time",
      skills: [
        "Revenue Operations (RevOps)",
        "Process Optimization",
        "Data Analysis & Metrics",
        "Pipeline & Performance Management",
      ],
      bio:
        "A driven RevOps professional focused on aligning marketing, sales, and customer success to accelerate growth. Committed to building scalable systems, optimizing processes, and leveraging data to contribute strategically to the organization's success.",
      photoUrl: "assets/satyam-tiwari.png",
    },
    {
      id: "aryan-patel",
      group: "Revenue Operations",
      name: "Aryan Patel",
      role: "Revenue Operations (RevOps)",
      department: "Revenue Operations",
      location: "Bhopal, MP",
      phone: "+91 62637 74189",
      telHref: "tel:+916263774189",
      doj: "20 January, 2025",
      timezone: "Full-time",
      skills: [
        "Time management",
        "Problem-solving",
        "Curiosity",
        "Ownership mindset",
        "Revenue growth focus on effective, high-impact activity",
      ],
      bio:
        "I am part of the RevOps (Revenue Operations) team, where my primary focus is on solving operational challenges and driving consistent revenue growth for the company. I work closely on identifying gaps, improving processes, and ensuring smooth coordination across teams.\n\nI actively monitor monthly performance, focus on achieving sustainable growth, and ensure proper management of ongoing projects. Additionally, I contribute to securing new projects and optimizing overall business efficiency.",
      photoUrl: "assets/aryan-patel.png",
    },
    {
      id: "prachi-rajput",
      group: "Revenue Operations",
      name: "Prachi Rajput",
      role: "Revenue Operations (RevOps)",
      department: "Revenue Operations",
      location: "Bhopal, MP",
      phone: "+91 93028 83945",
      telHref: "tel:+919302883945",
      doj: "14 May, 2025",
      timezone: "Full-time",
      dob: "08 May 2004",
      skills: [
        "Power BI — data visualization",
        "Dashboards",
        "Basic analysis",
        "MS Excel",
        "Lead generation",
        "CRM",
        "Sales pipeline tracking",
        "Market research",
        "Client communication",
        "Negotiation",
        "Presentations",
      ],
      bio:
        "Results-driven Business Development Associate with months of experience in driving business growth, managing client relationships, and identifying new market opportunities. Strong ability to communicate with clients, understand business needs, and deliver tailored solutions that enhance revenue and customer satisfaction.",
      photoUrl: "assets/prachi-rajput.png",
    },
    {
      id: "shreya-singh-rathore",
      group: "Revenue Operations",
      name: "Shreya Singh Rathore",
      role: "Revenue Operations (RevOps)",
      department: "Revenue Operations",
      location: "Bhopal, MP",
      phone: "+91 87702 79310",
      telHref: "tel:+918770279310",
      doj: "19 May, 2025",
      timezone: "Full-time",
      dob: "2 Sep 2003",
      skills: [
        "Lead generation",
        "Client management",
        "Process improvement for growth",
        "Reporting",
        "Performance tracking",
        "Excel for data handling",
        "Market research",
        "HR support",
        "Team management",
      ],
      bio:
        'Work as a RevOps team member, handling revenue operations and overall management, along with client handling and team & project management, ensuring everything runs smoothly.\n\nBelieve in "stay positive, work hard, make it happen."\n\nAlways like to learn and explore new things, try my best, and never give up easily.',
      photoUrl: "assets/shreya-singh-rathore.png",
    },
    {
      id: "ritu-waghmare",
      group: "Revenue Operations",
      name: "Ritu Waghmare",
      role: "Revenue Operations (RevOps)",
      department: "Revenue Operations",
      location: "Bhopal, MP",
      phone: "+91 79990 04564",
      telHref: "tel:+917999004564",
      doj: "19 May, 2025",
      timezone: "Full-time",
      dob: "20 Mar 2003",
      skills: [
        "Revenue Operations Management",
        "Team Management",
        "Human Resource Coordination",
        "Problem-Solving & Decision Making",
      ],
      bio:
        "I'm currently working as a RevOps, where I manage revenue operations along with key HR responsibilities and Revenue responsibilities. My role also involves handling the team and ensuring that day-to-day operations run smoothly.\n\nI enjoy taking ownership of my work and balancing multiple responsibilities effectively. I take pride in my management skills, my ability to stay organized, and to delivering quality work.",
      photoUrl: null,
    },
  ];

  const GROUP_ORDER = ["Leadership", "Revenue Operations"];

  /** Org tree for the chart (employee ids must exist in EMPLOYEES). */
  const ORG_TREE = {
    type: "person",
    id: "kaustubh-singh",
    children: [
      {
        type: "person",
        id: "yash",
        children: [
          {
            type: "cluster",
            title: "RevOps — Satyam",
            children: [
              {
                type: "person",
                id: "satyam-tiwari",
                children: [
                  { type: "person", id: "prachi-rajput", children: [] },
                  { type: "person", id: "shreya-singh-rathore", children: [] },
                ],
              },
            ],
          },
          {
            type: "cluster",
            title: "RevOps — Aryan",
            children: [
              {
                type: "person",
                id: "aryan-patel",
                children: [{ type: "person", id: "ritu-waghmare", children: [] }],
              },
            ],
          },
        ],
      },
    ],
  };

  const root = document.getElementById("directory-root");
  const orgChartRoot = document.getElementById("org-chart-root");
  const searchInput = document.getElementById("search-input");
  const searchStatus = document.getElementById("search-status");
  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/company/cloudnexusorg/?viewAsMember=true",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/cloudnexus.in/",
  };

  /**
   * Placeholder avatar (initials) — no external photo required.
   * @param {string} name
   * @returns {string}
   */
  function avatarUrl(name) {
    const enc = encodeURIComponent(name);
    return `https://api.dicebear.com/7.x/initials/svg?seed=${enc}&fontFamily=sans-serif&fontSize=42&backgroundType=gradientLinear`;
  }

  /**
   * @param {string} str
   * @returns {string}
   */
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * @param {string} bio
   * @returns {string}
   */
  function formatBio(bio) {
    return escapeHtml(bio).replace(/\n/g, "<br>");
  }

  /**
   * @param {string} id
   * @returns {Employee | undefined}
   */
  function getEmployeeById(id) {
    return EMPLOYEES.find((e) => e.id === id);
  }

  /**
   * @param {Employee} emp
   * @returns {string}
   */
  function orgNodeCardHtml(emp) {
    const imgSrc = emp.photoUrl || avatarUrl(emp.name);
    return `
      <a class="org-node" href="#profile-${escapeHtml(emp.id)}">
        <img
          class="org-node__photo"
          src="${escapeHtml(imgSrc)}"
          alt=""
          width="56"
          height="56"
          loading="lazy"
          decoding="async"
        />
        <span class="org-node__name">${escapeHtml(emp.name)}</span>
        <span class="org-node__role">${escapeHtml(emp.role)}</span>
      </a>
    `;
  }

  /**
   * @param {{ type: string, id?: string, title?: string, children?: unknown[] }} node
   * @returns {string}
   */
  function renderOrgNode(node) {
    if (node.type === "cluster") {
      const inner = node.children.map(renderOrgNode).join("");
      return `
        <div class="org-cluster">
          <p class="org-cluster__title">${escapeHtml(node.title)}</p>
          <div class="org-cluster__row">${inner}</div>
        </div>
      `;
    }
    const emp = getEmployeeById(node.id);
    if (!emp) return "";
    const card = orgNodeCardHtml(emp);
    const kids = node.children;
    if (!kids || kids.length === 0) {
      return `<div class="org-subtree org-subtree--leaf">${card}</div>`;
    }
    const childrenHtml = kids.map(renderOrgNode).join("");
    return `
      <div class="org-subtree">
        <div class="org-subtree__parent">${card}</div>
        <div class="org-subtree__stem" aria-hidden="true"></div>
        <div class="org-subtree__children">${childrenHtml}</div>
      </div>
    `;
  }

  function renderOrgChart() {
    if (!orgChartRoot) return;
    const body = renderOrgNode(ORG_TREE);
    orgChartRoot.innerHTML = `
      <section id="org-chart" class="org-chart-section" aria-labelledby="org-chart-heading">
        <div class="section-heading org-chart-section__heading">
          <h2 class="section-heading__title" id="org-chart-heading">Organization chart</h2>
        </div>
        <p class="org-chart-section__note">
          Reporting lines are illustrative. Select a person to jump to their full profile below.
        </p>
        <div class="org-chart" aria-label="Team organization">${body}</div>
      </section>
    `;
    orgChartRoot.setAttribute("aria-busy", "false");
  }

  /**
   * @param {Employee} emp
   * @returns {string} lowercase haystack for search
   */
  function searchHaystack(emp) {
    const skillText = emp.skills.join(" ");
    const dobText = emp.dob || "";
    return [emp.name, emp.role, emp.department, emp.location, skillText, dobText].join(" ").toLowerCase();
  }

  /**
   * @param {Employee[]} list
   * @param {string} query
   * @returns {Employee[]}
   */
  function filterEmployees(list, query) {
    const q = query.trim().toLowerCase();
    if (!q) return list.slice();
    return list.filter((e) => searchHaystack(e).includes(q));
  }

  /**
   * @param {Employee[]} list
   * @returns {Map<string, Employee[]>}
   */
  function groupByGroup(list) {
    const map = new Map();
    for (const g of GROUP_ORDER) map.set(g, []);
    for (const emp of list) {
      const arr = map.get(emp.group);
      if (arr) arr.push(emp);
    }
    return map;
  }

  /**
   * @param {Employee} emp
   * @returns {string}
   */
  function cardHtml(emp) {
    const imgSrc = emp.photoUrl || avatarUrl(emp.name);
    const skillsHtml =
      emp.skills.length > 0
        ? `<ul class="employee-card__tags" aria-label="Key skills">
            ${emp.skills
              .map((s) => `<li class="employee-card__tag">${escapeHtml(s)}</li>`)
              .join("")}
           </ul>`
        : `<ul class="employee-card__tags" aria-label="Key skills">
            <li class="employee-card__tag employee-card__tag--muted">Not listed</li>
           </ul>`;

    const bioHtml = emp.bio
      ? `<p class="employee-card__bio">${formatBio(emp.bio)}</p>`
      : `<p class="employee-card__bio employee-card__bio--placeholder">Professional introduction not provided yet.</p>`;

    const dobRow =
      emp.dob && emp.dob.trim()
        ? `<div class="employee-card__meta-row">
              <span class="employee-card__meta-label">Date of birth</span>
              <span>${escapeHtml(emp.dob)}</span>
            </div>`
        : "";

    return `
      <article class="employee-card" id="profile-${escapeHtml(emp.id)}" data-employee-id="${escapeHtml(emp.id)}">
        <div class="employee-card__top">
          <div class="employee-card__photo-wrap">
            <img
              class="employee-card__photo"
              src="${escapeHtml(imgSrc)}"
              alt=""
              width="88"
              height="88"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="employee-card__identity">
            <h2 class="employee-card__name">${escapeHtml(emp.name)}</h2>
            <p class="employee-card__role">${escapeHtml(emp.role)}</p>
            <p class="employee-card__dept">${escapeHtml(emp.department)}</p>
          </div>
        </div>
        <div class="employee-card__body">
          <div class="employee-card__meta">
            <div class="employee-card__meta-row">
              <span class="employee-card__meta-label">Location</span>
              <span>${escapeHtml(emp.location)}</span>
            </div>
            <div class="employee-card__meta-row">
              <span class="employee-card__meta-label">Contact</span>
              <a href="${escapeHtml(emp.telHref)}">${escapeHtml(emp.phone)}</a>
            </div>
            <div class="employee-card__meta-row">
              <span class="employee-card__meta-label">Date of joining</span>
              <span>${escapeHtml(emp.doj)}</span>
            </div>
            <div class="employee-card__meta-row">
              <span class="employee-card__meta-label">Time zone</span>
              <span>${escapeHtml(emp.timezone)}</span>
            </div>
            ${dobRow}
          </div>
          <div>
            <p class="employee-card__skills-title">Key skills</p>
            ${skillsHtml}
          </div>
          <div>
            <p class="employee-card__skills-title">Introduction</p>
            ${bioHtml}
          </div>
          <nav class="employee-card__socials" aria-label="${escapeHtml(emp.name)} social links">
            <a href="${escapeHtml(SOCIAL_LINKS.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(emp.name)} LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.12.91 2.03 2.03 2.03a2.03 2.03 0 1 0 .02-4.06ZM20.8 13.4c0-3.3-1.76-4.84-4.1-4.84-1.89 0-2.73 1.04-3.2 1.77V8.5h-3.38V20h3.38v-6.02c0-1.58.3-3.11 2.26-3.11 1.94 0 1.97 1.82 1.97 3.22V20H21v-6.6h-.2Z"/>
              </svg>
              <span class="visually-hidden">LinkedIn</span>
            </a>
            <a href="${escapeHtml(SOCIAL_LINKS.twitter)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(emp.name)} Twitter / X" title="Twitter / X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 3h2.9l-6.3 7.2L23 21h-5.9l-4.6-6.3L7 21H4.1l6.7-7.7L1.5 3h6l4.2 5.8L18.9 3Zm-1 16h1.6L6.6 4.9H5l12.9 14.1Z"/>
              </svg>
              <span class="visually-hidden">Twitter / X</span>
            </a>
            <a href="${escapeHtml(SOCIAL_LINKS.facebook)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(emp.name)} Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.4 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.6 1.5-1.6h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H8V13h2.5v8h2.9Z"/>
              </svg>
              <span class="visually-hidden">Facebook</span>
            </a>
            <a href="${escapeHtml(SOCIAL_LINKS.instagram)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(emp.name)} Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Zm3.1 1.1c-.1-1.4-.4-2.6-1.4-3.7S17.5 3.1 16.1 3c-1.5-.1-6.7-.1-8.2 0-1.4.1-2.6.4-3.7 1.4S3.1 6.5 3 7.9c-.1 1.5-.1 6.7 0 8.2.1 1.4.4 2.6 1.4 3.7s2.3 1.3 3.7 1.4c1.5.1 6.7.1 8.2 0 1.4-.1 2.6-.4 3.7-1.4s1.3-2.3 1.4-3.7c.1-1.5.1-6.7 0-8.2Zm-1.9 10c-.3.8-.9 1.4-1.7 1.7-1.2.5-4 .4-5.6.4s-4.4.1-5.6-.4a2.8 2.8 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.6s-.1-4.4.4-5.6c.3-.8.9-1.4 1.7-1.7 1.2-.5 4-.4 5.6-.4s4.4-.1 5.6.4c.8.3 1.4.9 1.7 1.7.5 1.2.4 4 .4 5.6s.1 4.4-.4 5.6Z"/>
              </svg>
              <span class="visually-hidden">Instagram</span>
            </a>
          </nav>
        </div>
      </article>
    `;
  }

  /**
   * @param {Employee[]} filtered
   */
  function render(filtered) {
    if (!root) return;

    if (filtered.length === 0) {
      root.innerHTML = `
        <div class="empty-state" role="status">
          <strong>No matches</strong>
          Try another name, role, department, or skill keyword.
        </div>
      `;
      return;
    }

    const grouped = groupByGroup(filtered);
    const sections = [];

    for (const groupName of GROUP_ORDER) {
      const members = grouped.get(groupName) || [];
      if (members.length === 0) continue;
      sections.push(`
        <section class="directory-section" aria-labelledby="section-${slug(groupName)}">
          <div class="section-heading">
            <h2 class="section-heading__title" id="section-${slug(groupName)}">${escapeHtml(groupName)}</h2>
            <span class="section-heading__count">${members.length} ${members.length === 1 ? "person" : "people"}</span>
          </div>
          <div class="card-grid">
            ${members.map((e) => cardHtml(e)).join("")}
          </div>
        </section>
      `);
    }

    root.innerHTML = sections.join("");
  }

  /**
   * @param {string} s
   */
  function slug(s) {
    return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }

  /**
   * @param {Employee[]} filtered
   * @param {string} query
   */
  function updateStatus(filtered, query) {
    if (!searchStatus) return;
    const total = EMPLOYEES.length;
    if (!query.trim()) {
      searchStatus.textContent = `Showing all ${total} CloudNexus team members.`;
      return;
    }
    if (filtered.length === 0) {
      searchStatus.textContent = `No results for “${query.trim()}”.`;
      return;
    }
    searchStatus.textContent = `Showing ${filtered.length} of ${total} matching “${query.trim()}”.`;
  }

  function init() {
    renderOrgChart();

    const run = () => {
      const q = searchInput ? searchInput.value : "";
      const filtered = filterEmployees(EMPLOYEES, q);
      render(filtered);
      updateStatus(filtered, q);
      if (root) root.setAttribute("aria-busy", "false");
    };

    run();

    if (searchInput) {
      searchInput.addEventListener("input", run);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
