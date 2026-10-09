# Bachs skills

A **skill** is a file of instructions that your AI coding assistant reads before it writes code. The Bachs skill teaches assistants such as Claude Code, Cursor, GitHub Copilot and Codex how to build a correct Bachs integration: which docs to read, which mistakes to avoid, and how to test the result in the sandbox.

You install it once per project. After that, you describe what you want ("add subscriptions to this app") and your assistant follows the Bachs rules on its own.

**Don't use skills?** You don't need them. The [Bachs prompts](https://docs.bachs.io/build/ai/prompts) give the same guidance as copy-paste prompts, or you can [paste the skill into any chat](#any-other-assistant-or-chat).

## What the Bachs skill does

| Job | What your assistant builds or checks |
| --- | --- |
| One-time payments | Hosted checkout, order fulfilment from verified webhooks |
| SaaS subscriptions | Plans, access from subscription state, the customer portal |
| Marketplace payments | Seller accounts with Connect, the platform fee, seller payouts |
| Review before go-live | A report of problems by file and line, without changing code |

The skill is [skills/bachs/SKILL.md](skills/bachs/SKILL.md). It is plain Markdown, so you can read exactly what it tells your assistant.

## Install

Run the command for your tool from your project's root folder.

### Claude Code

Install it as a plugin, so you can update it later with one command:

```text
/plugin marketplace add bachsdev/bachs-skills
/plugin install bachs@bachs
```

Or save the file into your project instead:

```bash
curl -fsSL --create-dirs -o .claude/skills/bachs/SKILL.md https://raw.githubusercontent.com/bachsdev/bachs-skills/main/skills/bachs/SKILL.md
```

### Cursor and GitHub Copilot

Both read skills from the same folder as Claude Code:

```bash
curl -fsSL --create-dirs -o .claude/skills/bachs/SKILL.md https://raw.githubusercontent.com/bachsdev/bachs-skills/main/skills/bachs/SKILL.md
```

### Codex

```bash
curl -fsSL --create-dirs -o .agents/skills/bachs/SKILL.md https://raw.githubusercontent.com/bachsdev/bachs-skills/main/skills/bachs/SKILL.md
```

On Windows, run these commands in PowerShell with `curl.exe` instead of `curl`.

### Claude apps

1. Download `bachs-skill.zip` from the [latest release](https://github.com/bachsdev/bachs-skills/releases/latest).
2. In Claude, open your skills settings and upload the zip.
3. Turn the skill on.

### Any other assistant or chat

Open [SKILL.md](https://raw.githubusercontent.com/bachsdev/bachs-skills/main/skills/bachs/SKILL.md), copy all of it, and paste it at the start of your conversation, before you describe your task.

## Use it

Describe what you want to build. Your assistant loads the skill when the task is about Bachs:

```text
Add Bachs subscriptions to this app, with monthly and yearly plans.
```

```text
Review our Bachs integration before we go live.
```

In Claude Code you can also call it directly: `/bachs` when you saved the file, or `/bachs:bachs` when you installed the plugin.

Keep your sandbox API key in your server's environment. Never paste it into a chat.

## Update

- Plugin: `/plugin marketplace update bachs`
- Saved file: run the install command again.

[CHANGELOG.md](CHANGELOG.md) lists what changed in each version.

## Contributing

Changes to the skill must match the [Bachs docs](https://docs.bachs.io). Before you open a pull request, check the skill's format:

```bash
node scripts/validate.mjs
```

## License

[MIT](LICENSE)
