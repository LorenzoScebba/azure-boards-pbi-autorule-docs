import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('../../static/img/board.svg').default,
        description: (
            <>
                azure-boards-pbi-autorule allows user to change a PBI state based on some configuration.
            </>
        ),
    },
    {
        title: 'Resilient to failures',
        Svg: require('../../static/img/resilient.svg').default,
        description: (
            <>
                The web hook will never <i>(hopefully)</i> be restricted by Azure and will always return some response headers in case of failure
            </>
        ),
    },
    {
        title: 'Open Source',
        Svg: require('../../static/img/open_source.svg').default,
        description: (
            <>
                Published under MIT License, do whatever you like with it!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
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
