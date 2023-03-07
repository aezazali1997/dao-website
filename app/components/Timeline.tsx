import Image from "next/image";
import React from "react";
import Link from 'next/link'

const Timeline = ({ items }:any) => {
  return (
    <ul className="timeline">
      {items.map((item:any, index:any) => (
        <li
          key={index}
          className={`timeline-item height  ${
            item.generic ? 'timeline-item-left' : index % 2 === 0 && item.name ? 'timeline-item-left' : 'timeline-item-right'  
          }`}
        >
          <div className="timeline-badge"></div>
          <div className="timeline-panel image-panel">
            <div className="image-container">
          <Link href={item.link}>
            <Image src={item.image} alt={item.title} />
          </Link>
            </div>
            <div className="timeline-heading">
              <h4 className="timeline-title">{item.title}</h4>
            </div>
            <div className="timeline-body">
              <p>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
