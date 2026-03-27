BRIEF DE FUNCIONALIDADES BIGDAM
Proyecto: E-commerce BigDam Web y App
Cliente: BigDam
Fecha: Marzo / 2026
Versión: 1.0

ÍNDICE DE CONTENIDOS
ÍNDICE DE CONTENIDOS	1
INTRODUCCIÓN	3
OBJETIVOS DEL PROYECTO	4
Objetivos de negocio	4
Objetivos de experiencia de usuario	4
USUARIOS DE LA PLATAFORMA	5
Tipos de usuario	5
Diferencias en comportamiento de compra	6
PROPUESTA DE VALOR	6
Principales atributos de la experiencia	6
ARQUITECTURA GENERAL	7
Componentes principales del ecosistema	7
FUNCIONALIDADES REQUERIDAS	8
Gestión de usuarios y accesos	8
Catálogo y visualización de productos	9
Búsqueda de productos	9
Carrito de compra y checkout	10
Pagos	10
Pedidos e historial de compra	11
Promociones, descuentos y condiciones comerciales	11
Logística y seguimiento de entrega	11
Inteligencia comercial y recuperación de oportunidades	12
Contenidos y comunicación	12
Panel de administración	12
Integración con sistema interno y servicios externos	13
PANTALLAS SUGERIDAS	13
Pantalla de Inicio / Home	14
Secciones requeridas	14
Comentarios adicionales para diseño o desarrollo	14
Pantalla de Catálogo de productos	15
Secciones requeridas	15
Comentarios adicionales para diseño o desarrollo	15
Pantalla de Ficha de producto	16
Secciones requeridas	16
Comentarios adicionales para diseño o desarrollo	16
Pantalla de Carrito de compras	17
Secciones requeridas	17
Comentarios adicionales para diseño o desarrollo	17
Pantalla de Checkout / Proceso de pago	18
Secciones requeridas	18
Comentarios adicionales para diseño o desarrollo	18
Pantalla de Confirmación de pedido	19
Secciones requeridas	19
Comentarios adicionales para diseño o desarrollo	19
Pantalla de Historial de pedidos	19
Secciones requeridas	19
Comentarios adicionales para diseño o desarrollo	20
Pantalla de Detalle de pedido	20
Secciones requeridas	20
Comentarios adicionales para diseño o desarrollo	20
Pantalla de Resultados de búsqueda	21
Secciones requeridas	21
Comentarios adicionales para diseño o desarrollo	21
Pantalla de Búsqueda por vehículo	21
Secciones requeridas	22
Comentarios adicionales para diseño o desarrollo	22
INTEGRACIONES REQUERIDAS	22
Integración con sistema ERP / sistema interno	23
Datos a consumir desde el sistema interno	23
Datos a enviar al sistema interno	23
Integración con métodos de pago	23
Integración con servicios de mensajería y notificaciones	24
Integración con servicios logísticos	24
Consideraciones generales de integración	24

INTRODUCCIÓN
El presente Brief de Funcionalidades tiene como objetivo definir de manera estructurada las capacidades que deberá contemplar la plataforma digital de BigDam, compuesta por un sitio web de e-commerce y una app móvil. Este documento servirá como guía para alinear a los equipos de negocio, diseño UX/UI y desarrollo en torno al alcance funcional del producto digital.
El proyecto surge como parte del proceso de modernización del modelo comercial de BigDam, una empresa con más de 30 años de experiencia en la importación y distribución de repuestos y accesorios para vehículos. Actualmente, una parte significativa de las consultas y ventas se gestiona de manera manual a través de canales como WhatsApp, lo que genera limitaciones operativas, tiempos de respuesta variables y dificultades para escalar la atención a nuevos clientes. 
En este contexto, la plataforma digital busca convertirse en un canal estructurado de consulta, cotización y compra de repuestos, permitiendo a clientes mayoristas, promotores, talleres mecánicos y usuarios finales acceder de forma directa al catálogo de productos, verificar disponibilidad de stock y concretar pedidos de manera más ágil.
Además de facilitar la compra, el proyecto pretende ampliar el alcance comercial del negocio, mejorar la eficiencia en la atención al cliente y sentar las bases para futuras expansiones del ecosistema digital de la empresa. La plataforma deberá reflejar los valores que distinguen a BigDam en el mercado: confianza, calidad de producto, rapidez en la atención y respaldo comercial.
Este documento presenta la estructura funcional inicial del sistema, incluyendo los principales módulos, capacidades del producto y lineamientos generales que orientarán el diseño de la experiencia y la construcción técnica de la plataforma.

