import React from 'react';
import { shallow } from "enzyme";

import ErrorBoundary from "./ErrorBoundary";


describe("ErrorBoundary component", () => {
    it("Should set state hasError to true while there is an error and rendering error message", () => {
        const SomeComp = () => <span>SomeComp</span> 
        const tree = shallow(
            <ErrorBoundary>
                <SomeComp />
            </ErrorBoundary>
        );

        expect(tree.state().hasError).toBeFalsy();

        tree.find('SomeComp').simulateError(new Error('error'));
        
        expect(tree.state().hasError).toBeTruthy();
        expect(tree.text()).toBe("Something went wrong. Please check your internet connection and contact support.")
    });
})