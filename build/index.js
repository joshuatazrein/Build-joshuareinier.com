var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/services/clientComponents.tsx
function P5Container({
  parameters,
  setup,
  draw,
  attributes
}) {
  let renderer = (0, import_react6.useRef)(null), paramsRef = (0, import_react6.useRef)(parameters), parentRef = (0, import_react6.useRef)(null), sketch = (p) => {
    p.setup = () => {
      renderer.current = p.createCanvas(window.innerWidth, window.innerHeight), renderer.current.addClass("h-full w-full"), p.windowResized = () => {
        (0, import_tiny_invariant2.default)(parentRef.current), p.resizeCanvas(
          parentRef.current.clientWidth,
          parentRef.current.clientHeight
        );
      }, setup(p, paramsRef.current);
    }, p.draw = () => draw(p, paramsRef.current);
  };
  return (0, import_react6.useEffect)(() => {
    (0, import_tiny_invariant2.default)(parentRef.current);
    let p = new import_p5.default(sketch, parentRef.current);
    return () => p.remove();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ref: parentRef, ...attributes });
}
var import_react6, import_tiny_invariant2, import_p5, import_jsx_runtime7, init_clientComponents = __esm({
  "app/services/clientComponents.tsx"() {
    "use strict";
    import_react6 = require("react"), import_tiny_invariant2 = __toESM(require("tiny-invariant")), import_p5 = __toESM(require("p5")), import_jsx_runtime7 = require("react/jsx-runtime");
  }
});

// app/root/Background.tsx
var Background_exports = {};
__export(Background_exports, {
  default: () => Background
});
function Background() {
  let VwToFontSize = (targetWidthVw, text2) => {
    let fontSize = targetWidthVw / 100 * window.innerWidth / text2.length * 2;
    return import_lodash3.default.round(fontSize, 1);
  };
  return console.log("imported, running stuff"), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    P5Container,
    {
      parameters: {
        fragments: [],
        nextTrigger: import_lodash3.default.random(MAX_GAP)
      },
      setup: (p, params) => {
        p.background("black"), p.colorMode("hsl", 1), p.textFont("Cormorant Garamond");
        for (let i = 0; i < 7; i++) {
          let textSample = import_lodash3.default.sample(text);
          params.fragments.push({
            text: textSample,
            x: import_lodash3.default.random(p.width),
            y: import_lodash3.default.random(p.height),
            size: VwToFontSize(
              import_lodash3.default.random(MIN_SIZE_VW, MAX_SIZE_VW, !0),
              textSample
            ),
            color: import_lodash3.default.random(MIN_OPACITY, MAX_OPACITY, !0)
          });
        }
      },
      draw: (p, params) => {
        let makeNewTextFrame = () => {
          let fragment = import_lodash3.default.sample(params.fragments);
          (0, import_tiny_invariant3.default)(fragment);
          let textSample = import_lodash3.default.sample(text);
          fragment.text = textSample, fragment.x = import_lodash3.default.random(p.width), fragment.y = import_lodash3.default.random(p.height), fragment.size = VwToFontSize(
            import_lodash3.default.random(MIN_SIZE_VW, MAX_SIZE_VW, !0),
            textSample
          ), fragment.color = import_lodash3.default.random(MIN_OPACITY, MAX_OPACITY);
        };
        p.millis() > params.nextTrigger && (makeNewTextFrame(), params.nextTrigger += import_lodash3.default.random(MAX_GAP)), p.background("black");
        for (let fragment of params.fragments) {
          let color = p.color("white");
          color.setAlpha(fragment.color / 2), p.fill(color), p.textSize(fragment.size), p.text(fragment.text, fragment.x, fragment.y);
        }
        for (let i = 0; i < import_lodash3.default.random(200); i++) {
          let color = p.color("white");
          color.setAlpha(import_lodash3.default.random(0, 0.4)), p.fill(color);
          let [x, y] = [import_lodash3.default.random(p.width), import_lodash3.default.random(p.height)];
          p.circle(x, y, 4);
        }
      }
    }
  );
}
var import_lodash3, import_tiny_invariant3, import_jsx_runtime8, text, MAX_GAP, MIN_SIZE_VW, MAX_SIZE_VW, MIN_OPACITY, MAX_OPACITY, init_Background = __esm({
  "app/root/Background.tsx"() {
    "use strict";
    import_lodash3 = __toESM(require("lodash")), import_tiny_invariant3 = __toESM(require("tiny-invariant"));
    init_clientComponents();
    import_jsx_runtime8 = require("react/jsx-runtime"), text = [
      "i think",
      "i have",
      "an idea",
      "something",
      "to write",
      "a question",
      "a poem",
      "what"
    ], MAX_GAP = 300, MIN_SIZE_VW = 5, MAX_SIZE_VW = 80, MIN_OPACITY = 0, MAX_OPACITY = 1;
  }
});

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
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
var import_react9 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Z46CBJJC.css";