OBJETIVOS DEL PROYECTO
El desarrollo de la plataforma digital de BigDam busca consolidar un canal de venta moderno que permita escalar la operación comercial de la empresa y mejorar la experiencia de compra de sus clientes. A través de una solución de e-commerce web y app móvil, el proyecto pretende transformar procesos actualmente manuales en una experiencia digital más eficiente, accesible y confiable.
Objetivos de negocio
Ampliar el alcance comercial del negocio, permitiendo atender tanto clientes mayoristas como clientes finales desde una plataforma digital.
Incrementar las oportunidades de venta, reduciendo la dependencia de consultas manuales gestionadas por WhatsApp o asesores.
Recuperar oportunidades comerciales perdidas, facilitando la consulta directa del catálogo y el seguimiento de pedidos.
Expandir la cobertura geográfica, habilitando ventas a nuevas regiones e incluso mercados internacionales.
Optimizar la eficiencia operativa, automatizando procesos de consulta de productos, cotización y confirmación de pedidos.
Objetivos de experiencia de usuario
Facilitar la identificación del repuesto correcto, mediante herramientas de búsqueda avanzadas basadas en código, características del vehículo u otros criterios relevantes.
Reducir fricciones en el proceso de compra, permitiendo que los usuarios consulten stock, precios y disponibilidad en tiempo real.
Ofrecer una experiencia de navegación clara y eficiente, alineada con las expectativas de usuarios que ya utilizan plataformas de comercio electrónico.
Transmitir confianza y respaldo, reflejando la calidad de los productos y la formalidad de la operación de BigDam.
Construir una experiencia digital ágil y moderna, que permita consultar, cotizar y comprar repuestos de forma rápida y segura.

USUARIOS DE LA PLATAFORMA
La plataforma digital de BigDam estará diseñada para atender a distintos tipos de clientes que actualmente interactúan con la empresa a través de canales presenciales, asesores comerciales o mensajería. Cada uno de estos perfiles presenta comportamientos, necesidades y condiciones comerciales distintas, lo que requiere que el sistema contemple tipos de usuario diferenciados y reglas comerciales específicas. 
Tipos de usuario
Los principales perfiles de usuario identificados para la plataforma son:
Clientes mayoristas: Empresas o comerciantes que compran repuestos en grandes volúmenes para su reventa. Este tipo de cliente suele tener relaciones comerciales recurrentes con la empresa y condiciones de precio diferenciadas.
Promotores o intermediarios: Personas o negocios que adquieren productos de BigDam para comercializarlos a través de sus propios canales o redes de clientes. En algunos casos pueden contar con condiciones comerciales especiales o acceso a crédito de corto plazo.
Talleres mecánicos: Negocios que compran repuestos para realizar reparaciones o mantenimiento de vehículos de sus propios clientes. Suelen realizar compras frecuentes de determinados productos.
Clientes finales: Propietarios de vehículos que requieren un repuesto específico para una reparación puntual. Generalmente compran por unidad o en cantidades pequeñas y presentan una frecuencia de compra más ocasional.
Diferencias en comportamiento de compra
Existen diferencias relevantes entre los distintos perfiles de usuario que deberán ser consideradas en el diseño de la plataforma:
Volumen de compra: Los mayoristas y promotores suelen comprar grandes cantidades, mientras que los clientes finales compran productos individuales.
Sensibilidad al precio: Los clientes mayoristas suelen negociar descuentos o precios preferenciales, mientras que el cliente final compra principalmente por necesidad inmediata.
Frecuencia de compra: Los mayoristas, promotores y talleres mecánicos tienden a realizar compras recurrentes, mientras que los clientes finales compran de forma ocasional.

