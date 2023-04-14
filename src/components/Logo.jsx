import React from 'react';

const Logo = (props) => {
    return (
        <div>
          <img className={"image-name " + props.toggle} src="/assets/logo-NFX.png" alt="nfx"/>
        </div>
    );
};

export default Logo;