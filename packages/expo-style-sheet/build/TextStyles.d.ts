/***
 * Copyright (c) Expo team.
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { TextStyle as NativeTextStyle } from 'react-native';
import { AnimationStyles } from './AnimationStyles';
import { GridStyles } from './GridStyles';
import { InteractionStyles } from './InteractionStyles';
import { TransformStyles } from './TransformStyles';
import { TransitionStyles } from './TransitionStyles';
import { WebViewStyles } from './ViewStyles';
declare type NumberOrString = string | number;
export declare type TextOverflow = string | 'each-line' | 'hanging';
export declare type TextRendering = 'auto' | 'geometricPrecision' | 'optimizeLegibility' | 'optimizeSpeed';
export declare type UnicodeBidi = 'normal' | 'bidi-override' | 'embed' | 'isolate' | 'isolate-override' | 'plaintext';
export declare type WhiteSpace = string | 'overflow-wrap' | 'word-break' | 'hyphens';
export declare type WordBreak = string | 'normal' | 'break-all' | 'break-word' | 'keep-all';
export declare type WordWrap = 'normal' | 'anywhere' | 'break-word';
export declare type FontVariant = 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums';
export declare type TextTransform = 'uppercase' | 'lowercase' | 'none' | 'capitalize' | 'full-width' | 'full-size-kana';
export interface WebTextStyle {
    /**
     *
     */
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    /**
     *
     */
    fontVariant?: FontVariant;
    /**
     * Set the size of the text font in pixels. String is only available on web.
     *
     * @default 12
     */
    fontSize?: NativeTextStyle['fontSize'] | string;
    /**
     * The height of a "line box". Commonly used to set the vertical distance between lines of text.
     * String is only available on web
     */
    lineHeight?: NativeTextStyle['lineHeight'] | string;
    /**
     *
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings
     * @platform web
     */
    fontFeatureSettings?: NumberOrString | NumberOrString[];
    /**
     *
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     * @platform web
     */
    textTransform?: TextTransform;
    /**
     * Sets the length of empty space (indentation) that is put before lines of text in a block.
     *
     * @platform web
     */
    textIndent?: NumberOrString;
    /**
     * @platform web
     */
    textOverflow?: TextOverflow | TextOverflow[];
    /**
     * Provides information to the rendering engine about what to optimize for when rendering text.
     * The browser makes trade-offs among speed, legibility, and geometric precision.
     *
     * @platform web
     */
    textRendering?: TextRendering;
    /**
     * Together with the `direction` property, determines how bidirectional text in a document is handled.
     * For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text.
     * The `unicodeBidi` property overrides this algorithm and allows the developer to control the text embedding.
     *
     * @platform web
     */
    unicodeBidi?: UnicodeBidi;
    /**
     * Sets how [white space](https://developer.mozilla.org/en-US/docs/Glossary/whitespace) inside an element is handled.
     *
     * @platform web
     */
    whiteSpace?: WhiteSpace;
    /**
     * Sets whether line breaks appear wherever the text would otherwise overflow its content box.
     *
     * @platform web
     */
    wordBreak?: WordBreak;
    /**
     * Applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     *
     * > In CSS `word-wrap` is also known as `overflow-wrap`.
     *
     * @platform web
     */
    wordWrap?: WordWrap;
    /**
     * @platform web
     */
    MozOsxFontSmoothing?: string;
    /**
     * @platform web
     */
    WebkitFontSmoothing?: string;
}
export declare type TextStyle = Omit<NativeTextStyle, 'transform' | 'position' | 'fontSize' | 'fontWeight' | 'fontVariant' | 'lineHeight'> & WebViewStyles & WebTextStyle & AnimationStyles & TransitionStyles & InteractionStyles & GridStyles & TransformStyles;
export {};
