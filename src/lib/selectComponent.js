import React from "react";

import Teaser from "../components/Teaser/Teaser";

const Components = {
    "shared.teaser": Teaser,
};

export default function selectComponent(
    { module, __component, uid, ...props },
    isMobile,
    customProps
) {
    if (typeof Components[__component] !== "undefined") {
    return React.createElement(Components[__component], {
        ctype: CType,
        id: uid ? uid : customProps.optionalKey,
        key: uid ? uid : customProps.optionalKey,
        isMobile,
        ...customProps,
        ...props
    });
    }

    return null;
}