// app/root.tsx
var import_remix_utils2 = require("remix-utils");

// app/root/route.tsx
var import_react7 = require("@remix-run/react"), import_react8 = require("react");

// app/root/Boxes.tsx
var import_react3 = require("react");

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

// app/assets/index.tsx
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
  headshot: joshua_tazman_default
}, videos = {
  rainingCover: rain_cover_default,
  whatIveDoneCover: what_ive_done_cover_default,
  amCover: am_cover_default,
  aMaxPatchIMadeIn2020Cover: a_max_patch_cover_default,
  mmgLogoCover: mmg_logo_export_default,
  grantsVideoCover: grants_video_default,
  particularitiesCover: particularities_cover_default
}, docs = {
  demonsOfAnalogy: "/assets/doc/demons-of-analogy.pdf",
  earCo: "/assets/doc/earco.pdf",
  cyborgCo: "/assets/doc/cyborgco.pdf",
  finnegansWake: "/assets/doc/finnegansWake.pdf"
};

// app/components/PDF.tsx
var import_react2 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime");
function PDF({
  src,
  className,
  dark
}) {
  let [expanded, setExpanded] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: "w-full relative mx-auto my-2 h-[calc(100vh-200px)]" + (className || ""),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "absolute top-0 right-0 border border-white rounded p-1 m-2 bg-black z-40", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: src, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: icons.fullScreen, height: 16, width: 16 }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "iframe",
          {
            src: src + "#view=FitBH",
            className: "mx-auto rounded relative w-full h-full",
            style: {
              filter: dark ? "invert(96%)" : "invert(22%) sepia(5%) hue-rotate(160deg) brightness(80%) contrast(120%)"
            }
          }
        )
      ]
    }
  );
}

// app/components/ViewButton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function ViewButton({
  href,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href, target: "_blank", className: "block w-full", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "w-full flex justify-center border border-accent-light rounded-lg hover:bg-accent-light hover:border-accent-dark font-bold transition-colors duration-300 my-2", children }) });
}

