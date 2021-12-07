import React from "react";
import { render } from '@testing-library/react';

import { CheckboxList } from "./CheckboxList.jsx";

describe('CheckboxList', () => {
    test('render CheckboxList snapshot', () => {
        const { asFragment } = render(<CheckboxList />);
        expect(asFragment(<CheckboxList />)).toMatchSnapshot();
    });
});