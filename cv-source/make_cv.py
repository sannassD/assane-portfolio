"""Génère le CV d'Assane DIA (FR et EN) en PDF A4, une page, texte à 10 pt minimum.

Utilisation, depuis la racine du dépôt (après npm install) :
    pip install playwright && python -m playwright install chromium
    python cv-source/make_cv.py public/cv

Le contenu (expériences, projets, compétences…) se modifie dans les dictionnaires FR et EN ci-dessous.
"""
import base64, sys, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright

HERE = Path(__file__).parent
FONT = (HERE.parent / "node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2").resolve().as_uri()
PHOTO = "data:image/jpeg;base64," + base64.b64encode((HERE / "photo.jpg").read_bytes()).decode()

LINKS = [
    ("contact@xel-labs.com", "mailto:contact@xel-labs.com"),
    ("assane.xel-labs.com", "https://assane.xel-labs.com"),
    ("linkedin.com/in/assane-dia-", "https://www.linkedin.com/in/assane-dia-"),
    ("github.com/sannassD", "https://github.com/sannassD"),
]

FR = dict(
    lang="fr", file="assane-dia-cv.pdf", title="CV — Assane DIA",
    role="Développeur full stack · Data & IA",
    where="Dakar – Thiès, Sénégal · Disponible à distance",
    h_profile="Profil", h_exp="Expérience", h_proj="Projets clés", h_skills="Compétences",
    h_edu="Formation", h_lang="Langues",
    profile="Développeur full stack formé en génie logiciel, en master d’ingénierie des données et intelligence artificielle. Fondateur de Xel Labs, je conçois des applications web, mobiles et desktop, des API et des solutions data, du cahier des charges à la mise en production.",
    exp=[
        ("Fondateur · Concepteur & Développeur", "Xel Labs", "2026 – aujourd’hui",
         "Création et direction d’un studio technologique. Conception, développement et mise en production de sites web, d’applications métier et de solutions data pour des clients au Sénégal et à l’international : cadrage, maquettes, développement, déploiement et maintenance."),
        ("Développeur", "Université Iba Der Thiam", "2023 – 2024",
         "Plateforme de gestion des cours et des notes, application de comptabilité matière (StockSET), application desktop de gestion médicale, sites web dynamiques."),
        ("Administrateur système", "Université Iba Der Thiam", "2023 – 2024",
         "Administration de Windows Server, sauvegardes avec Veeam Backup."),
        ("Gérant", "Distribution PRIMO, LANA, ACE", "2022 – aujourd’hui",
         "Logistique, livraisons, suivi des ventes et relation client."),
        ("Secrétaire général & communication digitale", "Rue Public du Cœur", "2020 – aujourd’hui",
         "Communication numérique et réseaux sociaux de l’association."),
    ],
    projects=[
        ("Denc, Jàng, Wér — Xel Labs", "Trois logiciels SaaS en ligne : stock et ventes, gestion scolaire, gestion médicale", "React, Spring Boot, PostgreSQL"),
        ("Plateforme multiservices", "Immobilier, véhicules et boutique en ligne", "React, TypeScript, Spring Boot, PostgreSQL"),
        ("Gestion du BFEM", "Candidats, notes, délibération automatique, exports", "Python, PyQt5, SQLite"),
    ],
    skills=[
        ("Front-end", "React, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS"),
        ("Back-end", "Java, Spring Boot, Laravel, PHP, Node.js, Django, API REST"),
        ("Data & IA", "Python, pandas, scikit-learn, TensorFlow, Jupyter"),
        ("Bases & outils", "MySQL, PostgreSQL, SQLite, Docker, Linux, Git, Figma"),
    ],
    edu=[
        ("2025 – en cours", "Master Ingénierie des données et IA", "Université Iba Der Thiam, Thiès"),
        ("2021 – 2025", "Licence Génie logiciel", "Université Iba Der Thiam, Thiès"),
        ("2020", "Baccalauréat scientifique", "Lycée Malick Sy, Thiès"),
    ],
    langs=[("Français", "courant"), ("Anglais", "intermédiaire")],
)

