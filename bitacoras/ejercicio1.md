# 📓 Bitácora de Prompts — Ejercicio N° ___

> Copiá este archivo por cada ejercicio que entregues. Nombralo, por ejemplo, `entregas/01-bitacora.md`.
> Esta bitácora **es parte de la nota**. Un ejercicio sin bitácora no se corrige.

---

## Datos

- **Alumno/a:** Alexia Wainstok, Sofia Sufryn y Milena Svatzky
- **Ejercicio:** N° _01_
- **Fecha:** 3 de Julio
- **Modelo de IA usado:** ChatGPT

---

## 1. 🎯 Qué me pidieron

Resumí en 2–3 líneas el objetivo del ejercicio con tus palabras (no copiado del enunciado).

```
...
```

---

## 2. 💬 Mis prompts (en orden)

Pegá **todos** los prompts que usaste, en orden, con la respuesta resumida y qué hiciste con ella. Agregá tantos como necesites.

### Prompt #1

**Lo que escribí:**
```
...
```

**Auto-chequeo de las 5 partes EFSI** (marcá lo que incluiste):
- [ ] Rol: Actuá como un desarrollador backend senior especializado en Node.js, Express y PostgreSQL, con experiencia en APIs REST y arquitectura en capas.

- [ ] Contexto (¿pegaste código del proyecto?):Estoy trabajando en una API REST desarrollada con Express utilizando ES Modules. El proyecto sigue una arquitectura en capas (Controller → Service → Repository) y utiliza PostgreSQL mediante la librería pg, sin ningún ORM.

Ya existen las entidades alumnos y cursos, que siguen exactamente este patrón. Voy a compartir los archivos cursos-repository.js, cursos-service.js, cursos-controller.js y db-pg.js para que los uses como referencia y mantengas el mismo estilo de programación.

- [ ] Tarea: 
Necesito generar el archivo materias-repository.js para la tabla:

materias(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(75) NOT NULL
)

Debe implementar los mismos métodos que cursos-repository.js, respetando exactamente la estructura y el patrón utilizado en el proyecto.
- [ ] Restricciones:
No agregar dependencias nuevas.
No utilizar ningún ORM.
Utilizar únicamente la clase DbPg.
Acceder a la base mediante this.db.queryAll, queryOne, queryReturnId y queryRowCount.
Utilizar consultas SQL parametrizadas ($1, $2, etc.).
Mantener el mismo estilo de código, nombres y console.log que existen en cursos-repository.js.
No generar todavía el Service ni el Controller.

- [ ] Iteración:
Primero quiero revisar únicamente el Repository. Una vez que esté correcto, en otro paso voy a pedir el Service y finalmente el Controller.

**Qué me devolvió (resumen):**
```
...
```

**¿Me sirvió tal cual, o tuve que corregir/repreguntar?**
```
...
```

### Prompt #2

**Lo que escribí:**
```
...
```
**Por qué necesité este segundo prompt** (qué falló o faltó en el anterior):
```
...
```

*(Repetí la estructura para cada prompt. Si resolviste todo con un solo prompt gigante, ⚠️ eso es 🟡 según EFSI — explicá por qué.)*

---

## 3. 🔧 Qué hizo la IA y qué hice yo

Marcá esto **también en el código** con comentarios `// [IA]` y `// [YO]`. Acá resumilo:

| Archivo / función | Lo generó la IA | Lo modifiqué/escribí yo | Por qué |
|---|---|---|---|
| | | | |
| | | | |

---

## 4. 🐛 Errores o cosas mal que detecté en la respuesta de la IA

> Si ponés "ninguno", probablemente no las viste. **Siempre** hay algo (un import de más, un estilo distinto, un caso borde olvidado, una mala práctica de seguridad).

```
...
```

---

## 5. ✅ Verificación

Pegá el checklist de verificación del ejercicio y marcá lo que comprobaste **vos** (con qué evidencia: captura de Postman, salida de `npm test`, número de ms, etc.).

```
...
```

---

## 6. ✍️ Reflexión (300–600 palabras)

Cubrí: qué proceso seguiste, qué decisiones tomaste y por qué, qué aprendiste, y —lo más importante— **qué corregiste de lo que te dio la IA**. Escribí con tus palabras; esto se contrasta con el oral.

```
...
```

---

## 7. 🔗 Adjuntos

- [ ] Link/PDF de la conversación completa con la IA
- [ ] Commit(s) en GitHub: `____________`
- [ ] Capturas / evidencias de verificación
