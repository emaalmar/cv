# Especificación del Portafolio - Emanuel Ledesma Camacho

## Visión General
Portafolio profesional que actúa como CV interactivo diseñado para atraer ofertas de trabajo de grandes empresas. Muestra conocimiento técnico, capacidad de documentación y pensamiento organizacional tipo Scrum Master.

**Stack tecnológico:**
- Frontend: Next.js 14 + TypeScript + Tailwind CSS
- Backend: NestJS + TypeScript
- Arquitectura: API REST con CORS habilitado

---

## Estructura de Secciones

### 1. Hero/Navegación
- **Logo/Nombre:** Emanuel Ledesma Camacho
- **Tagline:** "Software Developer | Technical Communicator"
- **Navegación:** About | Projects | Skills | Certifications | Contact
- **Tema:** Dark mode por defecto (profesional para grandes empresas)

---

### 2. Sobre Mí (About)
**Contenido:**
- **Foto/Avatar:** Incluir (profesional, fondo simple)
- **Párrafo 1 (Intro):** 
  - Quién eres, qué haces
  - Enfoque: desarrollador que valida ideas a través de código
  
- **Párrafo 2 (Metodología):**
  - Énfasis en documentación, comunicación clara
  - Cómo aplicas pensamiento Scrum/Agile en tu trabajo personal
  
- **Párrafo 3 (Valores):**
  - Liderazgo (aunque sea de ti mismo)
  - Aprendizaje rápido, atención al detalle, confiabilidad

**Atributos destacados:**
- ⚡ Aprendizaje Rápido
- 📋 Documentación Excelente
- 🎯 Atención al Detalle
- 🤝 Confiable

---

### 3. Proyectos (Projects)
**Cantidad:** 3-4 proyectos personales

**Estructura por proyecto:**

```
[Imagen/Thumbnail del proyecto]

Nombre: [Nombre memorable]
Descripción: 2-3 líneas claras sobre qué hace y por qué lo hiciste

Tecnologías: [Frontend] | [Backend] | [Tools]

Documentación incluida:
- ✅ README profesional
- ✅ Diagrama de arquitectura
- ✅ Guía de configuración/instalación
- ✅ Decisiones técnicas documentadas

Enlaces:
[GitHub Repo] | [Demo en vivo (si aplica)]
```

**Proyecto Actual:**
1. **Portafolio + CV (Este proyecto)**
   - Descripción: Aplicación full-stack mostrando capacidades de desarrollo y documentación. Acto de demostración de habilidades técnicas y organizacionales.
   - Tecnologías: Next.js | NestJS | TypeScript | Tailwind CSS
   - Documentación: 
     - README con instrucciones de instalación
     - Diagrama de arquitectura frontend-backend
     - Explicación de estructura de carpetas
     - Flujo de datos documentado
   - GitHub: [link]
   - Demo: [link]

2. **[Proyecto Personal 2]** *(A definir)*
   - Descripción: 
   - Tecnologías:
   - Documentación:
   - GitHub: 
   - Demo:

3. **[Proyecto Personal 3]** *(A definir)*
   - Descripción:
   - Tecnologías:
   - Documentación:
   - GitHub:
   - Demo:

4. **[Proyecto Personal 4 (Opcional)]** *(A definir)*

---

### 4. Skills (Habilidades)
**Organización por categorías:**

#### Frontend
- React / Next.js
- TypeScript
- Tailwind CSS
- HTML5 / CSS3

#### Backend
- NestJS
- Node.js
- TypeScript
- REST APIs

#### Tools & DevOps
- Git / GitHub
- npm / yarn
- Docker (conocimientos)
- VS Code

#### Metodologías & Soft Skills
- Agile / Scrum
- Documentación Técnica
- Comunicación Clara
- Problem Solving

**Nota:** No incluir "niveles" (junior/mid/senior). Los proyectos demuestran el nivel.

---

### 5. Certificaciones
**Formato:**
- Logo + Nombre de certificación
- Plataforma (Coursera, Udemy, freeCodeCamp, etc.)
- Enlace de verificación
- Fecha de obtención

**Ejemplos a listar:**
- [Certificación 1]
- [Certificación 2]
- [Certificación 3]

---

### 6. Contacto (Contact)
**Información:**
- Email: emanuellescam@gmail.com
- GitHub: [tu-usuario]
- LinkedIn: [tu-perfil]
- Twitter/X: [opcional]

**Llamada a acción (CTA):**
"¿Interesado en colaborar? Contáctame para discutir cómo puedo aportar valor a tu equipo."

---

## Endpoints Backend Necesarios

```
GET /api/me
→ Información personal (nombre, email, bio)
Response: { id, name, email, bio, photo_url }

GET /api/projects
→ Lista de proyectos
Response: [ { id, title, description, technologies, github_link, demo_link, documentation } ]

GET /api/projects/:id
→ Detalle de proyecto + documentación
Response: { ...project, full_documentation, architecture_diagram }

GET /api/skills
→ Habilidades por categoría
Response: { frontend: [], backend: [], tools: [], methodologies: [] }

GET /api/certifications
→ Lista de certificaciones
Response: [ { id, name, platform, link, date_obtained } ]

POST /api/contact
→ Formulario de contacto
Payload: { name, email, message }
Response: { success, message }
```

---

## Estructura Base de Datos (Recomendación)

Si implementas BD (PostgreSQL + TypeORM sugerido):

```
User
├── id
├── name
├── email
├── bio
├── photo_url

Project
├── id
├── title
├── description
├── technologies (array)
├── github_link
├── demo_link
├── documentation (text o markdown)
├── created_at

Skill
├── id
├── category (frontend, backend, tools, methodologies)
├── name

Certification
├── id
├── name
├── platform
├── link
├── date_obtained
```

---

## Diseño & UX

**Color Scheme (Profesional):**
- Background: #0a0a0a (casi negro)
- Foreground: #ededed (casi blanco)
- Accent: #3b82f6 (azul - para CTAs y highlights)

**Tipografía:**
- Headings: Geist Sans (ya configurado)
- Body: Geist Sans
- Code: Geist Mono

**Responsividad:**
- Mobile-first
- Desktop optimizado para 1920px
- Tablet: 768px breakpoint

---

## Roadmap de Implementación

1. ✅ **Fase 1:** Conectar backend-frontend (COMPLETADO)
2. **Fase 2:** Crear componentes principales (Hero, Navbar, About, Projects)
3. **Fase 3:** Implementar endpoints backend (proyectos, skills, certificaciones)
4. **Fase 4:** Agregar base de datos
5. **Fase 5:** Documentación completa (README, diagramas)
6. **Fase 6:** Deploy (Vercel para frontend, Railway/Render para backend)

---

## Notas Importantes

- **Documentación como diferenciador:** El README de este portafolio debe ser ejemplar. Gran empresa verá que sabes documentar.
- **Demostración Scrum:** Incluir en GitHub Issues/Projects el flujo de desarrollo del portafolio mismo (backlog, sprints, retrospectivas).
- **Sostenibilidad:** Código limpio, componentes reutilizables, estructura escalable.
- **Verificabilidad:** Cada tecnología listada debe aparecer en al menos un proyecto.

---

**Versión:** 1.0  
**Última actualización:** 14.01.2026  
**Estado:** Especificación Inicial
