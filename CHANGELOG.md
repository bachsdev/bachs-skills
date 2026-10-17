# Changelog

## 1.0.2

- The SDK section now says to install `@bachs/sdk` 1.0.0 or later from npm, which is published, instead of using the Next.js starter's vendored copy.

## 1.0.1

- One-time payments: fulfil on `checkout.completed` or `collection.succeeded`, whichever arrives first, after retrieving the checkout and matching it to the order. `collection.failed` is not final, and a payment can complete a checkout after `checkout.expired`.

## 1.0.0 (2026-10-09)

- First release of the `bachs` skill: one-time payments, SaaS subscriptions and marketplace payments with Connect, plus a review of an existing integration before go-live.
- Install as a Claude Code plugin (`/plugin marketplace add bachsdev/bachs-skills`) or as a single `SKILL.md` file for Claude Code, Cursor, GitHub Copilot and Codex.
- Moved here from the Bachs docs and the Next.js SaaS starter, which now link to this repository.
