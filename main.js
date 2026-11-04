/* PLMGS Parents Hub
   All page content lives in DATA below. Paths are relative to index.html, so the site
   works from any folder, including https://<user>.github.io/<repo>/. */
(function () {
  "use strict";

  var IMG = "assets/img/";
  var DOCS = "assets/docs/";

  /* ---------- EDIT HERE: page content ---------- */
  var DATA = {
    formLinks: [
      { title: "Student Data Collection for School", text: "Submit your daughter's details to the school.", link: "https://go.gov.sg/plmgpsquestions2027p1students" },
      { title: "School-based Student Care Service", text: "Sign up for care after school hours.", link: "https://form.gov.sg/68d1085151cdf37f8721a0c5" },
      { title: "School Bus Service", text: "Register for school bus transport.", link: "https://forms.gle/Dxhp1CoSRw2NQWy78" }
    ],
    formDocs: [
      { title: "Edusave and GIRO Standing Order (SC Students)", text: "Information sheet for Singapore Citizen students.", file: DOCS + "giro-edusave-sc.pdf", name: "Information Sheet - GIRO and Edusave Standing Order (SC Students).pdf" },
      { title: "GIRO Standing Order (Non-SC Students)", text: "Information sheet for non-Singapore Citizen students.", file: DOCS + "giro-non-sc.pdf", name: "Information Sheet - GIRO Standing Order (Non-SC Students).pdf" }
    ],
    notesDoc: { title: "Notes for P1 Parents 2027", text: "The school's notes for parents of new Primary One students.", file: DOCS + "notes-for-p1-parents-2027.pdf", name: "Notes for P1 Parents 2027.pdf", open: "Open notes" },
    orientation: {
      facts: [["Date", "11 November 2026"], ["Time", "2pm - 4pm"], ["Venue", "PL Primary"], ["Who attends", "Parents & P1 (2027) PL-Lites"]],
      flow: [
        { time: "2.00 p.m.", items: ["Parents & P1 (2027) PL-Lites to be seated in the Shaw Hall (Level 2)"] },
        { time: "2.15 p.m.", items: ["Principal's Address to Parents in the Shaw Hall", "P1 (2027) visits a Primary One classroom"] },
        { time: "2.40 p.m.", items: ["Year Head Address on Transition to P1"] },
        { time: "3.00 p.m.", items: ["Parent's School Support Group Sharing"] },
        { time: "3.15 p.m.", items: ["Movement"] },
        { time: "3.30 p.m.", items: ["School Tour by current PL-Lites"] },
        { time: "4.00 p.m.", items: ["Once the tour has been completed, parents are free to visit the PSSG/Alumni booths in the Shaw Hall"] }
      ],
      note: "Please leave the school compound with your child via the Main Gate.",
      slides: "Orientation Slides used will be shared here on 13 Nov."
    },
    storybooks: [
      { title: "I'm A Joyful PL-Lite", text: "A read-together social story about starting Primary One. Meet Tina as she gets ready for a new school, makes friends and tries new things.", file: DOCS + "joyful-pl-lite.pdf", name: "I'm A Joyful PL-Lite - A Social Story for P1 Transition.pdf", cover: IMG + "storybook-cover.jpg" }
    ],
    itemsDoc: { title: "Items to bring in the First Week of School (Day 1-5)", text: "The school's guide to what to pack each day, from Monday 4 January to Friday 8 January 2027.", file: DOCS + "items-to-bring.pdf", name: "Items to bring on the First Week of School.pdf", open: "Open document" },
    day0: [
      ["Date", "4 January 2027 (Monday)"], ["Time", "7.30am to 1.30pm"], ["Venue", "PL Primary"], ["Who comes", "Parents & P1 2027 PL-Lite"]
    ],
    canteenDoc: { title: "Canteen Prices", text: "Prices listed are as of Oct 2026.", file: DOCS + "canteen-prices.pdf", name: "Canteen Prices.pdf", open: "Open price list" }
  };

  /* ---------- helpers ---------- */
  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  function actions(d) {
    return '<div class="actions">' +
      '<a class="btn primary" href="' + d.file + '" target="_blank" rel="noopener">' + esc(d.open || "Open") + '</a>' +
      '<a class="btn" href="' + d.file + '" download="' + esc(d.name) + '">Download PDF</a></div>';
  }
  function docCard(d) {
    return '<article class="card"><h3>' + esc(d.title) + '</h3><p>' + esc(d.text) + '</p>' + actions(d) + '</article>';
  }
  function facts(list) {
    return '<dl class="facts">' + list.map(function (f) {
      return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>';
    }).join("") + '</dl>';
  }
  function note(text) { return '<p class="flow-note">' + esc(text) + '</p>'; }

  /* ---------- views ---------- */
  function renderAdmin() {
    var links = DATA.formLinks.map(function (l) {
      return '<a class="linkcard" href="' + l.link + '" target="_blank" rel="noopener"><h3>' + esc(l.title) + '</h3><p>' + esc(l.text) + '</p><span class="go">Open form</span></a>';
    }).join("");
    var docs = DATA.formDocs.map(function (d) {
      return '<a class="linkcard doc" href="' + d.file + '" download="' + esc(d.name) + '"><h3>' + esc(d.title) + '</h3><p>' + esc(d.text) + '</p><span class="go">Download PDF</span></a>';
    }).join("");
    return '<h2>Forms to complete</h2><p class="lead">Forms and information sheets for parents. Each link opens in a new tab.</p>' +
      '<div class="linkgrid">' + links + docs + '</div>';
  }

  function renderParents(tab) {
    if (tab === "orientation") {
      var o = DATA.orientation;
      return '<h2>P1 Orientation</h2><p class="lead">A session for parents of new Primary One students, before school starts.</p>' +
        facts(o.facts) +
        '<h3 style="margin-top:8px">Programme flow</h3>' +
        '<ol class="flow">' + o.flow.map(function (s) {
          return '<li><time>' + esc(s.time) + '</time><div>' + s.items.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join("") + '</div></li>';
        }).join("") + '</ol>' +
        note(o.note) +
        '<h3 style="margin-top:12px">Orientation slides</h3>' +
        '<article class="card"><p style="color:var(--ink);font-weight:600">' + esc(o.slides) + '</p></article>';
    }
    return '<h2>Notes for P1 Parents</h2><p class="lead">What to know before and during your daughter\'s first year.</p>' + docCard(DATA.notesDoc);
  }

  var studentTabs = {
    storybooks: function () {
      return '<h2>PL Storybooks</h2><p class="lead">Stories to share at home before the first day of school.</p>' +
        '<div class="grid">' + DATA.storybooks.map(function (b) {
          return '<article class="card book"><img src="' + b.cover + '" alt="Cover of ' + esc(b.title) + '"><h3>' + esc(b.title) + '</h3><p>' + esc(b.text) + '</p>' +
            actions({ file: b.file, name: b.name, open: "Open storybook" }) + '</article>';
        }).join("") + '</div>';
    },
    bring: function () {
      return '<h2>Items to Bring on the First Week of School</h2><p class="lead">Open or download the school\'s guide to what your daughter needs each day.</p>' + docCard(DATA.itemsDoc);
    },
    day0: function () {
      return '<h2>Day 0</h2><p class="lead">A great first day to meet new teachers and classmates!</p>' + facts(DATA.day0) +
        note("More details on Day 0 Programme will be shared after Orientation Day.");
    },
    teachers: function () {
      return '<h2>Primary One Form Teachers</h2><p class="lead">Your daughter\'s class and form teachers for 2027.</p>' +
        note("More details will be shared after Orientation Day.");
    },
    canteen: function () {
      return '<h2>Canteen Price List</h2><p class="lead">Prices for food and drinks sold in the school canteen.</p>' + docCard(DATA.canteenDoc);
    }
  };

  /* ---------- routing (hash based, safe on GitHub Pages subfolders) ---------- */
  var routes = {
    "home": ["home"],
    "administrative": ["administrative"],
    "p1-parents": ["p1-parents", "notes"], "orientation": ["p1-parents", "orientation"],
    "p1-students": ["p1-students", "storybooks"],
    "storybooks": ["p1-students", "storybooks"], "bring": ["p1-students", "bring"],
    "day0": ["p1-students", "day0"], "teachers": ["p1-students", "teachers"], "canteen": ["p1-students", "canteen"]
  };
  var titles = { "home": "PLMGS Parents Hub", "administrative": "Administrative", "p1-parents": "For P1 Parents", "p1-students": "For P1 Students" };

  function mark(sel, attr, value) {
    $$(sel).forEach(function (a) {
      if (a.getAttribute(attr) === value) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  function show() {
    var tok = (location.hash || "#home").slice(1);
    var r = routes[tok] || routes.home;
    $$(".view").forEach(function (v) { v.hidden = v.id !== "view-" + r[0]; });
    mark("nav a", "data-nav", r[0]);

    if (r[0] === "administrative") $("#admin-panel").innerHTML = renderAdmin();
    if (r[0] === "p1-parents") { $("#p1p-panel").innerHTML = renderParents(r[1]); mark("[data-ptab]", "data-ptab", r[1]); }
    if (r[0] === "p1-students") { $("#p1s-panel").innerHTML = studentTabs[r[1]](); mark("[data-tab]", "data-tab", r[1]); }

    document.title = r[0] === "home" ? titles.home : titles[r[0]] + " | PLMGS Parents Hub";
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", show);
  show();
})();
