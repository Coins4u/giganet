import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

type Btn = { href: string; label: string; icon?: React.ReactNode; external?: boolean };

export default function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: Btn;
  secondary?: Btn;
}) {
  const render = (b: Btn, cls: string) =>
    b.external ? (
      <a href={b.href} className={cls} target="_blank" rel="noopener noreferrer">
        {b.icon} {b.label}
      </a>
    ) : b.href.startsWith("#") ? (
      <a href={b.href} className={cls}>
        {b.label} <LuArrowRight aria-hidden="true" />
      </a>
    ) : (
      <Link href={b.href} className={cls}>
        {b.label} <LuArrowRight aria-hidden="true" />
      </Link>
    );

  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            {render(primary, "btn btn-light btn-lg")}
            {secondary && render(secondary, "btn btn-outline-light btn-lg")}
          </div>
        </div>
      </div>
    </section>
  );
}
