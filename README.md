
# 2025-team-D-sparc-plugins-hello-world

## Table of contents
* [Summary of functionality](#summary-of-functionality)
* [How to use the plugin](#how-to-use-the-plugin)
* [Summary of technical implementation](#summary-of-technical-implementation)


## Summary of functionality
This is a HelloWorld plugin built with `Vite and Vue 3`, designed for integration into the `SPARC App`.
It serves as a minimal example to demonstrate how to structure and develop a SPARC plugin using modern Vue tooling.

The plugin showcases the basic usage of `Pinia` for state management and `Vuetify` for UI components within the plugin environment.
It also illustrates how to configure external dependencies and expose the plugin in UMD format so it can be loaded dynamically by the host application.

This example is intended to help developers quickly get started with writing modular, maintainable plugins for the SPARC ecosystem.

## How to use the plugin
```sh
yarn
yarn build
```
## Summary of technical implementation

This plugin is developed using Vite and Vue 3, and is structured as a UMD-compatible library to allow dynamic integration with the SPARC App.

Key technical details include:

- Plugin Configuration (vite.config.ts)
    The build is configured to output a UMD module using Vite’s lib mode.
    External dependencies such as vue, pinia, and vuetify are marked as external in Rollup, ensuring they are not bundled and are instead provided by the host application.

- Named Import Replacement
    The custom plugin replaceNamedImportsFromGlobals is used to replace certain named imports (e.g., defineStore from Pinia and useTheme from Vuetify) with references to global variables, allowing runtime compatibility with the main app’s shared instances.

- Pinia Integration
    The plugin defines a simple Pinia store to demonstrate scoped state management that aligns with the host app’s store setup.

- Vuetify Integration
    Basic Vuetify components and theming APIs are used to ensure visual consistency with the SPARC App, while avoiding redundant Vuetify installations.

- Library Entry Point
    The plugin exposes a HelloWorld Vue component via the src/index.ts entry, which can be consumed by the host via the global variable defined in the build.lib.name setting.

This setup provides a clean, minimal baseline for creating SPARC-compatible plugins using the Vue ecosystem.