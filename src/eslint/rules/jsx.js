module.exports = {
  // Enforce all elements that require alternative text have meaningful information to relay back to end user.
  'jsx-a11y/alt-text': [
    'warn',
    {
      elements: ['img'],
      img: ['Image'],
    },
  ],
  // Enforce all aria-* props are valid
  'jsx-a11y/aria-props': 'warn',
  // Enforce ARIA state and property values are valid
  'jsx-a11y/aria-proptypes': 'warn',
  // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
  'jsx-a11y/aria-unsupported-elements': 'warn',
  // Enforce that elements with ARIA roles must have all required attributes for that role.
  'jsx-a11y/role-has-required-aria-props': 'warn',
  // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
  'jsx-a11y/role-supports-aria-props': 'warn',
};
