/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as BlogImport } from "./routes/blog";
import { Route as AuthenticatedImport } from "./routes/_authenticated";
import { Route as IndexImport } from "./routes/index";
import { Route as AuthenticatedAdminLayoutImport } from "./routes/_authenticated/_adminLayout";

// Create Virtual Routes

const LoginLazyImport = createFileRoute("/login")();
const AuthenticatedAdminLayoutAdminIndexLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/",
)();
const AuthenticatedAdminLayoutAdminUsersIndexLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/users/",
)();
const AuthenticatedAdminLayoutAdminArticlesIndexLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/articles/",
)();
const AuthenticatedAdminLayoutAdminUsersCreateLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/users/create",
)();
const AuthenticatedAdminLayoutAdminArticlesCreateLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/articles/create",
)();
const AuthenticatedAdminLayoutAdminUsersEditIdLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/users/edit/$id",
)();
const AuthenticatedAdminLayoutAdminUsersDeleteIdLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/users/delete/$id",
)();
const AuthenticatedAdminLayoutAdminArticlesEditIdLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/articles/edit/$id",
)();
const AuthenticatedAdminLayoutAdminArticlesDeleteIdLazyImport = createFileRoute(
  "/_authenticated/_adminLayout/admin/articles/delete/$id",
)();

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  path: "/login",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/login.lazy").then((d) => d.Route));

