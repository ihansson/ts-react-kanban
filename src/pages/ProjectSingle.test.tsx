import React from 'react';
import {render, screen} from '@testing-library/react';
import ProjectSingle from './ProjectSingle';
import { RootContext } from "../components/RootContext";

describe('Project Single Page', () => {

    it('should show default project name', () => {
        render(<RootContext><ProjectSingle id="1" /></RootContext>);
        const projectsHeadingElement = screen.getByText(/ProjectItem A/i);
        expect(projectsHeadingElement).toBeInTheDocument();
    });

    it('should show 404 message when project does not exist', () => {
        render(<RootContext><ProjectSingle id="99999999" /></RootContext>);
        const projectsHeadingElement = screen.getByText(/Project Not Found/i);
        expect(projectsHeadingElement).toBeInTheDocument();
    });

});