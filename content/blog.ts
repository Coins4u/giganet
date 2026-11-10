import type { FaqItem } from "./types";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Meta description (≈150–160 chars). */
  description: string;
  excerpt: string;
  category: string;
  date: string;
  updated: string;
  readMinutes: number;
  blocks: Block[];
  faq?: FaqItem[];
};

export const POSTS: Post[] = [
  {
    slug: "what-is-iptv",
    title: "What Is IPTV? A Simple Beginner's Guide (2026)",
    description:
      "What is IPTV and how does it work? A plain-English guide to IPTV subscriptions, live TV, VOD, EPG, M3U and Xtream Codes – and what you need to get started.",
    excerpt:
      "IPTV explained without the jargon: how it works, what you need, and how it compares to cable and satellite TV.",
    category: "Basics",
    date: "2026-01-12",
    updated: "2026-11-09",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "IPTV stands for Internet Protocol Television. In simple terms, it's TV delivered over your internet connection instead of through a cable box or satellite dish. If you've ever watched a show in an app, you already understand the basic idea – IPTV just brings live channels, a TV guide and a huge on-demand library together in one place.",
      },
      { type: "h2", text: "How does IPTV work?" },
      {
        type: "p",
        text: "An IPTV provider streams channels and videos from its servers to an app on your device. You log in with the details the provider gives you, and the app shows you a channel list, a programme guide and a movie and series library. When you pick something, it starts streaming over your home internet – just like any other online video.",
      },
      { type: "h2", text: "The three types of IPTV content" },
      {
        type: "ul",
        items: [
          "Live TV – regular channels broadcast in real time: news, sports, entertainment, kids and music.",
          "Video on demand (VOD) – movies and series you can start, pause and resume whenever you like.",
          "Catch-up / time-shift – on selected channels, go back and watch something that already aired.",
        ],
      },
      { type: "h2", text: "What do you need to watch IPTV?" },
      {
        type: "ol",
        items: [
          "An internet connection – 20 Mbps is comfortable for HD, 30 Mbps or more for 4K.",
          "A compatible device – a Smart TV, a streaming stick, an Android box, a phone, a tablet or a computer.",
          "An IPTV player app – any app that supports Xtream Codes or M3U playlists.",
          "An IPTV subscription – this gives you the login details and access to the channels.",
        ],
      },
      { type: "h2", text: "Key IPTV terms you'll come across" },
      {
        type: "ul",
        items: [
          "EPG (Electronic Programme Guide) – the TV guide that shows what's on now and next.",
          "M3U playlist – a link that contains your full channel list. Many apps accept it directly.",
          "Xtream Codes API – a login method using a username, password and server URL. It usually loads faster and includes the EPG and VOD automatically.",
          "Portal URL – the address used by MAG set-top boxes.",
        ],
      },
      { type: "h2", text: "IPTV vs cable and satellite" },
      {
        type: "p",
        text: "Traditional TV needs dedicated equipment, installation and often a long contract. IPTV only needs the internet you already pay for and a device you already own. You can usually watch on several screens around the house, take it with you on your phone, and choose short plans without being locked in.",
      },
      {
        type: "tip",
        text: "Stability matters more than raw speed. A 30 Mbps connection over an Ethernet cable will often stream more smoothly than a 100 Mbps connection over weak Wi-Fi.",
      },
      { type: "h2", text: "How to choose a good IPTV service" },
      {
        type: "p",
        text: "Look for reliable servers (no constant freezing), a clear channel list with a working TV guide, support that actually answers, flexible plans and a clear refund policy. A provider that helps you set up and explains things in plain language is worth a lot more than a long list of numbers.",
      },
      {
        type: "p",
        text: "GiGa FliX IPTV was built around exactly those points: anti-freeze servers, HD and 4K streams, a full EPG and a friendly support team available 24/7 on WhatsApp and email.",
      },
    ],
    faq: [
      {
        q: "Do I need a special box for IPTV?",
        a: "No. Most Smart TVs, phones, tablets and computers can run an IPTV app. A streaming stick or Android box is only needed for TVs without an app store.",
      },
      {
        q: "Can I watch IPTV on several devices?",
        a: "Yes, you can install it on all your devices. How many streams can run at once depends on your plan.",
      },
    ],
  },
  {
    slug: "how-to-set-up-iptv-on-a-streaming-stick",
    title: "How to Set Up IPTV on a Streaming Stick in 10 Minutes",
    description:
      "Step-by-step guide to installing IPTV on a Fire TV-style streaming stick: install Downloader, allow unknown apps, install a player and log in with Xtream Codes.",
    excerpt:
      "Turn any TV with an HDMI port into an IPTV screen. Follow these steps and you'll be watching in about ten minutes.",
    category: "Setup",
    date: "2026-02-03",
    updated: "2026-11-09",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Streaming sticks are one of the easiest and cheapest ways to watch IPTV on a big screen. Plug the stick into your TV's HDMI port, connect it to Wi-Fi and you're ready to install an IPTV player. Here's exactly how to do it.",
      },
      { type: "h2", text: "Step 1: Install the Downloader app" },
      {
        type: "p",
        text: "From the home screen, open Search, type “Downloader” and install the app. Downloader lets you install apps from a web address, which is how most IPTV players are added to streaming sticks.",
      },
      { type: "h2", text: "Step 2: Allow apps from unknown sources" },
      {
        type: "ol",
        items: [
          "Open Settings and go to My Fire TV (or Device & Software).",
          "Select Developer Options. If you don't see it, open About and click your device name seven times.",
          "Choose “Install unknown apps” and switch it ON for Downloader.",
        ],
      },
      { type: "h2", text: "Step 3: Install your IPTV player" },
      {
        type: "p",
        text: "Open Downloader and type the download address of the IPTV player you want to use. Press Go, wait for the download and select Install. Not sure which player to choose? Our support team will send you a recommended download link with your login details.",
      },
      { type: "h2", text: "Step 4: Log in with Xtream Codes" },
      {
        type: "p",
        text: "Open the player and choose “Login with Xtream Codes API”. Enter any name you like, then the username, password and server URL from your welcome email. The app will load channels, the TV guide and the movie library – this can take a minute the first time.",
      },
      {
        type: "tip",
        text: "Double-check the server URL: it must include http:// and the port number exactly as written in your email. Most login errors come from a missing character.",
      },
      { type: "h2", text: "Make your streaming stick run faster" },
      {
        type: "ul",
        items: [
          "Restart the stick once a week (hold Select + Play for a few seconds).",
          "Uninstall apps you don't use to free up storage.",
          "Use the 5 GHz Wi-Fi band or an Ethernet adapter for a more stable signal.",
          "Turn off data monitoring and app usage collection in the privacy settings.",
        ],
      },
      { type: "h2", text: "Still stuck?" },
      {
        type: "p",
        text: "Send us a message on WhatsApp with a photo of the screen where you're stuck. We'll walk you through it live – most setups are finished in a few minutes.",
      },
    ],
  },
  {
    slug: "iptv-buffering-fixes",
    title: "IPTV Buffering? 10 Fixes That Actually Work",
    description:
      "Is your IPTV buffering or freezing? Try these 10 proven fixes: router placement, Ethernet, 5 GHz Wi-Fi, app cache, stream quality, DNS, VPN and more.",
    excerpt:
      "Freezing streams are frustrating. These ten fixes solve the vast majority of IPTV buffering problems – most take less than a minute.",
    category: "Troubleshooting",
    date: "2026-03-18",
    updated: "2026-11-09",
    readMinutes: 7,
    blocks: [
      {
        type: "p",
        text: "Buffering happens when your device can't receive video data as fast as it plays it. The cause is usually somewhere between your router and your screen – which is good news, because that's the part you can fix. Work through this list from top to bottom.",
      },
      { type: "h2", text: "1. Restart everything" },
      {
        type: "p",
        text: "Turn off your router and your streaming device, wait 30 seconds and turn them back on. It sounds basic, but it clears memory leaks and network glitches that build up over days.",
      },
      { type: "h2", text: "2. Use a cable instead of Wi-Fi" },
      {
        type: "p",
        text: "An Ethernet cable gives a stable, interference-free connection. If your device has a network port – or you can add a cheap adapter – this is the single most effective fix.",
      },
      { type: "h2", text: "3. Switch to 5 GHz Wi-Fi" },
      {
        type: "p",
        text: "If you must use Wi-Fi, connect to your router's 5 GHz network. It's faster and less crowded than 2.4 GHz, especially in apartment buildings.",
      },
      { type: "h2", text: "4. Move the router (or the device)" },
      {
        type: "p",
        text: "Walls, mirrors, fish tanks and microwaves all weaken Wi-Fi. Put the router in an open, central spot, and keep it away from the floor.",
      },
      { type: "h2", text: "5. Check your real speed" },
      {
        type: "p",
        text: "Run a speed test on the device you watch on, not your phone. You want at least 20 Mbps for HD and 30 Mbps or more for 4K – and a stable result, not one that jumps up and down.",
      },
      { type: "h2", text: "6. Lower the stream quality" },
      {
        type: "p",
        text: "If your connection is borderline, switch from the 4K version of a channel to the FHD or HD version. You'll barely notice the difference on most TVs, but the stream will be much smoother.",
      },
      { type: "h2", text: "7. Clear the app cache" },
      {
        type: "p",
        text: "Go to your device settings › Apps › your IPTV player › Clear cache. On some players you can also change the buffer size in the app's settings – a slightly larger buffer helps on unstable connections.",
      },
      { type: "h2", text: "8. Close background apps" },
      {
        type: "p",
        text: "Cheap streaming sticks have limited memory. Close other apps and avoid downloads on the same network while you're watching live events.",
      },
      { type: "h2", text: "9. Try a different DNS or a VPN" },
      {
        type: "p",
        text: "Some internet providers slow down video traffic at busy times. Changing your device's DNS or using a reputable VPN can help if buffering only happens in the evening.",
      },
      { type: "h2", text: "10. Contact your provider" },
      {
        type: "p",
        text: "If nothing helps, the problem may be on the server side. A good provider will check your line and move you to a less busy server. At GiGa FliX, just send us the channel name and the time it happened.",
      },
      {
        type: "tip",
        text: "Premium plans run on our dedicated anti-buffer servers with priority during big live events – a good upgrade if you mainly watch sports.",
      },
    ],
    faq: [
      {
        q: "Why does IPTV buffer only in the evening?",
        a: "Evening is peak time for home internet. Your provider's network is busier, and some providers throttle video traffic. A cable connection, 5 GHz Wi-Fi or a VPN usually helps.",
      },
      {
        q: "Is buffering caused by my device?",
        a: "It can be. Older or low-memory streaming sticks struggle with 4K streams. Restart regularly and choose HD on weaker devices.",
      },
    ],
  },
  {
    slug: "m3u-vs-xtream-codes",
    title: "M3U Playlist vs Xtream Codes: What's the Difference?",
    description:
      "M3U or Xtream Codes – which IPTV login should you use? Learn the difference, the pros and cons of each and which works best on your device.",
    excerpt:
      "Your IPTV welcome email contains two ways to log in. Here's what each one does and when to use it.",
    category: "Basics",
    date: "2026-04-22",
    updated: "2026-11-09",
    readMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "When you subscribe to an IPTV service you usually receive two sets of access details: Xtream Codes login (username, password, server URL) and an M3U playlist link. Both give you the same channels – they're just different ways of delivering them to your app.",
      },
      { type: "h2", text: "What is an M3U playlist?" },
      {
        type: "p",
        text: "An M3U file is a simple text list of channels and their stream addresses. Your app downloads the list and shows it as a channel menu. It's supported by almost every player, including media players that aren't built specifically for IPTV.",
      },
      { type: "h2", text: "What is Xtream Codes?" },
      {
        type: "p",
        text: "Xtream Codes is a login method. Instead of downloading one big file, the app talks to the server and requests live channels, the TV guide, movies and series separately. This makes it faster, keeps everything organised in categories and loads the EPG automatically.",
      },
      { type: "h2", text: "Which one should you use?" },
      {
        type: "ul",
        items: [
          "Use Xtream Codes whenever your app supports it – it's faster, includes VOD and EPG, and updates automatically.",
          "Use M3U if your app only accepts a playlist link (some Smart TV apps and Kodi's PVR client).",
          "Use the portal URL if you have a MAG set-top box.",
        ],
      },
      {
        type: "tip",
        text: "Keep your login details private. Sharing them can cause your account to be locked when too many devices connect at once.",
      },
      { type: "h2", text: "Can I switch later?" },
      {
        type: "p",
        text: "Yes. Both methods work with the same subscription, so you can use Xtream Codes on your TV and M3U in another app – as long as you stay within your plan's simultaneous stream limit.",
      },
    ],
  },
  {
    slug: "internet-speed-for-iptv",
    title: "What Internet Speed Do You Need for IPTV and 4K?",
    description:
      "How many Mbps do you need for IPTV? Recommended internet speeds for SD, HD, Full HD and 4K streaming, plus tips for multiple screens and Wi-Fi.",
    excerpt:
      "SD, HD or 4K? Here are the speeds you actually need – and why stability matters more than the number on your bill.",
    category: "Tips",
    date: "2026-05-30",
    updated: "2026-11-09",
    readMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "One of the most common questions before subscribing to IPTV is whether your internet is fast enough. The short answer: if you can stream video online without problems, you can watch IPTV. Here are the numbers in more detail.",
      },
      { type: "h2", text: "Recommended speeds per stream" },
      {
        type: "ul",
        items: [
          "SD (standard definition): 8–10 Mbps",
          "HD (720p): 15–20 Mbps",
          "Full HD (1080p): 20–25 Mbps",
          "4K / UHD: 30 Mbps or more",
        ],
      },
      { type: "h2", text: "Watching on several screens?" },
      {
        type: "p",
        text: "Add the numbers together. Two HD streams and one 4K stream at the same time need roughly 70 Mbps, plus some headroom for phones and laptops on the same network.",
      },
      { type: "h2", text: "Why stability beats speed" },
      {
        type: "p",
        text: "Live TV can't download far ahead like a movie app does, so short drops in your connection are noticeable. A steady 30 Mbps over a cable usually beats an unstable 200 Mbps over Wi-Fi. Run a speed test several times and look at the consistency, not just the peak.",
      },
      {
        type: "tip",
        text: "Testing on Wi-Fi? Stand where your TV is, not next to the router. That's the speed your device actually gets.",
      },
      { type: "h2", text: "Mobile data and IPTV" },
      {
        type: "p",
        text: "You can watch on 4G and 5G, but keep an eye on your data: an hour of HD uses around 1.5–3 GB, and 4K can use 7 GB or more. Choose a lower quality in the app when you're on the go.",
      },
    ],
  },
  {
    slug: "how-to-choose-an-iptv-provider",
    title: "How to Choose an IPTV Provider: 8-Point Checklist",
    description:
      "Comparing IPTV providers? Use this 8-point checklist – stability, support, channel list, EPG, devices, plans, payment and refunds – to choose the right IPTV subscription.",
    excerpt:
      "Not all IPTV services are equal. Use these eight checks to find a provider that's stable, honest and easy to deal with.",
    category: "Buying guide",
    date: "2026-07-14",
    updated: "2026-11-09",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "There are many IPTV services out there and they all promise the same things. The difference shows up after you've paid: when a stream freezes, when you need help or when you want to change your plan. This checklist helps you judge a provider before you buy.",
      },
      { type: "h2", text: "1. Stable servers" },
      {
        type: "p",
        text: "Ask about anti-freeze or load-balanced servers. A provider that invests in infrastructure will happily explain how it keeps streams stable during busy live events.",
      },
      { type: "h2", text: "2. Real, reachable support" },
      {
        type: "p",
        text: "Send a question before you order. How fast do they answer? Is it a real person? Support on WhatsApp or live chat is a very good sign.",
      },
      { type: "h2", text: "3. A clean channel list with EPG" },
      {
        type: "p",
        text: "Huge numbers mean little if the list is a mess. Look for clear categories, working channels in your language and a full TV guide.",
      },
      { type: "h2", text: "4. Device compatibility" },
      {
        type: "p",
        text: "Make sure you get both Xtream Codes and M3U access, plus MAG portal support if you need it. That way you can use the app you prefer on every device.",
      },
      { type: "h2", text: "5. Flexible plans" },
      {
        type: "p",
        text: "Short plans let you test the service; longer plans should give a clear discount. Avoid automatic renewals you can't control.",
      },
      { type: "h2", text: "6. Transparent pricing" },
      {
        type: "p",
        text: "The price you see should be the price you pay, with no surprise fees. Check what's included: VOD library, 4K channels, adult content options and the number of screens.",
      },
      { type: "h2", text: "7. A clear refund policy" },
      {
        type: "p",
        text: "A provider that's confident in its service will publish a refund policy. Read it before ordering.",
      },
      { type: "h2", text: "8. Setup help" },
      {
        type: "p",
        text: "Good providers publish step-by-step guides for every device and offer to help you live. Setup should take minutes, not an evening.",
      },
      {
        type: "tip",
        text: "GiGa FliX ticks all eight boxes: anti-freeze servers, 24/7 WhatsApp support, a full EPG, Xtream + M3U + MAG support, plans from 1 to 12 months, a 7-day refund policy and a complete setup guide.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
