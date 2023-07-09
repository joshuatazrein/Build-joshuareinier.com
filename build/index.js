var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react3 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-733FTPEW.css";

// app/components/Tag.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function Tag({
  children,
  to,
  keepSearch = !0
}) {
  let { search } = (0, import_react2.useLocation)(), className = "inline-block w-fit rounded-full border border-blue-500 px-2 font-menu mouse:hover:bg-gray-700 touch:active:bg-gray-700 transition-colors duration-300 whitespace-nowrap my-1";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: typeof to == "string" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: to + (keepSearch ? search : ""), className, children }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className, onClick: to, children }) });
}

// app/components/Section.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Section({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mx-auto my-8 max-w-4xl space-y-2 px-8 text-center leading-6", children });
}

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { className: "min-h-screen bg-gradient-to-br from-black to-gray-900 px-8 font-sans text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-full border-blue-500/50 px-4 py-1 transition-colors duration-300 hover:border hover:bg-gray-700/50", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Link, { className: "font-serif text-4xl", to: "/", children: "Joshua Tazman Reinier" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Section, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          "is an",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tag, { to: "artist", keepSearch: !1, children: "artist" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tag, { to: "researcher", keepSearch: !1, children: "researcher" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tag, { to: "designer", keepSearch: !1, children: "designer" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: "exploring the connections between language, noise, and technology." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
}

// app/routes/$role.$work.tsx
var role_work_exports = {};
__export(role_work_exports, {
  default: () => Works
});
var import_react4 = require("@remix-run/react"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/assets/vid/what-ive-done_cover.webm
var what_ive_done_cover_default = "/build/_assets/what-ive-done_cover-UIUZJZJN.webm";

// app/assets/vid/rain_cover.webm
var rain_cover_default = "/build/_assets/rain_cover-B3VETEJJ.webm";

// app/assets/vid/am_cover.webm
var am_cover_default = "/build/_assets/am_cover-W2PH5TE7.webm";

// app/assets/img/demons-analogy_cover.webp
var demons_analogy_cover_default = "/build/_assets/demons-analogy_cover-QNDSB6QY.webp";

// app/assets/img/reclaiming-space_cover.webp
var reclaiming_space_cover_default = "/build/_assets/reclaiming-space_cover-O6XYGPE2.webp";

// app/assets/img/self-prescribing-doctors_cover.webp
var self_prescribing_doctors_cover_default = "/build/_assets/self-prescribing-doctors_cover-WHUXOHMS.webp";

// app/assets/vid/a-max-patch_cover.webm
var a_max_patch_cover_default = "/build/_assets/a-max-patch_cover-RUJNAJGN.webm";

// app/assets/img/cyborgco_cover.webp
var cyborgco_cover_default = "/build/_assets/cyborgco_cover-T2RWHQ6W.webp";

// app/assets/img/placeholder.webp
var placeholder_default = "/build/_assets/placeholder-ZG26CGML.webp";

// app/assets/img/earco_cover.webp
var earco_cover_default = "/build/_assets/earco_cover-4GCZSU2J.webp";

// app/assets/img/notice_cover.webp
var notice_cover_default = "/build/_assets/notice_cover-V5C4PGEK.webp";

// app/assets/img/riverbank_cover.webp
var riverbank_cover_default = "/build/_assets/riverbank_cover-WQPRKJAZ.webp";

// app/assets/img/finnegans-wake_cover.webp
var finnegans_wake_cover_default = "/build/_assets/finnegans-wake_cover-HZXWHRMN.webp";

// app/assets/vid/grants-video.webm
var grants_video_default = "/build/_assets/grants-video-IDINUKOI.webm";

// app/assets/vid/mmg-logo-export.webm
var mmg_logo_export_default = "/build/_assets/mmg-logo-export-J275I3GD.webm";

// app/assets/vid/particularities-cover.webm
var particularities_cover_default = "/build/_assets/particularities-cover-YDBTBS36.webm";

// app/assets/img/joshua-tazman.png
var joshua_tazman_default = "/build/_assets/joshua-tazman-UT6LYRYP.png";

// app/assets/icon/fullscreen.svg
var fullscreen_default = "/build/_assets/fullscreen-PIGXLDCK.svg";

// app/assets/vid/timara-website-cover.webm
var timara_website_cover_default = "/build/_assets/timara-website-cover-ZJHDVONT.webm";

// app/assets/vid/unfolding-cover.webm
var unfolding_cover_default = "/build/_assets/unfolding-cover-IS6XFYVX.webm";

// app/assets/img/time-ruler-cover.webp
var time_ruler_cover_default = "/build/_assets/time-ruler-cover-2O7WV6LD.webp";

// app/assets/assets.tsx
var icons = {
  fullScreen: fullscreen_default
}, images = {
  demonsOfAnalogyCover: demons_analogy_cover_default,
  reclaimingSpaceCover: reclaiming_space_cover_default,
  selfPrescribingDoctorsUnionCover: self_prescribing_doctors_cover_default,
  cyborgCoCover: cyborgco_cover_default,
  placeholder: placeholder_default,
  earCoCover: earco_cover_default,
  noticeCover: notice_cover_default,
  riverbankCover: riverbank_cover_default,
  finnegansWakeCover: finnegans_wake_cover_default,
  headshot: joshua_tazman_default,
  timeRulerCover: time_ruler_cover_default
}, videos = {
  rainingCover: rain_cover_default,
  whatIveDoneCover: what_ive_done_cover_default,
  amCover: am_cover_default,
  aMaxPatchIMadeIn2020Cover: a_max_patch_cover_default,
  mmgLogoCover: mmg_logo_export_default,
  grantsVideoCover: grants_video_default,
  particularitiesCover: particularities_cover_default,
  timaraCover: timara_website_cover_default,
  unfoldingCover: unfolding_cover_default
}, docs = {
  demonsOfAnalogy: "/assets/doc/demons-of-analogy.pdf",
  earCo: "/assets/doc/earco.pdf",
  cyborgCo: "/assets/doc/cyborgco.pdf",
  finnegansWake: "/assets/doc/finnegansWake.pdf"
};

// app/components/PDF.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function PDF({
  src,
  className,
  dark = !0
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: "relative mx-auto my-2 h-[calc(100vh-200px)] w-full" + (className || ""),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "absolute right-0 top-0 z-40 m-2 rounded border border-white bg-black p-1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: src, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: icons.fullScreen, height: 16, width: 16 }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "object",
          {
            data: src,
            type: "application/pdf",
            width: "100%",
            height: "100%"
          }
        )
      ]
    }
  );
}

