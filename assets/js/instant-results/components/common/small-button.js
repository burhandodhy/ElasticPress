/**
 * Small button component.
 *
 * @param {Object}    props           Props.
 * @param {WPElement} props.children  Children.
 * @param {string}    props.className Class attribute.
 * @return {WPElement} Element.
 */
export default ({ children, className, ...props }) => {
	return (
		<button className={`ep-search-small-button ${className}`} type="button" {...props}>
			{children}
		</button>
	);
};
