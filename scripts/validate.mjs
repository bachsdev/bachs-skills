#!/usr/bin/env node
// Checks every skills/<name>/SKILL.md against the portable Agent Skills rules,
// using the strictest limits among the tools we support (the Claude apps):
// name: lowercase letters, numbers and hyphens, at most 64 characters, equal
// to its folder name; description: 1 to 1,024 characters; no XML tags; only
// the frontmatter keys every tool accepts.
// Run: node scripts/validate.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const allowed = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);
let failures = 0;
const fail = (msg) => { failures++; console.log(`FAIL  ${msg}`); };

const skillsDir = path.join(root, "skills");
for (const folder of fs.readdirSync(skillsDir)) {
  const file = path.join(skillsDir, folder, "SKILL.md");
  if (!fs.existsSync(file)) { fail(`skills/${folder}: no SKILL.md`); continue; }
  const text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) { fail(`skills/${folder}/SKILL.md: no YAML frontmatter`); continue; }

  const fields = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].trim();
  }
  for (const key of Object.keys(fields)) {
    if (!allowed.has(key)) fail(`skills/${folder}: frontmatter key "${key}" is not portable`);
  }
  const { name = "", description = "" } = fields;
  if (!/^[a-z0-9-]{1,64}$/.test(name)) fail(`skills/${folder}: name "${name}" must be 1-64 lowercase letters, numbers or hyphens`);
  if (/anthropic|claude/.test(name)) fail(`skills/${folder}: name must not contain "anthropic" or "claude"`);
  if (name !== folder) fail(`skills/${folder}: name "${name}" must match its folder name`);
  if (!description || description.length > 1024) fail(`skills/${folder}: description must be 1-1,024 characters (has ${description.length})`);
  if (/<[a-z/][^>]*>/i.test(name + description)) fail(`skills/${folder}: no XML tags in name or description`);
  if (!failures) console.log(`PASS  skills/${folder} (${description.length}-character description)`);
}

process.exit(failures ? 1 : 0);
