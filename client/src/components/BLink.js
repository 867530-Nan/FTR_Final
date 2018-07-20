import React, { Component } from 'react'

function logBLinkEvent(hREF, valToSum) {
  var params = {};
  params['HREF'] = hREF;
  window.FB.AppEvents.logEvent('BLink', valToSum, params);
}

function goTo(url, openInNewWindow) {
  return function() {
    logBLinkEvent(url,1)
    if (openInNewWindow) {
      window.open(url);
    } else {
      window.location.href = url;
    }
  }
}

function BLink(props) { //target="_blank"
  return (
    <a alt="facebook analytics link"
    onClick={goTo(props.href, (props.target === "_blank")) }
    {...props}
    />
  )
}

export default BLink;