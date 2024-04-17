import React from 'react';
import { useLocation } from 'react-router-dom';

const MySwitch = ({ children }) => {
  const location = useLocation();

  let matchedChild = null;

  React.Children.forEach(children, child => {
    if (!matchedChild && React.isValidElement(child)) {
      const { path, exact } = child.props;
      const match = path ? location.pathname === path : true;

      if (match && (!exact || location.pathname === path)) {
        matchedChild = child;
      }
    }
  });

  return matchedChild ? matchedChild : null;
};

export default MySwitch;