const BlogRoute = BlogImport.update({
  path: "/blog",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedRoute = AuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedAdminLayoutRoute = AuthenticatedAdminLayoutImport.update({
  id: "/_adminLayout",
  getParentRoute: () => AuthenticatedRoute,
} as any);

const AuthenticatedAdminLayoutAdminIndexLazyRoute =
  AuthenticatedAdminLayoutAdminIndexLazyImport.update({
    path: "/admin/",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import("./routes/_authenticated/_adminLayout/admin/index.lazy").then(
      (d) => d.Route,
    ),
  );

const AuthenticatedAdminLayoutAdminUsersIndexLazyRoute =
  AuthenticatedAdminLayoutAdminUsersIndexLazyImport.update({
    path: "/admin/users/",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import("./routes/_authenticated/_adminLayout/admin/users/index.lazy").then(
      (d) => d.Route,
    ),
  );

const AuthenticatedAdminLayoutAdminArticlesIndexLazyRoute =
  AuthenticatedAdminLayoutAdminArticlesIndexLazyImport.update({
    path: "/admin/articles/",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import(
      "./routes/_authenticated/_adminLayout/admin/articles/index.lazy"
    ).then((d) => d.Route),
  );

const AuthenticatedAdminLayoutAdminUsersCreateLazyRoute =
  AuthenticatedAdminLayoutAdminUsersCreateLazyImport.update({
    path: "/admin/users/create",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import("./routes/_authenticated/_adminLayout/admin/users/create.lazy").then(
      (d) => d.Route,
    ),
  );

const AuthenticatedAdminLayoutAdminArticlesCreateLazyRoute =
  AuthenticatedAdminLayoutAdminArticlesCreateLazyImport.update({
    path: "/admin/articles/create",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import(
      "./routes/_authenticated/_adminLayout/admin/articles/create.lazy"
    ).then((d) => d.Route),
  );

const AuthenticatedAdminLayoutAdminUsersEditIdLazyRoute =
  AuthenticatedAdminLayoutAdminUsersEditIdLazyImport.update({
    path: "/admin/users/edit/$id",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import(
      "./routes/_authenticated/_adminLayout/admin/users/edit.$id.lazy"
    ).then((d) => d.Route),
  );

const AuthenticatedAdminLayoutAdminUsersDeleteIdLazyRoute =
  AuthenticatedAdminLayoutAdminUsersDeleteIdLazyImport.update({
    path: "/admin/users/delete/$id",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import(
      "./routes/_authenticated/_adminLayout/admin/users/delete.$id.lazy"
    ).then((d) => d.Route),
  );

const AuthenticatedAdminLayoutAdminArticlesEditIdLazyRoute =
  AuthenticatedAdminLayoutAdminArticlesEditIdLazyImport.update({
    path: "/admin/articles/edit/$id",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import(
      "./routes/_authenticated/_adminLayout/admin/articles/edit.$id.lazy"
    ).then((d) => d.Route),
  );

const AuthenticatedAdminLayoutAdminArticlesDeleteIdLazyRoute =
  AuthenticatedAdminLayoutAdminArticlesDeleteIdLazyImport.update({
    path: "/admin/articles/delete/$id",
    getParentRoute: () => AuthenticatedAdminLayoutRoute,
  } as any).lazy(() =>
    import(
      "./routes/_authenticated/_adminLayout/admin/articles/delete.$id.lazy"
    ).then((d) => d.Route),
  );

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated": {
      id: "/_authenticated";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthenticatedImport;
      parentRoute: typeof rootRoute;
    };
    "/blog": {
      id: "/blog";
      path: "/blog";
      fullPath: "/blog";
      preLoaderRoute: typeof BlogImport;
      parentRoute: typeof rootRoute;
    };
    "/login": {
      id: "/login";
      path: "/login";
      fullPath: "/login";
      preLoaderRoute: typeof LoginLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/_adminLayout": {
      id: "/_authenticated/_adminLayout";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthenticatedAdminLayoutImport;
      parentRoute: typeof AuthenticatedImport;
    };
    "/_authenticated/_adminLayout/admin/": {
      id: "/_authenticated/_adminLayout/admin/";
      path: "/admin";
      fullPath: "/admin";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminIndexLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/articles/create": {
      id: "/_authenticated/_adminLayout/admin/articles/create";
      path: "/admin/articles/create";
      fullPath: "/admin/articles/create";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminArticlesCreateLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/users/create": {
      id: "/_authenticated/_adminLayout/admin/users/create";
      path: "/admin/users/create";
      fullPath: "/admin/users/create";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminUsersCreateLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/articles/": {
      id: "/_authenticated/_adminLayout/admin/articles/";
      path: "/admin/articles";
      fullPath: "/admin/articles";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminArticlesIndexLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/users/": {
      id: "/_authenticated/_adminLayout/admin/users/";
      path: "/admin/users";
      fullPath: "/admin/users";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminUsersIndexLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/articles/delete/$id": {
      id: "/_authenticated/_adminLayout/admin/articles/delete/$id";
      path: "/admin/articles/delete/$id";
      fullPath: "/admin/articles/delete/$id";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminArticlesDeleteIdLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/articles/edit/$id": {
      id: "/_authenticated/_adminLayout/admin/articles/edit/$id";
      path: "/admin/articles/edit/$id";
      fullPath: "/admin/articles/edit/$id";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminArticlesEditIdLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/users/delete/$id": {
      id: "/_authenticated/_adminLayout/admin/users/delete/$id";
      path: "/admin/users/delete/$id";
      fullPath: "/admin/users/delete/$id";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminUsersDeleteIdLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
    "/_authenticated/_adminLayout/admin/users/edit/$id": {
      id: "/_authenticated/_adminLayout/admin/users/edit/$id";
      path: "/admin/users/edit/$id";
      fullPath: "/admin/users/edit/$id";
      preLoaderRoute: typeof AuthenticatedAdminLayoutAdminUsersEditIdLazyImport;
      parentRoute: typeof AuthenticatedAdminLayoutImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedAdminLayoutRoute: AuthenticatedAdminLayoutRoute.addChildren({
      AuthenticatedAdminLayoutAdminIndexLazyRoute,
      AuthenticatedAdminLayoutAdminArticlesCreateLazyRoute,
      AuthenticatedAdminLayoutAdminUsersCreateLazyRoute,
      AuthenticatedAdminLayoutAdminArticlesIndexLazyRoute,
      AuthenticatedAdminLayoutAdminUsersIndexLazyRoute,
      AuthenticatedAdminLayoutAdminArticlesDeleteIdLazyRoute,
      AuthenticatedAdminLayoutAdminArticlesEditIdLazyRoute,
      AuthenticatedAdminLayoutAdminUsersDeleteIdLazyRoute,
      AuthenticatedAdminLayoutAdminUsersEditIdLazyRoute,
    }),
  }),
  BlogRoute,
  LoginLazyRoute,
});

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/blog",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/_adminLayout"
      ]
    },
    "/blog": {
      "filePath": "blog.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/_authenticated/_adminLayout": {
      "filePath": "_authenticated/_adminLayout.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/_adminLayout/admin/",
        "/_authenticated/_adminLayout/admin/articles/create",
        "/_authenticated/_adminLayout/admin/users/create",
        "/_authenticated/_adminLayout/admin/articles/",
        "/_authenticated/_adminLayout/admin/users/",
        "/_authenticated/_adminLayout/admin/articles/delete/$id",
        "/_authenticated/_adminLayout/admin/articles/edit/$id",
        "/_authenticated/_adminLayout/admin/users/delete/$id",
        "/_authenticated/_adminLayout/admin/users/edit/$id"
      ]
    },
    "/_authenticated/_adminLayout/admin/": {
      "filePath": "_authenticated/_adminLayout/admin/index.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/articles/create": {
      "filePath": "_authenticated/_adminLayout/admin/articles/create.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/users/create": {
      "filePath": "_authenticated/_adminLayout/admin/users/create.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/articles/": {
      "filePath": "_authenticated/_adminLayout/admin/articles/index.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/users/": {
      "filePath": "_authenticated/_adminLayout/admin/users/index.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/articles/delete/$id": {
      "filePath": "_authenticated/_adminLayout/admin/articles/delete.$id.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/articles/edit/$id": {
      "filePath": "_authenticated/_adminLayout/admin/articles/edit.$id.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/users/delete/$id": {
      "filePath": "_authenticated/_adminLayout/admin/users/delete.$id.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    },
    "/_authenticated/_adminLayout/admin/users/edit/$id": {
      "filePath": "_authenticated/_adminLayout/admin/users/edit.$id.lazy.tsx",
      "parent": "/_authenticated/_adminLayout"
    }
  }
}
ROUTE_MANIFEST_END */