PROPUESTA DE VALOR
La plataforma digital de BigDam deberá trasladar al entorno online los atributos que actualmente caracterizan la relación comercial de la empresa con sus clientes: confianza, calidad de producto, respaldo técnico y atención eficiente. El objetivo es construir una experiencia que facilite la compra de repuestos y que, al mismo tiempo, refuerce el posicionamiento de la empresa como un proveedor confiable dentro del mercado.
En este sentido, la experiencia digital deberá enfocarse en simplificar la búsqueda y adquisición de repuestos, permitiendo que los usuarios encuentren rápidamente el producto adecuado para su vehículo, consulten disponibilidad de stock en tiempo real y realicen pedidos de manera ágil.
Principales atributos de la experiencia
Confianza. La plataforma debe transmitir seguridad en la calidad y autenticidad de los productos, reforzando el respaldo que la empresa ofrece frente a repuestos falsificados o de baja calidad presentes en el mercado.
Rapidez y eficiencia. El sistema debe permitir consultas rápidas de productos, disponibilidad y precios, reduciendo los tiempos de respuesta que actualmente dependen de la atención manual de los asesores.
Especialización técnica. La experiencia debe facilitar la identificación precisa del repuesto correcto, incorporando herramientas de búsqueda que consideren códigos de producto, compatibilidad con vehículos y otras variables técnicas relevantes.
Acceso directo al catálogo. Los usuarios deben poder explorar el catálogo completo de productos, visualizar información relevante y tomar decisiones de compra sin depender exclusivamente de la intervención de un asesor.
Respaldo y postventa. La plataforma debe reflejar el compromiso de la empresa con la garantía y el soporte al cliente, fortaleciendo la percepción de formalidad y respaldo comercial.

ARQUITECTURA GENERAL
La solución digital de BigDam se concibe como un ecosistema compuesto por varios componentes interconectados, orientados a soportar la consulta, cotización, compra y gestión operativa de productos. Su arquitectura deberá permitir una experiencia coherente para distintos tipos de usuario, al mismo tiempo que asegura integración con el sistema interno de la empresa para mantener actualizada la información comercial y operativa. 
Componentes principales del ecosistema
Web e-commerce
Será el canal principal de consulta y compra digital. Permitirá explorar el catálogo, buscar productos, visualizar fichas, gestionar el carrito, realizar pagos y hacer seguimiento de pedidos.
Aplicación móvil
Complementará la experiencia digital desde dispositivos móviles, replicando las funcionalidades esenciales del e-commerce y facilitando una interacción más frecuente y directa con clientes que prefieren operar desde una app. 
Panel de administración
Estará orientado a la gestión interna del canal digital. Deberá permitir administrar usuarios, productos, catálogos, promociones, cupones, clientes, sucursales y reportes, además de controlar la visibilidad de la información publicada en la plataforma. 
ERP / sistema interno
Corresponde al sistema de gestión actual de BigDam, desde donde se administran inventario, ventas, compras, contabilidad e importaciones. Este sistema funcionará como fuente central de datos para stock, precios, códigos de producto y condiciones comerciales. 

