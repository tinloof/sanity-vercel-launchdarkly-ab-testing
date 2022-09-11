import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page translations
 *
 *
 */
export interface PageTranslations extends SanityDocument {
  _type: "page_translations";

  /**
   * Translations — `object`
   *
   *
   */
  translations?: {
    _type: "translations";
    /**
     * English — `reference`
     *
     *
     */
    en?: SanityReference<Page>;

    /**
     * French — `reference`
     *
     *
     */
    fr?: SanityReference<Page>;

    /**
     * Spanish — `reference`
     *
     *
     */
    es?: SanityReference<Page>;
  };
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Singleton — `boolean`
   *
   *
   */
  singleton?: boolean;

  /**
   * Folder — `string`
   *
   *
   */
  folder?: string;

  /**
   * Locale — `locale`
   *
   *
   */
  locale: Locale;

  /**
   * Translations — `reference`
   *
   *
   */
  translations?: SanityReference<PageTranslations>;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };
}

/**
 * Header translations
 *
 *
 */
export interface HeaderTranslations extends SanityDocument {
  _type: "header_translations";

  /**
   * Translations — `object`
   *
   *
   */
  translations?: {
    _type: "translations";
    /**
     * English — `reference`
     *
     *
     */
    en?: SanityReference<Header>;

    /**
     * French — `reference`
     *
     *
     */
    fr?: SanityReference<Header>;

    /**
     * Spanish — `reference`
     *
     *
     */
    es?: SanityReference<Header>;
  };
}

/**
 * Header
 *
 *
 */
export interface Header extends SanityDocument {
  _type: "header";

  /**
   * Singleton — `boolean`
   *
   *
   */
  singleton?: boolean;

  /**
   * Folder — `string`
   *
   *
   */
  folder?: string;

  /**
   * Locale — `locale`
   *
   *
   */
  locale: Locale;

  /**
   * Translations — `reference`
   *
   *
   */
  translations?: SanityReference<HeaderTranslations>;

  /**
   * Pages — `array`
   *
   *
   */
  pages?: Array<SanityKeyedReference<Page>>;
}

export type Locale = "en" | "fr" | "es";

export type Documents = PageTranslations | Page | HeaderTranslations | Header;
