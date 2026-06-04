---
title: "Home"
description: "SOC analyst notes, CTF writeups and lab projects from mazo."
---


# mazo

{{< rawhtml >}}
<section class="siem-hero" aria-label="SOC dashboard preview">
    <div class="siem-dashboard" role="status">
        <div class="siem-dashboard-top">
            <div>
                <span class="alert-dot" aria-hidden="true"></span>
                <strong>SOC dashboard</strong>
                <em>live lab</em>
            </div>
            <span class="dashboard-time">last 15m</span>
        </div>
        <div class="siem-metrics">
            <span><small>notables</small><strong>7</strong></span>
            <span><small>EPS</small><strong>42</strong></span>
            <span><small>sources</small><strong>18</strong></span>
            <span><small>failed auth</small><strong>14</strong></span>
        </div>
        <div class="siem-dashboard-grid">
            <div class="alert-queue">
                <div class="panel-head">
                    <span>alert queue</span>
                    <em>triage</em>
                </div>
                <div class="alert-row alert-row-active">
                    <span class="severity severity-medium">med</span>
                    <strong>sudo command executed</strong>
                    <small>linux-auth | user: mazo</small>
                </div>
                <div class="alert-row">
                    <span class="severity severity-high">high</span>
                    <strong>PowerShell encoded command</strong>
                    <small>sysmon event 1 | endpoint-03</small>
                </div>
                <div class="alert-row">
                    <span class="severity severity-medium">med</span>
                    <strong>multiple failed logons</strong>
                    <small>windows 4625 | src: vpn-gw</small>
                </div>
                <div class="alert-row">
                    <span class="severity severity-low">low</span>
                    <strong>new service installed</strong>
                    <small>windows 7045 | host-12</small>
                </div>
            </div>
            <div class="event-detail">
                <div class="panel-head">
                    <span>selected event</span>
                    <em>process execution</em>
                </div>
                <div class="event-command">sudo whoami</div>
                <div class="event-fields">
                    <span><small>event.action</small>executed</span>
                    <span><small>process.name</small>sudo</span>
                    <span><small>parent.name</small>zsh</span>
                    <span><small>user.name</small>mazo</span>
                </div>
                <div class="event-output">
                    <span>decoded output</span>
                    <p>3rd-year Cybersecurity student at Faculty of Informatics, Masaryk University. Interested in threat hunting, SOC analysis and forensic analysis.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{{< /rawhtml >}}

## current signal

{{< rawhtml >}}
<div class="focus-grid">
    <a class="focus-card" href="https://profile.hackthebox.com/profile/019c6821-7428-714b-af63-532486ef4c3f" target="_blank" rel="noopener noreferrer">
        <span>HTB SOC Analyst Path</span>
        <strong>40% complete</strong>
        <small>Working through analyst labs with notes I can reuse.</small>
    </a>
    <a class="focus-card" href="/achievements/">
        <span>CyberGame Slovakia 2026</span>
        <strong>17th place</strong>
        <small>75 / 83 tasks solved with 22165 points.</small>
    </a>
    <a class="focus-card" href="/notes/">
        <span>Notes</span>
        <strong>Bachelor thesis</strong>
        <small>Working on bachelor thesis. 5% done.</small>
    </a>
</div>
{{< /rawhtml >}}

## tools

{{< rawhtml >}}
<div class="tool-stack" aria-label="SOC and forensic tools">
    <span>Splunk</span>
    <span>QRadar</span>
    <span>Wazuh</span>
    <span>Kibana</span>
    <span>Nmap</span>
    <span>Metasploit</span>
    <span>Burp Suite</span>
    <span>Wireshark</span>
    <span>Zeek</span>
    <span>Suricata</span>
    <span>nfdump</span>
    <span>Sysmon</span>
    <span>Volatility</span>
    <span>Autopsy</span>
    <span>Sigma / YARA</span>
</div>
{{< /rawhtml >}}
