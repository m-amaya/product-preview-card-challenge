/**
 * Global Namespace
 * Types declared here are for internal use only.
 * They will not be included in the build.
 */

import type { FC, ReactNode, SVGAttributes } from "react";

export {};

declare global {
  declare module "*.svg" {
    export const ReactComponent: FC<SVGAttributes<SVGElement>>;
    const content: string;
    export default content;
  }

  type ReactChildren = ReactNode | ReactNode[];
}
