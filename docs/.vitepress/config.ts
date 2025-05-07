// docs/.vitepress/config.ts
import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'

// nav 配置
type NavConfig = DefaultTheme.Config['nav']
const nav: NavConfig = [
  {
    text: '首页',
    link: '/',
  },
  // {
  //   text: '关于',
  //   link: '/about/',
  // },
]

// 侧边栏配置
const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: true,
  collapsed: true,
  documentRootPath: '/docs',
} satisfies Partial<SidebarOptions>

// 配置侧边栏的路径
const sidebarOptions = [
  // 关于
  // {
  //   ...baseConfig,
  //   scanStartPath: 'about',
  //   resolvePath: '/about/',
  // },
]

const themeConfig: ThemeContext = {
  siteTitle: 'RLE.wiki',
  siteDescription: '一份 RLE 指北',
  githubRepoLink: 'https://github.com/',
  rootDir: 'docs',
  nav,
  sidebarOptions,
  enableDisclaimer: true,
  sitePattern: `docs`,
  enableSuggestionBox: false,
  hostName: 'https://example.com', // Updated hostName to a valid format
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