// app/components/ViewButton.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function ViewButton({
  href,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href, target: "_blank", className: "block w-full", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "w-full flex justify-center border border-accent-light rounded-lg hover:bg-accent-light hover:border-accent-dark font-bold transition-colors duration-300 my-2", children }) });
}

// app/models/works.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), works = {
  artist: [
    {
      title: "Particularities",
      route: "particularities",
      filter: "performance",
      subtitle: "multimedia installation",
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "iframe",
        {
          className: "aspect-video w-full",
          src: "https://www.youtube.com/embed/seOUcmpeKhA",
          title: "Particularities",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0
        }
      ),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: "Particularities" }),
        " is an experiment in communal interior monologue, assisted by technology. The work was produced using a sound-processing patch in Max/MSP, which communicates with a webpage that processes speech recognition and visuals. Audio is spoken into a microphone from a stage covered in reflective curtains, which the computer transcribes and records. Fragments of text flash on the screen, which also manipulates the computer\u2019s webcam to display a pixelated silhouette of the speaker, processed through Javascript. In parallel, the computer continually selects random-access recordings, mangled through pitch and time manipulations until they sound like glitches, ghosts\u2014or inner demons. A series of prompts cycle through the screen, alternately asking the participants to speak and questioning the nature of what they are actually doing."
      ] }),
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.particularitiesCover })
    },
    {
      title: "Unfolding",
      route: "unfolding",
      filter: "performance",
      subtitle: "performer, machine-learning, & mylar",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.unfoldingCover }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "iframe",
        {
          className: "aspect-video w-full",
          src: "https://www.youtube.com/embed/6SPKB028M18",
          title: "Unfolding",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0
        }
      ),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: `"Unfolding" takes inspiration from Cixin Liu's novel "The Three-Body Problem," where a society from the planet Trisolaris manages to unfold a single proton from 11 dimensions into 2 dimensions. After being unfolded, circuits are etched into the proton's surface, transforming it into a conscious supercomputer. The piece uses the FluCoMa machine-learning library in Max/MSP to separate the sounds of a Mylar sheet into subcomponents, routing them into each other and transforming them into an 8-channel delay. The voice is used to modulate and manipulate the properties of the sound, and as the mylar sheet is crumpled, the sound takes on new properties as the controlling voice learns to sing in its chaotic language.` })
    },
    {
      title: "What I've Done",
      route: "what-ive-done",
      filter: "performance",
      subtitle: "jazz band & meta-monologue",
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "iframe",
        {
          width: "100%",
          className: "aspect-video",
          src: "https://www.youtube.com/embed/lnE9lyYIAZg",
          title: "What I've Done",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: !0
        }
      ),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: "What I've Done" }),
          " is equal parts a satirical surrealist free-jazz meta-monologue, an existential crisis, and a bit of good fun. The musicians play from doodles scrawled around the written text, encouraging them to negotiate a semantic, cartoony chaos to turn the doodles into sound. The piece folds in on itself in multiple levels: the speaker's internal, bottled-up overflowing pressure-cooker of meaning, then the competition between the speaker as bandleader and the band, and finally the tension between speaker and audience. Meanwhile, there's a fourth tension of me, who is writing this program note, and me, who was filmed in the video and wrote the piece as well as performing it. Oh, what have I done."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "Sam Blieden produced & directed the video, with support from Henry Nelson & Will Curry. The band is the Self-Prescribing Doctors Union, comprised of Henry Nelson (guitar), Will Curry (saxophone), Owen Frankel (bass), and Jeremy McCabe (drums). Truly, this piece is what all of them have done to bring this idea to fruition." })
      ] }),
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.whatIveDoneCover })
    },
    {
      title: "raining",
      route: "raining",
      filter: "hypertext",
      subtitle: "kinetic digital soundpoem",
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: "raining" }),
        " is a kinetic digital poem in which fragments of words flitter across the screen in response to user scrolling. It explores the capacity for text to speak for itself, using a shifting sound background to paint a landscape of unsettled community."
      ] }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "/works/raining/index.html", children: "view work" }),
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.rainingCover })
    },
    {
      title: "AM",
      route: "am",
      filter: "hypertext",
      subtitle: "juxtaposed sonic & written fragments",
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: "AM" }),
        " juxtaposes text fragments with radio interference, creating a chaotic nexus of interruption and challenging the reader to navigate the boundary between sound and sense."
      ] }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "/works/am/index.html", children: "view work" }),
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.amCover })
    },
    {
      title: "a max patch i made in 2020",
      route: "a-max-patch",
      filter: "performance",
      subtitle: "for live-processed solo zoomer",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.aMaxPatchIMadeIn2020Cover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "I produced this piece for a remote music technology class during the COVID lockdown. In it, I introduce the piece for the duration of the piece, processing the Zoom Audio to progressively glitch and distort the voice until it is intelligible. The piece slowly transforms the speaking voice into a computer-generated sawtooth wave, and then a spasming MIDI electric bass, becoming a cyborg speaker\u2014or maybe it was just Zoom glitching out all along\u2014or maybe that's just my voice." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "iframe",
        {
          className: "aspect-video w-full",
          src: "https://www.youtube.com/embed/tmyQ_Gt34fY",
          title: "A Max Patch I made in 2020",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0
        }
      )
    }
  ],
  researcher: [
    {
      title: "Demons of Analogy",
      route: "demons-of-analogy",
      filter: "writing",
      subtitle: "The Encounter Between Music and Language After Mallarm\xE9",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.demonsOfAnalogyCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: "Demons of Analogy" }),
        ' is my undergraduate Honors thesis, and was awarded Highest Honors from the Oberlin College Comparative Literature department. The thesis explores the overlaps and contradictions between poetry and sound using the lens of static and interference. I draw from the work of Michel Serres, especially his book "Parasite," to connect French Symbolist St\xE9phane Mallarm\xE9 to the music of Pierre Boulez, eventually arriving at contemporary avant-garde artists such as Georges Aperghis and O(rphan)d(rift>). I consider how a musical poetics can speak to poetic music, and how the two can merge.'
      ] }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PDF, { src: "/assets/doc/demons-of-analogy.pdf" })
    },
    {
      title: "EarCo",
      route: "ear-co",
      filter: "teaching",
      subtitle: "Eavesdropping, Surveillance and the Poetics of Information",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.earCoCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "The ownership of one's self and body in the present age is under siege, since our presence, identity, and experiences are narrated by data monitors and intelligent systems. EarCo is a seminar-style class that explores the ways technology permeates our lives and how we conceive of ourselves, and opens up questions to redefine our relationship to technology. We will alternate between creative and scholarly investigations into topics such as AI, surveillance, data flows, and algorithms, investigating how these issues influence our identities and agency." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PDF, { src: docs.earCo })
    },
    {
      title: "CyborgCo",
      route: "cyborg-co",
      filter: "teaching",
      subtitle: "Posthumanism, Selves, & the Anthropocene",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.cyborgCoCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "A human. A post. A duck-sized horse. Is this WestWorld? Maybe. In CyborgCo: Posthumanism, Selves, and the Anthropocene, we will explore what it means to be human\u2014and potentially whether \u201Chuman\u201D still has any meaning at all. This seminar course will explore posthumanism\u2014a word to describe this particular existential territory\u2014through philosophy, theory, technology, art, and popular culture, including Donna Haraway\u2019s feminist interpretation of the cyborg, popular movies and TV shows such as Akira & Black Mirror, and even poetry written by artificial intelligence. We will discuss questions such as technology\u2019s impact on the self, human hubris & anthropocentrism, and whether we ourselves are still human\u2014or whether it might be better to forget the word human altogether. Our goal is to enrich our knowledge of the current day and even the future, but student need no prior knowledge to enjoy the course\u2014only a willingness to question everything. This class is in-person and largely discussion based with readings and artistic/written projects." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PDF, { src: docs.cyborgCo })
    },
    {
      title: "Reclaiming Space",
      route: "reclaiming-space",
      filter: "writing",
      subtitle: "Feminist Psychosis in Cixous & Cl\xE9ment, Gilman, & Ferrante",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.reclaimingSpaceCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: `In this paper, I explore the concept of \u201Chysteria\u201D as it is reclaimed by the feminist thinkers/authors H\xE9l\xE8ne Cixous and Catherine Cl\xE9ment, Charlotte Perkins Gilman, and Elena Ferrante. I begin with a brief overview of the historical connotations of hysteria, showing how the metaphor of hysteria mythologized a patriarchal notion of femininity before being re-mythologized for feminism. I then investigate how Gilman and Ferrante have situated themselves within this myth, using The Newly Born Woman by Cixous and Cl\xE9ment to contextualize Gilman\u2019s "The Yellow Wall-Paper\u201D and Ferrante's first two novels, Troubling Love and The Days of Abandonment. I identify a similar process used by both Gilman and Ferrante in which the female protagonist reinvents herself as a \u201Cnewly born woman,\u201D which I outline in three stages. First, the subject somatizes patriarchy, percieving it with spatial metaphors and thus representing it in a nonverbal, non-rational way. Second, she encodes a hallucination of oppressed femininity within the patriarchal space, exploring her oppression and potential liberation through a progressively more real \u201Calter ego.\u201D This culminates in the protagonist blending her physical self with her hallucinated alter ego, claiming a new agency just as she appears to be claimed by hysteria. My analysis shows how hysteria has been repurposed by these feminist authors/thinkers as a foil for patriarchal, rational, and phallogocentric structures of thought.` }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "https://mackseyjournal.scholasticahq.com/article/21771-reclaiming-space-feminist-hysteria-in-cixous-and-clement-gilman-and-ferrante", children: "read full article" })
    },
    {
      title: "Finnegans Wake",
      route: "finnegans-wake",
      filter: "teaching",
      subtitle: "Reading Through the Wake",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.finnegansWakeCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "This course is an intensive reading of James Joyce\u2019s final novel Finnegans Wake. A cyclical novel incorporating over fourteen intertwined languages, Finnegans Wake is widely regarded as the most difficult novel ever written. Indeed, Jacques Derrida once wrote an entire lecture on two words in the over 600-page book \u2014 he war. Nonetheless, the text is not impenetrable; in fact, it can be musical, whimsical, and even humorous. Working as a group, we will spend the semester working through the entire text as a class. We will not understand everything, but we will try to find our own ways into one of the most confounding texts of all time. The course is predominantly discussion-based, but we will offer a brief lecture once a week offering context and summarizing relevant literary criticism. Students will have the choice to either lightly read around 50 pages or intensively read a shorter excerpt of the text every week. In group, we will unpack the text in addition to performing a number of exercises, such as accented reading and word-analysis (which is way more fun than it sounds)." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PDF, { src: docs.finnegansWake })
    }
  ],
  designer: [
    {
      title: "Time Ruler",
      route: "time-ruler",
      filter: "web",
      subtitle: "Task management and time-blocking for Obsidian",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.timeRulerCover }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "https://github.com/joshuatazrein/obsidian-time-ruler", children: "view on GitHub" }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: "Time Ruler combines the best parts of a nested tasklist and an event-based calendar view. Drag-and-drop tasks to time-block and reschedule, and view tasks on top of read-only online calendars. The Time Ruler plugin also integrates seamlessly with the Tasks and FullCalendar plugins for Obsidian." })
    },
    {
      title: "Grants at Oberlin",
      route: "grants-at-oberlin",
      filter: "multimedia",
      subtitle: "After Effects animation",
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "I crafted this animation for Oberlin Conservatory Office of Professional Development, which offers students grants to support creative projects. I wrote the script, recorded voiceover, designed the video, animated it in After Effects, chose music, and mixed the audio myself." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "iframe",
        {
          width: "100%",
          className: "aspect-video",
          src: "https://www.youtube.com/embed/reXPIl8gee8",
          title: "YouTube video player",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0
        }
      ),
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.grantsVideoCover })
    },
    {
      title: "TIMARA History",
      route: "timara-history",
      filter: "web",
      subtitle: "Interactive animated timeline",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.timaraCover }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "https://timara.oberlin.edu/history", children: "View website" }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: "TIMARA, or Technology in Music and Related Arts, has a rich history at Oberlin spanning over 100 years. I adapted an article originally published in the Oberlin Conservatory Alumni Magazine, rendering it as an interactive webpage in React complete with animations, responsive design, and a video grid featuring TIMARA's 50th anniversary festival. The archival work encompassed formatting over 6 hours of multicamera footage into 1-minute segments." })
    },
    {
      title: "RiverBank",
      route: "riverbank",
      filter: "web",
      subtitle: "Google Tasks & Calendar",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.riverbankCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "RiverBank is a full-stack web application providing a better user interface for Google Tasks and Calendars. A simple, three-panel view lets you view your unscheduled, current, and future tasks integrated with your Calendar events, and drag-and-drop to reschedule. The app is coded in React using libraries including React-Dnd, jQuery, Tailwind CSS, and Google Apis." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "https://riverbank.app/", children: "View app" })
    },
    {
      title: "Notice",
      route: "notice",
      filter: "web",
      subtitle: "Notion Overviews",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: images.noticeCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: `Overviews of your Notion databases as tasks, flashcards, or graphs. Notice is an extension for Notion that provides Overviews: specialized views that can incorporate multiple databases. Currently, Notice supports: \u2022 Tasks: a day-by-day view of your tasks with grouping, Google Calendar integration, and drag-and-drop rescheduling. \u2022 Flashcards: a front-and-back card stack with spaced repetition, random order, and filtering. \u2022 Graph: a network visualization that shows relations between pages. To add an Overview, simply add a database in a similar way to adding a view in Notion: enter what properties you want to use, and Notice automatically visualizes your data. Once you log in via the extension's popup, Notice is available as a button in the Notion sidebar. You can optionally style the Notion app to match the Notice style. More Overviews may be added. If you have ideas or requests, please contact us via the "Email the developer" button!` }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ViewButton, { href: "https://chrome.google.com/webstore/detail/notice-notion-overviews/pjlnaeiildmajccjkdabbchcejpbbhah", children: "View chrome extension" })
    },
    {
      title: "MMG Logo",
      route: "mmg-logo",
      filter: "multimedia",
      subtitle: "Animated logo",
      background: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videos.mmgLogoCover }),
      description: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "I animated the logo for Modern Music Guild, a club at Oberlin that brings experimental artists to campus for concerts and workshops. The MMG Logo is evocative of a sound wave. So I used canvas-sketch-util to generate noise which ripples the image, and used Canvas getImageData() and putImageData() to continually ripple the wave outwards." }),
      content: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "iframe",
        {
          src: "/works/mmg-logo/index.html",
          className: "aspect-square w-full bg-white"
        }
      )
    }
  ]
};

