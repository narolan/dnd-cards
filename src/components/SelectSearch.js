import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectSearch(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const style = {
        blockquote: {
            fontStyle: 'italic',
            fontSize: '.75rem',
            margin: '1rem 0',
        },
        label: {
            fontSize: '.75rem',
            fontWeight: 'bold',
            lineHeight: 2,
        },
    };

    const onMenuOpen = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
        }
    }
    const onMenuClose = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    return (
        <form className="form">
            <label style={style.label} id="aria-label" htmlFor="aria-example-input">
                Select a {props.type}
            </label>
            <Select
                aria-labelledby="aria-label"
                inputId="aria-example-input"
                name="aria-live-color"
                onMenuOpen={onMenuOpen}
                onMenuClose={onMenuClose}
                options={props.options}
                onChange={props.action}
            />
        </form>
    );
}
