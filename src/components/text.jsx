import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
    const getClass = () => {
        let className = props.className || ""
        className += props.align ? ` text-${props.align}` : ""
        className += props.xs ? ` text-xs-${props.xs}` : ""
        className += props.sm ? ` text-sm-${props.sm}` : ""
        className += props.md ? ` text-md-${props.md}` : ""
        className += props.lg ? ` text-lg-${props.lg}` : ""
        className += props.xl ? ` text-xl-${props.xl}` : ""
        className += props.start ? ` text-start` : ""
        className += props.center ? ` text-center` : ""
        className += props.end ? ` text-end` : ""
        className += props.wrap ? ` text-wrap` : ""
        className += props.nowrap ? ` text-nowrap` : ""
        className += props.lowercase ? ` text-lowercase` : ""
        className += props.uppercase ? ` text-uppercase` : ""
        className += props.capitalize ? ` text-capitalize` : ""
        className += props.size ? ` fs-${props.size}` : ""
        className += props.bold ? ` fw-bold` : ""
        className += props.bolder ? ` fw-bolder` : ""
        className += props.normal ? ` fw-normal` : ""
        className += props.light ? ` fw-light` : ""
        className += props.lighter ? ` fw-lighter` : ""
        className += props.italic ? ` fst-italic` : ""
        className += props.mono ? ` fst-monospace` : ""
        className += props.underline ? ` text-decoration-underline` : ""
        className += props.strike ? ` text-decoration-line-through` : ""
        className += props.decoration ? ` text-decoration-${props.decoration}` : ""
        className += props.wordbreak ? ` text-break` : ""
        className += props.lineheight ? ` lh-${props.lineheight}` : ""
        className += props.text ? ` text-${props.text}` : ""
        className += props.bg ? ` bg-${props.bg}` : ""
        className += props.reset ? ` text-reset` : ""
        className += props.truncate ? ` d-inline-block text-truncate` : ""

        return className
    }
    const CustomTag =`${props.as ? props.as : "p"}`;

    console.log("PROPS",getClass())
    if (props.href) {
        return (
			<>
				<a href={props.href} style={props.style ? props.style : ""} className={getClass()}>
					{props.children}
				</a>
			</>
		);
    }
    return (<>
    <CustomTag
        style={props.style ? props.style : ""}
        className={getClass()}
            >
            {props.children}
    </CustomTag>
    </>)
}

Text.propTypes = {
    align: PropTypes.oneOf(['start','center','end']),
    xs: PropTypes.oneOf(['start','center','end']),
    sm: PropTypes.oneOf(['start','center','end']),
    md: PropTypes.oneOf(['start','center','end']),
    lg: PropTypes.oneOf(['start','center','end']),
    xl: PropTypes.oneOf(['start','center','end']),
    start: PropTypes.bool,
    center: PropTypes.bool,
    end: PropTypes.bool,
    wrap: PropTypes.bool,
    nowrap: PropTypes.bool,
    lowercase: PropTypes.bool,
    uppercase: PropTypes.bool,
    capitalize: PropTypes.bool,
    size: PropTypes.oneOf(['1','2','3','4','5','6']),
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    normal: PropTypes.bool,
    light: PropTypes.bool,
    lighter: PropTypes.bool,
    italic: PropTypes.bool,
    mono: PropTypes.bool,
    decoration: PropTypes.oneOf(['underline','line-through','none']),
    underline: PropTypes.bool,
    strike: PropTypes.bool,
    wordbreak: PropTypes.bool,
    reset: PropTypes.bool,
    lineheight: PropTypes.oneOf(['1','sm','base','lg']),
    truncate: PropTypes.bool,
    text: PropTypes.string,
    bg: PropTypes.string,
    href: PropTypes.string,
};

export default Text;