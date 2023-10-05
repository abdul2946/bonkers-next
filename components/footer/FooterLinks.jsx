import React from 'react'

const FooterLinks = ({section, links}) => {
  return (
      <div className='my-6'>
          <p className="font-semibold text-xl mb-3">{section}</p>
          <ul>
              {links.map((data,index) => {
                  return (
                      <li key={index}>{data}</li>
                  )
              })}
          </ul>
      </div>
  );
}

export default FooterLinks