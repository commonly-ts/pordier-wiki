---
layout: default
title: Nothern Borden
category: map
---

{%
include map-infobox.html title=page.title
overview_image="assets/media/img/borden wide view.jpg"
belligerents="Bordenese Liberation Front, Oskovia"
flag_count="8"
year="537"
%}

Northern Borden is based in a desert climate

## Features
The primary features of Northern Borden include the large rock, salt flats, and medium boulders.
These features are randomly generated and may not always appear in every map generation.

The overall landscape of Northern Borden is flat plains with minimal foliage, expanses of salt flats that flood during raid, and scattered embedded bolders.

## Modifiers
The BLF and Oskovia have asymmetrical modifiers as the BLF acts as defenders with Oskovia as the attackers, giving Oskovia's smaller number of players more firepower.

{% capture map_table %}
Modifier | Effects
::
Aeolian Deposition |
<strong>-25%</strong> Trench health,

Empire's Edge |
<strong>+60%</strong> Map width<br />
<strong>-15%</strong> Capture time<br />
+2 Flags
{% endcapture %}

{% capture blf_table %}
Modifier | Effects
::
Rancor |
<strong><span style="color: #34aa01">+30%</span></strong> Player cap,

Militia |
<strong><span style="color: #ea574f">-</span></strong> Assault Engine<br />
<strong><span style="color: #ea574f">-</span></strong> Barrage Events<br />
<strong><span style="color: #ea574f">-</span></strong> Pillbox<br />
<strong><span style="color: #ea574f">-</span></strong> Siege Mortar<br />
<strong><span style="color: #ea574f">+5</span ></strong> seconds to spawn interval,

Sticks & Stones |
<strong><span style="color: #ea574f">+33%</span></strong> Shotgun cost<br />
<strong><span style="color: #ea574f">-3</span></strong> Grenades for Grenadier<br />
<strong><span style="color: #ea574f">-</span></strong> Carbine Class<br />
<strong><span style="color: #ea574f">-</span></strong> SMG Class<br />
<strong><span>40%</span></strong> Chance for rifle randomization<br />
{% endcapture %}

{% capture oskovia_table %}
Modifier | Effects
::
Empire |
<strong><span style="color: #34aa01">+100%</span></strong> Build rate for Artillery<br />
<strong><span style="color: #34aa01">-70%</span></strong> Minimum spacing for Artillery<br />
<strong><span style="color: #34aa01">-5</span></strong> Seconds to spawn interval<br />,

Extirpation Force |
<strong><span style="color: #34aa01">+400%</span></strong> Barrage Events,

Priceless Prestige |
<strong><span style="color: #34aa01">-100</span></strong> Carbine & Shotgun costs and SMG Class<br />
<strong><span style="color: #34aa01">-50%</span></strong> Assault Engine base cost<br />
<strong><span style="color: #34aa01">+50%</span></strong> Fire rate for Artillery<br />
<strong><span>Rifle</span> </strong>becomes Grenadier,

Outnumbered |
<strong><span style="color: #ea574f">-30%</span> </strong> Player cap
{% endcapture %}

<div class="table-split-row">
	<div>
		<h4>Map Modifiers</h4>
		{% include table-builder.html data=map_table %}
	</div>
	<div>
		<h4>Bordenese Liberation Front</h4>
		{% include table-builder.html data=blf_table %}
	</div>
	<div>
		<h4>Oskovia</h4>
		{% include table-builder.html data=oskovia_table %}
	</div>
</div>