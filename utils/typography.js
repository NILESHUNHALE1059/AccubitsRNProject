import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'

// export const typography = () => {
//     const oldTextRender = Text.render
//     Text.render = function (...args) {
//         const origin = oldTextRender.call(this, ...args)
//         return React.cloneElement(origin, {
//             style: [styles.defaultText, origin.props.style],
//         })
//     }
// }

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
export function setDefaultFont() {
    const oldRender = Text.render;
    Text.render = function render(...args) {
        const origin = oldRender.call(this, ...args);
        return React.cloneElement(origin, {
            style: [
                Platform.OS === 'ios' ? {} : { fontFamily: 'Allison-Regular' },
                origin.props.style,
            ],
        });
    };
}

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: 'Allison-Regular',
    }
});