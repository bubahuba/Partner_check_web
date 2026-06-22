# Documentación de privacidad y permisos de PartnerCheck

## Resumen

PartnerCheck es una aplicación de verificación de compatibilidad que te ayuda a visualizar y comparar contactos utilizando coincidencias basadas en colores. Este documento explica por qué la aplicación solicita acceso a tus contactos y cómo se manejan tus datos.

## Por qué solicitamos acceso a contactos

PartnerCheck solicita acceso **solo de lectura** a tus contactos para un propósito específico:

### Solo selección de contactos

La aplicación utiliza el selector de contactos nativo de tu dispositivo para permitirte **seleccionar manualmente** los contactos que deseas agregar a la aplicación. **NO** accedemos automáticamente, leemos ni importamos todos tus contactos. Tienes control completo sobre qué contactos se agregan.

**Qué sucede cuando otorgas el permiso:**
- La aplicación abre el selector de contactos estándar de tu dispositivo
- Navegas y seleccionas contactos individuales tú mismo
- Solo se procesa el contacto que eliges explícitamente
- La aplicación nunca accede a tus contactos sin tu acción directa

## Qué datos accedemos

Cuando seleccionas un contacto a través del selector, la aplicación accede a:

1. **Nombre del contacto** - El nombre para mostrar del contacto seleccionado
2. **Número de teléfono** - El primer número de teléfono asociado con el contacto (si está disponible)

## Qué datos almacenamos

La aplicación almacena datos **solo localmente en tu dispositivo**. Almacenamos:

1. **Nombre del contacto** - El nombre que seleccionaste
2. **Valor del color** - Un código de color numérico derivado del número de teléfono

**Importante:** **NO** almacenamos:
- El número de teléfono real
- Direcciones de correo electrónico
- Direcciones
- Cualquier otra información de contacto
- Fotos o imágenes

## Cómo se usan los números de teléfono

El número de teléfono se usa **solo** para generar un color único para visualización:

1. La aplicación extrae los últimos 6 dígitos del número de teléfono
2. Estos dígitos se convierten en un código de color hexadecimal
3. El color se usa para mostrar el contacto en la aplicación
4. **El número de teléfono en sí nunca se almacena** - solo el valor del color resultante

Esto significa:
- Cada contacto obtiene un color único y consistente basado en su número de teléfono
- El color ayuda a visualizar la compatibilidad entre contactos
- El número de teléfono original se descarta después del cálculo del color

## Almacenamiento de datos y privacidad

### Solo almacenamiento local

Todos los datos se almacenan **exclusivamente en tu dispositivo** usando almacenamiento local (SharedPreferences). Esto significa:

- ✅ Tus datos nunca salen de tu dispositivo
- ✅ No se envían datos a servidores o terceros
- ✅ No se requiere conexión a Internet para la funcionalidad principal
- ✅ Puedes eliminar todos los datos desinstalando la aplicación

### Retención de datos

- Los datos persisten en tu dispositivo hasta que elimines manualmente los contactos o desinstales la aplicación
- Puedes eliminar contactos individuales en cualquier momento a través de la interfaz de la aplicación
- Desinstalar la aplicación elimina todos los datos almacenados

## Permisos explicados

### Permiso READ_CONTACTS

**Por qué se necesita:** Para abrir el selector de contactos nativo para que puedas seleccionar contactos para agregar.

**Qué permite:**
- Abrir la interfaz del selector de contactos del sistema
- Leer solo el contacto que seleccionas explícitamente
- Leer el nombre y número de teléfono de ese contacto seleccionado

**Qué NO permite:**
- Acceder automáticamente a todos los contactos
- Leer contactos sin tu selección
- Modificar o eliminar contactos en tu libreta de direcciones
- Acceder a cualquier otra información de contacto más allá de lo que seleccionas

**Tipo de permiso:** Solo lectura (solicitamos `readonly: true`)

### Permiso WRITE_CONTACTS

**Nota:** Aunque este permiso está declarado en el manifiesto de Android para compatibilidad con la biblioteca del selector de contactos, **no escribimos, modificamos ni eliminamos contactos en tu libreta de direcciones**. La aplicación solo lee el contacto que seleccionas y almacena una cantidad mínima de datos localmente.

## Tus derechos y control

Tienes control completo sobre tus datos:

1. **Elige qué contactos agregar** - Solo se procesan los contactos que seleccionas explícitamente
2. **Elimina contactos en cualquier momento** - Elimina cualquier contacto de la aplicación en cualquier momento
3. **Revoca el permiso** - Puedes revocar el acceso a contactos en la configuración de tu dispositivo
4. **Opción de entrada manual** - Puedes agregar contactos manualmente sin usar el selector de contactos
5. **Eliminación completa de datos** - Desinstalar la aplicación elimina todos los datos almacenados

## Seguridad y mejores prácticas

- Todo el procesamiento de datos ocurre localmente en tu dispositivo
- No hay transmisión de red de datos de contacto
- No hay intercambio de datos con terceros
- Recopilación mínima de datos (solo nombre y valor de color derivado)
- Acceso a contactos solo de lectura

## Límite de contactos (versión gratuita)

La versión gratuita permite hasta 10 contactos. Este límite:
- Se aplica solo a los contactos almacenados en la aplicación
- No afecta la lista de contactos de tu dispositivo
- No limita tu capacidad de usar tus contactos en otros lugares
- Se puede mejorar comprando PartnerCheck Pro para contactos ilimitados

## Preguntas frecuentes

**P: ¿La aplicación accede a todos mis contactos?**  
R: No. La aplicación solo accede a los contactos que seleccionas explícitamente a través del selector de contactos.

**P: ¿Se envían mis datos de contacto a servidores?**  
R: No. Todos los datos permanecen en tu dispositivo. No se transmite información de contacto a través de Internet.

**P: ¿Puede la aplicación modificar mis contactos?**  
R: No. La aplicación tiene acceso solo de lectura y no modifica, elimina ni agrega contactos a tu libreta de direcciones.

**P: ¿Qué sucede si revoco el permiso de contacto?**  
R: Aún puedes usar la aplicación agregando contactos manualmente. La función del selector de contactos no estará disponible hasta que otorgues el permiso nuevamente.

**P: ¿Cómo se usa mi número de teléfono?**  
R: El número de teléfono se usa solo para calcular un código de color. El número de teléfono real nunca se almacena, solo el valor del color resultante.

**P: ¿Puedo usar la aplicación sin otorgar permiso de contacto?**  
R: Sí. Puedes agregar contactos manualmente ingresando el nombre y el número de teléfono tú mismo.

## Compromiso de transparencia

Creemos en la transparencia y la privacidad del usuario. Esta aplicación:
- Solicita los permisos mínimos necesarios para la funcionalidad
- Procesa datos localmente en tu dispositivo
- No recopila, comparte ni vende tus datos
- Te da control completo sobre qué datos se almacenan

## Contáctanos

Si tienes preguntas sobre privacidad o manejo de datos, contáctanos a través de los canales de soporte de la aplicación.

---

**Última actualización:** 25.06.2026  
**Versión de la aplicación:** PartnerCheck  
**Plataformas:** iOS, Android