// app/projects/projects.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), allTags = {
  artist: ["performance", "installation", "hypertext"],
  researcher: ["teaching", "writing"],
  designer: ["full-stack", "media"]
}, createProject = (role, project) => ({ ...project, role }), projects = {
  particularities: createProject("artist", {
    title: "Particularities",
    subtitle: "multimedia installation",
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "video",
      {
        src: "/large_assets/vid/particularities.mp4",
        controls: !0,
        width: "100%"
      }
    ),
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "Particularities" }),
      " is an experiment in communal interior monologue, assisted by technology. The work was produced using a sound-processing patch in Max/MSP, which communicates with a webpage that processes speech recognition and visuals. Audio is spoken into a microphone from a stage covered in reflective curtains, which the computer transcribes and records. Fragments of text flash on the screen, which also manipulates the computer\u2019s webcam to display a pixelated silhouette of the speaker, processed through Javascript. In parallel, the computer continually selects random-access recordings, mangled through pitch and time manipulations until they sound like glitches, ghosts\u2014or inner demons. A series of prompts cycle through the screen, alternately asking the participants to speak and questioning the nature of what they are actually doing."
    ] }),
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.particularitiesCover }),
    tags: ["installation"],
    date: "2022-12"
  }),
  "what-ive-done": createProject("artist", {
    title: "What I've Done",
    subtitle: "freejazz meta-monologue",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.whatIveDoneCover }),
    tags: ["performance"],
    date: "2021-11",
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "What I've Done" }),
        " is equal parts a satirical surrealist free-jazz meta-monologue, an existential crisis, and a bit of good fun. The musicians play from doodles scrawled around the written text, encouraging them to negotiate a semantic, cartoony chaos to turn the doodles into sound. The piece folds in on itself in multiple levels: the speaker's internal, bottled-up overflowing pressure-cooker of meaning, then the competition between the speaker as bandleader and the band, and finally the tension between speaker and audience. Meanwhile, there's a fourth tension of me, who is writing this program note, and me, who was filmed in the video and wrote the piece as well as performing it. Oh, what have I done."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Sam Blieden produced & directed the video, with support from Henry Nelson & Will Curry. The band is the Self-Prescribing Doctors Union, comprised of Henry Nelson (guitar), Will Curry (saxophone), Owen Frankel (bass), and Jeremy McCabe (drums). Truly, this piece is what all of them have done to bring this idea to fruition." })
    ] })
  }),
  raining: createProject("artist", {
    title: "raining",
    subtitle: "kinetic digital poem",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.rainingCover }),
    tags: ["hypertext"],
    date: "2022-04",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "raining" }),
      " is a kinetic digital poem in which fragments of words flitter across the screen in response to user scrolling. It explores the capacity for text to speak for itself, using a shifting sound background to paint a landscape of unsettled community."
    ] }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ViewButton, { href: "/works/raining/index.html", children: "view work" })
  }),
  am: createProject("artist", {
    title: "AM",
    subtitle: "juxtaposed sonic and written fragments",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.amCover }),
    tags: ["hypertext"],
    date: "2021-12",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "AM" }),
      " juxtaposes text fragments with radio interference, creating a chaotic nexus of interruption and challenging the reader to navigate the boundary between sound and sense."
    ] }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ViewButton, { href: "/works/am/index.html", children: "view work" })
  }),
  "self-prescribing-doctors-union": createProject("artist", {
    title: "The Self-Prescribing Doctors Union",
    subtitle: "free-folk-noise quintet",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.selfPrescribingDoctorsUnionCover }),
    tags: ["performance"],
    date: "2021-12",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "I play keyboard and voice in this free-jazz-folk-noise band, formed at Oberlin and consisting of Henry Nelson (guitar), Owen Frankel (bass), Jeremy McCabe (drums), myself, and Will Curry (saxophone). We play original music and eviscerated covers." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "iframe",
      {
        className: "mx-auto",
        style: { border: 0, width: "350px", height: "470px" },
        src: "https://bandcamp.com/EmbeddedPlayer/album=1386217721/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        seamless: !0,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://probablevoltages.bandcamp.com/album/the-self-prescribing-doctors-union", children: "The Self-Prescribing Doctor's Union by The Self-Prescribing Doctor's Union" })
      }
    )
  }),
  "a-max-patch-i-made-in-2020": createProject("artist", {
    title: "a max patch i made in 2020",
    subtitle: "performance for solo zoomer",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.aMaxPatchIMadeIn2020Cover }),
    tags: ["performance"],
    date: "2020-03",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "I produced this piece for a remote music technology class during the COVID lockdown. In it, I introduce the piece for the duration of the piece, processing the Zoom Audio to progressively glitch and distort the voice until it is intelligible. The piece slowly transforms the speaking voice into a computer-generated sawtooth wave, and then a spasming MIDI electric bass, becoming a cyborg speaker\u2014or maybe it was just Zoom glitching out all along\u2014or maybe that's just my voice." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "video",
      {
        src: "/large_assets/vid/a-max-patch-i-made-in-2020.mp4",
        controls: !0,
        width: "100%"
      }
    )
  }),
  notice: createProject("designer", {
    title: "Notice",
    subtitle: "Notion Overviews",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.noticeCover }),
    tags: ["full-stack"],
    date: "2023-03",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: `Overviews of your Notion databases as tasks, flashcards, or graphs. Notice is an extension for Notion that provides Overviews: specialized views that can incorporate multiple databases. Currently, Notice supports: \u2022 Tasks: a day-by-day view of your tasks with grouping, Google Calendar integration, and drag-and-drop rescheduling. \u2022 Flashcards: a front-and-back card stack with spaced repetition, random order, and filtering. \u2022 Graph: a network visualization that shows relations between pages. To add an Overview, simply add a database in a similar way to adding a view in Notion: enter what properties you want to use, and Notice automatically visualizes your data. Once you log in via the extension's popup, Notice is available as a button in the Notion sidebar. You can optionally style the Notion app to match the Notice style. More Overviews may be added. If you have ideas or requests, please contact us via the "Email the developer" button!` }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ViewButton, { href: "https://chrome.google.com/webstore/detail/notice-notion-overviews/pjlnaeiildmajccjkdabbchcejpbbhah", children: "View chrome extension" }) })
  }),
  riverbank: createProject("designer", {
    title: "RiverBank",
    subtitle: "A task client for Google Tasks & Calendar",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.riverbankCover }),
    tags: ["full-stack"],
    date: "2022-04",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "RiverBank is a full-stack web application providing a better user interface for Google Tasks and Calendars. A simple, three-panel view lets you view your unscheduled, current, and future tasks integrated with your Calendar events, and drag-and-drop to reschedule. The app is coded in React using libraries including React-Dnd, jQuery, Tailwind CSS, and Google Apis." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ViewButton, { href: "https://riverbank.app/", children: "View app" })
  }),
  "oberlin-grants-video": createProject("designer", {
    title: "Oberlin Professional Development",
    subtitle: "After Effects animation",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.grantsVideoCover }),
    tags: ["media"],
    date: "2022-06",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "I crafted this animation for Oberlin Conservatory Office of Professional Development, which offers students grants to support creative projects. I wrote the script, recorded voiceover, designed the video, animated it in After Effects, chose music, and mixed the audio myself." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "iframe",
      {
        width: "100%",
        className: "aspect-video",
        src: "https://www.youtube.com/embed/reXPIl8gee8",
        title: "YouTube video player",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: !0
      }
    )
  }),
  "mmg-logo": createProject("designer", {
    title: "Modern Music Guild",
    subtitle: "Animated logo",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("video", { src: videos.mmgLogoCover }),
    tags: ["media"],
    date: "2022-12",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "I animated the logo for Modern Music Guild, a club at Oberlin that brings experimental artists to campus for concerts and workshops. The MMG Logo is evocative of a sound wave. So I used canvas-sketch-util to generate noise which ripples the image, and used Canvas getImageData() and putImageData() to continually ripple the wave outwards." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "iframe",
      {
        src: "/works/mmg-logo/index.html",
        className: "aspect-square w-full bg-white"
      }
    )
  }),
  "demons-of-analogy": createProject("researcher", {
    title: "Demons of Analogy",
    subtitle: "The Encounter Between Music and Language After Mallarm\xE9",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.demonsOfAnalogyCover }),
    tags: ["writing"],
    date: "2022-01",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "Demons of Analogy" }),
      ' is my undergraduate Honors thesis, and was awarded Highest Honors from the Oberlin College Comparative Literature department. The thesis explores the overlaps and contradictions between poetry and sound using the lens of static and interference. I draw from the work of Michel Serres, especially his book "Parasite," to connect French Symbolist St\xE9phane Mallarm\xE9 to the music of Pierre Boulez, eventually arriving at contemporary avant-garde artists such as Georges Aperghis and O(rphan)d(rift>). I consider how a musical poetics can speak to poetic music, and how the two can merge.'
    ] }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ViewButton, { href: docs.demonsOfAnalogy, children: "read full paper" })
  }),
  "reclaiming-space": createProject("researcher", {
    title: "Reclaiming Space",
    subtitle: "Feminist Hysteria in Cixous and Cl\xE9ment, Gilman, and Ferrante",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.reclaimingSpaceCover }),
    tags: ["writing"],
    date: "2020-03",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: `In this paper, I explore the concept of \u201Chysteria\u201D as it is reclaimed by the feminist thinkers/authors H\xE9l\xE8ne Cixous and Catherine Cl\xE9ment, Charlotte Perkins Gilman, and Elena Ferrante. I begin with a brief overview of the historical connotations of hysteria, showing how the metaphor of hysteria mythologized a patriarchal notion of femininity before being re-mythologized for feminism. I then investigate how Gilman and Ferrante have situated themselves within this myth, using The Newly Born Woman by Cixous and Cl\xE9ment to contextualize Gilman\u2019s "The Yellow Wall-Paper\u201D and Ferrante's first two novels, Troubling Love and The Days of Abandonment. I identify a similar process used by both Gilman and Ferrante in which the female protagonist reinvents herself as a \u201Cnewly born woman,\u201D which I outline in three stages. First, the subject somatizes patriarchy, percieving it with spatial metaphors and thus representing it in a nonverbal, non-rational way. Second, she encodes a hallucination of oppressed femininity within the patriarchal space, exploring her oppression and potential liberation through a progressively more real \u201Calter ego.\u201D This culminates in the protagonist blending her physical self with her hallucinated alter ego, claiming a new agency just as she appears to be claimed by hysteria. My analysis shows how hysteria has been repurposed by these feminist authors/thinkers as a foil for patriarchal, rational, and phallogocentric structures of thought.` }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ViewButton, { href: "https://mackseyjournal.scholasticahq.com/article/21771-reclaiming-space-feminist-hysteria-in-cixous-and-clement-gilman-and-ferrante", children: "read full article" })
  }),
  "cyborg-co": createProject("researcher", {
    title: "CyborgCo",
    subtitle: "Posthumanism, Selves, and the Anthropocene",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.cyborgCoCover }),
    tags: ["teaching"],
    date: "2022-09",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "A human. A post. A duck-sized horse. Is this WestWorld? Maybe. In CyborgCo: Posthumanism, Selves, and the Anthropocene, we will explore what it means to be human\u2014and potentially whether \u201Chuman\u201D still has any meaning at all. This seminar course will explore posthumanism\u2014a word to describe this particular existential territory\u2014through philosophy, theory, technology, art, and popular culture, including Donna Haraway\u2019s feminist interpretation of the cyborg, popular movies and TV shows such as Akira & Black Mirror, and even poetry written by artificial intelligence. We will discuss questions such as technology\u2019s impact on the self, human hubris & anthropocentrism, and whether we ourselves are still human\u2014or whether it might be better to forget the word human altogether. Our goal is to enrich our knowledge of the current day and even the future, but student need no prior knowledge to enjoy the course\u2014only a willingness to question everything. This class is in-person and largely discussion based with readings and artistic/written projects." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PDF, { src: docs.cyborgCo })
  }),
  "ear-co": createProject("researcher", {
    title: "EarCo",
    subtitle: "Eavesdropping, Surveillance and the Poetics of Information",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.earCoCover }),
    tags: ["teaching"],
    date: "2023-01",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "The ownership of one's self and body in the present age is under siege, since our presence, identity, and experiences are narrated by data monitors and intelligent systems. EarCo is a seminar-style class that explores the ways technology permeates our lives and how we conceive of ourselves, and opens up questions to redefine our relationship to technology. We will alternate between creative and scholarly investigations into topics such as AI, surveillance, data flows, and algorithms, investigating how these issues influence our identities and agency." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PDF, { src: docs.earCo })
  }),
  "finnegans-wake": createProject("researcher", {
    title: "Finnegans Wake",
    subtitle: "Reading Through the Wake",
    background: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: images.finnegansWakeCover }),
    tags: ["teaching"],
    date: "2020-03",
    description: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This course is an intensive reading of James Joyce\u2019s final novel Finnegans Wake. A cyclical novel incorporating over fourteen intertwined languages, Finnegans Wake is widely regarded as the most difficult novel ever written. Indeed, Jacques Derrida once wrote an entire lecture on two words in the over 600-page book \u2014 he war. Nonetheless, the text is not impenetrable; in fact, it can be musical, whimsical, and even humorous. Working as a group, we will spend the semester working through the entire text as a class. We will not understand everything, but we will try to find our own ways into one of the most confounding texts of all time. The course is predominantly discussion-based, but we will offer a brief lecture once a week offering context and summarizing relevant literary criticism. Students will have the choice to either lightly read around 50 pages or intensively read a shorter excerpt of the text every week. In group, we will unpack the text in addition to performing a number of exercises, such as accented reading and word-analysis (which is way more fun than it sounds)." }),
    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PDF, { src: docs.finnegansWake })
  })
};

