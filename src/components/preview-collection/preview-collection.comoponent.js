import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
const ProviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                ))}
            </div>
        </div >
    )
}

export default ProviewCollection
