import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTimeline1 = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 19,1987"
                iconStyle={{ background: '#b3e5fc', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Incorporation</h3>
                <h4 className="vertical-timeline-element-subtitle">Jalgaon, Maharashtra</h4>
                <p>
                    Company was incorporated with the name of Mundada Agro Plast Industry Private Limited.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1996"
                iconStyle={{ background: '#c8e6c9', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Converted to Public Limited</h3>
                <p>
                    Mundada Agro Plast Industry Private Limited was changed to Public Limited.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2005"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Name changed</h3>
                <p>
                    Company was renamed to what it is today Laddha Agro Plast Industry Private Limited.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006"
                iconStyle={{ background: '#ffee58', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Spike in growth</h3>
                <p>
                    Made a massive jump increasing the number of orders delivered, almost doubling the turnover.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2006-present"
                iconStyle={{ background: '#512da8', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Increasing Products</h3>
                <p>
                    Each year has seen a rise in number of products from pipes to PVC pipes then to ISI PVC Pipes. Sizes were also increased upto 200mm. Later drips were added to the list of products.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2010"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Awarded by Janta Bank</h3>
                <h4 className="vertical-timeline-element-subtitle">Jalgaon</h4>
                <p>
                    Company was awarded by Janta Bank for extra-ordinary support and growth.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017"
                iconStyle={{ background: '#ff6e40', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Awarded by PlastiVision</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Awarded as one of the best Plastic Industries of Jalgaon, also for extending co-operation for promotion of plastic industry.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2010-present"
                iconStyle={{ background: '#c0ca33', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Increase in number of customers</h3>
                <p>
                    Each year, we see a increase in number of customers, satisfied by the service and products. We have been delivering the best quality products since 3 decaded.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
export default VerticalTimeline1;