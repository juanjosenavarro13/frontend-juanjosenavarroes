# Github actions

[![Run Lint, Format, and Test](https://github.com/juanjosenavarro13/frontend-juanjosenavarroes/actions/workflows/CI.yml/badge.svg)](https://github.com/juanjosenavarro13/frontend-juanjosenavarroes/actions/workflows/CI.yml)
[![E2E Tests](https://github.com/juanjosenavarro13/frontend-juanjosenavarroes/actions/workflows/E2E.yml/badge.svg?branch=main)](https://github.com/juanjosenavarro13/frontend-juanjosenavarroes/actions/workflows/E2E.yml)
[![CodeQL](https://github.com/juanjosenavarro13/frontend-juanjosenavarroes/actions/workflows/codeQL.yml/badge.svg)](https://github.com/juanjosenavarro13/frontend-juanjosenavarroes/actions/workflows/codeQL.yml)

# Git flow

```mermaid
gitGraph
    commit
    commit
    branch feat
    checkout feat
    commit
    commit
    checkout main
    merge feat
    commit
    commit
```

```mermaid
flowchart LR
    main[Main] --> featureBranch(Feature branch)
    featureBranch --> pr
    pr(Pull Request) --> githubUnitTest
    githubUnitTest(Unit test) --> main
    main --> githubUnitTest(Unit test)
    main --> |Deplay 5 min| githubE2ETest(E2E test)

```
