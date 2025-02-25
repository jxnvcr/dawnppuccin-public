// latte / frappe / macchiato / mocha
const palette = frappe;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Malolos",
    scale: "C",
  },
  clock: {
    date: "B e, A",
    time: "h:i p",
    iconColor: palette.maroon,
  },
  search: {
    engines: {
      default: ['https://duckduckgo.com/?t=h_&q=', 'DuckDuckGo'],

      g: ['https://google.com/search?q=', 'Google'],
      duck: ['https://duckduckgo.com/?t=h_&q=', 'DuckDuckGo'],
      bing: ['https://www.bing.com/search?q=', 'Bing'],
      eco: ['https://www.ecosia.org/search?method=index&q=', 'Ecosia'],
      yt: ['https://www.youtube.com/results?search_query=', 'YouTube'],
      wk: ['https://en.wikipedia.org/wiki/', 'Wikipedia'],
    } 
  },
  keybindings: {
    "s": 'search-bar'
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: false,
  tabOpenMode: "self",
  tabs: [
    {
      name: "me",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "socials",
          links: [
            {
              name: "facebook",
              alt: ["fb"],
              url: "https://facebook.com",
              icon: "brand-facebook",
              icon_color: palette.green
            },
            {
              name: "instagram",
              alt: ["ig"],
              url: "https://instagram.com",
              icon: "brand-instagram",
              icon_color: palette.peach
            },
            {
              name: "reddit",
              alt: ["rdt"],
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red
            },
            {
              name: "x",
              alt: ["twitter", "twt"],
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.blue
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              alt: ["google mail"],
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green
            },
            {
              name: "proton mail",
              alt: ["pmail"],
              url: "https://mail.proton.me",
              icon: "brand-campaignmonitor",
              icon_color: palette.peach
            },
            {
              name: "gdrive",
              alt: ["google drive"],
              url: "https://drive.google.com",
              icon: "brand-campaignmonitor",
              icon_color: palette.red
            },
            {
              name: "proton drive",
              alt: ["pdrive"],
              url: "https://drive.proton.me",
              icon: "folder",
              icon_color: palette.blue
            },
          ]
        },
        {
          name: "tools",
          links: [
            {
              name: "excalidraw",
              alt: ["draw"],
              url: "https://excalidraw.com",
              icon: "pencil-bolt",
              icon_color: palette.green
            },
            {
              name: "canva",
              alt: [],
              url: "https://canva.com",
              icon: "artboard",
              icon_color: palette.peach
            },
            {
              name: "figma",
              alt: [],
              url: "https://figma.com",
              icon: "brand-figma",
              icon_color: palette.red
            },
            {
              name: "notion",
              alt: [],
              url: "https://notion.so",
              icon: "brand-notion",
              icon_color: palette.blue
            }
          ]
        }
      ],
    },
    {
      name: "vibe",
      background_url: "src/img/banners/cbg-16.gif",
      categories: [
        {
          name: "music",
          links: [
            {
              name: "spotify",
              alt: [],
              url: "https://spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green
            },
            {
              name: "listen.moe",
              alt: [],
              url: "https://listen.moe",
              icon: "brackets",
              icon_color: palette.peach
            },
            {
              name: "yt music",
              alt: ["youtube music"],
              url: "https://music.youtube.com",
              icon: "disc",
              icon_color: palette.red
            },
            {
              name: "daftpunk cafe",
              alt: ["daftpunkcafe"],
              url: "https://daftpunk.cafe",
              icon: "headphones",
              icon_color: palette.blue
            },
            {
              name: "chillhop",
              alt: ["chillhop radio"],
              url: "https://chillhop.com/radio/#",
              icon: "coffee",
              icon_color: palette.mauve
            }
          ]
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              alt: ["yt"],
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red
            },
            {
              name: "hydrahd",
              alt: [],
              url: "https://hydrahd.me",
              icon: "heading",
              icon_color: palette.blue
            }
          ]
        }
      ]
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-06.gif",
      categories: [
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              alt: [],
              url: "https://leetcode.com",
              icon: "brand-leetcode",
              icon_color: palette.green
            },
            {
              name: "exercism",
              alt: [],
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.peach
            }
          ]
        },
        {
          name: "resources",
          links: [
            {
              name: "gpt",
              alt: ["chatgpt"],
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.green
            },
            {
              name: "claude",
              alt: ["claudeai", "claude ai"],
              url: "https://claude.ai",
              icon: "asterisk",
              icon_color: palette.peach
            },
            {
              name: "stackoverflow",
              alt: [],
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red
            },
            {
              name: "github",
              alt: [],
              url: "https://github.com/explore",
              icon: "brand-github",
              icon_color: palette.blue
            },
            {
              name: "w3schools",
              alt: [],
              url: "https://w3schools.com",
              icon: "chalkboard",
              icon_color: palette.mauve
            },
            {
              name: "odin project",
              alt: ["the odin project"],
              url: "https://theodinproject.com",
              icon: "trophy",
              icon_color: palette.rosewater
            }
          ]
        }
      ],
    }
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