// app/root/Boxes.tsx
var import_lodash2 = __toESM(require("lodash")), import_matter_js = __toESM(require("matter-js")), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/services/util.ts
var q = (selector) => document.querySelector(selector), checkIsMobile = () => window != null && window.document ? /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
  navigator.userAgent
) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
  navigator.userAgent.substring(0, 4)
) : !1;

// app/types/typeGuards.ts
var import_lodash = __toESM(require("lodash")), isTagOfType = (tag, role) => (role ? allTags[role] : import_lodash.default.values(allTags).flat()).includes(tag), getTagRole = (tag) => import_lodash.default.keys(allTags).find(
  (role) => allTags[role].includes(tag)
), isRole = (role) => import_lodash.default.keys(allTags).includes(role), isProjectId = (projectId) => import_lodash.default.keys(projects).includes(projectId);

// app/root/Boxes.tsx
var import_matter_attractors = __toESM(require("matter-attractors")), import_react4 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
import_matter_js.default.use(import_matter_attractors.default);
function Boxes({
  role,
  tag
}) {
  let shownProjects = (0, import_react3.useMemo)(
    () => import_lodash2.default.map(
      import_lodash2.default.entries(projects).filter(
        ([_id, project]) => (!role || project.role === role) && (!tag || project.tags.includes(tag))
      ),
      0
    ),
    [role, tag]
  ), shownTags = (0, import_react3.useMemo)(
    () => tag ? [tag] : role ? allTags[role] : import_lodash2.default.union(...import_lodash2.default.values(allTags)),
    [role, tag]
  ), shownRoles = (0, import_react3.useMemo)(() => role ? [role] : import_lodash2.default.keys(allTags), [role]), engine = (0, import_react3.useRef)(), nextAnimationCall = (0, import_react3.useRef)(), frame = (0, import_react3.useRef)(null), bodies = (0, import_react3.useRef)([]), constraints = (0, import_react3.useRef)([]), pins = (0, import_react3.useRef)([]), MAX_DISTANCE = 300, autoCreateConstraints = (id) => {
    if (isRole(id)) {
      pins.current.find((pin) => isRole(pin.id)) || createPin(
        id,
        { x: window.innerWidth / 2, y: window.innerHeight / 3 },
        { length: 0, stiffness: 0.01 }
      ), createPin(
        id,
        { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        { length: 50, stiffness: 0.3 }
      );
      for (let role2 of import_lodash2.default.keys(allTags).filter(
        (role3) => shownRoles.includes(role3) && role3 !== id
      ))
        createConstraint(id, role2, {
          length: Math.min(window.innerHeight / 3, window.innerWidth / 3),
          stiffness: 1
        });
      return;
    }
    for (let key of import_lodash2.default.keys(allTags))
      if (isTagOfType(id, key)) {
        createConstraint(id, key);
        return;
      }
    isProjectId(id) && projects[id].tags.forEach(
      (tag2) => createConstraint(id, tag2, { length: 200, stiffness: 0.2 })
    );
  }, createPin = (id, { x, y }, options) => {
    var _a;
    let bodyA = (_a = bodies.current.find((body) => body.id === id)) == null ? void 0 : _a.body, pin = {
      id,
      constraint: import_matter_js.default.Constraint.create({
        length: 0,
        stiffness: 1,
        ...options,
        bodyA,
        pointB: { x, y }
      })
    };
    pins.current.push(pin), (0, import_tiny_invariant.default)(engine.current), import_matter_js.default.Composite.add(engine.current.world, pin.constraint);
  }, createConstraint = (idA, idB, options) => {
    var _a, _b;
    if (constraints.current.find(
      (constraint2) => constraint2.ids.includes(idA) && constraint2.ids.includes(idB)
    ))
      return;
    let bodyA = (_a = bodies.current.find((body) => body.id === idA)) == null ? void 0 : _a.body, bodyB = (_b = bodies.current.find((body) => body.id === idB)) == null ? void 0 : _b.body;
    (0, import_tiny_invariant.default)(bodyA && bodyB);
    let constraint = {
      ids: [idA, idB],
      constraint: import_matter_js.default.Constraint.create({
        length: 100,
        stiffness: 0.5,
        ...options,
        bodyA,
        bodyB
      })
    };
    return constraints.current.push(constraint), (0, import_tiny_invariant.default)(engine.current), import_matter_js.default.Composite.add(engine.current.world, constraint.constraint), constraint;
  }, createBody = (id, xDecimal, yDecimal, options) => {
    (0, import_tiny_invariant.default)(frame.current && engine.current);
    let el = q(`[data-matter-id=${id}]`), body = {
      body: import_matter_js.default.Bodies.rectangle(
        xDecimal * frame.current.clientWidth,
        yDecimal * frame.current.clientHeight,
        el.clientWidth,
        el.clientHeight,
        {
          frictionAir: 0.2,
          collisionFilter: {
            group: -1,
            mask: 0,
            category: 2
          },
          label: id,
          ...options,
          plugin: {
            ...options == null ? void 0 : options.plugin,
            attractors: [
              function(bodyA, bodyB) {
                if (isProjectId(bodyB.label) !== isProjectId(bodyA.label))
                  return;
                let xDiff = bodyA.position.x - bodyB.position.x, yDiff = bodyA.position.y - bodyB.position.y, distance = Math.max(
                  0,
                  MAX_DISTANCE - import_matter_js.default.Vector.magnitude({ x: xDiff, y: yDiff })
                ), direction = import_matter_js.default.Vector.normalise({
                  x: xDiff,
                  y: yDiff
                });
                return {
                  x: direction.x * distance * -1 * 1e-3,
                  y: direction.y * distance * -1 * 1e-3
                };
              }
            ]
          }
        }
      ),
      id,
      el,
      render() {
        let { x, y } = this.body.position;
        this.el.style.top = `${y - this.el.clientHeight / 2}px`, this.el.style.left = `${x - this.el.clientWidth / 2}px`;
        let diffX = this.body.position.x - window.innerWidth / 2, diffY = this.body.position.y - window.innerHeight / 2, distance = Math.max(
          0,
          400 - import_matter_js.default.Vector.magnitude({ x: diffX, y: diffY })
        );
        import_matter_js.default.Body.applyForce(this.body, this.body.position, {
          x: diffX * distance * 1e-6,
          y: diffY * distance * 1e-6
        });
      }
    };
    return bodies.current.push(body), import_matter_js.default.Composite.add(engine.current.world, body.body), body;
  }, createWorld = () => {
    console.log("RECREATING WORLD"), console.trace(), engine.current = import_matter_js.default.Engine.create({
      gravity: { x: 0, y: 0 }
    }), createBody("headline", 0.5, 0.1, {
      isStatic: !0
    }), updateBodyCount();
    let rerender = () => {
      (0, import_tiny_invariant.default)(engine.current);
      for (let body of bodies.current)
        body.render();
      import_matter_js.default.Engine.update(engine.current), nextAnimationCall.current = requestAnimationFrame(rerender);
    };
    rerender();
  }, oldWidth = (0, import_react3.useRef)(0), oldHeight = (0, import_react3.useRef)(0), onResize = () => {
    let newWidth = window.innerWidth, newHeight = window.innerHeight, xSizeRatio = newWidth / oldWidth.current, ySizeRatio = newHeight / oldHeight.current;
    for (let body of bodies.current)
      import_matter_js.default.Body.setPosition(body.body, {
        x: body.body.position.x * xSizeRatio,
        y: body.body.position.y * ySizeRatio
      });
    for (let pin of pins.current)
      pin.constraint.pointB = {
        x: pin.constraint.pointB.x * xSizeRatio,
        y: pin.constraint.pointB.y * ySizeRatio
      };
    oldWidth.current = newWidth, oldHeight.current = newHeight;
  };
  (0, import_react3.useEffect)(() => (createWorld(), oldWidth.current = window.innerWidth, oldHeight.current = window.innerHeight, window.addEventListener("resize", onResize), () => {
    nextAnimationCall.current && cancelAnimationFrame(nextAnimationCall.current), engine.current && import_matter_js.default.Engine.clear(engine.current), bodies.current = [], constraints.current = [], pins.current = [], window.removeEventListener("resize", onResize);
  }), []);
  let updateBodyCount = () => {
    let bodyIds = bodies.current.map((body) => body.id), shownIds = [...shownRoles, ...shownTags, ...shownProjects, "headline"], newBodies = import_lodash2.default.difference(shownIds, bodyIds), deletedBodyIds = import_lodash2.default.difference(bodyIds, shownIds);
    for (let newBodyId of newBodies)
      createBody(newBodyId, Math.random(), Math.random());
    for (let newBodyId of newBodies)
      autoCreateConstraints(newBodyId);
    let deletedBodies = import_lodash2.default.filter(
      bodies.current,
      (body) => deletedBodyIds.includes(body.id)
    );
    (0, import_tiny_invariant.default)(engine.current);
    for (let deletedBody of deletedBodies) {
      for (let constraint of constraints.current.filter(
        (constraint2) => constraint2.ids.includes(deletedBody.id)
      ))
        import_matter_js.default.Composite.remove(engine.current.world, constraint.constraint), import_lodash2.default.pull(constraints.current, constraint);
      for (let pin of pins.current.filter((pin2) => pin2.id === deletedBody.id))
        import_matter_js.default.Composite.remove(engine.current.world, pin.constraint), import_lodash2.default.pull(pins.current, pin);
      import_matter_js.default.Composite.remove(engine.current.world, deletedBody.body), import_lodash2.default.pull(bodies.current, deletedBody);
    }
  };
  (0, import_react3.useEffect)(() => {
    nextAnimationCall.current && updateBodyCount();
  }, [shownRoles, shownTags, shownProjects]);
  let location = (0, import_react4.useLocation)(), setParams = (keys) => {
    let params = new URLSearchParams(location.search);
    return import_lodash2.default.entries(keys).forEach(
      ([key, value]) => value ? params.set(key, value) : params.delete(key)
    ), `${location.pathname}?${params.toString()}`;
  }, NAV_BUTTON = "bg-accent-light hover:bg-accent-dark hover:border-accent-light border border-transparent transition-[background,transform] hover:scale-125 duration-300 w-fit px-2 rounded-full flex z-10 drop-shadow-xl";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: "child:absolute h-full w-full absolute top-0 left-0 child:whitespace-nowrap",
      ref: frame,
      children: [
        shownProjects.map((projectId) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "div",
          {
            "data-matter-id": projectId,
            className: "rounded-full h-[33vh] w-[33vh] overflow-hidden relative opacity-50 hover:opacity-100 hover:scale-125 transition-[opacity,transform] duration-500 cursor-pointer hover:z-10",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/" + projectId + location.search, children: (0, import_react3.cloneElement)(projects[projectId].background, {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              className: "object-cover w-full h-full"
            }) })
          },
          projectId
        )),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { "data-matter-id": "headline", className: `text-xl ${NAV_BUTTON}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/", children: "Joshua Tazman Reinier" }) }),
        shownRoles.map((role2) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            "data-matter-id": role2,
            className: `text-lg ${NAV_BUTTON}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: setParams({ role: role2, tag: null }), children: role2 })
          },
          role2
        )),
        shownTags.map((tag2) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { "data-matter-id": tag2, className: NAV_BUTTON, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: setParams({ tag: tag2, role: getTagRole(tag2) }), children: tag2 }) }, tag2))
      ]
    }
  );
}

