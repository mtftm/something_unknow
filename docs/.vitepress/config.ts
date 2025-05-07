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
  // 首页
  {
    ...baseConfig,
    scanStartPath: '/',
    resolvePath: '/',
  },
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
  githubRepoLink: 'https://github.com/project-trans/RLE-wiki',
  rootDir: 'docs',
  include: ['campus', 'contributor-guide', 'fashion'],
  nav,
  sidebarOptions,
  enableDisclaimer: true,
  // disclaimerPaths: [{
  //   path: '/campus/',
  //   summaryHtml: 'RLE.wiki「大学指南」中的内容，仅供参考。可能存在过时或不准确的信息，请谨慎甄别。',
  //   detailHtml:
  //     '<p>RLE.wiki「大学指南」中的内容，仅供参考。可能存在过时或不准确的信息，请谨慎甄别。</p>' +
  //     '<p>「大学指南」板块中的内容，多数来自于读者投稿，并经编辑简单整理和形式审查后登载，主要体现其投稿者主观观点。不代表 RLE.wiki 编辑团队及我们的任何相关维护人员立场。</p>' +
  //     '<p>若存在任何有误或不当内容，请联系 <a href="mailto:rlewiki@project-trans.org">rlewiki@project-trans.org</a>。</p>',
  // }],
  // disclaimerStatusKey: 'disclaimerStatus',
  // disclaimerStatusExpiration: 1000
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
