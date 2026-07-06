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

El objetivo del ejercicio es agregar una nueva entidad llamada "materias" al proyecto siguiendo exactamente la misma arquitectura y el mismo patrón que ya usan las entidades de alumnos y cursos. Para hacerlo, debo utilizar la IA de forma guiada, generando cada capa por separado y verificando que el código se adapte correctamente al proyecto existente.

---

## 2. 💬 Mis prompts (en orden)

Pegá **todos** los prompts que usaste, en orden, con la respuesta resumida y qué hiciste con ella. Agregá tantos como necesites.

### Prompt #1

**Lo que escribí:**
Actuá como un desarrollador backend senior especializado en Node.js, Express y PostgreSQL.

Contexto: estoy trabajando en una API REST desarrollada con Express utilizando ES Modules y una arquitectura en capas (Controller → Service → Repository). El acceso a la base de datos se realiza mediante la clase DbPg y no se utiliza ningún ORM. Voy a pasarte como referencia los archivos cursos-repository.js y db-pg.js. Quiero que respetes exactamente el mismo estilo de código.

Tarea: generá únicamente el archivo materias-repository.js para la tabla:

materias
- id SERIAL PRIMARY KEY
- nombre VARCHAR(75) NOT NULL

Debe implementar los métodos:
- getAllAsync()
- getByIdAsync(id)
- createAsync(materia)
- updateAsync(materia)
- deleteByIdAsync(id)

Restricciones:
- No agregues dependencias nuevas.
- No uses ORM.
- Utilizá únicamente los métodos de DbPg.
- Usá consultas SQL parametrizadas ($1, $2, etc.).
- Mantené el mismo estilo y estructura que cursos-repository.js.
- Conservá los console.log si existen en el archivo de referencia.

No generes todavía el Service ni el Controller. Esperá mi revisión antes de continuar.

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
La IA generó el archivo materias-repository.js siguiendo el mismo patrón que cursos-repository.js, adaptando las consultas SQL para trabajar con la tabla materias y utilizando la clase Db para acceder a la base de datos mediante consultas parametrizadas.

**¿Me sirvió tal cual, o tuve que corregir/repreguntar?**
Me sirvió como base, pero igualmente revisé el código antes de usarlo para comprobar que respetara el patrón de `cursos-repository.js`. Verifiqué que utilizara la clase `Db`, consultas SQL parametrizadas y los mismos métodos del proyecto. No fue necesario hacer cambios importantes, solo confirmar que se adaptara correctamente a la arquitectura existente.

### Prompt #2

**Lo que escribí:**
En este ejercicio solo utilizamos un prompt porque es todo repetitivo, asi que solo debiamos chequear si estaba bien. 
**Por qué necesité este segundo prompt** (qué falló o faltó en el anterior):
```
...
```

*(Repetí la estructura para cada prompt. Si resolviste todo con un solo prompt gigante, ⚠️ eso es 🟡 según EFSI — explicá por qué.)*

---

## 3. 🔧 Qué hizo la IA y qué hice yo

Marcá esto **también en el código** con comentarios `// [IA]` y `// [YO]`. Acá resumilo:

| Archivo / función | Lo generó la IA | Lo modifiqué/escribí yo | Por qué |

Archivo / función: materias-repository.js (estructura de la clase y métodos CRUD)
Lo generó la IA: Sí.
Lo modifiqué/escribí yo: Revisé el código antes de incorporarlo al proyecto.
Por qué: Verifiqué que siguiera el mismo patrón que cursos-repository.js, utilizara la clase Db, consultas SQL parametrizadas y los métodos correspondientes (queryAll, queryOne, queryReturnId y queryRowCount).

Archivo / función: Revisión del código
Lo generó la IA: No.
Lo modifiqué/escribí yo: Sí.
Por qué: Comprobé que el código respetara la arquitectura del proyecto, que no agregara dependencias nuevas y que fuera compatible con el resto de la aplicación.

Archivo / función: Integración al proyecto
Lo generó la IA: No.
Lo modifiqué/escribí yo: Sí.
Por qué: Agregué el archivo al proyecto para que formara parte de la estructura existente y pudiera utilizarse junto con las demás capas del CRUD.
---
## 4. 🐛 Errores o cosas mal que detecté en la respuesta de la IA

> Si ponés "ninguno", probablemente no las viste. **Siempre** hay algo (un import de más, un estilo distinto, un caso borde olvidado, una mala práctica de seguridad).

La IA generó correctamente el repository, pero tuve que revisar que respetara exactamente el estilo del proyecto. Verifiqué que utilizara la clase `Db` y no accediera directamente al Pool de PostgreSQL, que todas las consultas usaran parámetros (`$1`) para evitar SQL Injection y que mantuviera la misma estructura y nombres de métodos que `cursos-repository.js`. También comprobé que no agregara dependencias nuevas ni modificara la arquitectura existente.
---

## 5. ✅ Verificación

Pegá el checklist de verificación del ejercicio y marcá lo que comprobaste **vos** (con qué evidencia: captura de Postman, salida de `npm test`, número de ms, etc.).

```
...
```

---

## 6. ✍️ Reflexión (300–600 palabras)

Cubrí: qué proceso seguiste, qué decisiones tomaste y por qué, qué aprendiste, y —lo más importante— **qué corregiste de lo que te dio la IA**. Escribí con tus palabras; esto se contrasta con el oral.

### 6. ✍️ Reflexión

En este ejercicio usamos la IA para crear la nueva entidad **Materias** siguiendo el mismo modelo que ya tenían **Cursos** y **Alumnos**. Para que fuera más fácil revisar el código, decidimos generar primero el **Repository**, después el **Service** y por último el **Controller**, en lugar de pedir todo junto.

Al escribir los prompts dimos bastante contexto sobre el proyecto, indicando que usa Node.js, Express, PostgreSQL y una arquitectura en capas. También aclaramos que debía mantener el mismo estilo del código existente y no agregar librerías nuevas.

La IA generó un buen resultado, pero antes de usarlo revisamos que todo siguiera el patrón del proyecto. Verificamos que las consultas SQL fueran parametrizadas, que se utilizara la clase `Db` para acceder a la base de datos y que los métodos y la estructura fueran iguales a los de `Cursos`. También registramos el nuevo controller en `server.js` para que la ruta `/api/materias` funcionara correctamente.

Con este ejercicio aprendimos que la IA puede ahorrar tiempo, pero que siempre hay que revisar el código antes de usarlo. También vimos que un prompt bien explicado ayuda a obtener respuestas más precisas y adaptadas al proyecto.


---

## 7. 🔗 Adjuntos

- [ ] Link/PDF de la conversación completa con la IA
- [ ] Commit(s) en GitHub: `____________`
- [ ] Capturas / evidencias de verificación
