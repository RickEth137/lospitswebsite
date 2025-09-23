# LOS PITS - Sitio Web Corporativo

Un sitio web de una sola página (one-page website) moderno y profesional para LOS PITS Servicio Automotriz, especializado en mantenimiento de flotillas.

## 🚀 Características Implementadas

### ✅ Diseño y UX
- **Paleta de colores profesional**: Azules oscuros, grises, blanco y amarillo/naranja
- **Tipografía moderna**: Inter font para una lectura óptima
- **Layout responsive**: Diseño que se adapta a escritorio, tablet y móvil
- **Interfaz limpia y profesional**: Refleja confianza y tecnología avanzada

### ✅ Efectos Visuales
- **Parallax estratégico**: Implementado en 4 secciones clave
- **Animaciones suaves**: Fade-in y slide-in animations
- **Micro-interacciones**: Hover effects y transiciones
- **Header sticky**: Navegación fija con cambio de transparencia

### ✅ Secciones Implementadas

#### 1. Header Navigation
- Logo interactivo
- Navegación smooth scroll
- Botón CTA destacado
- Menu responsive para móviles

#### 2. Hero Section
- Imagen de fondo con parallax
- Título y subtítulo impactantes
- Call-to-action principal
- Indicador de scroll

#### 3. Barra de Confianza
- 4 métricas clave con iconos
- Animación de contadores
- Diseño horizontal responsive

#### 4. Sección Nosotros
- Misión y visión en tarjetas
- Parallax sutil en fondo
- Animaciones on-scroll

#### 5. Sección Servicios
- Tarjetas de servicios detalladas
- Galería de logos de marcas
- Parallax en fondo de motor

#### 6. Sección Tecnología
- Screenshot del software
- Lista de beneficios clave
- Parallax tecnológico sutil

#### 7. Contacto y Footer
- Formulario funcional con validación
- Información de contacto
- Links y copyright

### ✅ Funcionalidades JavaScript
- **Navegación smooth scroll**: Transiciones suaves entre secciones
- **Parallax effects**: Optimizado para performance, deshabilitado en móviles
- **Form validation**: Validación en tiempo real con notificaciones
- **Mobile navigation**: Menu hamburguesa responsive
- **Scroll animations**: Elementos aparecen al hacer scroll
- **Active link highlighting**: Navegación activa según scroll position

### ✅ Optimizaciones
- **Mobile-first responsive**: Diseño optimizado para dispositivos móviles
- **Performance optimizations**: Parallax deshabilitado en móviles
- **SVG graphics**: Logos e iconos vectoriales para mejor calidad
- **Semantic HTML**: Estructura semántica para SEO y accesibilidad

## 📁 Estructura del Proyecto

```
Los pits/
├── index.html              # Archivo HTML principal
├── styles.css              # Estilos CSS completos
├── script.js               # JavaScript interactivo
├── README.md               # Este archivo
├── Cinematic_Truck_Video_Generation.mp4
├── Mountains.png
├── TruckOcean.png
└── assets/
    ├── README.md           # Documentación de assets
    ├── logo-los-pits.svg   # Logo principal
    ├── software-screenshot.svg
    └── logos/              # Logos de marcas
        ├── toyota-logo.svg
        ├── freightliner-logo.svg
        ├── international-logo.svg
        ├── vw-logo.svg
        ├── jac-logo.svg
        ├── yale-logo.svg
        └── kenworth-logo.svg
```

## 🎨 Paleta de Colores

```css
--primary-color: #1a365d     /* Azul oscuro principal */
--secondary-color: #2d3748   /* Azul gris secundario */
--accent-color: #f7941e      /* Naranja vibrante */
--accent-alt: #ffd700        /* Amarillo alternativo */
--white: #ffffff             /* Blanco puro */
--light-gray: #f7fafc        /* Gris claro */
--medium-gray: #e2e8f0       /* Gris medio */
--dark-gray: #4a5568         /* Gris oscuro */
```

## 📱 Responsividad

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Características Responsive
- Grid layouts adaptativos
- Navegación móvil con hamburger menu
- Tipografía escalable
- Parallax deshabilitado en móviles
- Formulario optimizado para touch

## 🌟 Efectos Parallax por Sección

1. **Hero**: Parallax rate 0.5 - Fondo se mueve lentamente
2. **Nosotros**: Parallax rate 0.2 - Efecto muy sutil
3. **Servicios**: Parallax rate 0.3 - Movimiento moderado
4. **Tecnología**: Parallax rate 0.15 - Efecto mínimo

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript ES6+**: Modules, Arrow Functions, Template Literals
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Inter
- **Unsplash**: Imágenes de fondo temporales

## 🚀 Cómo Usar

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador
2. **Desarrollo local**: Usa un servidor local para mejor experiencia:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (live-server)
   npx live-server
   ```
3. **Navegación**: Usa los enlaces del header o scroll manual
4. **Formulario**: Prueba la validación y envío del formulario

## 📋 Próximos Pasos (Opcionales)

### Mejoras de Contenido
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Actualizar información de contacto real
- [ ] Agregar testimonios de clientes
- [ ] Incluir galería de servicios

### Funcionalidades Adicionales
- [ ] Integrar con sistema de email real
- [ ] Agregar chat en vivo
- [ ] Implementar Google Analytics
- [ ] Optimizar para SEO avanzado

### Optimizaciones Técnicas
- [ ] Implementar lazy loading de imágenes
- [ ] Convertir a PWA (Progressive Web App)
- [ ] Optimizar para Core Web Vitals
- [ ] Implementar Service Workers

## 📞 Soporte

Para modificaciones o consultas sobre el sitio web:

1. **Estructura HTML**: Modificar `index.html`
2. **Estilos**: Editar variables CSS en `styles.css`
3. **Funcionalidad**: Ajustar `script.js`
4. **Assets**: Reemplazar archivos en carpeta `assets/`

## 🏆 Cumplimiento del Brief

### ✅ Objetivo General
- [x] Sitio web de una sola página moderno y profesional
- [x] Diseño que genera credibilidad
- [x] Captura de leads através del formulario
- [x] Efectos Parallax estratégicos implementados

### ✅ Tono y Estilo Visual
- [x] Profesional y robusto
- [x] Tecnológico y limpio
- [x] Paleta de colores sugerida implementada

### ✅ Estructura Detallada
- [x] Header con navegación sticky
- [x] Hero con parallax y overlay
- [x] Barra de confianza con 4 métricas
- [x] Sección Nosotros con parallax sutil
- [x] Servicios con tarjetas y logos de marcas
- [x] Tecnología con screenshot y features
- [x] Contacto con formulario funcional
- [x] Footer completo

### ✅ Requerimientos Técnicos
- [x] 100% responsive
- [x] Parallax deshabilitado en móviles
- [x] Animaciones sutiles implementadas
- [x] Optimización de imágenes (SVG vectoriales)

**Estado del proyecto: ✅ COMPLETADO**