<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/collaborative-docs.webp" alt="Collaborative Docs with Permit.io and Appwrite: A Google Docs-style editor with per-document sharing and roles" width="100%" />

<br />
<br />

# Collaborative Docs with Permit.io and Appwrite

### A Google Docs-style editor with per-document sharing and roles

A Next.js document editor with Tiptap and Liveblocks real-time editing, Appwrite for auth and storage, and Permit.io resource-instance roles that decide who can read, edit, delete and share each document.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Permit.io](https://img.shields.io/badge/Built_with_Permit.io-141414?style=for-the-badge)](https://permit.io)

[Permit.io docs](https://docs.permit.io) &nbsp;·&nbsp; [Permit.io](https://permit.io) &nbsp;·&nbsp; [Appwrite](https://appwrite.io) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A Google Docs-style collaborative editor with per-document sharing. Users sign up with Appwrite, create documents, edit them together in real time, and share each document as a viewer or editor.

Authorization uses Permit.io with a relationship-based model (ReBAC): every document is a Permit.io resource instance (`document:<id>`), and sharing assigns a role on that instance. The document page checks `read`, `update` and `delete` for the signed-in user. Those results decide whether the page loads and whether the Liveblocks room session allows `room:read` and `room:write`.

## Features

- **Real-time editing**: Tiptap editor with Yjs sync through Liveblocks, plus cursors and user avatars.
- **Per-document roles**: Role assignment on `document:<id>` instances in Permit.io.
- **Permission-aware UI**: Read, update and delete checks control what each user sees and can do.
- **Sharing**: A dialog assigns a role to an email address and copies the document link.
- **Room authorization**: `/api/liveblock-session` grants read-only or write access based on the permission checks.
- **Auth and data**: Appwrite handles sign-up, login and document storage.
- **Local PDP**: `docker-compose.yml` runs the Permit.io PDP.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 14, React, TypeScript |
| Authorization | [Permit.io](https://permit.io) ReBAC (`permitio` SDK, local PDP) |
| Auth and database | [Appwrite](https://appwrite.io) |
| Real-time sync | [Liveblocks](https://liveblocks.io) with Yjs |
| Editor | [Tiptap](https://tiptap.dev) |
| UI | [Tailwind CSS](https://tailwindcss.com), shadcn/ui |

## Getting started

### Prerequisites

- Node.js 18.17 or later
- Docker (for the local PDP)
- A [Permit.io](https://permit.io) account with a `document` resource, the actions `read`, `create`, `update`, `delete` and roles you define (the share dialog defaults to `viewer`)
- An [Appwrite](https://appwrite.io) project with a database and a documents collection
- A [Liveblocks](https://liveblocks.io) account

### Installation

```bash
git clone https://github.com/Studio1HQ/collaborative-docs.git
cd collaborative-docs
npm install
```

### Environment variables

Create a `.env.local` file:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | Appwrite API endpoint. |
| `NEXT_PUBLIC_APPWRITE_PROJECT_ID` | Appwrite project ID. |
| `NEXT_PUBLIC_APPWRITE_DATABASE_ID` | Appwrite database ID. |
| `NEXT_PUBLIC_APPWRITE_COLLECTION_ID` | Collection that stores documents (`roomId`, `title`, `storageData`, `created_by`). |
| `NEXT_PUBLIC_PERMIT_API_KEY` | Permit.io API key. Also used by the PDP container. |
| `PDP_URL` | PDP URL. Defaults to `http://localhost:7766`. |
| `NEXT_PUBLIC_LIVE_BLOCKS_SECRET_KEY` | Liveblocks secret key. |

The `NEXT_PUBLIC_` prefix exposes values to the browser. For anything beyond a demo, move the Permit.io key and the Liveblocks secret to server-only variables.

### Run

Start the PDP, then the dev server:

```bash
docker compose up -d
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

```text
app/
├── actions.ts                    # Permit.io server actions
├── api/liveblock-session/route.ts
├── dashboard/page.tsx            # list and create documents
├── document/[id]/page.tsx        # permission check, editor, share, delete
├── login/ and signup/
components/
├── editor/                       # collaborative editor, toolbar, avatars
└── share-document.tsx, delete-document.tsx
lib/
├── appwrite.ts, permitio.ts, liveblocks.ts
```

1. When a document is created, `createResourceInstance` registers `document:<id>` and `assignResourceInstanceRoleToUser` gives the creator a role.
2. On the document page, `getResourcePermissions` calls `PERMITIO_SDK.check` for `read`, `update` and `delete`. Without `read`, the page shows a no-permission message.
3. The editor connects to a Liveblocks room through `/api/liveblock-session`, which allows `room:read` if the user can read and `room:write` if they can update.
4. Sharing calls `assignResourceInstanceRoleToUser`, which syncs the user to Permit.io if needed and assigns the chosen role on the document instance.

## Resources

- [Permit.io docs](https://docs.permit.io): ReBAC, resource instances and the PDP.
- [Permit.io](https://permit.io): Account and API key.
- [Appwrite docs](https://appwrite.io/docs): Auth and databases.
- [Liveblocks docs](https://liveblocks.io/docs): Rooms and authentication.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Permit.io](https://permit.io).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
