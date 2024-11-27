import {render, screen} from '@testing-library/react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import {MemoryRouter} from 'react-router-dom';
import HomeRoute from './HomeRoute';