// app/routes/$role.$work.tsx
var import_react5 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime");
function Works() {
  let { role, work: route } = (0, import_react4.useParams)(), { search } = (0, import_react4.useLocation)(), thisWork = works[role].find((work) => work.route === route);
  return (0, import_tiny_invariant.default)(thisWork), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-y-auto bg-black/50 p-8 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_react4.Link,
      {
        to: `/${role}` + search,
        className: "absolute left-0 top-0 -z-10 h-full w-full opacity-50",
        children: (0, import_react5.cloneElement)(thisWork.background, {
          muted: !0,
          className: "object-cover w-full h-full absolute top-0 left-0 -z-10"
        })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "relative max-h-full max-w-4xl cursor-default overflow-y-auto rounded-lg border border-gray-400 bg-black/20 p-4 backdrop-blur-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "sticky top-4 z-10 mb-8 text-center text-2xl font-bold drop-shadow-text", children: thisWork.title }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-center", children: thisWork.subtitle }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "my-4", children: thisWork.content }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "my-4 space-y-4 text-base", children: thisWork.description })
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react6 = require("@remix-run/react");
var import_jsx_runtime9 = require("react/jsx-runtime"), meta = () => [{ title: "Home" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "img",
        {
          src: images.headshot,
          className: "mx-auto aspect-square w-[300px] self-center rounded-lg sm:float-right sm:m-4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-left", children: "His work tightropes the boundary between speech and sound, often taking the form of creative/critical hypertexts, performances, and installations. Inspired by posthumanist ideas, his work challenges anthropocentrism, using technology and multimedia to articulate technological, ghostly ways of being." }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-left", children: `Reinier attended Oberlin College and Conservatory, where he studied composition and comparative literature. He received Highest Honors for his undergraduate thesis, "Demons of Analogy: The Encounter Between Music and Language After Mallarm\xE9," which investigates how French Symbolist poet St\xE9phane Mallarm\xE9 theorizes a musical poetics, and how music speaks back at this poetics. He has designed and taught four courses in Oberlin's Experimental College which explore experimental literature and posthumanist philosophies. He currently lives and works in New York City.` }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex w-full space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ViewButton, { href: "assets/doc/joshua-reinier_resume.pdf", children: "R\xE9sum\xE9" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ViewButton, { href: "assets/doc/joshua-reinier_cv.pdf", children: "CV" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react6.Outlet, {})
  ] });
}

