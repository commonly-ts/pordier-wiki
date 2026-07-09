---
layout: default
title: Forest
category: map
---

{%
include map-infobox.html title=page.title
overview_image="assets/media/img/forest fort-road-marsh.jpg"
belligerents="Rostora, Oskovia"
flag_count="6"
year="534"
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
Continental Siege |
<strong>-20%</strong> Map width<br/>
All Barage Events become Heavy variant
{% endcapture %}

<div class="table-split-row">
	<div>
		<h4>Map Modifiers</h4>
		{% include table-builder.html data=map_table %}
	</div>
</div>
