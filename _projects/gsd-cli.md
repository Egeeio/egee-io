---
title: 'gsd-cli'
subtitle: 'The tool that powers Egee.io game servers'
date: 2019-11-21 00:00:02
description: We wrote our very own open-source tool to help manage our game servers for us.
featured_image: '/images/front/gsd.jpg'
---

## gsd-cli

A super convenient [CLI](https://www.w3schools.com/whatis/whatis_cli.asp) tool for automating the installation of dedicated game servers as systemd units (daemons).

[gsd-cli](https://github.com/Egeeio/gsd-cli) is dependent [systemd](https://www.linode.com/docs/quick-answers/linux-essentials/what-is-systemd/) and makes use of many Linux-specific commands. And while it *should* work on Windows via the [WSL](https://docs.microsoft.com/en-us/windows/wsl/faq), gsd-cli is only officially supported on Linux at this time.

## Usage

The target deployment environment for dedicated servers installed with gsd-cli is LXD containers or Cloud server hosts, such as AWS EC2 instances or Linodes.

Dedicated servers are installed to `/opt/` by default. So installing a Minecraft server will result in a new folder at `/opt/minecraft` with the game server fully installed and ready to play.

You manage the config files for game servers like you would normally; gsd-cli manages the game servers and *not* the configuration or player data.

Usage examples:

`gsd-cli install minecraft` - will install a Spigot Minecraft server.

`gsd-cli update gmod` - will update a Garry's Mod server installed with gsd-cli.

<!-- add a fancy gif of the cli in action -->
