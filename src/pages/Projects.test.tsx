import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Projects from './Projects';
import {RootContext} from "../components/RootContext";

describe('Projects Page', () => {

    it('should show headings', () => {
        render(<RootContext><Projects/></RootContext>);
        const projectsHeadingElement = screen.getByText(/Your Projects/i);
        expect(projectsHeadingElement).toBeInTheDocument();
        const addProjectHeadingElement = screen.getByText(/Add Project/i);
        expect(addProjectHeadingElement).toBeInTheDocument();
    });

    it('should show projects', () => {
        render(<RootContext><Projects/></RootContext>);
        expect(screen.getByText(/ProjectItem A/i)).toBeInTheDocument();
        expect(screen.getByText(/ProjectItem B/i)).toBeInTheDocument();
    });

    it('can add projects through the add project form', () => {
        render(<RootContext><Projects/></RootContext>);
        expect(screen.getByLabelText(/Project Name/i)).toBeInTheDocument();

        const input = screen.getByLabelText('name-input')
        expect(input).toBeInTheDocument();

        fireEvent.change(input, {target: {value: 'My Test Project'}})

        fireEvent(
            screen.getByText('Submit'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        )

        expect(screen.getByText(/My Test Project/i)).toBeInTheDocument();
    });

    it('can remove project from the project list', () => {
        render(<RootContext><Projects/></RootContext>);
        expect(screen.getByText(/ProjectItem B/i)).toBeInTheDocument();

        const input = screen.getByLabelText('remove-project-2')
        expect(input).toBeInTheDocument();

        fireEvent(
            input,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        )

        expect(screen.queryByText(/ProjectItem B/i)).toBeNull();
    });

})