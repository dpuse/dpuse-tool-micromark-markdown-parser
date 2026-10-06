# DPUse Micromark Markdown Parser Tool

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.dpuse.app%2Fconfigs%2Fdpuse-tool-micromark-markdown-parser&query=%24.data.version&prefix=v&label=DPUse&color=f6821f)](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/releases/latest)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-micromark-markdown-parser?color=cb3837&label=npm)](https://www.npmjs.com/package/@dpuse/dpuse-tool-micromark-markdown-parser)
[![CI](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/actions/workflows/ci.yml)

A library that wraps the Micromark markdown parser and Speed Highlight code highlighter.

[Report a Vulnerability](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser/issues)

## About DPUse

[DPUse](https://www.dpuse.app) (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing.

**Sourcing** uses a library of [Connectors](https://www.dpuse.app/connectors) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources.

**Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This gives the DPUse Engine the structural framework needed to generate deterministic transactions, facts, or observations.

**Publishing** uses a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) let you build Data Apps using your preferred tools.

In addition, DPUse provides [Tools](https://www.dpuse.app) used by the application, and you can use them to construct connectors and presenters.

## Introduction

A library that wraps the Micromark markdown parser and Speed Highlight code highlighter, improving browser memory efficiency by sharing single instances of these tools across all presenters and loading optional modules on demand.

Consider TanStack Highlight library for replacing @speed-highlight at some future date.

<!-- OPENING_END -->

## Features

- 🚀 **Fast Markdown Parsing**: with Micromark
- 💡 **Efficient Syntax Highlighting**: via Speed Highlight
- 🧠 **Memory-Optimised**: shared instance across all presenters
- 📦 **Modular Loading**: optional modules loaded on demand
- ☁️ **Cloud-Managed**: automatically updates new instances and notifies running instances of available updates
- 🧑‍💻 **Implemented in TypeScript**: fully coded in TypeScript

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

There's no need to install this library manually. Once released, it is uploaded to the Data Positioning Cloud and instantly available in all newly launched browser app instances. Running instances are notified of the update.

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

License data is updated each time `npm run document` is run, using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists every package whose code, styles or assets are included in this project's build, as recorded by the build itself. Modules loaded at run time are not included; each documents its own. These dependencies have been checked and confirmed to use CC0-1.0 or MIT, all of which allow commercial use. All are used unmodified, so any licence conditions that apply only to modified versions are not triggered. Developers cloning this repository should independently verify development dependencies.

| Dependency                                                                                           | Version | License(s) | Document                                                                                          |
| :--------------------------------------------------------------------------------------------------- | :-----: | :--------- | :------------------------------------------------------------------------------------------------ |
| [@speed-highlight/core](https://github.com/speed-highlight/core)                                     |  2.1.0  | CC0-1.0    | [LICENSE](licenses/downloads/@speed-highlight/core@2.1.0-LICENSE.txt)                             |
| [character-entities-legacy](https://github.com/wooorm/character-entities-legacy)                     |  3.0.0  | MIT        | [LICENSE](licenses/downloads/character-entities-legacy@3.0.0-LICENSE.txt)                         |
| [character-reference-invalid](https://github.com/wooorm/character-reference-invalid)                 |  2.0.1  | MIT        | [LICENSE](licenses/downloads/character-reference-invalid@2.0.1-LICENSE.txt)                       |
| [decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)       |  1.2.0  | MIT        | [LICENSE](licenses/downloads/decode-named-character-reference@1.2.0-LICENSE.txt)                  |
| [is-alphabetical](https://github.com/wooorm/is-alphabetical)                                         |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-alphabetical@2.0.1-LICENSE.txt)                                   |
| [is-alphanumerical](https://github.com/wooorm/is-alphanumerical)                                     |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-alphanumerical@2.0.1-LICENSE.txt)                                 |
| [is-decimal](https://github.com/wooorm/is-decimal)                                                   |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-decimal@2.0.1-LICENSE.txt)                                        |
| [is-hexadecimal](https://github.com/wooorm/is-hexadecimal)                                           |  2.0.1  | MIT        | [LICENSE](licenses/downloads/is-hexadecimal@2.0.1-LICENSE.txt)                                    |
| [micromark](https://github.com/micromark/micromark.git#main)                                         |  4.0.3  | MIT        | [LICENSE](licenses/downloads/micromark@4.0.3-LICENSE.txt)                                         |
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
| [parse-entities](https://github.com/wooorm/parse-entities)                                           |  4.0.2  | MIT        | [LICENSE](licenses/downloads/parse-entities@4.0.2-LICENSE.txt)                                    |

### Dependency Tree

The dependency tree below shows how each package in the table above is reached — direct and transitive — along with its installed version, release date, and update status. A package that does not ship itself, such as one whose parts are bundled separately, is left out and what ships beneath it is shown in its place. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are mature and stable (have limited or no dependencies), so they require no active development.

- **[@speed-highlight/core](https://github.com/speed-highlight/core)** 2.1.0 — 1 mth ago: 2026-08-25
- **[micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)** 4.0.0 — 19 mths ago: 2025-02-27 ⚠️
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️ → latest: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️ → latest: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[parse-entities](https://github.com/wooorm/parse-entities)** 4.0.2 — 21 mths ago: 2024-12-13 ⚠️
        - **[character-entities-legacy](https://github.com/wooorm/character-entities-legacy)** 3.0.0 — 59 mths ago: 2021-10-29 ⚠️
        - **[character-reference-invalid](https://github.com/wooorm/character-reference-invalid)** 2.0.1 — 59 mths ago: 2021-10-27 ⚠️
        - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — 15 mths ago: 2025-06-14 ⚠️ → latest: 1.3.0 — 8 mths ago: 2026-01-19 ⚠️ ❗
        - **[is-alphanumerical](https://github.com/wooorm/is-alphanumerical)** 2.0.1 — 59 mths ago: 2021-11-04 ⚠️
            - **[is-alphabetical](https://github.com/wooorm/is-alphabetical)** 2.0.1 — 59 mths ago: 2021-11-04 ⚠️
            - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — 59 mths ago: 2021-11-04 ⚠️
        - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — 59 mths ago: 2021-11-04 ⚠️
        - **[is-hexadecimal](https://github.com/wooorm/is-hexadecimal)** 2.0.1 — 59 mths ago: 2021-11-04 ⚠️
- **[micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)** 2.1.2 — this month: 2026-09-11
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️ → latest: 2.1.0 — this month: 2026-09-26 ❗
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
- **[micromark](https://github.com/micromark/micromark.git#main)** 4.0.3 — this month: 2026-09-26
    - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — 15 mths ago: 2025-06-14 ⚠️ → latest: 1.3.0 — 8 mths ago: 2026-01-19 ⚠️ ❗
    - **[micromark-core-commonmark](https://github.com/micromark/micromark.git#main)** 2.0.3 — 19 mths ago: 2025-02-27 ⚠️ → latest: 2.0.4 — this month: 2026-09-26 ❗
        - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — 15 mths ago: 2025-06-14 ⚠️ → latest: 1.3.0 — 8 mths ago: 2026-01-19 ⚠️ ❗
        - **[micromark-factory-destination](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-factory-label](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️ → latest: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-factory-title](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
            - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️ → latest: 2.1.0 — this month: 2026-09-26 ❗
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-classify-character](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — 19 mths ago: 2025-02-27 ⚠️
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️ → latest: 2.1.0 — this month: 2026-09-26 ❗
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)** 2.0.2 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-edit-map](https://github.com/micromark/micromark.git#main)** 1.0.0 — this month: 2026-09-26
    - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 22 mths ago: 2024-11-12 ⚠️
        - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️
    - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — 19 mths ago: 2025-02-27 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 22 mths ago: 2024-11-12 ⚠️

<!-- DEPENDENCY_LICENSES_END -->

<!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                                    | Composition                                 |
| :----------------------------------------------------------------------------------- | :------------------------------------------ |
| **dist/dpuse-tool-micromark-markdown-parser.es.js**                                  | 75.1 kB · gzip 18.8 kB · 51.9% of the build |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-core-commonmark                                    | `████████░░░░░░░░░░░░` 42.2% · 31.7 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/html-flow.js                   | `▒░░░░░░░░░░░░░░░░░░░` 5.8% · 4.3 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/label-end.js                   | `▒░░░░░░░░░░░░░░░░░░░` 4.8% · 3.6 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/html-text.js                   | `▒░░░░░░░░░░░░░░░░░░░` 4.0% · 3.0 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/list.js                        | `▒░░░░░░░░░░░░░░░░░░░` 3.9% · 2.9 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/code-fenced.js                 | `▒░░░░░░░░░░░░░░░░░░░` 3.5% · 2.6 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/attention.js                   | `▒░░░░░░░░░░░░░░░░░░░` 3.2% · 2.4 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/code-text.js                   | `░░░░░░░░░░░░░░░░░░░░` 2.1% · 1.6 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/setext-underline.js            | `░░░░░░░░░░░░░░░░░░░░` 1.7% · 1.3 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/heading-atx.js                 | `░░░░░░░░░░░░░░░░░░░░` 1.7% · 1.3 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/definition.js                  | `░░░░░░░░░░░░░░░░░░░░` 1.7% · 1.3 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/autolink.js                    | `░░░░░░░░░░░░░░░░░░░░` 1.6% · 1.2 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/content.js                     | `░░░░░░░░░░░░░░░░░░░░` 1.4% · 1.0 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/character-reference.js         | `░░░░░░░░░░░░░░░░░░░░` 1.4% · 1.0 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/code-indented.js               | `░░░░░░░░░░░░░░░░░░░░` 1.3% · 1015 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 8 smaller files                    | `▒░░░░░░░░░░░░░░░░░░░` 4.1% · 3.1 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark                                                    | `█████░░░░░░░░░░░░░░░` 25.3% · 19.0 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/compile.js                     | `▒▒░░░░░░░░░░░░░░░░░░` 10.7% · 8.0 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/create-tokenizer.js            | `▒░░░░░░░░░░░░░░░░░░░` 4.8% · 3.6 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/initialize/document.js         | `▒░░░░░░░░░░░░░░░░░░░` 3.6% · 2.7 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/initialize/text.js             | `░░░░░░░░░░░░░░░░░░░░` 2.5% · 1.9 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 7 smaller files                    | `▒░░░░░░░░░░░░░░░░░░░` 3.8% · 2.8 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;src                                                          | `█░░░░░░░░░░░░░░░░░░░` 7.4% · 5.6 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ index.ts                           | `▒░░░░░░░░░░░░░░░░░░░` 4.9% · 3.7 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ formula.ts                         | `░░░░░░░░░░░░░░░░░░░░` 2.5% · 1.9 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-subtokenize                                   | `█░░░░░░░░░░░░░░░░░░░` 5.2% · 3.9 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ index.js                           | `▒░░░░░░░░░░░░░░░░░░░` 2.9% · 2.2 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/splice-buffer.js               | `░░░░░░░░░░░░░░░░░░░░` 2.3% · 1.7 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-destination → index.js                     | `░░░░░░░░░░░░░░░░░░░░` 1.5% · 1.1 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-sanitize-uri → index.js                       | `░░░░░░░░░░░░░░░░░░░░` 1.1% · 840 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-edit-map → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 1.0% · 803 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-label → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 1.0% · 773 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-title → index.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 726 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-combine-extensions → index.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 690 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-html-tag-name → index.js                      | `░░░░░░░░░░░░░░░░░░░░` 0.6% · 442 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-chunked → index.js                            | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 387 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-decode-numeric-character-reference → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% · 269 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-resolve-all → index.js                        | `░░░░░░░░░░░░░░░░░░░░` 0.2% · 156 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-encode → index.js                             | `░░░░░░░░░░░░░░░░░░░░` 0.2% · 153 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-normalize-identifier → index.js               | `░░░░░░░░░░░░░░░░░░░░` 0.1% · 106 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-classify-character → index.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.1% · 80 B          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██░░░░░░░░░░░░░░░░░░` 11.4% · 8.6 kB       |
| **dist/micromark-extension-directive-q9r1sYsN.js**                                   | 18.4 kB · gzip 5.0 kB · 12.7% of the build  |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-extension-directive                                | `█████████████░░░░░░░` 64.4% · 11.9 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/directive-container.js         | `▒▒▒░░░░░░░░░░░░░░░░░` 17.2% · 3.2 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/html.js                        | `▒▒▒░░░░░░░░░░░░░░░░░` 16.0% · 2.9 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/factory-attributes.js          | `▒▒░░░░░░░░░░░░░░░░░░` 12.4% · 2.3 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/directive-leaf.js              | `▒░░░░░░░░░░░░░░░░░░░` 6.2% · 1.1 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/directive-text.js              | `▒░░░░░░░░░░░░░░░░░░░` 6.1% · 1.1 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/factory-label.js               | `▒░░░░░░░░░░░░░░░░░░░` 4.5% · 842 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 2 smaller files                    | `░░░░░░░░░░░░░░░░░░░░` 2.1% · 391 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;parse-entities → lib/index.js                                | `███░░░░░░░░░░░░░░░░░` 16.8% · 3.1 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;character-entities-legacy → index.js                         | `█░░░░░░░░░░░░░░░░░░░` 3.5% · 656 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;character-reference-invalid → index.js                       | `░░░░░░░░░░░░░░░░░░░░` 1.8% · 332 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;is-hexadecimal → index.js                                    | `░░░░░░░░░░░░░░░░░░░░` 0.8% · 142 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;is-alphabetical → index.js                                   | `░░░░░░░░░░░░░░░░░░░░` 0.6% · 120 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;is-decimal → index.js                                        | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 97 B          |
| &nbsp;&nbsp;&nbsp;&nbsp;is-alphanumerical → index.js                                 | `░░░░░░░░░░░░░░░░░░░░` 0.2% · 39 B          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██░░░░░░░░░░░░░░░░░░` 11.4% · 2.1 kB       |
| **dist/micromark-extension-gfm-table-DkJDFAXs.js**                                   | 9.7 kB · gzip 2.7 kB · 6.7% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-extension-gfm-table                                | `█████████████████░░░` 87.3% · 8.5 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/syntax.js                      | `▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░` 57.3% · 5.6 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/html.js                        | `▒▒▒▒░░░░░░░░░░░░░░░░` 17.7% · 1.7 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/edit-map.js                    | `▒░░░░░░░░░░░░░░░░░░░` 7.2% · 717 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ lib/infer.js                       | `▒░░░░░░░░░░░░░░░░░░░` 5.1% · 505 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███░░░░░░░░░░░░░░░░░` 12.7% · 1.2 kB       |
| **dist/dist-BdH_EUdu.js**                                                            | 4.9 kB · gzip 1.9 kB · 3.4% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/index.js                        | `██████████████████░░` 91.9% · 4.5 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██░░░░░░░░░░░░░░░░░░` 8.1% · 405 B         |
| **dist/sql-DsYRlcMF.js**                                                             | 3.1 kB · gzip 1.8 kB · 2.2% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/sql.js                | `███████████████████░` 95.3% · 3.0 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█░░░░░░░░░░░░░░░░░░░` 4.7% · 150 B         |
| **dist/leanpub-md-BMEaP6OR.js**                                                      | 2.8 kB · gzip 1.3 kB · 1.9% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/leanpub-md.js         | `██████████████████░░` 90.9% · 2.5 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██░░░░░░░░░░░░░░░░░░` 9.1% · 259 B         |
| **dist/md-DQ4L1VUm.js**                                                              | 2.3 kB · gzip 1.2 kB · 1.6% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/md.js                 | `██████████████████░░` 91.2% · 2.1 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██░░░░░░░░░░░░░░░░░░` 8.8% · 203 B         |
| **dist/html-DMgKiosp.js**                                                            | 2.1 kB · gzip 925 B · 1.5% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/html.js               | `████████████████░░░░` 82.1% · 1.7 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 17.9% · 389 B        |
| **dist/ts-DNwPH4R-.js**                                                              | 2.1 kB · gzip 1.0 kB · 1.5% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/ts.js                 | `█████████████████░░░` 86.6% · 1.8 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███░░░░░░░░░░░░░░░░░` 13.4% · 288 B        |
| **dist/http-BAlZb4g1.js**                                                            | 1.9 kB · gzip 1.1 kB · 1.3% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/http.js               | `██████████████████░░` 92.0% · 1.8 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██░░░░░░░░░░░░░░░░░░` 8.0% · 160 B         |
| **dist/js-RUYE5mJC.js**                                                              | 1.9 kB · gzip 968 B · 1.3% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/js.js                 | `█████████████████░░░` 85.7% · 1.6 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███░░░░░░░░░░░░░░░░░` 14.3% · 276 B        |
| **dist/github-dark-CTHfNL12.js**                                                     | 1.7 kB · gzip 782 B · 1.2% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████████████████` 100.0% · 1.7 kB      |
| **dist/github-light-OLdb5Tfn.js**                                                    | 1.7 kB · gzip 762 B · 1.1% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████████████████` 100.0% · 1.7 kB      |
| **dist/languages-CUONw0-I.js**                                                       | 1.5 kB · gzip 689 B                         |
| **dist/xml-CItgL9jR.js**                                                             | 1.2 kB · gzip 655 B · 0.8% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/xml.js                | `███████████████░░░░░` 77.3% · 956 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█████░░░░░░░░░░░░░░░` 22.7% · 280 B        |
| **dist/docker-PIn81DgH.js**                                                          | 1.1 kB · gzip 652 B · 0.7% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/docker.js             | `█████████████████░░░` 84.3% · 911 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███░░░░░░░░░░░░░░░░░` 15.7% · 170 B        |
| **dist/micromark-factory-space-Cq-2i9SZ.js**                                         | 1002 B · gzip 505 B · 0.7% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-character → index.js                          | `██████████░░░░░░░░░░` 51.3% · 514 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-space → index.js                           | `████░░░░░░░░░░░░░░░░` 21.5% · 215 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█████░░░░░░░░░░░░░░░` 27.2% · 273 B        |
| **dist/py-ChyNH1Ow.js**                                                              | 932 B · gzip 507 B · 0.6% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/py.js                 | `████████████████░░░░` 80.5% · 750 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 19.5% · 182 B        |
| **dist/bash-DBdZzU-Z.js**                                                            | 916 B · gzip 519 B · 0.6% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/bash.js               | `████████████████░░░░` 82.3% · 754 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 17.7% · 162 B        |
| **dist/c-Du-5HtYA.js**                                                               | 909 B · gzip 522 B · 0.6% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/c.js                  | `████████████████░░░░` 80.7% · 734 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 19.3% · 175 B        |
| **dist/css-zcoqwlxa.js**                                                             | 901 B · gzip 431 B · 0.6% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/css.js                | `████████████████░░░░` 78.5% · 707 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 21.5% · 194 B        |
| **dist/java-iDtrcWRK.js**                                                            | 883 B · gzip 536 B · 0.6% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/java.js               | `█████████████████░░░` 83.5% · 737 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███░░░░░░░░░░░░░░░░░` 16.5% · 146 B        |
| **dist/rs-B4sYrwTu.js**                                                              | 788 B · gzip 493 B · 0.5% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/rs.js                 | `████████████████░░░░` 81.7% · 644 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 18.3% · 144 B        |
| **dist/micromark-factory-whitespace-DvA2Lja\_.js**                                   | 671 B · gzip 419 B · 0.5% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-whitespace → index.js                      | `██████░░░░░░░░░░░░░░` 30.1% · 202 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;decode-named-character-reference → index.dom.js              | `██████░░░░░░░░░░░░░░` 29.2% · 196 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████░░░░░░░░░░░░` 40.7% · 273 B        |
| **dist/go-X8dsnhRi.js**                                                              | 656 B · gzip 408 B · 0.4% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/go.js                 | `████████████████░░░░` 78.0% · 512 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████░░░░░░░░░░░░░░░░` 22.0% · 144 B        |
| **dist/jsdoc-C7d4L3dP.js**                                                           | 632 B · gzip 348 B · 0.4% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/jsdoc.js              | `█████████████░░░░░░░` 64.4% · 407 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███████░░░░░░░░░░░░░` 35.6% · 225 B        |
| **dist/pl-D-icLzBp.js**                                                              | 607 B · gzip 407 B · 0.4% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/pl.js                 | `███████████████░░░░░` 77.4% · 470 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█████░░░░░░░░░░░░░░░` 22.6% · 137 B        |
| **dist/lua-DChoWFAU.js**                                                             | 535 B · gzip 352 B · 0.4% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/lua.js                | `███████████████░░░░░` 74.0% · 396 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█████░░░░░░░░░░░░░░░` 26.0% · 139 B        |
| **dist/toml-Dyf4QHlN.js**                                                            | 533 B · gzip 314 B · 0.4% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/toml.js               | `██████████████░░░░░░` 71.5% · 381 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██████░░░░░░░░░░░░░░` 28.5% · 152 B        |
| **dist/git-ByN02Eg5.js**                                                             | 497 B · gzip 285 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/git.js                | `██████████████░░░░░░` 69.8% · 347 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██████░░░░░░░░░░░░░░` 30.2% · 150 B        |
| **dist/make-6dP4GZxe.js**                                                            | 496 B · gzip 302 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/make.js               | `██████████████░░░░░░` 69.4% · 344 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██████░░░░░░░░░░░░░░` 30.6% · 152 B        |
| **dist/log-C89tvDiU.js**                                                             | 482 B · gzip 298 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/log.js                | `██████████████░░░░░░` 71.6% · 345 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██████░░░░░░░░░░░░░░` 28.4% · 137 B        |
| **dist/yaml-B6q2zAjl.js**                                                            | 468 B · gzip 292 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/yaml.js               | `██████████████░░░░░░` 68.8% · 322 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██████░░░░░░░░░░░░░░` 31.2% · 146 B        |
| **dist/asm-BlBFo9kg.js**                                                             | 458 B · gzip 279 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/asm.js                | `██████████████░░░░░░` 67.9% · 311 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `██████░░░░░░░░░░░░░░` 32.1% · 147 B        |
| **dist/uri-837VxUwj.js**                                                             | 409 B · gzip 251 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/uri.js                | `█████████████░░░░░░░` 65.0% · 266 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███████░░░░░░░░░░░░░` 35.0% · 143 B        |
| **dist/todo-CGLS57ju.js**                                                            | 397 B · gzip 266 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/todo.js               | `████████████░░░░░░░░` 62.5% · 248 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████░░░░░░░░░░░░` 37.5% · 149 B        |
| **dist/regex--5bDGxnZ.js**                                                           | 396 B · gzip 265 B · 0.3% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/regex.js              | `████████████░░░░░░░░` 61.4% · 243 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████░░░░░░░░░░░░` 38.6% · 153 B        |
| **dist/ini-BRzSgkFu.js**                                                             | 358 B · gzip 236 B · 0.2% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/ini.js                | `████████████░░░░░░░░` 61.7% · 221 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████░░░░░░░░░░░░` 38.3% · 137 B        |
| **dist/json-B1YjY9ed.js**                                                            | 341 B · gzip 251 B · 0.2% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/json.js               | `█████████████░░░░░░░` 63.0% · 215 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███████░░░░░░░░░░░░░` 37.0% · 126 B        |
| **dist/diff-XVkHtLNu.js**                                                            | 319 B · gzip 216 B · 0.2% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/diff.js               | `████████████░░░░░░░░` 59.2% · 189 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████░░░░░░░░░░░░` 40.8% · 130 B        |
| **dist/bf-DyrOHY0l.js**                                                              | 305 B · gzip 214 B · 0.2% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/bf.js                 | `███████████░░░░░░░░░` 57.4% · 175 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `█████████░░░░░░░░░░░` 42.6% · 130 B        |
| **dist/csv-CEW8W5c\_.js**                                                            | 173 B · gzip 162 B · 0.1% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/csv.js                | `████████░░░░░░░░░░░░` 38.2% · 66 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `████████████░░░░░░░░` 61.8% · 107 B        |
| **dist/plain-CKkAWdMi.js**                                                           | 142 B · gzip 140 B · 0.1% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/languages/plain.js              | `█████░░░░░░░░░░░░░░░` 24.6% · 35 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                          | `███████████████░░░░░` 75.4% · 107 B        |

Bars show each row's share of its output file. ↳ rows are part of the row above.

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
