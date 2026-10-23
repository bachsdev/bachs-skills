# Changelog

## 1.1.0

- The SDK section covers the official Python SDK (`bachs`) next to `@bachs/sdk`, and asks for 2.0.0 or later of either.
- Describes the 2.0 shape of both SDKs: the environment comes from the key, `listAll` / `list_all` walk every page, `statusCode` / `status_code` is the HTTP status code and `errorCode` / `error_code` the Bachs error code, and Python uses keyword arguments and attribute access.

## 1.0.2

- The SDK section now says to install `@bachs/sdk` 1.0.0 or later from npm, which is published, instead of using the Next.js starter's vendored copy.

## 1.0.1

- One-time payments: fulfil on `checkout.completed` or `collection.succeeded`, whichever arrives first, after retrieving the checkout and matching it to the order. `collection.failed` is not final, and a payment can complete a checkout after `checkout.expired`.

## 1.0.0 (2026-10-09)

- First release of the `bachs` skill: one-time payments, SaaS subscriptions and marketplace payments with Connect, plus a review of an existing integration before go-live.
- Install as a Claude Code plugin (`/plugin marketplace add bachsdev/bachs-skills`) or as a single `SKILL.md` file for Claude Code, Cursor, GitHub Copilot and Codex.
- Moved here from the Bachs docs and the Next.js SaaS starter, which now link to this repository.