FUNCIONALIDADES REQUERIDAS
Las funcionalidades de la plataforma deberán responder tanto a las necesidades comerciales de BigDam como a los requerimientos de operación del canal digital. En conjunto, estas capacidades deberán permitir que los distintos tipos de usuario puedan registrarse, consultar productos, validar disponibilidad, comprar y dar seguimiento a sus pedidos, mientras el negocio mantiene control sobre la información, las reglas comerciales y la operación del e-commerce.
Gestión de usuarios y accesos
La plataforma deberá permitir el registro e inicio de sesión de usuarios, ya que parte de la experiencia y de las condiciones comerciales dependerán del perfil del cliente. El sistema deberá reconocer al usuario autenticado para mostrar precios, descuentos y condiciones acordes a su categoría. 
Funciones principales:
Registro de nuevos usuarios.
Inicio de sesión con usuario y contraseña.
Recuperación de contraseña.
Gestión de perfil de usuario.
Identificación de tipo de cliente.
Aplicación de permisos y condiciones comerciales según perfil.
Posible validación o aprobación manual para usuarios con condiciones especiales, como mayoristas o promotores. 
Catálogo y visualización de productos
La plataforma deberá ofrecer acceso al catálogo digital de productos, permitiendo visualizar información clara y suficiente para facilitar la identificación y compra del repuesto correcto. Esta información deberá integrarse con la base de productos ya estructurada en el sistema interno. 
Funciones principales:
Navegación por categorías, grupos y subgrupos.
Visualización de listado de productos.
Visualización de ficha de producto.
Despliegue de imágenes, descripción, precio y stock.
Visualización de información relevante definida por el negocio.
Asociación de productos con marca, modelo y año del vehículo.
Manejo de códigos internos, comerciales y equivalencias.
Búsqueda de productos
La búsqueda será una funcionalidad crítica, dado que gran parte del valor de la plataforma radica en facilitar la identificación precisa del repuesto. Por ello, el sistema deberá contemplar distintos criterios de búsqueda y evolucionar hacia capacidades más avanzadas.
Funciones principales:
Búsqueda por código de producto.
Búsqueda por código OEM o fabricante.
Búsqueda por marca, modelo y año del vehículo.
Búsqueda por número de chasis o VIN, si se implementa en fases posteriores.
Sugerencias predictivas en buscador.
Tolerancia a errores ortográficos o búsqueda semántica.
Posibilidad futura de búsqueda por imagen o fotografía del repuesto.
Carrito de compra y checkout
La plataforma deberá permitir que el usuario seleccione productos, arme su pedido y complete el proceso de compra de forma clara y ágil, reduciendo la dependencia de la cotización manual actual.
Funciones principales:
Agregar productos al carrito.
Editar cantidades dentro del carrito.
Eliminar productos del carrito.
Visualizar el resumen del pedido.
Aplicar descuentos, promociones o cupones.
Seleccionar método de entrega o retiro, según corresponda.
Confirmar el pedido.
Ejecutar el flujo de checkout.
Pagos
La solución deberá contemplar pagos online como parte del flujo transaccional del e-commerce, integrando los métodos definidos por el negocio y asegurando consistencia con el proceso de facturación y registro operativo.
Funciones principales:
Pago mediante QR.
Pago con tarjeta de débito.
Pago con tarjeta de crédito.
Posibilidad de habilitar medios de pago internacionales (como paypal)
Confirmación del estado de pago.
Envío de información de pago al sistema interno.
Consideración de estándares de seguridad exigidos por el integrador de pagos. 
Pedidos e historial de compra
La plataforma deberá permitir al usuario consultar sus pedidos y dar seguimiento a su estado, aportando mayor visibilidad al proceso y reduciendo consultas operativas al equipo comercial.
Funciones principales:
Confirmación de pedido realizado.
Visualización de historial de compras.
Acceso al detalle de cada pedido.
Visualización del estado del pedido.
Reordenar compras anteriores, especialmente para clientes recurrentes.
Seguimiento de pedidos en curso, entregados, cancelados o rechazados. 
Promociones, descuentos y condiciones comerciales
Dado que BigDam opera con precios diferenciados y reglas comerciales según perfil de cliente, el sistema deberá permitir una gestión flexible de promociones y descuentos, tanto automáticos como administrados desde el negocio.
Funciones principales:
Precios diferenciados por tipo de cliente.
Descuentos por volumen.
Parametrización de condiciones comerciales.
Gestión de promociones por tiempo limitado.
Gestión de cupones de descuento.
Aplicación automática de reglas comerciales en el proceso de compra.
Logística y seguimiento de entrega
En la medida en que el proyecto contempla crecimiento nacional e incluso internacional, será importante que la plataforma pueda gestionar información logística y dar visibilidad al estado de envío del pedido. Parte de estas capacidades dependerán de integraciones externas. 
Funciones principales:
Selección o definición de modalidad de entrega.
Consulta de costos de envío, si se integra con couriers.
Seguimiento del estado de despacho.
Visualización textual del avance del pedido.
Posibilidad futura de tracking geolocalizado, sujeto a integración con proveedores logísticos. 
Inteligencia comercial y recuperación de oportunidades
La plataforma no solo deberá facilitar la compra, sino también aportar capacidades para recuperar oportunidades de venta y fortalecer la relación con el cliente después de la interacción inicial.
Funciones principales:
Recuperación de carritos abandonados.
Envío de notificaciones por correo o WhatsApp.
Registro de acciones del cliente dentro de la plataforma.
Base para acciones posteriores de marketing digital.
Posibilidad de incorporar reseñas, calificaciones y evidencia social en etapas posteriores. 
Contenidos y comunicación
Además del catálogo comercial, la plataforma podrá incorporar contenido complementario que ayude a posicionar a BigDam como referente técnico y a enriquecer la relación con sus públicos. 
Funciones principales:
Publicación de contenido educativo o informativo.
Espacios para novedades, recomendaciones o contenidos de valor.
Posibilidad de incorporar información sobre capacitaciones o cursos.
Panel de administración
El ecosistema deberá contar con un panel de administración que permita gestionar la operación digital sin depender exclusivamente del sistema transaccional del usuario final. Este módulo será clave para administrar productos, usuarios, promociones, sucursales y visibilidad del e-commerce. 
Funciones principales:
Gestión de usuarios y perfiles administrativos.
Gestión de empresas, sucursales o almacenes virtuales.
Gestión de productos y catálogos visibles en el e-commerce.
Carga y administración de imágenes e información complementaria.
Gestión de promociones y cupones.
Gestión de clientes.
Registro de logs o historial de cambios.
Control de la información visible en web y app.
Visualización de reportes y dashboards operativos. 
Integración con sistema interno y servicios externos
Para que la plataforma funcione de forma consistente con la operación del negocio, será indispensable la integración con el ERP y con servicios externos necesarios para pagos, mensajería y, eventualmente, logística.
Funciones principales:
Consulta de stock en tiempo real.
Consulta de precios según perfil.
Consumo de datos de productos, códigos y catálogos.
Envío de pedidos al sistema interno.
Envío de datos de cliente para registro y facturación.
Integración con métodos de pago.
Integración con motores de envío de correo y mensajería.
Posible integración futura con operadores logísticos.

