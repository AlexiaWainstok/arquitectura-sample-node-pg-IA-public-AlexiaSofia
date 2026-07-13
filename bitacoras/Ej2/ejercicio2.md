# 📓 Bitácora de Prompts — Ejercicio N° ___

> Copiá este archivo por cada ejercicio que entregues. Nombralo, por ejemplo, `entregas/01-bitacora.md`.
> Esta bitácora **es parte de la nota**. Un ejercicio sin bitácora no se corrige.

---

## Datos

- **Alumno/a:** Alexia Wainstok, Sofia Sufryn y Milena Svatzky
- **Ejercicio:** N° _02_
- **Fecha:** 6 de Julio
- **Modelo de IA usado:** ChatGPT

---

## 1. 🎯 Qué me pidieron

Resumí en 2–3 líneas el objetivo del ejercicio con tus palabras (no copiado del enunciado).

Eliminar la duplicación de código entre los repositories, services y, si era posible, los controllers, sin cambiar el comportamiento de la aplicación. Para eso había que reutilizar el código común mediante herencia, manteniendo la arquitectura y usando SQL con pg, sin incorporar un ORM.


---

## 2. 💬 Mis prompts (en orden)

Pegá **todos** los prompts que usaste, en orden, con la respuesta resumida y qué hiciste con ella. Agregá tantos como necesites.

### Prompt #1

**Lo que escribí:**
Tengo este problema: los repositories, services y controllers tienen métodos muy parecidos. Necesito eliminar la duplicación usando herencia sin cambiar el comportamiento del proyecto.

**Auto-chequeo de las 5 partes EFSI** (marcá lo que incluiste):


**Qué me devolvió (resumen):**
Propuso crear un BaseRepository, un BaseService y un BaseController para centralizar los métodos repetidos.

**¿Me sirvió tal cual, o tuve que corregir/repreguntar?**
Tuve que repreguntar porque no estaba claro qué convenía heredar y qué no.

### Prompt #2

**Lo que escribí:**
¿Por qué la herencia es la mejor solución? ¿Qué archivos debo crear y cuáles modificar?

**Por qué necesité este segundo prompt** (qué falló o faltó en el anterior):
```
Necesitaba entender por qué se elegía herencia y cómo aplicarla sin romper la estructura del proyecto.
...
```

*(Repetí la estructura para cada prompt. Si resolviste todo con un solo prompt gigante, ⚠️ eso es 🟡 según EFSI — explicá por qué.)*
Que me devolvio?
Explicó que la lógica común debía ir en clases base y que cada repository heredaría de ella.
---

## 3. 🔧 Qué hizo la IA y qué hice yo

Marcá esto **también en el código** con comentarios `// [IA]` y `// [YO]`. Acá resumilo:

| Archivo / función | Lo generó la IA | Lo modifiqué/escribí yo | Por qué |


> La IA generó la estructura inicial del `BaseRepository` y del `BaseService`, además de adaptar los `Repositories` y `Services` para que utilizaran herencia. Luego revisé cada archivo para asegurarme de que respetara la arquitectura del proyecto y que el comportamiento siguiera siendo el mismo. En los repositories verifiqué que las consultas `createAsync` y `updateAsync` conservaran su lógica específica y que los métodos comunes se heredaran correctamente. En los services comprobé que `CursosService`, `MateriasService` y `CalificacionesService` heredaran de `BaseService`, mientras que en `AlumnosService` mantuve la lógica de negocio propia, como el cálculo de la edad y la validación de la existencia del curso, eliminando únicamente la duplicación que era posible sin modificar su funcionamiento.


---
## 4. 🐛 Errores o cosas mal que detecté en la respuesta de la IA

> Si ponés "ninguno", probablemente no las viste. **Siempre** hay algo (un import de más, un estilo distinto, un caso borde olvidado, una mala práctica de seguridad).

La IA inicialmente propuso crear un BaseController, pero después de revisar la arquitectura del proyecto vimos que los controllers tenían lógica diferente y no convenía generalizarlos.
En algunos updateAsync reemplazaba valores faltantes por valores vacíos ('' o 0) en lugar de conservar los existentes. Lo corregimos utilizando previousEntity.
Tuve que verificar que los métodos heredados siguieran funcionando con arrow functions y que no fuera necesario usar super.getAllAsync(), ya que ese caso no aplicaba.
---

## 5. ✅ Verificación

Pegá el checklist de verificación del ejercicio y marcá lo que comprobaste **vos** (con qué evidencia: captura de Postman, salida de `npm test`, número de ms, etc.).

El proyecto compila correctamente.

Los endpoints GET siguen devolviendo los mismos datos.

Los endpoints POST crean correctamente los registros.

Los endpoints PUT actualizan correctamente.

Los endpoints DELETE eliminan correctamente.

Se redujo la duplicación en los repositories mediante BaseRepository.

Se redujo la duplicación en los services simples mediante BaseService.

No se modificó la arquitectura ni se incorporó ningún ORM.

Se siguió utilizando pg y SQL crudo.

---

## 6. ✍️ Reflexión (300–600 palabras)

Cubrí: qué proceso seguiste, qué decisiones tomaste y por qué, qué aprendiste, y —lo más importante— **qué corregiste de lo que te dio la IA**. Escribí con tus palabras; esto se contrasta con el oral.



### 6. ✍️ Reflexión

En este ejercicio el objetivo fue eliminar la duplicación de código utilizando herencia sin modificar el funcionamiento de la aplicación. Primero analicé cuáles eran las partes que realmente se repetían y cuáles contenían lógica específica. Con ayuda de la IA identifiqué que los repositories eran los que más código duplicaban, ya que todos implementaban los mismos métodos para obtener, buscar y eliminar registros, cambiando únicamente el nombre de la tabla.

A partir de eso creé un BaseRepository con los métodos comunes (getAllAsync, getByIdAsync y deleteByIdAsync) y luego hice que cada repository heredara de esa clase, manteniendo solamente createAsync y updateAsync, ya que esas consultas son diferentes para cada entidad. También implementé un BaseService para reutilizar los métodos de los services que solo delegaban llamadas al repository. En cambio, decidí no eliminar la lógica propia de AlumnosService, porque además de acceder al repository calcula la edad de los alumnos y valida que el curso exista, por lo que no era conveniente mover esos métodos a la clase base.

Durante el proceso tuve que revisar varias respuestas de la IA. Una de ellas proponía crear un BaseController, pero al analizar la estructura del proyecto observé que los controllers no eran tan iguales como los repositories, ya que cada uno tenía validaciones y respuestas HTTP distintas. Por ese motivo decidí no aplicar herencia en esa parte. También corregí algunos métodos updateAsync, donde inicialmente la IA reemplazaba valores faltantes por valores vacíos. En su lugar utilicé la entidad existente para conservar los datos cuando no se enviaban nuevos valores.

Este ejercicio me permitió entender mejor cuándo conviene usar herencia y cuándo no. Aprendí que reutilizar código no significa mover todo a una clase base, sino identificar correctamente qué comportamiento es realmente común. Además, comprendí la diferencia entre reutilizar código y cambiar completamente la tecnología del proyecto, por lo que mantuve el uso de pg y SQL crudo, respetando la arquitectura original.


---

## 7. 🔗 Adjuntos

- [ ] Link/PDF de la conversación completa con la IA
- [ ] Commit(s) en GitHub: `____________`
- [ ] Capturas / evidencias de verificación
