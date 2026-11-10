import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  LuTv,
  LuTrophy,
  LuClapperboard,
  LuFilm,
  LuBaby,
  LuNewspaper,
  LuSwords,
  LuDrama,
  LuLaugh,
  LuRocket,
  LuGhost,
  LuHeart,
  LuMountainSnow,
  LuPopcorn,
  LuPlay,
  LuUsb,
  LuBox,
  LuSmartphone,
  LuTablet,
  LuLaptop,
  LuMonitor,
  LuGamepad2,
  LuSignal,
  LuVolume2,
} from "react-icons/lu";
import type { Dict } from "@/content/types";

const CAT_ICONS: IconType[] = [LuTv, LuTrophy, LuClapperboard, LuFilm, LuBaby, LuNewspaper];
const CH_COLORS = ["#7c5cff", "#22d3ee", "#f472b6", "#facc15", "#34d399"];

/** Pure HTML/CSS "IPTV player" illustration – no third-party imagery. */
export function HeroMockup({ mock }: { mock: Dict["home"]["hero"]["mock"] }) {
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup-screen">
        <aside className="mockup-side">
          {mock.categories.map((c, i) => {
            const Icon = CAT_ICONS[i % CAT_ICONS.length];
            return (
              <span key={c} className={`mockup-cat${i === 1 ? " is-active" : ""}`}>
                <Icon /> {c}
              </span>
            );
          })}
        </aside>
        <div className="mockup-main">
          <div className="mockup-player">
            <span className="mockup-live">
              <i /> {mock.live}
            </span>
            <span className="mockup-q">4K</span>
            <div className="mockup-pitch">
              <span className="pitch-line" />
              <span className="pitch-circle" />
              <span className="pitch-ball" />
            </div>
            <div className="mockup-bar">
              <LuPlay />
              <div className="mockup-progress">
                <span />
              </div>
              <LuVolume2 />
              <LuSignal />
            </div>
          </div>
          <div className="mockup-now">
            <small>{mock.nowPlaying}</small>
            <strong>{mock.programme}</strong>
          </div>
          <ul className="mockup-epg">
            {mock.channels.map((ch, i) => (
              <li key={ch}>
                <span className="epg-num">{String(i + 101)}</span>
                <span className="epg-logo" style={{ background: CH_COLORS[i % CH_COLORS.length] }}>
                  {ch.slice(0, 1)}
                </span>
                <span className="epg-name">{ch}</span>
                <span className="epg-bar">
                  <span style={{ width: `${35 + ((i * 17) % 55)}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Tile = { icon: IconType; tall?: boolean; colors: [string, string, string] };

const GENRE_TILES: Tile[] = [
  { icon: LuSwords, colors: ["#0b1d4a", "#1d4ed8", "#38bdf8"] },
  { icon: LuDrama, colors: ["#2e1065", "#7c3aed", "#e879f9"] },
  { icon: LuGhost, colors: ["#0a0a0a", "#7f1d1d", "#f87171"] },
  { icon: LuLaugh, colors: ["#7c2d12", "#ea580c", "#fde047"] },
  { icon: LuRocket, colors: ["#020617", "#1e3a8a", "#22d3ee"] },
  { icon: LuHeart, colors: ["#500724", "#db2777", "#fda4af"] },
  { icon: LuMountainSnow, colors: ["#022c22", "#059669", "#6ee7b7"] },
  { icon: LuPopcorn, colors: ["#431407", "#f59e0b", "#fef08a"] },
];
/** Order of labels in dict: Action, Drama, Comedy, Sci-Fi, Horror, Romance, Documentary, Kids */
const LABEL_INDEX = [0, 1, 4, 2, 3, 5, 6, 7];

export function GenreWall({ labels }: { labels: string[] }) {
  return (
    <div className="genre-grid">
      {GENRE_TILES.map(({ icon: Icon, tall, colors }, i) => (
        <div
          key={i}
          className={`genre-tile${tall ? " is-tall" : ""}`}
          style={
            {
              "--g-from": colors[0],
              "--g-to": colors[1],
              "--g-glow": colors[2],
            } as CSSProperties
          }
        >
          <Icon className="genre-bg-icon" aria-hidden="true" />
          <span className="genre-chip">
            <Icon aria-hidden="true" />
          </span>
          <span className="genre-badge">4K</span>
          <span className="genre-title">
            <LuPlay aria-hidden="true" /> {labels[LABEL_INDEX[i]]}
          </span>
        </div>
      ))}
    </div>
  );
}

const DEVICE_ICONS: IconType[] = [LuTv, LuUsb, LuBox, LuSmartphone, LuTablet, LuLaptop, LuMonitor, LuGamepad2];

export function DeviceGrid({ labels }: { labels: string[] }) {
  return (
    <ul className="device-grid">
      {DEVICE_ICONS.map((Icon, i) => (
        <li key={i}>
          <Icon aria-hidden="true" />
          <span>{labels[i]}</span>
        </li>
      ))}
    </ul>
  );
}