PANTALLAS SUGERIDAS
Las siguientes pantallas representan las interfaces principales que deberán diseñarse para la plataforma digital de BigDam. Cada pantalla deberá contemplar su adaptación tanto para web e-commerce como para aplicaciones móviles, manteniendo paridad funcional entre plataformas y ajustando la interfaz a las características de cada dispositivo.

Pantalla de Inicio / Home
La pantalla de inicio funciona como el punto principal de entrada a la plataforma, permitiendo al usuario acceder rápidamente al catálogo de productos, realizar búsquedas de repuestos y visualizar información destacada del e-commerce.
Desde esta pantalla el usuario debe poder:
Acceder al buscador principal de productos.
Navegar hacia categorías o grupos de repuestos.
Visualizar productos destacados o promociones.
Acceder a su cuenta, carrito de compras e historial de pedidos.
En el caso de usuarios autenticados, la pantalla puede mostrar recomendaciones o accesos rápidos basados en su historial de compra.
Secciones requeridas
Barra de navegación principal (logo, acceso a cuenta, carrito).
Buscador principal de productos.
Banner o carrusel de promociones.
Acceso rápido a categorías principales de productos.
Sección de productos destacados o más vendidos.
Acceso a promociones o descuentos vigentes.
Acceso a contenido informativo o novedades.
Pie de página con enlaces institucionales y de soporte.
Comentarios adicionales para diseño o desarrollo
El buscador debe tener alta visibilidad, ya que la mayoría de los usuarios buscará directamente el repuesto que necesita.
En aplicaciones móviles, la navegación deberá priorizar accesos rápidos mediante barra inferior o menú simplificado.
La estructura deberá permitir incorporar futuras funcionalidades como búsqueda por imagen o recomendaciones personalizadas.

