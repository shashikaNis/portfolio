import Image from "next/image";
import Header from "@/components/Header";
import RevealObserver from "@/components/RevealObserver";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, projectIcons, skillIcons } from "@/components/icons";
import { education, featuredProject, profile, projects, skills, stats } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header name={profile.shortName} />

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">
                <span className="dot" /> {profile.availability}
              </div>
              <h1>
                Hi, I&apos;m {profile.shortName}.<br />I build <span className="accent">mobile apps</span> that ship.
              </h1>
              <p className="lead">
                HNDIT undergraduate at SLIATE and Flutter mobile app developer from Sri Lanka. I take apps end to end:
                Figma designs, implementation, REST API integration and testing, with hands-on experience in native
                Android, Firebase and NestJS.
              </p>
              <div className="btns">
                <a href="#projects" className="btn btn-primary">
                  View my work <ArrowIcon />
                </a>
                <a href={profile.cv} className="btn btn-ghost" download="Shashika_Kulasekara_CV.pdf">
                  Download CV
                </a>
              </div>
              <div className="socials">
                <a href={profile.github} target="_blank" rel="noopener" className="icon-btn" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="icon-btn" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                  <MailIcon />
                </a>
              </div>
            </div>

            <div className="avatar-card reveal">
              <div className="avatar">
                <Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={540} height={688} priority />
              </div>
              <div className="code-line mono">
                <b>const</b> shashika = {"{"}
              </div>
              <div className="code-line mono">
                &nbsp;&nbsp;role: <b>&quot;{profile.role}&quot;</b>,
              </div>
              <div className="code-line mono">
                &nbsp;&nbsp;based: <b>&quot;Sri Lanka 🇱🇰&quot;</b>,
              </div>
              <div className="code-line mono">
                &nbsp;&nbsp;stack: [<b>&quot;Flutter&quot;</b>, <b>&quot;Android&quot;</b>, <b>&quot;Firebase&quot;</b>]
              </div>
              <div className="code-line mono">{"};"}</div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="alt">
          <div className="container about-grid">
            <div className="reveal">
              <div className="section-label mono">01 · About me</div>
              <h2 className="section-title">Detail-oriented, self-directed builder</h2>
              <p>
                I&apos;m {profile.fullName}, an HNDIT undergraduate at SLIATE (ATI Anuradhapura). I&apos;ve built and
                shipped a Flutter mobile app end to end: from Figma UI specs through implementation, REST API
                integration and manual testing, all independently.
              </p>
              <p>
                I&apos;m also comfortable with native Android (Java and Kotlin), Firebase and Git-based workflows. I
                delivered one project solo and another as part of a 10-person team, so I work well both independently
                and in a remote team.
              </p>
              <p>
                My academic coursework is complete, and I&apos;m now looking for a paid internship to complete my
                mandatory industrial training and contribute to real client work.
              </p>
            </div>
            <div className="stats reveal">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills">
          <div className="container">
            <div className="section-label mono">02 · Skills</div>
            <h2 className="section-title">What I work with</h2>
            <p className="section-intro">The languages, frameworks and tools I use to design, build and ship apps.</p>
            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-card reveal" key={group.title}>
                  <h3>
                    <span className="ic">{skillIcons[group.icon]}</span>
                    {group.title}
                  </h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="alt">
          <div className="container">
            <div className="section-label mono">03 · Projects</div>
            <h2 className="section-title">Key projects</h2>
            <p className="section-intro">Projects I&apos;ve designed in Figma and built through to working, tested apps.</p>

            <article className="featured reveal">
              <div className="featured-visual">
                <div className="mono flow-title">HOW IT WORKS</div>
                <div className="flow">
                  {featuredProject.flow.map((step, i) => (
                    <div className="flow-step" key={step}>
                      <span className="n">{i + 1}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className="featured-body">
                <div className="kicker mono">{featuredProject.kicker}</div>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.summary}</p>
                <ul>
                  {featuredProject.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="tags">
                  {featuredProject.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="links">
                  <a href={featuredProject.link} target="_blank" rel="noopener">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </article>

            <div className="project-grid">
              {projects.map((p) => (
                <article className="project reveal" key={p.title}>
                  <div className="top">
                    {projectIcons[p.icon]}
                    <span className="mono meta">{p.meta}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education">
          <div className="container">
            <div className="section-label mono">04 · Education</div>
            <h2 className="section-title">Education</h2>
            <p className="section-intro">Where I&apos;m studying and what&apos;s next.</p>
            <div className="timeline">
              {education.map((e) => (
                <div className="t-item reveal" key={e.title}>
                  <div className="t-date mono">{e.date}</div>
                  <h3>{e.title}</h3>
                  <div className="t-org">{e.org}</div>
                  <p>{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact">
          <div className="container">
            <div className="contact-box reveal">
              <div className="section-label mono">05 · Contact</div>
              <h2 className="section-title">Let&apos;s work together</h2>
              <p>
                I&apos;m open to paid internships and junior mobile developer roles. The quickest way to reach me is by
                email.
              </p>
              <div className="btns">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  Email me
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="btn btn-ghost">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener" className="btn btn-ghost">
                  GitHub
                </a>
              </div>
              <p className="mono contact-email">{profile.email}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · Built in Sri Lanka
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}
