import React from 'react';
import cn from "classnames";

export function Button(props) {
    const {
        id,
        disabled = false,
        name,
        size = 's',
        theme = 'default',
        stretched = false,
        form,
        children,
        style,
        className,
        onClick
    } = props;

    return (
      <button
        id={id}
        type='button'
        name={name}
        onClick={onClick}
        form={form}
        className={cn(
            className,
            'c-button',
            `c-button--theme-${theme}`,
            `c-button--size-${size}`,
            {
              'c-button--disabled': disabled,
              'c-button--stretched': stretched
            }
          )}
        style={style}
        disabled={disabled}
      >
        {children}
      </button>
    );
}
