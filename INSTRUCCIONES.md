# 🍺 Los 4 Hermanos – Sistema de Pedidos Online
## Guía de instalación paso a paso

---

## ✅ QUÉ VAS A TENER AL TERMINAR

- **Link público para clientes:** `https://los4hermanos.vercel.app` (o el nombre que elijas)
- **Panel admin protegido:** `https://los4hermanos.vercel.app/admin`
- **Contraseña por defecto:** `hermanos2024` (podés cambiarla desde el panel)
- Los clientes VEN la tienda y hacen pedidos
- Solo VOS podés editar productos, precios, activar/desactivar

---

## PASO 1 – Crear cuenta en Supabase (base de datos GRATIS)

1. Entrá a **https://supabase.com** → "Start for free"
2. Registrate con Google o email
3. Hacé clic en **"New project"**
4. Poné:
   - **Name:** `los4hermanos`
   - **Database Password:** (inventá una, guardala)
   - **Region:** South America (São Paulo)
5. Esperá ~2 minutos que se cree el proyecto

### Cargar los productos en la base de datos:
6. En el menú izquierdo → **SQL Editor** → **New query**
7. Copiá TODO el contenido del archivo `supabase_setup.sql`
8. Pegalo en el editor → clic en **Run** (▶)
9. Vas a ver "Success" y los 200+ productos están cargados

### Obtener las claves:
10. En el menú → **Project Settings** → **API**
11. Copiá:
    - **Project URL** (empieza con `https://xxx.supabase.co`)
    - **service_role** key (la de abajo, que dice "secret")
    
    ⚠️ IMPORTANTE: Guardá estas dos cosas, las necesitás en el paso 3.

---

## PASO 2 – Subir el código a GitHub

1. Entrá a **https://github.com** → registrate si no tenés cuenta
2. Clic en el **+** arriba a la derecha → **New repository**
3. **Repository name:** `los4hermanos`
4. Dejalo en **Public** → clic en **Create repository**
5. En la página que aparece, buscá "upload an existing file"
6. Arrastrá estos archivos/carpetas:
   ```
   📁 api/
      products.js
      📁 products/
         [id].js
   📁 public/
      index.html
      admin.html
   package.json
   vercel.json
   ```
7. Clic en **Commit changes**

---

## PASO 3 – Publicar en Vercel (hosting GRATIS)

1. Entrá a **https://vercel.com** → "Start Deploying"
2. Conectate con tu cuenta de GitHub
3. Clic en **"Import Git Repository"**
4. Seleccioná el repo `los4hermanos`
5. Antes de dar Deploy, buscá la sección **"Environment Variables"**
6. Agregá estas dos variables:

   | Variable | Valor |
   |----------|-------|
   | `SUPABASE_URL` | (el Project URL del paso 1) |
   | `SUPABASE_SERVICE_KEY` | (el service_role key del paso 1) |

7. Clic en **Deploy**
8. En ~2 minutos te da un link como `https://los4hermanos.vercel.app` 🎉

---

## PASO 4 – Verificar que funciona

1. Abrí el link → deberías ver la tienda con todos los productos
2. Abrí `tu-link.vercel.app/admin`
3. Ingresá con contraseña: **`hermanos2024`**
4. Desde el panel podés:
   - ✏️ Editar nombre, precio, descripción de cualquier producto
   - ➕ Agregar productos nuevos
   - 🔴 Desactivar productos que no tenés (no aparecen en la tienda)
   - 🗑 Eliminar productos
   - 💾 Guardar cambios → se actualizan al instante para todos

---

## PASO 5 – Cambiar la contraseña (recomendado)

1. Entrá al panel admin `/admin`
2. Clic en la pestaña **"⚙️ Config"**
3. Sección "Cambiar contraseña"
4. Ingresá la actual (`hermanos2024`) y la nueva
5. Clic en **Cambiar contraseña**

---

## 📱 Cómo compartir con tus clientes

Compartí el link así:
```
🍺 ¡Ya podés hacer tus pedidos online!
👉 [tu-link.vercel.app]
• Elegí tus productos
• Armá tu pedido
• ¡Lo enviás directo por WhatsApp!
```

También podés generar un **código QR** gratis en:
https://www.qr-code-generator.com

---

## 🔧 Actualizar precios fácilmente

Cada vez que cambia un precio:
1. Entrá a `tu-link/admin`
2. Buscá el producto en la tabla
3. Editá el precio directo en la celda
4. Clic en **✓ Guardar**
5. ¡Listo! El precio se actualiza para todos los clientes al instante

---

## ❓ Preguntas frecuentes

**¿Cuánto cuesta?**
- Supabase: GRATIS hasta 500MB de datos (más que suficiente)
- Vercel: GRATIS para proyectos pequeños
- Total: $0/mes 💚

**¿Los clientes necesitan crear una cuenta?**
No. Solo entran al link, arman el pedido y te lo mandan por WhatsApp.

**¿Cómo le llega el pedido?**
Al número 351 621-1515 por WhatsApp, con el detalle completo y el total estimado.

**¿Puedo ponerle un dominio propio?**
Sí, en Vercel podés agregar un dominio personalizado como `pedidos-hermanos.com.ar` (hay que comprar el dominio, ~$15/año).

---

## 📞 Soporte
Si tenés algún problema con la instalación, toda la lógica está en los archivos:
- `public/index.html` → tienda visible para clientes
- `public/admin.html` → panel admin
- `api/products.js` → API de productos
- `supabase_setup.sql` → base de datos
