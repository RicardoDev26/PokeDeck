# Pokédex App

Este proyecto es una **prueba técnica** desarrollada con **React Native** y **TypeScript** que consume la **PokéAPI** para mostrar información detallada sobre distintos Pokémon.

La aplicación permite:
- **Buscar Pokémon** por nombre o número.
- **Visualizar estadísticas**, tipos, altura, peso y otros datos relevantes.
- **Guardar Pokémon en favoritos**, para acceder fácilmente a tus criaturas preferidas.

---

## Características principales
- Búsqueda en tiempo real mediante la PokéAPI.
- Sistema de favoritos persistente.
- Interfaz moderna y responsiva para dispositivos móviles.
- Manejo eficiente de estado usando `Zustand`.
- Peticiones HTTP optimizadas con `Axios` y **gestión avanzada de datos con `React Query`**.
- Animaciones fluidas mediante `LottieFiles`.

---

## Stack tecnológico
- **Framework:** React Native
- **Lenguaje:** TypeScript
- **Estado global:** Zustand
- **API:** PokéAPI
- **HTTP Client:** Axios
- **Gestión de datos / Fetching:** React Query
- **Animaciones:** LottieFiles
- **Navegación:** React Navigation

---

## Objetivo
Demostrar dominio en:
- Consumo de APIs REST.
- Manejo de estado global en aplicaciones móviles.
- Creación de interfaces interactivas y optimizadas.
- Buenas prácticas de arquitectura front-end.

# Pasos de Instalacion

```
npm install
npx expo start
```

## Dependencias principales

Estas son las dependencias principales utilizadas en el proyecto **PokéDeck** y su función:

- **[expo](https://expo.dev/)** (`~54.0.13`)  
  Framework principal para crear aplicaciones React Native de manera rápida, con soporte para iOS, Android y Web.

- **[react](https://reactjs.org/)** (`19.1.0`)  
  Biblioteca base para construir interfaces de usuario en React Native.

- **[react-native](https://reactnative.dev/)** (`0.81.4`)  
  Framework que permite construir aplicaciones nativas usando React.

- **[@react-navigation/native](https://reactnavigation.org/docs/getting-started)** (`^7.1.18`)  
  Biblioteca para manejar la navegación entre pantallas en la app.

- **[@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/)** (`^7.4.10`)  
  Permite crear pilas de navegación (stack) para moverse entre pantallas de manera secuencial.

- **[@react-navigation/material-top-tabs](https://reactnavigation.org/docs/material-top-tab-navigator/)** (`^7.3.8`)  
  Para crear pestañas superiores tipo "tab" con estilo Material Design.

- **[@tanstack/react-query](https://tanstack.com/query/latest)** (`^5.90.3`)  
  Maneja la obtención, almacenamiento en caché y sincronización de datos remotos de manera eficiente.

- **[axios](https://axios-http.com/)** (`^1.12.2`)  
  Cliente HTTP para hacer solicitudes a APIs externas, como la PokéAPI.

- **[@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)** (`2.2.0`)  
  Permite guardar datos locales persistentes, como la lista de Pokémon favoritos.

- **[lottie-react-native](https://github.com/lottie-react-native/lottie-react-native)** (`~7.3.1`)  
  Para mostrar animaciones vectoriales Lottie en la app (animaciones de carga o efectos visuales).

- **[lottie-ios](https://github.com/airbnb/lottie-ios)** (`^4.5.1`)  
  Requisito de iOS para que `lottie-react-native` funcione correctamente en dispositivos Apple.

- **[expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** (`~15.0.7`)  
  Para crear degradados de colores en componentes de la app.

- **[@expo/vector-icons](https://docs.expo.dev/guides/icons/)** (`^15.0.2`)  
  Biblioteca de íconos listos para usar en la app.

- **[react-native-tab-view](https://github.com/satya164/react-native-tab-view)** (`^4.1.3`)  
  Permite crear vistas con pestañas y manejar la animación entre ellas.

- **[react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)** (`~5.6.0`)  
  Garantiza que los contenidos no queden ocultos detrás de elementos nativos como notch, barras o bordes de pantalla.

- **[zustand](https://github.com/pmndrs/zustand)** (`^5.0.8`)  
  Librería ligera para manejar el estado global de la app (alternativa a Redux).

- **[nativewind](https://www.nativewind.dev/)** (`^2.0.11`)  
  Permite usar Tailwind CSS en React Native para estilos rápidos y consistentes.


## Tiempo total invertido

- **Desarrollo inicial:** 1 hora (configuración, estructura de carpetas, componentes base).  
- **Integración con PokéAPI y React Query:** 1 hora (fetch, caching, paginación infinita).  
- **Implementación de navegación y UI:** 5 horas (Stack Navigator, Top Tabs, SafeArea, NativeWind).  
- **Animaciones y mejoras visuales:** 2 hora (Lottie, LinearGradient, íconos).  
- **Testing y depuración:** 1 hora (Jest, pruebas unitarias, compatibilidad).  

**Total aproximado:** 10 horas.

## Decisiones Técnicas Clave

- **Combinación de Stack Navigator con Tabs Navigation:**  
  Se decidió combinar ambos tipos de navegación para mejorar la experiencia del usuario. Esto permite que el usuario pueda hacer swipe para cambiar de vista en lugar de tener que presionar botones, lo cual es más intuitivo y consistente con la mayoría de aplicaciones modernas.

- **Renderizado del Search:**  
  Se optó por mostrar una lista tipo "select" al buscar Pokémon, permitiendo al usuario elegir directamente o agregar a favoritos. Esta solución es más visualmente agradable y mejora la usabilidad.

- **Logo dinámico según el Pokémon elegido:**  
  Se implementó un logo que cambia según el Pokémon seleccionado, mejorando la experiencia visual y haciendo la aplicación más atractiva.

- **Decisiones relacionadas con la API:**  
  La API utilizada es relativamente sencilla, por lo que no se requirieron decisiones técnicas complejas en este aspecto. La mayor parte de las decisiones se enfocaron en la experiencia del usuario y la interfaz.
