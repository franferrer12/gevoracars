# GEVORACARS - Plataforma de Compra/Venta de Coches Premium

Sitio web de venta e importación de coches de lujo con sistema de gestión completo.

## 🚗 Características

- **Landing page** atractiva con diseño oscuro y detalles dorados
- **Autocomplete inteligente** para búsqueda de coches con:
  - Ordenación por relevancia (coincidencia exacta, empieza por, contiene)
  - Navegación con teclado (flechas, Enter, Escape)
  - Resaltado de texto coincidente
  - Contador de resultados
  - Dropdowns dependientes (marca → modelo)
- **Catálogo de coches** con filtros avanzados
- **Panel de administración** con autenticación
- **Base de datos SQLite** con inventario completo
- **35+ marcas** y cientos de modelos

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Git instalado
- Navegador moderno

## 🚀 Instalación desde Cualquier PC

### 1. Clonar el repositorio

```bash
git clone https://github.com/franferrer12/gevoracars.git
cd gevoracars
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 🛠️ Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm install` | Instala las dependencias |
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza la versión compilada localmente |

## 📂 Estructura del Proyecto

```
gevoracars-web/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Landing page principal
│   │   ├── catalogo.astro        # Catálogo de coches
│   │   └── admin/                # Panel de administración
│   │       ├── login.astro       # Login admin
│   │       ├── dashboard.astro   # Dashboard
│   │       └── cars/             # Gestión de coches
│   │           ├── index.astro   # Lista de coches
│   │           └── new.astro     # Añadir coche nuevo
│   ├── lib/
│   │   ├── db.js                 # Configuración SQLite
│   │   └── auth.js               # Sistema de autenticación
│   ├── data/
│   │   └── cars-database.json    # Base de datos de marcas/modelos
│   └── styles/
│       └── global.css            # Estilos globales
├── data/
│   └── gevoracars.db             # Base de datos SQLite
└── public/
    └── favicon.svg
```

## 🔐 Acceso al Panel de Administración

**URL:** `http://localhost:4321/admin/login`

**Credenciales por defecto:**
- Usuario: `admin`
- Contraseña: `admin123`

⚠️ **IMPORTANTE:** Cambiar estas credenciales antes de subir a producción.

## 💾 Base de Datos

La aplicación usa **SQLite** con las siguientes tablas:

### `cars` - Inventario de coches
Columnas: id, marca, modelo, year, kilometros, precio, combustible, transmision, color, imagen_principal, imagenes_adicionales, descripcion, origen, estado, destacado, created_at, updated_at

### `leads` - Contactos/Clientes potenciales
Columnas: id, nombre, email, telefono, tipo (vender/comprar), marca, modelo, mensaje, estado, created_at

### `users` - Usuarios del sistema
Columnas: id, username, password_hash, role, created_at

## 🎨 Tecnologías Utilizadas

- **Astro 5.15.9** - Framework web moderno
- **SQLite** con better-sqlite3 - Base de datos
- **Tailwind CSS** - Estilos (configurado en global.css)
- **Line Awesome** - Iconos
- **Google Fonts (Inter)** - Tipografía

## 🌐 Características del Autocomplete

El buscador de coches incluye:

1. **Búsqueda inteligente**: Ordena resultados por relevancia
2. **Navegación por teclado**:
   - `↓` / `↑` - Navegar entre sugerencias
   - `Enter` - Seleccionar sugerencia activa
   - `Escape` - Cerrar sugerencias
3. **Resaltado visual**: Destaca el texto coincidente en oro
4. **Contador de resultados**: Muestra cuántos resultados hay
5. **Dependencia de campos**: El modelo se habilita solo después de seleccionar marca

## 📝 Notas de Desarrollo

### Último Fix Aplicado
Se solucionó un problema donde hacer clic en las sugerencias del autocomplete no las seleccionaba. El fix consistió en cambiar el evento de `click` a `mousedown` para ejecutarse antes del evento global que cierra el dropdown.

### Estado Actual
- ✅ Autocomplete funcionando completamente
- ✅ Navegación por teclado operativa
- ✅ Selección por clic funcionando
- ✅ Base de datos con marcas y modelos
- ✅ Panel admin funcional
- ✅ Diseño responsive

## 🔄 Continuar Desarrollo

Para continuar el desarrollo desde otro PC:

```bash
# 1. Clonar el repositorio
git clone https://github.com/franferrer12/gevoracars.git
cd gevoracars

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Hacer cambios y guardar
git add .
git commit -m "descripción de cambios"
git push
```

## 📦 Despliegue

Para desplegar en producción:

```bash
# Compilar el proyecto
npm run build

# El contenido estará en ./dist/
# Subir ./dist/ a tu hosting (Vercel, Netlify, etc.)
```

**Hosting recomendados para Astro con SSR:**
- Vercel
- Netlify
- Cloudflare Pages
- Railway
- Render

## 🐛 Problemas Conocidos

Ninguno actualmente. El autocomplete está completamente funcional.

## 📄 Licencia

Proyecto privado de GEVORACARS SL

---

**Desarrollado con** ❤️ **por GEVORACARS**

**Ubicación:** Alginet, Valencia

**Contacto:**
- Nathan: 633 01 09 04
- Álvaro: 651 476 958
- Fran: 601 15 82 82
- WhatsApp: 601 675 888