// app/services/components.tsx
var import_react5 = require("react"), import_remix_utils = require("remix-utils"), import_jsx_runtime6 = require("react/jsx-runtime");
function ClientOnlyImport({
  importChildren
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Suspense, { children: importChildren() }) });
}

// app/root/route.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), LazyBackground = (0, import_react8.lazy)(() => Promise.resolve().then(() => (init_Background(), Background_exports)));
function Index() {
  let location = (0, import_react7.useLocation)(), search = new URLSearchParams(location.search), role = search.get("role"), tag = role && search.get("tag") || void 0, isMobile = checkIsMobile();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "fixed top-0 left-0 w-screen h-screen", children: [
    !isMobile && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "fixed top-0 left-0 h-screen w-screen -z-10", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ClientOnlyImport, { importChildren: () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LazyBackground, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Boxes, { role, tag })
  ] });
}

// app/root.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Index, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_remix_utils2.ExternalScripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.LiveReload, {})
    ] })
  ] });
}

// app/routes/$projectId/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => Project
});
var import_react10 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
function Project() {
  let { projectId } = (0, import_react_router_dom.useParams)(), location = (0, import_react10.useLocation)(), project = projects[projectId];
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "fixed top-0 left-0 h-full w-full p-8 z-10 flex items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom.Link, { to: "/" + location.search, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "h-full w-full absolute top-0 left-0 bg-black/50" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "backdrop-blur bg-black/50 rounded-lg border border-accent-light max-w-4xl max-h-full overflow-y-auto relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "backdrop-blur w-fit px-4 mx-auto rounded-lg sticky top-8 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "font-bold text-lg text-center ", children: project.title }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-base text-center", children: project.subtitle })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "p-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-4", children: project.content }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-4 font-serif", children: project.description })
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "86d89ed7", entry: { module: "/build/entry.client-V4QOYE5V.js", imports: ["/build/_shared/chunk-NQU33KBR.js", "/build/_shared/chunk-A333RND5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B7RZSJSC.js", imports: ["/build/_shared/chunk-4KXG5YPX.js", "/build/_shared/chunk-XFGLJB2M.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$projectId": { id: "routes/$projectId", parentId: "root", path: ":projectId", index: void 0, caseSensitive: void 0, module: "/build/routes/$projectId-NNUF2QY5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-86D89ED7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$projectId": {
    id: "routes/$projectId",
    parentId: "root",
    path: ":projectId",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
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
