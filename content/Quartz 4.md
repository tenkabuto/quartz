---
tags:
  - quartz4
  - meta
---

## How to build site
Run `npx quartz build --serve` in command line while in directory for quartz

## Tweaks
### Desired
It'd be cool if folders and tags could also get their own RSS feeds.

On the [[tags/_index|Tags Index]], set all the h2 headings for each tag such that their ID is the tag text. That way, users can add text to their Tags Index page and link readers to the section of that page for a specific tag, rather than needing to link them to the listing page for that tag.
- This also prevents the Tags Index from itself getting "tagged" by a tag that you simply want to direct your readers to, as would happen by mentioning that tag.

### For tags page, list tags on separate line with wrapping

Move this in `quartz/components/PageList.tsx` to within the DIV of class "desc", beneath the header for the article title

```html
<ul class="tags">
	{tags.map((tag) => (
	  <li>
		<a
		  class="internal tag-link"
		  href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
>
		  #{tag}
		</a>
	  </li>
	))}
</ul>
```

Add in css for 


In `index.css`, change

`li.section-li>.section`'s `grid-template-columns: 6em 3fr 1fr;` to `grid-template-columns: 6em 3fr;`

And for .tags, add `flex-wrap: wrap;`

In `quartz/styles/custom.scss` add in:

```css
.tags {
	flex-wrap: wrap;
}

li.section-li>.section {
	grid-template-columns: 6em 3fr !important;
}
```


### Increase Local Graph depth
Honestly couldn't figure out how to customize the configuration for the graph as was being [inferred in the documentation](https://quartz.jzhao.xyz/features/graph-view), so I just tweaked the setting in `quartz/components/Graph.tsx` and it worked.

### Undocumented features
Ooh, undocumented features, like adding in `description` fields to YAML, leading that to appear in places for Tag pages!

It seems to add in a period after the description for some reason. Intriguing! The period appears wherever the description text does, so in the meta text for search engines and in the tag listing page, but not on the page itself. From looking at the code myself, it isn't clear why the period is there.

### Remove tags from graph view