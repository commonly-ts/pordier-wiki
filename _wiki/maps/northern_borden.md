---
layout: default
title: Nothern Borden
category: maps
---

{%
include map-infobox.html title=page.title
overview_image="assets/media/misc/borenscreenshot.png"
belligerents="Bordenese Liberation Front, Oskovia"
flag_count="8"
year="532"
%}

Northern Borden is based in a desert climate

## Features
The primary features of Northern Borden include the large rock, salt flats, and medium boulders.
These features are randomly generated and may not always appear in every map generation.

The overall landscape of Northern Borden is flat plains with minimal foliage, expanses of salt flats that flood during raid, and scattered embedded bolders.

## Modifiers
The BLF and Oskovia have asymmetrical modifiers as the BLF acts as defenders with Oskovia as the attackers, giving Oskovia's smaller number of players more firepower.
{% capture blf_table %}
Modifier | Effects
::
Rancor | <strong><span style="color: #34aa01">+35%</span> </strong> Player cap,
Militia | <strong><span style="color: #ea574f">-</span> </strong>Assault Engine<br />
<strong><span style="color: #ea574f">-</span> </strong>Barrage Events<br />
<strong><span style="color: #ea574f">-</span> </strong>Pillbox<br />
<strong><span style="color: #ea574f">+10</span > </strong>seconds to spawn interval,
Sticks & Stones | <strong><span style="color: #ea574f">-50%</span> </strong>Build rate<br />
<strong><span style="color: #ea574f">+33%</span> </strong>Shotgun cost<br />
<strong><span style="color: #ea574f">-4</span> </strong>Grenades for Grenadier<br />
<strong><span>40%</span> </strong>Chance for rifle randomization<br />
{% endcapture %}
{% capture oskovia_table %}
Modifier | Effects
::
Empire | <strong><span style="color: #34aa01">+1</span> </strong>Starting score,
Extirpation Force | <strong><span style="color: #34aa01">+400%</span></strong> Barrage chance,
Priceless Prestige | <strong><span style="color: #34aa01">-75%</span> </strong>Assault Engine base cost<br />
<strong><span style="color: #34aa01">-67%</span> </strong>Shotgun cost<br />
<strong><span>Rifle</span> </strong>becomes Grenadier
{% endcapture %}
<div class="table-split-row">
	<div>
		<h3>Bordenese Liberation Front</h3>
		{% include table-builder.html data=blf_table %}
	</div>
	<div>
		<h3>Oskovia</h3>
		{% include table-builder.html data=oskovia_table %}
	</div>
</div>