Pantalla de Catálogo de productos
Esta pantalla permite al usuario explorar el catálogo completo de productos, navegar por categorías y visualizar resultados según diferentes criterios de búsqueda.
El usuario debe poder:
Navegar entre categorías y subcategorías de productos.
Visualizar listados de productos disponibles.
Aplicar filtros para refinar la búsqueda.
Acceder a la ficha de detalle de cada producto.
La pantalla debe permitir una navegación clara para catálogos amplios, facilitando la identificación rápida del repuesto correcto.
Secciones requeridas
Encabezado con navegación y buscador.
Breadcrumb o indicador de navegación por categorías.
Panel de filtros (categoría, marca, compatibilidad, precio u otros criterios).
Listado de productos en formato de tarjetas.
Información básica del producto (nombre, imagen, precio, disponibilidad).
Paginación o scroll infinito de resultados.
Comentarios adicionales para diseño o desarrollo
En web, los filtros pueden presentarse en una barra lateral para facilitar la exploración de catálogos extensos.
En aplicaciones móviles, los filtros deberán mostrarse mediante panel desplegable o modal.
El sistema deberá soportar búsqueda por códigos de producto, códigos OEM o criterios de compatibilidad con vehículos.
Se recomienda considerar mecanismos de optimización para el rendimiento cuando se manejen grandes volúmenes de productos.

Pantalla de Ficha de producto
La ficha de producto permite al usuario consultar el detalle completo de un repuesto antes de tomar una decisión de compra. Desde esta pantalla el usuario debe poder validar si el producto corresponde a su necesidad y agregarlo al carrito.
El usuario debe poder:
Visualizar imágenes del producto.
Consultar la descripción y características del repuesto.
Ver el precio correspondiente a su perfil de cliente.
Consultar disponibilidad de stock.
Agregar el producto al carrito.
Esta pantalla cumple un rol clave para reducir errores en la selección de repuestos y facilitar la identificación del producto correcto.
Secciones requeridas
Galería de imágenes del producto.
Nombre del producto.
Código comercial del producto.
Información de compatibilidad con vehículos (si aplica).
Descripción técnica del producto.
Precio del producto.
Disponibilidad de stock.
Selector de cantidad.
Botón de agregar al carrito.
Productos relacionados o recomendados.
Comentarios adicionales para diseño o desarrollo
En web se recomienda mostrar imágenes ampliables para facilitar la revisión del producto.
En móvil se prioriza una visualización vertical optimizada para scroll.
La información de compatibilidad con vehículos debe tener buena visibilidad para evitar compras incorrectas.
El sistema debe contemplar precios dinámicos según tipo de cliente.

Pantalla de Carrito de compras
La pantalla de carrito permite al usuario revisar los productos seleccionados antes de realizar el pago, pudiendo modificar el pedido o eliminar productos si es necesario.
El usuario debe poder:
Visualizar el listado de productos agregados.
Modificar la cantidad de unidades.
Eliminar productos del carrito.
Consultar el subtotal del pedido.
Aplicar cupones o promociones si corresponde.
Continuar hacia el proceso de pago.
Secciones requeridas
Listado de productos agregados al carrito.
Imagen y nombre de cada producto.
Precio unitario.
Selector de cantidad.
Subtotal por producto.
Subtotal general del pedido.
Campo para aplicar cupones o descuentos.
Botón para continuar al checkout.
Comentarios adicionales para diseño o desarrollo
En web es recomendable mostrar el resumen completo del pedido en una sola vista.
En móvil se prioriza una estructura vertical simplificada.
El sistema deberá recalcular automáticamente el subtotal al modificar cantidades.
Debe contemplarse la posibilidad de recuperación de carritos abandonados.

