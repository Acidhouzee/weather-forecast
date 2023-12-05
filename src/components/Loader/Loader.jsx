import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import { LoaderGlobalStyles } from './Loader.styled';

const Loader = () => {
  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="loader-wrapper"
        colors={['#003b46', '#07575b', '#66a5ad', '#c4dfe6', '#004d47']}
      />
      <LoaderGlobalStyles />
    </div>
  )
}

export default Loader;
