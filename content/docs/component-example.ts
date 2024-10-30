import * as React from "react";

export const componentExample: Record<string, any> = {
  default: {
    "button-demo": {
      name: "button-demo",
      component: React.lazy(
        () => import("@/registry/default/example/button-demo"),
      ),
    },
    "button-secondary": {
      name: "button-secondary",
      component: React.lazy(
        () => import("@/registry/default/example/button-secondary"),
      ),
    },
    "button-tertiary": {
      name: "button-tertiary",
      component: React.lazy(
        () => import("@/registry/default/example/button-tertiary"),
      ),
    },
    "button-ghost": {
      name: "button-ghost",
      component: React.lazy(
        () => import("@/registry/default/example/button-ghost"),
      ),
    },
    "button-danger": {
      name: "button-danger",
      component: React.lazy(
        () => import("@/registry/default/example/button-danger"),
      ),
    },
    "button-danger-tertiary": {
      name: "button-danger-tertiary",
      component: React.lazy(
        () => import("@/registry/default/example/button-danger-tertiary"),
      ),
    },
    "button-danger-ghost": {
      name: "button-danger-ghost",
      component: React.lazy(
        () => import("@/registry/default/example/button-danger-ghost"),
      ),
    },
    "button-sizes": {
      name: "button-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/button-sizes"),
      ),
    },
    "button-with-icon": {
      name: "button-with-icon",
      component: React.lazy(
        () => import("@/registry/default/example/button-with-icon"),
      ),
    },
    "button-as-child": {
      name: "button-as-child",
      component: React.lazy(
        () => import("@/registry/default/example/button-as-child"),
      ),
    },
    "accordion-demo": {
      name: "accordion-demo",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-demo"),
      ),
    },
    "accordion-align": {
      name: "accordion-align",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-align"),
      ),
    },
    "accordion-flush": {
      name: "accordion-flush",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-flush"),
      ),
    },
  },
};