Pantalla de Checkout / Proceso de pago
La pantalla de checkout permite al usuario confirmar su pedido y completar el pago, registrando los datos necesarios para la facturación y el despacho del producto.
El flujo debe ser claro, breve y seguro para minimizar el abandono en el proceso de compra.
El usuario debe poder:
Confirmar los productos del pedido.
Ingresar o confirmar datos de contacto.
Seleccionar modalidad de entrega o retiro.
Elegir el método de pago.
Confirmar la compra.
Secciones requeridas
Resumen del pedido.
Datos del cliente.
Información de facturación.
Modalidad de entrega o retiro.
Selección de método de pago (QR, tarjeta u otros).
Confirmación de compra.
Comentarios adicionales para diseño o desarrollo
Se recomienda dividir el proceso en pasos claros o secciones progresivas para mejorar la experiencia.
El sistema deberá integrarse con las pasarelas de pago definidas por el negocio.
Es importante mostrar mensajes claros de validación o error durante el proceso.
Deben contemplarse estándares de seguridad asociados al manejo de pagos.

Pantalla de Confirmación de pedido
Esta pantalla confirma que el pedido fue procesado correctamente y entrega al usuario un resumen de la transacción.
El usuario debe poder:
Confirmar que el pedido fue registrado.
Consultar el número de pedido.
Ver el resumen de productos comprados.
Acceder al seguimiento del pedido.
Secciones requeridas
Mensaje de confirmación de compra.
Número de pedido.
Resumen del pedido.
Información de contacto o soporte.
Acceso al historial de pedidos.
Comentarios adicionales para diseño o desarrollo
Es recomendable enviar simultáneamente una confirmación por correo electrónico o notificación.
La pantalla debe ofrecer acceso directo al seguimiento del pedido.

Pantalla de Historial de pedidos
Esta pantalla permite al usuario consultar todos los pedidos realizados dentro de la plataforma, facilitando el seguimiento de compras anteriores y la posibilidad de repetir pedidos.
El usuario debe poder:
Visualizar el listado de pedidos realizados.
Consultar el estado de cada pedido.
Acceder al detalle de cada compra.
Secciones requeridas
Listado de pedidos.
Número de pedido.
Fecha de compra.
Estado del pedido.
Total del pedido.
Acceso al detalle del pedido.
Comentarios adicionales para diseño o desarrollo
Esta funcionalidad es especialmente útil para clientes recurrentes como talleres o mayoristas.
Se puede considerar la opción de reordenar pedidos anteriores.

Pantalla de Detalle de pedido
La pantalla de detalle de pedido permite al usuario consultar información completa de un pedido específico, incluyendo productos comprados, estado del despacho y datos de entrega.
El usuario debe poder:
Revisar el listado de productos del pedido.
Consultar el estado del despacho.
Ver información de entrega o retiro.
Secciones requeridas
Información general del pedido.
Listado de productos incluidos.
Estado del pedido.
Información de envío o retiro.
Datos de facturación.
Comentarios adicionales para diseño o desarrollo
El sistema deberá sincronizar esta información con el sistema interno de la empresa.
En fases posteriores se podría incorporar tracking logístico más detallado.

Pantalla de Resultados de búsqueda
Esta pantalla muestra los productos que coinciden con la búsqueda realizada por el usuario, ya sea mediante código de producto, palabra clave, marca del vehículo u otros criterios. El objetivo es permitir al usuario identificar rápidamente el repuesto que necesita dentro de un listado organizado de resultados.
El usuario debe poder:
Visualizar los productos encontrados.
Refinar la búsqueda mediante filtros.
Ordenar resultados según diferentes criterios.
Acceder a la ficha de detalle de cada producto.
Secciones requeridas
Encabezado con buscador activo.
Indicador del término o criterio de búsqueda.
Panel de filtros (categoría, marca, compatibilidad, precio u otros).
Listado de productos en formato de tarjetas.
Información básica del producto (imagen, nombre, precio, disponibilidad).
Opciones de ordenamiento (relevancia, precio, popularidad).
Paginación o scroll infinito.
Comentarios adicionales para diseño o desarrollo
El sistema debe permitir búsqueda tolerante a errores ortográficos.
Se recomienda incluir sugerencias automáticas mientras el usuario escribe.
En aplicaciones móviles, los filtros deberán mostrarse mediante panel desplegable o modal.

