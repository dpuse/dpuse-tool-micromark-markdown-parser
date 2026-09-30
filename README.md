# Data Positioning Micromark Tool

Consider TanStack Highlight library for replacing @speed-highlight at some future date.

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11502/badge)](https://www.bestpractices.dev/projects/11502)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-micromark)](https://www.npmjs.com/package/@dpuse/dpuse-tool-micromark)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse-tool-micromark&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse-tool-micromark)

A library that wraps the Micromark markdown parser and Speed Highlight code highlighter, improving browser memory efficiency by sharing single instances of these tools across all presenters and loading optional modules on demand.

## Features

- 🚀 **Fast Markdown Parsing**: with Micromark
- 💡 **Efficient Syntax Highlighting**: via Speed Highlight
- 🧠 **Memory-Optimised**: shared instance across all presenters
- 📦 **Modular Loading**: optional modules loaded on demand
- ☁️ **Cloud-Managed**: automatically updates new instances and notifies running instances of available updates
- 🧑‍💻 **Implemented in TypeScript**: fully coded in TypeScript

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-tool-micromark-markdown-parser?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/releases/latest)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-micromark-markdown-parser?color=cb3837&label=npm)](https://www.npmjs.com/package/@dpuse/dpuse-tool-micromark-markdown-parser)
[![CI](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml)

[DPUse](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/issues)

A library that wraps the Micromark markdown parser and Speed Highlight code highlighter.

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing.

**Sourcing** uses a library of [Connectors](https://www.dpuse.app/connectors) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources.

**Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This gives the DPUse Engine the structural framework needed to generate deterministic transactions, facts, or observations.

**Publishing** uses a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) let you build Data Apps using your preferred tools.

In addition, DPUse provides [Tools](https://www.dpuse.app) used by the application, and you can use them to construct connectors and presenters.

## Introduction

...

<!-- OPENING_END -->

## Installation

There's no need to install this library manually. Once released, it is uploaded to the Data Positioning Cloud and instantly available in all newly launched browser app instances. Running instances are notified of the update.

### For Developers

If you wish to fork or create your own copy of the library:

```bash
git clone https://github.com/dpuse/dpuse-tool-micromark.git
cd dpuse-tool-micromark
npm install
```

## Dependency Licenses

<!-- USAGE_START -->

## Usage

This [package](https://www.npmjs.com/package/@dpuse/dpuse-tool-micromark-markdown-parser) is available on [npm](https://www.npmjs.com/). Install it with:

```bash
npm install @dpuse/dpuse-tool-micromark-markdown-parser
```

To work on the source instead, clone this repository.

```bash
git clone https://github.com/dpuse/dpuse-tool-micromark-markdown-parser.git
cd dpuse-tool-micromark-markdown-parser
npm install
```

_Requires [Node.js](https://nodejs.org/) 24 or later, [npm](https://www.npmjs.com/) 12 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

This repository is managed using the common set of actions provided by [@dpuse/dpuse-development](https://github.com/dpuse/dpuse-development). See the `scripts` block in [package.json](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/blob/main/package.json) for details.

<!-- USAGE_END -->

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

License data is updated each time `npm run document` is run, using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use CC0-1.0 or MIT — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

| Dependency                                                                                           | Version | License(s) | Document                                                                                          |
| :--------------------------------------------------------------------------------------------------- | :-----: | :--------- | :------------------------------------------------------------------------------------------------ |
| [@speed-highlight/core](https://github.com/speed-highlight/core)                                     |  2.1.0  | CC0-1.0    | [LICENSE](licenses/downloads/@speed-highlight/core@2.1.0-LICENSE.txt)                             |
| [@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)                                   | 4.1.12  | MIT        | [LICENSE](licenses/downloads/@types/debug@4.1.12-LICENSE.txt)                                     |
| [@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)                                      |  2.1.0  | MIT        | [LICENSE](licenses/downloads/@types/ms@2.1.0-LICENSE.txt)                                         |
| [@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped)                                   | 2.0.11  | MIT        | [LICENSE](licenses/downloads/@types/unist@2.0.11-LICENSE.txt)                                     |
| [character-entities-legacy](https://github.com/wooorm/character-entities-legacy)                     |  3.0.0  | MIT        | [LICENSE](licenses/downloads/character-entities-legacy@3.0.0-LICENSE.txt)                         |
| [character-entities](https://github.com/wooorm/character-entities)                                   |  2.0.2  | MIT        | [LICENSE](licenses/downloads/character-entities@2.0.2-LICENSE.txt)                                |
| [character-reference-invalid](https://github.com/wooorm/character-reference-invalid)                 |  2.0.1  | MIT        | [LICENSE](licenses/downloads/character-reference-invalid@2.0.1-LICENSE.txt)                       |
| [debug](https://github.com/debug-js/debug)                                                           |  4.4.3  | MIT        | [LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)                                             |
| [decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)       |  1.2.0  | MIT        | [LICENSE](licenses/downloads/decode-named-character-reference@1.2.0-LICENSE.txt)                  |
| [dequal](https://github.com/lukeed/dequal)                                                           |  2.0.3  | MIT        | [LICENSE](licenses/downloads/dequal@2.0.3-LICENSE.txt)                                            |
| [devlop](https://github.com/wooorm/devlop)                                                           |  1.1.0  | MIT        | [LICENSE](licenses/downloads/devlop@1.1.0-LICENSE.txt)                                            |
| [is-alphabetical](https://github.com/wooorm/is-alphabetical)                                         |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-alphabetical@2.0.1-LICENSE.txt)                                   |
| [is-alphanumerical](https://github.com/wooorm/is-alphanumerical)                                     |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-alphanumerical@2.0.1-LICENSE.txt)                                 |
| [is-decimal](https://github.com/wooorm/is-decimal)                                                   |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-decimal@2.0.1-LICENSE.txt)                                        |
| [is-hexadecimal](https://github.com/wooorm/is-hexadecimal)                                           |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-hexadecimal@2.0.1-LICENSE.txt)                                    |
| [micromark-core-commonmark](https://github.com/micromark/micromark.git#main)                         |  2.0.3  | MIT        | [LICENSE](licenses/downloads/micromark-core-commonmark@2.0.3-LICENSE.txt)                         |
| [micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)          |  4.0.0  | MIT        | [LICENSE](licenses/downloads/micromark-extension-directive@4.0.0-LICENSE.txt)                     |
| [micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)          |  2.1.2  | MIT        | [LICENSE](licenses/downloads/micromark-extension-gfm-table@2.1.2-LICENSE.txt)                     |
| [micromark-factory-destination](https://github.com/micromark/micromark.git#main)                     |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-factory-destination@2.0.1-LICENSE.txt)                     |
| [micromark-factory-label](https://github.com/micromark/micromark.git#main)                           |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-factory-label@2.0.1-LICENSE.txt)                           |
| [micromark-factory-space](https://github.com/micromark/micromark.git#main)                           |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-factory-space@2.0.1-LICENSE.txt)                           |
| [micromark-factory-title](https://github.com/micromark/micromark.git#main)                           |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-factory-title@2.0.1-LICENSE.txt)                           |
| [micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)                      |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-factory-whitespace@2.0.1-LICENSE.txt)                      |
| [micromark-util-character](https://github.com/micromark/micromark.git#main)                          |  2.1.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-character@2.1.1-LICENSE.txt)                          |
| [micromark-util-chunked](https://github.com/micromark/micromark.git#main)                            |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-chunked@2.0.1-LICENSE.txt)                            |
| [micromark-util-classify-character](https://github.com/micromark/micromark.git#main)                 |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-classify-character@2.0.1-LICENSE.txt)                 |
| [micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)                 |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-combine-extensions@2.0.1-LICENSE.txt)                 |
| [micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main) |  2.0.2  | MIT        | [LICENSE](licenses/downloads/micromark-util-decode-numeric-character-reference@2.0.2-LICENSE.txt) |
| [micromark-util-edit-map](https://github.com/micromark/micromark.git#main)                           |  1.0.0  | MIT        | [LICENSE](licenses/downloads/micromark-util-edit-map@1.0.0-LICENSE.txt)                           |
| [micromark-util-encode](https://github.com/micromark/micromark.git#main)                             |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-encode@2.0.1-LICENSE.txt)                             |
| [micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)                      |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-html-tag-name@2.0.1-LICENSE.txt)                      |
| [micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)               |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-normalize-identifier@2.0.1-LICENSE.txt)               |
| [micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)                        |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-resolve-all@2.0.1-LICENSE.txt)                        |
| [micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)                       |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-sanitize-uri@2.0.1-LICENSE.txt)                       |
| [micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)                        |  2.1.0  | MIT        | [LICENSE](licenses/downloads/micromark-util-subtokenize@2.1.0-LICENSE.txt)                        |
| [micromark-util-symbol](https://github.com/micromark/micromark.git#main)                             |  2.0.1  | MIT        | [LICENSE](licenses/downloads/micromark-util-symbol@2.0.1-LICENSE.txt)                             |
| [micromark-util-types](https://github.com/micromark/micromark.git#main)                              |  2.0.2  | MIT        | [LICENSE](licenses/downloads/micromark-util-types@2.0.2-LICENSE.txt)                              |
| [micromark](https://github.com/micromark/micromark.git#main)                                         |  4.0.3  | MIT        | [LICENSE](licenses/downloads/micromark@4.0.3-LICENSE.txt)                                         |
| [ms](https://github.com/vercel/ms)                                                                   |  2.1.3  | MIT        | [LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)                                                |
| [parse-entities](https://github.com/wooorm/parse-entities)                                           |  4.0.2  | MIT        | [LICENSE](licenses/downloads/parse-entities@4.0.2-LICENSE.txt)                                    |

### Dependency Tree

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are mature and stable (have limited or no dependencies), so they require no active development.

- **[@speed-highlight/core](https://github.com/speed-highlight/core)** 2.1.0 — **1 month** ago: 2026-08-25
- **[micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)** 4.0.0 — **19 months** ago: 2025-02-27 ⚠️
    - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[dequal](https://github.com/lukeed/dequal)** 2.0.3 — **50 months** ago: 2022-07-11 ⚠️
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[parse-entities](https://github.com/wooorm/parse-entities)** 4.0.2 — **21 months** ago: 2024-12-13 ⚠️
        - **[@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.0.11 — **25 months** ago: 2024-08-15 ⚠️ → **latest**: 3.0.3 — **25 months** ago: 2024-08-15 ⚠️ ❗
        - **[character-entities-legacy](https://github.com/wooorm/character-entities-legacy)** 3.0.0 — **59 months** ago: 2021-10-29 ⚠️
        - **[character-reference-invalid](https://github.com/wooorm/character-reference-invalid)** 2.0.1 — **59 months** ago: 2021-10-27 ⚠️
        - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — **15 months** ago: 2025-06-14 ⚠️ → **latest**: 1.3.0 — **8 months** ago: 2026-01-19 ⚠️ ❗
        - **[is-alphanumerical](https://github.com/wooorm/is-alphanumerical)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
            - **[is-alphabetical](https://github.com/wooorm/is-alphabetical)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
            - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
        - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
        - **[is-hexadecimal](https://github.com/wooorm/is-hexadecimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
- **[micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)** 2.1.2 — this month: 2026-09-11
    - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
- **[micromark](https://github.com/micromark/micromark.git#main)** 4.0.3 — this month: 2026-09-26
    - **[@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.1.12 — **34 months** ago: 2023-11-09 ⚠️ → **latest**: 4.1.13 — **6 months** ago: 2026-03-19 ❗
        - **[@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.1.0 — **20 months** ago: 2025-01-16 ⚠️
    - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **12 months** ago: 2025-09-13 ⚠️
        - **[ms](https://github.com/vercel/ms)** 2.1.3 — **69 months** ago: 2020-12-08 ⚠️
    - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — **15 months** ago: 2025-06-14 ⚠️ → **latest**: 1.3.0 — **8 months** ago: 2026-01-19 ⚠️ ❗
        - **[character-entities](https://github.com/wooorm/character-entities)** 2.0.2 — **51 months** ago: 2022-06-22 ⚠️
    - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
    - **[micromark-core-commonmark](https://github.com/micromark/micromark.git#main)** 2.0.3 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.4 — this month: 2026-09-26 ❗
        - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — **15 months** ago: 2025-06-14 ⚠️ → **latest**: 1.3.0 — **8 months** ago: 2026-01-19 ⚠️ ❗
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[micromark-factory-destination](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-factory-label](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-factory-title](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-classify-character](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — **19 months** ago: 2025-02-27 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)** 2.0.2 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-edit-map](https://github.com/micromark/micromark.git#main)** 1.0.0 — this month: 2026-09-26
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — **19 months** ago: 2025-02-27 ⚠️
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗

<!-- DEPENDENCY_LICENSES_END -->

<!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                                    | Composition                                       |
| :----------------------------------------------------------------------------------- | :------------------------------------------------ |
| dist/dpuse-tool-micromark-markdown-parser.es.js                                      | 75.1 kB · gzip 18.8 kB                            |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-core-commonmark                                    | `████░░░░░░░░░░░░░░░░` 21.9%                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html-flow.js                     | `█░░░░░░░░░░░░░░░░░░░` 3.0%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/label-end.js                     | `░░░░░░░░░░░░░░░░░░░░` 2.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html-text.js                     | `░░░░░░░░░░░░░░░░░░░░` 2.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/list.js                          | `░░░░░░░░░░░░░░░░░░░░` 2.0%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/code-fenced.js                   | `░░░░░░░░░░░░░░░░░░░░` 1.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/attention.js                     | `░░░░░░░░░░░░░░░░░░░░` 1.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/code-text.js                     | `░░░░░░░░░░░░░░░░░░░░` 1.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/setext-underline.js              | `░░░░░░░░░░░░░░░░░░░░` 0.9%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/heading-atx.js                   | `░░░░░░░░░░░░░░░░░░░░` 0.9%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/definition.js                    | `░░░░░░░░░░░░░░░░░░░░` 0.9%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/autolink.js                      | `░░░░░░░░░░░░░░░░░░░░` 0.9%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/content.js                       | `░░░░░░░░░░░░░░░░░░░░` 0.7%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/character-reference.js           | `░░░░░░░░░░░░░░░░░░░░` 0.7%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/code-indented.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.7%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/block-quote.js                   | `░░░░░░░░░░░░░░░░░░░░` 0.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/label-start-image.js             | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/thematic-break.js                | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/label-start-link.js              | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/character-escape.js              | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/hard-break-escape.js             | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/blank-line.js                    | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/line-ending.js                   | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark                                                    | `███░░░░░░░░░░░░░░░░░` 13.1%                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/compile.js                       | `█░░░░░░░░░░░░░░░░░░░` 5.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/create-tokenizer.js              | `█░░░░░░░░░░░░░░░░░░░` 2.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/document.js           | `░░░░░░░░░░░░░░░░░░░░` 1.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/text.js               | `░░░░░░░░░░░░░░░░░░░░` 1.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/preprocess.js                    | `░░░░░░░░░░░░░░░░░░░░` 0.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/content.js            | `░░░░░░░░░░░░░░░░░░░░` 0.4%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/flow.js               | `░░░░░░░░░░░░░░░░░░░░` 0.4%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/constructs.js                    | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/parse.js                         | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js                             | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/postprocess.js                   | `░░░░░░░░░░░░░░░░░░░░` 0.0%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█░░░░░░░░░░░░░░░░░░░` 5.9%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;src                                                          | `█░░░░░░░░░░░░░░░░░░░` 3.9%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts                             | `█░░░░░░░░░░░░░░░░░░░` 2.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formula.ts                           | `░░░░░░░░░░░░░░░░░░░░` 1.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-subtokenize                                   | `█░░░░░░░░░░░░░░░░░░░` 2.7%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js                             | `░░░░░░░░░░░░░░░░░░░░` 1.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/splice-buffer.js                 | `░░░░░░░░░░░░░░░░░░░░` 1.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-destination → index.js                     | `░░░░░░░░░░░░░░░░░░░░` 0.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-sanitize-uri → index.js                       | `░░░░░░░░░░░░░░░░░░░░` 0.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-edit-map → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-label → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-title → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-combine-extensions → index.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-html-tag-name → index.js                      | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-chunked → index.js                            | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-decode-numeric-character-reference → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-resolve-all → index.js                        | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-encode → index.js                             | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-normalize-identifier → index.js               | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-classify-character → index.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/micromark-extension-directive-q9r1sYsN.js                                       | 18.4 kB · gzip 5.0 kB                             |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-extension-directive                                | `██░░░░░░░░░░░░░░░░░░` 8.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/directive-container.js           | `░░░░░░░░░░░░░░░░░░░░` 2.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html.js                          | `░░░░░░░░░░░░░░░░░░░░` 2.0%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/factory-attributes.js            | `░░░░░░░░░░░░░░░░░░░░` 1.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/directive-leaf.js                | `░░░░░░░░░░░░░░░░░░░░` 0.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/directive-text.js                | `░░░░░░░░░░░░░░░░░░░░` 0.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/factory-label.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/factory-name.js                  | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/syntax.js                        | `░░░░░░░░░░░░░░░░░░░░` 0.0%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;parse-entities → lib/index.js                                | `░░░░░░░░░░░░░░░░░░░░` 2.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 1.4%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;character-entities-legacy → index.js                         | `░░░░░░░░░░░░░░░░░░░░` 0.4%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;character-reference-invalid → index.js                       | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;is-hexadecimal → index.js                                    | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;is-alphabetical → index.js                                   | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;is-decimal → index.js                                        | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;is-alphanumerical → index.js                                 | `░░░░░░░░░░░░░░░░░░░░` 0.0%                       |
| dist/micromark-extension-gfm-table-DkJDFAXs.js                                       | 9.7 kB · gzip 2.7 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-extension-gfm-table                                | `█░░░░░░░░░░░░░░░░░░░` 5.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/syntax.js                        | `█░░░░░░░░░░░░░░░░░░░` 3.8%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html.js                          | `░░░░░░░░░░░░░░░░░░░░` 1.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/edit-map.js                      | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/infer.js                         | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.9%                       |
| dist/dist-BdH_EUdu.js                                                                | 4.9 kB · gzip 1.9 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/index.js                        | `█░░░░░░░░░░░░░░░░░░░` 3.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| dist/sql-DsYRlcMF.js                                                                 | 3.1 kB · gzip 1.8 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/sql.js                | `░░░░░░░░░░░░░░░░░░░░` 2.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/leanpub-md-BMEaP6OR.js                                                          | 2.8 kB · gzip 1.3 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/leanpub-md.js         | `░░░░░░░░░░░░░░░░░░░░` 1.7%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| dist/md-DQ4L1VUm.js                                                                  | 2.3 kB · gzip 1.2 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/md.js                 | `░░░░░░░░░░░░░░░░░░░░` 1.4%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/html-DMgKiosp.js                                                                | 2.1 kB · gzip 925 B                               |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/html.js               | `░░░░░░░░░░░░░░░░░░░░` 1.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| dist/ts-DNwPH4R-.js                                                                  | 2.1 kB · gzip 1.0 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/ts.js                 | `░░░░░░░░░░░░░░░░░░░░` 1.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| dist/http-BAlZb4g1.js                                                                | 1.9 kB · gzip 1.1 kB                              |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/http.js               | `░░░░░░░░░░░░░░░░░░░░` 1.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/js-RUYE5mJC.js                                                                  | 1.9 kB · gzip 968 B                               |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/js.js                 | `░░░░░░░░░░░░░░░░░░░░` 1.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| dist/github-dark-CTHfNL12.js → (bundler output, whitespace & JSON)                   | 1.7 kB · gzip 782 B · `░░░░░░░░░░░░░░░░░░░░` 1.2% |
| dist/github-light-OLdb5Tfn.js → (bundler output, whitespace & JSON)                  | 1.7 kB · gzip 762 B · `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| dist/languages-CUONw0-I.js                                                           | 1.5 kB · gzip 689 B                               |
| dist/xml-CItgL9jR.js                                                                 | 1.2 kB · gzip 655 B                               |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/xml.js                | `░░░░░░░░░░░░░░░░░░░░` 0.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| dist/docker-PIn81DgH.js                                                              | 1.1 kB · gzip 652 B                               |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/docker.js             | `░░░░░░░░░░░░░░░░░░░░` 0.6%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/micromark-factory-space-Cq-2i9SZ.js                                             | 1002 B · gzip 505 B                               |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-character → index.js                          | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-space → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/py-ChyNH1Ow.js                                                                  | 932 B · gzip 507 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/py.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/bash-DBdZzU-Z.js                                                                | 916 B · gzip 519 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/bash.js               | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/c-Du-5HtYA.js                                                                   | 909 B · gzip 522 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/c.js                  | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/css-zcoqwlxa.js                                                                 | 901 B · gzip 431 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/css.js                | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/java-iDtrcWRK.js                                                                | 883 B · gzip 536 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/java.js               | `░░░░░░░░░░░░░░░░░░░░` 0.5%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/rs-B4sYrwTu.js                                                                  | 788 B · gzip 493 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/rs.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.4%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/micromark-factory-whitespace-DvA2Lja_.js                                        | 671 B · gzip 419 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-whitespace → index.js                      | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;decode-named-character-reference → index.dom.js              | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/go-X8dsnhRi.js                                                                  | 656 B · gzip 408 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/go.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/jsdoc-C7d4L3dP.js                                                               | 632 B · gzip 348 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/jsdoc.js              | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| dist/pl-D-icLzBp.js                                                                  | 607 B · gzip 407 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/pl.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/lua-DChoWFAU.js                                                                 | 535 B · gzip 352 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/lua.js                | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/toml-Dyf4QHlN.js                                                                | 533 B · gzip 314 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/toml.js               | `░░░░░░░░░░░░░░░░░░░░` 0.3%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/git-ByN02Eg5.js                                                                 | 497 B · gzip 285 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/git.js                | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/make-6dP4GZxe.js                                                                | 496 B · gzip 302 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/make.js               | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/log-C89tvDiU.js                                                                 | 482 B · gzip 298 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/log.js                | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/yaml-B6q2zAjl.js                                                                | 468 B · gzip 292 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/yaml.js               | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/asm-BlBFo9kg.js                                                                 | 458 B · gzip 279 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/asm.js                | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/uri-837VxUwj.js                                                                 | 409 B · gzip 251 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/uri.js                | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/todo-CGLS57ju.js                                                                | 397 B · gzip 266 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/todo.js               | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/regex--5bDGxnZ.js                                                               | 396 B · gzip 265 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/regex.js              | `░░░░░░░░░░░░░░░░░░░░` 0.2%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/ini-BRzSgkFu.js                                                                 | 358 B · gzip 236 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/ini.js                | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/json-B1YjY9ed.js                                                                | 341 B · gzip 251 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/json.js               | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/diff-XVkHtLNu.js                                                                | 319 B · gzip 216 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/diff.js               | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/bf-DyrOHY0l.js                                                                  | 305 B · gzip 214 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/bf.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| dist/csv-CEW8W5c_.js                                                                 | 173 B · gzip 162 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/csv.js                | `░░░░░░░░░░░░░░░░░░░░` 0.0%                       |
| dist/plain-CKkAWdMi.js                                                               | 142 B · gzip 140 B                                |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%                       |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/plain.js              | `░░░░░░░░░░░░░░░░░░░░` 0.0%                       |

(bundler output, whitespace & JSON) = bytes Sonda can't trace to a source file: whitespace (indentation and line breaks), code the bundler generates (region comments, the combined import/export lines, its small runtime helper and wrappers), and imported JSON such as `config.json`, which the bundler doesn't map. The JSON and the generated code are real bytes that ship; the whitespace mostly disappears once compressed.

<!-- BUNDLE_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                                  |
| :------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                                           |

### Code Quality

| Check         | Status | What it does                                                                                                                                                                                                                            |
| :------------ | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code analysis | ❌ Off | [SonarCloud](https://sonarcloud.io) checks every push for bugs, code smells and vulnerabilities.                                                                                                                                        |
| Linting       | ✅ On  | [ESLint](https://eslint.org) checks the code for errors and style problems. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml) on every push and pull request to `main`. |

### Security Analysis

| Check           | Status | What it does                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push protection | ✅ On  | [GitHub push protection](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations) blocks pushes that contain credentials.                                                                                                                                                                                                                                      |
| Static analysis | ✅ On  | [![CodeQL](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/security/code-scanning) [CodeQL](https://codeql.github.com) scans GitHub Actions and JavaScript/TypeScript for security vulnerabilities, using the extended security queries, on every push and pull request to `main` and weekly. |
| Secret scanning | ✅ On  | [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning) detects credentials, such as API keys and tokens, committed to the repository.                                                                                                                                                                                                                                                  |

### Dependencies

| Check               | Status | What it does                                                                                                                                                                                                                                                                                                                                |
| :------------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vulnerability audit | ✅ On  | [npm audit](https://docs.npmjs.com/cli/commands/npm-audit) fails when a shipped dependency has any known vulnerability, or a development dependency has a high or critical one. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Supply chain risk   | ✅ On  | [Socket](https://socket.dev) flags malicious packages, typosquatting and suspicious behaviour that may not yet have a CVE.                                                                                                                                                                                                                  |
| Security alerts     | ✅ On  | [Dependabot](https://docs.github.com/en/code-security/dependabot) alerts when a dependency has a known vulnerability, using the GitHub Advisory Database.                                                                                                                                                                                   |
| Security updates    | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests that update vulnerable dependencies. These are handled manually.                                                                                                                                                                                      |
| Version updates     | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests for new dependency versions. These are handled manually.                                                                                                                                                                                              |

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-tool-micromark-markdown-parser/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-micromark-markdown-parser)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

<!-- QUALITY_SECURITY_END -->

<!-- CONTRIBUTING_LICENSE_START -->

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Jonathan Terrell

<!-- CONTRIBUTING_LICENSE_END -->
