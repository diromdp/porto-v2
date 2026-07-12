"use client";

import Image from "next/image";
import { useIntlayer, useLocale } from "next-intlayer";
import { MapPin, Mail, Linkedin, ArrowRight, ArrowUpRight } from "lucide-react";
import StatCounter from "@/app/components/StatCounter";
import Reveal from "@/app/components/Reveal";
import ClientMarquee from "@/app/components/ClientMarquee";
import {
    PROFILE,
    STATS,
    EXPERIENCE,
    PROJECTS,
    PRODUCTS,
    SKILL_GROUPS,
    FOCUS_AREAS,
    pickLocale,
} from "@/data/portfolio";

export default function HomePage() {
    const content = useIntlayer("home-content");
    const { locale } = useLocale();
    const tr = (field) => pickLocale(field, locale);

    return (
        <div className="portfolio">
            {/* ---------------- Hero ---------------- */}
            <section id="top" className="portfolio__hero">
                <div className="portfolio__hero-inner">
                    <Reveal>
                        <span className="portfolio__hero-badge">{content.hero.badge.value}</span>
                        <span className="portfolio__hero-greeting">{content.hero.greeting.value}</span>
                        <h1 className="portfolio__hero-name">{PROFILE.name}</h1>
                        <span className="portfolio__hero-role">{tr(PROFILE.role)}</span>
                        <p className="portfolio__hero-tagline">{content.hero.tagline.value}</p>
                        <div className="portfolio__hero-actions">
                            <a href="#projects" className="portfolio__btn portfolio__btn--primary">
                                {content.hero.ctaWork.value}
                                <ArrowRight size={18} aria-hidden />
                            </a>
                            <a href="https://www.linkedin.com/in/diromdp/" target="_blank" rel="noopener noreferrer" className="portfolio__btn portfolio__btn--ghost">
                                {content.hero.ctaContact.value}
                            </a>
                        </div>
                        <div className="portfolio__hero-meta">
                            <span className="portfolio__hero-meta-item">
                                <MapPin size={16} aria-hidden />
                                {PROFILE.location}
                            </span>
                            <a className="portfolio__hero-meta-item" href={`mailto:${PROFILE.email}`}>
                                <Mail size={16} aria-hidden />
                                {PROFILE.email}
                            </a>
                        </div>
                    </Reveal>
                    <Reveal className="portfolio__hero-photo" delay={0.15}>
                        <Image
                            src="/assets/img-profile.webp"
                            alt={PROFILE.name}
                            width={440}
                            height={440}
                            priority
                            className="portfolio__hero-img"
                        />
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Stats ---------------- */}
            <section className="portfolio__stats">
                <Reveal className="portfolio__stats-inner">
                    {STATS.map((stat) => (
                        <div key={tr(stat.label)} className="portfolio__stat">
                            <StatCounter value={stat.value} className="portfolio__stat-value" />
                            <span className="portfolio__stat-label">{tr(stat.label)}</span>
                        </div>
                    ))}
                </Reveal>
            </section>

            {/* ---------------- About ---------------- */}
            {/* <section id="about" className="portfolio__about">
                <Reveal className="portfolio__about-inner">
                    <span className="portfolio__tag">{content.about.tag.value}</span>
                    <p className="portfolio__about-statement">{content.about.focus.value}</p>
                </Reveal>
            </section> */}

            {/* ---------------- Experience ---------------- */}
            <section id="experience" className="portfolio__section">
                <Reveal className="portfolio__section-head">
                    <span className="portfolio__tag">{content.experience.tag.value}</span>
                    <h2 className="portfolio__heading">{content.experience.heading.value}</h2>
                </Reveal>
                <div className="portfolio__timeline">
                    {EXPERIENCE.map((job, i) => (
                        <Reveal as="article" key={job.company} className="portfolio__job" delay={i * 0.05}>
                            <span className="portfolio__job-period">{tr(job.period)}</span>
                            <div>
                                <h3 className="portfolio__job-company">{job.company}</h3>
                                <p className="portfolio__job-role">{tr(job.role)}</p>
                                <p className="portfolio__job-summary">{tr(job.summary)}</p>
                                {job.achievements?.length > 0 && (
                                    <div className="portfolio__job-achievements">
                                        <span className="portfolio__job-achievements-label">
                                            {content.experience.achievementsLabel.value}
                                        </span>
                                        <ul className="portfolio__job-achievements-list">
                                            {job.achievements.map((item) => (
                                                <li key={item.en} className="portfolio__job-achievement">
                                                    {tr(item)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="portfolio__chips">
                                    {job.stack.map((tech) => (
                                        <span key={tech} className="portfolio__chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ---------------- Client logos ---------------- */}
            <ClientMarquee />

            {/* ---------------- Projects ---------------- */}
            <section id="projects" className="portfolio__section">
                <Reveal className="portfolio__section-head">
                    <span className="portfolio__tag">{content.projects.tag.value}</span>
                    <h2 className="portfolio__heading">{content.projects.heading.value}</h2>
                </Reveal>
                <div className="portfolio__projects-grid">
                    {PROJECTS.map((project, i) => (
                        <Reveal
                            as="a"
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio__project"
                            delay={(i % 3) * 0.08}
                        >
                            <span className="portfolio__project-client">{project.client}</span>
                            <h3 className="portfolio__project-name">{project.name}</h3>
                            {project.contribution && (
                                <div className="portfolio__project-role">
                                    <span className="portfolio__project-role-label">
                                        {content.projects.role.value}
                                    </span>
                                    <p className="portfolio__project-role-text">
                                        {tr(project.contribution)}
                                    </p>
                                </div>
                            )}
                            <p className="portfolio__project-desc">{tr(project.description)}</p>
                            <div className="portfolio__chips">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="portfolio__chip">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <span className="portfolio__project-link">
                                {content.projects.visit.value}
                                <ArrowUpRight size={16} aria-hidden />
                            </span>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ---------------- Products ---------------- */}
            <section id="products" className="portfolio__products">
                <div className="portfolio__section">
                    <Reveal className="portfolio__section-head">
                        <span className="portfolio__tag">{content.products.tag.value}</span>
                        <h2 className="portfolio__heading">{content.products.heading.value}</h2>
                    </Reveal>
                    <div className="portfolio__products-grid">
                        {PRODUCTS.map((product) => (
                            <Reveal as="article" key={tr(product.name)} className="portfolio__product">
                                <div className="portfolio__product-body">
                                    <span className="portfolio__product-live">{content.products.live.value}</span>
                                    <h3 className="portfolio__product-name">{tr(product.name)}</h3>
                                    <p className="portfolio__product-desc">{tr(product.description)}</p>
                                    <div className="portfolio__chips">
                                        {product.stack.map((tech) => (
                                            <span key={tech} className="portfolio__chip">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {product.url && (
                                    <a
                                        href={product.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio__btn portfolio__btn--primary portfolio__product-link"
                                    >
                                        {content.projects.visit.value}
                                        <ArrowUpRight size={18} aria-hidden />
                                    </a>
                                )}
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Skills ---------------- */}
            <section id="skills" className="portfolio__section">
                <Reveal className="portfolio__section-head">
                    <span className="portfolio__tag">{content.skills.tag.value}</span>
                    <h2 className="portfolio__heading">{content.skills.heading.value}</h2>
                </Reveal>
                <div className="portfolio__skills-grid">
                    {SKILL_GROUPS.map((group, i) => (
                        <Reveal key={tr(group.title)} delay={(i % 4) * 0.06}>
                            <h3 className="portfolio__skill-title">{tr(group.title)}</h3>
                            <ul className="portfolio__skill-list">
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ---------------- Contact ---------------- */}
            <section id="contact" className="portfolio__contact">
                <Reveal className="portfolio__contact-inner">
                    <span className="portfolio__contact-tag">{content.contact.tag.value}</span>
                    <h2 className="portfolio__contact-heading">{content.contact.heading.value}</h2>
                    <p className="portfolio__contact-body">{content.contact.body.value}</p>
                    <div className="portfolio__contact-links">
                        <a className="portfolio__contact-link" href={`mailto:${PROFILE.email}`}>
                            <Mail size={18} aria-hidden />
                            {PROFILE.email}
                        </a>
                        <a
                            className="portfolio__contact-link"
                            href={PROFILE.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={18} aria-hidden />
                            LinkedIn
                        </a>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
