// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ZbF6xR4EPfL4FhddXLYkw
// Component: 8jicFGET409g
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: Kbfw0aXINDst/component
import { useScreenVariants as useScreenVariantsq7X89FoeYbPl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Q7X89FOEYbPl/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ZbF6xR4EPfL4FhddXLYkw/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: 8jicFGET409g/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: psEZeLrkdgcG/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: mcMuz3OJbIij/icon

createPlasmicElementProxy;

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsq7X89FoeYbPl()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={`/`}
        platform={"nextjs"}
      >
        <LogoIcon
          className={classNames(projectcss.all, sty.svg__smh5)}
          role={"img"}
        />
      </PlasmicLink__>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__rhOoF)}
          color={"clear"}
          link={`/features`}
          size={"compact"}
          submitsForm={true}
        >
          {"Features"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__wtdak)}
          color={"clear"}
          link={`/pricing`}
          size={"compact"}
          submitsForm={true}
        >
          {"Pricing"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__oKxDd)}
          color={"clear"}
          size={"compact"}
          submitsForm={true}
        >
          {"Sign in"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__zFggk)}
          endIcon={
            <RightArrowIcon
              className={classNames(projectcss.all, sty.svg__iOtoL)}
              role={"img"}
            />
          }
          showEndIcon={true}
          submitsForm={true}
        >
          {"Sign up"}
        </Button>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "freeBox"],
  link: ["link"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
