module.exports = {
  /**
   * Enforces consistent naming for boolean props
   * @reason Type dependent uses TS
   */
  'react/boolean-prop-naming': 'off',
  // Forbid "button" element without an explicit "type" attribute
  'react/button-has-type': 'off',
  /**
   * Enforce all defaultProps are defined and not "required" in propTypes
   * @reason Type dependent uses TS
   */
  'react/default-props-match-prop-types': 'off',
  // Enforce consistent usage of destructuring assignment of props, state, and context
  'react/destructuring-assignment': 'off',
  // Prevent missing displayName in a React component definition
  'react/display-name': 'off',
  // Forbid certain props on components
  'react/forbid-component-props': 'off',
  // Forbid certain props on DOM Nodes
  'react/forbid-dom-props': 'off',
  // Forbid certain elements
  'react/forbid-elements': 'off',
  /**
   * Forbid using another component's propTypes
   * @reason Type dependent uses TS
   */
  'react/forbid-foreign-prop-types': 'off',
  /**
   * Forbid certain propTypes
   * @reason Type dependent uses TS
   */
  'react/forbid-prop-types': 'off',

  // Reports when this.state is accessed within setState
  'react/no-access-state-in-setstate': 'off',

  // Prevent usage of Array index in keys
  'react/no-array-index-key': 'off',

  // Prevent passing of children as props.
  'react/no-children-prop': 'error',
  // Prevent usage of dangerous JSX props
  'react/no-danger': 'off',
  // Report when a DOM element is using both children and dangerouslySetInnerHTML
  'react/no-danger-with-children': 'error',
  // Prevent usage of deprecated methods
  'react/no-deprecated': 'error',
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 'off',
  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 'warn',
  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 'error',
  // Prevent usage of findDOMNode
  'react/no-find-dom-node': 'error',
  /**
   * Prevent usage of isMounted
   * @reason Abandoned the grammar
   */
  'react/no-is-mounted': 'error',
  // Prevent multiple component definition per file
  'react/no-multi-comp': 'off',
  // // Prevent multiple component definition per file
  'react/no-redundant-should-component-update': 'error',
  // Prevent usage of the return value of React.render
  'react/no-render-return-value': 'error',
  // Prevent usage of setState
  'react/no-set-state': 'off',
  // Prevent string definitions for references and prevent referencing this.refs
  'react/no-string-refs': 'error',
  // Report "this" being used in stateless components
  'react/no-this-in-sfc': 'error',
  // Prevent common typos
  'react/no-typos': 'error',
  // Detect unescaped HTML entities, which might represent malformed tags
  'react/no-unescaped-entities': 'error',
  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 'error',
  // Prevent usage of unsafe lifecycle methods
  'react/no-unsafe': [
    'warn',
    {
      checkAliases: true,
    },
  ],
  // Prevent creating unstable components inside components
  'react/no-unstable-nested-components': 'error',
  /**
   * Prevent declaring unused methods of component class
   * @reason Type dependent uses TS
   */
  'react/no-unused-prop-types': 'off',
  // Prevent definition of unused state fields
  'react/no-unused-state': 'off',
  // Prevent definition of unused state fields
  'react/no-will-update-set-state': 'off',
  // Enforce ES5 or ES6 class for React Components
  'react/prefer-es6-class': ['error', 'always'],
  // Require read-only props.
  'react/prefer-read-only-props': 'off',
  // Enforce stateless components to be written as a pure function
  'react/prefer-stateless-function': 'off',
  // Prevent missing props validation in a React component definition
  'react/prop-types': 'off',
  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 'off',
  // Enforce a defaultProps definition for every prop that is not a required prop.
  'react/require-default-props': 'off',
  // Enforce React components to have a shouldComponentUpdate method
  'react/require-optimization': 'off',
  // Enforce ES5 or ES6 class for returning value in render function
  'react/require-render-return': 'error',
  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 'error',
  // Enforce component methods order
  'react/sort-comp': 'off',
  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 'off',
  // State initialization in an ES6 class component should be in a constructor
  'react/state-in-constructor': 'off',
  // Defines where React component static properties should be positioned.
  'react/static-property-placement': 'error',
  // Enforce style prop value is an object
  'react/style-prop-object': 'error',
  // Prevent passing of children to void DOM elements (e.g. <br />).
  'react/void-dom-elements-no-children': 'error',
  'react/function-component-definition': 'off',

  // ====== jsx =======

  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': 'off',
  // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes
  'react/jsx-curly-brace-presence': ['error', 'never'],
  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': 'off',
  // Enforce shorthand or standard form for React fragments
  'react/jsx-fragments': ['error', 'syntax'],
  // Report missing key props in iterators/collection literals
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
    },
  ],
  // Validate JSX maximum depth
  'react/jsx-max-depth': 'off',
  // Enforce no duplicate props
  'react/jsx-no-duplicate-props': 'error',
  // Prevent using string literals in React component definition
  'react/jsx-no-literals': 'off',
  // Disallow unnecessary fragments
  'react/jsx-no-useless-fragment': 'error',
  // Prevent JSX prop spreading
  'react/jsx-props-no-spreading': 'off',
  // Enforce default props alphabetical sorting
  'react/jsx-sort-default-props': 'off',
  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 'off',
  // Prevent React to be marked as unused
  'react/jsx-uses-react': 'error',
  // Prevent variables used in JSX to be marked as unused
  'react/jsx-uses-vars': 'error',
};