Pantalla de Búsqueda por vehículo
Esta pantalla permite al usuario identificar repuestos compatibles con un vehículo específico, reduciendo errores en la selección del producto.
El usuario debe poder:
Seleccionar la marca del vehículo.
Seleccionar el modelo.
Seleccionar el año.
Visualizar los repuestos compatibles con ese vehículo.
Este tipo de búsqueda es especialmente útil para usuarios que no conocen el código exacto del repuesto.
Secciones requeridas
Selector de marca de vehículo.
Selector de modelo.
Selector de año o generación.
Botón de búsqueda.
Acceso a resultados de productos compatibles.
Comentarios adicionales para diseño o desarrollo
Los selectores deben funcionar de forma jerárquica (marca → modelo → año).
Se recomienda permitir la búsqueda también mediante VIN o número de chasis en fases futuras.
Esta funcionalidad puede integrarse directamente en el buscador principal del sistema.

INTEGRACIONES REQUERIDAS
Para que la plataforma digital de BigDam funcione de forma consistente con la operación actual del negocio, será necesario integrarla con el sistema interno de la empresa y con servicios externos que soporten procesos clave como pagos, mensajería y, en etapas posteriores, logística. Estas integraciones serán fundamentales para asegurar que la información comercial, operativa y transaccional se mantenga actualizada y sincronizada entre todos los componentes del ecosistema digital.
Integración con sistema ERP / sistema interno
La integración principal deberá realizarse con el sistema interno de BigDam, identificado como la plataforma que actualmente administra inventario, ventas, compras, contabilidad e importaciones. Esta integración permitirá que la web, la app y el panel de administración operen sobre información vigente y alineada con la operación real del negocio. 
Datos a consumir desde el sistema interno
La nueva plataforma deberá consultar, como mínimo, la siguiente información:
Stock o inventario en tiempo real.
Precios según tipo de cliente.
Condiciones comerciales y reglas asociadas al usuario.
Códigos de producto, equivalencias y referencias internas.
Información base del catálogo de productos.
Datos asociados a clientes, según se defina en la integración.
Datos a enviar al sistema interno
La plataforma deberá registrar en el sistema actual la información generada desde el canal digital, incluyendo:
Datos del cliente registrado.
Información del pedido.
Confirmación de compra.
Datos necesarios para facturación.
Estado de pago.
Información relacionada con despacho o entrega. 
Integración con métodos de pago
La plataforma deberá integrarse con los medios de pago definidos por el negocio para soportar el flujo de compra digital. Estas integraciones permitirán validar transacciones, confirmar pagos y registrar el estado de la operación dentro del sistema.
Métodos mencionados:
Pago mediante QR.
Tarjeta de débito.
Tarjeta de crédito.
Posibles medios de pago internacionales, según definición posterior.
Integración con servicios de mensajería y notificaciones
Para soportar funciones de comunicación automatizada, la plataforma deberá contemplar integración con herramientas de envío de mensajes, correos y notificaciones.
Estas integraciones podrán utilizarse para:
Confirmación de registro.
Confirmación de pedido.
Avisos de estado de compra.
Recuperación de carritos abandonados.
Acciones comerciales o promocionales. 
El alcance menciona como referencia motores de envío masivo de correo y plataformas de mensajería por WhatsApp, aunque la herramienta final deberá definirse según decisión del cliente. 
Integración con servicios logísticos
En una fase más avanzada, la plataforma podrá contemplar integraciones con operadores logísticos o couriers para calcular costos de envío y dar seguimiento al estado del despacho. Estas capacidades dependerán de los acuerdos que BigDam establezca con proveedores de logística y de la disponibilidad de sus APIs. 
Capacidades esperadas a futuro:
Consulta de costo de envío.
Visualización de estado de despacho.
Integración con proveedores de última milla o courier internacional.
Posibilidad de seguimiento más detallado del trayecto del pedido. 
Consideraciones generales de integración
Dado que la plataforma deberá operar con información sensible para el negocio, las integraciones deberán definirse considerando criterios de estabilidad, seguridad y consistencia de datos. En particular, será importante asegurar:
sincronización confiable de stock y precios
correcta identificación del tipo de cliente
trazabilidad de pedidos y pagos
compatibilidad con los procesos administrativos y de facturación vigentes.

