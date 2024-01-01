import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Mastodon (Personal)": "https://tilde.zone/@bthall",
      "Mastodon (Scholarly)": "https://scholar.social/@bthall",
      "Reddit": "https://www.reddit.com/user/meatspaceskeptic/",
      YouTube: "https://www.youtube.com/@TacticalTypos",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.TagList()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.MobileOnly(Component.TagList()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}

Component.Graph({
  localGraph: {
    depth: 3, // how many hops of notes to display
    showTags: false,
    removeTags: [],
  },
  globalGraph: {
    showTags: false,
    removeTags: [],
  }
})