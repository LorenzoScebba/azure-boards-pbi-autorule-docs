import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'State Management',
        description: (
            <>
                azure-boards-pbi-autorule allows user to automatically <b>move a Work Item parent or childrens</b> to a particular <b>state</b> based on the Work Item state updates.
            </>
        ),
    },
    {
        title: 'Area Management',
        description: (
            <>
                Forgetting to put certain work items under the right <b>area path</b>? We got you! Just add some area rules!
            </>
        ),
    },
    {
        title: 'Resilient to failures',
        description: (
            <>
                The web hook will never <i>(hopefully)</i> be restricted by Azure and will always return some response headers in case of failure
            </>
        ),
    },
    {
        title: 'Open Source',
        description: (
            <>
                Published under <b>MIT License</b>, do whatever you like with it!
            </>
        ),
    },
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--4 margin-bottom--lg')}>
            <div className="text--center padding-horiz--md">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="col">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
