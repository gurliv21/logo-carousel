import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

export default function LogoCarousel({ logos = [] }) {
  return (
    <motion.div
      animate={{ x: '-40%' }}
      transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
    >
      <div className="flex gap-14 p-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <Fragment key={i}>
            {logos.map((item) => (
              <div className="flex-shrink-0" key={`${item.name}-${i}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-contain"
                />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </motion.div>
  );
}