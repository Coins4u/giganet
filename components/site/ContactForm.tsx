"use client";

import { useState } from "react";
import { LuSend } from "react-icons/lu";
import type { Dict } from "@/content/types";
import { lp, type Locale } from "@/lib/site";

export default function ContactForm({ locale, t }: { locale: Locale; t: Dict["contact"]["form"] }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, locale, pagePath: lp(locale, "/contact") }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus({ ok: false, text: data.error || t.error });
        return;
      }
      setStatus({ ok: true, text: t.success });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ ok: false, text: t.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="field">
        <span>{t.name}</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder={t.namePh}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label className="field">
        <span>{t.email}</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder={t.emailPh}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <label className="field">
        <span>{t.message}</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder={t.messagePh}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </label>
      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        <LuSend aria-hidden="true" /> {isSubmitting ? t.sending : t.send}
      </button>
      {status && (
        <p className={`form-status ${status.ok ? "is-ok" : "is-error"}`} role="status">
          {status.text}
        </p>
      )}
    </form>
  );
}
