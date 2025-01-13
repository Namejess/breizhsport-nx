/*eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  