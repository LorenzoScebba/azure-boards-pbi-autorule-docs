import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  Svg?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "State Management",
    description: (
      <>
        azure-boards-pbi-autorule allows user to automatically{" "}
        <b>move a Work Item parent or childrens</b> to a particular <b>state</b>{" "}
        based on the Work Item state updates.
      </>
    ),
  },
  {
    title: "Area Management",
    description: (
      <>
        Forgetting to put certain work items under the right <b>area path</b>?
        We got you! Just add some area rules!
      </>
    ),
  },
  {
    title: "Resilient to failures",
    description: (
      <>
        The web hook will never <i>(hopefully)</i> be restricted by Azure and
        will always return some response headers in case of failure
      </>
    ),
  },
  {
    title: "Open Source",
    description: (
      <>
        Published under <b>MIT License</b>, do whatever you like with it!
      </>
    ),
  },
];
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      {Svg && (
        <div className="text--center">
          <ThemedImage
            alt="Docusaurus themed image"
            sources={{
              light: useBaseUrl(Svg),
              dark: useBaseUrl(Svg),
            }}
          />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