EN = dict(
    lang="en", file="assane-dia-resume.pdf", title="Resume — Assane DIA",
    role="Full-stack developer · Data & AI",
    where="Dakar – Thiès, Senegal · Available remotely",
    h_profile="Profile", h_exp="Experience", h_proj="Key projects", h_skills="Skills",
    h_edu="Education", h_lang="Languages",
    profile="Full-stack developer with a bachelor’s in software engineering, currently studying for a master’s in data engineering and artificial intelligence. As founder of Xel Labs, I build web, mobile and desktop applications, APIs and data solutions, from specifications to production.",
    exp=[
        ("Founder · Designer & Developer", "Xel Labs", "2026 – present",
         "Founded and run a technology studio. Design, development and deployment of websites, business applications and data solutions for clients in Senegal and abroad: scoping, mockups, development, deployment and maintenance."),
        ("Developer", "Iba Der Thiam University", "2023 – 2024",
         "Course and grade management platform, inventory accounting app (StockSET), medical management desktop app, dynamic websites."),
        ("System administrator", "Iba Der Thiam University", "2023 – 2024",
         "Windows Server administration, backups with Veeam Backup."),
        ("Manager", "PRIMO, LANA, ACE distribution", "2022 – present",
         "Logistics, deliveries, sales tracking and customer relations."),
        ("General secretary & digital communications", "Rue Public du Cœur (non-profit)", "2020 – present",
         "Digital communications and social media."),
    ],
    projects=[
        ("Denc, Jàng, Wér — Xel Labs", "Three live SaaS products: inventory & sales, school management, healthcare management", "React, Spring Boot, PostgreSQL"),
        ("Multi-service platform", "Real estate, vehicles and online store", "React, TypeScript, Spring Boot, PostgreSQL"),
        ("BFEM exam management", "Candidates, grades, automatic deliberation, exports", "Python, PyQt5, SQLite"),
    ],
    skills=[
        ("Front-end", "React, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS"),
        ("Back-end", "Java, Spring Boot, Laravel, PHP, Node.js, Django, REST APIs"),
        ("Data & AI", "Python, pandas, scikit-learn, TensorFlow, Jupyter"),
        ("Databases & tools", "MySQL, PostgreSQL, SQLite, Docker, Linux, Git, Figma"),
    ],
    edu=[
        ("2025 – ongoing", "Master’s in Data Engineering and AI", "Iba Der Thiam University, Thiès"),
        ("2021 – 2025", "Bachelor’s in Software Engineering", "Iba Der Thiam University, Thiès"),
        ("2020", "Scientific baccalaureate", "Lycée Malick Sy, Thiès"),
    ],
    langs=[("French", "fluent"), ("English", "intermediate")],
)