// app/routes/$role.tsx
var role_exports = {};
__export(role_exports, {
  default: () => Role2
});
var import_react7 = require("@remix-run/react"), import_react8 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Role2() {
  let role = (0, import_react7.useParams)().role, [search, setSearch] = (0, import_react7.useSearchParams)(), filter = search.get("filter"), setFilter = (newFilter) => {
    search.set("filter", newFilter), setSearch(search);
  }, frame = (0, import_react8.useRef)(null), sections = {
    artist: () => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
      "My creative work encompasses",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { to: () => setFilter("hypertext"), children: "hypertext" }),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { to: () => setFilter("performance"), children: "performance" }),
      ", deconstructing speech and writing by placing it in multimedia, coded ecosystems."
    ] }) }),
    researcher: () => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
      "My ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { to: () => setFilter("teaching"), children: "teaching" }),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { to: () => setFilter("writing"), children: "writing" }),
      " is informed by posthumanism and deconstruction, investigating technology and intermediality to find new approaches to the human."
    ] }) }),
    designer: () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      "As a ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { to: () => setFilter("web"), children: "web" }),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { to: () => setFilter("multimedia"), children: "multimedia" }),
      " designer, I create tools for thought and innovative platforms for communication."
    ] })
  }, thisWorks = works[role].filter(
    (work) => !filter || work.filter === filter
  );
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section, { children: sections[role]() }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: "scrollbar-none flex w-full flex-wrap justify-around space-x-2 space-y-2",
        ref: frame,
        children: thisWorks.map(({ title, subtitle, route, background }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          import_react7.NavLink,
          {
            "data-matter-label": route,
            to: route + (search && "?" + search),
            className: ({ isActive }) => "relative flex aspect-square w-[300px] max-w-full flex-none flex-col items-center justify-center overflow-hidden rounded-full transition-transform duration-500 hover:z-10 hover:scale-125",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "rounded-lg bg-black/50 px-1 text-center font-menu text-xl shadow-lg", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "rounded-lg bg-black/50 px-1 text-center font-menu text-sm text-gray-200 shadow-lg", children: subtitle }),
              (0, import_react8.cloneElement)(background, {
                autoPlay: !0,
                muted: !0,
                loop: !0,
                className: "object-cover w-full h-full absolute top-0 left-0 -z-10 rounded-full"
              })
            ]
          },
          route
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react7.Outlet, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6YBMEKDG.js", imports: ["/build/_shared/chunk-6ZVS2WHG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3UKMVSCW.js", imports: ["/build/_shared/chunk-UUMDPANW.js", "/build/_shared/chunk-GLCLLSTV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$role": { id: "routes/$role", parentId: "root", path: ":role", index: void 0, caseSensitive: void 0, module: "/build/routes/$role-V35WJ5KG.js", imports: ["/build/_shared/chunk-7JHAYJVV.js", "/build/_shared/chunk-R2T6WWYE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$role.$work": { id: "routes/$role.$work", parentId: "routes/$role", path: ":work", index: void 0, caseSensitive: void 0, module: "/build/routes/$role.$work-LTNK3JFR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UEYVSA5Y.js", imports: ["/build/_shared/chunk-R2T6WWYE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "d8fdf1ef", hmr: void 0, url: "/build/manifest-D8FDF1EF.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$role.$work": {
    id: "routes/$role.$work",
    parentId: "routes/$role",
    path: ":work",
    index: void 0,
    caseSensitive: void 0,
    module: role_work_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$role": {
    id: "routes/$role",
    parentId: "root",
    path: ":role",
    index: void 0,
    caseSensitive: void 0,
    module: role_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
