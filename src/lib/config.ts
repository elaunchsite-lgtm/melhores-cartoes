import rawConfig from "../../site-config.json";

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  primaryColor: string;
  secondaryColor?: string;
  logoUrl?: string;
  favicon?: string;
  siteUrl?: string;
  domain?: string;
  navigation: { label: string; href: string }[];
  _plugins: { head: string; body: string; enabled: string[] };
}

export const config: SiteConfig = rawConfig as SiteConfig;