CSS = f"""
@font-face {{ font-family: J; src: url({FONT}); font-weight: 200 800; }}
@page {{ size: A4; margin: 0; }}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html, body {{ width: 210mm; height: 297mm; }}
body {{ font-family: J, sans-serif; color: #1C2B30; font-size: 10pt; line-height: 1.42; -webkit-print-color-adjust: exact; print-color-adjust: exact; }}
a {{ color: inherit; text-decoration: none; }}
header {{ background: #10363F; color: #fff; padding: 9mm 13mm 8mm; display: flex; gap: 7mm; align-items: center; }}
.photo {{ width: 30mm; height: 30mm; border-radius: 50%; object-fit: cover; border: 1mm solid rgba(255,255,255,.18); flex: none; }}
h1 {{ font-size: 27pt; font-weight: 800; letter-spacing: -.4pt; line-height: 1.05; }}
.role {{ color: #F2B33D; font-weight: 700; font-size: 12.5pt; margin-top: 1.2mm; }}
.links {{ display: flex; flex-wrap: wrap; gap: 1mm 5mm; margin-top: 3mm; font-size: 9.6pt; color: #DCE8EA; }}
.links a {{ border-bottom: .2mm solid rgba(242,179,61,.6); }}
.where {{ margin-top: 1.3mm; font-size: 9.6pt; color: #B9CCD0; }}
main {{ display: grid; grid-template-columns: 1fr 55mm; gap: 9mm; padding: 7mm 13mm 0; }}
h2 {{ font-size: 9.6pt; font-weight: 800; letter-spacing: 1.6pt; text-transform: uppercase; color: #10363F; display: flex; align-items: center; gap: 3mm; margin: 5.2mm 0 2.4mm; }}
h2::after {{ content: ""; flex: 1; height: .3mm; background: #D7DCE2; }}
section:first-child h2 {{ margin-top: 0; }}
.job {{ margin-bottom: 3mm; }}
.job-head {{ display: flex; justify-content: space-between; gap: 3mm; align-items: baseline; }}
.job-title {{ font-weight: 700; font-size: 10.6pt; color: #10363F; }}
.job-title span {{ color: #0D9488; font-weight: 700; }}
.dates {{ font-size: 9.2pt; color: #4A5468; white-space: nowrap; }}
.job p {{ margin-top: .8mm; color: #2D3B40; }}
.projects {{ display: grid; grid-template-columns: 1fr 1fr; gap: 2.4mm; }}
.proj:first-child {{ grid-column: 1 / -1; }}
.proj {{ border: .3mm solid #D7DCE2; border-radius: 2.2mm; padding: 2.4mm 3.2mm; }}
.proj b {{ font-size: 10.4pt; color: #10363F; }}
.proj p {{ color: #2D3B40; }}
.proj .stack {{ font-size: 9.2pt; color: #0D9488; font-weight: 600; margin-top: .5mm; }}
aside h2 {{ margin-top: 6mm; }}
aside section:first-child h2 {{ margin-top: 0; }}
.skill {{ margin-bottom: 2.6mm; }}
.skill b, .edu b {{ display: block; font-size: 10.2pt; color: #10363F; }}
.skill span {{ color: #2D3B40; }}
.edu {{ margin-bottom: 3mm; }}
.edu .y {{ font-size: 9.2pt; color: #4A5468; }}
.edu .s {{ color: #2D3B40; font-size: 9.6pt; }}
.lang {{ margin-bottom: 1.2mm; }}
.lang b {{ color: #10363F; }}
"""

def page(d):
    links = "".join(f'<a href="{h}">{t}</a>' for t, h in LINKS)
    exp = "".join(f'<div class="job"><div class="job-head"><div class="job-title">{t} · <span>{o}</span></div><div class="dates">{y}</div></div><p>{p}</p></div>' for t, o, y, p in d["exp"])
    proj = "".join(f'<div class="proj"><b>{t}</b><p>{w}</p><div class="stack">{s}</div></div>' for t, w, s in d["projects"])
    skills = "".join(f'<div class="skill"><b>{t}</b><span>{s}</span></div>' for t, s in d["skills"])
    edu = "".join(f'<div class="edu"><div class="y">{y}</div><b>{t}</b><div class="s">{s}</div></div>' for y, t, s in d["edu"])
    langs = "".join(f'<div class="lang"><b>{l}</b> — {n}</div>' for l, n in d["langs"])
    return f"""<!doctype html><html lang="{d['lang']}"><head><meta charset="utf-8"><title>{d['title']}</title><style>{CSS}</style></head><body>
<header><img class="photo" src="{PHOTO}" alt="Assane DIA"><div>
<h1>Assane DIA</h1><div class="role">{d['role']}</div><div class="links">{links}</div><div class="where">{d['where']}</div></div></header>
<main><div>
<section><h2>{d['h_profile']}</h2><p>{d['profile']}</p></section>
<section><h2>{d['h_exp']}</h2>{exp}</section>
<section><h2>{d['h_proj']}</h2><div class="projects">{proj}</div></section>
</div><aside>
<section><h2>{d['h_skills']}</h2>{skills}</section>
<section><h2>{d['h_edu']}</h2>{edu}</section>
<section><h2>{d['h_lang']}</h2>{langs}</section>
</aside></main></body></html>"""

out = Path(sys.argv[1])
with sync_playwright() as p:
    b = p.chromium.launch()
    for d in (FR, EN):
        pg = b.new_page()
        html = Path(tempfile.gettempdir()) / f"{d['file']}.html"
        html.write_text(page(d), encoding="utf-8")
        pg.goto(html.as_uri()); pg.wait_for_timeout(500)
        h = pg.evaluate("document.body.scrollHeight"); print(d["file"], "hauteur px", h, "(A4 = 1123)")
        pg.pdf(path=str(out / d["file"]), format="A4", print_background=True)
    b.close()
