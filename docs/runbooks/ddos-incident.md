# DDoS incident runbook

## Detect and preserve evidence

Capture time range, request rate, paths, countries/ASNs, verified-bot status,
cache ratio, challenge/block actions, origin/Sites errors, and screenshots from
Cloudflare Security Events. Do not expose IPs or tokens in the public journal.

## Respond progressively

1. Confirm this is hostile traffic rather than a release defect or crawler spike.
2. Increase cache effectiveness for eligible public paths.
3. Enable the available managed ruleset or tune only the triggering rule.
4. If abuse is path/IP-rate specific, deploy one high-threshold rule excluding
   verified bots with Managed Challenge first. Review false positives.
5. Use temporary Under Attack Mode only for an active severe incident; set an
   owner and expiry. Country blocks require evidence and explicit approval.

## Recover

Remove temporary controls, verify both locales and known bots, and append the
timeline, evidence, rule changes, false positives, and follow-up ADR/action.
