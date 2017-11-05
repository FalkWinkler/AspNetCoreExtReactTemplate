# Asp .Net Core mit Ext-React

Das ist ein Projekttemplate für Asp .Net core Projeke mit React und [ExtJs](https://www.sencha.com/products/extreact/#app).

## Was ist ExtReact

Bei Sencha gibt es ein eigenes Produkt Ext-React welches eine eigene Lizenz hat. Für Entwickler die eine Ext-Js Lizenz haben gibt es Ext-Reactor wecher mit Ext-Js SDK arbeitet.

- Beispiel mit ExtReact Lizenz
  ```jsx
  import React, { Component } from 'react';
  import { Container } from '@extjs/ext-react';

  export default function Layout {

        return (
            <Container layout="fit" fullscreen>
            </Container>
        )
    }
  ```

- Beispiel Beispiel mit Ext-Js Lizenz
  ```typescript
  import React, { Component } from 'react';
  import { Container } from '@extjs/reactor/modern';

  export default function Layout {

      return (
          <Container layout="fit" fullscreen>
          </Container>
      )
  }
  ```

## Einstellungen für Ext-React mit Ext-Js Sdk

Die Javascript Komponenten werden mit webpack erstellt. Hier muss eine 'webpack.config.js' Konfiguration im Projekt liegen. In dieser Datei ist von sencha ein Erweiterung  ExtReactWebpackPlugin.

- ExtReactWebpackPlugin Konfiguration mit SDK
  ```javascript
  new ExtReactWebpackPlugin({
                  sdk: 'ext', // you need to copy the Ext JS SDK to the root of this package, or you can specify a full path to some other location
                  toolkit: 'modern',
                // theme: 'custom-ext-react-theme',
                // overrides: ['./clientApp/ext-react/overrides'],
                  packages: [],
                  production: isProd,
                  output: "./dist"
              }),
  ```
Die Property 'sdk' sagt das das Extjs Sdk verwendet wird und wo. Hierfür muss auf der Ebenene der webpack Konfigation ein Link zum Sdk erstellt werden, zum npm package mit dem Sdk sollte auch gehen.

- Link zum Sdk erstellen
```shell
  mklink ext /J d:\extjs-sdk
```

## Dependency injection

### [Implementing Angular's Dependency Injection in React. Understanding Element Injectors](http://blog.mgechev.com/2017/01/30/implementing-dependency-injection-react-angular-element-injectors)